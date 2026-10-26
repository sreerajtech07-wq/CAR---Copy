/**
 * AUTHORITATIVE BUSINESS DATA
 * 3M Car Care Studio – OMR / ECR
 * Strictly follows specification requirements: No invented claims or data.
 */

export interface BusinessData {
  readonly name: string;
  readonly category: string;
  readonly location: string;
  readonly address: {
    readonly street: string;
    readonly area: string;
    readonly city: string;
    readonly pincode: string;
    readonly state: string;
    readonly country: string;
    readonly full: string;
  };
  readonly landmark: string;
  readonly phone: string;
  readonly phoneClean: string;
  readonly whatsapp: string;
  readonly whatsappClean: string;
  readonly whatsappUrl: string;
  readonly email: string;
  readonly instagram: string;
  readonly instagramUrl: string;
  readonly website: string;
  readonly websiteUrl: string;
  readonly businessHours: {
    readonly days: string;
    readonly hours: string;
    readonly display: string;
  };
  readonly brandMessage: string;
  readonly shortDescription: string;
  readonly mapQueryUrl: string;
}

export const BUSINESS: BusinessData = {
  name: "3M Car Care Studio – OMR / ECR",
  category: "Premium Car Care & Automotive Detailing Studio",
  location: "Mettukuppam, OMR, Chennai, Tamil Nadu, India",
  address: {
    street: "3/452E, Rajiv Gandhi Salai, OMR",
    area: "Mettukuppam",
    city: "Chennai",
    pincode: "600097",
    state: "Tamil Nadu",
    country: "India",
    full: "3/452E, Rajiv Gandhi Salai, OMR, Mettukuppam, Chennai – 600097, Tamil Nadu, India",
  },
  landmark: "Opposite AKDR Golf Village",
  phone: "+91 91670 48826",
  phoneClean: "+919167048826",
  whatsapp: "+91 73055 41166",
  whatsappClean: "917305541166",
  whatsappUrl: "https://wa.me/917305541166",
  email: "3mcarcare.chennai.omr@gmail.com",
  instagram: "@3mcarcareomr",
  instagramUrl: "https://www.instagram.com/3mcarcareomr",
  website: "3mcarcarestudioomr.com",
  websiteUrl: "https://3mcarcarestudioomr.com",
  businessHours: {
    days: "Monday – Sunday",
    hours: "9:30 AM – 8:00 PM",
    display: "Monday – Sunday: 9:30 AM – 8:00 PM",
  },
  brandMessage: "Premium Car Care. Advanced Protection.",
  shortDescription:
    "Professional automotive care and protection services in OMR, Chennai, offering premium detailing, ceramic coating, graphene coating, PPF, sun film and anti-rust protection solutions.",
  mapQueryUrl:
    "https://www.google.com/maps/place/3M+Car+Care+Studio+-+Car+Detailing,+Ceramic+Coating+and+PPF,+OMR%2F+ECR/@12.937434,80.234888,16z/data=!4m14!1m7!3m6!1s0x3a525c631f4a9e11:0x95d201f8ce08e478!2s3M+Car+Care+Studio+-+Car+Detailing,+Ceramic+Coating+and+PPF,+OMR%2F+ECR!8m2!3d12.937434!4d80.2348876!16s%2Fg%2F11b5pkq6_p!3m5!1s0x3a525c631f4a9e11:0x95d201f8ce08e478!8m2!3d12.937434!4d80.2348876!16s%2Fg%2F11b5pkq6_p?hl=en&entry=ttu",
};
