import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Treatments',
    // Re-declared here (not just inherited from the root layout) because
    // Next.js only propagates a title template to descendant segments
    // through an unbroken chain -- /treatments/[id] needs this to still
    // get the " | Advanced Dental Clinic Jabalpur" suffix.
    template: '%s | Advanced Dental Clinic Jabalpur',
  },
  description: 'Explore all dental treatments at Advanced Dental Clinic Jabalpur — orthodontics, dental implants, cosmetic dentistry, periodontics, restorative and preventive care.',
  alternates: { canonical: '/treatments' },
}

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
