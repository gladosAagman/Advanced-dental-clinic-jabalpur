'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { CLINIC } from '@/lib/data/site'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block">
                <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-4 py-2 rounded-full">
                  Welcome to Excellence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smile With
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-md leading-relaxed"
            >
              Experience world-class dentistry with Dr. Akhilesh Mulchandani. Advanced treatments, international standards, and your perfect smile awaits.
            </motion.p>

            {/* Doctor Info */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Mulchandani</p>
                  <p className="text-sm text-gray-600">Dental Specialist</p>
                  <p className="text-xs text-teal-600 mt-1">Internationally Trained • 20+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:-translate-y-1 transition-transform hover:shadow-lg">
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <Phone size={18} />
                <span>Call Now</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">{CLINIC.stats.patients}</p>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{CLINIC.stats.experience}+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">★ {CLINIC.stats.rating}</p>
                <p className="text-sm text-gray-600">Google Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-300 rounded-3xl opacity-20 blur-2xl"></div>

              {/* Main image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/hero-dental.png"
                  alt="Modern dental clinic setup"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg border border-blue-100 max-w-xs"
              >
                <p className="text-sm font-semibold text-gray-900">Gold Invisalign Provider</p>
                <p className="text-xs text-gray-600 mt-1">Official Invisalign certified clinic</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-lg border border-teal-100 max-w-xs"
              >
                <p className="text-sm font-semibold text-gray-900">ISO Certified</p>
                <p className="text-xs text-gray-600 mt-1">International quality standards</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
