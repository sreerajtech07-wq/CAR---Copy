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
  Droplets,
  Shield,
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

export const Coating10HPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "10H Pencil Hardness", desc: "Diamond-grade scratch & mar resistance" },
    { label: "Dust-Controlled Cleanroom", desc: "Enclosed temperature & humidity bay" },
    { label: "OMR / ECR Coastal Defense", desc: "Salt mist & acid rain chemical shield" },
    { label: "100% Authentic 3M Formulations", desc: "Verifiable studio warranty" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Decontamination & Foam Wash",
      desc: "Multi-stage exterior foam wash, iron chemical decontamination, and clay bar treatment to clear embedded paint contaminants.",
    },
    {
      step: "02",
      title: "Multi-Stage Paint Correction",
      desc: "Precision LED tunnel inspection followed by dual-action machine polishing to achieve a flawless 100% flat mirror finish.",
    },
    {
      step: "03",
      title: "Isopropanol Solvent Prep",
      desc: "Solvent wiping with oil-free surface prep to ensure absolute pure clearcoat contact prior to 10H quartz layer bonding.",
    },
    {
      step: "04",
      title: "10H Quartz Layering",
      desc: "Precision manual cross-hatch application of 3M 10H liquid formulation inside dust-filtered cleanroom bays.",
    },
    {
      step: "05",
      title: "IR Curing & Hardness Audit",
      desc: "Shortwave infrared lamp baking and multi-angle optical depth inspection to guarantee maximum clearcoat hardness.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Owners seeking maximum diamond-grade scratch and swirl resistance",
        "Luxury and dark-colored vehicles exposed to heavy traffic marring",
        "Long-term hydrophobic quartz clearcoat armor",
        "Coastal humidity and salt mist resistance along OMR & ECR",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You require high physical kinetic impact shielding against highway rock chips (Choose 3M PPF)",
        "You prefer carbon-matrix thermal dissipation for extreme heat (Choose 3M Graphene Coating)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?auto=format&fit=crop&w=1200&q=80",
      title: "10H Diamond-Grade Hardness Shield",
      category: "HARDNESS BARRIER",
    },
    {
      src: "https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?auto=format&fit=crop&w=1200&q=80",
      title: "Micro-Scratch Prevention & Optical Depth",
      category: "FACILITY ATELIER",
    },
    {
      src: "https://images.unsplash.com/photo-1708805282706-f44730b7e527?auto=format&fit=crop&w=1200&q=80",
      title: "Hydrophobic Quartz Matrix Layering",
      category: "COATING MATRIX",
    },
    {
      src: "https://images.unsplash.com/photo-1658244546876-d82cbf1a1c9e?auto=format&fit=crop&w=1200&q=80",
      title: "Cleanroom Thermal Curing Protocol",
      category: "PRECISION CRAFT",
    },
  ];

  const faqs = [
    {
      q: "What is 3M 10H Coating and how does it protect vehicle paint?",
      a: "3M 10H Coating is a diamond-grade ceramic liquid polymer formulation designed to establish a 10H surface hardness barrier over factory clearcoat. It acts as an ultra-durable shield against micro-scratches, swirl marks, bird droppings, acid rain, and intense UV degradation.",
    },
    {
      q: "What is the starting price for 3M 10H Coating at the OMR studio?",
      a: "3M 10H Coating starts at ₹20,000 for standard vehicle categories at our 3M Car Care Studio in OMR, Chennai, opposite AKDR Golf Village.",
    },
    {
      q: "How does 10H hardness compare to standard ceramic coatings?",
      a: "Standard ceramic coatings typically measure around 9H on the pencil hardness scale. 10H represents diamond-grade scratch resistance, delivering enhanced clearcoat density and long-term optical sheen.",
    },
    {
      q: "How should a 10H-coated vehicle be washed and maintained?",
      a: "Maintenance is easy thanks to its extreme hydrophobic self-cleaning surface. Wash using pH-neutral shampoo, soft microfiber mitts, and clean water. Avoid harsh automatic wash brushes.",
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

      <ServiceHeader
        serviceName="3M 10H Coating"
        nextServiceHref="/ppf.html"
        nextServiceLabel="3M PPF (Paint Protection Film)"
      />

      <main className="relative z-10">
        {/* Step 1: Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                DIAMOND-GRADE 10H DEFENSE // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              3M 10H COATING &
              <span className="block text-metallic-silver">DIAMOND HARDNESS SHIELD</span>
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
                    20,000
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Diamond-grade 10H hardness liquid matrix forming an unyielding clearcoat barrier against micro-scratches, wash marring, acidic fallout, and coastal weather oxidation.
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
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%2010H%20Coating.`}
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

        {/* Step 3: Technology Overview - What is 10H Coating? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  HARDNESS ADVANCEMENT
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  What is 3M 10H Coating?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M 10H Coating represents the pinnacle of ceramic liquid polymer hardness, achieving a 10H rating on the pencil hardness scale. It bonds directly with the factory clearcoat to create an uncompromising quartz armor layer.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Engineered to withstand Chennai’s tough driving conditions along OMR and ECR, it significantly reduces wash swirls, environmental chemical etching, and optical clarity degradation over years of vehicle use.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Shield className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">10H Rating</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Pencil Hardness</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Deep Sheen</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Optical Reflection</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Droplets className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Hydrophobic</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Self-Cleaning</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">3M Warranty</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Studio Certified</div>
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
                Verified 10H Coating Properties
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "10H Diamond-Grade Hardness",
                  desc: "Ultra-dense quartz polymer matrix providing maximum scratch, wash-marring, and swirl resistance.",
                },
                {
                  title: "Paint Protection",
                  desc: "Shields delicate factory automotive paintwork from environmental fallout, acid rain, bird droppings, and tree sap etching.",
                },
                {
                  title: "High-Gloss Finish",
                  desc: "Generates an intense wet-look, candy-like optical reflection that magnifies metallic flake and basecoat color richness.",
                },
                {
                  title: "Hydrophobic Quartz Layer",
                  desc: "Creates ultra-high water contact angles, causing water and road grime to bead up and sheet off the surface effortlessly.",
                },
                {
                  title: "Coastal Salt Defense",
                  desc: "Engineered specifically to resist airborne saline corrosion and high humidity levels along Chennai's ECR and OMR corridors.",
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

        {/* Step 5: Decision Guide - Is This Right for Your Car? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                DECISION GUIDE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Is 10H Coating Right for Your Vehicle?
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
                Our 5-Stage 10H Execution Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-metallic-400 max-w-xl mx-auto font-mono">
                Executed in temperature and dust-controlled cleanroom bays at 3M OMR
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

        {/* Step 7: 10H Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  STUDIO PORTFOLIO
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                  3M 10H Coating Showcase
                </h2>
              </div>
              <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
                10H HARDNESS AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M 10H Coating"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="10h" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M 10H Coating" />

        {/* Step 10: 10H Coating FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                3M 10H Coating FAQ
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
        <RelatedServicesNav currentServiceId="10h" />

        <ServiceBottomCTA serviceName="3M 10H Coating" />
      </main>

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

export default Coating10HPage;
