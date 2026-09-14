import React, { useEffect, useRef, useState } from "react";
import type { QualityConfig } from "../../hooks/useResponsiveQuality";

interface HeroCanvasProps {
  progress: number;
  quality: QualityConfig;
}

const HERO_FRAMES = import.meta.glob("../../assets/images3/*.png", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;
const HERO_FRAME_PATHS = Object.keys(HERO_FRAMES).sort();
const TOTAL_FRAMES = HERO_FRAME_PATHS.length;

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ progress, quality }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedCountRef = useRef<number>(0);
  const [loadTick, setLoadTick] = useState<number>(0);
  const lastDrawnIndexRef = useRef<number>(-1);

  const currentTargetIndexRef = useRef<number>(0);

  // Progressive frame preloading
  useEffect(() => {
    let isCancelled = false;
    const images = imagesRef.current;

    const getFrameUrl = (index: number) => HERO_FRAMES[HERO_FRAME_PATHS[index]];

    // Helper to load a single frame
    const loadFrame = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (images[index]) {
          resolve(images[index]!);
          return;
        }

        const img = new Image();
        const frameUrl = getFrameUrl(index);
        if (!frameUrl) {
          resolve(img);
          return;
        }
        img.src = frameUrl;
        img.onload = () => {
          if (!isCancelled) {
            images[index] = img;
            loadedCountRef.current++;
            // Force redraw if target index frame or initial batch frame arrives
            if (index === currentTargetIndexRef.current || index === 0 || loadedCountRef.current <= 5) {
              setLoadTick((t) => t + 1);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          resolve(img);
        };
      });
    };

    // Priority Stage 1: First frame immediately
    loadFrame(0).then(() => {
      if (isCancelled) return;

      // Priority Stage 2: Spread the first loads across the whole timeline.
      const priorityIndices: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES; i += 3) {
        priorityIndices.push(i);
      }

      // Load priority frames in small batches
      const loadBatch = async (indices: number[], batchSize = 6) => {
        for (let i = 0; i < indices.length; i += batchSize) {
          if (isCancelled) return;
          const chunk = indices.slice(i, i + batchSize);
          await Promise.all(chunk.map((idx) => loadFrame(idx)));
        }
      };

      loadBatch(priorityIndices).then(() => {
        if (isCancelled) return;

        // Priority Stage 3: Load all remaining frames
        const remainingIndices: number[] = [];
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          if (!images[i]) {
            remainingIndices.push(i);
          }
        }
        loadBatch(remainingIndices, 8);
      });
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // Render current frame to canvas whenever progress or resize changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Determine target frame index
    const targetIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));
    currentTargetIndexRef.current = targetIndex;

    // Find nearest loaded frame
    let frameToDraw: HTMLImageElement | null = imagesRef.current[targetIndex];
    if (!frameToDraw) {
      // Search outward for closest loaded frame
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIndex - offset;
        const next = targetIndex + offset;
        if (prev >= 0 && imagesRef.current[prev]) {
          frameToDraw = imagesRef.current[prev];
          break;
        }
        if (next < TOTAL_FRAMES && imagesRef.current[next]) {
          frameToDraw = imagesRef.current[next];
          break;
        }
      }
    }

    if (!frameToDraw) {
      // If still nothing, fill background with dark studio
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);
      return;
    }

    lastDrawnIndexRef.current = targetIndex;

    const imgW = frameToDraw.naturalWidth || 1280;
    const imgH = frameToDraw.naturalHeight || 720;

    // Adaptive focal-point cover scaling: Math.max ensures full-bleed viewport coverage
    const hRatio = width / imgW;
    const vRatio = height / imgH;
    const ratio = Math.max(hRatio, vRatio);

    const renderWidth = imgW * ratio;
    const renderHeight = imgH * ratio;
    const offsetX = (width - renderWidth) / 2;
    const offsetY = (height - renderHeight) / 2;

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, width, height);

    // Draw frame centered with exact focal alignment
    ctx.drawImage(
      frameToDraw,
      0,
      0,
      imgW,
      imgH,
      offsetX,
      offsetY,
      renderWidth,
      renderHeight
    );

    // Subtle edge vignette to blend with dark page background
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

    // Soft bottom gradient for natural transition to the next section
    const bottomGrad = ctx.createLinearGradient(0, height * 0.85, 0, height);
    bottomGrad.addColorStop(0, "rgba(5, 6, 7, 0)");
    bottomGrad.addColorStop(1, "rgba(5, 6, 7, 0.95)");
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, height * 0.85, width, height * 0.15);
  }, [progress, quality, loadTick]);

  // Handle Canvas Resize & DPI
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = quality.dpr;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      // Trigger redraw
      lastDrawnIndexRef.current = -1;
      setLoadTick((t) => t + 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [quality.dpr]);

  return (
    <div className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center bg-studio-canvas">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
