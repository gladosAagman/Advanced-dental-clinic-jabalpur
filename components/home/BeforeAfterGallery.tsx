'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { beforeAfterResults } from '@/lib/data/beforeAfter'

export function BeforeAfterGallery() {
  const [selectedCase, setSelectedCase] = useState(0)

  const currentCase = beforeAfterResults[selectedCase]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformation Results
          </h2>
          <p className="text-xl text-gray-600">
            See the remarkable transformations achieved by our expert team. Each case represents a patient&apos;s journey to their dream smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Display */}
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <div className="flex gap-4">
                {/* Before */}
                <div className="flex-1">
                  <div className="bg-gray-200 h-80 relative">
                    <Image
                      src={currentCase.before}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center py-3 font-semibold text-gray-600">Before</p>
                </div>

                {/* After */}
                <div className="flex-1">
                  <div className="bg-gray-200 h-80 relative">
                    <Image
                      src={currentCase.after}
                      alt="After treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center py-3 font-semibold text-gray-600">After</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {currentCase.title}
              </h3>
              <p className="text-gray-600 mb-4">{currentCase.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Treatment</p>
                  <p className="text-lg font-bold text-blue-600">{currentCase.treatment}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Duration</p>
                  <p className="text-lg font-bold text-blue-600">{currentCase.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Selection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse Cases</h3>
            <div className="space-y-3">
              {beforeAfterResults.map((caseItem, idx) => (
                <motion.button
                  key={caseItem.id}
                  onClick={() => setSelectedCase(idx)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedCase === idx
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <p className="font-semibold text-gray-900">{caseItem.title}</p>
                  <p className="text-sm text-gray-600">{caseItem.treatment} • {caseItem.duration}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
