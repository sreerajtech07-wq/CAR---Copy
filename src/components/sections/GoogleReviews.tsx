import React, { useState } from "react";
import { Star } from "lucide-react";
import { DEMO_GOOGLE_REVIEWS } from "../../data/googleReviews";

export const GoogleReviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ));
  };

  const averageRating = 4.9;
  const totalReviews = 128;

  return (
    <section className="relative w-full bg-white py-20 sm:py-28 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="font-mono text-xs text-amber-600 tracking-widest uppercase">
              Customer Reviews
            </span>
            <span className="w-8 h-[1px] bg-amber-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Google Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            What our customers say about their experience at 3M Car Care Studio
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
              {averageRating}
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {totalReviews} reviews
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          <div className="text-center sm:text-left">
            <div className="text-sm text-gray-600 mb-2">
              Based on {totalReviews} Google reviews
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Google</span>
            </div>
          </div>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-100">
            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                {renderStars(DEMO_GOOGLE_REVIEWS[activeIndex].rating)}
              </div>
              
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
                "{DEMO_GOOGLE_REVIEWS[activeIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 text-base sm:text-lg">
                    {DEMO_GOOGLE_REVIEWS[activeIndex].reviewerName}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {DEMO_GOOGLE_REVIEWS[activeIndex].date}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2 rounded-full bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 transition-colors"
                    aria-label="Previous review"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2 rounded-full bg-white border border-gray-200 hover:border-amber-400 hover:text-amber-600 transition-colors"
                    aria-label="Next review"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_GOOGLE_REVIEWS.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-900 text-sm">
                  {review.reviewerName}
                </div>
                <div className="text-xs text-gray-400">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};