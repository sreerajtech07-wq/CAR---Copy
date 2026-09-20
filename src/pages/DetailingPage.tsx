import React, { useState } from "react";
import { BUSINESS } from "../data/business";
import {
  Phone,
  Compass,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Award,
  Sparkles,
  Wrench,
  Layers,
  Check,
  MessageSquare,
} from "lucide-react";
import { CursorEffect } from "../components/common/CursorEffect";
import { Background3D } from "../components/common/Background3D";
import { FlowBackground } from "../components/common/FlowBackground";
import { ParticleNetworkBackground } from "../components/common/ParticleNetworkBackground";
import { ServiceHeader } from "../components/common/ServiceHeader";
import { ServiceBottomCTA } from "../components/common/ServiceBottomCTA";
import { ServiceReviews } from "../components/common/ServiceReviews";
import { ServiceQuoteWidget } from "../components/common/ServiceQuoteWidget";
import { RelatedServicesNav } from "../components/common/RelatedServicesNav";
import { FloatingWhatsApp } from "../components/common/FloatingWhatsApp";

export const DetailingPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "Multi-Stage Paint Correction", desc: "Diminishing micro-abrasive polishers" },
    { label: "Dust-Controlled Cleanroom", desc: "Enclosed temperature & humidity bay" },
    { label: "Deep Cabin Steam Extraction", desc: "Antimicrobial interior sanitization" },
    { label: "100% Authentic 3M Formulations", desc: "Verifiable studio warranty backing" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "pH-Neutral Foam & Decontamination Wash",
      desc: "Iron fallout chemical bath, clay bar scrubbing, and wheel arch degreasing.",
    },
    {
      step: "02",
      title: "LED Inspection Tunnel Paint Audit",
      desc: "Multi-angle lighting tunnel analysis to map scratch depth, buffer trails, and swirl density.",
    },
    {
      step: "03",
      title: "Multi-Stage Dual-Action Compounding",
      desc: "High-cut compounding followed by micro-finishing polish to eliminate up to 95% of paint defects.",
    },
    {
      step: "04",
      title: "Deep Interior Vacuum & Steam Extraction",
      desc: "Upholstery shampooing, leather nourishment, dashboard dressing, and AC vent fogging.",
    },
    {
      step: "05",
      title: "Final Optical Sheen & Dressing Audit",
      desc: "Tire dressing, glass streak-free cleaning, and final gloss meter inspection before client handover.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Vehicles with dull, oxidized paint, buffer swirls, or heavy wash scratches",
        "Cars requiring deep interior cabin restoration, leather care, and odor removal",
        "Preparing clearcoat surfaces prior to ceramic coating or PPF installation",
        "Restoring maximum optical mirror depth and showroom vehicle appearance",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You need physical impact armor against highway stone chips (Choose 3M PPF)",
        "You require long-term molecular glass hardness protection (Choose 3M Ceramic or Graphene Coating)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647918/Videoshot_20260917_175215.jpg",
      title: "Paint Correction & Dual-Action Compounding",
      category: "EXTERIOR RESTORATION",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647916/Videoshot_20260917_175213.jpg",
      title: "Studio Inspection & Gloss Evaluation",
      category: "INSPECTION BAY",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647681/Videoshot_20260917_175052.jpg",
      title: "Cleanroom Detailing Bay",
      category: "FACILITY ATELIER",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647923/Videoshot_20260917_175220.jpg",
      title: "Aerodynamic Splitter & Frontal Refinement",
      category: "DETAIL FINISH",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647685/Videoshot_20260917_175050.jpg",
      title: "Surface Preparation & Edge Polishing",
      category: "PRECISION CRAFT",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647691/Videoshot_20260917_175042.jpg",
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

  const handleScrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("service-quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink antialiased overflow-x-hidden">
      <CursorEffect />
      <Background3D />
      <FlowBackground />
      <ParticleNetworkBackground />

      {/* Top Sticky Header */}
      <ServiceHeader
        serviceName="3M Car Detailing"
        nextServiceHref="/additional-services.html"
        nextServiceLabel="3M Additional Services"
      />

      <main className="relative z-10">
        {/* Step 1: Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                STUDIO CRAFT // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              3M CAR DETAILING &
              <span className="block text-metallic-silver">PAINT CORRECTION</span>
            </h1>

            {/* TWO-TIER POSTER PRICING BLOCK */}
            <div className="mt-5 p-4 sm:p-5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md inline-block max-w-xs transition-all">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1 font-mono">
                  STARTING FROM
                </span>
                <div className="flex items-baseline gap-1 text-amber-400 font-mono">
                  <span className="text-lg md:text-xl font-bold">₹</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    4,500
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Precision multi-stage paint correction, interior steam deep extraction, and complete vehicle restoration protocols executed by 3M certified technicians at OMR Studio.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#service-quote"
                onClick={handleScrollToQuote}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs tracking-wider uppercase transition-all shadow-lg shadow-brand-red/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Quote</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20Car%20Detailing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-[#25d366] hover:bg-emerald-600 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-xs tracking-wider uppercase transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio</span>
              </a>
              <a
                href={BUSINESS.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-xs tracking-wider uppercase transition-all"
              >
                <Compass className="w-4 h-4 text-brand-amber" />
                <span>Studio Directions</span>
              </a>
            </div>
          </div>
        </section>

        {/* Step 2: Minimal Trust Strip */}
        <section className="py-6 border-b border-white/10 bg-[#0e0e0e]/80 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustPoints.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-sm bg-white/[0.02] border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-tight">{item.label}</h4>
                    <p className="text-[11px] text-metallic-400 font-mono leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 3: Technology Overview - What is Detailing? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  COMPREHENSIVE RESTORATION
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  What is 3M Studio Car Detailing?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M Car Detailing is a meticulous, multi-stage restoration protocol designed to bring exterior clearcoat and interior cabin spaces back to showroom condition.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Utilizing dual-action machine polishers with micro-abrasives alongside steam extraction, it removes up to 95% of clearcoat swirls, oxidation, and cabin contaminants.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Wrench className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">95% Swirl</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Defect Correction</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Optical Depth</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Jewel Polish Finish</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Layers className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Steam Extract</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Cabin Deep Clean</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">3M Certified</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Studio Standard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Official Capabilities Breakdown */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                OFFICIAL SERVICE SCOPE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Verified Detailing Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Paint Correction & Swirl Elimination",
                  desc: "Multi-stage dual-action machine polishing with diminishing micro-abrasives to clear swirl marks, holograms, and oxidation.",
                },
                {
                  title: "Decontamination & Synthetic Clay Cleanse",
                  desc: "Removes embedded iron fallout, tar spots, tree sap, and road grime from clearcoat surfaces.",
                },
                {
                  title: "Interior Steam Extraction & Sanitization",
                  desc: "Deep steam cleaning for upholstery, leather seat conditioning, dashboard dressing, and carpet extraction.",
                },
                {
                  title: "Engine Bay Cleansing & Dressing",
                  desc: "Waterless degreasing and protective dressing for engine bay plastics, hoses, and shrouds.",
                },
                {
                  title: "Headlight & Trim Revitalization",
                  desc: "Restores clarity to hazy polycarbonate headlights and revives faded exterior rubber and plastic trim.",
                },
                {
                  title: "Dust-Controlled Application",
                  desc: "Meticulously executed in enclosed, dust-filtered studio bays under LED inspection lighting.",
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

        {/* Step 5: Decision Guide - Is This Right for Your Car? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                DECISION GUIDE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Is 3M Car Detailing Right for Your Vehicle?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisionFactors.map((group, idx) => (
                <div key={idx} className="p-6 sm:p-8 rounded-sm bg-[#0e0e0e]/92 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className={`font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-xs inline-block mb-4 ${
                      idx === 0 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}>
                      {group.type}
                    </span>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className={`w-4 h-4 shrink-0 mt-1 ${idx === 0 ? "text-emerald-400" : "text-amber-400"}`} />
                          <span className="text-xs sm:text-sm text-metallic-300 font-light leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 6: 5-Stage Execution Process */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                WORKFLOW EXCELLENCE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Our 5-Stage Detailing Execution Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-metallic-400 max-w-xl mx-auto font-mono">
                Executed in temperature and dust-controlled bays at 3M OMR
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {executionSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-sm bg-[#0e0e0e]/92 border border-white/10 flex flex-col justify-between relative group">
                  <div>
                    <div className="font-mono text-2xl font-black text-brand-red mb-2">{step.step}</div>
                    <h3 className="font-display font-bold text-white text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-metallic-400 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 7: Detailing Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  STUDIO PORTFOLIO
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                  Car Detailing Gallery
                </h2>
              </div>
              <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
                PAINT CORRECTION AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M Car Detailing"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="detailing" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M Car Detailing" />

        {/* Step 10: Detailing FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
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

        {/* Step 11: Explore Related Services */}
        <RelatedServicesNav currentServiceId="detailing" />

        {/* Bottom CTA Section */}
        <ServiceBottomCTA serviceName="3M Car Detailing" />
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

export default DetailingPage;