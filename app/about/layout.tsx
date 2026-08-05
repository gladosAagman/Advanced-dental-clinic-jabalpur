import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital has served Jabalpur for 15+ years with painless, modern, ethical dentistry. Meet our team, mission, and clinic story.",
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
