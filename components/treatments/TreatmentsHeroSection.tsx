'use client'

import Link from 'next/link'
import { cldUrl } from '@/lib/cloudinary'

export default function TreatmentsHeroSection() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('${cldUrl("hero/treatments-page-hero")}')` }}
      />
      
      {/* Premium Dark/Blue Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-[#0F4C81]/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
          Complete dental care,<br />
          crafted by <span className="text-[#F26522]">specialists</span>.
        </h1>
        <p className="text-xl text-blue-50 max-w-3xl leading-relaxed drop-shadow-md font-medium">
          Explore our full range of treatments — from orthodontics and implants to cosmetic dentistry and kids&apos; care. Every procedure is delivered with painless precision.
        </p>
      </div>
    </section>
  )
}
