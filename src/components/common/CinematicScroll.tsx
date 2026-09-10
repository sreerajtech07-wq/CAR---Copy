import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CinematicScroll: React.FC = () => {
  useLayoutEffect(() => {
    const main = document.querySelector("main");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("main > section:not(#hero)");

      sections.forEach((section) => {
        const content = Array.from(section.children).find((child) => {
          const element = child as HTMLElement;
          const position = window.getComputedStyle(element).position;
          return position !== "absolute" && position !== "fixed";
        }) as HTMLElement | undefined;

        if (!content) return;

        const groups = Array.from(content.children).filter((child) => {
          const element = child as HTMLElement;
          return window.getComputedStyle(element).position !== "absolute";
        });

        if (groups.length > 0) {
          gsap.from(groups, {
            y: 32,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });
        }

        const images = gsap.utils.toArray<HTMLImageElement>(section.querySelectorAll("img"));
        if (images.length > 0) {
          gsap.fromTo(
            images,
            { scale: 1.035 },
            {
              scale: 1,
              duration: 1.1,
              stagger: 0.04,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, main);

    return () => {
      context.revert();
    };
  }, []);

  return null;
};
