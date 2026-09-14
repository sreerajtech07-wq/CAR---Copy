import React from "react";
import { Phone, Navigation } from "lucide-react";
import { BUSINESS } from "../../data/business";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

interface ServiceBottomCTAProps {
  serviceName: string;
}

export const ServiceBottomCTA: React.FC<ServiceBottomCTAProps> = ({ serviceName }) => {
  const whatsappUrl = `https://wa.me/917601933555?text=Hi%203M%20Car%20Care%20OMR,%20can%20I%20get%20more%20info%20on%20${encodeURIComponent(
    serviceName
  )}%3F`;

  return (
    <section className="py-16 sm:py-20 bg-dark-900 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-white text-center leading-tight">
          SCHEDULE A {serviceName.toUpperCase()} ASSESSMENT
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
            <span>CALL +91 76019 33555 / 666</span>
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
