import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar } from "lucide-react";
import logoImg from "../../assets/logo/IMG_5288.PNG";
import { BUSINESS } from "../../data/business";

export interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "GALLERY", href: "#gallery" },
    { label: "SERVICES", href: "#services" },
    { label: "PROTECTION", href: "#protection" },
    { label: "FAQ", href: "#faq" },
    { label: "LOCATION", href: "#location" },
    { label: "CONTACT", href: "#contact" },
  ];

  const navbarTone = scrolled
    ? {
        header: "bg-dark-950/95 border-white/10 shadow-xl shadow-black/20",
        brand: "text-white",
        subBrand: "text-metallic-400",
        link: "text-metallic-300 hover:text-white",
        phone: "bg-white/5 hover:bg-white/10 border-white/15 text-white",
        menu: "text-metallic-300 hover:text-white",
        drawer: "bg-dark-950/95 border-white/10",
        drawerLink: "text-metallic-300 hover:text-white border-white/10",
        drawerMeta: "text-metallic-400",
      }
    : {
        header: "bg-slate-950/35 border-white/10 shadow-none",
        brand: "text-slate-50",
        subBrand: "text-slate-300",
        link: "text-slate-200 hover:text-white",
        phone: "bg-white/5 hover:bg-white/10 border-white/15 text-slate-50",
        menu: "text-slate-200 hover:text-white",
        drawer: "bg-slate-950/95 border-white/10",
        drawerLink: "text-slate-200 hover:text-white border-white/10",
        drawerMeta: "text-slate-300",
      };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b py-3 transition-all duration-300 ${navbarTone.header} ${
        scrolled ? "" : "md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Link (Local 3M Logo Asset + Text Lockup) */}
        <a href="#hero" className="flex items-center gap-3 shrink-0 mr-6 md:mr-10 select-none group">
<<<<<<< Updated upstream
          <img
            src={logoImg}
            alt="3M Logo"
            style={{ mixBlendMode: "screen" }}
            className="h-8 md:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-200"
            loading="eager"
          />
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-extrabold tracking-wider text-white uppercase leading-none font-display group-hover:text-brand-amber transition-colors">
              CAR CARE STUDIO
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold mt-1 font-mono">
=======
          <span className="text-3xl md:text-4xl font-black tracking-tighter text-red-600 font-heading leading-none shrink-0 group-hover:scale-105 transition-transform duration-200">
            3M
          </span>
          <div className="flex flex-col justify-center -space-y-0.5 border-l border-white/20 pl-2.5">
            <span className="text-xs md:text-sm font-black tracking-wider text-white uppercase leading-none font-display group-hover:text-brand-amber transition-colors">
              CAR CARE STUDIO
            </span>
            <span className="text-[9px] tracking-widest text-neutral-400 uppercase font-bold font-mono">
>>>>>>> Stashed changes
              OMR • CHENNAI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-mono text-xs tracking-widest transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-amber hover:after:w-full after:transition-all after:duration-300 ${navbarTone.link}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="#booking"
            className="flex items-center space-x-2 px-4 py-2 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-red-950/40"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK NOW</span>
          </a>

          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className={`flex items-center space-x-2 px-4 py-2 rounded-sm border font-mono text-xs tracking-wider transition-all duration-200 ${navbarTone.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="#booking"
            className="px-3 py-1.5 rounded-sm bg-brand-red text-white font-mono text-[11px] font-semibold tracking-wider uppercase"
          >
            BOOK
          </a>
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            aria-label="Call studio"
            className="p-2 rounded-sm bg-white/10 text-slate-50 border border-white/20"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${navbarTone.menu}`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-xl border-b px-6 py-6 transition-all ${navbarTone.drawer}`}>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-sm tracking-widest transition-colors uppercase py-1 border-b ${navbarTone.drawerLink}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              {onOpenBooking && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center space-x-2 py-3 rounded-sm bg-brand-red text-white font-mono text-xs tracking-wider uppercase shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Studio Consultation</span>
                </button>
              )}
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-sm bg-white/10 border border-white/20 text-slate-50 font-mono text-xs tracking-wider uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS.phone}</span>
              </a>
              <div className={`text-[11px] font-mono text-center ${navbarTone.drawerMeta}`}>
                Mettukuppam, OMR, Chennai • 9:30 AM – 8:00 PM
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
