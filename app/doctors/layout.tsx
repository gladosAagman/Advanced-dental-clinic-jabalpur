import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet the specialist dental surgeons at Advanced Dental Clinic Jabalpur — orthodontics, implantology, cosmetic and restorative dentistry, backed by international training.',
  alternates: { canonical: '/doctors' },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
