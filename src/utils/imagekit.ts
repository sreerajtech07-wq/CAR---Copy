/**
 * ImageKit Configuration & URL Utilities
 * Base endpoint configured via VITE_IMAGEKIT_URL_ENDPOINT or fallback to official URL.
 */

const RAW_ENDPOINT =
  (import.meta.env?.VITE_IMAGEKIT_URL_ENDPOINT as string | undefined) ||
  "https://ik.imagekit.io/3mgallery";

// Ensure clean endpoint string without trailing slash
export const IMAGEKIT_ENDPOINT = RAW_ENDPOINT.replace(/\/+$/, "");

export interface ImageKitOptions {
  width?: number;
  quality?: number | string;
  format?: string;
}

/**
 * Constructs an ImageKit URL, appending relative paths cleanly without duplicate slashes.
 */
export const getImageKitUrl = (
  pathOrFilename: string,
  options: ImageKitOptions = {}
): string => {
  if (!pathOrFilename) return "";

  // If path already starts with the active endpoint, return or format it
  let cleanPath = pathOrFilename;
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    if (!cleanPath.includes("ik.imagekit.io")) {
      return cleanPath;
    }
    // If it's an old ImageKit endpoint, rewrite domain to the current endpoint
    cleanPath = cleanPath.replace(/^https?:\/\/ik\.imagekit\.io\/[^/]+/, IMAGEKIT_ENDPOINT);
  } else {
    // Relative path: remove leading slashes and join
    cleanPath = `${IMAGEKIT_ENDPOINT}/${cleanPath.replace(/^\/+/, "")}`;
  }

  // Extract base URL and any existing query params
  const [basePart, queryPart] = cleanPath.split("?");

  const { width, quality = "auto" } = options;
  const params: string[] = [];
  if (width) params.push(`w-${width}`);
  if (quality && quality !== "auto") params.push(`q-${quality}`);

  if (params.length === 0) {
    return queryPart ? `${basePart}?${queryPart}` : basePart;
  }

  const trParam = `tr=${params.join(",")}`;
  const fullQuery = queryPart ? `${queryPart}&${trParam}` : trParam;
  return `${basePart}?${fullQuery}`;
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
  filename = filename.replace(/\.[^/.]+$/, ".jpg");
  return getImageKitUrl(filename, options);
};

export default getImageKitUrl;
