import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeftRight } from "lucide-react";
import { BEFORE_AFTER_ITEMS } from "../../data/beforeAfter";

gsap.registerPlugin(ScrollTrigger);

export const BeforeAfter: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const positionRef = useRef(50);
  const isDraggingRef = useRef(false);
  const item = BEFORE_AFTER_ITEMS[0];
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".before-after-reveal",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          immediateRender: false,
          duration: 0.85,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const comparison = comparisonRef.current;
    if (!comparison) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(comparison);
    setContainerWidth(comparison.clientWidth);

    const updatePosition = (clientX: number) => {
      const bounds = comparison.getBoundingClientRect();
      const nextPosition = Math.min(100, Math.max(0, ((clientX - bounds.left) / bounds.width) * 100));
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    let activePointerId = -1;

    const handlePointerDown = (event: PointerEvent) => {
      activePointerId = event.pointerId;
      isDraggingRef.current = true;
      comparison.setPointerCapture(event.pointerId);
      updatePosition(event.clientX);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isDraggingRef.current) updatePosition(event.clientX);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      if (activePointerId !== -1) comparison.releasePointerCapture?.(activePointerId);
      activePointerId = -1;
    };

    comparison.addEventListener("pointerdown", handlePointerDown);
    comparison.addEventListener("pointermove", handlePointerMove);
    comparison.addEventListener("pointerup", handlePointerUp);
    comparison.addEventListener("pointercancel", handlePointerUp);

    return () => {
      observer.disconnect();
      comparison.removeEventListener("pointerdown", handlePointerDown);
      comparison.removeEventListener("pointermove", handlePointerMove);
      comparison.removeEventListener("pointerup", handlePointerUp);
      comparison.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const adjustPosition = (nextPosition: number) => {
    const clampedPosition = Math.min(100, Math.max(0, nextPosition));
    positionRef.current = clampedPosition;
    setPosition(clampedPosition);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      adjustPosition(positionRef.current - 5);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      adjustPosition(positionRef.current + 5);
    }
    if (event.key === "Home") {
      event.preventDefault();
      adjustPosition(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      adjustPosition(100);
    }
  };

  return (
    <section ref={sectionRef} id="transformation" className="relative w-full border-b border-white/10 bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="before-after-reveal mb-12 flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs font-semibold tracking-super-wide text-brand-red uppercase">THE TRANSFORMATION</span>
            </div>
            <h2 className="font-cinematic text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
              CRAFT & PAINT CORRECTION
            </h2>
          </div>
          <p className="mt-4 max-w-md font-mono text-xs tracking-wider text-metallic-400 md:mt-0 md:text-right uppercase">
            DRAG THE SLIDER TO INSPECT PAINT RECOVERY & CERAMIC ARMOR
          </p>
        </div>

        <div className="before-after-reveal grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-red/15 border border-brand-red/30 text-brand-red font-mono text-xs font-bold tracking-widest uppercase rounded-sm mb-3">
              3-STAGE PAINT RESTORATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
              Before: Swirled & Oxidized Paint vs After: 3-Stage Corrected & Ceramic Coated Mirror Finish
            </h3>
            <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-gray-200">
              Deep swirl mark elimination and optical clarity restoration locked permanently under SiO2 ceramic quartz matrix armor.
            </p>
            <p className="mt-6 font-mono text-xs font-bold tracking-widest text-brand-amber uppercase">
              STATUS: DUAL-ACTION COMPOUNDED & CERAMIC CURING COMPLETE
            </p>
          </div>

          <div
            ref={comparisonRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after image comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={handleKeyDown}
            className="group relative aspect-[16/9] sm:aspect-[21/9] touch-none select-none overflow-hidden border border-white/15 bg-dark-900 rounded-sm outline-none focus-visible:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red/50 cursor-ew-resize shadow-2xl"
          >
            <img src={item.afterImage} alt={item.afterAlt} className="absolute inset-0 h-full w-full object-cover brightness-[1.05] contrast-[1.05]" draggable={false} />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img
                src={item.beforeImage}
                alt={item.beforeAlt}
                className="h-full max-w-none object-cover brightness-[0.88] contrast-[0.92] saturate-[0.85]"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
                draggable={false}
              />
            </div>

            {/* Floating Pill Tags */}
            <span className="absolute left-4 top-4 border border-white/30 bg-dark-950/85 px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-white rounded-full shadow-lg backdrop-blur-md">
              BEFORE: HEAVY SWIRLS
            </span>
            <span className="absolute right-4 top-4 border border-brand-red/40 bg-dark-950/85 px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-brand-red rounded-full shadow-lg backdrop-blur-md">
              AFTER: CERAMIC ARMOR
            </span>

            {/* Vertical Divider & Circular Handle */}
            <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ left: `${position}%` }} aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-red text-white shadow-2xl transition-transform group-hover:scale-110">
                <ArrowLeftRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
