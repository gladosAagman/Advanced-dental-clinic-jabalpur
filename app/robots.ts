import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.advanceddentaljabalpur.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicit allow for AI/answer-engine crawlers (AEO): nothing on this
      // site needs to be hidden from them, and several block-by-default in
      // some configs -- being explicit avoids that.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
