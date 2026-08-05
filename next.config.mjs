/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Cloudinary is the only image source in this project now; letting
    // Next's image pipeline run (instead of `unoptimized: true`) is what
    // makes next-cloudinary's CldImage actually emit f_auto,q_auto and a
    // responsive srcset -- without this, every image was being served
    // full-resolution and unoptimized, which is what made scrolling feel
    // heavy in production.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default nextConfig
