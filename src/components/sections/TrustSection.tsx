import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TrustMetric {
  readonly id: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly note: string;
}

const TRUST_METRICS: readonly TrustMetric[] = [
  { id: "protected", value: 15000, suffix: "+", label: "CARS PROTECTED", note: "Official studio metric" },
  { id: "customers", value: 13000, suffix: "+", label: "HAPPY CUSTOMERS", note: "Official studio metric" },
  { id: "experience", value: 12, suffix: "+", label: "YEARS EXPERIENCE", note: "Official studio metric" },
  { id: "services", value: 8, suffix: "", label: "OFFICIAL SERVICES", note: "Current service catalogue" },
];

export const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const counters = Object.fromEntries(TRUST_METRICS.map((metric) => [metric.id, 0]));
      const animation = gsap.to(counters, {
        protected: TRUST_METRICS[0].value,
        customers: TRUST_METRICS[1].value,
        experience: TRUST_METRICS[2].value,
        services: TRUST_METRICS[3].value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setValues(Object.fromEntries(Object.entries(counters).map(([id, value]) => [id, Math.round(value)])));
        },
      });

      return () => animation.kill();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="trust" className="relative w-full border-b border-slate-200 bg-white py-24 text-studio-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between border-b border-slate-200 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs tracking-super-wide text-slate-500">WHY US</span>
            </div>
            <h2 className="font-cinematic text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl md:text-5xl">TRUST, IN THE DETAILS</h2>
          </div>
          <p className="mt-4 max-w-md font-mono text-xs tracking-wider text-slate-500 md:mt-0 md:text-right">A STUDIO RECORD BUILT AROUND CAREFUL WORK AND CONSISTENT PROTECTION</p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200 border-y border-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.id} className="group px-2 py-8 sm:px-7 sm:py-10 lg:px-8">
              <div className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                {(values[metric.id] ?? 0).toLocaleString()}{metric.suffix}
              </div>
              <div className="mt-4 font-mono text-xs tracking-[0.16em] text-brand-red">{metric.label}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">{metric.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
