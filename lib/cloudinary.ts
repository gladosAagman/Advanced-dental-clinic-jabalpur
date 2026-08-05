// Shared helper for images served from Cloudinary.
// Prefer the <CldImage /> component (next-cloudinary) wherever a React
// image element is being rendered. Use `cldUrl()` only where a plain URL
// string is required (CSS `background-image: url(...)`, meta tags, etc).

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export function cldUrl(publicId: string, transformation = 'f_auto,q_auto') {
  if (!CLOUD_NAME) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set')
  }
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformation}/${publicId}`
}
