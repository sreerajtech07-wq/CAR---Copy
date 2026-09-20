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
  Shield,
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

export const AntiRustPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "Heavy-Duty Cavity Wax Barrier", desc: "Penetrates internal body panels & doors" },
    { label: "High-Pressure Hydraulic Wash", desc: "Removes caked mud & salt before coating" },
    { label: "OMR / ECR Saline Humidity Defense", desc: "Engineered for coastal Chennai air" },
    { label: "100% Authentic 3M Materials", desc: "Multi-year studio warranty backing" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Underbody Hydraulic Degreasing Wash",
      desc: "High-pressure undercarriage washing to clear mud, road salt, grime, and oil deposits.",
    },
    {
      step: "02",
      title: "Pneumatic Air Drying & Inspection",
      desc: "Industrial air drying to purge water pockets from chassis cavities, frame rails, and wheel wells.",
    },
    {
      step: "03",
      title: "Rubberized Underbody Spray Application",
      desc: "Heavy-duty anti-corrosion barrier coating sprayed evenly across lower chassis panels and silencers.",
    },
    {
      step: "04",
      title: "Cavity Wax Internal Injection",
      desc: "High-penetration wax sprayed inside door panels, rocker panels, and hollow chassis crossmembers.",
    },
    {
      step: "05",
      title: "Curing & Multi-Point Inspection Audit",
      desc: "Quality inspection to guarantee 100% uniform barrier thickness and zero missed joints.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Vehicles driven regularly along saline coastal corridors (OMR & ECR)",
        "New cars seeking long-term chassis rust and underbody oxidation prevention",
        "Damp climate protection during monsoon rainy seasons in Chennai",
        "Preserving floor pan structural integrity and exhaust heat shield longevity",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You need exterior paintwork gloss enhancement or scratch protection (Choose 3M Ceramic or PPF)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789643192/Videoshot_20260917_162739.jpg",
      title: "Anti-Rust Underbody Treatment",
      category: "CHASSIS DEFENSE",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789643193/Videoshot_20260917_162730.jpg",
      title: "Underbody Preparation",
      category: "FACILITY ATELIER",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789643189/Videoshot_20260917_163117.jpg",
      title: "Corrosion Prevention Application",
      category: "PRECISION CRAFT",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789643179/Videoshot_20260917_162819.jpg",
      title: "Protective Coating Coverage",
      category: "CHASSIS PROTECTION",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789647681/Videoshot_20260917_175052.jpg",
      title: "Combined Anti-Rust & PPF",
      category: "COMBO PROTECTION",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/f_auto,q_auto,w_1200/v1789643018/Videoshot_20260917_163120.jpg",
      title: "Long-Term Chassis Protection",
      category: "DURABILITY TEST",
    },
  ];

  const faqs = [
    {
      q: "Why is anti-rust treatment important for Chennai vehicles?",
      a: "Chennai's coastal environment carries high airborne salinity that accelerates clearcoat corrosion and chassis rust. Anti-rust treatment guards vehicle chassis components and vulnerable steel from saline exposure, moisture, and road contaminants, extending vehicle lifespan significantly.",
    },
    {
      q: "How often should anti-rust treatment be applied?",
      a: "Anti-rust treatment should typically be inspected annually and re-treated according to 3M studio warranty recommendations for vehicles regularly exposed to coastal conditions.",
    },
    {
      q: "Does anti-rust treatment affect vehicle warranty?",
      a: "Professional anti-rust treatments are designed to be compatible with factory warranties. Our studio uses 3M industry-grade formulations that do not interfere with structural or mechanical warranties.",
    },
    {
      q: "Can anti-rust treatment be combined with other coatings?",
      a: "Yes, anti-rust underbody treatment can be combined with ceramic coating, graphene coating, or PPF on upper vehicle surfaces for total vehicle defense.",
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
        serviceName="3M Antirust Coating"
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
                CHASSIS DEFENSE // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              3M ANTIRUST COATING &
              <span className="block text-metallic-silver">CHASSIS DEFENSE</span>
            </h1>

            <div className="mt-5 p-4 sm:p-5 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md inline-block max-w-xs transition-all">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1 font-mono">
                  STARTING FROM
                </span>
                <div className="flex items-baseline gap-1 text-amber-400 font-mono">
                  <span className="text-lg md:text-xl font-bold">₹</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    2,900
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Heavy-duty anti-corrosion barrier engineered to shield internal body panels, door cavities, and lower chassis steel from coastal saline humidity along Chennai’s OMR and ECR roads.
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
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20Antirust%20Coating.`}
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

        {/* Step 3: Technology Overview - What is Anti-Rust Coating? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  CORROSION PREVENTION NANOTECHNOLOGY
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  What is 3M Antirust Protection?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M Antirust Coating combines high-density rubberized undercarriage sealants with penetrating cavity wax formulations. It coats exposed underbody metal and creeps inside hidden panel seams.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Engineered specifically for Chennai’s saline coastal atmosphere along OMR and East Coast Road, it prevents salt spray oxidation, rust bubbling, and premature frame degradation.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Shield className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Saline Shield</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Coastal Humidity Barrier</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Layers className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Cavity Wax</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Internal Creep Action</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Chassis Seal</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Rubberized Layer</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">3M Warranty</div>
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
                Verified Anti-Rust Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Anti-Rust Treatment",
                  desc: "Heavy-duty anti-corrosion barrier engineered to shield internal body panels, chassis steel, and door cavities.",
                },
                {
                  title: "Cavity Wax Protection",
                  desc: "High-penetration wax sprayed inside door pillars and hollow crossmembers to neutralize internal moisture traps.",
                },
                {
                  title: "Moisture & Salt Barrier",
                  desc: "Creates an impenetrable seal against high humidity, coastal saline mist, and monsoon rainwater accumulation.",
                },
                {
                  title: "Long-Term Chassis Protection",
                  desc: "Prevents undercarriage rust formation and preserves vehicle structural integrity for years of operation.",
                },
                {
                  title: "High-Pressure Hydraulic Cleansing",
                  desc: "Thorough undercarriage washing and drying protocol before sealant application.",
                },
                {
                  title: "Professional Studio Application",
                  desc: "Applied by 3M certified technicians using pneumatic spray guns in enclosed bay facilities.",
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
                Is 3M Antirust Coating Right for Your Vehicle?
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
                Our 5-Stage Anti-Rust Execution Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-metallic-400 max-w-xl mx-auto font-mono">
                Executed on hydraulic hoist bays at 3M OMR Studio
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

        {/* Step 7: Anti-Rust Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  STUDIO PORTFOLIO
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                  Anti-Rust Gallery
                </h2>
              </div>
              <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
                CHASSIS DEFENSE AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M Anti-Rust Coating"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="antirust" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M Antirust Coating" />

        {/* Step 10: Anti-Rust Coating FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Anti-Rust Coating FAQ
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
        <RelatedServicesNav currentServiceId="anti-rust" />

        {/* Bottom CTA Section */}
        <ServiceBottomCTA serviceName="3M Antirust Coating" />
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

export default AntiRustPage;