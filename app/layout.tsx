import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton'

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

export const metadata: Metadata = {
  title: 'Dr. Mulchandani\'s Advanced Ranjhi Dental Hospital - Best Dental Clinic in Jabalpur',
  description: 'Expert dental care in Jabalpur with state-of-the-art technology. Specializing in orthodontics, implants, cosmetic dentistry, and more. 20+ years of excellence.',
  keywords: 'dental clinic Jabalpur, best dentist Jabalpur, orthodontist, dental braces, Invisalign, dental implants, cosmetic dentistry',
  authors: [{ name: 'Dr. Mulchandani\'s Advanced Ranjhi Dental Hospital' }],
  creator: 'Dr. Mulchandani\'s Advanced Ranjhi Dental Hospital',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drmulchandanidental.com',
    title: 'Dr. Mulchandani\'s Advanced Ranjhi Dental Hospital',
    description: 'World-class dental care with advanced technology and compassionate treatment. ISO certified.',
    siteName: 'Dr. Mulchandani\'s Advanced Ranjhi Dental Hospital',
  },
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
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
