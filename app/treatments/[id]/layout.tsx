import type { Metadata } from 'next'
import { TREATMENTS } from '@/lib/data/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const treatment = TREATMENTS.find((t) => t.id === id)

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
      robots: { index: false, follow: true },
    }
  }

  return {
    title: treatment.name,
    description: treatment.fullDesc || treatment.shortDesc,
    alternates: { canonical: `/treatments/${treatment.id}` },
    openGraph: {
      title: `${treatment.name} | Advanced Dental Clinic Jabalpur`,
      description: treatment.fullDesc || treatment.shortDesc,
    },
  }
}

export default function TreatmentDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
