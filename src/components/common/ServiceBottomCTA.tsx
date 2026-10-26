import React from "react";
import { Phone, Navigation } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { renderWith3MLogo } from "./Brand3MLogo";
import { WhatsAppIcon } from "./Icons";

interface ServiceBottomCTAProps {
  serviceName: string;
}

export const ServiceBottomCTA: React.FC<ServiceBottomCTAProps> = ({ serviceName }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappClean}?text=Hi%203M%20Car%20Care%20OMR,%20can%20I%20get%20more%20info%20on%20${encodeURIComponent(
    serviceName
  )}%3F`;

  return (
    <section className="py-16 sm:py-20 bg-dark-900 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-white text-center leading-tight">
          SCHEDULE A {renderWith3MLogo(serviceName.toUpperCase())} ASSESSMENT
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed">
          Visit our dedicated inspection bay opposite AKDR Golf Village on Rajiv Gandhi Salai, OMR.
        </p>

        {/* Button Trio */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* 1. Red Call Button */}
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-[#b3141a] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-950/50 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>CALL {BUSINESS.phone}</span>
          </a>

          {/* 2. Green WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-[#25d366] hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>CHAT ON WHATSAPP</span>
          </a>

          {/* 3. Outline Maps Button */}
          <a
            href={BUSINESS.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-transparent hover:bg-white/10 text-white border border-neutral-600 hover:border-white font-mono text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4 text-brand-amber" />
            <span>OPEN MAPS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
