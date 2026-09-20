import React from "react";
import { OFFICIAL_SERVICES } from "../../data/services";
import { ArrowRight } from "lucide-react";

const ServiceShowcase: React.FC = () => {
  return (
    <div className="service-showcase flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-6 lg:block lg:overflow-visible lg:pb-0">
      {OFFICIAL_SERVICES.map((service, index) => {
        return (
          <a
            key={service.id}
            href={service.route}
            draggable={false}
            className="group relative flex min-h-[25rem] w-[min(86vw,30rem)] shrink-0 snap-start flex-col overflow-hidden border border-white/10 bg-dark-950/70 transition-colors duration-500 hover:border-brand-red/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-4 lg:min-h-0 lg:w-full lg:flex-row lg:items-stretch lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:py-8 first:lg:border-t"
          >
            <div className="order-2 relative h-48 shrink-0 overflow-hidden bg-dark-900 lg:order-1 lg:h-52 lg:w-1/2">
              <img src={service.image} alt={`${service.title} service showcase`} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]" loading={index < 2 ? "eager" : "lazy"} />
              <span className="absolute left-4 top-4 border border-white/20 bg-dark-950/80 px-2.5 py-1 font-mono text-[9px] tracking-widest text-white">{service.tag}</span>
              <span className="absolute right-4 top-4 border border-brand-red/40 bg-brand-red/90 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-white shadow-lg">{service.priceDisplay}</span>
            </div>
            <div className="order-1 flex flex-1 flex-col justify-center p-5 lg:order-2 lg:px-10 lg:py-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.28em] text-brand-red font-bold">{String(index + 1).padStart(2, "0")} / SERVICES</span>
                <span className="lg:hidden font-mono text-xs font-bold text-brand-amber">{service.priceDisplay}</span>
              </div>
              <h3 className="mt-3 max-w-xl font-cinematic text-2xl font-bold uppercase leading-none tracking-wide text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">{service.categoryName}</h3>
              <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-gray-200 font-light transition-colors duration-500 group-hover:text-white lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-24 lg:group-hover:opacity-100">{service.shortDescription}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white font-semibold transition-colors group-hover:text-brand-red">Explore service <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" /></span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative w-full bg-transparent py-12 md:py-16 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-2 sm:mb-3">
              <span className="w-5 sm:w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-[10px] sm:text-xs text-metallic-400 tracking-super-wide uppercase">
                OFFICIAL SERVICE MATRIX
              </span>
            </div>
            <h2 className="font-cinematic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
              STUDIO SERVICES
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-[11px] sm:text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            AUTHORITATIVE AUTOMOTIVE DETAILING, SURFACE COATINGS & ADVANCED FILMS
          </p>
        </div>

        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <ServiceShowcase />
        </div>
      </div>
    </section>
  );
};