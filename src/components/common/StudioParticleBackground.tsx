import React, { useEffect, useRef } from "react";

export interface StudioParticleBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  particleColor?: string; // e.g. "180, 24, 40"
  glowColor?: string;     // e.g. "235, 35, 50"
  auraColor?: string;     // e.g. "220, 20, 35"
  lineColor?: string;     // e.g. "145, 18, 32"
  density?: "low" | "medium" | "high";
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  glow: boolean;
}

export const StudioParticleBackground: React.FC<StudioParticleBackgroundProps> = ({
  className = "fixed inset-0 pointer-events-none z-0",
  style,
  particleColor = "180, 24, 40",
  glowColor = "235, 35, 50",
  auraColor = "220, 20, 35",
  lineColor = "145, 18, 32",
  density = "medium",
  opacity = 0.85,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = reducedMotionQuery.matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId: number | null = null;
    let isRunning = false;
    let isIntersecting = true;
    let isVisible = typeof document !== "undefined" ? !document.hidden : true;
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let lastTime = performance.now();

    const getParticleCount = () => {
      const w = width || (typeof window !== "undefined" ? window.innerWidth : 1200);
      let base = 120;
      if (w < 768) base = 50;
      else if (w < 1024) base = 80;

      if (density === "low") return Math.round(base * 0.55);
      if (density === "high") return Math.round(base * 1.25);
      return base;
    };

    const createParticles = () => {
      const count = getParticleCount();
      particles = Array.from({ length: count }, () => {
        const rand = Math.random();
        const layer = rand < 0.5 ? 0 : rand < 0.85 ? 1 : 2;
        let radius = 1.0;
        let speedMult = 0.08;
        let pOpacity = 0.45;

        if (layer === 0) {
          radius = 1.0 + Math.random() * 0.6;
          speedMult = 0.06;
          pOpacity = 0.35 + Math.random() * 0.25;
        } else if (layer === 1) {
          radius = 1.8 + Math.random() * 0.9;
          speedMult = 0.12;
          pOpacity = 0.55 + Math.random() * 0.3;
        } else {
          radius = 2.8 + Math.random() * 1.2;
          speedMult = 0.18;
          pOpacity = 0.75 + Math.random() * 0.25;
        }

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMult,
          vy: (Math.random() - 0.5) * speedMult,
          radius,
          opacity: pOpacity,
          glow: layer === 2,
        };
      });
    };

    const resize = () => {
      const computedPos = window.getComputedStyle(canvas).position;
      const isFixed = computedPos === "fixed";

      if (isFixed) {
        width = window.innerWidth;
        height = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        const rect = parent ? parent.getBoundingClientRect() : null;
        width = rect?.width || window.innerWidth;
        height = rect?.height || (parent ? parent.clientHeight : window.innerHeight);
      }

      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
      if (isReducedMotion) {
        draw(false);
      }
    };

    const draw = (updatePositions: boolean = true, delta: number = 1.0) => {
      ctx.clearRect(0, 0, width, height);

      const len = particles.length;
      const maxDist = width < 768 ? 75 : 100;
      const maxDistSq = maxDist * maxDist;

      // Update positions
      if (updatePositions && !isReducedMotion) {
        for (let i = 0; i < len; i++) {
          const p = particles[i];
          p.x += p.vx * delta;
          p.y += p.vy * delta;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }
      }

      // Draw glowing nodes and ambient red embers
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Soft aura glow on selected particles
        if (p.glow) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${auraColor}, 0.14)`;
          ctx.fill();
        }

        // Particle core point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.glow
          ? `rgba(${glowColor}, ${p.opacity})`
          : `rgba(${particleColor}, ${p.opacity * 0.45})`;
        ctx.fill();

        // Delicate connecting filaments (O(N) with nearby neighbor window)
        if (!isScrolling && !isReducedMotion && i % 2 === 0) {
          const limit = Math.min(i + 8, len);
          for (let j = i + 1; j < limit; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const lineOpacity = (1 - dist / maxDist) * 0.15;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${lineColor}, ${lineOpacity})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }
    };

    const render = (time: number) => {
      if (!isRunning) return;

      const delta = Math.min((time - lastTime) / 16.67, 2.0);
      lastTime = time;

      draw(true, delta);

      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!isRunning && isIntersecting && isVisible && !isReducedMotion) {
        isRunning = true;
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (isRunning) {
        isRunning = false;
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    // Scroll throttle to avoid filament calculation during high-velocity scrolls
    const onScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    // Viewport IntersectionObserver (only for non-fixed localized containers)
    let observer: IntersectionObserver | null = null;
    const computedPos = window.getComputedStyle(canvas).position;
    if (computedPos !== "fixed") {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isIntersecting = entry ? entry.isIntersecting : true;
          if (isIntersecting) {
            startLoop();
          } else {
            stopLoop();
          }
        },
        { threshold: 0.02, rootMargin: "80px 0px 80px 0px" }
      );
      observer.observe(canvas);
    }

    // Visibility API (pauses when user switches to another tab)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Reduced motion preference listener
    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        stopLoop();
        draw(false);
      } else {
        startLoop();
      }
    };
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    resize();
    if (isReducedMotion) {
      draw(false);
    } else {
      startLoop();
    }

    return () => {
      stopLoop();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [auraColor, density, glowColor, lineColor, opacity, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    />
  );
};

export const ParticleNetworkBackground = StudioParticleBackground;
export default StudioParticleBackground;
