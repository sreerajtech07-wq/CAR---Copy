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

export const CeramicPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "3M Certified Technicians", desc: "Factory-trained precision application" },
    { label: "Dust-Controlled Cleanroom", desc: "Enclosed temperature & humidity bay" },
    { label: "OMR / ECR Coastal Protection", desc: "Salt mist & UV yellowing defense" },
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
      title: "Cleanroom Ceramic Coating Application",
      desc: "Cross-hatch manual application of 3M Ceramic liquid polymer in enclosed dust-filtered cleanroom bays.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Daily drivers exposed to Chennai heat & UV radiation",
        "Owners wanting effortless self-cleaning wash maintenance",
        "High-gloss metallic & dark color paint depth enhancement",
        "Coastal OMR/ECR salt spray & humidity defense",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You need heavy physical impact protection against highway rock chips (Choose 3M PPF)",
        "You seek maximum thermal dissipation for high-heat conditions (Choose 3M Graphene Coating)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?auto=format&fit=crop&w=1200&q=80",
      title: "Hydrophobic Contact Angle & Water Beading",
      category: "SURFACE DEFENSE",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0061.jpg",
      title: "Deep Gloss Paint Protection",
      category: "OPTICAL GLOSS",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/ceramic_coating.jpg",
      title: "3M Ceramic Coating Matrix",
      category: "COATING MATRIX",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/graphene_coating.jpg",
      title: "Hydrophobic Surface Shield",
      category: "SURFACE DEFENSE",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183501.jpg",
      title: "Cleanroom Ceramic Inspection",
      category: "INSPECTION TUNNEL",
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
        serviceName="Ceramic Coating"
        nextServiceHref="/graphene-coating.html"
        nextServiceLabel="Graphene Coating"
      />

      <main className="relative z-10">
        {/* Step 1: Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                MOLECULAR PROTECTION // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight leading-snug">
              <span className="text-3m-red">3M</span>CERAMIC COATING &amp; SURFACE DEFENSE
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
                    20,000*
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Advanced liquid polymer bonding delivering intense liquid gloss, dynamic hydrophobic water beading, and persistent clearcoat defense against Chennai's coastal environment.
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
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20Ceramic%20Coating.`}
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

        {/* Step 3: What Is Ceramic Coating? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  TECHNOLOGY OVERVIEW
                </div>
                <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                  WHAT IS <span className="text-3m-red">3M</span>CERAMIC COATING?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M Ceramic Coating is a premium liquid silicon dioxide (SiO2) formula that chemically bonds to your car’s factory clearcoat at a molecular level. Rather than washing off like wax, it forms a semi-permanent ceramic glass layer.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Engineered specifically to resist Chennai’s intense UV rays, industrial fallout, and saline coastal air along OMR and ECR, it elevates your vehicle’s clearcoat into a mirror-like, hydrophobic surface that sheds dirt and water effortlessly.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Droplets className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">110°+</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Water Contact Angle</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sun className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">99% UV</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Oxidation Shield</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Optical</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Gloss Depth</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white flex items-center justify-center">
                    {renderWith3MLogo("3M Warranty")}
                  </div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Official Backing</div>
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

        {/* Step 5: Decision Guide - Is This Right for Your Car? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                DECISION GUIDE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Is Ceramic Coating Right for Your Vehicle?
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

        {/* Step 6: 4-Step Studio Execution Process */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                WORKFLOW EXCELLENCE
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Our 4-Stage Ceramic Execution Process
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

        {/* Step 7: Ceramic Coating Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
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
                    alt={img.title || "3M Ceramic Coating"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="ceramic" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M Ceramic Coating" />

        {/* Step 10: Ceramic Coating FAQs */}
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

        {/* Step 11: Explore Related Services */}
        <RelatedServicesNav currentServiceId="ceramic" />

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