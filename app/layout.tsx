import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton'
import { cldUrl } from '@/lib/cloudinary'
import { CLINIC } from '@/lib/data/site'

const SITE_URL = 'https://www.advanceddentaljabalpur.com'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const OG_IMAGE = cldUrl('home/hero-doctor-photo', 'f_auto,q_auto,w_1200,h_630,c_fill')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital - Best Dental Clinic in Jabalpur",
    template: '%s | Advanced Dental Clinic Jabalpur',
  },
  description: 'Expert dental care in Jabalpur with state-of-the-art technology. Specializing in orthodontics, implants, cosmetic dentistry, and more. 20+ years of excellence.',
  keywords: 'dental clinic Jabalpur, best dentist Jabalpur, orthodontist, dental braces, Invisalign, dental implants, cosmetic dentistry',
  authors: [{ name: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital" }],
  creator: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital",
  publisher: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital",
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: cldUrl('branding/advanced-dental-clinic-logo'),
    apple: cldUrl('branding/advanced-dental-clinic-logo'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital",
    description: 'World-class dental care with advanced technology and compassionate treatment. ISO certified. Serving Jabalpur for 15+ years.',
    siteName: 'Advanced Dental Clinic Jabalpur',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Advanced Dental Clinic Jabalpur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital",
    description: 'World-class dental care with advanced technology and compassionate treatment in Jabalpur.',
    images: [OG_IMAGE],
  },
}

// Dentist / LocalBusiness structured data -- this is the single highest-leverage
// signal for both classic local-SEO (Google Maps/local pack) and answer-engine
// (ChatGPT/Perplexity/AI Overviews) results: it gives crawlers a machine-readable
// NAP (name/address/phone), hours, and rating without them needing to parse prose.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC.name,
  alternateName: CLINIC.shortName,
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: CLINIC.phoneRaw,
  email: CLINIC.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.address,
    addressLocality: 'Jabalpur',
    addressRegion: 'Madhya Pradesh',
    postalCode: '482005',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 10:00-20:30',
  sameAs: [CLINIC.social.instagram, CLINIC.social.facebook, CLINIC.social.youtube],
  // Deliberately no aggregateRating here: schema.org requires a real
  // reviewCount/ratingCount alongside ratingValue, and there's no verified
  // figure in the site data to use -- fabricating one would be misleading
  // structured data (and risks a Google Search Console manual action).
  priceRange: '₹₹',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0F4C81',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
