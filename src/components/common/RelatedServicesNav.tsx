import React, { useState, useRef } from "react";
import { ArrowRight, Shield, Sparkles, Sun, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { renderWith3MLogo } from "./Brand3MLogo";

interface RelatedServicesNavProps {
  currentServiceId: string;
}

export const RelatedServicesNav: React.FC<RelatedServicesNavProps> = ({ currentServiceId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allServices = [
    {
      id: "ceramic",
      name: "3M Ceramic Coating",
      href: "/ceramic-coating.html",
      icon: Sparkles,
      desc: "9H SiO2 optical gloss & hydrophobic shield",
      price: "₹20,000*",
    },
    {
      id: "graphene",
      name: "3M Graphene Coating",
      href: "/graphene-coating.html",
      icon: Layers,
      desc: "High thermal dissipation carbon matrix",
      price: "₹23,000*",
    },
    {
      id: "ppf",
      name: "3M PPF (Paint Protection Film)",
      href: "/ppf.html",
      icon: Shield,
      desc: "Self-healing TPU physical stone-chip barrier",
      price: "₹600*",
    },
    {
      id: "sunfilm",
      name: "3M Sunfilm",
      href: "/sun-film.html",
      icon: Sun,
      desc: "99% UV rejection & infrared heat shield",
      price: "₹4,500*",
    },
    {
      id: "anti-glare",
      name: "3M Anti-Glare Film",
      href: "/anti-glare-film.html",
      icon: Sun,
      desc: "Night driving headlight glare diffusion",
      price: "₹4,500*",
    },
  ];

  const filtered = allServices.filter((s) => s.id !== currentServiceId);
  const total = filtered.length;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild?.clientWidth || container.clientWidth * 0.82;
    const newIndex = Math.min(
      total - 1,
      Math.max(0, Math.round(scrollLeft / itemWidth))
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || container.clientWidth * 0.82;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-brand-red tracking-widest uppercase block mb-1">
              STUDIO PORTFOLIO EXPLORER
            </span>
            <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase leading-tight">
              EXPLORE RELATED <span className="text-3m-red">3M</span> SERVICES
            </h3>
            <p className="font-mono text-xs text-metallic-400 mt-1 uppercase tracking-wide hidden sm:block">
              COMPLEMENTARY PROTECTIVE TREATMENTS
            </p>
          </div>

          {/* Dynamic 1/N Counter Badge for Mobile View */}
          <div className="flex md:hidden items-center space-x-2 bg-black/60 border border-white/15 backdrop-blur-md px-3 py-1.5 rounded-full font-mono text-xs shadow-lg shrink-0">
            <span className="text-brand-red font-bold">{activeIndex + 1}</span>
            <span className="text-zinc-500">/</span>
            <span className="text-metallic-300">{total}</span>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {filtered.slice(0, 3).map((service) => {
            const IconComp = service.icon;
            return (
              <a
                key={service.id}
                href={service.href}
                className="group p-6 rounded-sm bg-[#0e0e0e]/92 border border-white/10 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-brand-red/10 text-brand-red border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-brand-amber font-bold">
                      Starting {service.price}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-brand-red transition-colors flex items-center">
                    {renderWith3MLogo(service.name)}
                  </h4>
                  <p className="mt-2 text-xs text-metallic-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-metallic-300 group-hover:text-white transition-colors">
                  <span>Explore Service Specs</span>
                  <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Swipe Container with Dynamic 1/N Counter Sync */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {filtered.map((service) => {
              const IconComp = service.icon;
              return (
                <a
                  key={service.id}
                  href={service.href}
                  className="w-[82vw] max-w-[310px] shrink-0 snap-center group p-5 rounded-sm bg-[#0e0e0e]/92 border border-white/10 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-sm bg-brand-red/10 text-brand-red border border-brand-red/20">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[11px] text-brand-amber font-bold">
                        Starting {service.price}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white group-hover:text-brand-red transition-colors flex items-center">
                      {renderWith3MLogo(service.name)}
                    </h4>
                    <p className="mt-2 text-xs text-metallic-400 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-metallic-300">
                    <span>Explore Specs</span>
                    <ArrowRight className="w-4 h-4 text-brand-red" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Swipe controls bar */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
            <div className="flex items-center space-x-1.5">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-brand-red" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed active:bg-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSlide(Math.min(total - 1, activeIndex + 1))}
                disabled={activeIndex === total - 1}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed active:bg-white/20 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
