'use client'

import { CLINIC } from '@/lib/data/site'
import { Phone, Star, Shield, Users } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background gradient mesh matching reference */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-[#FFD8C7] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#C6D8FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:pr-12">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#0F4C81] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F4C81]">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              WELCOME TO DR. MULCHANDANI'S
            </div>

            {/* Main heading */}
            <h1 className="text-[8vw] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-black text-[#0F172A] leading-[1.05] tracking-tight whitespace-nowrap">
              Painless Dental Care<br />
              for a <span className="text-[#0F4C81] relative inline-block">
                Healthier Smile
                <svg className="absolute w-full h-3 sm:h-4 -bottom-1 sm:-bottom-2 left-0 text-[#F26522]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheading - Adjusted width and text size to prevent 4 lines */}
            <p className="text-[#475569] text-base md:text-lg leading-relaxed max-w-[90%] md:max-w-xl">
              Jabalpur's premium multispecialty dental hospital led by <span className="font-bold text-[#0F172A]">Dr. Mulchandani</span>. Modern technology, gentle hands and 15+ years of trusted expertise — all under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-[#0F4C81] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A3560] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                Book Appointment <span className="text-lg leading-none">›</span>
              </button>
              <button className="border border-[#CBD5E1] text-[#0F4C81] px-6 py-3 rounded-lg font-semibold hover:bg-[#F8FAFC] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base bg-white shadow-sm">
                <Phone size={18} className="text-[#0F4C81]" />
                Call {CLINIC.phone}
              </button>
              <button className="text-[#0F4C81] px-4 py-3 font-semibold hover:text-[#0A3560] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0C5.46 0 0.149 5.31 0.149 11.85C0.149 13.935 0.69 15.96 1.74 17.685L0 24L6.45 22.305C8.07 23.25 9.975 23.7 12 23.7C18.54 23.7 23.85 18.39 23.85 11.85C23.85 8.61 22.695 5.61 20.52 3.449Z" fill="#25D366"/>
                  <path d="M18.42 15.225C18.09 14.73 17.43 14.43 16.44 13.935C15.45 13.44 10.59 11.04 9.69 10.74C8.79 10.44 8.13 10.29 7.47 11.28C6.81 12.27 4.95 14.43 4.38 15.12C3.81 15.81 3.24 15.9 2.25 15.405C1.26 14.91 -1.41 13.56 -3.06 12.09C-4.38 10.92 -5.25 9.57 -5.82 8.58C-6.39 7.59 -5.76 7.05 -5.25 6.57C-4.8 6.15 -4.26 5.46 -3.75 4.86C-3.24 4.26 -3.06 3.84 -2.73 3.15C-2.4 2.46 -2.58 1.86 -2.85 1.35C-3.12 0.84 -5.25 -4.41 -6.15 -6.21C-7.02 -7.98 -7.92 -7.68 -8.79 -7.68C-9.54 -7.68 -10.53 -7.68 -11.52 -7.68C-12.51 -7.68 -14.13 -7.32 -15.6 5.85C-17.07 -4.68 -20.07 0.99 -20.07 5.79C-20.07 10.59 -16.92 15.12 -16.44 15.75C-15.96 16.38 -10.59 24.6 -5.25 26.91C-3.99 27.45 -2.94 27.78 -2.1 28.02C-0.81 28.44 0.36 28.38 1.29 28.23C2.34 28.05 4.62 26.85 5.1 25.5C5.58 24.15 5.58 23.01 5.43 22.77C5.28 22.53 4.86 22.38 3.87 21.885" transform="translate(6.75 6.75)" fill="white"/>
                </svg>
                WhatsApp
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-nowrap items-center justify-between gap-4 sm:gap-6 pt-8 max-w-full xl:max-w-3xl">
              <div className="flex flex-col gap-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F4C81] flex items-center">
                  15<span className="text-[#F26522]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#64748B] font-medium whitespace-nowrap">Years of Excellence</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F4C81] flex items-center">
                  50,000<span className="text-[#F26522]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#64748B] font-medium whitespace-nowrap">Happy Patients</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F4C81] flex items-center">
                  25<span className="text-[#F26522]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#64748B] font-medium whitespace-nowrap">Specialist Treatments</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F4C81] flex items-center">
                  4.9<span className="text-[#F26522] ml-0.5 text-xl lg:text-2xl">★</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[#64748B] font-medium whitespace-nowrap">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Badge area */}
          <div className="relative h-[500px] md:h-[650px] w-full mt-12 lg:mt-0 max-w-[650px] ml-auto group" style={{ animation: 'float-badge 8s ease-in-out infinite' }}>
            {/* The actual image mask - rounded corners similar to reference */}
            <div className="absolute inset-y-4 right-4 md:inset-y-8 md:right-8 left-4 md:left-8 bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-700 ease-out cursor-pointer">
              <CldImage
                src="patients/patient-treatment-01"
                alt="Patient receiving dental treatment at Advanced Dental Clinic Jabalpur"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
