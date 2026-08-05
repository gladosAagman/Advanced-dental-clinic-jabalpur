import type { MetadataRoute } from 'next'
import { TREATMENTS } from '@/lib/data/site'

const SITE_URL = 'https://www.advanceddentaljabalpur.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/doctors`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/treatments`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/clinical-setup`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/dental-braces`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/invisalign`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/cosmetic-dentistry`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/dental-implants`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/treatment-options`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/treatment-results`, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS.map((treatment) => ({
    url: `${SITE_URL}/treatments/${treatment.id}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...treatmentRoutes]
}
