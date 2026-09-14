import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { additionalServices } from "../../data/services";
import { getWhatsAppInquiryUrl } from "../../utils/whatsapp";

export const StudioCare: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent py-12 md:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Subheader */}
        <div className="mb-10 pl-4 border-l-2 border-red-600">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-red-500 block mb-1">
            STUDIO CARE
          </span>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
            OTHER DETAILING SERVICES
          </h3>
          <p className="text-neutral-400 text-xs md:text-sm mt-1.5 font-light leading-relaxed">
            Precision maintenance, multi-stage paint correction, custom wrapping, and interior aseptic treatments.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#111]/80 backdrop-blur-md border border-white/10 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-950/20 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category Badge in Red Styling */}
                <div className="mb-3">
                  <span className="border border-red-500/40 bg-red-500/10 text-red-400 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded inline-block">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase group-hover:text-red-400 transition-colors leading-tight">
                  {service.title}
                </h4>

                {/* Short Description */}
                <p className="text-neutral-300 text-xs leading-relaxed mt-2.5 font-light">
                  {service.description}
                </p>

                {/* 3 Checkmark Features */}
                <div className="space-y-2 mt-5 pt-4 border-t border-white/10">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: WhatsApp Inquiry */}
              <a
                href={getWhatsAppInquiryUrl(service.title, service.ctaText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-2.5 px-4 rounded-lg border border-red-500/30 bg-red-500/5 hover:bg-red-600 hover:text-white text-red-400 font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-md active:scale-95"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioCare;
