import React, { useRef, useState, useEffect } from "react";
import { BUSINESS } from "../../data/business";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/Icons";
import { Lightbox } from "../common/Lightbox";

export interface GalleryMediaItem {
  id: string;
  name?: string;
  type: "video" | "image";
  url: string;
  previewUrl?: string;
  src?: string;
  poster?: string;
  title: string;
  category: string;
  aspect?: string;
  aspectRatio?: string;
}

export const staticGalleryData: GalleryMediaItem[] = [
  {
    "id": "6acd1524ead997d09a007c15",
    "name": "IMG-20260921-WA0045",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0045.jpg?updatedAt=1791825188573",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0045.jpg?updatedAt=1791825188573",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c25",
    "name": "IMG-20260921-WA0053",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0053.jpg?updatedAt=1791825188589",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0053.jpg?updatedAt=1791825188589",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c30",
    "name": "IMG-20260921-WA0047",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0047.jpg?updatedAt=1791825188635",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0047.jpg?updatedAt=1791825188635",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c36",
    "name": "IMG-20260921-WA0062",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0062.jpg?updatedAt=1791825188647",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0062.jpg?updatedAt=1791825188647",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c39",
    "name": "IMG-20260921-WA0059",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0059.jpg?updatedAt=1791825188611",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0059.jpg?updatedAt=1791825188611",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c54",
    "name": "IMG-20260921-WA0063",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0063.jpg?updatedAt=1791825188633",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0063.jpg?updatedAt=1791825188633",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c5a",
    "name": "IMG-20260921-WA0044",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0044.jpg?updatedAt=1791825188691",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0044.jpg?updatedAt=1791825188691",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c62",
    "name": "IMG-20260921-WA0052",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0052.jpg?updatedAt=1791825188693",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0052.jpg?updatedAt=1791825188693",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c66",
    "name": "IMG-20260921-WA0054",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0054.jpg?updatedAt=1791825188770",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0054.jpg?updatedAt=1791825188770",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c6a",
    "name": "IMG-20260921-WA0043",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0043.jpg?updatedAt=1791825188705",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0043.jpg?updatedAt=1791825188705",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c6f",
    "name": "IMG-20260921-WA0055",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0055.jpg?updatedAt=1791825188778",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0055.jpg?updatedAt=1791825188778",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c73",
    "name": "IMG-20260921-WA0057",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0057.jpg?updatedAt=1791825188774",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0057.jpg?updatedAt=1791825188774",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007c7e",
    "name": "IMG-20260921-WA0048",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0048.jpg?updatedAt=1791825188785",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0048.jpg?updatedAt=1791825188785",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007ca5",
    "name": "IMG-20260921-WA0042",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0042.jpg?updatedAt=1791825188765",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0042.jpg?updatedAt=1791825188765",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cac",
    "name": "IMG-20260921-WA0051",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0051.jpg?updatedAt=1791825188711",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0051.jpg?updatedAt=1791825188711",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cad",
    "name": "IMG-20260921-WA0061",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0061.jpg?updatedAt=1791825188743",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0061.jpg?updatedAt=1791825188743",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cbf",
    "name": "IMG-20260921-WA0058",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0058.jpg?updatedAt=1791825188749",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0058.jpg?updatedAt=1791825188749",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cd4",
    "name": "IMG-20260921-WA0056",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0056.jpg?updatedAt=1791825188793",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0056.jpg?updatedAt=1791825188793",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007ce2",
    "name": "IMG-20260921-WA0064",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0064.jpg?updatedAt=1791825188802",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0064.jpg?updatedAt=1791825188802",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cea",
    "name": "IMG-20260921-WA0050",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0050.jpg?updatedAt=1791825188791",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0050.jpg?updatedAt=1791825188791",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cef",
    "name": "IMG-20260921-WA0049",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0049.jpg?updatedAt=1791825188855",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0049.jpg?updatedAt=1791825188855",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007cfc",
    "name": "IMG-20260921-WA0046",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0046.jpg?updatedAt=1791825188824",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0046.jpg?updatedAt=1791825188824",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007d16",
    "name": "IMG-20260921-WA0060",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0060.jpg?updatedAt=1791825188865",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0060.jpg?updatedAt=1791825188865",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1524ead997d09a007e3f",
    "name": "IMG-20260921-WA0065",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0065.jpg?updatedAt=1791825189110",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG-20260921-WA0065.jpg?updatedAt=1791825189110",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008119",
    "name": "ceramic_coating",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/ceramic_coating.jpg?updatedAt=1791825189796",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/ceramic_coating.jpg?updatedAt=1791825189796",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00813c",
    "name": "Videoshot_20260917_175050",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175050.jpg?updatedAt=1791825189785",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175050.jpg?updatedAt=1791825189785",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008145",
    "name": "Videoshot_20260917_175223",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175223.jpg?updatedAt=1791825189785",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175223.jpg?updatedAt=1791825189785",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008149",
    "name": "graphene_coating",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/graphene_coating.jpg?updatedAt=1791825189792",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/graphene_coating.jpg?updatedAt=1791825189792",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00815d",
    "name": "Videoshot_20260917_175215",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175215.jpg?updatedAt=1791825189820",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175215.jpg?updatedAt=1791825189820",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a0081a6",
    "name": "Videoshot_20260917_175213",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175213.jpg?updatedAt=1791825189895",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175213.jpg?updatedAt=1791825189895",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a0081d9",
    "name": "Videoshot_20260917_175216",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175216.jpg?updatedAt=1791825189964",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175216.jpg?updatedAt=1791825189964",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a0081f2",
    "name": "Videoshot_20260917_175052",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175052.jpg?updatedAt=1791825189980",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175052.jpg?updatedAt=1791825189980",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008219",
    "name": "Videoshot_20260925_183627",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183627.jpg?updatedAt=1791825190062",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183627.jpg?updatedAt=1791825190062",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008245",
    "name": "Videoshot_20260917_175220",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175220.jpg?updatedAt=1791825190094",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175220.jpg?updatedAt=1791825190094",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00825c",
    "name": "Videoshot_20260917_175046",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175046.jpg?updatedAt=1791825190156",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175046.jpg?updatedAt=1791825190156",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00828e",
    "name": "Videoshot_20260917_162819",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162819.jpg?updatedAt=1791825190216",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162819.jpg?updatedAt=1791825190216",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008291",
    "name": "Videoshot_20260917_175042",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175042.jpg?updatedAt=1791825190226",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_175042.jpg?updatedAt=1791825190226",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a0082c0",
    "name": "Videoshot_20260925_183501",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183501.jpg?updatedAt=1791825190281",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183501.jpg?updatedAt=1791825190281",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a0082c2",
    "name": "Videoshot_20260925_183651",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183651.jpg?updatedAt=1791825190295",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183651.jpg?updatedAt=1791825190295",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008304",
    "name": "Videoshot_20260925_183639",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183639.jpg?updatedAt=1791825190348",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183639.jpg?updatedAt=1791825190348",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008316",
    "name": "Videoshot_20260925_183630",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183630.jpg?updatedAt=1791825190334",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260925_183630.jpg?updatedAt=1791825190334",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008328",
    "name": "sunfilm1",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm1.jpg?updatedAt=1791825190344",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm1.jpg?updatedAt=1791825190344",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00835a",
    "name": "sunfilm3",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm3.jpg?updatedAt=1791825190418",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/sunfilm3.jpg?updatedAt=1791825190418",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00836a",
    "name": "Videoshot_20260917_162728",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162728.jpg?updatedAt=1791825190394",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162728.jpg?updatedAt=1791825190394",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a008387",
    "name": "Videoshot_20260917_162730",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162730.jpg?updatedAt=1791825190487",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162730.jpg?updatedAt=1791825190487",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1525ead997d09a00838c",
    "name": "Videoshot_20260917_162739",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162739.jpg?updatedAt=1791825190480",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/Videoshot_20260917_162739.jpg?updatedAt=1791825190480",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1526ead997d09a0083f6",
    "name": "IMG_20260731_231723_659.JPG",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3mgallery/IMG_20260731_231723_659.JPG.jpg?updatedAt=1791825190614",
    "src": "https://ik.imagekit.io/3mgallery/3mgallery/IMG_20260731_231723_659.JPG.jpg?updatedAt=1791825190614",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1554ead997d09a0128c6",
    "name": "3M_Teflon_Polish",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3M_Teflon_Polish.jpg?updatedAt=1791825236358",
    "src": "https://ik.imagekit.io/3mgallery/3M_Teflon_Polish.jpg?updatedAt=1791825236358",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1554ead997d09a0128fa",
    "name": "3M_IM70",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3M_IM70.jpg?updatedAt=1791825236414",
    "src": "https://ik.imagekit.io/3mgallery/3M_IM70.jpg?updatedAt=1791825236414",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1554ead997d09a012984",
    "name": "antirust",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/antirust.jpg?updatedAt=1791825236563",
    "src": "https://ik.imagekit.io/3mgallery/antirust.jpg?updatedAt=1791825236563",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd1554ead997d09a0129ad",
    "name": "before",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/before.jpg?updatedAt=1791825236634",
    "src": "https://ik.imagekit.io/3mgallery/before.jpg?updatedAt=1791825236634",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd159dead997d09a0226b4",
    "name": "Germkleen",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/Germkleen.webp?updatedAt=1791825309708",
    "src": "https://ik.imagekit.io/3mgallery/Germkleen.webp?updatedAt=1791825309708",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd159dead997d09a02271d",
    "name": "underbody",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/underbody.jpg?updatedAt=1791825309768",
    "src": "https://ik.imagekit.io/3mgallery/underbody.jpg?updatedAt=1791825309768",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd159dead997d09a0227b2",
    "name": "after",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/after.jpg?updatedAt=1791825310006",
    "src": "https://ik.imagekit.io/3mgallery/after.jpg?updatedAt=1791825310006",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd159dead997d09a0227dd",
    "name": "3M_CR70",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3M_CR70.jpg?updatedAt=1791825310055",
    "src": "https://ik.imagekit.io/3mgallery/3M_CR70.jpg?updatedAt=1791825310055",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  },
  {
    "id": "6acd159dead997d09a02282b",
    "name": "3M_XP70",
    "type": "image",
    "url": "https://ik.imagekit.io/3mgallery/3M_XP70.jpg?updatedAt=1791825310204",
    "src": "https://ik.imagekit.io/3mgallery/3M_XP70.jpg?updatedAt=1791825310204",
    "aspect": "16/9",
    "title": "3M Studio Precision Craft",
    "category": "Precision Craft"
  }
];

