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
import { AllServicesSection } from "./components/sections/AllServicesSection";
import { BookingSection } from "./components/sections/BookingSection";
import { FAQSection } from "./components/sections/FAQSection";
import { GoogleReviews } from "./components/sections/GoogleReviews";
import { Footer } from "./components/sections/Footer";
import { FinalCTA } from "./components/sections/FinalCTA";
import { BookingModal } from "./components/common/BookingModal";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";
import { CookieConsent } from "./components/common/CookieConsent";

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div className="studio-atmosphere relative min-h-screen text-studio-ink selection:bg-brand-red selection:text-white antialiased overflow-x-hidden">
      {/* Cursor and single shared atmospheric background system */}

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
        <AllServicesSection />

        {/* 06. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />

        {/* 08. CUSTOMER REVIEWS */}
        <GoogleReviews />

        {/* 09. CTA / BOOKING */}
        <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 10. STUDIO BOOKING FORM */}
        <BookingSection />
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

      {/* Cookie & Data Privacy Transparency Banner */}
      <CookieConsent />
    </div>
  );
};

export default App;
