import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { renderWith3MLogo } from "../common/Brand3MLogo";

export const WhyProfessional: React.FC = () => {
  const comparisons = [
    {
      title: "WASHING & CONTACT METHODS",
      risks: "Roadside washing utilizes contaminated towels, abrasive sponges, and recycled water containing fine grit that inflicts circular swirl marks, webbing, and dulls clearcoat reflection.",
      studio: "Two-bucket method with grit guards, high-lubricity pH-balanced foam cleansers, and ultra-plush microfibers to ensure scratch-free paint cleansing.",
    },
    {
      title: "MACHINE POLISHING PRECISION",
      risks: "Aggressive rotary polishers in inexperienced hands generate high surface friction that strips excessive clearcoat, creates unsightly buffer trails (holograms), and burns sharp body edges.",
      studio: "Calibrated dual-action polishers with diminishing micro-abrasives and constant optical inspection, removing microscopic defects while conserving factory clearcoat thickness.",
    },
    {
      title: "COASTAL CORROSION & UV DEFENSE",
      risks: "Chennai's tropical coastal humidity, salty atmospheric moisture, and intense UV rays cause premature clearcoat oxidation, paint yellowing, and underbody structural corrosion.",
      studio: "Systematic multi-layer defense utilizing ceramic/graphene barriers, anti-rust underbody treatments, and solar control films engineered for enduring environmental endurance.",
    },
    {
      title: "PRESERVATION OF VEHICLE VALUE",
      risks: "Neglected clearcoats and deteriorated interiors significantly diminish vehicle aesthetics and resale asset valuation.",
      studio: "Meticulous paint preservation, deep conditioning of cabin materials, and stone-chip protection ensure your vehicle retains pristine aesthetic appeal.",
    },
  ];

  return (
    <section className="relative w-full bg-dark-900 py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            STANDARDS & METHODOLOGY
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              WHY PROFESSIONAL CAR CARE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            PRESERVING CLEARCOAT INTEGRITY THROUGH SCIENTIFIC CRAFT
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-sm bg-dark-950 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-metallic-400 tracking-widest uppercase mb-4 pb-3 border-b border-white/10">
                  {item.title}
                </div>

                <div className="space-y-4">
                  {/* Risks / Non-professional */}
                  <div className="p-4 rounded-sm bg-red-950/20 border border-red-900/30">
                    <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase mb-1.5 font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>The Risk of Improper Maintenance</span>
                    </div>
                    <p className="text-xs text-metallic-300 font-light leading-relaxed">
                      {item.risks}
                    </p>
                  </div>

                  {/* Studio standard */}
                  <div className="p-4 rounded-sm bg-emerald-950/20 border border-emerald-900/30">
                    <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase mb-1.5 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span className="flex items-center">{renderWith3MLogo("3M Studio Standard")}</span>
                    </div>
                    <p className="text-xs text-metallic-300 font-light leading-relaxed">
                      {item.studio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
