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

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".before-after-reveal",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
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

    const updatePosition = (clientX: number) => {
      const bounds = comparison.getBoundingClientRect();
      const nextPosition = Math.min(100, Math.max(0, ((clientX - bounds.left) / bounds.width) * 100));
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isDraggingRef.current) updatePosition(event.clientX);
    };
    const handlePointerUp = () => {
      isDraggingRef.current = false;
      if (activePointerId !== -1) comparison.releasePointerCapture?.(activePointerId);
      activePointerId = -1;
    };
    let activePointerId = -1;

    const handlePointerDown = (event: PointerEvent) => {
      activePointerId = event.pointerId;
      isDraggingRef.current = true;
      comparison.setPointerCapture(event.pointerId);
      updatePosition(event.clientX);
    };

    comparison.addEventListener("pointerdown", handlePointerDown);
    comparison.addEventListener("pointermove", handlePointerMove);
    comparison.addEventListener("pointerup", handlePointerUp);
    comparison.addEventListener("pointercancel", handlePointerUp);

    return () => {
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
    <section ref={sectionRef} id="transformation" className="relative w-full border-b border-white/10 bg-dark-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="before-after-reveal mb-12 flex flex-col justify-between border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="font-mono text-xs tracking-super-wide text-metallic-400">THE TRANSFORMATION</span>
            </div>
            <h2 className="font-cinematic text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">BEFORE / AFTER</h2>
          </div>
          <p className="mt-4 max-w-md font-mono text-xs tracking-wider text-metallic-400 md:mt-0 md:text-right">DRAG THE DIVIDER TO INSPECT THE STUDIO REFERENCE</p>
        </div>

        <div className="before-after-reveal grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:items-end">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">{item.title}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-metallic-300">{item.description}</p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-brand-amber">{item.status}</p>
          </div>

          <div
            ref={comparisonRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after image comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={handleKeyDown}
            className="group relative aspect-[16/9] touch-none select-none overflow-hidden border border-white/15 bg-dark-900 outline-none focus-visible:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red/50"
          >
            <img src={item.afterImage} alt={item.afterAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img src={item.beforeImage} alt={item.beforeAlt} className="h-full w-full max-w-none object-cover" style={{ width: comparisonRef.current?.clientWidth || "100%" }} draggable={false} />
            </div>
            <span className="absolute left-4 top-4 border border-white/25 bg-dark-950/80 px-2 py-1 font-mono text-[10px] tracking-widest text-white">BEFORE</span>
            <span className="absolute right-4 top-4 border border-white/25 bg-dark-950/80 px-2 py-1 font-mono text-[10px] tracking-widest text-white">AFTER</span>
            <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }} aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-brand-red text-white shadow-lg">
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
