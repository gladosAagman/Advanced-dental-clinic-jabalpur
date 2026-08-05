'use client'

import Link from 'next/link'
import { CLINIC } from '@/lib/data/site'

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">
          Ready for a <span className="text-[#F26522]">confident, painless smile</span>?
        </h2>
        <p className="text-lg text-[#475569] mb-8">
          Book a personalized consultation with Dr. Mulchandani&apos;s team and discover what modern dentistry can do for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#F26522] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E55A1A] transition"
          >
            Book Free Consultation
          </Link>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="border-2 border-[#0F4C81] text-[#0F4C81] px-8 py-4 rounded-lg font-bold hover:bg-[#F8FAFC] transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
