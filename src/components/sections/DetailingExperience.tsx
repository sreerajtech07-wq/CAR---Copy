import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUSINESS } from "../../data/business";
import { InstagramIcon } from "../common/Icons";
import { ArrowUpRight, Camera } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface GalleryItem {
  src: string;
  title: string;
  category?: string;
  description?: string;
}

export const DetailingExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const galleryImages: GalleryItem[] = [
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
      className="relative w-full border-b border-white/10 bg-transparent py-24 sm:py-32 overflow-hidden"
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
            <span>METTUKUPPAM, OMR STUDIO BAYS • OFFICIAL GALLERY</span>
          </div>
        </div>

        {/* Full Premium Asymmetric Editorial Gallery Grid */}
        <div className="editorial-gallery-reveal space-y-4">
          {/* Top Row: 1 Large Hero Featured Image (70%) + 1 Tall Card (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Featured Hero Photo */}
            <div className="lg:col-span-8 group relative rounded-sm overflow-hidden border border-white/15 bg-dark-900 aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase block mb-1">
                  FEATURED WORK // {galleryImages[0].category}
                </span>
                <h3 className="font-cinematic text-xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  {galleryImages[0].title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-metallic-200 font-light max-w-xl hidden sm:block">
                  {galleryImages[0].description}
                </p>
              </div>
            </div>

            {/* Secondary Asymmetric Card */}
            <div className="lg:col-span-4 group relative rounded-sm overflow-hidden border border-white/15 bg-dark-900 aspect-[4/3] lg:aspect-auto shadow-xl">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 z-10">
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
                className="group relative rounded-sm overflow-hidden border border-white/10 bg-dark-900 aspect-[4/3] shadow-lg hover:border-brand-red/50 transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
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

        {/* View Gallery Instagram CTA Button */}
        <div className="editorial-gallery-reveal mt-12 flex justify-center">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-105"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>VIEW GALLERY ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
