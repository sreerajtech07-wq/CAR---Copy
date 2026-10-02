import React, { useEffect, useState } from "react";
import logoImg from "../assets/logo/3m.png";

const HERO_FRAMES = import.meta.glob("../assets/images3/*.png", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const HERO_FRAME_PATHS = Object.keys(HERO_FRAMES).sort();
const FRAME_URLS = HERO_FRAME_PATHS.map((path) => HERO_FRAMES[path]);

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const total = FRAME_URLS.length;

    if (total === 0) {
      // Fallback if no images are present
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    let isCancelled = false;

    // Preload all hero sequence images using JS Image objects
    FRAME_URLS.forEach((url) => {
      const img = new Image();
      img.src = url;

      const handleFinished = () => {
        if (isCancelled) return;
        loadedCount++;
        const currentProg = Math.min(100, Math.round((loadedCount / total) * 100));
        setProgress(currentProg);
      };

      if (img.complete) {
        handleFinished();
      } else {
        img.onload = handleFinished;
        img.onerror = handleFinished;
      }
    });

    return () => {
      isCancelled = true;
      document.body.style.overflow = "";
    };
  }, []);

  // Handle completion fade-out when loading hits 100%
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const unmountTimer = setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 700); // 0.7s smooth GSAP/CSS fade-out transition
        return () => clearTimeout(unmountTimer);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Studio Asset Preloader"
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center select-none transition-all duration-700 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(181,18,27,0.15),transparent_70%)]" />

      {/* 1. Circular 3M Studio Emblem */}
      <div className="relative z-10 w-28 h-28 rounded-full border border-white/20 bg-[#0d0d0d] flex items-center justify-center p-5 shadow-[0_0_60px_rgba(181,18,27,0.35)] animate-pulse">
        <img
          src={logoImg}
          alt="3M Official Emblem"
          style={{ mixBlendMode: "screen" }}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Brand Titles */}
      <div className="relative z-10 text-center mt-6 space-y-1.5">
        <h2 className="tracking-[0.35em] text-white font-bold text-xs sm:text-sm uppercase font-cinematic">
          3M CAR CARE STUDIO
        </h2>
        <p className="tracking-[0.28em] text-amber-400 text-[10px] sm:text-xs font-mono uppercase font-semibold">
          OMR / ECR • CHENNAI
        </p>
      </div>

      {/* 3. Sleek Progress Bar Container */}
      <div className="relative z-10 w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden mt-8 p-0.5 border border-white/10 backdrop-blur-md">
        <div
          className="h-full bg-gradient-to-r from-[#B5121B] via-brand-red to-amber-400 rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(245,158,11,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
