import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { QualityConfig } from "../../hooks/useResponsiveQuality";

gsap.registerPlugin(ScrollTrigger);

interface HeroCanvasProps {
  progress?: number;
  quality?: QualityConfig;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ progress, quality }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Animation and scrubbing refs
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // High-performance canvas frame painter with full-bleed cover scaling & studio vignette
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const videoW = video.videoWidth || 1920;
    const videoH = video.videoHeight || 1080;

    if (video.readyState >= 2) {
      const hRatio = width / videoW;
      const vRatio = height / videoH;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = videoW * ratio;
      const renderHeight = videoH * ratio;
      const offsetX = (width - renderWidth) / 2;
      const offsetY = (height - renderHeight) / 2;

      ctx.drawImage(video, 0, 0, videoW, videoH, offsetX, offsetY, renderWidth, renderHeight);

      // Studio vignette overlay
      const gradVignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradVignette.addColorStop(0, "rgba(5, 6, 7, 0)");
      gradVignette.addColorStop(1, "rgba(5, 6, 7, 0.7)");
      ctx.fillStyle = gradVignette;
      ctx.fillRect(0, 0, width, height);

      // Bottom transition gradient
      const bottomGrad = ctx.createLinearGradient(0, height * 0.85, 0, height);
      bottomGrad.addColorStop(0, "rgba(5, 6, 7, 0)");
      bottomGrad.addColorStop(1, "rgba(5, 6, 7, 0.95)");
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, height * 0.85, width, height * 0.15);
    } else {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);
    }
  }, []);

  // Update target time whenever the parent progress prop changes (if controlled by HeroSection)
  useEffect(() => {
    if (typeof progress === "number") {
      const video = videoRef.current;
      if (video && video.duration && !Number.isNaN(video.duration)) {
        const clamped = Math.max(0, Math.min(1, progress));
        targetTimeRef.current = clamped * video.duration;
      }
    }
  }, [progress]);

  // Self-contained ScrollTrigger fallback on #hero container
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const heroContainer = document.getElementById("hero") || containerRef.current?.parentElement;
    if (!heroContainer) return;

    let trigger: ScrollTrigger | null = null;

    const initScrollTrigger = () => {
      if (trigger) trigger.kill();
      if (!video.duration || Number.isNaN(video.duration)) return;

      trigger = ScrollTrigger.create({
        trigger: heroContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (typeof progress !== "number") {
            const p = Math.max(0, Math.min(1, self.progress));
            targetTimeRef.current = p * video.duration;
          }
        },
      });
    };

    if (video.duration && !Number.isNaN(video.duration)) {
      initScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", initScrollTrigger, { once: true });
    }

    return () => {
      if (trigger) trigger.kill();
    };
  }, [progress]);

  // Video seeking & frame updates
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration) {
        const initP = typeof progress === "number" ? Math.max(0, Math.min(1, progress)) : 0;
        targetTimeRef.current = initP * video.duration;
        video.currentTime = targetTimeRef.current;
      }
      drawFrame();
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      drawFrame();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("canplay", drawFrame);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("canplay", drawFrame);
    };
  }, [drawFrame, progress]);

  // RequestAnimationFrame continuous interpolation loop for ultra-smooth video scrubbing
  useEffect(() => {
    let isRunning = true;

    const updateLoop = () => {
      if (!isRunning) return;

      const video = videoRef.current;
      if (video && video.duration && !Number.isNaN(video.duration)) {
        const target = targetTimeRef.current;
        const current = currentTimeRef.current;
        const delta = target - current;

        // Smooth lerp interpolation without stutter
        if (Math.abs(delta) > 0.005) {
          currentTimeRef.current += delta * 0.25;
        } else {
          currentTimeRef.current = target;
        }

        // Apply to video currentTime if not currently seeking
        if (!isSeekingRef.current && Math.abs(video.currentTime - currentTimeRef.current) > 0.02) {
          isSeekingRef.current = true;
          video.currentTime = currentTimeRef.current;
        }

        // Keep canvas in sync with HTML5 video frame
        if (video.readyState >= 2) {
          drawFrame();
        }
      }

      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      isRunning = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame]);

  // Canvas Resize & DevicePixelRatio handling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, quality?.dpr || 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      drawFrame();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, quality?.dpr]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center bg-studio-canvas"
    >
      {/* Hidden HTML5 video element providing video frames */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        preload="auto"
        muted
        playsInline
        webkit-playsinline="true"
        className="hidden pointer-events-none"
        aria-hidden="true"
      />

      {/* Hardware-accelerated canvas for scroll-scrubbed frames */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block will-change-transform"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default HeroCanvas;
