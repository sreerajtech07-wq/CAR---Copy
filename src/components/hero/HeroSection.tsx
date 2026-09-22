import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvas } from "./HeroCanvas";
import { useResponsiveQuality } from "../../hooks/useResponsiveQuality";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);
  
  const layer0Ref = useRef<HTMLDivElement | null>(null);
  const layer1Ref = useRef<HTMLDivElement | null>(null);
  const layer2Ref = useRef<HTMLDivElement | null>(null);
  const layer3Ref = useRef<HTMLDivElement | null>(null);
  const layer4Ref = useRef<HTMLDivElement | null>(null);
  const layer5Ref = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState<number>(0);
  const quality = useResponsiveQuality();

  const scrollDistance = quality.isMobile ? 2400 : 3500;

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    if (!container || !pinTarget) return;

    const layer0 = layer0Ref.current;
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const layer3 = layer3Ref.current;
    const layer4 = layer4Ref.current;
    const layer5 = layer5Ref.current;

    // Helper for smooth range calculation
    const calcAlpha = (p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) => {
      if (p < inStart || p > outEnd) return 0;
      if (p >= inEnd && p <= outStart) return 1;
      if (p < inEnd) return (p - inStart) / (inEnd - inStart);
      return 1 - (p - outStart) / (outEnd - outStart);
    };

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
        const p = self.progress;
        setProgress(p);

        // Layer 0: Entry (Frames 1 – 17 | ~0% – 11%)
        if (layer0) {
          const alpha0 = calcAlpha(p, 0.0, 0.02, 0.08, 0.11);
          gsap.set(layer0, { autoAlpha: alpha0 });
        }

        // Layer 1: Paint Correction (Frames 18 – 45 | ~12% – 30%)
        if (layer1) {
          const alpha1 = calcAlpha(p, 0.12, 0.16, 0.26, 0.30);
          const y1 = (1 - Math.min(1, Math.max(0, (p - 0.12) / 0.04))) * 15;
          gsap.set(layer1, { autoAlpha: alpha1, y: y1 });
        }

        // Layer 2: PPF (Frames 46 – 75 | ~31% – 50%)
        if (layer2) {
          const alpha2 = calcAlpha(p, 0.31, 0.35, 0.46, 0.50);
          gsap.set(layer2, { autoAlpha: alpha2 });
        }

        // Layer 3: Ceramic Coating (Frames 76 – 100 | ~50% – 64%)
        if (layer3) {
          const alpha3 = calcAlpha(p, 0.50, 0.54, 0.60, 0.64);
          gsap.set(layer3, { autoAlpha: alpha3 });
        }

        // Layer 4: Graphene Matrix Coating (Frames 101 – 120 | ~60% – 79%)
        // Direct linear crossfade mapping starting at 0.60 (overlapping with Ceramic fade-out) for unbroken zero-lag motion
        if (layer4) {
          const alpha4 = calcAlpha(p, 0.60, 0.64, 0.76, 0.79);
          const scale4 = gsap.utils.mapRange(0.60, 0.64, 0.95, 1.0, Math.min(0.64, Math.max(0.60, p)));
          gsap.set(layer4, { autoAlpha: alpha4, scale: scale4 });
        }

        // Layer 5: Final Armor Stack (Frames 121 – 151 | ~80% – 100%)
        if (layer5) {
          const alpha5 = p >= 0.80 ? Math.min(1, (p - 0.80) / 0.05) : 0;
          const x5 = p >= 0.80 ? -30 * (1 - Math.min(1, (p - 0.80) / 0.05)) : -30;
          gsap.set(layer5, { autoAlpha: alpha5 });
          const headline = layer5.querySelector(".layer5-headline");
          if (headline) {
            gsap.set(headline, { x: x5 });
          }
        }
      },
    });

    return () => {
      trigger.kill();
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
        className="relative top-0 h-[100svh] min-h-[600px] w-full overflow-hidden select-none bg-transparent flex items-center justify-center"
      >
        <HeroCanvas progress={progress} quality={quality} />
        
        {/* Dark Vignette Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_58%_56%_at_72%_38%,rgba(122,12,20,0.25),transparent_72%),linear-gradient(180deg,rgba(5,5,5,0.2),transparent_42%,rgba(5,5,5,0.76))]"
          aria-hidden="true"
        />

        {/* =========================================================================
            LAYER 0: Entry (Frames 1 – 17 | ~0% – 11%)
           ========================================================================= */}
        <div
          ref={layer0Ref}
          id="layer-0"
          className="absolute inset-0 flex items-center justify-center text-center px-4 py-6 md:px-12 pointer-events-none opacity-0 z-20"
        >
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-[0.18em] text-white drop-shadow-2xl font-cinematic">
            PROTECT WHAT YOU DRIVE.
          </h1>
        </div>

        {/* =========================================================================
            LAYER 1: Paint Correction (Frames 18 – 45 | ~12% – 30%)
           ========================================================================= */}
        <div
          ref={layer1Ref}
          id="layer-1"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-12 pointer-events-none opacity-0 z-20"
        >
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 font-cinematic">
            NOT JUST CLEAN. <span className="text-pink-500 font-black">PROTECTED.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide font-mono">
            Multi-Stage Paint Correction • 99% Swirl Removal
          </p>
        </div>

        {/* =========================================================================
            LAYER 2: PPF (Frames 46 – 75 | ~31% – 50%)
           ========================================================================= */}
        <div
          ref={layer2Ref}
          id="layer-2"
          className="absolute inset-0 flex items-center justify-center px-4 py-6 md:px-12 pointer-events-none opacity-0 z-20"
        >
          <div className="glass-badge bg-black/40 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl max-w-[92vw] md:max-w-xl text-center shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-white mb-2 font-cinematic">
              PAINT PROTECTION FILM
            </h3>
            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed font-mono">
              • Instant Self-Healing TPU • High-Velocity Stone Chip Defense • 10-Year Warranty
            </p>
          </div>
        </div>

        {/* =========================================================================
            LAYER 3: Ceramic Coating (Frames 76 – 100 | ~51% – 66%)
           ========================================================================= */}
        <div
          ref={layer3Ref}
          id="layer-3"
          className="absolute inset-0 flex items-center justify-center px-4 py-6 md:px-12 pointer-events-none opacity-0 z-20"
        >
          <div className="glass-badge bg-black/40 backdrop-blur-md border border-cyan-500/30 px-8 py-6 rounded-2xl max-w-[92vw] md:max-w-md text-center shadow-[0_0_35px_rgba(34,211,238,0.3)]">
            <span className="inline-block text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-1 font-mono">
              Hydrophobic Barrier
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase text-white mb-1 font-cinematic">
              9H CERAMIC COATING
            </h3>
            <p className="text-xs md:text-sm text-gray-300 font-mono">
              • Extreme Hydrophobic • UV & Chemical Resistance • Deep Wet Gloss
            </p>
          </div>
        </div>

        {/* =========================================================================
            LAYER 4: Graphene Infusion (Frames 101 – 120 | ~67% – 79%)
           ========================================================================= */}
        <div
          ref={layer4Ref}
          id="layer-4"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-12 pointer-events-none opacity-0 z-20"
        >
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-purple-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.7)] mb-2 font-cinematic">
            GRAPHENE MATRIX COATING
          </h3>
          <p className="text-xs md:text-sm text-gray-200 font-medium tracking-wide font-mono">
            • Anti-Static Dust Repel • Reduced Water Spotting • High Thermal Rejection
          </p>
        </div>

        {/* =========================================================================
            LAYER 5: Final Armor Stack (Frames 121 – 151 | ~80% – 100%)
           ========================================================================= */}
        <div
          ref={layer5Ref}
          id="layer-5"
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 py-6 sm:p-6 md:p-14 pointer-events-none opacity-0 z-20"
        >
          <div className="layer5-headline w-full text-left mt-12 sm:mt-16 md:mt-12 md:max-w-xl">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight font-cinematic drop-shadow-2xl">
              YOUR CAR DESERVES LAYERS,
            </h2>
            <p className="text-sm sm:text-base md:text-2xl text-gray-300 font-bold tracking-wide mt-1 font-display">
              MORE THAN JUST A WASH.
            </p>
          </div>

          <div className="w-full flex flex-col items-start justify-end mb-2 sm:mb-4 pointer-events-auto">
            <a
              href="#services"
              className="cta-glow text-center px-6 py-3.5 sm:px-8 sm:py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase text-xs sm:text-sm tracking-wider rounded-xl transition duration-300 shadow-lg shadow-red-600/30 font-mono"
            >
              EXPLORE SERVICES →
            </a>
            <div className="mt-3 flex items-center justify-start gap-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase opacity-75">
              <span>SCROLL TO EXPLORE</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
