import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvas } from "./HeroCanvas";
import { useResponsiveQuality } from "../../hooks/useResponsiveQuality";
import { BUSINESS } from "../../data/business";

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
      pinSpacing: false,
      scrub: quality.isMobile ? 0.8 : 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
        gsap.set(heroContent, {
          y: self.progress * -48,
          autoAlpha: 1 - Math.min(Math.max((self.progress - 0.68) * 2.5, 0), 0.72),
        });
        gsap.set(scrollCue, {
          autoAlpha: 1 - Math.min(self.progress * 2.5, 1),
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
      className="relative w-full bg-dark-950"
      style={{ height: `${scrollDistance}px` }}
      id="hero"
    >
      <div
        ref={pinTargetRef}
        className="relative top-0 h-[100dvh] w-full overflow-hidden select-none bg-dark-950"
      >
        <HeroCanvas progress={progress} quality={quality} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_58%_56%_at_72%_38%,rgba(122,12,20,0.25),transparent_72%),linear-gradient(180deg,rgba(5,5,5,0.2),transparent_42%,rgba(5,5,5,0.76))]" aria-hidden="true" />
        <div
          ref={heroContentRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-8 px-5 pb-4 text-[#F8FAFC] md:px-12 md:pb-12"
        >
          <div className="max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F8FAFC]/80 md:mb-3 md:text-[10px] md:tracking-[0.38em]">
              Precision in motion
            </p>
            <h1 className="max-w-[18rem] font-cinematic text-3xl font-bold uppercase leading-[0.94] tracking-tight md:max-w-md md:text-6xl">
              Precision.<br />In motion.
            </h1>
            <p className="mt-2 max-w-[19rem] text-[11px] leading-[1.35] text-[#F8FAFC]/85 md:mt-4 md:max-w-sm md:text-base md:leading-relaxed">
              {BUSINESS.shortDescription}
            </p>
          </div>
          <div ref={scrollCueRef} className="hidden items-center gap-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F8FAFC]/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:flex">
            <span className="h-px w-10 bg-[#F8FAFC]/60" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};
