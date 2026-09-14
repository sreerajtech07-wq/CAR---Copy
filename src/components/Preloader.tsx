import React, { useEffect, useState } from "react";

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hold preloader briefly on initial load then fade out smoothly
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const unmountTimer = setTimeout(() => {
        setIsVisible(false);
      }, 600); // 0.6s fadeout animation duration
      return () => clearTimeout(unmountTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#090909] flex flex-col items-center justify-center pointer-events-none select-none transition-all duration-600 ease-out ${
        isFadingOut ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
      }`}
    >
      {/* 1. Circular 3M Badge */}
      <div className="w-24 h-24 rounded-full border border-white/10 bg-[#121212] flex items-center justify-center shadow-2xl animate-pulse">
        <span className="text-white font-black text-2xl tracking-tighter font-cinematic">
          3M
        </span>
      </div>

      {/* 2. Brand Typography */}
      <div className="text-center mt-6">
        <h2 className="tracking-[0.35em] text-white font-medium text-xs uppercase font-display">
          3M CAR CARE STUDIO
        </h2>
        <p className="tracking-[0.3em] text-[#C5A880] text-[10px] mt-2 font-mono uppercase font-semibold">
          OMR / ECR • CHENNAI
        </p>
      </div>
    </div>
  );
};
