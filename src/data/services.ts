/**
 * OFFICIAL VERIFIED SERVICES
 * Strictly reflects Section 02 & 18 & 19 of the specification.
 * No invented specifications, no fake warranties, no fake hardness claims.
 */

export interface ServiceCategory {
  readonly id: string;
  readonly title: string;
  readonly categoryName: string;
  readonly startingPrice: string;
  readonly priceDisplay: string;
  readonly shortDescription: string;
  readonly includedServices: readonly string[];
  readonly image: string;
  readonly tag: string;
  readonly route: string;
}

export const OFFICIAL_SERVICES: readonly ServiceCategory[] = [
  {
    id: "ceramic-coating",
    title: "3M Ceramic Coating",
    categoryName: "3M CERAMIC COATING",
    startingPrice: "₹20,000",
    priceDisplay: "Starting at ₹20,000",
    shortDescription:
      "Ultra-hydrophobic SiO2 optical gloss shell providing multi-year paint protection, chemical resistance, and high-gloss depth.",
    includedServices: [
      "Premium 3M Ceramic Coating",
      "Paint Correction Prep",
      "Gloss Enhancement",
      "Hydrophobic Protection",
      "Multi-Year Surface Shield",
    ],
    image: "https://images.unsplash.com/photo-1708805282676-0c15476eb8a2?auto=format&fit=crop&w=1200&q=80",
    tag: "OPTICAL GLOSS",
    route: "/ceramic-coating.html",
  },
  {
    id: "graphene-coating",
    title: "3M Graphene Coating",
    categoryName: "3M GRAPHENE COATING",
    startingPrice: "₹23,000",
    priceDisplay: "Starting at ₹23,000",
    shortDescription:
      "Advanced graphene matrix infusion delivering high thermal dissipation, antistatic dust repellency, and heavy-duty water-spot prevention.",
    includedServices: [
      "Advanced 3M Graphene Coating",
      "Enhanced Heat Dissipation",
      "High-Gloss Matrix Finish",
      "Water & Contamination Resistance",
    ],
    image: "https://images.unsplash.com/photo-1658244500543-47f32dc51dc2?auto=format&fit=crop&w=1200&q=80",
    tag: "ADVANCED MATRIX",
    route: "/graphene-coating.html",
  },
  {
    id: "10h-coating",
    title: "3M 10H Coating",
    categoryName: "3M 10H COATING",
    startingPrice: "₹20,000",
    priceDisplay: "Starting at ₹20,000",
    shortDescription:
      "Diamond-grade 10H surface hardness defense engineered for superior scratch resistance and long-lasting optical shield durability.",
    includedServices: [
      "10H Diamond-Grade Hardness",
      "Micro-Scratch Prevention",
      "High Hydrophobic Sheen",
      "Chemical & Acid Rain Defense",
    ],
    image: "https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?auto=format&fit=crop&w=1200&q=80",
    tag: "10H HARDNESS",
    route: "/10h-coating.html",
  },
  {
    id: "ppf",
    title: "3M PPF (Paint Protection Film)",
    categoryName: "3M PPF (PAINT PROTECTION FILM)",
    startingPrice: "₹600",
    priceDisplay: "Starting at ₹600",
    shortDescription:
      "Self-healing thermoplastic polyurethane (TPU) barrier protecting high-impact zones against rock chips, scratches, and harsh road debris.",
    includedServices: [
      "3M Scotchgard™ TPU Film",
      "Self-Healing Technology",
      "Stone-Chip & Scratch Barrier",
      "Precision Computer-Cut Templates",
      "10-Year Studio Guarantee",
    ],
    image: "https://images.unsplash.com/photo-1617898528081-20d57598d40d?auto=format&fit=crop&w=1200&q=80",
    tag: "PHYSICAL ARMOR",
    route: "/ppf.html",
  },
  {
    id: "sun-film",
    title: "3M Sunfilm",
    categoryName: "3M SUNFILM",
    startingPrice: "₹4,500",
    priceDisplay: "Starting at ₹4,500",
    shortDescription:
      "Premium automotive solar rejection films blocking up to 99% UV rays and heavy infrared heat to maintain a cool, protected cabin.",
    includedServices: [
      "3M Crystalline & Color Stable",
      "Up to 99% UV Ray Rejection",
      "High Infrared Heat Rejection",
      "Glare Reduction & Privacy",
    ],
    image: "https://images.unsplash.com/photo-1699897483215-a66a9ca292b3?auto=format&fit=crop&w=1200&q=80",
    tag: "SOLAR SHIELD",
    route: "/sun-film.html",
  },
  {
    id: "anti-glare-film",
    title: "3M Anti-Glare Film",
    categoryName: "3M ANTI-GLARE FILM",
    startingPrice: "₹4,500",
    priceDisplay: "Starting at ₹4,500",
    shortDescription:
      "Specialized optical clarity film designed to diffuse headlight glare, reduce eye strain during night driving, and optimize interior screen visibility.",
    includedServices: [
      "Night Driving Glare Diffusion",
      "High Optical Clarity",
      "Eye Strain Reduction",
      "Scratch-Resistant Surface",
    ],
    image: "https://images.unsplash.com/photo-1708586314624-bed5b5be4187?auto=format&fit=crop&w=1200&q=80",
    tag: "OPTICAL CLARITY",
    route: "/anti-glare-film.html",
  },
];

export interface AdditionalServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  ctaText: string;
  link: string;
}

export const additionalServices: AdditionalServiceItem[] = [
  {
    id: "paint-correction",
    title: "Paint Correction",
    badge: "Gloss Restoration",
    description: "Multi-stage rotary and dual-action compounding to eliminate swirl marks, spider webbing, and deep buffer trails.",
    features: ["Swirl & Scratches Removed", "Orange Peel Reduction", "Clear Coat Density Preserved"],
    ctaText: "Inquire Correction",
    link: "/car-detailing.html",
  },
  {
    id: "car-wrapping",
    title: "Car Wrapping",
    badge: "Custom Styling",
    description: "Premium vinyl wraps and accent styling offering total color transformation with paint protection underneath.",
    features: ["Cast Vinyl Films", "Seamless Panel Tucking", "Completely Reversible"],
    ctaText: "Inquire Wrap Specs",
    link: "/ppf.html",
  },
  {
    id: "interior-exterior-cleaning",
    title: "Interior & Exterior Cleaning",
    badge: "Deep Reconditioning",
    description: "Complete studio sanitization featuring 3M GermKleen fabric extraction, leather conditioning, and underbody decontamination.",
    features: ["3M GermKleen Sanitization", "Leather & Vinyl Conditioning", "Underchassis Flush"],
    ctaText: "Book Deep Clean",
    link: "/additional-services.html",
  },
  {
    id: "foam-wash",
    title: "Foam Wash & Decontamination",
    badge: "Maintenance Care",
    description: "Touchless pH-neutral pre-soak snow foam followed by twin-bucket wash and blow dry to prevent wash-induced swirls.",
    features: ["pH-Neutral Snow Foam", "Iron & Tar Decontamination", "Streak-Free Hydrophobic Finish"],
    ctaText: "Book Wash",
    link: "/additional-services.html",
  },
];
