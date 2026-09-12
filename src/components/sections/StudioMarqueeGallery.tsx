import React from "react";
import { BUSINESS } from "../../data/business";
import { Camera, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export interface MarqueeItem {
  src: string;
  title: string;
  category: string;
}

export const StudioMarqueeGallery: React.FC = () => {
  const marqueeImages: MarqueeItem[] = [
    {
      src: "/assets/services/detailing.jpg",
      title: "Paint Correction & High-CRI Optical Polishing",
      category: "DETAIL ATELIER",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Specular Gloss & Clearcoat Depth Audit",
      category: "SURFACE CRAFT",
    },
    {
      src: "/assets/services/ceramic.jpg",
      title: "Hydrophobic Quartz Ceramic SiO2 Matrix",
      category: "CERAMIC DEFENSE",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "Precision Edge & Splitter Refinement",
      category: "AERODYNAMIC DETAILING",
    },
    {
      src: "/assets/services/ppf.jpg",
      title: "Self-Healing Optical Urethane PPF Installation",
      category: "IMPACT ARMOR",
    },
    {
      src: "/assets/services/graphene.jpg",
      title: "Graphene Thermal Coating Curing Bay",
      category: "MOLECULAR SHIELD",
    },
  ];

  // Quadruple images array for seamless infinite looping scroll
  const items = [...marqueeImages, ...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <section
      id="detailing"
      aria-labelledby="marquee-gallery-title"
      className="relative w-full border-b border-white/10 bg-transparent py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-red/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-end gap-4">
          <div>
            <div className="mb-2.5 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs tracking-super-wide text-brand-red uppercase">
                STUDIO PHOTOGRAPHY SHOWCASE
              </span>
            </div>
            <h2
              id="marquee-gallery-title"
              className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              CRAFT & RESTORATION ATELIER
            </h2>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-metallic-400">
            <Camera className="w-4 h-4 text-brand-amber shrink-0" />
            <span>METTUKUPPAM, OMR STUDIO BAYS • OFFICIAL GALLERY</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Marquee Container with Hover Pause */}
      <div className="group relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Vignettes for Editorial Blend */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-dark-950 via-dark-950/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-dark-950 via-dark-950/70 to-transparent" />

        <div className="flex w-max space-x-5 animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-[320px] sm:w-[420px] aspect-[16/10] shrink-0 rounded-sm overflow-hidden border border-white/10 bg-dark-900 shadow-2xl transition-all duration-300 hover:border-brand-red/60 hover:scale-[1.02]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 transition-opacity duration-300 hover:opacity-50" />
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <span className="font-mono text-[10px] text-brand-amber tracking-widest uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Instagram Button */}
      <div className="mt-10 flex justify-center px-4">
        <a
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-105"
        >
          <InstagramIcon className="w-4 h-4 text-white" />
          <span>VIEW GALLERY ON INSTAGRAM</span>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>
    </section>
  );
};
