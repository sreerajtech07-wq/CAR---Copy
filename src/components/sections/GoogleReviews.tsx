import React from "react";
import { Star, ExternalLink, Edit3 } from "lucide-react";

export interface VerifiedReview {
  id: number;
  author: string;
  rating: number;
  relativeTime: string;
  service: string;
  carModel: string;
  text: string;
  initial: string;
  bgColor: string;
}

export const GOOGLE_REVIEWS: VerifiedReview[] = [
  {
    id: 1,
    author: "Karthik Subramanian",
    rating: 5,
    relativeTime: "3 weeks ago",
    service: "Paint Protection Film (PPF)",
    carModel: "Land Rover Defender",
    text: "Got full PPF installed for my Defender here. The edge tucking and panel alignment are phenomenal. The staff explained the entire heat-gun application and post-care process patiently. Highly recommend their studio finish!",
    initial: "K",
    bgColor: "#1a73e8", // Blue
  },
  {
    id: 2,
    author: "Saravanan Kumar",
    rating: 5,
    relativeTime: "1 month ago",
    service: "9H Ceramic Coating",
    carModel: "Hyundai Creta",
    text: "Got 3M ceramic coating done right after taking car delivery. The glass finish and hydrophobic water-beading effect are next level! The team executed the paint correction with extreme precision.",
    initial: "S",
    bgColor: "#188038", // Green
  },
  {
    id: 3,
    author: "Anand Venkatesh",
    rating: 5,
    relativeTime: "1 month ago",
    service: "3M CR70 Sunfilm",
    carModel: "Toyota Fortuner",
    text: "Installed 3M CR70 crystalline sun film on windshield and all windows. The heat rejection inside the cabin is instantly noticeable even in peak Chennai noon heat. Clear visibility at night without any haze.",
    initial: "A",
    bgColor: "#d93025", // Red
  },
  {
    id: 4,
    author: "Vijay Balaji",
    rating: 5,
    relativeTime: "2 months ago",
    service: "Paint Correction & Polish",
    carModel: "Kia Seltos",
    text: "All heavy scratches and swirl marks on my black Seltos were completely eliminated. Looks brand new right out of the showroom! Exceptional detailing craftsmanship by the 3M OMR team.",
    initial: "V",
    bgColor: "#f29900", // Amber
  },
  {
    id: 5,
    author: "Rajesh Kannan",
    rating: 5,
    relativeTime: "2 months ago",
    service: "Interior GermKleen & Detailing",
    carModel: "Tata Harrier",
    text: "Opted for complete interior foam wash and GermKleen treatment. Removed deep coffee stains from upholstery and the AC vents smell completely fresh. Studio cleanliness and transparency are top-notch.",
    initial: "R",
    bgColor: "#9334e6", // Purple
  },
  {
    id: 6,
    author: "Dinesh Raj",
    rating: 5,
    relativeTime: "3 months ago",
    service: "Underbody Anti-Rust & Sunfilm",
    carModel: "Mahindra Thar",
    text: "Living near ECR, salt air oxidation was a big concern for underbody rust. Got the 3M anti-rust coating done with a 5-year warranty card. Comprehensive work and fantastic customer service!",
    initial: "D",
    bgColor: "#1a73e8", // Blue
  },
  {
    id: 7,
    author: "Deepak Sundaram",
    rating: 5,
    relativeTime: "3 months ago",
    service: "Graphene Matrix Coating",
    carModel: "BMW 3 Series",
    text: "Outstanding gloss and hydrophobicity. The swirl marks from my earlier improper washes are 100% gone. Team delivered the car right on promised delivery time. 5 stars without a doubt!",
    initial: "D",
    bgColor: "#188038", // Green
  },
  {
    id: 8,
    author: "Manoj Swaminathan",
    rating: 5,
    relativeTime: "4 months ago",
    service: "Foam Wash & Wax",
    carModel: "Skoda Slavia",
    text: "Great experience with their specialized pH-neutral foam wash and paint synthetic sealant. Staff doesn't cut corners and pays attention to wheel wells and badges. Excellent customer lounge as well.",
    initial: "M",
    bgColor: "#d93025", // Red
  },
];

const MAPS_REVIEW_URL = "https://maps.app.goo.gl/RJH95HUy9Wpaapd46";

export const GoogleReviews: React.FC = () => {
  const renderStars = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
    ));

  return (
    <section id="reviews" className="relative w-full bg-transparent py-12 md:py-16 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs font-semibold text-brand-red tracking-widest uppercase">
                4.5 ★ OVER 2,200+ GOOGLE REVIEWS IN OMR / CHENNAI
              </span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-4 font-mono text-xs text-metallic-300 shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-white">4.5</span>
              <div className="flex items-center gap-0.5">{renderStars(5)}</div>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div className="flex flex-col">
              <span className="text-white font-bold flex items-center gap-1.5">
                <svg className="w-4 h-4 inline" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google Verified Studio
              </span>
              <span className="text-[10px] text-metallic-400">2,200+ Verified Google Reviews</span>
            </div>
          </div>
        </div>

        {/* 8-Card Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pt-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative bg-neutral-950/80 border border-neutral-900/80 rounded-2xl p-6 pt-10 text-center flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-brand-red/50 hover:bg-neutral-900/60 group"
            >
              {/* Google Initial Circle Avatar Overlapping Top Center */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div
                  style={{ backgroundColor: review.bgColor }}
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg shadow-xl select-none font-sans uppercase"
                >
                  {review.initial}
                </div>
              </div>

              <div>
                {/* 5-Star Rating & Relative Time */}
                <div className="flex items-center justify-center gap-2 mb-2 pt-1">
                  <div className="flex items-center gap-0.5">{renderStars(review.rating)}</div>
                  <span className="text-[10px] font-mono text-metallic-400">• {review.relativeTime}</span>
                </div>

                {/* Service Badge & Car Model */}
                <div className="mb-2">
                  <span className="inline-block text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded">
                    {review.service}
                  </span>
                  <div className="text-[11px] font-mono text-metallic-400 mt-1 font-semibold">
                    {review.carModel}
                  </div>
                </div>

                {/* Body */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-light italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-white/5">
                <div className="font-display font-bold text-white text-sm">
                  {review.author}
                </div>
                <div className="font-mono text-[10px] text-metallic-400 mt-0.5 uppercase tracking-wider">
                  Verified Google Customer
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Links */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={MAPS_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-red-700 text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105"
          >
            <span>READ ALL 2,200+ VERIFIED CUSTOMER REVIEWS ON GOOGLE MAPS</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>

          <a
            href={MAPS_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
          >
            <Edit3 className="w-4 h-4 text-brand-red" />
            <span>WRITE A REVIEW ON GOOGLE ✍</span>
          </a>
        </div>
      </div>
    </section>
  );
};