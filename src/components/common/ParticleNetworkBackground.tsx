import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface PointerPosition {
  x: number;
  y: number;
  active: boolean;
}

const CONNECTION_DISTANCE = 125;
const POINTER_DISTANCE = 160;
interface ParticleNetworkBackgroundProps {
  particleColor?: string;
  particleAlpha?: [number, number];
  connectionAlpha?: number;
  mouseConnectionAlpha?: number;
  canvasOpacity?: number;
}

export const ParticleNetworkBackground: React.FC<ParticleNetworkBackgroundProps> = ({
  particleColor = "181, 18, 27",
  particleAlpha = [0.12, 0.24],
  connectionAlpha = 0.06,
  mouseConnectionAlpha = 0.12,
  canvasOpacity = 0.32,
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
      const area = width * height;
      const baseCount = Math.round(area / 15000);
      const maximum = width < 768 ? 45 : width < 1024 ? 70 : 100;
      const minimum = width < 768 ? 30 : width < 1024 ? 50 : 70;
      return Math.min(maximum, Math.max(minimum, baseCount));
    };

    const createParticles = () => {
      particles = Array.from({ length: getParticleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        radius: 0.7 + Math.random() * 0.7,
        opacity: particleAlpha[0] + Math.random() * (particleAlpha[1] - particleAlpha[0]),
      }));
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

        if (pointer.active && !coarsePointerQuery.matches) {
          const pointerDx = pointer.x - particle.x;
          const pointerDy = pointer.y - particle.y;
          const pointerDistanceSquared = pointerDx * pointerDx + pointerDy * pointerDy;

          if (pointerDistanceSquared < POINTER_DISTANCE * POINTER_DISTANCE && pointerDistanceSquared > 1) {
            const distance = Math.sqrt(pointerDistanceSquared);
            const influence = (1 - distance / POINTER_DISTANCE) * 0.008;
            particle.vx -= (pointerDx / distance) * influence;
            particle.vy -= (pointerDy / distance) * influence;
          }
        }

        const particleAlpha = particle.opacity * (isReducedMotion ? 0.7 : 1);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particleColor}, ${particleAlpha})`;
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared >= CONNECTION_DISTANCE * CONNECTION_DISTANCE) continue;

          const distance = Math.sqrt(distanceSquared);
          const opacity = (1 - distance / CONNECTION_DISTANCE) * connectionAlpha;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(${particleColor}, ${opacity})`;
          context.lineWidth = 1.0;
          context.stroke();
        }

        if (pointer.active && !coarsePointerQuery.matches) {
          const pointerDx = pointer.x - particle.x;
          const pointerDy = pointer.y - particle.y;
          const pointerDistanceSquared = pointerDx * pointerDx + pointerDy * pointerDy;

          if (pointerDistanceSquared < POINTER_DISTANCE * POINTER_DISTANCE) {
            const distance = Math.sqrt(pointerDistanceSquared);
            const opacity = (1 - distance / POINTER_DISTANCE) * mouseConnectionAlpha;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(${particleColor}, ${opacity})`;
            context.lineWidth = 1.2;
            context.stroke();
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
  }, [connectionAlpha, mouseConnectionAlpha, particleAlpha, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: canvasOpacity }}
    />
  );
};
