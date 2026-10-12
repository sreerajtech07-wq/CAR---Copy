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
import { renderWith3MLogo } from "../components/common/Brand3MLogo";

export const AdditionalServicesPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const trustPoints = [
    { label: "AC Vent Sanitization", desc: "Anti-bacterial fogging & odor removal" },
    { label: "Headlight Lens Restoration", desc: "UV yellowing & haze clarity polish" },
    { label: "Windshield Glass Treatment", desc: "Hydrophobic rain-repellent coating" },
    { label: "100% Authentic 3M Formulations", desc: "Studio certified quality assurance" },
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Diagnostic Intake & Inspection",
      desc: "Multi-point inspection of vehicle interior HVAC vents, headlight clarity, and glass condition.",
    },
    {
      step: "02",
      title: "Anti-Bacterial AC Vapor Treatment",
      desc: "Ultrasonic evaporator fogging to neutralize mold spores, mildew, and stale AC odors.",
    },
    {
      step: "03",
      title: "Headlight Multi-Stage Oxidation Removal",
      desc: "Wet sanding and compound polishing to restore pitted polycarbonate headlight lenses to factory clarity.",
    },
    {
      step: "04",
      title: "Engine Bay Degreasing & Dressing",
      desc: "Precision waterless degreasing and non-tacky protective dressing of engine bay plastics.",
    },
  ];

  const decisionFactors = [
    {
      type: "BEST FOR",
      items: [
        "Owners noticing bad odors or mildew smells when turning on car air conditioning",
        "Vehicles with yellowed or hazy headlights impairing nighttime driving safety",
        "Engines requiring safe, non-corrosive bay degreasing and cosmetic dressing",
        "Adding specialized interior/exterior touchups alongside coating appointments",
      ],
    },
    {
      type: "CONSIDER ALTERNATIVES IF",
      items: [
        "You need comprehensive full-vehicle paint correction or liquid ceramic armor (Choose 3M Ceramic or Graphene)",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175046.jpg",
      title: "AC Vent Cleaning & Sanitization",
      category: "INTERIOR CARE",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175042.jpg",
      title: "Professional Car Wash",
      category: "EXTERIOR CLEANING",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175215.jpg",
      title: "Car Polish & Restoration",
      category: "PAINT REFINEMENT",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175213.jpg",
      title: "Interior Deep Care",
      category: "CABIN RESTORATION",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175050.jpg",
      title: "Ceramic Boost & Maintenance",
      category: "COATING MAINTENANCE",
    },
    {
      src: "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175220.jpg",
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
        serviceName="3M Additional Services"
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
                DETAIL PROTOCOLS // 3M CAR CARE STUDIO – OMR / ECR
              </span>
            </div>

            <h1 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              <span className="text-3m-red">3M</span> ADDITIONAL CAR CARE SERVICES &
              <span className="block text-metallic-silver">SPECIALIZED DETAIL PROTOCOLS</span>
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
                    1,800*
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-medium">onwards</span>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-metallic-300 max-w-3xl font-light leading-relaxed">
              Targeted automotive restoration treatments including AC vent sanitization, headlight yellowing restoration, windshield glass clarity treatments, and engine bay detailing at 3M OMR.
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
                href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I'm%20interested%20in%203M%20Additional%20Services.`}
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

        {/* Step 3: Technology Overview - What are Additional Services? */}
        <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-brand-red tracking-widest uppercase mb-2">
                  SPECIALIZED TOUCHPOINT CARE
                </div>
                <h2 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  WHAT ARE <span className="text-3m-red">3M</span>ADDITIONAL SERVICES?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  Beyond major surface coatings, 3M Car Care Studio OMR offers specialized restoration modules targeted at individual vehicle components that suffer from daily environmental wear and heat exposure.
                </p>
                <p className="mt-3 text-sm sm:text-base text-metallic-300 font-light leading-relaxed">
                  From antimicrobial AC vent fogging to yellowed headlight lens restoration and hydrophobic glass treatment, these services restore safety, hygiene, and optical clarity.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Wrench className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">AC Sanitization</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Anti-Bacterial Vapor</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Headlight Optics</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Lens Oxidation Removal</div>
                </div>
                <div className="p-5 rounded-sm bg-[#0e0e0e]/90 border border-white/10 text-center">
                  <Layers className="w-8 h-8 text-brand-amber mx-auto mb-2" />
                  <div className="font-mono text-xl font-bold text-white">Glass Coating</div>
                  <div className="font-mono text-[11px] text-metallic-400 uppercase mt-1">Rain Shedding Hydrophobic</div>
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
                Verified Service Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AC Vent Cleaning & Sanitization",
                  desc: "Targeted evaporator treatment and antimicrobial solution to neutralize moisture odors and cabin allergens.",
                },
                {
                  title: "Professional Car Wash",
                  desc: "Multi-stage exterior foam wash, iron chemical decontamination, and clay bar treatment.",
                },
                {
                  title: "Car Polish & Paint Refinement",
                  desc: "Multi-stage dual-action machine polishing to eliminate swirl marks and oxidation.",
                },
                {
                  title: "Interior Deep Care",
                  desc: "Deep-clean cabin upholstery, leather conditioning, dashboard dressing, and carpet extraction.",
                },
                {
                  title: "Headlight Restoration",
                  desc: "Multi-step wet sanding and UV clear coat restoration to eliminate yellowing and hazy polycarbonate lenses.",
                },
                {
                  title: "Dust-Controlled Application",
                  desc: "Applied in our enclosed, dust-filtered studio bays with temperature stabilization.",
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
                Are Additional Services Right for Your Vehicle?
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
                Our 4-Stage Detail Execution Process
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-metallic-400 max-w-xl mx-auto font-mono">
                Executed in temperature and dust-controlled bays at <span className="text-3m-red">3M</span> OMR
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

        {/* Step 7: Additional Services Photo Gallery */}
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
                SPECIALIZED DETAILING AT METTUKUPPAM STUDIO
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
                    alt={img.title || "3M Germ Kleen"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 8: Category Verified Reviews */}
        <ServiceReviews category="germ-kleen" />

        {/* Step 9: Vehicle Quote Widget */}
        <ServiceQuoteWidget serviceName="3M Additional Services" />

        {/* Step 10: Additional Services FAQs */}
        <section className="py-16 sm:py-24 border-b border-white/10 bg-transparent relative z-10">
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

        {/* Step 11: Explore Related Services */}
        <RelatedServicesNav currentServiceId="additional" />

        {/* Bottom CTA Section */}
        <ServiceBottomCTA serviceName="3M Additional Services" />
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