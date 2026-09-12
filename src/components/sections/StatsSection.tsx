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
    <section
      ref={sectionRef}
      id="trust"
      aria-labelledby="trust-title"
      className="relative w-full overflow-hidden bg-transparent py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="trust-reveal mb-14 flex flex-col justify-between border-b border-white/10 pb-7 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs font-semibold tracking-super-wide text-brand-red uppercase">THE DIFFERENCE</span>
            </div>
            <h2 id="trust-title" className="font-cinematic text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
              Precision in every detail.
            </h2>
          </div>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-200 md:mt-0 md:text-right font-light">
            Professional automotive care in OMR, Chennai, built around precise detailing, advanced protection and consistent studio craft.
          </p>
        </div>

        <div className="trust-reveal grid grid-cols-1 rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.id} className="group border-b border-white/10 px-6 py-8 sm:px-7 sm:py-10 sm:[&:nth-child(even)]:border-l lg:border-b-0 lg:border-l first:lg:border-l-0 last:border-b-0 flex flex-col items-start justify-between">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
                    {metric.isRating ? (visibleValues[metric.id] ?? 0).toFixed(1) : (visibleValues[metric.id] ?? 0).toLocaleString()}
                  </span>
                  <span className="font-sans text-2xl sm:text-3xl font-bold text-brand-red leading-none">{metric.suffix}</span>
                </div>
                {metric.isRating && (
                  <div className="mt-2.5 flex items-center gap-1" aria-label="Five star customer rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-brand-red text-brand-red" aria-hidden="true" />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 inline-block px-3 py-1 bg-brand-red/15 border border-brand-red/30 rounded-sm font-mono text-[11px] sm:text-xs font-bold tracking-widest text-brand-red uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STUDIO_STANDARDS.map((standard) => (
            <div key={standard.title} className="trust-reveal p-6 sm:p-7 rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 border-l-2 border-l-brand-red">
              <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span>{standard.title}</span>
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-200 font-light">
                {standard.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
