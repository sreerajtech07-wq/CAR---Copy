import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileServiceCardCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  className?: string;
  counterPosition?: "top" | "bottom";
  title?: string;
  subtitle?: string;
}

export function MobileServiceCardCarousel<T>({
  items,
  renderItem,
  keyExtractor,
  className = "",
  counterPosition = "top",
  title,
  subtitle,
}: MobileServiceCardCarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const total = items.length;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width > 0) {
      // Calculate closest index based on scroll position
      const newIndex = Math.min(
        total - 1,
        Math.max(0, Math.round(scrollLeft / (width * 0.85)))
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.clientWidth * 0.85;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  const renderCounter = () => (
    <div className="flex items-center space-x-2 bg-black/60 border border-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono tracking-wider shadow-lg">
      <span className="text-brand-red font-bold">{activeIndex + 1}</span>
      <span className="text-zinc-500">/</span>
      <span className="text-metallic-300">{total}</span>
    </div>
  );

  return (
    <div className={`relative w-full ${className}`}>
      {/* Top Header Row with Counter for Mobile */}
      <div className="flex items-center justify-between mb-4 sm:hidden px-1">
        {title ? (
          <div>
            {subtitle && (
              <div className="font-mono text-[10px] text-brand-red tracking-widest uppercase">
                {subtitle}
              </div>
            )}
            <h3 className="font-cinematic text-lg font-bold text-white uppercase">
              {title}
            </h3>
          </div>
        ) : (
          <div className="text-[10px] font-mono uppercase tracking-widest text-metallic-400">
            SWIPE TO CAROUSEL
          </div>
        )}

        {counterPosition === "top" && renderCounter()}
      </div>

      {/* Desktop Grid Layout (Preserves original grid completely on sm+ screens) */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <React.Fragment key={keyExtractor ? keyExtractor(item, idx) : idx}>
            {renderItem(item, idx)}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Swipeable Scroll Container */}
      <div className="sm:hidden relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-1"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {items.map((item, idx) => (
            <div
              key={keyExtractor ? keyExtractor(item, idx) : idx}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center"
            >
              {renderItem(item, idx)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows & Counter at Bottom if configured */}
        <div className="flex items-center justify-between mt-3 px-1">
          {counterPosition === "bottom" ? (
            renderCounter()
          ) : (
            <div className="flex items-center space-x-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-6 bg-brand-red"
                      : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed active:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(total - 1, activeIndex + 1))}
              disabled={activeIndex === total - 1}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed active:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
