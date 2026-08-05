'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const treatments = [
  {
    id: 'dental-braces',
    title: 'Dental Braces',
    description: 'Professional braces treatment with metal, ceramic, and self-ligating options. Perfect alignment and beautiful smile in 18-24 months.',
    icon: '🦷',
    link: '/dental-braces',
    color: 'from-blue-500 to-blue-600',
    image: '/images/orthodontics.png',
  },
  {
    id: 'invisalign',
    title: 'Invisalign Clear Aligners',
    description: 'Gold Invisalign Provider. Invisible teeth straightening with custom-made clear aligners. Comfortable and discreet orthodontics.',
    icon: '✨',
    link: '/invisalign',
    color: 'from-teal-500 to-teal-600',
    image: '/images/invisalign.png',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with professional whitening, veneers, bonding, and smile design. Digital smile makeover planning available.',
    icon: '✨',
    link: '/cosmetic-dentistry',
    color: 'from-amber-500 to-amber-600',
    image: '/images/cosmetic.png',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with 95%+ success rate. Restore missing teeth with natural-looking, fully functional implants.',
    icon: '🦷',
    link: '/dental-implants',
    color: 'from-emerald-500 to-emerald-600',
    image: '/images/implants.png',
  },
]

export function TreatmentOverviewSection() {
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
            Our Comprehensive Treatments
          </h2>
          <p className="text-xl text-gray-600">
            Specialized dental solutions for every smile. From orthodontics to cosmetic enhancements, we have the expertise for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={treatment.link}>
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-56 bg-gray-300 overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${treatment.color} text-white flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                      {treatment.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {treatment.description}
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
