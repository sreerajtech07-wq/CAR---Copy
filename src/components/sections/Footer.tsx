import React from "react";
import { BUSINESS } from "../../data/business";

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative z-10 w-full text-neutral-400 font-sans m-0 pt-12 pb-8 px-6 sm:px-12 md:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(20, 4, 7, 0.85) 0%, #000000 35%, #000000 100%)",
      }}
    >
      {/* Subtle Top Ambient Glow Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 w-full bg-gradient-to-b from-red-950/20 via-black/80 to-black" />

      {/* Ambient Deep-Red Radial Vignette */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-black to-black opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main 3-Column Customized Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-10">
          {/* Left Column - Brand Info */}
          <div className="md:col-span-6 lg:col-span-6 space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-white uppercase">
              3M CAR CARE STUDIO
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
              PRECISION IN EVERY DETAIL.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[11px] font-bold tracking-widest uppercase rounded-sm">
                AUTHORIZED STUDIO CENTER
              </span>
            </div>
          </div>

          {/* Column 2 - TREATMENTS */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-white font-mono font-bold text-xs tracking-widest uppercase border-b border-neutral-900 pb-2">
              TREATMENTS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="/ppf.html" className="hover:text-white transition-colors duration-200">
                  Paint Protection Film
                </a>
              </li>
              <li>
                <a href="/ceramic-coating.html" className="hover:text-white transition-colors duration-200">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="/car-detailing.html" className="hover:text-white transition-colors duration-200">
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="/additional-services.html" className="hover:text-white transition-colors duration-200">
                  Interior Detailing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - STUDIO */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-white font-mono font-bold text-xs tracking-widest uppercase border-b border-neutral-900 pb-2">
              STUDIO
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  About Atelier
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors duration-200">
                  Studio Standards
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors duration-200">
                  OMR, Chennai
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="text-neutral-300 hover:text-white font-mono font-semibold transition-colors duration-200"
                >
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © 2026 3M Car Care Studio. All rights reserved.
          </div>
          <div>
            <a
              href="#developers"
              className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              meet the developers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


