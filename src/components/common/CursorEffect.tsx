import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const sparkleTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const sparkleContainer = sparkleContainerRef.current;
    if (!cursor || !sparkleContainer) return;

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle-particle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.background = "rgba(245, 158, 11, 0.8)";
      sparkle.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.8)";
      sparkleContainer.appendChild(sparkle);

      gsap.to(sparkle, {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        scale: Math.random() * 1.5 + 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          sparkle.remove();
        },
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      if (sparkleTimeoutRef.current !== null) {
        clearTimeout(sparkleTimeoutRef.current);
      }

      sparkleTimeoutRef.current = window.setTimeout(() => {
        if (Math.random() < 0.15) {
          createSparkle(e.clientX, e.clientY);
        }
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (sparkleTimeoutRef.current !== null) {
        clearTimeout(sparkleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          width: "8px",
          height: "8px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 15px #fff, 0 0 20px rgba(245, 158, 11, 0.4)",
        }}
      />
      <div ref={sparkleContainerRef} className="fixed inset-0 pointer-events-none z-[9998]" />
    </>
  );
};