/**
 * OFFICIAL VERIFIED SERVICES
 * Strictly reflects Section 02 & 18 & 19 of the specification.
 * No invented specifications, no fake warranties, no fake hardness claims.
 */

export interface ServiceCategory {
  readonly id: string;
  readonly title: string;
  readonly categoryName: string;
  readonly shortDescription: string;
  readonly includedServices: readonly string[];
  readonly image: string;
  readonly tag: string;
}

export const OFFICIAL_SERVICES: readonly ServiceCategory[] = [
  {
    id: "car-detailing",
    title: "Car Detailing",
    categoryName: "CAR DETAILING",
    shortDescription:
      "Comprehensive multi-stage interior and exterior detailing craft designed to restore deep optical clarity, eliminate surface imperfections, and revitalize cabin surfaces.",
    includedServices: [
      "Exterior Car Detailing",
      "Interior Car Detailing",
      "Premium Car Cleaning",
      "Paint Correction",
      "Car Polishing",
      "Car Restoration",
      "Engine Care",
    ],
    image: "/assets/services/detailing.jpg",
    tag: "STUDIO CRAFT",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    categoryName: "CERAMIC COATING",
    shortDescription:
      "Precision liquid polymer bonding with automotive clearcoat to establish a hardened protective shield, dramatic gloss enhancement, and hydrophobic self-cleaning properties.",
    includedServices: [
      "Premium Ceramic Coating",
      "Paint Protection",
      "Gloss Enhancement",
      "Hydrophobic Protection",
      "Long-lasting Surface Protection",
    ],
    image: "/assets/services/ceramic.jpg",
    tag: "OPTICAL GLOSS",
  },
  {
    id: "graphene-coating",
    title: "Graphene Coating",
    categoryName: "GRAPHENE COATING",
    shortDescription:
      "Molecular-engineered graphene formulation offering exceptional surface heat dissipation, contamination resistance, and intense mirror-like surface reflection.",
    includedServices: [
      "Advanced Graphene Coating",
      "Enhanced Paint Protection",
      "High-Gloss Finish",
      "Water & Contamination Resistance",
    ],
    image: "/assets/services/graphene.jpg",
    tag: "ADVANCED MATRIX",
  },
  {
    id: "borophene-coating",
    title: "Borophene Coating",
    categoryName: "BOROPHENE COATING",
    shortDescription:
      "Next-generation automotive surface barrier delivering high-tensile paint protection, enhanced durability against environmental elements, and a flawless premium finish.",
    includedServices: [
      "Advanced Surface Protection",
      "Paint Protection",
      "Enhanced Durability",
      "Premium Finish",
    ],
    image: "/assets/services/borophene.jpg",
    tag: "SURFACE DEFENSE",
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    categoryName: "PAINT PROTECTION FILM (PPF)",
    shortDescription:
      "High-clarity thermoplastic polyurethane film precision-wrapped to safeguard vulnerable strike zones from highway stone chips, road debris, and abrasive scratches.",
    includedServices: [
      "Paint Protection Film Installation",
      "Scratch Protection",
      "Stone-Chip Protection",
      "High-Impact Area Protection",
      "Exterior Paint Preservation",
    ],
    image: "/assets/services/ppf.jpg",
    tag: "PHYSICAL ARMOR",
  },
  {
    id: "sun-film",
    title: "Sun Film",
    categoryName: "SUN FILM",
    shortDescription:
      "Advanced optical solar control window films engineered for high solar heat reduction, UV rejection, glare mitigation, and climate-controlled driving comfort.",
    includedServices: [
      "Automotive Sun Film",
      "Heat Reduction",
      "UV Protection",
      "Glare Reduction",
      "Improved Driving Comfort",
    ],
    image: "/assets/services/sunfilm.jpg",
    tag: "SOLAR CONTROL",
  },
  {
    id: "anti-rust",
    title: "Anti-Rust / Anti-Corrosion Coating",
    categoryName: "ANTI-RUST / ANTI-CORROSION COATING",
    shortDescription:
      "Heavy-duty protective underbody treatment guarding vehicle chassis components and vulnerable steel from coastal saline exposure, moisture, and road contaminants.",
    includedServices: [
      "Anti-Rust Treatment",
      "Underbody Protection",
      "Corrosion Prevention",
      "Long-Term Vehicle Protection",
    ],
    image: "/assets/services/antirust.jpg",
    tag: "CHASSIS DEFENSE",
  },
  {
    id: "additional-services",
    title: "Additional Car Care Services",
    categoryName: "ADDITIONAL CAR CARE SERVICES",
    shortDescription:
      "Specialized automotive maintenance and aesthetic revitalization protocols keeping everyday vehicle touchpoints pristine and mechanically clean.",
    includedServices: [
      "AC Vent Cleaning",
      "Car Wash",
      "Car Polish",
      "Interior Care",
      "Vehicle Restoration",
    ],
    image: "/assets/services/studio.jpg",
    tag: "DETAIL PROTOCOLS",
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
