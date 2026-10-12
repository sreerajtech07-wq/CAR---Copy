import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export interface LightboxMediaItem {
  id?: string;
  src?: string;
  url?: string;
  title?: string;
  name?: string;
  category?: string;
  description?: string;
  type?: "image" | "video";
  poster?: string;
}

export type LightboxImage = LightboxMediaItem;

export interface LightboxProps {
  items?: LightboxMediaItem[];
  images?: LightboxMediaItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

// Utility to check if a string contains raw camera/video filenames or timestamps
export const isRawFilename = (str?: string): boolean => {
  if (!str || typeof str !== "string") return true;
  return /videoshot|img[_-]|dsc[_-]|vid[_-]|\d{6,}/i.test(str);
};

// Generates a clean, professional studio title, stripping away all raw file names
export const getCleanMediaTitle = (item?: LightboxMediaItem | null): string => {
  if (!item) return "3M Studio Precision Craft";

  const rawTitle = item.title || item.name;
  if (rawTitle && !isRawFilename(rawTitle)) {
    return rawTitle;
  }

  const category = item.category?.toUpperCase() || "";
  if (category.includes("PPF") || category.includes("ARMOR")) {
    return "3M Scotchgard™ PPF Protection";
  }
  if (category.includes("CERAMIC") || category.includes("GRAPHENE") || category.includes("SURFACE")) {
    return "3M Ceramic & Graphene Coating";
  }
  if (category.includes("SUNFILM") || category.includes("THERMAL")) {
    return "3M Crystalline Solar Sunfilm";
  }
  if (category.includes("BOROPHENE")) {
    return "3M Borophene Atomic Defense";
  }
  if (category.includes("RUST") || category.includes("UNDERBODY")) {
    return "3M Anti-Rust Underbody Defense";
  }
  if (category.includes("RESTORATION") || category.includes("CORRECTION") || category.includes("DETAILING")) {
    return "Multi-Stage Paint Restoration";
  }

  return item.type === "video" ? "3M Official Studio Video Execution" : "3M Studio Precision Craft";
};

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const mediaList = items || images || [];
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < mediaList.length;
  const currentItem = isOpen ? mediaList[currentIndex] : null;

  // Keyboard controls and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        onNavigate((currentIndex - 1 + mediaList.length) % mediaList.length);
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        onNavigate((currentIndex + 1) % mediaList.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, mediaList.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  const mediaUrl = currentItem.url || currentItem.src || "";
  const cleanTitle = getCleanMediaTitle(currentItem);

  // Native Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    // Only trigger horizontal swipe if horizontal displacement exceeds vertical displacement & threshold is met
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped Left -> Move to Next
        onNavigate((currentIndex + 1) % mediaList.length);
      } else {
        // Swiped Right -> Move to Previous
        onNavigate((currentIndex - 1 + mediaList.length) % mediaList.length);
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + mediaList.length) % mediaList.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % mediaList.length);
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-3 sm:p-6 text-white select-none pointer-events-auto transition-opacity duration-300"
      onClick={() => onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="3M Studio Media Viewer"
    >
      {/* Top Bar Controls Below Navbar Clearance (top-16 sm:top-20) */}
      <div
        className="flex items-center justify-between z-[100002] w-full max-w-7xl mx-auto pointer-events-auto shrink-0 pt-16 sm:pt-20 pb-2 px-1 sm:px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            type="button"
            onClick={() => onClose()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-2xl transition-all cursor-pointer active:scale-95"
            aria-label="Back to Homepage"
          >
            <ArrowLeft className="w-4 h-4 text-[#ED1C24]" />
            <span>BACK</span>
          </button>
          <span className="font-mono text-xs text-metallic-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full font-bold">
            {currentIndex + 1} / {mediaList.length}
          </span>
        </div>

        <button
          onClick={() => onClose()}
          type="button"
          className="flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all duration-300 focus:outline-none font-mono text-xs font-bold uppercase tracking-wider shadow-2xl cursor-pointer active:scale-95 z-[100002]"
          aria-label="Close fullscreen lightbox"
        >
          <X className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">CLOSE</span>
        </button>
      </div>

      {/* Main Touch Swipeable Media Container */}
      <div
        className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden w-full max-w-6xl mx-auto"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Persistent Responsive Left Arrow Button */}
        {mediaList.length > 1 && (
          <button
            onClick={handlePrev}
            type="button"
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[100001] w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black/75 border border-white/25 text-white hover:bg-brand-red hover:border-brand-red active:scale-90 transition-all duration-300 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.9)] cursor-pointer"
            aria-label="Previous Media"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Media Preview Box */}
        <div
          key={currentIndex ?? 0}
          className="relative max-w-full max-h-[85vh] sm:max-h-[88vh] flex items-center justify-center rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black animate-fade-in"
        >
          {currentItem.type === "video" ? (
            <video
              key={mediaUrl}
              src={mediaUrl}
              poster={currentItem.poster}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="max-w-full max-h-[82vh] sm:max-h-[86vh] object-contain rounded-xl bg-black shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={mediaUrl}
              src={mediaUrl}
              alt={cleanTitle}
              className="max-w-full max-h-[82vh] sm:max-h-[86vh] object-contain rounded-xl shadow-2xl"
            />
          )}
        </div>

        {/* Persistent Responsive Right Arrow Button */}
        {mediaList.length > 1 && (
          <button
            onClick={handleNext}
            type="button"
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[100001] w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black/75 border border-white/25 text-white hover:bg-brand-red hover:border-brand-red active:scale-90 transition-all duration-300 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.9)] cursor-pointer"
            aria-label="Next Media"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
