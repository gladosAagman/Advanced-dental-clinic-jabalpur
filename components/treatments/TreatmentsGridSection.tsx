'use client'

import { TREATMENTS } from '@/lib/data/site'
import TreatmentCard from './TreatmentCard'

export default function TreatmentsGridSection() {
  return (
    <section className="py-20 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 text-center">
          A complete dental <span className="text-[#F26522]">ecosystem</span>
        </h2>
        <p className="text-center text-[#475569] mb-16 max-w-2xl mx-auto">
          All your dental needs, addressed by specialist experts using cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard
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
