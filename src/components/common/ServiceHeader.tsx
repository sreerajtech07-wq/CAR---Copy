import React from "react";
import { ArrowLeft, Phone } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { renderWith3MLogo } from "./Brand3MLogo";
import { WhatsAppIcon } from "./Icons";

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
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappClean}?text=Hi%203M%20Car%20Care%20OMR,%20can%20I%20get%20more%20info%20on%20${encodeURIComponent(
    serviceName
  )}%3F`;

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8">
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
              className="hidden lg:inline-flex items-center text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors mr-2"
            >
              <span>{renderWith3MLogo(nextServiceLabel)}</span>
              <span className="ml-1">→</span>
            </a>
          ) : (
            <span className="hidden lg:inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-brand-amber mr-2">
              <span>{renderWith3MLogo(serviceName.toUpperCase())}</span>
              <span className="ml-1">→</span>
            </span>
          )}

          {/* Red Phone Call Button */}
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-[#b3141a] hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{BUSINESS.phone}</span>
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
