import React from "react";
import { Star, Edit3 } from "lucide-react";
import { GOOGLE_REVIEWS, type VerifiedReview } from "../sections/GoogleReviews";

export type ReviewCategory = 
  | "ppf" 
  | "ceramic" 
  | "graphene" 
  | "borophene" 
  | "sunfilm" 
  | "anti-glare" 
  | "antirust" 
  | "germ-kleen" 
  | "detailing";

interface ServiceReviewsProps {
  category: ReviewCategory | string;
}

const MAPS_REVIEW_URL =
  "https://www.google.com/maps/place/3M+Car+Care+Studio+-+Car+Detailing,+Ceramic+Coating+and+PPF,+OMR%2F+ECR/@12.937434,80.234888,16z/data=!4m14!1m7!3m6!1s0x3a525c631f4a9e11:0x95d201f8ce08e478!2s3M+Car+Care+Studio+-+Car+Detailing,+Ceramic+Coating+and+PPF,+OMR%2F+ECR!8m2!3d12.937434!4d80.2348876!16s%2Fg%2F11b5pkq6_p!3m5!1s0x3a525c631f4a9e11:0x95d201f8ce08e478!8m2!3d12.937434!4d80.2348876!16s%2Fg%2F11b5pkq6_p?hl=en&entry=ttu";

export const ServiceReviews: React.FC<ServiceReviewsProps> = ({ category }) => {
  // Map category keywords to exact relevant Google Reviews
  const getFilteredReviews = (): VerifiedReview[] => {
    switch (category) {
      case "ppf":
        return GOOGLE_REVIEWS.filter(
          (r) =>
            r.service.toLowerCase().includes("ppf") ||
            r.service.toLowerCase().includes("paint protection film")
        );
      case "ceramic":
      case "graphene":
      case "borophene":
        return GOOGLE_REVIEWS.filter(
          (r) =>
            r.service.toLowerCase().includes("ceramic") ||
            r.service.toLowerCase().includes("graphene") ||
            r.service.toLowerCase().includes("coating") ||
            r.service.toLowerCase().includes("anti-rust")
        );
      case "sunfilm":
      case "anti-glare":
        return GOOGLE_REVIEWS.filter(
          (r) =>
            r.service.toLowerCase().includes("sunfilm") ||
            r.text.toLowerCase().includes("sun film") ||
            r.text.toLowerCase().includes("heat")
        );
      case "antirust":
      case "germ-kleen":
      case "detailing":
        return GOOGLE_REVIEWS.filter(
          (r) =>
            r.service.toLowerCase().includes("paint correction") ||
            r.service.toLowerCase().includes("germkleen") ||
            r.service.toLowerCase().includes("wash") ||
            r.service.toLowerCase().includes("detailing")
        );
      default:
        return GOOGLE_REVIEWS.slice(0, 3);
    }
  };

  const reviews = getFilteredReviews();

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-[1px] bg-[#F5BD47]" />
            <span className="font-mono text-xs font-bold text-[#F5BD47] uppercase tracking-wider">
              ★ 4.5 GOOGLE MAPS REVIEWS
            </span>
          </div>
          <h3 className="font-cinematic text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
            VERIFIED CUSTOMER REVIEWS FOR THIS CATEGORY
          </h3>
        </div>

        {/* Write a Review CTA Button */}
        <a
          href={MAPS_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-[#F5BD47]/40 text-[#F5BD47] hover:bg-[#F5BD47]/10 text-xs tracking-wider uppercase font-mono font-bold px-4 py-2.5 rounded-lg transition-all shadow-md active:scale-95 shrink-0"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>WRITE A REVIEW ↗</span>
        </a>
      </div>

      {/* Homepage-Style Premium Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="relative bg-[#0e0e0e]/92 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-brand-red/40 transition-all duration-300 group"
          >
            <div>
              {/* Header: Avatar, Author, Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: rev.bgColor }}
                    className="w-10 h-10 rounded-full border border-white/20 text-white font-bold text-sm flex items-center justify-center font-sans shadow-md shrink-0 uppercase"
                  >
                    {rev.initial}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm leading-snug">
                      {rev.author}
                    </div>
                    <div className="text-[11px] font-mono text-metallic-400 font-medium">
                      {rev.carModel}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5BD47] text-[#F5BD47]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-metallic-500">
                    {rev.relativeTime}
                  </span>
                </div>
              </div>

              {/* Service Category Badge */}
              <div className="mb-3">
                <span className="inline-block text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider bg-brand-red/10 border border-brand-red/20 px-2.5 py-0.5 rounded">
                  {rev.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-light italic">
                "{rev.text}"
              </p>
            </div>

            {/* Footer Tag */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-metallic-400">
              <span className="uppercase tracking-wider">Verified Google Customer</span>
              <span className="text-[#F5BD47] font-semibold">5.0 ★ Rating</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
