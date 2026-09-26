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
import { renderWith3MLogo } from "../components/common/Brand3MLogo";

export const PpfPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "Self-Healing TPU Film", desc: "Heat-activated scratch self-repair" },
    { label: "Precision Computerized Cut", desc: "No razor blades touch factory paintwork" },
    { label: "OMR / ECR Stone-Chip Defense", desc: "Highway debris & gravel impact shield" },
    { label: "100% Authentic 3M Materials", desc: "Non-yellowing optical transparency" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Decontamination & Surface Polish",
      desc: "Iron fallout removal, clay bar cleansing, and single-stage gloss polish to eliminate underlying imperfections.",
    },
    {
      step: "02",
      title: "Precision CAD Pattern Plotting",
      desc: "Digital vehicle pattern rendering cut via high-precision plotter to guarantee 100% exact panel fitment.",
    },
    {
      step: "03",
      title: "Slip Solution Hydro-Fitment",
      desc: "Squeegee alignment using specialized non-corrosive slip solution in dust-controlled cleanroom bays.",
    },
    {
      step: "04",
      title: "Seamless Edge Tucking & Sealing",
      desc: "Manual edge wrapping around panel borders for invisible seam protection and zero lift risk.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "New cars seeking 100% physical protection against highway stone chips & gravel",
        "High-impact zones like front bumpers, bonnets, fenders, and side mirrors",
        "Vehicle owners wanting self-healing scratch technology under sunlight",
        "Preserving maximum original factory paint resale value",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You seek high optical gloss and hydrophobic water-sheeding without physical film thickness (Choose 3M Ceramic Coating)",
        "You want thermal dissipation and water spot resistance over non-impact panels (Choose 3M Graphene Coating)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1617898528081-20d57598d40d?auto=format&fit=crop&w=1200&q=80",
      title: "3M Scotchgard™ TPU Installation",
      category: "PROTECTION INSTALLATION",
    },
    {
      src: "https://images.unsplash.com/photo-1652987086612-d948b775d358?auto=format&fit=crop&w=1200&q=80",
      title: "Precision Edge Tucking & Wrapping",
      category: "FACILITY ATELIER",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/v1790356982/Videoshot_20260925_183651.jpg",
      title: "High-Gloss Self-Healing Barrier",
      category: "PRECISION CRAFT",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/v1790401491/Videoshot_20260925_183630.jpg",
      title: "Full Bonnet Armor Coverage",
      category: "PROTECTION ZONES",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/v1790401491/Videoshot_20260925_183627.jpg",
      title: "Computer-Cut Template Fitment",
      category: "TEMPLATE ACCURACY",
    },
    {
      src: "https://res.cloudinary.com/ljrerns0/image/upload/v1790401491/Videoshot_20260925_183639.jpg",
      title: "3M PPF Clear Shield Protection",
      category: "CLEAR SHIELD",
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
        serviceName="Paint Protection Film (PPF)"
        nextServiceHref="/ceramic-coating.html"
        nextServiceLabel="Ceramic Coating"
      />

      <main className="relative z-10">
        {/* Step 1: Hero Banner */}
        <section className="relative py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-super-wide uppercase">
                PHYSICAL ARMOR // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight leading-snug">
              <span className="text-3m-red">3M</span>PPF (PAINT PROTECTION FILM) &amp; PHYSICAL ARMOR
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
                    600*
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Ultra-durable, optically clear thermoplastic polyurethane (TPU) film engineered to absorb physical impacts from stone chips, gravel, key scratches, and harsh environmental fallout.
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
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20PPF.`}
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

        {/* Step 3: Technology Overview - What is PPF? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  PHYSICAL SURFACE PROTECTION
                </div>
                <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                  WHAT IS <span className="text-3m-red">3M</span>PAINT PROTECTION FILM (PPF)?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  3M Paint Protection Film (PPF) is an elastic, high-grade Thermoplastic Polyurethane (TPU) film applied directly over painted body panels. Unlike liquid coatings, PPF forms a physical shock-absorbing barrier.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Equipped with heat-activated self-healing clearcoat technology, minor wash swirls and fine scratches vanish when exposed to engine heat or sunlight along Chennai’s roads.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Shield className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Impact Shield</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Stone Chip Resistance</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Self-Healing</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Heat-Activated TPU</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Layers className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Invisible Fit</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Non-Yellowing Film</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white flex items-center justify-center">
                    {renderWith3MLogo("3M Warranty")}
                  </div>
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
                Verified PPF Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Self-Healing TPU Film",
                  desc: "Advanced thermoplastic polyurethane film that automatically repairs minor scratches and swirl marks under solar heat.",
                },
                {
                  title: "High-Impact Kinetic Shield",
                  desc: "Absorbs physical momentum from flying gravel, highway stone chips, and door dings to preserve factory paint.",
                },
                {
                  title: "Optical Clarity & High Gloss",
                  desc: "Crystal-clear, non-yellowing film maintains original paint luster without orange-peel distortion.",
                },
                {
                  title: "Stain & Chemical Resistance",
                  desc: "Shields clearcoat from acid rain, bug splatters, bird droppings, and industrial environmental fallout.",
                },
                {
                  title: "Precision CAD Computer-Cut Fitment",
                  desc: "Custom digitally plotted template designs for precise panel coverage without razor blade risk on paintwork.",
                },
                {
                  title: "Enclosed Dust-Controlled Application",
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
                Is 3M PPF Right for Your Vehicle?
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
                Our 4-Stage PPF Installation Process
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

        {/* Step 7: PPF Photo Gallery */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-1">
                  STUDIO PORTFOLIO
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                  Paint Protection Film Gallery
                </h2>
              </div>
              <p className="font-mono text-xs text-metallic-400 mt-2 md:mt-0">
                PHYSICAL ARMOR AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M PPF Installation"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="ppf" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M PPF (Paint Protection Film)" />

        {/* Step 10: PPF FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase">
                Paint Protection Film FAQ
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
        <RelatedServicesNav currentServiceId="ppf" />

        {/* Bottom CTA Section */}
        <ServiceBottomCTA serviceName="Paint Protection Film (PPF)" />
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