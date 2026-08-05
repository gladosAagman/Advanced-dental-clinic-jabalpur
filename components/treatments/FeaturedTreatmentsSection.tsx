'use client'

import { TREATMENTS } from '@/lib/data/site'
import FeaturedTreatmentCard from './FeaturedTreatmentCard'

export default function FeaturedTreatmentsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-12">Featured Treatments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TREATMENTS.slice(0, 3).map((treatment) => (
            <FeaturedTreatmentCard
              key={treatment.id}
              id={treatment.id}
              icon={treatment.icon}
              name={treatment.name}
              shortDesc={treatment.shortDesc}
              image={treatment.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
