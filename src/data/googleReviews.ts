export interface GoogleReview {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  date: string;
  profileImage?: string;
}

export const DEMO_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "1",
    reviewerName: "Rajesh Kumar",
    rating: 5,
    text: "Exceptional ceramic coating work on my BMW. The team at 3M Car Care Studio transformed my car's appearance completely. The showroom shine is still intact after 6 months of Chennai driving. Highly recommended for anyone serious about paint protection.",
    date: "2 weeks ago",
  },
  {
    id: "2", 
    reviewerName: "Priya Sharma",
    rating: 5,
    text: "Got full car detailing and ceramic coating done. The attention to detail is remarkable - they even cleaned areas I didn't know existed. My car looks better than when I bought it. The staff is professional and the facility is impressive.",
    date: "1 month ago",
  },
  {
    id: "3",
    reviewerName: "Suresh Venkat",
    rating: 5,
    text: "PPF installation on my Mercedes was flawless. The team explained everything clearly and the finish is invisible. The aftercare guidance was very helpful. Worth every rupee for the peace of mind it provides on Chennai roads.",
    date: "3 weeks ago",
  },
  {
    id: "4",
    reviewerName: "Anitha Ramesh",
    rating: 5,
    text: "Graphene coating on my new Audi exceeded expectations. The water beading effect is amazing and the gloss is incredible. The studio environment is clean and professional. They really take pride in their work.",
    date: "2 months ago",
  },
  {
    id: "5",
    reviewerName: "Karthik Srinivasan",
    rating: 5,
    text: "Complete interior detailing and sun film installation. The difference is night and day. My car's interior smells fresh and looks brand new. The sun film effectively reduces heat while maintaining visibility. Excellent service.",
    date: "1 month ago",
  },
  {
    id: "6",
    reviewerName: "Deepa Balakrishnan",
    rating: 5,
    text: "Anti-rust treatment for my SUV was done thoroughly. The team explained the coastal corrosion risks and their solution was comprehensive. The underbody coating looks professional and well-applied. Great investment for vehicle longevity.",
    date: "3 months ago",
  },
];