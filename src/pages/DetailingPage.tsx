import React, { useState } from "react";
import { BUSINESS } from "../data/business";
import {
  Phone,
  Compass,
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

export const DetailingPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryImages = [
    {
      src: "/assets/services/detailing.jpg",
      title: "Paint Correction & Dual-Action Compounding",
      category: "EXTERIOR RESTORATION",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Studio Inspection & Gloss Evaluation",
      category: "INSPECTION BAY",
    },
    {
      src: "/assets/services/studio.jpg",
      title: "Cleanroom Detailing Bay",
      category: "FACILITY ATELIER",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "Aerodynamic Splitter & Frontal Refinement",
      category: "DETAIL FINISH",
    },
    {
      src: "/assets/services/ppf.jpg",
      title: "Surface Preparation & Edge Polishing",
      category: "PRECISION CRAFT",
    },
    {
      src: "/assets/hero/car_driver_exit.jpg",
      title: "Interior Cabin Deep Detailing",
      category: "CABIN EXTRACTION",
    },
  ];

  const faqs = [
    {
      q: "What is included in the 3M Car Detailing service?",
      a: "Our studio car detailing includes complete exterior decontamination (pH-neutral foam cleansing, iron fallout elimination, and synthetic clay prep), multi-stage machine paint correction to eliminate swirl marks and oxidation, jewel polish refinement, engine bay cleansing, and deep interior extraction (steam conditioning, leather nourishment, and AC vent sanitation).",
    },
    {
      q: "How does paint correction differ from ordinary car washing or waxing?",
      a: "Standard washing only removes loose surface dirt, and basic waxing simply fills micro-scratches with temporary wax that washes off in weeks. In contrast, paint correction uses calibrated dual-action machine polishers with diminishing micro-abrasives to physically level and refine the clearcoat, eliminating scratches, holograms, and swirl marks permanently.",
    },
    {
      q: "How long does a full studio detailing session take?",
      a: "Depending on the vehicle size and paint condition, a comprehensive multi-stage detailing session typically requires between 6 to 12 hours. We dedicate exclusive bay time to each vehicle to ensure unhurried, flawless results.",
    },
    {
      q: "Why is professional detailing critical in Chennai's OMR / ECR corridor?",
      a: "Chennai's coastal environment carries high airborne salinity, intense tropical UV radiation, and severe highway road film from Rajiv Gandhi Salai and East Coast Road. Without regular deep cleansing and paint decontamination, salt deposits accelerate clearcoat corrosion, clearcoat etching, and interior dashboard drying.",
    },
    {
      q: "Can all scratches and swirl marks be removed?",
      a: "Swirl marks, wash scratches, water spots, and light clearcoat scratches can typically be 85% to 95% corrected. Scratches that have fully penetrated through the clearcoat down to the color basecoat or primer cannot be polished out without respraying, which our specialists inspect and advise on upon vehicle intake.",
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
        serviceName="Car Detailing"
        nextServiceHref="/additional-services.html"
        nextServiceLabel="Additional Services"
      />

      <main className="relative z-10">
        {/* Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                STUDIO CRAFT // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              CAR DETAILING &
              <span className="block text-metallic-silver">PAINT CORRECTION</span>
            </h1>

            <div className="mt-5 p-4 sm:p-5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md inline-block max-w-xs transition-all">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1 font-mono">
                  STARTING FROM
                </span>
                <div className="flex items-baseline gap-1 text-amber-400 font-mono">
                  <span className="text-lg md:text-xl font-bold">₹</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    3,500
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Meticulous multi-stage restoration engineered to remove swirls, scratches, and oxidation while revitalizing the cabin interior and engine compartment at Mettukuppam, OMR, Chennai.
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

        {/* Detailing Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                STUDIO PORTFOLIO
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Detailing Gallery
              </h2>
            </div>
            <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
              CRAFTED AT METTUKUPPAM, OMR STUDIO BAYS
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

      {/* Detailing FAQs */}
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Car Detailing FAQ
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
      <ServiceReviews category="detailing" />

      {/* Bottom CTA Section */}
      <ServiceBottomCTA serviceName="Car Detailing" />
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
      {/* Floating WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
};

export default DetailingPage;