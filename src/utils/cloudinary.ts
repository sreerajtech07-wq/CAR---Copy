export const CLOUDINARY_CLOUD_NAME = "ljrerns0";

export interface CloudinaryOptions {
  width?: number;
  format?: string;
  quality?: string;
  crop?: string;
}

export const getCloudinaryUrl = (
  publicId: string,
  options: CloudinaryOptions = {}
): string => {
  if (!publicId) return "";
  const { width = 1200, format = "auto", quality = "auto" } = options;
  
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    if (publicId.includes("cloudinary.com") && publicId.includes("/upload/")) {
      return publicId.replace(
        "/upload/",
        `/upload/f_${format},q_${quality},w_${width}/`
      );
    }
    return publicId;
  }

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_${format},q_${quality},w_${width}/${publicId}`;
};

export const getCloudinaryPosterUrl = (
  urlOrPublicId: string,
  options: { width?: number } = {}
): string => {
  if (!urlOrPublicId) return "";
  const { width = 800 } = options;

  if (urlOrPublicId.startsWith("http://") || urlOrPublicId.startsWith("https://")) {
    if (urlOrPublicId.includes("/upload/")) {
      return urlOrPublicId
        .replace("/upload/", `/upload/so_0,f_jpg,q_auto,w_${width}/`)
        .replace(/\.[^/.]+$/, ".jpg");
    }
    return urlOrPublicId;
  }

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/so_0,f_jpg,q_auto,w_${width}/${urlOrPublicId}.jpg`;
};
