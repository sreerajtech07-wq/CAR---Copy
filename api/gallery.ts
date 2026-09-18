import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";

// Force load .env.local and .env from project root if CLOUDINARY_API_KEY is not set in process.env
if (!process.env.CLOUDINARY_API_KEY) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
  dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "ljrerns0",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.error("Cloudinary credentials missing in process.env!");
      return res.status(200).json({
        success: false,
        error: "Missing credentials",
        items: [],
      });
    }

    // Search both images and videos from Gallery folder
    const results = await cloudinary.search
      .expression("folder:Gallery/* OR folder:Gallery")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const items = (results.resources || []).map((resource: any) => {
      const isVideo = resource.resource_type === "video";
      const publicId = resource.public_id;
      const fileName = resource.filename || publicId.split("/").pop() || publicId;
      const cleanTitle = fileName
        .replace(/[-_]/g, " ")
        .replace(/\.[^/.]+$/, "")
        .replace(/\b\w/g, (l: string) => l.toUpperCase());

      // Apply lightweight transformation for image previews: w_800,c_limit,f_auto,q_auto
      let secureUrl = resource.secure_url;
      if (!isVideo && secureUrl.includes("/upload/")) {
        secureUrl = secureUrl.replace("/upload/", "/upload/w_800,c_limit,f_auto,q_auto/");
      }

      let posterUrl = "";
      if (isVideo && secureUrl.includes("/upload/")) {
        posterUrl = secureUrl.replace("/upload/", "/upload/so_0,f_jpg,q_auto,w_800/").replace(/\.[^/.]+$/, ".jpg");
      }

      return {
        id: resource.asset_id || resource.public_id,
        public_id: resource.public_id,
        name: cleanTitle,
        title: cleanTitle || "3M Car Care Execution",
        category: isVideo ? "Studio Execution" : "Precision Craft",
        src: secureUrl,
        url: secureUrl,
        poster: posterUrl,
        type: resource.resource_type, // 'image' or 'video'
        format: resource.format,
        width: resource.width,
        height: resource.height,
        aspect: "16/9",
      };
    });

    return res.status(200).json({ success: true, count: items.length, items });
  } catch (error: any) {
    console.error("Cloudinary fetch error:", error);
    return res.status(500).json({ success: false, error: error.message, items: [] });
  }
}
