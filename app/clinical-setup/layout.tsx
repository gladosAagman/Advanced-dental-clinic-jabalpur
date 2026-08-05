import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clinical Setup & Technology',
  description: 'State-of-the-art infrastructure at Advanced Dental Clinic Jabalpur — digital OPG & CBCT, laser dentistry, autoclave sterilization, and ISO-certified hygiene protocols.',
  alternates: { canonical: '/clinical-setup' },
}

export default function ClinicalSetupLayout({ children }: { children: React.ReactNode }) {
  return children
}
