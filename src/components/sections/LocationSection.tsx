import React from "react";
import { BUSINESS } from "../../data/business";
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            GEOGRAPHIC LOCATION & ACCESS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              STUDIO LOCATION
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            RAJIV GANDHI SALAI (OMR) • OPPOSITE AKDR GOLF VILLAGE
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Studio Details Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-brand-red font-mono text-xs uppercase tracking-widest mb-3">
                <MapPin className="w-4 h-4" />
                <span>STUDIO ADDRESS</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                {BUSINESS.name}
              </h3>
              <div className="mt-4 text-sm text-metallic-300 font-light leading-relaxed">
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.area}, {BUSINESS.address.city} – {BUSINESS.address.pincode}</p>
                <p>{BUSINESS.address.state}, {BUSINESS.address.country}</p>
              </div>

              <div className="mt-4 p-3.5 rounded-sm bg-dark-900 border border-white/10 font-mono text-xs">
                <span className="text-metallic-400">Landmark: </span>
                <span className="text-brand-amber font-medium">{BUSINESS.landmark}</span>
              </div>

              {/* Hours */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-metallic-400 font-mono text-xs uppercase mb-2">
                  <Clock className="w-4 h-4 text-brand-red" />
                  <span>OPERATING SCHEDULE</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {BUSINESS.businessHours.days}
                </div>
                <div className="text-xs font-mono text-metallic-300 mt-0.5">
                  {BUSINESS.businessHours.hours}
                </div>
              </div>

              {/* Contact Channels */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-brand-red shrink-0" />
                  <a
                    href={`tel:${BUSINESS.phoneClean}`}
                    className="font-mono text-metallic-200 hover:text-white transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-brand-red shrink-0" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-mono text-xs sm:text-sm text-metallic-200 hover:text-white transition-colors break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <InstagramIcon className="w-4 h-4 text-brand-red shrink-0" />
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-metallic-200 hover:text-white transition-colors"
                  >
                    {BUSINESS.instagram}
                  </a>
                </div>
              </div>
            </div>

            {/* Practical Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-sm bg-dark-850 hover:bg-dark-800 text-metallic-200 hover:text-white border border-white/15 font-mono text-xs tracking-wider uppercase transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-brand-amber" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-sm bg-dark-950 border border-white/10 overflow-hidden flex flex-col min-h-[400px]">
            <div className="p-4 bg-dark-900 border-b border-white/10 flex items-center justify-between font-mono text-xs text-metallic-400">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>GPS COORDINATES // CHENNAI OMR CORRIDOR</span>
              </span>
              <a
                href={BUSINESS.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-white hover:text-brand-red transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[360px] bg-dark-850">
              <iframe
                title="3M Car Care Studio Location Map"
                src="https://maps.google.com/maps?q=3/452E,+Rajiv+Gandhi+Salai,+OMR,+Mettukuppam,+Chennai+600097&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(115%)" }}
                loading="lazy"
                allowFullScreen
                aria-hidden="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
