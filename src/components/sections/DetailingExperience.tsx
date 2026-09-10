import React from "react";

export const DetailingExperience: React.FC = () => {
  const steps = [
    {
      step: "STAGE 01",
      title: "Decontamination & Paint Cleansing",
      description: "Non-contact citrus snow foam, targeted iron fallout removal, and clay bar treatment to remove bonded surface particulate without friction micro-marring.",
    },
    {
      step: "STAGE 02",
      title: "Optical Inspection & Paint Correction",
      description: "Precision multi-angle LED inspection to assess clearcoat condition followed by calibrated dual-action machine compounding to eliminate swirl marks, haze, and oxidation.",
    },
    {
      step: "STAGE 03",
      title: "Refinement & Mirror Gloss Polishing",
      description: "Ultra-fine jewel polishing pad and diminishing abrasives to unlock deep, mirror-like depth and liquid clarity across every automotive panel curve.",
    },
    {
      step: "STAGE 04",
      title: "Cabin Restoration & Engine Care",
      description: "Comprehensive interior extraction, steam conditioning of leather and tactile materials, AC vent sanitization, and detailed engine bay cleansing and dressing.",
    },
  ];

  return (
    <section id="detailing" className="relative w-full bg-dark-950 py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            CRAFT & RESTORATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
              PRECISION PAINT CORRECTION & DETAILING
            </h2>
            <p className="mt-6 text-base text-metallic-300 font-light leading-relaxed">
              Automotive paint is exposed to abrasive dust, harsh UV rays, road contamination, and improper washing swirl marks. Our studio detailing protocols deploy measured machine correction and dedicated inspection bays to bring factory clarity and deep reflection back to life.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-dark-900 border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-brand-red tracking-widest">{item.step}</span>
                  </div>
                  <div className="font-display font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </div>
                  <p className="mt-1 text-xs text-metallic-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-dark-900 aspect-video">
              <img
                src="/assets/services/detailing.jpg"
                alt="Paint Correction & Detailing Studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-white">
                <span>INSPECTION LIGHTBAY // OMR STUDIO</span>
                <span className="text-brand-amber">CALIBRATED SURFACE RESTORATION</span>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-dark-900/80 border border-white/10">
              <div className="font-mono text-xs text-metallic-400 uppercase tracking-wider mb-2">
                VERIFIED DETAILING SERVICES OFFERED:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Exterior Car Detailing",
                  "Interior Car Detailing",
                  "Premium Car Cleaning",
                  "Paint Correction",
                  "Car Polishing",
                  "Car Restoration",
                  "Engine Care",
                  "AC Vent Cleaning",
                ].map((s, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-metallic-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
