import React, { useState } from "react";
import { BUSINESS } from "../data/business";
import {
  Phone,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Navigation,
} from "lucide-react";
import { CursorEffect } from "../components/common/CursorEffect";
import { Background3D } from "../components/common/Background3D";
import { ParticleNetworkBackground } from "../components/common/ParticleNetworkBackground";

export const BorophenePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryImages = [
    {
      src: "/assets/services/borophene.jpg",
      title: "Surface Durability & Chemical Shield",
      category: "CURING STAGE",
    },
    {
      src: "/assets/hero/car_stationary.jpg",
      title: "Premium Finish Application",
      category: "FACILITY ATELIER",
    },
    {
      src: "/assets/services/studio.jpg",
      title: "Precision Surface Preparation",
      category: "PRECISION CRAFT",
    },
    {
      src: "/assets/hero/car_low_front.jpg",
      title: "Enhanced Clearcoat Depth",
      category: "INSPECTION TUNNEL",
    },
    {
      src: "/assets/services/ppf.jpg",
      title: "Edge Sealing & Finish",
      category: "PROTECTION ZONES",
    },
    {
      src: "/assets/hero/car_driver_exit.jpg",
      title: "Long-Lasting Performance",
      category: "DURABILITY TEST",
    },
  ];

  const faqs = [
    {
      q: "What is Borophene coating and how does it differ from Graphene coating?",
      a: "Borophene coating is a next-generation 2D material surface barrier that offers higher tensile strength and durability than graphene. While graphene excels at heat dissipation, borophene provides enhanced physical protection against environmental elements and mechanical wear, making it ideal for vehicles exposed to harsh conditions.",
    },
    {
      q: "Is Borophene coating suitable for Chennai's coastal environment?",
      a: "Yes, borophene coating provides enhanced durability against coastal saline exposure, moisture, and road contaminants. Its advanced surface barrier guards vehicle chassis components and steel from corrosion, making it highly effective in Chennai's OMR / ECR corridor environment.",
    },
    {
      q: "How long does Borophene coating last compared to ceramic coating?",
      a: "Borophene coating offers extended durability due to its high-tensile molecular structure. While ceramic coatings typically last 2-5 years, borophene coatings are engineered for longer-term protection, though actual lifespan depends on vehicle usage and maintenance routines.",
    },
    {
      q: "Can Borophene coating be applied over existing ceramic coating?",
      a: "It is generally recommended to apply borophene coating on a clean, prepared surface. Applying over existing ceramic coating may affect adhesion. Our specialists inspect the vehicle's current coating condition and advise the best approach upon intake.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-studio-ink antialiased overflow-x-hidden font-sans">
      <CursorEffect />
      <Background3D />
      <ParticleNetworkBackground />
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-studio-border py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-metallic-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-brand-red" />
            <span>Back to Home</span>
          </a>

          <div className="flex items-center space-x-4">
            <a
              href="/car-detailing.html"
              className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-metallic-400 hover:text-white transition-colors"
            >
              Car Detailing →
            </a>
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS.phone}</span>
            </a>
            <a
              href="https://wa.me/+919167048826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-green-600 hover:bg-green-700 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.12 2c-1.3 0-2.28.48-3.15 1.3L7 11.05l-1.07-1.07C5.03 9.66 4.53 8.68 4.83 7c.4-1.06 1.16-2.08 2.26-2.64l1.96-1.96C8.96.54 10.03.06 11.5 0c1.46.06 2.52.54 3.15 1.3L21 7.05l-1.07 1.07c-.88.76-1.84 1.3-3.05 1.31zM12 4.18l-1.65 3.3 3.16 1.86 1.45-3.57L12 4.18z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 md:py-28 border-b border-white/10 bg-dark-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2.5 mb-4">
            <span className="w-6 h-[1px] bg-brand-red" />
            <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
              BOROPHENE SURFACE DEFENSE // 3M CAR CARE STUDIO – OMR / ECR
            </span>
          </div>

          <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            BOROPHENE COATING &
            <span className="block text-metallic-silver">SURFACE DEFENSE</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
            Next-generation automotive surface barrier delivering high-tensile paint protection, enhanced durability against environmental elements, and a flawless premium finish.
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
              <Navigation className="w-4 h-4 text-brand-amber" />
              <span>Get Studio Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Official Capabilities Breakdown */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              OFFICIAL SERVICE SCOPE
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Verified Borophene Coating Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Surface Protection",
                desc: "Next-generation automotive surface barrier delivering high-tensile paint protection and enhanced durability.",
              },
              {
                title: "Paint Protection",
                desc: "Shields delicate factory automotive paintwork from environmental fallout and mechanical abrasion.",
              },
              {
                title: "Enhanced Durability",
                desc: "Provides superior resistance to environmental elements and mechanical wear compared to conventional coatings.",
              },
              {
                title: "Premium Finish",
                desc: "Delivers a flawless, premium finish with deep optical clarity and mirror-like reflection.",
              },
              {
                title: "Corrosion Prevention",
                desc: "Guards vehicle chassis components and steel from coastal saline exposure, moisture, and road contaminants.",
              },
              {
                title: "Long-Term Vehicle Protection",
                desc: "Engineered for extended durability and long-term protection against environmental degradation.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-sm bg-dark-900 border border-white/10 flex flex-col justify-between"
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

      {/* Borophene Coating Photo Gallery */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                STUDIO PORTFOLIO
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Borophene Coating Gallery
              </h2>
            </div>
            <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
              SURFACE DEFENSE AT METTUKUPPAM STUDIO
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-sm overflow-hidden bg-dark-950 border border-white/10 aspect-video sm:aspect-square"
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

      {/* Borophene Coating FAQs */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
              Borophene Coating FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-sm bg-dark-900 border border-white/10 overflow-hidden transition-colors"
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

      {/* Location & Contact Bar */}
      <section className="py-16 bg-dark-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="font-cinematic text-2xl sm:text-3xl font-bold text-white uppercase">
            Schedule a Borophene Coating Assessment
          </h2>
          <p className="mt-2 text-sm text-metallic-300 max-w-lg font-light">
            Visit our dedicated inspection bay opposite AKDR Golf Village on Rajiv Gandhi Salai, OMR.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="px-6 py-3 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs uppercase tracking-wider"
            >
              Call {BUSINESS.phone}
            </a>
            <a
              href="https://wa.me/+919167048826"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-sm bg-green-600 hover:bg-green-700 text-white border border-white/20 font-mono text-xs uppercase tracking-wider"
            >
              Chat on WhatsApp
            </a>
            <a
              href={BUSINESS.mapQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-xs uppercase tracking-wider"
            >
              Open Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-950 text-center font-mono text-xs text-metallic-500">
        <p>
          {BUSINESS.name} • {BUSINESS.address.full}
        </p>
        <p className="mt-1">
          Operating Hours: {BUSINESS.businessHours.display} • Phone: {BUSINESS.phone}
        </p>
      </footer>
    </div>
  );
};

export default BorophenePage;