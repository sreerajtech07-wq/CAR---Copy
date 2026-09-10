import React from "react";
import { BUSINESS } from "../../data/business";
import { Phone, Mail, Navigation, ShieldCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="relative w-full bg-dark-950 py-28 sm:py-36 border-b border-white/10 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-metallic-300 font-mono text-xs tracking-widest uppercase mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
          <span>STUDIO CONSULTATION // CHENNAI OMR / ECR</span>
        </div>

        <h2 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-tight">
          PREPARE YOUR VEHICLE FOR
          <span className="block text-metallic-silver">ENDURING PERFECTION</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-metallic-300 max-w-2xl font-light leading-relaxed">
          Connect directly with our studio specialists at Mettukuppam, OMR to discuss paint correction, ceramic or graphene coatings, PPF impact film, or underbody anti-rust protection.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="flex items-center space-x-3 px-8 py-4 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Call Studio: {BUSINESS.phone}</span>
          </a>

          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center space-x-3 px-8 py-4 rounded-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Inquiry</span>
          </a>

          <a
            href={BUSINESS.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-4 rounded-sm bg-dark-900 hover:bg-dark-850 text-metallic-200 hover:text-white border border-white/10 font-medium text-sm tracking-wider uppercase transition-all duration-300"
          >
            <Navigation className="w-4 h-4 text-brand-amber" />
            <span>Visit Studio</span>
          </a>
        </div>

        {/* Authoritative Studio Details Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-metallic-400">
          <div>
            <div className="text-white font-semibold">HOURS</div>
            <div className="mt-1">{BUSINESS.businessHours.hours}</div>
            <div className="text-metallic-500">7 Days a Week</div>
          </div>
          <div>
            <div className="text-white font-semibold">LOCATION</div>
            <div className="mt-1">Rajiv Gandhi Salai, OMR</div>
            <div className="text-metallic-500">Opposite AKDR Golf Village</div>
          </div>
          <div>
            <div className="text-white font-semibold">INSTAGRAM</div>
            <div className="mt-1">{BUSINESS.instagram}</div>
            <div className="text-metallic-500">Official Studio Feed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
