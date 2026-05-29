export const MEDIA_BASE_URL =
  "https://kpd4wnxlkwyaiu8p.public.blob.vercel-storage.com";

export const USE_CDN = true;

export const mediaUrl = (path) => {
  if (!USE_CDN || !path) return path;

  const normalizedPath = path.replace(/^\/+/, "");
  return `${MEDIA_BASE_URL}/${normalizedPath}`;
};
