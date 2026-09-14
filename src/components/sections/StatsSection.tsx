import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TrustMetric {
  readonly id: string;
  readonly displayValue: string;
  readonly label: string;
  readonly isRating?: boolean;
}

const TRUST_METRICS: readonly TrustMetric[] = [
  { id: "cars", displayValue: "15,000+", label: "CARS PROTECTED" },
  { id: "customers", displayValue: "13,000+", label: "HAPPY CUSTOMERS" },
  { id: "experience", displayValue: "12+", label: "YEARS EXPERIENCE" },
  { id: "rating", displayValue: "4.5 ★", label: "2,200+ GOOGLE REVIEWS", isRating: true },
];

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".trust-reveal", {
        y: 24,
        autoAlpha: 0,
        immediateRender: false,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust"
      aria-labelledby="trust-title"
      className="relative w-full overflow-hidden bg-transparent py-12 md:py-16"
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
                    {metric.displayValue}
                  </span>
                </div>
                {metric.isRating && (
                  <div className="mt-2.5 flex items-center gap-1" aria-label="Five star customer rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-[#F5BD47] text-[#F5BD47]" aria-hidden="true" />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 inline-block px-3.5 py-1.5 rounded-sm bg-[#F5BD47]/10 border border-[#F5BD47]/40 font-mono text-xs font-bold tracking-[0.2em] text-[#F5BD47] uppercase shadow-sm shadow-[#F5BD47]/10">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
