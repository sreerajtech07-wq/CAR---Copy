import React, { useRef, useState, useEffect } from "react";
import { BUSINESS } from "../../data/business";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

interface GalleryMediaItem {
  id: string;
  name?: string;
  type: "video" | "image";
  url: string;
  previewUrl?: string;
  src?: string;
  poster?: string;
  title: string;
  category: string;
  aspect?: string;
  aspectRatio?: string;
}

export const galleryData: GalleryMediaItem[] = [
  {
    id: "3m-services",
    name: "3M Services",
    title: "Official 3M Studio Execution",
    category: "Precision Detailing",
    type: "video" as const,
    url: "https://res.cloudinary.com/ljrerns0/video/upload/v1789282617/3M_OMR_Services.mp4",
    aspect: "16/9"
  },
  {
    id: "ppf-treatment",
    name: "PPF",
    title: "3M Scotchgard™ Paint Protection Film",
    category: "Armor Defense",
    type: "video" as const,
    url: "https://res.cloudinary.com/ljrerns0/video/upload/v1789282558/PPF.mp4",
    aspect: "16/9"
  },
  {
    id: "sunfilm-shield",
    name: "Sunfilm",
    title: "3M™ Crystalline Solar Infrared Shield",
    category: "Thermal Protection",
    type: "video" as const,
    url: "https://res.cloudinary.com/ljrerns0/video/upload/v1789282533/Sunfilm.mp4",
    aspect: "16/9"
  },
  {
    id: "ceramic-coating",
    name: "Graphene or Ceramic Coating",
    title: "Optical Matrix Ceramic & Graphene Glaze",
    category: "Surface Defense",
    type: "video" as const,
    url: "https://res.cloudinary.com/ljrerns0/video/upload/v1789282597/Graphene_or_Ceramic_coating.mp4",
    aspect: "16/9"
  },
  {
    id: "gallery-ceramic-corr-02",
    name: "Multi-Stage Paint Correction",
    type: "image",
    url: "/assets/services/ceramic.jpg",
    title: "Multi-Stage Paint Correction",
    category: "SURFACE RESTORATION",
    aspect: "16/9"
  }
];

const GALLERY_ITEMS = galleryData;

export const StudioMarqueeGallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(null);

  // Auto-scrolling marquee effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    const scrollStep = () => {
      if (!isHovered && !isDragging && !selectedMedia && track) {
        track.scrollLeft += 1;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, selectedMedia]);

  // Safe body scroll lock cleanup on modal state change / unmount
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Video hover-to-play handlers with abort error catching
  const handleMouseEnterVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (selectedMedia) return;
    video.play().catch(() => {});
  };

  const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.pause();
  };

  const handleCardClick = (item: GalleryMediaItem) => {
    setSelectedMedia(item);
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative w-full border-b border-neutral-900 bg-transparent py-12 md:py-16 overflow-hidden select-none"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col justify-between border-b border-neutral-900 pb-5 md:flex-row md:items-end gap-3">
          <div>
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase block mb-1 font-mono">
              STUDIO WORK IN MOTION
            </span>
            <h2
              id="gallery-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-wide uppercase"
            >
              3M OMR GALLERY
            </h2>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              Drag horizontally to explore • Click card to preview media • Hover video cards to preview studio execution
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Continuous Auto-Scrolling Marquee Track */}
      <div 
        className="relative w-full overflow-hidden group/marquee"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          id="gallery-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none px-6 md:px-12 py-4"
        >
          {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="gallery-card w-[300px] sm:w-[380px] md:w-[440px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative cursor-pointer group shadow-2xl transition-all duration-500 hover:border-red-600/60 hover:scale-[1.02]"
            >
              {item.type === "video" ? (
                <video
                  src={item.url || item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  onMouseEnter={handleMouseEnterVideo}
                  onMouseLeave={handleMouseLeaveVideo}
                  className="w-full h-full object-cover pointer-events-none"
                />
              ) : (
                <img
                  src={item.url || item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Overlay UI */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="pointer-events-none absolute bottom-4 left-5 right-5 z-10">
                <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase block mb-1 font-mono">
                  {item.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white font-heading line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Instagram Button */}
      <div className="mt-8 flex justify-center px-4">
        <a
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105"
        >
          <InstagramIcon className="w-4 h-4 text-white" />
          <span>VIEW GALLERY ON INSTAGRAM</span>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* ISOLATED LIGHTBOX PREVIEW MODAL */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Top-Left BACK Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
            }}
            className="fixed top-5 left-5 z-[10000] flex items-center gap-2 px-5 py-2.5 bg-neutral-900/90 hover:bg-red-600 text-white rounded-full border border-neutral-700 shadow-2xl transition-all cursor-pointer group"
            aria-label="Back to Gallery"
          >
            <span className="text-sm font-bold text-white group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-xs font-mono font-bold tracking-widest text-white">BACK</span>
          </button>

          {/* Previous / Next Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedMedia.id);
              const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
              setSelectedMedia(GALLERY_ITEMS[prevIndex]);
            }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[10000] p-3 bg-neutral-900/80 hover:bg-red-600 text-white rounded-full border border-neutral-700 transition-all cursor-pointer hidden sm:flex"
            aria-label="Previous Media"
          >
            <span className="text-lg font-bold">‹</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedMedia.id);
              const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
              setSelectedMedia(GALLERY_ITEMS[nextIndex]);
            }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[10000] p-3 bg-neutral-900/80 hover:bg-red-600 text-white rounded-full border border-neutral-700 transition-all cursor-pointer hidden sm:flex"
            aria-label="Next Media"
          >
            <span className="text-lg font-bold">›</span>
          </button>

          {/* Active Media Container */}
          <div
            className="w-full max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                key={selectedMedia.url}
                src={selectedMedia.url || selectedMedia.src}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full max-h-[75vh] md:max-h-[80vh] rounded-xl object-contain shadow-2xl bg-black border border-neutral-800 mx-auto"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedMedia.url || selectedMedia.src}
                alt={selectedMedia.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
              />
            )}
            <div className="mt-4 text-center">
              <span className="text-xs text-red-500 font-mono font-bold tracking-widest uppercase block mb-1">
                {selectedMedia.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {selectedMedia.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudioMarqueeGallery;
