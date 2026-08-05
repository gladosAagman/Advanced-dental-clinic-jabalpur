'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface TreatmentHeroProps {
  title: string
  subtitle: string
  description?: string
}

export function TreatmentHero({ title, subtitle, description }: TreatmentHeroProps) {
  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-white via-blue-50 to-teal-50 pt-32 pb-20 flex items-center">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-4 py-2 rounded-full inline-block mb-4">
            Treatment Details
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:-translate-y-1 transition-transform hover:shadow-lg">
              <span>Book Consultation</span>
              <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Free Assessmente
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
