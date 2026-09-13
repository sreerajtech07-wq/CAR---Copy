import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "../../data/business";

export interface VerifiedReview {
  id: string;
  initial: string;
  avatarBg: string;
  rating: number;
  headline: string;
  body: string;
  author: string;
  subtitle: string;
}

const VERIFIED_REVIEWS: VerifiedReview[] = [
  // ROW 1
  {
    id: "1",
    initial: "R",
    avatarBg: "bg-[#d49e35]",
    rating: 5,
    headline: "Exceptional Clarity & Finish",
    body: "The level of transparency and finish on my BMW 330Li was top tier. They eliminated factory buffer swirls and locked it under Scotchgard PPF. Not a single exposed edge or bubble visible.",
    author: "Rajesh K.",
    subtitle: "BMW 330Li · Sholinganallur",
  },
  {
    id: "2",
    initial: "M",
    avatarBg: "bg-[#1e3a5f]",
    rating: 5,
    headline: "Superb Heat Rejection (CR70)",
    body: "Chennai veyilluku CR70 sunfilm pottadhum cabin semma cool aachu. AC load bayangarama koranjuruku. Highly satisfied with Raju and the team's polite approach.",
    author: "Manojkumar V.",
    subtitle: "Hyundai Creta · Perungudi OMR",
  },
  {
    id: "3",
    initial: "A",
    avatarBg: "bg-[#2d7a4f]",
    rating: 5,
    headline: "Flawless Ceramic Shield",
    body: "Safari Dark Edition ceramic coating panninen. Mirror gloss pakka finish, no buffer trails even under harsh studio LED lights. Salt water spray from ECR hasn't affected the shine at all.",
    author: "Anandharaj R.",
    subtitle: "Tata Safari Dark Edition · Akkarai",
  },
  {
    id: "4",
    initial: "I",
    avatarBg: "bg-[#3b4b5c]",
    rating: 5,
    headline: "Surgical Interior Clean",
    body: "Prompt delivery and genuine 3M electronic warranty issued on spot. The GermKleen interior treatment completely removed moisture smell and left the leather seats factory-matte.",
    author: "Isaivani S.",
    subtitle: "Mercedes-Benz C-Class · ECR",
  },
  // ROW 2
  {
    id: "5",
    initial: "K",
    avatarBg: "bg-[#d9532f]",
    rating: 5,
<<<<<<< Updated upstream
    headline: "Delivered on Time",
    body: "Good experience overall. Dropped my Thar for underbody anti-rust and full body wash. Punctual commitment, delivered exactly on committed time before our weekend trip.",
=======
    headline: "Mahindra Thar - Thoraipakkam",
    body: "3M OMR-ல் என் வண்டிக்கு PPF செய்தேன். வேலை மிக நேர்த்தியாகவும் ஃபினிஷிங் பிரமாதமாகவும் உள்ளது. டீமின் அணுகுமுறை அருமை!",
>>>>>>> Stashed changes
    author: "Karthik Raja",
    subtitle: "Mahindra Thar · Thoraipakkam",
  },
  {
    id: "6",
    initial: "S",
    avatarBg: "bg-[#d4a017]",
    rating: 5,
<<<<<<< Updated upstream
    headline: "Proper Detailing Studio",
    body: "Worth every single rupee! Dust-free bay la vechu work pandratha camera live feed la kaatinanga. Genuine 3M materials only. Car delivery edukumbothu showroom pudhu vandi maadhiri irunthathu.",
=======
    headline: "Kia Seltos - Navalur",
    body: "செராமிக் கோட்டிங் செய்த பிறகு வண்டியின் பளபளப்பு புதுசு போல் மின்னுகிறது. 3M மெட்டீரியல் தரம் மற்றும் வாடிக்கையாளர் சேவைக்கு முழு திருப்தி.",
>>>>>>> Stashed changes
    author: "Saravanan P.",
    subtitle: "Kia Seltos Facelift · Navalur",
  },
  {
    id: "7",
    initial: "M",
    avatarBg: "bg-[#1e3a5f]",
    rating: 5,
    headline: "Reliable & Trustworthy",
    body: "Professional staff who don't force unnecessary packages. Inspected my clearcoat depth first and recommended only 2-stage correction instead of expensive coating. Honesty is appreciated!",
    author: "Mrs. Meenakshi",
    subtitle: "Honda City · Medavakkam",
  },
  {
    id: "8",
    initial: "K",
    avatarBg: "bg-[#287a55]",
    rating: 5,
<<<<<<< Updated upstream
    headline: "Best PPF Work in OMR",
    body: "Got pre-cut PPF installed for door edges, ORVMs, and bonnet. Computer plotter cutting nala clearcoat mela blade touch aagama safe ah pannanga. Clean workmanship.",
=======
    headline: "Volkswagen Virtus GT - OMR",
    body: "கிராபீன் மேட்ரிக்ஸ் கோட்டிங் ஃபினிஷ் அருமை. பெயிண்ட் ப்ரொடக்ஷன் மற்றும் வாட்டர் ரிப்பல்லன்சி சூப்பராக வேலை செய்கிறது.",
>>>>>>> Stashed changes
    author: "Kishore Kumar",
    subtitle: "Volkswagen Virtus GT · OMR",
  },
];

export const GoogleReviews: React.FC = () => {
  const renderStars = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
    ));

  return (
    <section id="reviews" className="relative w-full bg-transparent py-12 md:py-16 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-6 h-[1px] bg-brand-red" />
              <span className="font-mono text-xs font-semibold text-brand-red tracking-widest uppercase">
                VERIFIED GOOGLE REVIEWS // CHENNAI OMR STUDIO
              </span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          {/* Rating Summary */}
<<<<<<< Updated upstream
          <div className="mt-6 md:mt-0 flex items-center gap-4 font-mono text-xs text-metallic-300">
=======
          <div className="mt-4 md:mt-0 flex items-center gap-4 font-mono text-xs text-metallic-300">
>>>>>>> Stashed changes
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-white">4.9</span>
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
              <span className="text-[10px] text-metallic-400">150+ Verified Reviews</span>
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
        {/* 8-Card Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pt-6">
=======
        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-4">
>>>>>>> Stashed changes
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative bg-neutral-950/80 border border-neutral-900/80 rounded-2xl p-6 pt-10 text-center flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-brand-red/50 hover:bg-neutral-900/60 group"
            >
              {/* Circular Avatar Badge Overlapping Top Center */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div
                  className={`w-12 h-12 rounded-full border-2 border-white ${review.avatarBg} text-white font-display font-extrabold text-base flex items-center justify-center shadow-xl uppercase select-none`}
                >
                  {review.initial}
                </div>
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center justify-center gap-1 mb-2 pt-1">
                  {renderStars(review.rating)}
                </div>

                {/* Headline */}
                <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                  "{review.headline}"
                </h3>

                {/* Body */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  "{review.body}"
                </p>
              </div>

              {/* Author & Subtitle */}
              <div className="pt-3 border-t border-white/5">
                <div className="font-display font-bold text-white text-sm">
                  {review.author}
                </div>
                <div className="font-mono text-[11px] text-metallic-400 mt-0.5">
                  {review.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Link */}
<<<<<<< Updated upstream
        <div className="mt-14 flex justify-center">
=======
        <div className="mt-12 flex justify-center">
>>>>>>> Stashed changes
          <a
            href={BUSINESS.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-brand-red hover:text-white transition-colors uppercase group"
          >
            <span>Read all 150+ verified 5-star customer reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};