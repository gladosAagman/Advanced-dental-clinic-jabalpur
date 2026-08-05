'use client'

import Link from 'next/link'
import Image from 'next/image'

interface FeaturedTreatmentCardProps {
  id: string
  icon: string
  name: string
  shortDesc: string
  image?: string
}

export default function FeaturedTreatmentCard({
  id,
  icon,
  name,
  shortDesc,
  image
}: FeaturedTreatmentCardProps) {
  return (
    <div
      className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
      onClick={() => (window.location.href = `/treatments/${id}`)}
    >
      {/* Image or Icon placeholder */}
      <div className="h-48 bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform"
          />
        ) : (
          <span className="text-6xl group-hover:scale-110 transition-transform">{icon}</span>
        )}
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-[#0F172A] mb-2">{name}</h4>
        <p className="text-[#475569] text-sm mb-4">{shortDesc}</p>
        <Link
          href={`/treatments/${id}`}
          className="text-[#F26522] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn more <span>→</span>
        </Link>
      </div>
    </div>
  )
}
