export const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/wpk3ggvcqw/Gallerycar/";

export interface ImageKitOptions {
  width?: number;
  quality?: number | string;
  format?: string;
}

/**
 * Constructs an ImageKit URL pointing to the Gallerycar folder endpoint.
 */
export const getImageKitUrl = (
  pathOrFilename: string,
  options: ImageKitOptions = {}
): string => {
  if (!pathOrFilename) return "";

  if (pathOrFilename.startsWith(IMAGEKIT_ENDPOINT)) {
    return pathOrFilename;
  }

  let filename = pathOrFilename;
  if (filename.includes("/")) {
    filename = filename.split("/").pop() || filename;
  }
  filename = filename.split("?")[0];

  const { width, quality = "auto" } = options;
  const params: string[] = [];
  if (width) params.push(`w-${width}`);
  if (quality && quality !== "auto") params.push(`q-${quality}`);

  const trParam = params.length > 0 ? `?tr=${params.join(",")}` : "";

  return `${IMAGEKIT_ENDPOINT}${filename}${trParam}`;
};

/**
 * Constructs an ImageKit poster frame URL for video items.
 */
export const getImageKitPosterUrl = (
  filenameOrUrl: string,
  options: { width?: number } = {}
): string => {
  if (!filenameOrUrl) return "";
  let filename = filenameOrUrl;
  if (filename.includes("/")) {
    filename = filename.split("/").pop() || filename;
  }
  filename = filename.replace(/\.[^/.]+$/, ".jpg");
  return getImageKitUrl(filename, options);
};
