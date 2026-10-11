import React from "react";
import { BUSINESS } from "../../data/business";
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative w-full bg-transparent pt-6 md:pt-10 pb-20 sm:pb-24">
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
            RAJIV GANDHI SALAI (OMR), CHENNAI • OPPOSITE AKDR GOLF VILLAGE
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Studio Details Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-brand-red shadow-lg hover:scale-110 hover:border-brand-red/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="text-brand-red font-mono text-[10px] uppercase tracking-widest block">
                    STUDIO ADDRESS
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    Rajiv Gandhi Salai (OMR), Chennai
                  </h3>
                </div>
              </div>

              <div className="text-sm text-metallic-300 font-light leading-relaxed space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.area}, {BUSINESS.address.city} – {BUSINESS.address.pincode}</p>
              </div>

              <div className="mt-4 p-3.5 rounded-sm bg-dark-900 border border-white/10 font-mono text-xs">
                <span className="text-metallic-400">Landmark: </span>
                <span className="text-brand-amber font-medium">Opposite AKDR Golf Village, Mettukuppam, Chennai 600097</span>
              </div>

              {/* Operating Hours Card */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-brand-red shadow-lg shrink-0 hover:scale-110 hover:border-brand-red/50 transition-all duration-300">
                  <Clock className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <div className="text-metallic-400 font-mono text-[10px] uppercase tracking-widest mb-0.5">
                    OPERATING SCHEDULE
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {BUSINESS.businessHours.days}
                  </div>
                  <div className="text-xs font-mono text-metallic-300 mt-0.5">
                    {BUSINESS.businessHours.hours}
                  </div>
                </div>
              </div>

              {/* Contact & Social Channels */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Phone className="w-4 h-4 text-brand-red" />
                  </div>
                  <a
                    href={`tel:${BUSINESS.phoneClean}`}
                    className="font-mono text-metallic-200 hover:text-white transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-brand-red shrink-0">
                    <Mail className="w-4 h-4 text-brand-red" />
                  </div>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-mono text-xs sm:text-sm text-metallic-200 hover:text-white transition-colors break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-brand-red shrink-0 hover:scale-110 hover:border-brand-red/50 transition-all duration-300">
                    <InstagramIcon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-metallic-400 uppercase tracking-widest block">INSTAGRAM</span>
                    <a
                      href="https://www.instagram.com/3mcarcareomr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm text-metallic-200 hover:text-white transition-colors font-semibold"
                    >
                      @3mcarcareomr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs tracking-wider uppercase transition-colors shadow-lg"
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
