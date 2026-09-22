export interface GoogleReview {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  date: string;
  vehicle?: string;
  service?: string;
  profileImage?: string;
  language?: "en" | "ta";
}

export const DEMO_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "1",
    reviewerName: "Rajesh Kumar",
    vehicle: "BMW 3 Series",
    service: "Ceramic Coating",
    rating: 5,
    text: "Exceptional ceramic coating work on my BMW. The team at 3M Car Care Studio transformed my car's appearance completely. The showroom shine is still intact after 6 months of Chennai driving. Highly recommended for anyone serious about paint protection.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    reviewerName: "Priya Sharma",
    vehicle: "Hyundai Tucson",
    service: "Full Car Detailing",
    rating: 5,
    text: "Got full car detailing and ceramic coating done. The attention to detail is remarkable - they even cleaned areas I didn't know existed. My car looks better than when I bought it. The staff is professional and the facility is impressive.",
    date: "1 month ago",
  },
  {
    id: "3",
    reviewerName: "Suresh Venkat",
    vehicle: "Mercedes-Benz C-Class",
    service: "Paint Protection Film (PPF)",
    rating: 5,
    text: "PPF installation on my Mercedes was flawless. The team explained everything clearly and the finish is invisible. The aftercare guidance was very helpful. Worth every rupee for the peace of mind it provides on Chennai roads.",
    date: "3 weeks ago",
  },
  {
    id: "4",
    reviewerName: "Anitha Ramesh",
    vehicle: "Audi A6 Matrix",
    service: "Graphene Coating",
    rating: 5,
    text: "Graphene coating on my new Audi exceeded expectations. The water beading effect is amazing and the gloss is incredible. The studio environment is clean and professional. They really take pride in their work.",
    date: "2 months ago",
  },
  {
    id: "5",
    reviewerName: "Karthik Srinivasan",
    vehicle: "Tata Harrier",
    service: "Interior Detailing & Sun Film",
    rating: 5,
    text: "Complete interior detailing and sun film installation. The difference is night and day. My car's interior smells fresh and looks brand new. The sun film effectively reduces heat while maintaining visibility. Excellent service.",
    date: "1 month ago",
  },
  {
    id: "6",
    reviewerName: "Deepa Balakrishnan",
    vehicle: "Toyota Fortuner",
    service: "Underbody Anti-Rust Treatment",
    rating: 5,
    text: "Anti-rust treatment for my SUV was done thoroughly. The team explained the coastal corrosion risks and their solution was comprehensive. The underbody coating looks professional and well-applied. Great investment for vehicle longevity.",
    date: "3 months ago",
  },
  {
    id: "7",
    reviewerName: "Arun Kumar",
    vehicle: "Mahindra Thar",
    service: "Ceramic Coating",
    rating: 5,
    text: "Got 3M Ceramic Coating done for my Thar. The work was extremely neat and professional. The car's finish looks even more premium now. Service and customer support were top notch.",
    date: "1 month ago",
    language: "en",
  },
  {
    id: "8",
    reviewerName: "Praveen Raj",
    vehicle: "Kia Seltos",
    service: "PPF Installation",
    rating: 5,
    text: "PPF installation was handled brilliantly. Every detail and corner was attended to with high precision. The team is friendly and professional. Entire experience from drop-off to delivery was very satisfying.",
    date: "2 months ago",
    language: "en",
  },
  {
    id: "9",
    reviewerName: "Karthik S.",
    vehicle: "Volkswagen Virtus",
    service: "Full Detailing Studio Package",
    rating: 5,
    text: "Visited this studio for the first time for a complete detailing package. Both interior and exterior detailing were performed impeccably. Car looks like it was just driven off the showroom floor!",
    date: "3 months ago",
    language: "en",
  },
];