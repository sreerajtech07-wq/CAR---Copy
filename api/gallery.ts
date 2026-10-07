import dotenv from "dotenv";
import path from "path";

// Force load .env.local and .env from project root if IMAGEKIT_PRIVATE_KEY is not set in process.env
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
  dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY || "";
const IMAGEKIT_URL_ENDPOINT = (process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/wpk3ggvcqw").replace(/\/$/, "");

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Call ImageKit API v1 files list endpoint targeting /Gallerycar/ folder
    const authHeader = `Basic ${Buffer.from(`${IMAGEKIT_PRIVATE_KEY}:`).toString("base64")}`;
    const url = `https://api.imagekit.io/v1/files?path=/Gallerycar/&limit=100`;

    const response = await fetch(url, {
      headers: {
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn("ImageKit API fetch notice:", response.status, errText);
      return res.status(200).json({
        success: false,
        error: `ImageKit API error ${response.status}`,
        items: [],
      });
    }

    const files = await response.json();
    const rawItems = Array.isArray(files) ? files : files.results || [];

    const items = rawItems.map((file: any) => {
      const isVideo = file.fileType === "video" || (file.filePath && file.filePath.endsWith(".mp4"));
      const fileName = file.name || file.filePath?.split("/").pop() || "media";
      
      let cleanTitle = fileName
        .replace(/[-_]/g, " ")
        .replace(/\.[^/.]+$/, "")
        .replace(/\b\w/g, (l: string) => l.toUpperCase());

      // Generate contextual studio titles for generic camera/video shot filenames
      if (/videoshot|img[_-]|dsc[_-]|vid[_-]|\d{6,}/i.test(cleanTitle)) {
        const lower = (cleanTitle + " " + (file.filePath || "")).toLowerCase();
        if (lower.includes("ppf")) cleanTitle = "3M Scotchgard™ PPF Protection";
        else if (lower.includes("ceramic")) cleanTitle = "3M Ceramic Coating Glaze";
        else if (lower.includes("graphene")) cleanTitle = "3M Graphene Paint Shield";
        else if (lower.includes("sunfilm") || lower.includes("tint")) cleanTitle = "3M Crystalline Solar Sunfilm";
        else if (lower.includes("borophene")) cleanTitle = "3M Borophene Nano Defense";
        else if (lower.includes("rust") || lower.includes("underbody")) cleanTitle = "3M Anti-Rust Underbody Defense";
        else if (lower.includes("wash") || lower.includes("detail")) cleanTitle = "3M Precision Paint Correction";
        else cleanTitle = isVideo ? "3M Official Studio Video Execution" : "3M Precision Studio Detailing";
      }

      // Format clean ImageKit URLs for media and posters
      const secureUrl = file.url || `${IMAGEKIT_URL_ENDPOINT}/Gallerycar/${fileName}`;
      const posterUrl = isVideo
        ? `${IMAGEKIT_URL_ENDPOINT}/Gallerycar/${fileName.replace(/\.[^/.]+$/, ".jpg")}`
        : secureUrl;

      return {
        id: file.fileId || file.name,
        name: cleanTitle,
        title: cleanTitle || "3M Car Care Execution",
        category: isVideo ? "Studio Execution" : "Precision Craft",
        src: secureUrl,
        url: secureUrl,
        poster: posterUrl,
        type: isVideo ? "video" : "image",
        width: file.width,
        height: file.height,
        aspect: "16/9",
      };
    });

    return res.status(200).json({ success: true, count: items.length, items });
  } catch (error: any) {
    console.error("ImageKit fetch error:", error);
    return res.status(500).json({ success: false, error: error.message, items: [] });
  }
}
