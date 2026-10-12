export interface BeforeAfterItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly beforeImage: string;
  readonly afterImage: string;
  readonly beforeAlt: string;
  readonly afterAlt: string;
  readonly status: string;
}

import { getImageKitUrl } from "../utils/imagekit";

// Representative studio reference imagery. Replace with approved paired customer imagery when available.
export const BEFORE_AFTER_ITEMS: readonly BeforeAfterItem[] = [
  {
    id: "surface-restoration-reference",
    title: "Surface restoration, made visible",
    description:
      "Compare the character of an active detailing process with a protected, presentation-ready finish.",
    beforeImage: getImageKitUrl("before.jpg"),
    afterImage: getImageKitUrl("after.jpg"),
    beforeAlt: "Automotive detailing process reference",
    afterAlt: "Gloss-finished automotive surface reference",
    status: "STUDIO REFERENCE / NOT A CUSTOMER CLAIM",
  },
];