export const galleryData = staticGalleryData;

export const StudioMarqueeGallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<GalleryMediaItem[]>(staticGalleryData);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(null);

  // Fetch dynamic gallery items count & list from serverless API endpoint
  useEffect(() => {
    let isMounted = true;
    const fetchGalleryMedia = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (response.ok) {
          const data = await response.json();
          if (isMounted && data.success && Array.isArray(data.items) && data.items.length > 0) {
            const getCleanUrlKey = (urlStr?: string) =>
              (urlStr || "").split("?")[0].replace(/\/+$/, "").toLowerCase();

            const staticKeys = new Set(
              staticGalleryData.map((sItem) => getCleanUrlKey(sItem.url || sItem.src))
            );

            const uniqueFetched = data.items.filter((cItem: any) => {
              const cKey = getCleanUrlKey(cItem.url || cItem.src);
              if (!cKey || staticKeys.has(cKey)) return false;
              staticKeys.add(cKey);
              return true;
            });

            setItems([...staticGalleryData, ...uniqueFetched]);
          }
        }
      } catch (err) {
        console.warn("Could not fetch ImageKit dynamic gallery, using local default fallback.", err);
      }
    };

    fetchGalleryMedia();
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-scrolling marquee effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    const scrollStep = () => {
      if (!isHovered && !isDragging && !selectedMedia && track) {
        track.scrollLeft += 4;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, selectedMedia, items]);

  // Safe body scroll lock cleanup on modal state change / unmount
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (item: GalleryMediaItem) => {
    setSelectedMedia(item);
  };

  // Filter out any video items so only valid photo/image cards are displayed without blank black boxes
  const validImageItems = items.filter((item) => item.type !== "video" && (item.url || item.src));

  // Duplicate items for continuous auto-scrolling loop
  const displayItems = validImageItems.length > 0 ? [...validImageItems, ...validImageItems] : [];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative w-full border-b border-neutral-900 bg-transparent py-12 md:py-16 overflow-hidden select-none"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col justify-between border-b border-neutral-900 pb-5 md:flex-row md:items-end gap-3">
          <div>
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase block mb-1 font-mono">
              STUDIO WORK SHOWCASE
            </span>
            <h2
              id="gallery-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-wide uppercase leading-tight"
            >
              <span className="text-3m-red">3M</span>
              <span>OMR GALLERY</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-1 font-sans">
              Drag horizontally to explore • Click card to preview high-resolution studio execution
            </p>
          </div>

          {/* Header Action Link to Dedicated Full Showcase Page */}
          <div className="shrink-0">
            <a
              href="/gallery.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/40 bg-red-500/10 hover:bg-red-600 hover:text-white text-red-400 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:scale-105 active:scale-95"
            >
              <span>VIEW FULL GALLERY ({validImageItems.length || "ALL"}) ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Continuous Auto-Scrolling Marquee Track */}
      <div
        className="relative w-full overflow-hidden group/marquee"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          id="gallery-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none px-6 md:px-12 py-4"
        >
          {displayItems.map((item, index) => {
            const itemUrl = item.url || item.src || "";
            const optimizedUrl =
              itemUrl.includes("/upload/") && !itemUrl.includes("/w_800")
                ? itemUrl.replace("/upload/", "/upload/w_800,c_limit,f_auto,q_auto/")
                : itemUrl;

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleCardClick(item)}
                className="gallery-card w-[300px] sm:w-[380px] md:w-[440px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative cursor-pointer group shadow-2xl transition-all duration-500 hover:border-red-600/60 hover:scale-[1.02]"
              >
                <img
                  src={optimizedUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Instagram Button */}
      <div className="mt-8 flex justify-center px-4">
        <a
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105"
        >
          <InstagramIcon className="w-4 h-4 text-white" />
          <span>VIEW GALLERY ON INSTAGRAM</span>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* UNIFIED ENHANCED LIGHTBOX MODAL */}
      <Lightbox
        items={validImageItems}
        currentIndex={
          selectedMedia
            ? validImageItems.findIndex(
                (item) =>
                  item.id === selectedMedia.id ||
                  (item.url || item.src) === (selectedMedia.url || selectedMedia.src)
              )
            : null
        }
        onClose={() => setSelectedMedia(null)}
        onNavigate={(newIdx) => setSelectedMedia(validImageItems[newIdx])}
      />
    </section>
  );
};

export default StudioMarqueeGallery;
