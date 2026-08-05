'use client'

import { CldImage } from 'next-cloudinary';

export default function MissionVisionValuesSection() {
  const cards = [
    {
      image: 'team/clinic-team-photo-02',
      title: 'Our Mission',
      desc: 'To deliver world-class dental care that is painless, ethical and affordable for every patient that walks through our doors.'
    },
    {
      image: 'team/clinic-team-photo-01',
      title: 'Our Vision',
      desc: 'To be central India\'s most trusted dental hospital — a benchmark for clinical excellence and patient experience.'
    },
    {
      image: 'team/clinic-team-photo-03',
      title: 'Our Values',
      desc: 'Integrity, compassion, precision and a relentless commitment to continuous learning and patient comfort.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-56 relative bg-gray-100">
                <CldImage
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
                <p className="text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
