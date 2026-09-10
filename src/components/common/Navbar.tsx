import React, { useState, useEffect } from "react";
import { BUSINESS } from "../../data/business";
import { Phone, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "METRICS", href: "#studio-metrics" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PROTECTION", href: "#protection" },
    { label: "PROCESS", href: "#process" },
    { label: "LOCATION", href: "#location" },
    { label: "CONTACT", href: "#contact" },
  ];

  const navbarTone = scrolled
    ? {
        header: "bg-white/95 border-slate-200 shadow-xl",
        brand: "text-slate-900",
        subBrand: "text-slate-500",
        link: "text-slate-600 hover:text-slate-950",
        phone: "bg-slate-900/5 hover:bg-slate-900/10 border-slate-300 text-slate-900",
        menu: "text-slate-600 hover:text-slate-950",
        drawer: "bg-white/95 border-slate-200",
        drawerLink: "text-slate-600 hover:text-slate-950 border-slate-200",
        drawerMeta: "text-slate-500",
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
        scrolled ? "" : "md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Link */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center text-slate-50 font-black text-xs tracking-tighter shadow-md">
            3M
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-sm font-bold tracking-wider group-hover:text-brand-amber transition-colors ${navbarTone.brand}`}>
              CAR CARE STUDIO
            </span>
            <span className={`font-mono text-[9px] tracking-super-wide uppercase ${navbarTone.subBrand}`}>
              OMR / ECR • CHENNAI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
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

        {/* Action Button: Call Direct */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className={`flex items-center space-x-2 px-4 py-2 rounded-sm border font-mono text-xs tracking-wider transition-all duration-200 ${navbarTone.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            aria-label="Call studio"
            className="p-2 rounded-sm bg-brand-red text-slate-50"
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
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-sm bg-brand-red text-slate-50 font-mono text-xs tracking-wider uppercase"
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
