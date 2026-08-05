'use client'

import { DOCTORS } from '@/lib/data/site'
import DoctorCard from './DoctorCard'

export default function DoctorTeamSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F5FF] text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold mb-4">
            👥 OUR TEAM
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A]">
            Meet Our Specialists
          </h2>
        </div>

        {/* Updated grid for responsive layout (3 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DOCTORS.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={String(doctor.id)}
              name={doctor.name}
              title={doctor.title}
              qualifications={doctor.qualifications}
              image={doctor.image}
              imagePosition={doctor.imagePosition} // <<-- YES! Is line se Photo cut honi band ho jayegi
            />
          ))}
        </div>
      </div>
    </section>
  )
}
