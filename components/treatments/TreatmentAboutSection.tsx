'use client'

import Image from 'next/image'

interface Service {
  name: string
  desc: string
}

interface TreatmentAboutSectionProps {
  icon: string
  name: string
  fullDesc: string
  services: Service[]
  image?: string
}

export default function TreatmentAboutSection({
  icon,
  name,
  fullDesc,
  services,
  image
}: TreatmentAboutSectionProps) {
  return (
    <div>
      {/* Image */}
      <div className="h-96 md:h-[500px] bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] rounded-3xl flex items-center justify-center overflow-hidden mb-12 relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-9xl">{icon}</span>
        )}
      </div>

      {/* About Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-[#0F172A] mb-6">About {name}</h2>
        <p className="text-lg text-[#475569] leading-relaxed mb-6">
          {fullDesc}
        </p>
        <p className="text-lg text-[#475569] leading-relaxed">
          Whether it&apos;s a routine procedure or a complex case, every treatment plan is custom-designed based on a thorough diagnostic evaluation, your goals, and your lifestyle.
        </p>
      </div>

      {/* Features with checkmarks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.slice(0, 4).map((service, idx) => (
          <div key={idx} className="flex gap-3">
            <span className="text-[#F26522] text-xl flex-shrink-0">✓</span>
            <div>
              <p className="font-bold text-[#0F172A]">{service.name}</p>
              <p className="text-sm text-[#475569]">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
