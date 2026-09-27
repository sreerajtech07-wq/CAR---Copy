import React, { useState, useEffect } from "react";
import { BUSINESS } from "../data/business";
import { ArrowLeft, Phone } from "lucide-react";
import { CursorEffect } from "../components/common/CursorEffect";
import { Background3D } from "../components/common/Background3D";
import { FlowBackground } from "../components/common/FlowBackground";
import { ParticleNetworkBackground } from "../components/common/ParticleNetworkBackground";
import { FloatingWhatsApp } from "../components/common/FloatingWhatsApp";
import { Lightbox } from "../components/common/Lightbox";
import { staticGalleryData, type GalleryMediaItem } from "../components/sections/StudioMarqueeGallery";

export const GalleryPage: React.FC = () => {
  const [items, setItems] = useState<GalleryMediaItem[]>(staticGalleryData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchFullGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (response.ok) {
          const data = await response.json();
          if (isMounted && data.success && Array.isArray(data.items)) {
            const fetchedItems: GalleryMediaItem[] = data.items;
            const merged = [
              ...staticGalleryData,
              ...fetchedItems.filter((fItem) => {
                const fUrl = fItem.url || fItem.src;
                return !staticGalleryData.some(
                  (sItem) => (sItem.url || sItem.src) === fUrl || sItem.id === fItem.id
                );
              }),
            ];
            setItems(merged);
          }
        }
      } catch (err) {
        console.warn("Could not fetch full ImageKit vault, using static fallback items.", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchFullGallery();
    return () => {
      isMounted = false;
    };
  }, []);

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

  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink antialiased overflow-x-hidden bg-[#050505]">
      <CursorEffect />
      <Background3D />
      <FlowBackground />
      <ParticleNetworkBackground />

      {/* Top Header & Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0c0c0c]/95 border-b border-white/10 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/20 transition-all group z-30 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-brand-red group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME</span>
          </a>

          <div className="text-center hidden sm:block">
            <h1 className="font-cinematic text-lg sm:text-xl font-bold uppercase text-white tracking-wider">
              3M CAR CARE STUDIO MEDIA VAULT
            </h1>
            <p className="font-mono text-[10px] text-metallic-400">
              OMR, CHENNAI • FULL EXECUTIONS SHOWCASE
            </p>
          </div>

          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs uppercase tracking-wider transition-all shadow-md z-30"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">CALL STUDIO</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-24 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest block mb-2">
              COMPLETE STUDIO PORTFOLIO ({items.length} WORKS)
            </span>
            <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight">
              FULL WORK SHOWCASE
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-metallic-300 font-light leading-relaxed">
              Explore 100% of verified photos and studio video clips showcasing Paint Protection Film (PPF), Ceramic & Graphene Coating, Solar Sunfilm, and precision detailing executions at our OMR Chennai studio.
            </p>
          </div>

          {/* Full Showcase Masonry / Grid */}
          {isLoading && items.length === 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-[16/10] rounded-2xl bg-neutral-900/80 border border-neutral-800 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {items.map((item, index) => {
                const videoSrc = item.url || item.src || "";
                const videoPoster =
                  item.poster ||
                  (videoSrc.includes("/upload/")
                    ? videoSrc.replace("/upload/", "/upload/so_0,f_jpg,q_auto,w_800/").replace(/\.[^/.]+$/, ".jpg")
                    : videoSrc.replace(/\.[^/.]+$/, ".jpg"));

                return (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0e0e0e]/92 border border-white/10 hover:border-brand-red/60 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  >
                    {item.type === "video" ? (
                      <div className="relative w-full h-full">
                        <video
                          src={videoSrc}
                          poster={videoPoster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute top-3 right-3 bg-brand-red/90 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-10">
                          VIDEO
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.url || item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* UNIFIED ENHANCED LIGHTBOX MODAL */}
      <Lightbox
        items={items}
        currentIndex={
          selectedMedia
            ? items.findIndex(
                (item) =>
                  item.id === selectedMedia.id ||
                  (item.url || item.src) === (selectedMedia.url || selectedMedia.src)
              )
            : null
        }
        onClose={() => setSelectedMedia(null)}
        onNavigate={(newIdx) => setSelectedMedia(items[newIdx])}
      />

      {/* Footer */}
      <footer className="py-8 bg-transparent relative z-10 text-center font-mono text-xs text-metallic-500 border-t border-white/5">
        <p>
          {BUSINESS.name} • {BUSINESS.address.full}
        </p>
        <p className="mt-1">
          Operating Hours: {BUSINESS.businessHours.display} • Direct Studio: +91 76019 33555 / 666
        </p>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
};

export default GalleryPage;
