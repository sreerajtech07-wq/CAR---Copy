import React, { useEffect, useRef } from "react";

/** A single shared light field: composited gradients, never a canvas or WebGL loop. */
export const FlowBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame: number | null = null;
    let pointerX = 0;
    let pointerY = 0;
    let scrollOffset = 0;

    const render = () => {
      frame = null;
      background.style.setProperty("--flow-x", `${pointerX}px`);
      background.style.setProperty("--flow-y", `${pointerY}px`);
      background.style.setProperty("--flow-rear-x", `${pointerX * 0.5}px`);
      background.style.setProperty("--flow-rear-y", `${pointerY * 0.5}px`);
      background.style.setProperty("--flow-scroll", `${scrollOffset}px`);
    };
    const requestRender = () => {
      if (frame === null) frame = window.requestAnimationFrame(render);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      pointerX = ((event.clientX / window.innerWidth) - 0.5) * 8;
      pointerY = ((event.clientY / window.innerHeight) - 0.5) * 8;
      requestRender();
    };
    const onScroll = () => {
      if (reducedMotion.matches) return;
      scrollOffset = ((window.scrollY % 1400) / 1400 - 0.5) * 10;
      requestRender();
    };
    const onMotionChange = () => {
      if (!reducedMotion.matches) return;
      pointerX = 0;
      pointerY = 0;
      scrollOffset = 0;
      requestRender();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);
    onScroll();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="atmospheric-flow pointer-events-none" aria-hidden="true">
      <div className="atmospheric-flow__base pointer-events-none" />
      <div className="atmospheric-flow__light atmospheric-flow__light--rear pointer-events-none" />
      <div className="atmospheric-flow__light atmospheric-flow__light--front pointer-events-none" />
      <div className="atmospheric-flow__grain pointer-events-none" />
    </div>
  );
};
