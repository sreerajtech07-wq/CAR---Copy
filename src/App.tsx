import React, { useState } from "react";
import { CursorEffect } from "./components/common/CursorEffect";
import { FlowBackground } from "./components/common/FlowBackground";
import { ParticleNetworkBackground } from "./components/common/ParticleNetworkBackground";
import { CinematicScroll } from "./components/common/CinematicScroll";
import { Navbar } from "./components/common/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { StudioMarqueeGallery } from "./components/sections/StudioMarqueeGallery";
import { ServicesSection } from "./components/sections/ServicesSection";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { AdvancedProtection } from "./components/sections/AdvancedProtection";
import { PpfSunFilm } from "./components/sections/PpfSunFilm";
<<<<<<< Updated upstream
=======
import { BookingSection } from "./components/sections/BookingSection";
>>>>>>> Stashed changes
import { FAQSection } from "./components/sections/FAQSection";
import { GoogleReviews } from "./components/sections/GoogleReviews";
import { LocationSection } from "./components/sections/LocationSection";
import { Footer } from "./components/sections/Footer";
import { FinalCTA } from "./components/sections/FinalCTA";
import { BookingModal } from "./components/common/BookingModal";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink selection:bg-brand-red selection:text-white antialiased overflow-x-hidden">

      {/* Cursor and single shared atmospheric background system */}
      <CursorEffect />
      <FlowBackground />
      <ParticleNetworkBackground />

      {/* Fixed Ambient Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 film-grain opacity-5" />

      {/* Global Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="relative z-10">
        <CinematicScroll />

        {/* 01. CINEMATIC HERO */}
        <HeroSection />

        {/* 02. WHY CHOOSE US - Unified proof and studio standards */}
        <StatsSection />

        {/* 03. 3M OMR GALLERY - Studio Work in Motion */}
        <StudioMarqueeGallery />

        {/* 04. CORE SERVICES & TREATMENTS */}
        <ServicesSection />
        <BeforeAfter />
        <AdvancedProtection />
        <PpfSunFilm />

<<<<<<< Updated upstream
        {/* 06. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />
=======
        {/* 06. STUDIO PROTOCOL / BOOKING DIRECTIVE FORM */}
        <BookingSection />
>>>>>>> Stashed changes

        {/* 07. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />

        {/* 08. CUSTOMER REVIEWS */}
        <GoogleReviews />

        {/* 09. CTA / BOOKING */}
        <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 10. CONTACT */}
        <LocationSection />
      </main>

      {/* Modern Minimalist Footer */}
      <Footer />

      {/* Multi-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Intelligent Floating WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
