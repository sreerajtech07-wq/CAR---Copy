import React from "react";
import { ArrowLeft, Phone } from "lucide-react";
import { BUSINESS } from "../../data/business";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

interface ServiceHeaderProps {
  serviceName: string;
  nextServiceHref?: string;
  nextServiceLabel?: string;
}

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  serviceName,
  nextServiceHref,
  nextServiceLabel,
}) => {
  const whatsappUrl = `https://wa.me/917601933555?text=Hi%203M%20Car%20Care%20OMR,%20can%20I%20get%20more%20info%20on%20${encodeURIComponent(
    serviceName
  )}%3F`;

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Back to Home */}
        <a
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-brand-red" />
          <span className="hidden sm:inline">BACK TO HOME</span>
          <span className="sm:hidden">HOME</span>
        </a>

        {/* Right: Service Label & CTA Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {nextServiceHref && nextServiceLabel ? (
            <a
              href={nextServiceHref}
              className="hidden lg:inline-block text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors mr-2"
            >
              {nextServiceLabel} →
            </a>
          ) : (
            <span className="hidden lg:inline-block text-xs font-mono font-semibold uppercase tracking-wider text-brand-amber mr-2">
              {serviceName.toUpperCase()} →
            </span>
          )}

          {/* Red Phone Call Button */}
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-[#b3141a] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+91 76019 33555</span>
          </a>

          {/* Green WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-[#25d366] hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span className="hidden xs:inline">WHATSAPP</span>
          </a>
        </div>
      </div>
    </header>
  );
};
