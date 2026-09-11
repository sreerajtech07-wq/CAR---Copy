import React from "react";
import { BUSINESS } from "../../data/business";
import { OFFICIAL_SERVICES } from "../../data/services";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-950 text-metallic-400 py-16 border-t border-white/10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Studio Identity */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center text-white font-black text-xs">
                  3M
                </div>
                <div className="font-display text-lg font-bold text-white tracking-wider">
                  {BUSINESS.name}
                </div>
              </div>
              <div className="font-cinematic text-sm text-metallic-200 uppercase tracking-widest mb-4">
                {BUSINESS.brandMessage}
              </div>
              <p className="text-metallic-400 font-sans text-xs sm:text-sm leading-relaxed">
                {BUSINESS.shortDescription}
              </p>
            </div>
            <div className="mt-6 text-[11px] text-metallic-500">
              Landmark: {BUSINESS.landmark}
            </div>
          </div>

          {/* Main Services */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-white font-semibold tracking-wider uppercase text-xs">
              MAIN SERVICES
            </div>
            <ul className="space-y-2 text-metallic-300">
              {OFFICIAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/${s.id}.html`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Hours */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-white font-semibold tracking-wider uppercase text-xs">
              CONTACT & HOURS
            </div>
            <div className="space-y-2.5 text-metallic-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <a href={`tel:${BUSINESS.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <InstagramIcon className="w-3.5 h-3.5 text-brand-red" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.instagram}
                </a>
              </div>
              <div className="flex items-center space-x-2 pt-2 text-xs">
                <Clock className="w-3.5 h-3.5 text-brand-amber" />
                <span>{BUSINESS.businessHours.display}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-white font-semibold tracking-wider uppercase text-xs">
              STUDIO LOCATION
            </div>
            <div className="text-metallic-300 leading-relaxed text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS.address.street}</p>
                  <p>{BUSINESS.address.area}, {BUSINESS.address.city} – {BUSINESS.address.pincode}</p>
                  <p>{BUSINESS.address.state}, {BUSINESS.address.country}</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-brand-red hover:text-white transition-colors text-xs font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-metallic-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Official Studio: {BUSINESS.website}
          </div>
        </div>
      </div>
    </footer>
  );
};
