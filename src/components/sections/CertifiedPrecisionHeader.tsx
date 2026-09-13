import React from "react";

export const CertifiedPrecisionHeader: React.FC = () => {
  return (
    <section className="relative w-full bg-transparent py-16 md:py-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-red-500 uppercase mb-3 block font-mono">
          ELEVATING AUTOMOTIVE EXCELLENCE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none text-center font-heading">
          3M™ CERTIFIED PRECISION
        </h2>
      </div>
    </section>
  );
};

export default CertifiedPrecisionHeader;
