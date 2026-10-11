import React from "react";
import { BUSINESS } from "../../data/business";
import { Phone, Mail, Navigation, ShieldCheck, Calendar, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export interface FinalCTAProps {
  onOpenBooking?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative w-full bg-transparent py-10 md:py-14 border-b border-white/10 overflow-hidden">
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
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-2xl mx-auto mt-6">
          {onOpenBooking && (
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto py-3 sm:py-3.5 px-6 rounded-xl bg-[#A50E14] hover:bg-[#8e0c11] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="leading-tight">BOOK STUDIO CONSULTATION</span>
            </button>
          )}

          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="w-full sm:w-auto py-3 sm:py-3.5 px-6 rounded-xl bg-[#0F8A5F] hover:bg-[#0c724e] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors shadow-md text-center"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="leading-tight">CALL STUDIO: +91 76019 33555</span>
          </a>

          <a
            href={`mailto:${BUSINESS.email}`}
            className="w-full sm:w-auto py-3 sm:py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 border border-neutral-800 font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors text-center"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="leading-tight">SEND EMAIL</span>
          </a>

          <a
            href={BUSINESS.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3 sm:py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 border border-neutral-800 font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors text-center"
          >
            <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="leading-tight">GET DIRECTIONS</span>
          </a>
        </div>

        {/* Authoritative Studio Details Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
          {/* Card 1: HOURS (Static) */}
          <div className="text-center flex flex-col items-center justify-center group cursor-default">
            <div className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/50 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <Clock className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" />
            </div>
            <div className="text-sm sm:text-base font-black uppercase tracking-widest text-white mb-1.5">HOURS</div>
            <div className="text-base sm:text-lg font-bold text-neutral-100 font-mono tracking-tight leading-snug">{BUSINESS.businessHours.hours}</div>
            <div className="text-xs font-medium text-neutral-400 font-mono mt-1 tracking-wide">7 Days a Week</div>
          </div>

          {/* Card 2: LOCATION (Directly Clickable Google Maps Link) */}
          <a
            href={BUSINESS.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/50 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <MapPin className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" />
            </div>
            <div className="text-sm sm:text-base font-black uppercase tracking-widest text-white mb-1.5 flex items-center gap-1">
              <span>LOCATION</span>
              <span className="text-red-400 text-xs font-normal">↗</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-neutral-100 font-mono tracking-tight leading-snug">Rajiv Gandhi Salai, OMR</div>
            <div className="text-xs font-medium text-neutral-400 font-mono mt-1 tracking-wide max-w-xs">Opposite AKDR Golf Village, Mettukuppam, Chennai 600097</div>
          </a>

          {/* Card 3: INSTAGRAM (Directly Clickable Profile Link) */}
          <a
            href="https://www.instagram.com/3mcarcareomr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/50 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <InstagramIcon className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" />
            </div>
            <div className="text-sm sm:text-base font-black uppercase tracking-widest text-white mb-1.5 flex items-center gap-1">
              <span>INSTAGRAM</span>
              <span className="text-red-400 text-xs font-normal">↗</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-neutral-100 font-mono tracking-tight leading-snug">{BUSINESS.instagram}</div>
            <div className="text-xs font-medium text-neutral-400 font-mono mt-1 tracking-wide">Official Studio Feed</div>
          </a>
        </div>
      </div>
    </section>
  );
};
