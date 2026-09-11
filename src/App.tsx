import React from "react";
import { CursorEffect } from "./components/common/CursorEffect";
import { Background3D } from "./components/common/Background3D";
import { ParticleNetworkBackground } from "./components/common/ParticleNetworkBackground";
import { CinematicScroll } from "./components/common/CinematicScroll";
import { Navbar } from "./components/common/Navbar";
import { HeroSection } from "./components/hero/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { BrandIntro } from "./components/sections/BrandIntro";
import { ServicesSection } from "./components/sections/ServicesSection";
import { DetailingExperience } from "./components/sections/DetailingExperience";
import { OriginalServicesSection } from "./components/sections/OriginalServicesSection";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { AdvancedProtection } from "./components/sections/AdvancedProtection";
import { PpfSunFilm } from "./components/sections/PpfSunFilm";
import { WhyProfessional } from "./components/sections/WhyProfessional";
import { TrustSection } from "./components/sections/TrustSection";
import { ProcessTimeline } from "./components/sections/ProcessTimeline";
import { GoogleReviews } from "./components/sections/GoogleReviews";
import { LocationSection } from "./components/sections/LocationSection";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-studio-ink selection:bg-brand-amber selection:text-studio-ink antialiased overflow-x-hidden">
      {/* GSAP Cursor & 3D Three.js Perspective Background */}
      <CursorEffect />
      <Background3D />
      <ParticleNetworkBackground />

      {/* Fixed Ambient Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 film-grain opacity-5" />

      {/* Global Navigation */}
      <Navbar />

      <main className="relative z-10">
        <CinematicScroll />

        {/* 01. CINEMATIC HERO */}
        <HeroSection />

        {/* 02. STUDIO METRICS - By the numbers */}
        <StatsSection />

        {/* 03. INTRODUCTION - Studio profile & about */}
        <BrandIntro />

        {/* 04. EXISTING CONTENT / SERVICES - Service matrix */}
        <ServicesSection />

        {/* 05. VISUAL SHOWCASE - Gallery of work, detailing, protection */}
        <DetailingExperience />
        <OriginalServicesSection />
        <BeforeAfter />
        <AdvancedProtection />
        <PpfSunFilm />

        {/* 06. EXISTING BUSINESS CONTENT - Standards */}
        <WhyProfessional />

        {/* 07. TRUST - Approved studio metrics and service catalogue */}
        <TrustSection />

        {/* 08. EXISTING WORK / RESULTS - Process workflow */}
        <ProcessTimeline />

        {/* 09. CUSTOMER REVIEWS */}
        <GoogleReviews />

        {/* 10. CTA / BOOKING */}
        <FinalCTA />

        {/* 11. CONTACT */}
        <LocationSection />
      </main>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
