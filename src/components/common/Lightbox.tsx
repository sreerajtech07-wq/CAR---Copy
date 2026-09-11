import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  category?: string;
  description?: string;
}

export interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const touchStartXRef = useRef<number | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  // Handle keyboard shortcuts & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe left -> Next
        onNavigate((currentIndex + 1) % images.length);
      } else {
        // Swipe right -> Prev
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-dark-950/95 backdrop-blur-xl p-4 sm:p-8 animate-fade-in text-white select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
          <span className="font-mono text-xs tracking-super-wide uppercase text-metallic-400">
            STUDIO ATELIER LIGHTBOX
          </span>
          <span className="font-mono text-xs text-metallic-500">
            [{currentIndex + 1} / {images.length}]
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-4 py-2 rounded-sm bg-brand-red hover:bg-brand-crimson text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red font-mono text-xs font-bold uppercase tracking-wider border border-white/20 shadow-lg cursor-pointer"
          aria-label="Close fullscreen lightbox"
        >
          <X className="w-4 h-4" />
          <span>✕ CLOSE / BACK</span>
        </button>
      </div>

      {/* Main Image Display */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-dark-900/80 border border-white/15 text-white hover:border-brand-red hover:bg-brand-red/80 transition-all duration-300 backdrop-blur-md"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Container */}
        <div className="relative max-w-6xl max-h-[75vh] flex items-center justify-center rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[75vh] object-contain transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-dark-900/80 border border-white/15 text-white hover:border-brand-red hover:bg-brand-red/80 transition-all duration-300 backdrop-blur-md"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="w-full max-w-3xl mx-auto text-center z-10 p-4 rounded-sm bg-dark-900/80 border border-white/10 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImage.category && (
          <span className="font-mono text-xs text-brand-red tracking-widest uppercase block mb-1">
            {currentImage.category}
          </span>
        )}
        <h3 className="font-cinematic text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
          {currentImage.title}
        </h3>
        {currentImage.description && (
          <p className="mt-1 text-xs sm:text-sm text-metallic-300 max-w-xl mx-auto font-light">
            {currentImage.description}
          </p>
        )}
      </div>
    </div>
  );
};
