import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TrustMetric {
  readonly id: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly isRating?: boolean;
}

const TRUST_METRICS: readonly TrustMetric[] = [
  { id: "experience", value: 10, suffix: "+", label: "YEARS EXPERIENCE" },
  { id: "detailed", value: 500, suffix: "+", label: "CARS DETAILED" },
  { id: "rating", value: 4.9, suffix: "", label: "CUSTOMER RATING", isRating: true },
  { id: "attention", value: 100, suffix: "%", label: "ATTENTION TO DETAIL" },
];

const STUDIO_STANDARDS = [
  { title: "PRECISION", copy: "Calibrated inspection and paint correction preserve clearcoat integrity." },
  { title: "PROTECTION", copy: "Coatings, films and underbody treatments are selected for the vehicle and its environment." },
  { title: "CRAFT", copy: "Dedicated studio bays give every surface the time and attention it requires." },
];

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleValues, setVisibleValues] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisibleValues(Object.fromEntries(TRUST_METRICS.map((metric) => [metric.id, metric.value])));
      return;
    }

    const context = gsap.context(() => {
      const counters = Object.fromEntries(TRUST_METRICS.map((metric) => [metric.id, 0]));
      gsap.from(".trust-reveal", {
        y: 24,
        autoAlpha: 0,
        immediateRender: false,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
      gsap.to(counters, {
        experience: 10,
        detailed: 500,
        rating: 4.9,
        attention: 100,
        duration: 1.6,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none reset" },
        onUpdate: () => setVisibleValues(Object.fromEntries(Object.entries(counters).map(([id, value]) => [id, id === "rating" ? Number(value.toFixed(1)) : Math.round(value)]))),
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="trust" aria-labelledby="trust-title" className="relative w-full overflow-hidden border-b border-white/10 bg-dark-950/80 backdrop-blur-none py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="trust-reveal mb-14 flex flex-col justify-between border-b border-white/10 pb-7 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5"><span className="h-px w-6 bg-brand-red" /><span className="font-mono text-xs tracking-super-wide text-metallic-400">THE DIFFERENCE</span></div>
            <h2 id="trust-title" className="font-cinematic text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Precision in every detail.</h2>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-metallic-300 md:mt-0 md:text-right">Professional automotive care in OMR, Chennai, built around precise detailing, advanced protection and consistent studio craft.</p>
        </div>

        <div className="trust-reveal grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.id} className="group border-b border-white/10 px-1 py-8 sm:px-7 sm:py-10 sm:[&:nth-child(even)]:border-l lg:border-b-0 lg:border-l lg:px-8 first:lg:border-l-0 last:border-b-0">
              <div className="flex items-baseline gap-1"><span className={`font-display font-bold tracking-tight text-white ${metric.isRating ? "text-6xl sm:text-7xl" : "text-5xl sm:text-6xl"}`}>{metric.isRating ? (visibleValues[metric.id] ?? 0).toFixed(1) : (visibleValues[metric.id] ?? 0).toLocaleString()}</span><span className="font-display text-3xl font-bold text-brand-red">{metric.suffix}</span></div>
              {metric.isRating && <div className="mt-3 flex items-center gap-1" aria-label="Five star customer rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-brand-red text-brand-red" aria-hidden="true" />)}</div>}
              <div className="mt-4 font-mono text-xs font-semibold tracking-[0.16em] text-metallic-200">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STUDIO_STANDARDS.map((standard) => <div key={standard.title} className="trust-reveal border-l border-brand-red/60 pl-5"><h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-red">{standard.title}</h3><p className="mt-3 text-sm leading-relaxed text-metallic-300">{standard.copy}</p></div>)}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
