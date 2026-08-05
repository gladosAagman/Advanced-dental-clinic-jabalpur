'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { clinicInfo } from '@/lib/data/clinic'

export function ContactInfoSection() {
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Multiple ways to connect with us. Call, email, or visit our clinic at your convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <motion.a
            href={`tel:${clinicInfo.phone}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Phone size={24} className="text-blue-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold mb-2">Main Phone</p>
            <p className="text-xl font-bold text-gray-900">{clinicInfo.phone}</p>
            <p className="text-xs text-gray-500 mt-2">Available all hours</p>
          </motion.a>

          {/* Alternative Phone */}
          <motion.a
            href={`tel:${clinicInfo.phoneAlt}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
              <Phone size={24} className="text-teal-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold mb-2">Alternative</p>
            <p className="text-xl font-bold text-gray-900">{clinicInfo.phoneAlt}</p>
            <p className="text-xs text-gray-500 mt-2">WhatsApp available</p>
          </motion.a>

          {/* Address */}
          <motion.a
            href="https://maps.google.com/?q=27+Janak+Road+Kalighat+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-amber-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold mb-2">Address</p>
            <p className="text-lg font-bold text-gray-900">27, Janak Road</p>
            <p className="text-xs text-gray-500 mt-2">Kalighat, Kolkata</p>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Clock size={24} className="text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold mb-2">Hours</p>
            <p className="text-sm font-bold text-gray-900">{clinicInfo.hours.weekday}</p>
            <p className="text-xs text-gray-500 mt-2">Mon-Fri</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
