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

export const PpfPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryImages = [
    {
      src: "/assets/services/ppf.jpg",
      title: "Paint Protection Film Installation",
      category: "PROTECTION INSTALLATION",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Precision Cutting & Wrapping",
      category: "FACILITY ATELIER",
    },
    {
      src: "/assets/services/studio.jpg",
      title: "Edge Sealing & Finishing",
      category: "PRECISION CRAFT",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "High-Impact Area Coverage",
      category: "PROTECTION ZONES",
    },
    {
      src: "/assets/services/borophene.jpg",
      title: "Combined PPF & Graphene",
      category: "COMBO PROTECTION",
    },
    {
      src: "/assets/hero/car_driver_exit.jpg",
      title: "Long-Term Durability",
      category: "PERFORMANCE TEST",
    },
  ];

  const faqs = [
    {
      q: "What areas of the vehicle does PPF typically cover?",
      a: "PPF is commonly applied to high-impact areas such as the front bumper, hood, fenders, side mirrors, and door edges. Full-body coverage is also available for maximum protection against stone chips and abrasions across the entire vehicle surface.",
    },
    {
      q: "Will PPF damage my factory paint when removed?",
      a: "No, high-quality Paint Protection Film is designed to be removed safely without damaging the factory paint. The adhesive is engineered to release cleanly, and proper removal techniques ensure no residue or paint is lifted.",
    },
    {
      q: "How should I maintain my PPF-coated vehicle?",
      a: "Maintain PPF with pH-neutral automotive shampoo and a soft microfiber wash mitt. Avoid automated car washes with abrasive brushes. Minor scratches can often be self-healed with heat exposure from sunlight or hot water.",
    },
    {
      q: "Can PPF be combined with Ceramic Coating?",
      a: "Yes, many clients choose PPF on high-impact zones (bumper, hood, mirrors) combined with Ceramic Coating over the entire vehicle. This combination provides both physical impact protection and hydrophobic, gloss-enhancing properties.",
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
        serviceName="Paint Protection Film (PPF)"
        nextServiceHref="/ceramic-coating.html"
        nextServiceLabel="Ceramic Coating"
      />

      <main className="relative z-10">
        {/* Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-6 h-[1px] bg-brand-red" />
            <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
              PHYSICAL ARMOR // 3M CAR CARE STUDIO – OMR / ECR
            </span>
          </div>

          <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            3M PPF (PAINT PROTECTION FILM) &
            <span className="block text-metallic-silver">PHYSICAL ARMOR</span>
          </h1>

          <div className="mt-5 p-4 sm:p-5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md inline-block max-w-xs transition-all">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1 font-mono">
                STARTING FROM
              </span>
              <div className="flex items-baseline gap-1 text-amber-400 font-mono">
                <span className="text-lg md:text-xl font-bold">₹</span>
                <span className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  600
                </span>
                <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
              </div>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
            High-clarity thermoplastic polyurethane film precision-wrapped to safeguard vulnerable strike zones from highway stone chips, road debris, and abrasive scratches.
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
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              OFFICIAL SERVICE SCOPE
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Verified Paint Protection Film (PPF) Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Paint Protection Film Installation",
                desc: "High-clarity thermoplastic polyurethane film precision-wrapped to safeguard vulnerable strike zones.",
              },
              {
                title: "Scratch Protection",
                desc: "Self-healing top coat that reduces appearance of light scratches with heat exposure.",
              },
              {
                title: "Stone-Chip Protection",
                desc: "Absorbs highway stone chips, road debris, and abrasive scratches before they reach factory paint.",
              },
              {
                title: "High-Impact Area Protection",
                desc: "Precision-wrapped coverage for bumper, hood, fenders, mirrors, and door edges.",
              },
              {
                title: "Exterior Paint Preservation",
                desc: "Preserves factory paint condition and resale value by protecting from environmental damage.",
              },
              {
                title: "Clear Self-Healing Top Coat",
                desc: "Repairs minor swirls and scratches automatically through heat activation.",
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

      {/* PPF Photo Gallery */}
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                STUDIO PORTFOLIO
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                PPF Gallery
              </h2>
            </div>
            <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
              PRECISION PROTECTION AT METTUKUPPAM STUDIO
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

      {/* FAQs */}
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              PPF FAQ
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
      <ServiceReviews category="ppf" />

      {/* Bottom CTA Section */}
      <ServiceBottomCTA serviceName="PPF Protection" />
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

export default PpfPage;