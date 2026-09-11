import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  opacity: number;
  layer: number; // 0: background (slow, small), 1: mid, 2: foreground (faster, larger)
}

interface PointerPosition {
  x: number;
  y: number;
  active: boolean;
}

interface ParticleNetworkBackgroundProps {
  particleColor?: string; // RGB values e.g. "138, 21, 37"
  lineColor?: string;     // RGB values e.g. "103, 13, 26"
  canvasOpacity?: number;
}

export const ParticleNetworkBackground: React.FC<ParticleNetworkBackgroundProps> = ({
  particleColor = "138, 21, 37",
  lineColor = "103, 13, 26",
  canvasOpacity = 0.85,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const pointer: PointerPosition = { x: 0, y: 0, active: false };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrameId: number | null = null;
    let isReducedMotion = reducedMotionQuery.matches;

    const getParticleCount = () => {
      const w = width;
      if (w < 768) return 45;       // Mobile: 30-60
      if (w < 1024) return 75;      // Tablet: 60-90
      return 110;                   // Desktop: 80-120
    };

    const createParticles = () => {
      const count = getParticleCount();
      particles = Array.from({ length: count }, () => {
        // Conceptual depth layers: 0 (bg), 1 (mid), 2 (fg)
        const rand = Math.random();
        const layer = rand < 0.5 ? 0 : rand < 0.85 ? 1 : 2;

        let radius = 1.0;
        let speedMult = 0.08;
        let opacity = 0.35;

        if (layer === 0) {
          // Background layer: small, slow, low opacity
          radius = 0.8 + Math.random() * 0.5;
          speedMult = 0.06;
          opacity = 0.25 + Math.random() * 0.2;
        } else if (layer === 1) {
          // Mid layer: medium size & speed
          radius = 1.4 + Math.random() * 0.8;
          speedMult = 0.12;
          opacity = 0.45 + Math.random() * 0.25;
        } else {
          // Foreground layer: slightly larger, brighter, warm highlight potential
          radius = 2.2 + Math.random() * 1.0;
          speedMult = 0.20;
          opacity = 0.65 + Math.random() * 0.25;
        }

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMult,
          vy: (Math.random() - 0.5) * speedMult,
          radius,
          baseRadius: radius,
          opacity,
          layer,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const connectionDist = width < 768 ? 95 : 125;
      const pointerDist = 150;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!isReducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -20) particle.x = width + 20;
          if (particle.x > width + 20) particle.x = -20;
          if (particle.y < -20) particle.y = height + 20;
          if (particle.y > height + 20) particle.y = -20;
        }

        // Mouse interaction (Desktop only)
        if (pointer.active && !coarsePointerQuery.matches && !isReducedMotion) {
          const pointerDx = pointer.x - particle.x;
          const pointerDy = pointer.y - particle.y;
          const pointerDistSq = pointerDx * pointerDx + pointerDy * pointerDy;

          if (pointerDistSq < pointerDist * pointerDist && pointerDistSq > 1) {
            const dist = Math.sqrt(pointerDistSq);
            const influence = (1 - dist / pointerDist) * 0.005 * (particle.layer + 1);
            particle.vx -= (pointerDx / dist) * influence;
            particle.vy -= (pointerDy / dist) * influence;
          }
        }

        // Draw Particle
        const particleAlpha = particle.opacity * (isReducedMotion ? 0.6 : 1.0);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 1.35, 0, Math.PI * 2);
        
        if (particle.layer === 2 && Math.random() < 0.15) {
          // Subtle warm-white highlight for foreground depth
          context.fillStyle = `rgba(255, 235, 235, ${particleAlpha * 0.9})`;
        } else {
          context.fillStyle = `rgba(${particleColor}, ${particleAlpha * 1.15})`;
        }
        context.fill();

        // Connect to nearby particles with light-trace 3D geometry lines
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distSq = dx * dx + dy * dy;

          if (distSq >= connectionDist * connectionDist) continue;

          const dist = Math.sqrt(distSq);
          const lineAlpha = (1 - dist / connectionDist) * 0.38 * (particle.opacity * other.opacity);
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
          context.lineWidth = 2.2;
          context.shadowBlur = 6;
          context.shadowColor = `rgba(${particleColor}, 0.5)`;
          context.stroke();
          context.shadowBlur = 0;
        }

        // Connect to Mouse Cursor with 3D light-trace line
        if (pointer.active && !coarsePointerQuery.matches && !isReducedMotion) {
          const pointerDx = pointer.x - particle.x;
          const pointerDy = pointer.y - particle.y;
          const pointerDistSq = pointerDx * pointerDx + pointerDy * pointerDy;

          if (pointerDistSq < pointerDist * pointerDist) {
            const dist = Math.sqrt(pointerDistSq);
            const lineAlpha = (1 - dist / pointerDist) * 0.45;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(${particleColor}, ${lineAlpha})`;
            context.lineWidth = 2.5;
            context.shadowBlur = 8;
            context.shadowColor = `rgba(${particleColor}, 0.6)`;
            context.stroke();
            context.shadowBlur = 0;
          }
        }
      }
    };

    const animate = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      isReducedMotion = event.matches;
      if (isReducedMotion) {
        if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        draw();
      } else if (animationFrameId === null) {
        animate();
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    if (!coarsePointerQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    if (!isReducedMotion) animate();

    return () => {
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, [canvasOpacity, lineColor, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: canvasOpacity }}
    />
  );
};
