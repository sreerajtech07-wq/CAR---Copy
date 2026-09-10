import React from "react";
import { BUSINESS } from "../../data/business";
import { ShieldCheck, MapPin, Clock } from "lucide-react";

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-dark-950 py-24 sm:py-32 border-b border-white/10 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-2.5 mb-6">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            STUDIO PROFILE // ARCHITECTURE
          </span>
        </div>

        {/* Large Cinematic Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
              {BUSINESS.name}
            </h2>
            <div className="mt-3 font-mono text-sm tracking-widest text-brand-red uppercase">
              {BUSINESS.category}
            </div>
            <p className="mt-6 text-base sm:text-lg text-metallic-300 leading-relaxed font-light">
              {BUSINESS.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4 font-mono text-xs">
            <div className="p-5 rounded-sm bg-dark-900/90 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3 text-metallic-400 mb-2">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span className="tracking-widest uppercase">STUDIO LOCATION</span>
              </div>
              <div className="text-metallic-200 text-sm leading-snug">
                {BUSINESS.address.full}
              </div>
              <div className="mt-2 text-metallic-400 text-xs">
                Landmark: {BUSINESS.landmark}
              </div>
            </div>

            <div className="p-5 rounded-sm bg-dark-900/90 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3 text-metallic-400 mb-2">
                <Clock className="w-4 h-4 text-brand-amber" />
                <span className="tracking-widest uppercase">OPERATING HOURS</span>
              </div>
              <div className="text-white text-sm font-semibold">
                {BUSINESS.businessHours.display}
              </div>
              <div className="mt-2 text-metallic-400 text-xs">
                Dedicated bay scheduling available all 7 days.
              </div>
            </div>

            <div className="p-5 rounded-sm bg-dark-900/90 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3 text-metallic-400 mb-2">
                <ShieldCheck className="w-4 h-4 text-metallic-300" />
                <span className="tracking-widest uppercase">AUTHORITATIVE STANDARDS</span>
              </div>
              <div className="text-metallic-200 text-sm">
                Authentic 3M automotive science, dedicated dust-controlled lighting bays, and precision detailing protocols.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
