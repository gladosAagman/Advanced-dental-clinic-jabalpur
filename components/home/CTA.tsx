'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready for Your Perfect Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Schedule your free consultation with Dr. Akhilesh Mulchandani today and take the first step towards a confident, beautiful smile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
            >
              <span>Book Appointment</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </motion.button>
          </div>

          <p className="text-blue-100 mt-8 text-sm">
            Free consultation • No hidden charges • Transparent pricing
          </p>
        </motion.div>
      </div>
    </section>
  )
}
