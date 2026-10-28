import React from "react";
import { CheckCircle2 } from "lucide-react";
import { getWhatsAppInquiryUrl } from "../../utils/whatsapp";
import { getImageKitUrl } from "../../utils/imagekit";

export interface ServiceCardData {
  id: string;
  name: string;
  price: string;
  badge?: string;
  description: string;
  capabilities: string[];
  image: string;
  route?: string;
}

export const ALL_9_SERVICES: ServiceCardData[] = [
  {
    id: "antirust",
    name: "3M Antirust Coating",
    price: "₹2,900*",
    badge: "CORROSION BARRIER",
    description:
      "Heavy-duty anti-corrosion barrier engineered to shield internal body panels and chassis from coastal saline humidity.",
    capabilities: [
      "Anti-Rust Treatment",
      "Cavity Wax Protection",
      "Moisture Barrier",
      "Long-Term Protection",
    ],
    image: getImageKitUrl("antirust.jpg"),
    route: "/anti-rust.html",
  },
  {
    id: "underbody",
    name: "3M Underbody Coating",
    price: "₹2,900*",
    badge: "UNDERCHASSIS SHIELD",
    description:
      "Thick bituminous underbody armor shielding vehicle undercarriage against stone chipping, road grime, and water contact.",
    capabilities: [
      "Undercarriage Shield",
      "Stone Chip Defense",
      "Sound Dampening",
      "Anti-Corrosion",
    ],
    image: getImageKitUrl("underbody.jpg"),
    route: "/anti-rust.html",
  },
  {
    id: "interior",
    name: "3M Interior",
    price: "₹1,650*",
    badge: "CABIN RECONDITIONING",
    description:
      "Complete deep-clean cabin treatment restoring upholstery, trim surfaces, dashboard, and carpets.",
    capabilities: [
      "Deep Fabric Cleansing",
      "Leather Conditioning",
      "Trim Revitalization",
      "Stain Removal",
    ],
    image: getImageKitUrl("3mgallery/Videoshot_20260917_175216.jpg"),
    route: "/additional-services.html",
  },
  {
    id: "germ-kleen",
    name: "3M Germ Kleen",
    price: "₹2,850*",
    badge: "99.9% STERILIZATION",
    description:
      "Medical-grade antimicrobial interior fumigation and contact sterilization eliminating 99.9% of bacteria and allergens.",
    capabilities: [
      "Microbial Sterilization",
      "Air Duct Sanitation",
      "Allergen Neutralization",
      "Odor Elimination",
    ],
    image: getImageKitUrl("Germkleen.webp"),
    route: "/additional-services.html",
  },
  {
    id: "polish",
    name: "3M Polish",
    price: "₹4,600*",
    badge: "PAINT REFINEMENT",
    description:
      "Multi-stage machine paint refinement polishing out micro-swirls and restoring factory paint gloss.",
    capabilities: [
      "Swirl Removal",
      "Gloss Enhancement",
      "Clearcoat Refinement",
      "Mirror Finish",
    ],
    image: getImageKitUrl("3mgallery/Videoshot_20260917_175213.jpg"),
    route: "/car-detailing.html",
  },
  {
    id: "teflon-polish",
    name: "3M Teflon Polish",
    price: "₹4,600*",
    badge: "FLUOROPOLYMER SHIELD",
    description:
      "Fluoropolymer synthetic sealant imparting an ultra-smooth hydrophobic barrier and intense shine.",
    capabilities: [
      "Fluoropolymer Seal",
      "Hydrophobic Slickness",
      "Environmental Shield",
      "High Reflective Gloss",
    ],
    image: getImageKitUrl("3M_Teflon_Polish.jpg"),
    route: "/additional-services.html",
  },
  {
    id: "cr70",
    name: "3M CR70",
    price: "₹12,000*",
    badge: "CRYSTALLINE SOLAR",
    description:
      "3M Crystalline 70 multilayer optical solar film rejecting up to 97% infrared heat while retaining factory transparency.",
    capabilities: [
      "97% Infrared Rejection",
      "99.9% UV Block",
      "Non-Metallized (Zero Signal Drop)",
      "Optical Clarity",
    ],
    image: getImageKitUrl("3M_CR70.jpg"),
    route: "/sun-film.html",
  },
  {
    id: "xp70",
    name: "3M XP70",
    price: "₹4,500*",
    badge: "BALANCED SOLAR HEAT",
    description:
      "High-performance architectural & automotive solar rejection tint for balanced heat defense and glare reduction.",
    capabilities: [
      "Balanced Heat Dissipation",
      "Glare Control",
      "UV Rejection",
      "Clear Day/Night Vision",
    ],
    image: getImageKitUrl("3M_XP70.jpg"),
    route: "/sun-film.html",
  },
  {
    id: "im70",
    name: "3M IM70",
    price: "₹7,000*",
    badge: "HYBRID THERMAL RAY",
    description:
      "Intermediate metallic hybrid solar shielding blocking harsh thermal rays and boosting interior cooling efficiency.",
    capabilities: [
      "Enhanced Heat Shielding",
      "Superior Thermal Reduction",
      "Privacy Guard",
      "Durable Multi-Ply",
    ],
    image: getImageKitUrl("3M_IM70.jpg"),
    route: "/sun-film.html",
  },
];

