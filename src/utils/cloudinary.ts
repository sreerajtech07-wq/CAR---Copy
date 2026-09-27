import { getImageKitUrl, getImageKitPosterUrl, IMAGEKIT_ENDPOINT } from "./imagekit";

export const CLOUDINARY_CLOUD_NAME = "wpk3ggvcqw";

export interface CloudinaryOptions {
  width?: number;
  format?: string;
  quality?: string;
  crop?: string;
}

/**
 * Legacy wrapper forwarding calls to ImageKit endpoint.
 */
export const getCloudinaryUrl = (
  publicId: string,
  options: CloudinaryOptions = {}
): string => {
  return getImageKitUrl(publicId, options);
};

export const getCloudinaryPosterUrl = (
  urlOrPublicId: string,
  options: { width?: number } = {}
): string => {
  return getImageKitPosterUrl(urlOrPublicId, options);
};

export { IMAGEKIT_ENDPOINT };
