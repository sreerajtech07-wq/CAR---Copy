import React, { useRef, useEffect } from "react";

interface FlowParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  targetOpacity: number;
  hue: number;
  speed: number;
  angle: number;
  distance: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export const FlowBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<FlowParticle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: -10000, y: -10000 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const { width, height } = canvas;
      const particleCount = Math.min(80, Math.floor((width * height) / 15000));
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.min(width, height) * 0.4;
        const baseX = width / 2 + Math.cos(angle) * distance;
        const baseY = height / 2 + Math.sin(angle) * distance;

        particlesRef.current.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: 0,
          vy: 0,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          targetOpacity: Math.random() * 0.3 + 0.1,
          hue: Math.random() > 0.7 ? 45 : 0,
          speed: Math.random() * 0.008 + 0.002,
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 30 + 10,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      const { width, height } = canvas;
      timeRef.current += 0.016;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const time = timeRef.current;

      particlesRef.current.forEach((p) => {
        p.angle += p.speed;
        const waveX = Math.sin(p.angle) * p.distance;
        const waveY = Math.cos(p.angle * 0.7) * p.distance * 0.5;

        p.x = p.baseX + waveX;
        p.y = p.baseY + waveY;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 200;

        if (dist < influenceRadius && dist > 0) {
          const force = (1 - dist / influenceRadius) * 0.5;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
          p.targetOpacity = Math.min(0.8, p.targetOpacity + 0.02);
          if (p.hue === 0) p.hue = 45;
        } else {
          p.targetOpacity = Math.max(0.1, p.targetOpacity - 0.005);
          if (p.hue === 45 && Math.random() < 0.001) p.hue = 0;
        }

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;

        p.opacity += (p.targetOpacity - p.opacity) * 0.05;

        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        const goldAlpha = p.hue === 45 ? p.opacity : 0;
        const whiteAlpha = p.hue === 0 ? p.opacity : 0;

        gradient.addColorStop(0, `rgba(255, 204, 51, ${goldAlpha * 0.6})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${whiteAlpha * 0.3})`);
        gradient.addColorStop(1, `rgba(255, 204, 51, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        if (p.opacity > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.hue === 45
            ? `rgba(255, 204, 51, ${p.opacity * 0.8})`
            : `rgba(255, 255, 255, ${p.opacity * 0.5})`;
          ctx.fill();
        }
      });

      drawConnections(ctx, particlesRef.current);
      drawAmbientGlow(ctx, width, height, time);

      animationRef.current = requestAnimationFrame(animate);
    };

      const drawConnections = (
      ctx: CanvasRenderingContext2D,
      particles: FlowParticle[]
    ) => {
      const maxDist = 180;
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15 * Math.min(particles[i].opacity, particles[j].opacity);
            if (opacity > 0.01) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 204, 51, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();
    };

    const drawAmbientGlow = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      time: number
    ) => {
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const glow1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time * 0.1) * 100,
        height * 0.3 + Math.cos(time * 0.08) * 80,
        0,
        width * 0.3 + Math.sin(time * 0.1) * 100,
        height * 0.3 + Math.cos(time * 0.08) * 80,
        Math.min(width, height) * 0.6
      );
      glow1.addColorStop(0, "rgba(255, 204, 51, 0.02)");
      glow1.addColorStop(0.5, "rgba(255, 204, 51, 0.005)");
      glow1.addColorStop(1, "rgba(255, 204, 51, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 0.07) * 120,
        height * 0.7 + Math.sin(time * 0.09) * 90,
        0,
        width * 0.7 + Math.cos(time * 0.07) * 120,
        height * 0.7 + Math.sin(time * 0.09) * 90,
        Math.min(width, height) * 0.5
      );
      glow2.addColorStop(0, "rgba(220, 38, 38, 0.015)");
      glow2.addColorStop(0.5, "rgba(220, 38, 38, 0.003)");
      glow2.addColorStop(1, "rgba(220, 38, 38, 0)");

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};