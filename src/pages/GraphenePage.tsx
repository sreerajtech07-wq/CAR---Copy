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
  Sun,
  Flame,
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
import { renderWith3MLogo } from "../components/common/Brand3MLogo";

export const GraphenePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "3M Certified Technicians", desc: "Factory-trained precision application" },
    { label: "Dust-Controlled Cleanroom", desc: "Enclosed temperature & humidity bay" },
    { label: "High Thermal Dissipation", desc: "Prevents water spot mineral etching" },
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
      title: "Paint Inspection & Correction",
      desc: "Precision LED tunnel inspection followed by multi-stage dual-action machine polishing to eliminate swirl marks and oxidation.",
    },
    {
      step: "03",
      title: "Isopropanol Surface Prep",
      desc: "Solvent wiping with oil-free surface prep to ensure absolute pure clearcoat contact prior to molecular bonding.",
    },
    {
      step: "04",
      title: "Cleanroom Graphene Coating Application",
      desc: "Cross-hatch manual application of 3M Graphene matrix liquid in enclosed dust-filtered cleanroom bays.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Vehicles parked frequently under harsh tropical sunlight along OMR/ECR",
        "Owners wanting maximum anti-water spotting protection and high heat dispersion",
        "Deep, dark, or metallic body panels requiring intense optical depth",
        "Long-term hydrophobic self-cleaning performance",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You need physical impact shielding against highway rock chips (Choose 3M PPF)",
        "You want standard entry-level molecular paint defense (Choose 3M Ceramic Coating)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?auto=format&fit=crop&w=1200&q=80",
      title: "Graphene Reduced Heat & Anti-Static Layer",
      category: "COATING MATRIX",
    },
    {
      src: "https://images.unsplash.com/photo-1658244500543-47f32dc51dc2?auto=format&fit=crop&w=1200&q=80",
      title: "Deep Dark-Paint Candy Reflection",
      category: "OPTICAL GLOSS",
    },
    {
      src: "https://images.unsplash.com/photo-1714434087671-06325b90f26a?auto=format&fit=crop&w=1200&q=80",
      title: "Graphene-Infused Polymer Matrix",
      category: "COATING APPLICATION",
    },
    {
      src: "https://images.unsplash.com/photo-1711512972607-06928bf7a7fa?auto=format&fit=crop&w=1200&q=80",
      title: "Dust-Free Cleanroom Bay Fitment",
      category: "FACILITY ATELIER",
    },
    {
      src: "https://images.unsplash.com/photo-1609505864735-f0c0c0314a42?auto=format&fit=crop&w=1200&q=80",
      title: "Thermal Curing & Quality Control",
      category: "CURING STAGE",
    },
  ];

  const faqs = [
    {
      q: "What makes graphene coating superior to ceramic coating?",
      a: "Graphene coating incorporates a single-layer carbon atom matrix that provides exceptional surface heat dissipation, higher tensile strength, and greater contamination resistance compared to traditional ceramic (SiO2) coatings. It creates a more durable covalent bonding with the clearcoat while maintaining identical hydrophobic properties.",
    },
    {
      q: "Is paint correction required before graphene coating application?",
      a: "Yes, similar to ceramic coating, graphene coating chemically bonds with whatever lies beneath it. Performing multi-stage paint correction ensures the surface is perfectly flat and mirror-like, allowing the graphene matrix to bond optimally and deliver maximum performance benefits.",
    },
    {
      q: "How does graphene coating perform in Chennai's coastal climate?",
      a: "Living and driving along Rajiv Gandhi Salai (OMR) and East Coast Road (ECR) exposes vehicles to high humidity, airborne saline mist, and harsh tropical UV radiation. Graphene coating provides superior chemical resistance against coastal salt spray oxidation and prevents UV-induced clearcoat yellowing and premature degradation more effectively than standard ceramic coatings.",
    },
    {
      q: "Can graphene coating be applied over PPF (Paint Protection Film)?",
      a: "Yes, graphene coating can be applied over PPF to enhance its hydrophobic properties, increase gloss, and provide additional chemical resistance. Many clients choose this combination for maximum protection: PPF on high-impact zones plus graphene coating over the entire vehicle for self-cleaning effects.",
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
        serviceName="Graphene Coating"
        nextServiceHref="/ppf.html"
        nextServiceLabel="3M PPF"
      />
      <main className="relative z-10">
        {/* Step 1: Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                GRAPHENE PROTECTION // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight leading-snug">
              <span className="text-3m-red">3M</span>GRAPHENE COATING &amp; ADVANCED MATRIX
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
                    23,000*
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Reduced surface heat spot retention, ultra-high tensile carbon structure, superior water-spot defense, and lasting clearcoat hardness engineered for extreme Indian road conditions.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4">
              <a
                href="#service-quote"
                onClick={handleScrollToQuote}
                className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-3.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-brand-red/30 cursor-pointer text-center"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Get a Quote</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20Graphene%20Coating.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-3.5 rounded-sm bg-[#25d366] hover:bg-emerald-600 text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-lg text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-current" />
                <span className="truncate">WhatsApp Us</span>
              </a>
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Call Studio</span>
              </a>
              <a
                href={BUSINESS.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all text-center"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-amber shrink-0" />
                <span className="truncate">Studio Directions</span>
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

        {/* Step 3: Technology Overview - What is Graphene Coating? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  NEXT-GEN NANOTECHNOLOGY
                </div>
                <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                  WHAT IS <span className="text-3m-red">3M</span>GRAPHENE COATING?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M Graphene Coating infuses single-atom-thick carbon matrices directly into ceramic liquid polymers. This creates an exceptionally slick, thermal-dissipating shield over your car’s clearcoat.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Because graphene dissipates surface heat far more efficiently than standard coatings, water droplets evaporate without leaving etched mineral spots—making it ideal for vehicles exposed to Chennai’s intense solar heat along OMR and ECR.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Flame className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Heat Dissipation</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Anti-Water Spotting</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sun className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">100% Thermal</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">UV Resistance</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Droplets className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Ultra-Slick</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Hydrophobic Contact</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white flex items-center justify-center">
                    {renderWith3MLogo("3M Certified")}
                  </div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Studio Backing</div>
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
                Verified Graphene Coating Properties
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Graphene Matrix Formulation",
                  desc: "Combines carbon atom lattices with high-grade liquid polymers to form a super-slick surface defense layer.",
                },
                {
                  title: "Reduced Water Spotting",
                  desc: "High thermal dissipation properties minimize mineral spot etching from rain, groundwater, and hard tap water washing.",
                },
                {
                  title: "Enhanced Tensile Strength",
                  desc: "Carbon structure provides superior resistance against wash marring, bug splatter, and bird dropping chemical etching.",
                },
                {
                  title: "Deep Optical Gloss",
                  desc: "Amplifies dark paint tones, metallic flake vibrancy, and mirror reflection depth.",
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
                Is Graphene Coating Right for Your Vehicle?
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
                Our 4-Stage Graphene Execution Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-metallic-400 max-w-xl mx-auto font-mono">
                Executed in temperature and dust-controlled cleanroom bays at <span className="text-3m-red">3M</span> OMR
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {executionSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-sm bg-[#0e0e0e]/92 border border-white/10 flex flex-col justify-between relative group">
                  <div>
                    <div className="font-mono text-2xl font-black text-brand-red mb-2">{step.step}</div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1.5">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-metallic-400 font-light leading-relaxed">{renderWith3MLogo(step.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 7: Graphene Coating Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  STUDIO PORTFOLIO
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                  Graphene Coating Gallery
                </h2>
              </div>
              <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
                GRAPHENE MATRIX AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M Graphene Coating"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="graphene" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M Graphene Coating" />

        {/* Step 10: Graphene Coating FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Graphene Coating FAQ
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
        <RelatedServicesNav currentServiceId="graphene" />

        {/* Bottom CTA Section */}
        <ServiceBottomCTA serviceName="Graphene Coating" />
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

export default GraphenePage;