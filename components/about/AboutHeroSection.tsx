'use client'

import Link from 'next/link'
import { cldUrl } from '@/lib/cloudinary'

export default function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('${cldUrl("adc/hero/about-page-hero")}')` }}
      />
      
      {/* Premium Dark/Blue Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-[#0F4C81]/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
          A premier dental hospital,<br />
          built around <span className="text-[#F26522]">your comfort</span>.
        </h1>
        <p className="text-xl text-blue-50 max-w-2xl leading-relaxed drop-shadow-md font-medium">
          Dr. Mulchandani&apos;s Advanced Ranjhi Dental Hospital is Jabalpur&apos;s destination for painless, modern and ethical dentistry — serving thousands of families since 2009.
        </p>
      </div>
    </section>
  )
}
