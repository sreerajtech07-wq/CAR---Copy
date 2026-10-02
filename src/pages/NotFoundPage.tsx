import React from "react";
import { ArrowLeft, Home, MessageSquare, Phone, Compass, AlertTriangle } from "lucide-react";
import { BUSINESS } from "../data/business";
import { CursorEffect } from "../components/common/CursorEffect";
import { FlowBackground } from "../components/common/FlowBackground";
import { ParticleNetworkBackground } from "../components/common/ParticleNetworkBackground";
import { Footer } from "../components/sections/Footer";
import { FloatingWhatsApp } from "../components/common/FloatingWhatsApp";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink antialiased overflow-x-hidden flex flex-col justify-between bg-[#050505]">
      {/* Background Interactive Effects */}
      <CursorEffect />
      <FlowBackground />
      <ParticleNetworkBackground />

      {/* Film Grain Ambient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 film-grain opacity-5" />

      {/* Top Header Bar */}
      <header className="relative z-30 w-full border-b border-white/10 bg-dark-950/80 backdrop-blur-xl px-4 sm:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full border border-white/20 bg-[#121212] flex items-center justify-center p-1.5 shadow-md">
            <span className="font-bold text-brand-red text-xs">3M</span>
          </div>
          <span className="font-cinematic font-bold text-white text-sm sm:text-base tracking-wider uppercase group-hover:text-brand-red transition-colors">
            3M CAR CARE STUDIO
          </span>
        </a>

        <a
          href="/"
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all border border-white/15"
        >
          <Home className="w-3.5 h-3.5 text-brand-red" />
          <span>Home</span>
        </a>
      </header>

      {/* Main 404 Hero Section */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center max-w-4xl mx-auto">
        {/* Subtle Alert Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-6 backdrop-blur-md">
          <AlertTriangle className="w-4 h-4 text-brand-red animate-pulse" />
          <span className="font-mono text-xs font-bold text-brand-red tracking-widest uppercase">
            ERROR 404 // ROUTE OUT OF BOUNDS
          </span>
        </div>

        {/* Massive 404 Gradient Title */}
        <h1
          className="font-cinematic font-black text-7xl sm:text-9xl md:text-[12rem] leading-none tracking-tight uppercase select-none mb-2"
          style={{
            backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #B5121B 50%, #F59E0B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 10px 30px rgba(181, 18, 27, 0.4))",
          }}
        >
          404
        </h1>

        {/* Sleek Subtitle Message */}
        <h2 className="font-cinematic text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
          PAGE NOT FOUND
        </h2>

        <p className="font-mono text-xs sm:text-sm text-metallic-300 max-w-xl leading-relaxed uppercase tracking-wider mb-8">
          The road you’re looking for doesn’t exist in our studio. The requested URL or service section is unavailable or has been relocated.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="/"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-black tracking-widest uppercase text-white bg-brand-red hover:bg-brand-crimson transition-all shadow-lg shadow-brand-red/30 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS.phoneClean}?text=Hi%203M%20Car%20Care%20Studio%20OMR,%20I%20need%20help%20finding%20a%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#25d366] hover:bg-emerald-600 transition-all shadow-md hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Studio</span>
          </a>
        </div>

        {/* Quick Studio Directions & Call */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-metallic-400">
          <a href={`tel:${BUSINESS.phoneClean}`} className="flex items-center space-x-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>Call: {BUSINESS.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <a href={BUSINESS.mapQueryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Mettukuppam, OMR Chennai</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default NotFoundPage;
