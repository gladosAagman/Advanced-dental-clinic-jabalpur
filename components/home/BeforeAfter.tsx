'use client'

import { motion } from 'framer-motion'
import { beforeAfterCases } from '@/lib/data/testimonials'

export function BeforeAfter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-4 py-2 rounded-full inline-block mb-4">
            Treatment Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Transformation
          </h2>
          <p className="text-gray-600 text-lg">
            Real smile transformations from our patients showcase the power of modern dental treatment.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {beforeAfterCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden aspect-square relative group-hover:shadow-xl transition-shadow">
                {/* Before/After placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-4xl mb-3">😁</div>
                  <p className="font-semibold text-gray-700 mb-2">{caseItem.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{caseItem.treatment}</p>
                  <p className="text-xs text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                    {caseItem.duration}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Cases
          </button>
        </motion.div>
      </div>
    </section>
  )
}
