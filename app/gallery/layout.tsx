import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treatment Gallery & Results',
  description: 'Browse real treatment results and clinic photos from Advanced Dental Clinic Jabalpur — orthodontics, implants, cosmetic dentistry, and whitening cases.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
