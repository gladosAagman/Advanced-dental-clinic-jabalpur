'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data/site'

interface BookingConsultationBoxProps {
  treatmentName: string
}

export default function BookingConsultationBox({ treatmentName }: BookingConsultationBoxProps) {
  return (
    <div className="sticky top-24 bg-[#0F4C81] text-white rounded-2xl p-[1.625rem]">
      <h3 className="text-xl md:text-2xl font-black mb-3">Book a Consultation</h3>
      <p className="text-sm md:text-base text-white/90 mb-5">
        Speak to a specialist about your {treatmentName} needs.
      </p>

      <Link href="/contact" className="block bg-[#F26522] text-white px-5 py-2.5 rounded-lg font-bold text-center text-sm hover:bg-[#E55A1A] transition mb-3">
        Book Appointment
      </Link>

      <p className="text-center text-xs md:text-sm text-white/80 mb-1.5">Or call us</p>
      <a href={`tel:${CLINIC.phoneRaw}`} className="block text-center text-[#F26522] font-bold text-lg md:text-xl mb-5">
        {CLINIC.phone}
      </a>

      {/* Duration */}
      <div className="border-t border-white/20 pt-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">⏱️</span>
          <div>
            <p className="font-bold text-sm md:text-base mb-1">Duration</p>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Most {treatmentName} procedures are completed in 1-3 visits depending on complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="border-t border-white/20 mt-4 pt-4">
        <p className="font-bold text-sm md:text-base mb-3 flex items-center gap-2">
          <span>❤️</span> Why Choose Us
        </p>
        <ul className="space-y-2.5 text-xs md:text-sm">
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>15+ years of specialist expertise</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>ISO-certified sterilization</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FFB88C]">✓</span>
            <span>Transparent pricing & EMI</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
