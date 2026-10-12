import React, { useRef, useState, useEffect } from "react";
import { BUSINESS } from "../../data/business";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/Icons";
import { Lightbox } from "../common/Lightbox";

export interface GalleryMediaItem {
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

export const staticGalleryData: GalleryMediaItem[] = [
  {
    id: "gallery-ceramic-glaze",
    name: "Ceramic Coating",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/ceramic_coating.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/ceramic_coating.jpg",
    title: "Optical Matrix Ceramic Glaze",
    category: "SURFACE DEFENSE",
    aspect: "16/9",
  },
  {
    id: "gallery-ppf-armor",
    name: "PPF Installation",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183651.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183651.jpg",
    title: "3M Scotchgard™ Paint Protection Film",
    category: "ARMOR DEFENSE",
    aspect: "16/9",
  },
  {
    id: "gallery-graphene-shield",
    name: "Graphene Coating",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/graphene_coating.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/graphene_coating.jpg",
    title: "10H Graphene Matrix Protection",
    category: "SURFACE DEFENSE",
    aspect: "16/9",
  },
  {
    id: "gallery-sunfilm-shield",
    name: "Sunfilm Protection",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm1.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm1.jpg",
    title: "3M™ Crystalline Solar Infrared Shield",
    category: "THERMAL PROTECTION",
    aspect: "16/9",
  },
  {
    id: "gallery-ppf-precision",
    name: "PPF Precision Wrap",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183630.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183630.jpg",
    title: "Custom Edge-Wrapped PPF Execution",
    category: "ARMOR DEFENSE",
    aspect: "16/9",
  },
  {
    id: "gallery-ceramic-corr-02",
    name: "Multi-Stage Paint Correction",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175215.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175215.jpg",
    title: "Multi-Stage Paint Correction",
    category: "SURFACE RESTORATION",
    aspect: "16/9",
  },
  {
    id: "gallery-ppf-installation",
    name: "PPF Custom Application",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175052.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175052.jpg",
    title: "Custom Cut PPF Application",
    category: "ARMOR DEFENSE",
    aspect: "16/9",
  },
  {
    id: "gallery-borophene-shield",
    name: "Borophene Shield",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175050.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175050.jpg",
    title: "2D Borophene Atomic Layer",
    category: "SURFACE RESTORATION",
    aspect: "16/9",
  },
  {
    id: "gallery-sunfilm-install",
    name: "Sunfilm Protection",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175220.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175220.jpg",
    title: "3M Crystalline Solar Defense",
    category: "THERMAL SHIELD",
    aspect: "16/9",
  },
  {
    id: "gallery-sunfilm-crystalline",
    name: "Solar Heat Rejection Film",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm3.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm3.jpg",
    title: "3M Optical Film Clarity",
    category: "THERMAL SHIELD",
    aspect: "16/9",
  },
  {
    id: "gallery-detailing-craft",
    name: "Precision Detailing Finish",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175213.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175213.jpg",
    title: "Studio High-Gloss Mirror Finish",
    category: "PRECISION DETAILING",
    aspect: "16/9",
  },
  {
    id: "gallery-ppf-hood-wrap",
    name: "Scotchgard Full Body Armor",
    type: "image",
    url: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183639.jpg",
    src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183639.jpg",
    title: "Full Contour Seamless Fit",
    category: "ARMOR DEFENSE",
    aspect: "16/9",
  },
];

export const galleryData = staticGalleryData;

export const StudioMarqueeGallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<GalleryMediaItem[]>(staticGalleryData);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(null);

  // Fetch dynamic gallery items count & list from serverless API endpoint
  useEffect(() => {
    let isMounted = true;
    const fetchGalleryMedia = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (response.ok) {
          const data = await response.json();
          if (isMounted && data.success && Array.isArray(data.items) && data.items.length > 0) {
            const getCleanUrlKey = (urlStr?: string) =>
              (urlStr || "").split("?")[0].replace(/\/+$/, "").toLowerCase();

            const staticKeys = new Set(
              staticGalleryData.map((sItem) => getCleanUrlKey(sItem.url || sItem.src))
            );

            const uniqueFetched = data.items.filter((cItem: any) => {
              const cKey = getCleanUrlKey(cItem.url || cItem.src);
              if (!cKey || staticKeys.has(cKey)) return false;
              staticKeys.add(cKey);
              return true;
            });

            setItems([...staticGalleryData, ...uniqueFetched]);
          }
        }
      } catch (err) {
        console.warn("Could not fetch ImageKit dynamic gallery, using local default fallback.", err);
      }
    };

    fetchGalleryMedia();
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-scrolling marquee effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    const scrollStep = () => {
      if (!isHovered && !isDragging && !selectedMedia && track) {
        track.scrollLeft += 4;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, selectedMedia, items]);

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

  const handleCardClick = (item: GalleryMediaItem) => {
    setSelectedMedia(item);
  };

  // Filter out any video items so only valid photo/image cards are displayed without blank black boxes
  const validImageItems = items.filter((item) => item.type !== "video" && (item.url || item.src));

  // Duplicate items for continuous auto-scrolling loop
  const displayItems = validImageItems.length > 0 ? [...validImageItems, ...validImageItems] : [];

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
              STUDIO WORK SHOWCASE
            </span>
            <h2
              id="gallery-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-wide uppercase leading-tight"
            >
              <span className="text-3m-red">3M</span>
              <span>OMR GALLERY</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              Drag horizontally to explore • Click card to preview high-resolution studio execution
            </p>
          </div>

          {/* Header Action Link to Dedicated Full Showcase Page */}
          <div className="shrink-0">
            <a
              href="/gallery.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/40 bg-red-500/10 hover:bg-red-600 hover:text-white text-red-400 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:scale-105 active:scale-95"
            >
              <span>VIEW FULL GALLERY ({validImageItems.length || "ALL"}) ↗</span>
            </a>
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
          {displayItems.map((item, index) => {
            const itemUrl = item.url || item.src || "";
            const optimizedUrl =
              itemUrl.includes("/upload/") && !itemUrl.includes("/w_800")
                ? itemUrl.replace("/upload/", "/upload/w_800,c_limit,f_auto,q_auto/")
                : itemUrl;

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleCardClick(item)}
                className="gallery-card w-[300px] sm:w-[380px] md:w-[440px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative cursor-pointer group shadow-2xl transition-all duration-500 hover:border-red-600/60 hover:scale-[1.02]"
              >
                <img
                  src={optimizedUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            );
          })}
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

      {/* UNIFIED ENHANCED LIGHTBOX MODAL */}
      <Lightbox
        items={validImageItems}
        currentIndex={
          selectedMedia
            ? validImageItems.findIndex(
                (item) =>
                  item.id === selectedMedia.id ||
                  (item.url || item.src) === (selectedMedia.url || selectedMedia.src)
              )
            : null
        }
        onClose={() => setSelectedMedia(null)}
        onNavigate={(newIdx) => setSelectedMedia(validImageItems[newIdx])}
      />
    </section>
  );
};

export default StudioMarqueeGallery;
