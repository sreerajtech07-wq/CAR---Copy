import { useState, useEffect } from "react";

export interface QualityConfig {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  reducedMotion: boolean;
  dpr: number;
  maxParticles: number;
  enableDynamicGlow: boolean;
  enableMotionBlur: boolean;
}

export function useResponsiveQuality(): QualityConfig {
  const [config, setConfig] = useState<QualityConfig>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    reducedMotion: false,
    dpr: 1.5,
    maxParticles: 45,
    enableDynamicGlow: true,
    enableMotionBlur: true,
  });

  useEffect(() => {
    const checkQuality = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      const mediaMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const reducedMotion = mediaMotion.matches;

      const rawDpr = window.devicePixelRatio || 1;
      const dpr = isMobile ? Math.min(rawDpr, 1.25) : Math.min(rawDpr, 2.0);

      setConfig({
        isMobile,
        isTablet,
        isDesktop,
        reducedMotion,
        dpr,
        maxParticles: reducedMotion ? 0 : isMobile ? 18 : isTablet ? 30 : 60,
        enableDynamicGlow: !reducedMotion && !isMobile,
        enableMotionBlur: !reducedMotion && isDesktop,
      });
    };

    checkQuality();
    window.addEventListener("resize", checkQuality);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionHandler = () => checkQuality();
    motionQuery.addEventListener("change", motionHandler);

    return () => {
      window.removeEventListener("resize", checkQuality);
      motionQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  return config;
}
