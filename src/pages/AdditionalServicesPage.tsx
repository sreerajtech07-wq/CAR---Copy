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

export const AdditionalServicesPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647690/Videoshot_20260917_175046.jpg",
      title: "AC Vent Cleaning & Sanitization",
      category: "INTERIOR CARE",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647691/Videoshot_20260917_175042.jpg",
      title: "Professional Car Wash",
      category: "EXTERIOR CLEANING",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647918/Videoshot_20260917_175215.jpg",
      title: "Car Polish & Restoration",
      category: "PAINT REFINEMENT",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647916/Videoshot_20260917_175213.jpg",
      title: "Interior Deep Care",
      category: "CABIN RESTORATION",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647685/Videoshot_20260917_175050.jpg",
      title: "Ceramic Boost & Maintenance",
      category: "COATING MAINTENANCE",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647923/Videoshot_20260917_175220.jpg",
      title: "Vehicle Restoration Complete",
      category: "FULL SERVICE",
    },
  ];

  const faqs = [
    {
      q: "What additional car care services do you offer?",
      a: "Our studio offers AC vent cleaning and sanitization, professional car wash services, car polish and paint refinement, interior deep care, and vehicle restoration protocols to keep everyday touchpoints pristine and mechanically clean.",
    },
    {
      q: "How long does an AC vent cleaning session take?",
      a: "AC vent cleaning and sanitization typically takes 30 to 45 minutes. We use targeted evaporator treatment and antimicrobial solution to neutralize moisture odors and cabin allergens effectively.",
    },
    {
      q: "Is your car wash service touch-free or machine-based?",
      a: "We utilize a two-bucket swirl-free wash protocol with grit guards, high-lubricity pH-neutral cleansers, and plush microfiber wash mitts for a scratch-free, premium clean every time.",
    },
    {
      q: "Can Additional Services be combined with coating packages?",
      a: "Yes, additional car care services can be added alongside any coating package. AC vent cleaning, car wash, and polish can be performed before or after ceramic, graphene, or PPF application for comprehensive vehicle maintenance.",
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
        serviceName="Additional Services"
        nextServiceHref="/ppf.html"
        nextServiceLabel="PPF Protection"
      />

      <main className="relative z-10">
        {/* Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-6 h-[1px] bg-brand-red" />
            <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
              DETAIL PROTOCOLS // 3M CAR CARE STUDIO – OMR / ECR
            </span>
          </div>

          <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            ADDITIONAL CAR CARE SERVICES &
            <span className="block text-metallic-silver">DETAIL PROTOCOLS</span>
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
            Specialized automotive maintenance and aesthetic revitalization protocols keeping everyday vehicle touchpoints pristine and mechanically clean.
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
              Verified Additional Car Care Services Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AC Vent Cleaning",
                desc: "Targeted evaporator and vent antimicrobial treatment neutralizing moisture odors and cabin allergens.",
              },
              {
                title: "Car Wash",
                desc: "Two-bucket swirl-free wash protocol utilizing grit guards, pH-neutral cleansers, and plush microfibers.",
              },
              {
                title: "Car Polish",
                desc: "Diminishing micro-abrasive finish pad polishing to generate deep optical reflections.",
              },
              {
                title: "Interior Care",
                desc: "Comprehensive interior rejuvenation including leather nourishment and plastic restoration.",
              },
              {
                title: "Vehicle Restoration",
                desc: "Full vehicle rejuvenation including trim restoration, headlight lens renewal, and defect elimination.",
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
                      SPECIFICATION 0{idx + 1}
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

      {/* Additional Services Photo Gallery */}
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                STUDIO PORTFOLIO
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Additional Services Gallery
              </h2>
            </div>
            <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
              DETAIL PROTOCOLS AT METTUKUPPAM STUDIO
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

      {/* Additional Services FAQs */}
      <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Additional Services FAQ
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
      <ServiceBottomCTA serviceName="Additional Services" />
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

export default AdditionalServicesPage;