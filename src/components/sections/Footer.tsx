import React from "react";
import { BUSINESS } from "../../data/business";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "../common/Icons";

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 w-full text-neutral-400 font-sans m-0 pt-12 pb-8 px-6 sm:px-12 md:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(20, 4, 7, 0.85) 0%, #000000 35%, #000000 100%)",
      }}
    >
      {/* Target anchor for contact smooth scroll */}
      <div id="contact" className="absolute top-0" />

      {/* Subtle Top Ambient Glow Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 w-full bg-gradient-to-b from-red-950/20 via-black/80 to-black" />

      {/* Ambient Deep-Red Radial Vignette */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-black to-black opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        {/* Main 3-Column Customized Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column - Brand Info & Map */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            <div className="flex items-center whitespace-nowrap select-none mb-3">
              <h2 className="font-heading font-extrabold uppercase tracking-wider text-xl sm:text-2xl md:text-3xl text-white leading-none">
                <span className="text-3m-red">3M</span>
                <span>CAR CARE STUDIO</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
              PRECISION IN EVERY DETAIL.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-700/60 bg-neutral-800/40 text-neutral-300 font-mono text-xs uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
                AUTHORIZED STUDIO CENTER
              </span>
              <a
                href="https://www.instagram.com/3mcarcareomr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-700/60 bg-neutral-800/40 text-neutral-300 hover:text-white font-mono text-xs transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                @3mcarcareomr
              </a>
            </div>

            {/* Integrated Google Map Iframe */}
            <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.537206042319!2d80.23001667620262!3d12.937439183098869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c631f4a9e11%3A0x95d201f8ce08e478!2s3M%20Car%20Care%20Studio%20-%20Car%20Detailing%2C%20Ceramic%20Coating%20and%20PPF%2C%20OMR%2F%20ECR!5e0!3m2!1sen!2sin!4v1790042596353!5m2!1sen!2sin"
                className="w-full h-full rounded-lg border border-neutral-800 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="3M Car Care Studio OMR/ECR Location"
              />
            </div>
          </div>

          {/* Column 2 - TREATMENTS (6 Core 3M Services) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-white font-mono font-bold text-xs tracking-widest uppercase border-b border-neutral-900 pb-2">
              TREATMENTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="/ceramic-coating.html" className="hover:text-white transition-colors duration-200 block">
                  3M Ceramic Coating
                </a>
              </li>
              <li>
                <a href="/graphene-coating.html" className="hover:text-white transition-colors duration-200 block">
                  3M Graphene Coating
                </a>
              </li>
              <li>
                <a href="/ppf.html" className="hover:text-white transition-colors duration-200 block">
                  3M PPF (Paint Protection Film)
                </a>
              </li>
              <li>
                <a href="/sun-film.html" className="hover:text-white transition-colors duration-200 block">
                  3M Sunfilm
                </a>
              </li>
              <li>
                <a href="/anti-glare-film.html" className="hover:text-white transition-colors duration-200 block">
                  3M Anti-Glare Film
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - STUDIO DETAILS */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-white font-mono font-bold text-xs tracking-widest uppercase border-b border-neutral-900 pb-2">
              STUDIO
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#trust" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Studio Standards & 3M Warranty</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>Mon - Sun: 9:30 AM - 8:00 PM</span>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">3/452E, Rajiv Gandhi Salai (OMR)</p>
                  <p className="text-neutral-300 text-xs mt-0.5">Opposite AKDR Golf Village, Mettukuppam</p>
                  <p className="text-neutral-400 text-xs mt-0.5">Chennai, Tamil Nadu - 600097</p>
                  <a
                    href="https://maps.app.goo.gl/RJH95HUy9Wpaapd46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-red-400 hover:text-white text-xs font-mono font-semibold transition-colors"
                  >
                    Get Directions ↗
                  </a>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="inline-flex items-center gap-2 text-neutral-200 hover:text-white font-mono font-bold transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-red" />
                  +91 76019 33555 / 666
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 3M Car Care Studio. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="text-neutral-500">Mettukuppam, OMR, Chennai</span>
          </div>
          
          {/* Legal Compliance Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-neutral-400">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <span>•</span>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <span>•</span>
            <a href="#cancellation" className="hover:text-white transition-colors">
              Refund &amp; Cancellation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