export const AllServicesSection: React.FC = () => {
  return (
    <section
      id="all-services"
      aria-labelledby="all-services-title"
      className="relative w-full bg-transparent py-16 sm:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase font-bold">
                COMPLETE STUDIO SERVICES MATRIX
              </span>
            </div>
            <h2
              id="all-services-title"
              className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
            >
              ALL SERVICES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            AUTHORITATIVE 3M AUTOMOTIVE DETAILING, PROTECTIVE FILMS & COATINGS
          </p>
        </div>

        {/* 3x3 Responsive Grid (3 cards per row across 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_9_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative rounded-sm bg-[#0e0e0e]/95 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 shadow-2xl hover:scale-[1.01]"
            >
              {/* Card Image Header */}
              <div className="relative h-56 min-h-[14rem] w-full overflow-hidden bg-dark-900">
                <img
                  src={srv.image || "/3mgallery/ceramic_coating.webp"}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== "/3mgallery/ceramic_coating.webp" && !target.src.endsWith("/3mgallery/ceramic_coating.webp")) {
                      target.src = "/3mgallery/ceramic_coating.webp";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                {srv.badge && (
                  <span className="absolute top-4 left-4 font-mono text-[9px] px-2.5 py-1 rounded-sm bg-dark-950/85 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                    {srv.badge}
                  </span>
                )}

                {/* Top White Gold Price Badge */}
                <span 
                  className="absolute top-4 right-4 inline-flex items-center px-3 py-1 text-xs sm:text-sm font-bold font-mono tracking-wider rounded shadow-md z-20"
                  style={{
                    backgroundColor: '#FFFFFF',
                    background: '#FFFFFF',
                    color: '#B8860B',
                    border: '1px solid rgba(184, 134, 11, 0.4)',
                    zIndex: 20
                  }}
                >
                  {srv.price}
                </span>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide leading-tight">
                      {srv.name.startsWith("3M ") ? (
                        <>
                          <span className="text-3m-red">3M</span>
                          <span>{srv.name.replace(/^3M\s+/, "")}</span>
                        </>
                      ) : (
                        srv.name
                      )}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-metallic-300 font-light leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Official Capabilities List */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="font-mono text-[10px] font-bold text-brand-red uppercase tracking-widest mb-2">
                      OFFICIAL CAPABILITIES
                    </div>
                    <ul className="space-y-1.5">
                      {srv.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs text-metallic-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA with Gold Accent Price */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">STARTING FROM</span>
                    <div className="flex items-baseline gap-0.5 text-amber-400 font-mono">
                      <span className="text-xs font-semibold">₹</span>
                      <span className="text-lg md:text-xl font-extrabold tracking-tight drop-shadow-[0_0_8px_rgba(245,158,11,0.25)]">
                        {srv.price.replace(/^₹/, "")}
                      </span>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppInquiryUrl(srv.name, "book")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-white hover:text-brand-red uppercase tracking-wider font-bold transition-colors"
                  >
                    BOOK SERVICE →
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

export default AllServicesSection;
