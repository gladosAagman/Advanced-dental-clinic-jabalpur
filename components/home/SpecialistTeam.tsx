'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { specialists } from '@/lib/data/specialists'

export function SpecialistTeam() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Specialist Team
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive dental care delivered by specialized experts in their respective fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist, idx) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72 bg-gray-300">
                <Image
                  src={specialist.image}
                  alt={specialist.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {specialist.specialty}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {specialist.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{specialist.title}</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {specialist.description}
                </p>

                <button className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
