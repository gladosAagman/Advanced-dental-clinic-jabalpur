// Shared helper for images served from Cloudinary.
// Prefer the <CldImage /> component (next-cloudinary) wherever a React
// image element is being rendered. Use `cldUrl()` only where a plain URL
// string is required (CSS `background-image: url(...)`, meta tags, etc).

// Cloud name is not a secret (it's baked into every public delivery URL),
// so falling back to the known value keeps builds from hard-crashing if the
// env var is ever missing on a deploy target — this should never actually
// be hit once NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set correctly.
const FALLBACK_CLOUD_NAME = 'v5db08gy'

const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME

if (!CLOUD_NAME) {
  console.warn(
    '[cloudinary] NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set — falling back to ' +
      `"${FALLBACK_CLOUD_NAME}". Set it in your deploy environment to avoid relying on this fallback.`
  )
}

export function cldUrl(publicId: string, transformation = 'f_auto,q_auto') {
  return `https://res.cloudinary.com/${CLOUD_NAME || FALLBACK_CLOUD_NAME}/image/upload/${transformation}/${publicId}`
}
