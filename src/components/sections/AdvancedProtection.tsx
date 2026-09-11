import React from "react";
import { CheckCircle } from "lucide-react";
import { BUSINESS } from "../../data/business";

export const AdvancedProtection: React.FC = () => {
  const protectionTiers = [
    {
      id: "ceramic",
      name: "CERAMIC COATING",
      badge: "HYDROPHOBIC MATRIX",
      description:
        "High-density liquid polymer that chemically integrates with the factory clearcoat. Produces an intense candy-like optical gloss, tight contact water beading, and persistent contamination defense.",
      capabilities: [
        "Premium Ceramic Coating",
        "Paint Protection",
        "Gloss Enhancement",
        "Hydrophobic Protection",
        "Long-lasting Surface Protection",
      ],
      image: "/assets/services/ceramic.jpg",
    },
    {
      id: "graphene",
      name: "GRAPHENE COATING",
      badge: "THERMAL CONDUCTIVE DEFENSE",
      description:
        "Engineered with a graphene molecular lattice structure that minimizes surface heat absorption, drastically reduces water spotting, and provides higher resistance against bird droppings and tree sap.",
      capabilities: [
        "Advanced Graphene Coating",
        "Enhanced Paint Protection",
        "High-Gloss Finish",
        "Water & Contamination Resistance",
      ],
      image: "/assets/services/graphene.jpg",
    },
    {
      id: "borophene",
      name: "BOROPHENE COATING",
      badge: "EXTREME TENSILE ATOM LAYER",
      description:
        "Modern atomic-scale surface fortification delivering superior mechanical shear resistance, enhanced durability under harsh environmental conditions, and an ultra-deep reflective gloss.",
      capabilities: [
        "Advanced Surface Protection",
        "Paint Protection",
        "Enhanced Durability",
        "Premium Finish",
      ],
      image: "/assets/services/borophene.jpg",
    },
    {
      id: "antirust",
      name: "ANTI-RUST & UNDERBODY",
      badge: "COASTAL CORROSION DEFENSE",
      description:
        "Formulated specifically for vehicles operating in coastal regions like Chennai OMR/ECR. Shields chassis floorpans, subframes, wheel arches, and suspension mounts from saline moisture and corrosion.",
      capabilities: [
        "Anti-Rust Treatment",
        "Underbody Protection",
        "Corrosion Prevention",
        "Long-Term Vehicle Protection",
      ],
      image: "/assets/services/antirust.jpg",
    },
  ];

  return (
    <section id="protection" className="relative w-full bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
                MOLECULAR BARRIER COATINGS
              </span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              ADVANCED PROTECTION
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            CERAMIC • GRAPHENE • BOROPHENE • ANTI-RUST UNDERBODY
          </p>
        </div>

        {/* Protection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protectionTiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden bg-dark-850">
                <img
                  src={tier.image}
                  alt={tier.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] px-3 py-1 rounded-sm bg-dark-950/80 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                  {tier.badge}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-sm text-metallic-300 font-light leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="font-mono text-[11px] text-metallic-400 uppercase tracking-wider mb-2.5">
                      OFFICIAL CAPABILITIES
                    </div>
                    <ul className="space-y-2">
                      {tier.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center space-x-2.5 text-xs text-metallic-200">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-metallic-400">
                    Studio Application // OMR
                  </span>
                  <a
                    href={`tel:${BUSINESS.phoneClean}`}
                    className="font-mono text-xs text-brand-red hover:text-white uppercase tracking-wider font-semibold transition-colors"
                  >
                    Inquire Spec →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
