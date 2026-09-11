import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbox, type LightboxImage } from "../common/Lightbox";
import { Maximize2, Camera } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const DetailingExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryImages: LightboxImage[] = [
    {
      src: "/assets/services/detailing.jpg",
      title: "Paint Correction & Dual-Action Polishing",
      category: "STUDIO INSPECTION BAY",
      description: "High-CRI optical light bay compounding eliminating swirl marks and micro-marring across automotive clearcoat.",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Specular Gloss Measurement & Surface Audit",
      category: "OPTICAL CLARITY",
      description: "Pre-coating clearcoat thickness inspection and paint depth audit for maximum gloss potential.",
    },
    {
      src: "/assets/services/ceramic.jpg",
      title: "Hydrophobic Quartz Nano-Coating Curing",
      category: "CERAMIC PROTECTION",
      description: "Covalent SiO2 molecular bonding producing intense water contact angles and high-gloss depth.",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "Aerodynamic Front Apron & Edge Refinement",
      category: "PRECISION CRAFT",
      description: "Micro-pad dual action polishing on complex splitters, grills, and carbon fiber surface curves.",
    },
    {
      src: "/assets/services/ppf.jpg",
      title: "Invisible Self-Healing PPF Edge Wrapping",
      category: "IMPACT DEFENSE",
      description: "High-grade optical urethane film custom fitted to prevent road stone chips and physical scratches.",
    },
    {
      src: "/assets/services/graphene.jpg",
      title: "Graphene Thermal Matrix Curing Atelier",
      category: "MOLECULAR SHIELD",
      description: "Dust-controlled cleanroom climate stabilization for permanent reduced water-spotting defense.",
    },
  ];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".editorial-gallery-reveal", {
        y: 28,
        autoAlpha: 0,
        immediateRender: false,
        duration: 0.85,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="detailing"
      aria-labelledby="gallery-title"
      className="relative w-full border-b border-white/10 bg-dark-950/90 py-24 sm:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="editorial-gallery-reveal mb-14 flex flex-col justify-between border-b border-white/10 pb-7 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs tracking-super-wide text-brand-red uppercase">
                STUDIO PHOTOGRAPHY SHOWCASE
              </span>
            </div>
            <h2 id="gallery-title" className="font-cinematic text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
              CRAFT & RESTORATION ATELIER
            </h2>
          </div>
          <div className="mt-4 flex items-center space-x-2 font-mono text-xs text-metallic-400 md:mt-0">
            <Camera className="w-4 h-4 text-brand-amber" />
            <span>METTUKUPPAM, OMR STUDIO BAYS • CLICK PHOTO TO VIEW LIGHTBOX</span>
          </div>
        </div>

        {/* Full Premium Asymmetric Editorial Gallery Grid */}
        <div className="editorial-gallery-reveal space-y-4">
          {/* Top Row: 1 Large Hero Featured Image (70%) + 1 Tall Card (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Featured Hero Photo */}
            <div
              onClick={() => setActiveLightboxIndex(0)}
              className="lg:col-span-8 group relative rounded-sm overflow-hidden border border-white/15 bg-dark-900 aspect-[16/10] sm:aspect-[16/9] cursor-pointer shadow-2xl"
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 border border-white/20 text-white group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase block mb-1">
                  FEATURED WORK // {galleryImages[0].category}
                </span>
                <h3 className="font-cinematic text-xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  {galleryImages[0].title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-metallic-300 font-light max-w-xl hidden sm:block">
                  {galleryImages[0].description}
                </p>
              </div>
            </div>

            {/* Secondary Asymmetric Card */}
            <div
              onClick={() => setActiveLightboxIndex(1)}
              className="lg:col-span-4 group relative rounded-sm overflow-hidden border border-white/15 bg-dark-900 aspect-[4/3] lg:aspect-auto cursor-pointer shadow-xl"
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 border border-white/20 text-white group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-mono text-[10px] text-brand-amber tracking-widest uppercase block mb-1">
                  {galleryImages[1].category}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                  {galleryImages[1].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Equal/Asymmetric Quad Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.slice(2).map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveLightboxIndex(i + 2)}
                className="group relative rounded-sm overflow-hidden border border-white/10 bg-dark-900 aspect-[4/3] cursor-pointer shadow-lg hover:border-brand-red/50 transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-85 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 p-2 rounded-full bg-dark-950/70 text-white/80 group-hover:text-white group-hover:bg-brand-red transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[9px] text-brand-amber tracking-widest uppercase block mb-0.5">
                    {img.category}
                  </span>
                  <div className="font-display text-xs sm:text-sm font-semibold text-white truncate">
                    {img.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        images={galleryImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </section>
  );
};
