import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BUSINESS } from "../../data/business";

export const PpfSunFilm: React.FC = () => {
  return (
    <section className="relative w-full bg-dark-950 py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            PHYSICAL DEFENSE & SOLAR SHIELD
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              PAINT PROTECTION FILM & SUN FILM
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            HIGH-IMPACT IMPACT RESISTANCE & SOLAR HEAT MITIGATION
          </p>
        </div>

        {/* Dual Split Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PPF Card */}
          <div className="rounded-sm bg-dark-900 border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="relative h-72 w-full overflow-hidden bg-dark-850">
              <img
                src="/assets/services/ppf.jpg"
                alt="Paint Protection Film Installation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] px-3 py-1 bg-dark-950/80 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                PHYSICAL STONE-CHIP ARMOR
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  EXTERIOR PAINT PRESERVATION
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">
                  Paint Protection Film (PPF)
                </h3>
                <p className="mt-3 text-sm text-metallic-300 font-light leading-relaxed">
                  Driving on high-speed expressways like Rajiv Gandhi Salai (OMR) and East Coast Road (ECR) exposes frontal bodywork to stone chips, flying gravel, and physical abrasion. High-clarity thermoplastic PPF absorbs kinetic impacts, preserving virgin factory paintwork underneath.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-mono text-[11px] text-metallic-400 uppercase tracking-wider mb-2.5">
                    PROTECTION SCOPE
                  </div>
                  <div className="space-y-2">
                    {[
                      "Paint Protection Film Installation",
                      "Scratch Protection",
                      "Stone-Chip Protection",
                      "High-Impact Area Protection (Bumper, Hood, Fenders, Mirrors)",
                      "Exterior Paint Preservation",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-xs text-metallic-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] text-metallic-400">
                  Custom & Full Body Coverage
                </span>
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="font-mono text-xs text-white hover:text-brand-red uppercase tracking-wider font-semibold transition-colors"
                >
                  Consult PPF Coverage →
                </a>
              </div>
            </div>
          </div>

          {/* Sun Film Card */}
          <div className="rounded-sm bg-dark-900 border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="relative h-72 w-full overflow-hidden bg-dark-850">
              <img
                src="/assets/services/sunfilm.jpg"
                alt="Automotive Sun Film Installation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] px-3 py-1 bg-dark-950/80 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                SOLAR OPTICAL CONTROL
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-brand-amber tracking-widest uppercase mb-1">
                  CABIN THERMAL COMFORT
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">
                  Automotive Sun Film
                </h3>
                <p className="mt-3 text-sm text-metallic-300 font-light leading-relaxed">
                  Chennai’s intense tropical climate generates significant cabin heat buildup and UV degradation of interior leather and dashboards. Engineered automotive sun film effectively rejects infrared solar energy, cuts blinding roadway glare, and optimizes AC efficiency.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-mono text-[11px] text-metallic-400 uppercase tracking-wider mb-2.5">
                    SOLAR BENEFITS
                  </div>
                  <div className="space-y-2">
                    {[
                      "Automotive Sun Film",
                      "Heat Reduction",
                      "UV Protection",
                      "Glare Reduction",
                      "Improved Driving Comfort",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-xs text-metallic-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] text-metallic-400">
                  High Optical Clarity Glass
                </span>
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="font-mono text-xs text-white hover:text-brand-amber uppercase tracking-wider font-semibold transition-colors"
                >
                  Inquire Film Specs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
