import dotenv from "dotenv";
import path from "path";

// Force load .env.local and .env from project root if IMAGEKIT_PRIVATE_KEY is not set in process.env
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
  dotenv.config({ path: path.resolve(process.cwd(), ".env") });
}

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY || "private_CnclEjw7uWM8APF7h19bXNV0cfw=";
const IMAGEKIT_URL_ENDPOINT = (process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/3mgallery").replace(/\/$/, "");

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Call ImageKit API v1 files list endpoint without restrictive path filter, limit=1000 to fetch all files
    const authHeader = `Basic ${Buffer.from(`${IMAGEKIT_PRIVATE_KEY}:`).toString("base64")}`;
    const url = `https://api.imagekit.io/v1/files?limit=1000`;

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

    // Filter out videos, ensure all valid images are returned
    const validImages = rawItems.filter((file: any) => {
      const isVideo = file.fileType === "video" || (file.filePath && (file.filePath.endsWith(".mp4") || file.filePath.endsWith(".webm")));
      return !isVideo;
    });

    const items = validImages.map((file: any) => {
      const fileName = file.name || file.filePath?.split("/").pop() || "media";
      const filePathClean = file.filePath ? file.filePath.replace(/^\/+/, "") : `3mgallery/${fileName}`;
      const secureUrl = file.url || `${IMAGEKIT_URL_ENDPOINT}/${filePathClean}`;

      return {
        id: file.fileId || file.name,
        name: fileName.replace(/\.[^/.]+$/, ""),
        title: "3M Studio Precision Craft",
        category: "Precision Craft",
        src: secureUrl,
        url: secureUrl,
        type: "image",
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
