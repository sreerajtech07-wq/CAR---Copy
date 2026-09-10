import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";

interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly icon: React.ReactNode;
  readonly suffix: string;
}

const STATS: StatItem[] = [
  {
    id: "cars-protected",
    value: "15000",
    suffix: "+",
    label: "Cars Protected",
    icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
  },
  {
    id: "happy-customers",
    value: "13000",
    suffix: "+",
    label: "Happy Customers",
    icon: <HeartHandshake className="w-6 h-6 text-brand-amber" />,
  },
  {
    id: "years-experience",
    value: "12",
    suffix: "+",
    label: "Years Experience",
    icon: <Award className="w-6 h-6 text-metallic-300" />,
  },
];

export const StatsSection: React.FC = () => {
  const [visibleValues, setVisibleValues] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            STATS.forEach((stat) => {
              let start = 0;
              const end = parseInt(stat.value, 10);
              const duration = 2000;
              const step = Math.ceil(end / (duration / 16));
              const timer = setInterval(() => {
                start = Math.min(start + step, end);
                setVisibleValues((prev) => ({ ...prev, [stat.id]: start }));
                if (start >= end) {
                  clearInterval(timer);
                }
              }, 16);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="studio-metrics"
      className="relative w-full bg-dark-900 py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-2.5 mb-6 justify-center">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            STUDIO METRICS
          </span>
          <span className="w-6 h-[1px] bg-brand-red" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinematic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            BY THE NUMBERS
          </h2>
          <p className="font-mono text-xs text-metallic-400 max-w-2xl mx-auto tracking-wider">
            TRUSTED BY DRIVERS ACROSS CHENNAI'S OMR / ECR CORRIDOR FOR OVER A DECADE
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="relative p-8 sm:p-10 rounded-sm bg-dark-950/60 border border-white/10 text-center transition-all duration-300 group hover:bg-dark-800 hover:border-brand-red/30"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                {stat.icon}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white">
                    {visibleValues[stat.id] !== undefined
                      ? visibleValues[stat.id].toLocaleString()
                      : "0"}
                  </span>
                  <span className="font-display text-3xl font-bold text-brand-red">
                    {stat.suffix}
                  </span>
                </div>
                <div className="font-mono text-xs text-metallic-400 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="font-mono text-[10px] text-metallic-500 uppercase tracking-widest">
                  Verified Studio Achievement
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;