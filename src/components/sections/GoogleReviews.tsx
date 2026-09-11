import React, { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { DEMO_GOOGLE_REVIEWS } from "../../data/googleReviews";

export const GoogleReviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % DEMO_GOOGLE_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + DEMO_GOOGLE_REVIEWS.length) % DEMO_GOOGLE_REVIEWS.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-brand-red text-brand-red" : "text-gray-600"}`}
      />
    ));
  };

  const averageRating = 4.9;
  const totalReviews = DEMO_GOOGLE_REVIEWS.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) nextReview();
      else prevReview();
    }
    touchStartXRef.current = null;
  };

  return (
    <section id="reviews" className="relative w-full bg-dark-950/90 py-24 sm:py-32 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs text-brand-red tracking-widest uppercase">
                STUDIO REVIEWS // DEMO SET
              </span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          {/* Google Cue & Rating summary */}
          <div className="mt-6 md:mt-0 flex items-center gap-6 font-mono text-xs text-metallic-300">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold text-white">{averageRating}</span>
              <div className="flex items-center gap-0.5">{renderStars(5)}</div>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div className="flex flex-col">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <svg className="w-4 h-4 inline" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google Verified Format
              </span>
              <span className="text-[10px] text-metallic-500">{totalReviews} Local Studio Reviews</span>
            </div>
          </div>
        </div>

        {/* Featured Editorial Testimonial Stage */}
        <div className="relative max-w-4xl mx-auto mb-14">
          <div className="relative bg-dark-900/80 border border-white/10 rounded-sm p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-red/15 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6">
              {renderStars(DEMO_GOOGLE_REVIEWS[activeIndex].rating)}
            </div>

            <p
              lang={DEMO_GOOGLE_REVIEWS[activeIndex].language === "ta" ? "ta" : "en"}
              className={`text-white text-lg sm:text-2xl leading-relaxed mb-8 font-light italic ${
                DEMO_GOOGLE_REVIEWS[activeIndex].language === "ta" ? "font-tamil not-italic" : ""
              }`}
            >
              "{DEMO_GOOGLE_REVIEWS[activeIndex].text}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="font-display font-bold text-white text-base sm:text-lg tracking-wide">
                  —{" "}
                  <span className={DEMO_GOOGLE_REVIEWS[activeIndex].language === "ta" ? "font-tamil" : ""}>
                    {DEMO_GOOGLE_REVIEWS[activeIndex].reviewerName}
                  </span>
                </div>
                <div className="font-mono text-xs text-brand-amber mt-0.5">
                  {DEMO_GOOGLE_REVIEWS[activeIndex].vehicle} • {DEMO_GOOGLE_REVIEWS[activeIndex].service}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-white/5 border border-white/15 text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-xs text-metallic-400">
                  {activeIndex + 1} / {totalReviews}
                </span>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-white/5 border border-white/15 text-white hover:border-brand-red hover:bg-brand-red transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Track Carousel / Grid */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-brand-red/40 scrollbar-track-transparent snap-x snap-mandatory"
        >
          {DEMO_GOOGLE_REVIEWS.map((review, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div
                key={review.id}
                onClick={() => setActiveIndex(idx)}
                className={`min-w-[280px] sm:min-w-[340px] max-w-[360px] snap-start p-6 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-dark-900 border-brand-red shadow-xl shadow-red-950/20 scale-[1.02]"
                    : "bg-dark-950/60 border-white/10 hover:border-white/20 hover:bg-dark-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">{renderStars(review.rating)}</div>
                  <p
                    lang={review.language === "ta" ? "ta" : "en"}
                    className={`text-metallic-200 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                      review.language === "ta" ? "font-tamil" : ""
                    }`}
                  >
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div
                    className={`font-display font-semibold text-white text-xs sm:text-sm ${
                      review.language === "ta" ? "font-tamil" : ""
                    }`}
                  >
                    {review.reviewerName}
                  </div>
                  <div className="font-mono text-[10px] text-metallic-400 mt-0.5 truncate">
                    {review.vehicle} • {review.service}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};