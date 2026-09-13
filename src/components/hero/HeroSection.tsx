import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvas } from "./HeroCanvas";
import { useResponsiveQuality } from "../../hooks/useResponsiveQuality";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const quality = useResponsiveQuality();
  // One cinematic pin, with a contained travel distance that leaves anchors
  // and the next section responsive instead of creating a long blank gap.
  const scrollDistance = quality.isMobile ? 1700 : 2600;

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    const heroContent = heroContentRef.current;
    const scrollCue = scrollCueRef.current;
    if (!container || !pinTarget || !heroContent || !scrollCue) return;

    gsap.set(heroContent, { y: 0, autoAlpha: 1 });
    gsap.set(scrollCue, { autoAlpha: 1 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: pinTarget,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: 10,
      scrub: quality.isMobile ? 0.8 : 1,
      onUpdate: (self) => {
        setProgress(self.progress);
        const fadeOut = self.progress > 0.85 ? 1 - (self.progress - 0.85) / 0.15 : 1;
        const opacity = self.progress < 0.65 ? 1 : Math.max(0, 1 - (self.progress - 0.65) * 3);
        gsap.set(heroContent, {
          y: self.progress * -32,
          autoAlpha: opacity * fadeOut,
        });
        gsap.set(scrollCue, {
          autoAlpha: (1 - Math.min(self.progress * 2.5, 1)) * fadeOut,
        });
      },
    });

    const moveX = quality.isMobile ? 0 : 9;
    const moveY = quality.isMobile ? 0 : 6;
    const handlePointerMove = (event: PointerEvent) => {
      if (quality.isMobile) return;
      const x = (event.clientX / window.innerWidth - 0.5) * moveX;
      const y = (event.clientY / window.innerHeight - 0.5) * moveY;
      gsap.to(pinTarget, { x, y, duration: 0.8, ease: "power2.out", overwrite: true });
      gsap.to(heroContent, { x: x * 0.55, y: y * 0.35, duration: 0.8, ease: "power2.out", overwrite: true });
    };

    if (!quality.isMobile) window.addEventListener("pointermove", handlePointerMove);

    return () => {
      trigger.kill();
      window.removeEventListener("pointermove", handlePointerMove);
      gsap.killTweensOf([pinTarget, heroContent, scrollCue]);
    };
  }, [quality.isMobile, scrollDistance]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent"
      style={{ height: `${scrollDistance}px` }}
      id="hero"
    >
      <div
        ref={pinTargetRef}
        className="relative top-0 h-[100dvh] w-full overflow-hidden select-none bg-transparent"
      >
        <HeroCanvas progress={progress} quality={quality} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_58%_56%_at_72%_38%,rgba(122,12,20,0.25),transparent_72%),linear-gradient(180deg,rgba(5,5,5,0.2),transparent_42%,rgba(5,5,5,0.76))]" aria-hidden="true" />
<<<<<<< Updated upstream
        
        {/* Main Content Area */}
        <div
          ref={heroContentRef}
          className="pointer-events-none absolute inset-0 z-20"
        >
          {/* Mobile View / Desktop Left-Hand Info Block */}
          <div className="w-full h-full flex flex-col items-center justify-end px-6 pb-20 text-center md:text-left md:items-start md:justify-end md:absolute md:bottom-10 md:left-10 lg:bottom-12 lg:left-14 md:px-0 md:pb-0 md:w-auto text-[#F8FAFC]">
            <div className="w-full max-w-sm md:max-w-md items-center md:items-start flex flex-col drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F8FAFC]/80 md:mb-3 md:text-[10px] md:tracking-[0.38em]">
                Precision in motion
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase leading-snug md:leading-[0.96] tracking-tight font-cinematic text-white">
                Precision.<br className="hidden md:inline" /> In motion.
              </h1>
              <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mt-2 text-center md:text-left max-w-sm font-sans">
                {BUSINESS.shortDescription}
              </p>

              {/* Direct Action Button */}
              <a
                href="#services"
                className="pointer-events-auto mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95"
              >
                Explore Treatments
=======
        {/* Main Content Area */}
        <div
          ref={heroContentRef}
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
        >
          {/* Mobile View / Desktop Left-Hand Info Block */}
          <div className="w-full h-full flex flex-col items-center justify-end px-6 pb-20 text-center md:text-left md:items-start md:justify-end md:absolute md:bottom-10 md:left-10 lg:bottom-12 lg:left-14 md:px-0 md:pb-0 w-full lg:max-w-[380px] xl:max-w-[440px] lg:mr-8 z-20 relative pointer-events-auto shrink-0 text-[#F8FAFC]">
            <div className="w-full max-w-sm md:max-w-md items-center md:items-start flex flex-col drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {/* Direct Action Button */}
              <a
                href="#services"
                className="pointer-events-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95"
              >
                EXPLORE SERVICES
>>>>>>> Stashed changes
              </a>

              {/* Micro Social-Proof Ticker / Badges */}
              <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-[10px] text-neutral-400 font-medium border-t border-neutral-900/80 pt-3 w-full">
                <span className="flex items-center gap-1 text-yellow-500 font-semibold">★ 5.0 (150+ Reviews)</span>
                <span className="text-neutral-700">•</span>
                <span>100% 3M Stock</span>
                <span className="text-neutral-700">•</span>
                <span>OMR Chennai</span>
              </div>
            </div>
          </div>

          {/* Desktop Scroll Cue */}
          <div ref={scrollCueRef} className="hidden md:flex absolute bottom-10 right-10 lg:bottom-12 lg:right-14 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F8FAFC]/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] z-20">
            <span className="h-px w-10 bg-[#F8FAFC]/60" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};
