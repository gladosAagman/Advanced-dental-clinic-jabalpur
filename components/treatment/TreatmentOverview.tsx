'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface OverviewItem {
  title: string
  items: string[]
}

interface TreatmentOverviewProps {
  sections: OverviewItem[]
}

export function TreatmentOverview({ sections }: TreatmentOverviewProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
