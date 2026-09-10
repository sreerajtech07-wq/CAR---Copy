import React, { useEffect, useRef } from "react";
import { OFFICIAL_SERVICES } from "../../data/services";
import { ArrowRight } from "lucide-react";

const SERVICE_PAGE_MAP: Record<string, string> = {
  "car-detailing": "/car-detailing.html",
  "ceramic-coating": "/ceramic-coating.html",
  "graphene-coating": "/graphene-coating.html",
  "borophene-coating": "/borophene-coating.html",
  "ppf": "/ppf.html",
  "sun-film": "/sun-film.html",
  "anti-rust": "/anti-rust.html",
  "additional-services": "/additional-services.html",
};

const ServiceMarquee: React.FC<{ onSelect: (id: string) => void }> = ({ onSelect }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastXRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const suppressClickRef = useRef(false);
  const pointerDownXRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const wrapOffset = () => {
      const loopWidth = track.scrollWidth / 2;
      if (!loopWidth) return;
      while (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
      while (offsetRef.current > 0) offsetRef.current -= loopWidth;
    };

    const render = () => {
      if (!isPausedRef.current && !isDraggingRef.current) offsetRef.current -= 0.45;
      wrapOffset();
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frameRef.current = window.requestAnimationFrame(render);
    };

    frameRef.current = window.requestAnimationFrame(render);
    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => {
    if (!isDraggingRef.current) isPausedRef.current = false;
  };
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    didDragRef.current = false;
    lastXRef.current = event.clientX;
    pointerDownXRef.current = event.clientX;
  };
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const distance = event.clientX - lastXRef.current;
    if (Math.abs(distance) > 2) didDragRef.current = true;
    offsetRef.current += distance;
    lastXRef.current = event.clientX;
  };
  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    suppressClickRef.current = didDragRef.current;
    resume();
  };
  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>, serviceId: string) => {
    const moved = Math.abs(lastXRef.current - pointerDownXRef.current);
    if (suppressClickRef.current || moved > 8) event.preventDefault();
    suppressClickRef.current = false;
    onSelect(serviceId);
  };

  return (
    <div
      className="service-marquee-track flex w-max cursor-grab gap-5 touch-pan-y active:cursor-grabbing"
      ref={trackRef}
      onPointerEnter={pause}
      onPointerLeave={resume}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      {[...OFFICIAL_SERVICES, ...OFFICIAL_SERVICES].map((service, index) => {
        const servicePageUrl = SERVICE_PAGE_MAP[service.id];
        return (
          <a
            key={`${service.id}-${index}`}
            href={servicePageUrl}
            onClick={(event) => handleCardClick(event, service.id)}
            draggable={false}
            className="group relative flex h-[21rem] w-[17rem] shrink-0 select-none flex-col overflow-hidden rounded-sm border border-white/10 bg-dark-950 shadow-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          >
            <div className="relative h-36 shrink-0 overflow-hidden bg-dark-900">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading={index < OFFICIAL_SERVICES.length ? "eager" : "lazy"} />
              <span className="absolute left-3 top-3 border border-white/15 bg-dark-950/80 px-2 py-1 font-mono text-[9px] tracking-widest text-white">{service.tag}</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span className="font-mono text-[10px] tracking-widest text-brand-red">0{(index % OFFICIAL_SERVICES.length) + 1} / SERVICES</span>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-wide text-white">{service.title}</h3>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-metallic-400">{service.shortDescription}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-mono text-[10px] uppercase tracking-wider text-white transition-colors group-hover:text-brand-red">View service <ArrowRight className="h-3.5 w-3.5" /></span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative w-full bg-dark-900 py-16 sm:py-24 md:py-32 border-b border-white/10 overflow-hidden">
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

        <div className="relative -mx-4 overflow-hidden py-4 px-4 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] sm:-mx-6 sm:px-6 lg:-mx-4 lg:px-4">
          <ServiceMarquee onSelect={() => undefined} />
        </div>
      </div>
    </section>
  );
};