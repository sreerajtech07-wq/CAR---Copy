import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvas } from "./HeroCanvas";
import { useResponsiveQuality } from "../../hooks/useResponsiveQuality";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);

  // Stage refs based on exact visual event sync requirements
  const stage1Ref = useRef<HTMLDivElement | null>(null); // Stage 01: PROTECT WHAT YOU DRIVE. (001 - 030)
  const stage2Ref = useRef<HTMLDivElement | null>(null); // Stage 02: NOT JUST CLEAN. PROTECTED. (031 - 075)
  const stage3Ref = useRef<HTMLDivElement | null>(null); // Stage 03: PAINT PROTECTION FILM (076 - 105)
  const stage5Ref = useRef<HTMLDivElement | null>(null); // Stage 04: 9H CERAMIC COATING* (106 - 147) - MUST finish before 148
  const stage6Ref = useRef<HTMLDivElement | null>(null); // Stage 05: GRAPHENE MATRIX COATING* (148 - 230) - White Hyundai entrance
  const stage7Ref = useRef<HTMLDivElement | null>(null); // Stage 06: FINAL ARMOR STACK + CTA (231 - 300) - Starts AFTER Graphene completely finishes

  const [progress, setProgress] = useState<number>(0);
  const quality = useResponsiveQuality();

  const scrollDistance = quality.isMobile ? 2400 : 3500;

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    if (!container || !pinTarget) return;

    const stage1 = stage1Ref.current;
    const stage2 = stage2Ref.current;
    const stage3 = stage3Ref.current;
    const stage5 = stage5Ref.current;
    const stage6 = stage6Ref.current;
    const stage7 = stage7Ref.current;

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

        // Convert scroll progress (0.0 to 1.0) to 300 logical timeline frames (1 to 300)
        const frame = 1 + p * 299;

        // =========================================================================
        // STAGE 01: FRAME 001 - 030 | PROTECT WHAT YOU DRIVE. (Mercedes Reveal)
        // =========================================================================
        if (stage1) {
          let a1 = 0;
          let ls1 = 0.05;

          if (frame >= 1 && frame <= 25) {
            const progIn = (frame - 1) / 24; // 001 -> 025 enter
            a1 = progIn;
            ls1 = 0.05 + 0.13 * progIn; // 0.05em -> 0.18em
          } else if (frame > 25 && frame <= 30) {
            const progOut = (frame - 25) / 5;
            a1 = 1 - progOut;
            ls1 = 0.18;
          }

          gsap.set(stage1, { autoAlpha: a1, letterSpacing: `${ls1}em` });
        }

        // =========================================================================
        // STAGE 02: FRAME 031 - 075 | NOT JUST CLEAN. PROTECTED. (Paint Correction)
        // Must appear BEFORE PPF stone impact
        // =========================================================================
        if (stage2) {
          let a2 = 0;
          let x2 = -40;
          let ySub = 12;
          let aSub = 0;

          if (frame >= 31 && frame <= 70) {
            const progIn = Math.min(1, (frame - 31) / 10); // enter by frame 41
            a2 = progIn;
            x2 = -40 * (1 - progIn);
            aSub = 0.85 * progIn;
            ySub = 12 * (1 - progIn);
          } else if (frame > 70 && frame <= 75) {
            const progOut = (frame - 70) / 5;
            a2 = 1 - progOut;
            x2 = 0;
            aSub = 0.85 * (1 - progOut);
            ySub = 0;
          }

          gsap.set(stage2, { autoAlpha: a2, x: x2 });
          const subEl = stage2.querySelector(".stage2-subtext");
          if (subEl) {
            gsap.set(subEl, { autoAlpha: aSub, y: ySub });
          }
        }

        // =========================================================================
        // STAGE 03: FRAME 076 - 105 | PAINT PROTECTION FILM (Debris/Impact Event)
        // Triggers exactly when close-up paint/hood shot & stone impacts begin
        // =========================================================================
        if (stage3) {
          let a3 = 0;
          let scale3 = 0.97;
          let y3 = 10;

          if (frame >= 76 && frame <= 100) {
            const progIn = Math.min(1, (frame - 76) / 10); // enter by frame 86
            a3 = progIn;
            scale3 = 0.97 + 0.03 * progIn;
            y3 = 10 * (1 - progIn);
          } else if (frame > 100 && frame <= 105) {
            const progOut = (frame - 100) / 5;
            a3 = 1 - progOut;
            scale3 = 1;
            y3 = 0;
          }

          gsap.set(stage3, { autoAlpha: a3, scale: scale3, y: y3 });
        }

        // =========================================================================
        // STAGE 04: FRAME 106 - 147 | 9H CERAMIC COATING* (Kia Seltos Water Pour)
        // MUST BE COMPLETELY GONE BEFORE FRAME 148 (White Hyundai entrance)
        // Bullets removed completely per spec
        // =========================================================================
        if (stage5) {
          let a5 = 0;
          let scale5 = 0.97;
          let y5 = 0;

          if (frame >= 106 && frame <= 140) {
            const progIn = Math.min(1, (frame - 106) / 10); // enter by frame 116
            a5 = progIn;
            scale5 = 0.97 + 0.03 * progIn;
          } else if (frame > 140 && frame <= 147) {
            // Fade out completely before frame 148 White Hyundai entrance
            const progOut = (frame - 140) / 7;
            a5 = 1 - progOut;
            scale5 = 1;
            y5 = -8 * progOut;
          }

          gsap.set(stage5, { autoAlpha: a5, scale: scale5, y: y5 });

          // HUD Tracker Line Effect
          const trackerLine = stage5.querySelector(".ceramic-tracker-line");
          if (trackerLine) {
            const lineScale = frame >= 106 && frame <= 140 ? Math.min(1, (frame - 106) / 14) : frame > 140 ? Math.max(0, 1 - (frame - 140) / 7) : 0;
            gsap.set(trackerLine, { scaleX: lineScale, transformOrigin: "center center" });
          }
        }

        // =========================================================================
        // STAGE 05: FRAME 148 - 230 | GRAPHENE MATRIX COATING (White Hyundai Entrance)
        // Extended display window so Graphene heading stays on screen for extra scroll interaction.
        // Bullets removed completely per spec. Fade out ends by frame 230 before Final Armor begins.
        // =========================================================================
        if (stage6) {
          let a6 = 0;
          let scale6 = 0.96;
          let blur6 = 6;
          let pulseScale = 1;

          if (frame >= 148 && frame <= 220) {
            const progIn = Math.min(1, (frame - 148) / 12); // enter by frame 160
            a6 = progIn;
            scale6 = 0.96 + 0.04 * progIn;
            blur6 = 6 * (1 - progIn);

            // Single controlled pulse when violet molecular lattice effect peaks (frame 172 - 180)
            if (frame >= 172 && frame <= 180) {
              const pulseProg = (frame - 172) / 8;
              pulseScale = 1 + 0.03 * Math.sin(pulseProg * Math.PI);
            }
          } else if (frame > 220 && frame <= 230) {
            // Smoothly fade out Graphene text by frame 230
            const progOut = (frame - 220) / 10;
            a6 = 1 - progOut;
            scale6 = 1;
            blur6 = 0;
          }

          gsap.set(stage6, {
            autoAlpha: a6,
            scale: scale6 * pulseScale,
            filter: `blur(${blur6}px)`,
          });
        }

        // =========================================================================
        // STAGE 06: FRAME 231 - 300 (p: 0.82 -> 1.00) | FINAL ARMOR STACK + CTA
        // Starts after Graphene completely fades out (p >= 0.82)
        // =========================================================================
        if (stage7) {
          // calcAlpha equivalent for final threshold: p >= 0.82 to 0.86
          const finalArmorOpacity = p < 0.82 ? 0 : Math.min(1, (p - 0.82) / 0.04);
          gsap.set(stage7, { autoAlpha: finalArmorOpacity });

          let aLine1 = 0;
          let yLine1 = 30;
          let blurLine1 = 8;

          let aLine2 = 0;
          let yLine2 = 30;
          let blurLine2 = 8;

          let ctaX = 30;
          let ctaAlpha = 0;

          if (p >= 0.82) {
            // Line 1: YOUR CAR DESERVES LAYERS
            const prog1 = Math.min(1, Math.max(0, (p - 0.82) / 0.05));
            aLine1 = prog1;
            yLine1 = 30 * (1 - prog1);
            blurLine1 = 8 * (1 - prog1);

            // Line 2: MORE THAN JUST A WASH. (staggered)
            const prog2 = Math.min(1, Math.max(0, (p - 0.85) / 0.05));
            aLine2 = prog2;
            yLine2 = 30 * (1 - prog2);
            blurLine2 = 8 * (1 - prog2);

            // CTA glides into position
            const ctaProg = Math.min(1, Math.max(0, (p - 0.88) / 0.06));
            ctaAlpha = ctaProg;
            ctaX = 30 * (1 - ctaProg);
          }

          const line1El = stage7.querySelector(".stage7-line1");
          if (line1El) {
            gsap.set(line1El, { autoAlpha: aLine1, y: yLine1, filter: `blur(${blurLine1}px)` });
          }

          const line2El = stage7.querySelector(".stage7-line2");
          if (line2El) {
            gsap.set(line2El, {
              autoAlpha: aLine2,
              y: yLine2,
              filter: `blur(${blurLine2}px)`,
            });
          }

          // Progressive staggered specification stack
          const specItems = stage7.querySelectorAll(".spec-stack-item");
          specItems.forEach((item, idx) => {
            const itemTriggerP = 0.84 + idx * 0.015;
            let itemAlpha = 0;
            let itemY = 12;
            if (p >= itemTriggerP) {
              const itemProg = Math.min(1, (p - itemTriggerP) / 0.02);
              itemAlpha = itemProg;
              itemY = 12 * (1 - itemProg);
            }
            gsap.set(item, { autoAlpha: itemAlpha, y: itemY });
          });

          const ctaEl = stage7.querySelector(".stage7-cta");
          if (ctaEl) {
            gsap.set(ctaEl, { autoAlpha: ctaAlpha, x: ctaX });
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

        {/* -------------------------------------------------------------------------
            STAGE 01: PROTECT WHAT YOU DRIVE. (Frames 001 - 015)
            Gradient: Neon Cyan to Deep Teal (#22D3EE -> #0EA5E9)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage1Ref}
          id="stage-01"
          className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none opacity-0 z-20"
        >
          <h1
            className="font-black uppercase font-cinematic tracking-wider transition-all duration-300"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              backgroundImage: "linear-gradient(135deg, #67E8F9 0%, #22D3EE 45%, #0EA5E9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 28px rgba(34, 211, 238, 0.4))",
            }}
          >
            PROTECT WHAT YOU DRIVE.
          </h1>
        </div>

        {/* -------------------------------------------------------------------------
            STAGE 02: NOT JUST CLEAN. PROTECTED. (Frames 016 - 038)
            Gradient: Neon Cyan to Deep Teal (#22D3EE -> #0EA5E9)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage2Ref}
          id="stage-02"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none opacity-0 z-20"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <h2
              className="font-black uppercase font-cinematic tracking-tight mb-3"
              style={{
                fontSize: "clamp(1.8rem, 4.8vw, 4rem)",
                backgroundImage: "linear-gradient(135deg, #A5F3FC 0%, #22D3EE 50%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 25px rgba(34, 211, 238, 0.35))",
              }}
            >
              NOT JUST CLEAN. PROTECTED.
            </h2>

            <p
              className="stage2-subtext text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase font-mono mt-1 opacity-0"
              style={{
                backgroundImage: "linear-gradient(135deg, #A5F3FC 0%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.95))",
              }}
            >
              Multi-Stage Paint Correction • 99% Swirl Removal
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            STAGE 03: PAINT PROTECTION FILM (Frames 039 - 053)
            Gradient: Sunset Gold to Deep Amber (#FDE047 -> #F59E0B)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage3Ref}
          id="stage-03"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none opacity-0 z-20"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto relative">
            <h3
              className="font-black uppercase font-cinematic tracking-widest"
              style={{
                fontSize: "clamp(1.8rem, 4.8vw, 4rem)",
                backgroundImage: "linear-gradient(135deg, #FEF08A 0%, #FDE047 45%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 28px rgba(245, 158, 11, 0.45))",
              }}
            >
              PAINT PROTECTION FILM
            </h3>
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            STAGE 04: 9H CERAMIC COATING (Frames 054 - 074)
            Gradient: Emerald Green to Electric Lime-Cyan (#34D399 -> #06B6D4)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage5Ref}
          id="stage-05"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none opacity-0 z-20"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto relative">
            {/* HUD Tracker Line */}
            <div className="ceramic-tracker-line w-48 h-0.5 bg-gradient-to-r from-transparent via-[#34D399] to-transparent mb-4 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

            <h2
              className="font-black uppercase tracking-tight font-cinematic"
              style={{
                fontSize: "clamp(1.8rem, 4.8vw, 4rem)",
                backgroundImage: "linear-gradient(135deg, #A7F3D0 0%, #34D399 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 28px rgba(52, 211, 153, 0.45))",
              }}
            >
              9H CERAMIC COATING
            </h2>
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            STAGE 05: GRAPHENE MATRIX COATING (Frames 075 - 101)
            Gradient: Emerald Green to Electric Lime-Cyan (#34D399 -> #06B6D4)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage6Ref}
          id="stage-06"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none opacity-0 z-20"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <h2
              className="font-black uppercase tracking-wider font-cinematic"
              style={{
                fontSize: "clamp(1.8rem, 4.8vw, 4rem)",
                backgroundImage: "linear-gradient(135deg, #6EE7B7 0%, #10B981 45%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))",
              }}
            >
              GRAPHENE MATRIX COATING
            </h2>
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            STAGE 06: FINAL ARMOR STACK + CTA (Frames 104 - 151)
            Gradient: Sunset Gold-Bronze (#FDE047 -> #D97706)
           ------------------------------------------------------------------------- */}
        <div
          ref={stage7Ref}
          id="stage-07"
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-16 pointer-events-none opacity-0 z-20"
        >
          {/* Top-Left Editorial Headline - Mobile Navbar Top Spacing Added (pt-28 sm:pt-16 mt-6 sm:mt-0) */}
          <div className="stage7-header w-full text-left pt-28 sm:pt-16 md:pt-12 max-w-2xl">
            {/* Line 1: YOUR CAR DESERVES LAYERS, (Sunset Gold Gradient) */}
            <h2
              className="stage7-line1 font-black uppercase tracking-tight font-cinematic leading-[1.1] mb-2 opacity-0"
              style={{
                fontSize: "clamp(1.6rem, 4.2vw, 3.5rem)",
                backgroundImage: "linear-gradient(135deg, #FEF08A 0%, #FDE047 50%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 20px rgba(253, 224, 71, 0.3))",
              }}
            >
              YOUR CAR DESERVES LAYERS,
            </h2>

            {/* Line 2: MORE THAN JUST A WASH. (Sunset Gold-Bronze Gradient) */}
            <p
              className="stage7-line2 font-extrabold uppercase font-cinematic mb-4 opacity-0"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
                backgroundImage: "linear-gradient(135deg, #FDE047 0%, #F59E0B 60%, #D97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 22px rgba(245, 158, 11, 0.35))",
              }}
            >
              MORE THAN JUST A WASH.
            </p>

            {/* Subdued, Theme-matched Armor Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono tracking-widest uppercase">
              <span className="spec-stack-item px-3 py-1 text-xs font-medium tracking-wider uppercase rounded bg-amber-950/40 border border-amber-500/30 opacity-0 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #FEF08A, #F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                PPF
              </span>
              <span className="spec-stack-item px-3 py-1 text-xs font-medium tracking-wider uppercase rounded bg-amber-950/40 border border-amber-500/30 opacity-0 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #FEF08A, #F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                CERAMIC
              </span>
              <span className="spec-stack-item px-3 py-1 text-xs font-medium tracking-wider uppercase rounded bg-amber-950/40 border border-amber-500/30 opacity-0 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #FEF08A, #F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                GRAPHENE
              </span>
              <span className="spec-stack-item px-3 py-1 text-xs font-medium tracking-wider uppercase rounded bg-amber-950/40 border border-amber-500/30 opacity-0 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #FEF08A, #F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                COMPLETE PROTECTION
              </span>
            </div>
          </div>

          {/* Bottom-Left CTA & Scroll Indicator Group */}
          <div className="stage7-cta w-full flex flex-col items-start space-y-4 pb-2 sm:pb-4 pointer-events-auto opacity-0">
            {/* Solid Navbar Brand Red Theme CTA Button */}
            <a
              href="#services"
              className="group relative px-8 py-4 rounded-xl font-black uppercase text-xs sm:text-sm tracking-[0.2em] text-[#FEF08A] transition-all duration-300 hover:scale-105 font-mono overflow-hidden flex items-center space-x-3 shadow-2xl backdrop-blur-md bg-[#B5121B] hover:bg-[#7A0C14] border border-red-500/30"
              style={{
                backgroundColor: "#B5121B",
                border: "1px solid rgba(220, 38, 38, 0.4)",
                boxShadow: "0 0 25px rgba(181, 18, 27, 0.5), inset 0 0 10px rgba(254, 240, 138, 0.15)",
              }}
            >
              <span className="relative z-10 font-bold transition-colors duration-300 group-hover:text-[#FDE047]">
                EXPLORE SERVICES
              </span>
              <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2 text-[#FDE047]">
                →
              </span>
            </a>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase font-semibold"
                 style={{
                   backgroundImage: "linear-gradient(135deg, #FEF08A, #F59E0B)",
                   WebkitBackgroundClip: "text",
                   WebkitTextFillColor: "transparent",
                 }}>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">SCROLL TO EXPLORE ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
