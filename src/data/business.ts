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
  email: "3mcarcare.chennai.omr@gmail.com",
  instagram: "@3mcarcareomr",
  instagramUrl: "https://www.instagram.com/3mcarcareomr",
  website: "3mcarcareomr.com",
  websiteUrl: "https://3mcarcareomr.com",
  businessHours: {
    days: "Monday – Sunday",
    hours: "9:30 AM – 8:00 PM",
    display: "Monday – Sunday: 9:30 AM – 8:00 PM",
  },
  brandMessage: "Premium Car Care. Advanced Protection.",
  shortDescription:
    "Professional automotive care and protection services in OMR, Chennai, offering premium detailing, ceramic coating, graphene coating, PPF, sun film and anti-rust protection solutions.",
  mapQueryUrl: "https://maps.app.goo.gl/rrcJvyfwn5pHncew6",
};
