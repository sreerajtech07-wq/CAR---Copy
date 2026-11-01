import { useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { QualityConfig } from "../../hooks/useResponsiveQuality";

gsap.registerPlugin(ScrollTrigger);

export interface HeroCanvasHandle {
  setProgress: (p: number) => void;
}

export interface HeroCanvasProps {
  progress?: number;
  quality?: QualityConfig;
}

export const HeroCanvas = forwardRef<HeroCanvasHandle, HeroCanvasProps>(({ progress, quality }, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Animation and scrubbing refs
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const isLoopRunningRef = useRef<boolean>(false);
  const isIntersectingRef = useRef<boolean>(true);
  const isVisibleRef = useRef<boolean>(typeof document !== "undefined" ? !document.hidden : true);
  const hasRenderedFirstFrameRef = useRef<boolean>(false);
  const isSettledRef = useRef<boolean>(false);

  // Gradient caching refs to eliminate per-frame GC allocations
  const cachedGradientsRef = useRef<{
    width: number;
    height: number;
    vignette: CanvasGradient | null;
    bottom: CanvasGradient | null;
  }>({
    width: 0,
    height: 0,
    vignette: null,
    bottom: null,
  });

  // High-performance canvas frame painter with full-bleed cover scaling & studio vignette
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    const videoW = video.videoWidth || 1920;
    const videoH = video.videoHeight || 1080;

    if (video.readyState >= 2) {
      hasRenderedFirstFrameRef.current = true;
      const hRatio = width / videoW;
      const vRatio = height / videoH;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = videoW * ratio;
      const renderHeight = videoH * ratio;
      const offsetX = (width - renderWidth) / 2;
      const offsetY = (height - renderHeight) / 2;

      ctx.drawImage(video, 0, 0, videoW, videoH, offsetX, offsetY, renderWidth, renderHeight);

      // Cached studio vignette overlay
      let gradients = cachedGradientsRef.current;
      if (gradients.width !== width || gradients.height !== height || !gradients.vignette || !gradients.bottom) {
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

        const bottomGrad = ctx.createLinearGradient(0, height * 0.85, 0, height);
        bottomGrad.addColorStop(0, "rgba(5, 6, 7, 0)");
        bottomGrad.addColorStop(1, "rgba(5, 6, 7, 0.95)");

        cachedGradientsRef.current = {
          width,
          height,
          vignette: gradVignette,
          bottom: bottomGrad,
        };
        gradients = cachedGradientsRef.current;
      }

      if (gradients.vignette) {
        ctx.fillStyle = gradients.vignette;
        ctx.fillRect(0, 0, width, height);
      }

      // Bottom transition gradient
      if (gradients.bottom) {
        ctx.fillStyle = gradients.bottom;
        ctx.fillRect(0, height * 0.85, width, height * 0.15);
      }
    } else if (!hasRenderedFirstFrameRef.current) {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);
    }
  }, []);

  // Loop control
  const wakeUpdateLoop = useCallback(() => {
    if (isLoopRunningRef.current) return;
    if (!isIntersectingRef.current || !isVisibleRef.current) return;

    isLoopRunningRef.current = true;

    const loop = () => {
      if (!isLoopRunningRef.current) return;

      const video = videoRef.current;
      if (video && video.duration && !Number.isNaN(video.duration)) {
        const target = targetTimeRef.current;
        const current = currentTimeRef.current;
        const delta = target - current;

        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Smooth lerp or direct snap for reduced motion
        if (prefersReducedMotion) {
          currentTimeRef.current = target;
        } else if (Math.abs(delta) > 0.003) {
          currentTimeRef.current += delta * 0.25;
        } else {
          currentTimeRef.current = target;
        }

        // Apply to video currentTime if not currently seeking
        if (!isSeekingRef.current && Math.abs(video.currentTime - currentTimeRef.current) > 0.02) {
          isSeekingRef.current = true;
          try {
            video.currentTime = currentTimeRef.current;
          } catch {
            isSeekingRef.current = false;
          }
          setTimeout(() => {
            isSeekingRef.current = false;
          }, 150);
        }

        // Draw frame if ready
        if (video.readyState >= 2) {
          drawFrame();
        }

        // Settle detection: if delta is negligible and video has caught up, pause loop until next scroll
        if (
          Math.abs(delta) <= 0.003 &&
          !isSeekingRef.current &&
          Math.abs(video.currentTime - currentTimeRef.current) <= 0.02
        ) {
          isSettledRef.current = true;
          isLoopRunningRef.current = false;
          rafIdRef.current = null;
          return;
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
  }, [drawFrame]);

  const pauseUpdateLoop = useCallback(() => {
    isLoopRunningRef.current = false;
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  // Update target time and wake loop
  const updateTargetTime = useCallback((p: number) => {
    const video = videoRef.current;
    if (video && video.duration && !Number.isNaN(video.duration)) {
      const clamped = Math.max(0, Math.min(1, p));
      targetTimeRef.current = clamped * video.duration;
      isSettledRef.current = false;
      wakeUpdateLoop();
    }
  }, [wakeUpdateLoop]);

  // Expose imperative handle for zero-rerender parent driving
  useImperativeHandle(ref, () => ({
    setProgress: (p: number) => {
      updateTargetTime(p);
    },
  }), [updateTargetTime]);

  // Update target time whenever the parent progress prop changes (if controlled by prop)
  useEffect(() => {
    if (typeof progress === "number") {
      updateTargetTime(progress);
    }
  }, [progress, updateTargetTime]);

  // IntersectionObserver to pause loop when Hero is out of viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const intersecting = entry ? entry.isIntersecting : true;
        isIntersectingRef.current = intersecting;
        if (intersecting) {
          wakeUpdateLoop();
        } else {
          pauseUpdateLoop();
        }
      },
      { rootMargin: "150px 0px 150px 0px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [wakeUpdateLoop, pauseUpdateLoop]);

  // Page Visibility API to pause rendering when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      const visible = !document.hidden;
      isVisibleRef.current = visible;
      if (visible && isIntersectingRef.current) {
        wakeUpdateLoop();
      } else {
        pauseUpdateLoop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [wakeUpdateLoop, pauseUpdateLoop]);

  // Load video via Blob URL for 100% reliable random-access frame seeking across all CDNs
  useEffect(() => {
    let isCancelled = false;
    let blobUrl: string | null = null;

    const loadVideoBlob = async () => {
      try {
        const response = await fetch("/hero.mp4");
        if (!response.ok) return;
        const blob = await response.blob();
        if (isCancelled) return;

        blobUrl = URL.createObjectURL(blob);
        const video = videoRef.current;
        if (video) {
          video.src = blobUrl;
          video.load();
        }
      } catch (err) {
        console.warn("Direct blob loading fallback to standard source:", err);
      }
    };

    loadVideoBlob();

    return () => {
      isCancelled = true;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
      pauseUpdateLoop();
    };
  }, [pauseUpdateLoop]);

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
            updateTargetTime(self.progress);
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
  }, [progress, updateTargetTime]);

  // Video seeking & frame updates (stable listeners, does not re-subscribe on progress)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration) {
        video.currentTime = targetTimeRef.current;
      }
      drawFrame();
      wakeUpdateLoop();
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
  }, [drawFrame, wakeUpdateLoop]);

  // Canvas Resize & DevicePixelRatio handling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, quality?.dpr || 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      // Invalidate cached gradients on resize
      cachedGradientsRef.current.width = 0;

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
});

HeroCanvas.displayName = "HeroCanvas";

export default HeroCanvas;
