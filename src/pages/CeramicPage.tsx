import React, { useState } from "react";
import { BUSINESS } from "../data/business";
import {
  Phone,
  Compass,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { CursorEffect } from "../components/common/CursorEffect";
import { Background3D } from "../components/common/Background3D";
import { FlowBackground } from "../components/common/FlowBackground";
import { ParticleNetworkBackground } from "../components/common/ParticleNetworkBackground";
import { ServiceHeader } from "../components/common/ServiceHeader";
import { ServiceBottomCTA } from "../components/common/ServiceBottomCTA";
import { ServiceReviews } from "../components/common/ServiceReviews";
import { FloatingWhatsApp } from "../components/common/FloatingWhatsApp";

export const CeramicPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryImages = [
    {
      src: "/assets/services/ceramic.jpg",
      title: "Hydrophobic Contact Angle & Water Beading",
      category: "SURFACE DEFENSE",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Deep Candy Mirror Reflection",
      category: "OPTICAL GLOSS",
    },
    {
      src: "/assets/services/graphene.jpg",
      title: "Molecular Shield Bonding",
      category: "COATING MATRIX",
    },
    {
      src: "/assets/services/studio.jpg",
      title: "Dust-Controlled Cleanroom Application",
      category: "FACILITY ATELIER",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "Multi-Angle Clearcoat Depth",
      category: "INSPECTION TUNNEL",
    },
    {
      src: "/assets/services/borophene.jpg",
      title: "Surface Durability & Chemical Shield",
      category: "CURING STAGE",
    },
  ];

  const faqs = [
    {
      q: "What is Ceramic Coating and how does it protect vehicle paint?",
      a: "Ceramic coating is a high-grade liquid polymer that chemically bonds with your car's factory clearcoat. Unlike traditional waxes that simply sit on the surface and wash away, ceramic coating forms a durable, semi-permanent hydrophobic quartz layer that repels water, prevents chemical etching from bird droppings and tree sap, and dramatically amplifies paint depth and gloss.",
    },
    {
      q: "Why is machine paint correction essential prior to ceramic coating?",
      a: "Ceramic coating is completely optically clear and acts like a magnifying glass over whatever is underneath it. If swirls, scratches, or oxidation remain on the paint, the coating will lock them in for years. Therefore, our studio performs meticulous multi-stage paint correction to ensure the surface is perfectly flat and mirror-like before coating application.",
    },
    {
      q: "How does ceramic coating perform in Chennai's coastal OMR / ECR climate?",
      a: "Living and driving along Rajiv Gandhi Salai (OMR) and East Coast Road (ECR) exposes vehicles to high humidity, airborne saline mist, and harsh tropical UV radiation. Ceramic coating provides superior chemical resistance against coastal salt spray oxidation and prevents UV-induced clearcoat yellowing and premature degradation.",
    },
    {
      q: "What is the key difference between Ceramic Coating and Paint Protection Film (PPF)?",
      a: "Ceramic coating is a liquid chemical shield providing extreme gloss, UV resistance, and hydrophobic self-cleaning properties, but it does NOT protect against heavy physical kinetic impacts like highway stone chips. PPF (Paint Protection Film) is a thick, flexible urethane film specifically engineered to absorb rock chips and physical abrasions. Many clients choose PPF on high-impact zones (bumper, hood, mirrors) combined with Ceramic Coating over the entire vehicle.",
    },
    {
      q: "How should a ceramic-coated vehicle be washed and maintained?",
      a: "Maintenance is remarkably straightforward due to the self-cleaning hydrophobic effect. Use pH-neutral automotive shampoo, a two-bucket wash method with clean microfiber wash mitts, and avoid abrasive automatic car wash brushes or acidic road-side detergents.",
    },
  ];

  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink antialiased overflow-x-hidden">
      <CursorEffect />
      <Background3D />
      <FlowBackground />
      <ParticleNetworkBackground />

      {/* Top Sticky Header */}
      <ServiceHeader
        serviceName="Ceramic Coating"
        nextServiceHref="/graphene-coating.html"
        nextServiceLabel="Graphene Coating"
      />

      <main className="relative z-10">
        {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 md:py-28 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-6 h-[1px] bg-brand-red" />
            <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
              MOLECULAR PROTECTION // 3M CAR CARE STUDIO – OMR / ECR
            </span>
          </div>

          <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            PREMIUM CERAMIC COATING &
            <span className="block text-metallic-silver">SURFACE DEFENSE</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
            Advanced liquid polymer bonding delivering intense liquid gloss, dynamic hydrophobic water beading, and persistent clearcoat defense against Chennai's coastal environment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs tracking-wider uppercase transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Studio // {BUSINESS.phone}</span>
            </a>
            <a
              href={BUSINESS.mapQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-xs tracking-wider uppercase transition-all"
            >
              <Compass className="w-4 h-4 text-brand-amber" />
              <span>Get Studio Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Official Capabilities Breakdown */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              OFFICIAL SERVICE SCOPE
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Verified Ceramic Coating Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Ceramic Coating",
                desc: "High-density SiO2 polymer formulation engineered to bond chemically with automotive clearcoat for persistent surface defense.",
              },
              {
                title: "Paint Protection",
                desc: "Shields delicate factory automotive paintwork from environmental fallout, acid rain, bird droppings, and tree sap etching.",
              },
              {
                title: "Gloss Enhancement",
                desc: "Generates an intense wet-look, candy-like optical reflection that magnifies metallic flake and basecoat color richness.",
              },
              {
                title: "Hydrophobic Protection",
                desc: "Creates ultra-high water contact angles, causing water and road grime to bead up and sheet off the surface effortlessly.",
              },
              {
                title: "Long-lasting Surface Protection",
                desc: "Durable covalent molecular bonding engineered to withstand repeated wash cycles, high heat, and coastal atmospheric moisture.",
              },
              {
                title: "Dust-Controlled Cleanroom Application",
                desc: "Meticulously applied in our enclosed, dust-filtered studio bays with temperature stabilization and precision LED inspection.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-sm bg-[#0e0e0e]/92 relative z-10 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-brand-red mb-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      CAPABILITY 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-metallic-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Coating Photo Gallery */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                STUDIO PORTFOLIO
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Ceramic Coating Gallery
              </h2>
            </div>
            <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
              HYDROPHOBIC REFLECTION AT METTUKUPPAM STUDIO
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-sm overflow-hidden bg-[#0e0e0e]/92 relative z-10 border border-white/10 aspect-video sm:aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[10px] text-brand-amber tracking-widest uppercase">
                    {img.category}
                  </span>
                  <div className="font-display font-semibold text-white text-sm mt-0.5">
                    {img.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Coating FAQs */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Ceramic Coating FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-sm bg-[#0e0e0e]/92 border border-white/10 overflow-hidden transition-colors relative z-10"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-display font-semibold text-white text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-red shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-metallic-300 font-light leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Verified Reviews */}
      <ServiceReviews category="ceramic" />

      {/* Bottom CTA Section */}
      <ServiceBottomCTA serviceName="Ceramic Coating" />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-transparent relative z-10 text-center font-mono text-xs text-metallic-500">
        <p>
          {BUSINESS.name} • {BUSINESS.address.full}
        </p>
        <p className="mt-1">
          Operating Hours: {BUSINESS.businessHours.display} • Phone: +91 76019 33555 / 666
        </p>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
};

export default CeramicPage;