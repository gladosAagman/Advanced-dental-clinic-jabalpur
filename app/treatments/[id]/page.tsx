
'use client'

import { use } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { TREATMENTS } from '@/lib/data/site'
import Link from 'next/link'
import TreatmentHeroSection from '@/components/treatments/TreatmentHeroSection'
import TreatmentAboutSection from '@/components/treatments/TreatmentAboutSection'
import TreatmentProcessSection from '@/components/treatments/TreatmentProcessSection'
import TreatmentFAQSection from '@/components/treatments/TreatmentFAQSection'
import BookingConsultationBox from '@/components/treatments/BookingConsultationBox'
import TreatmentDetailCTA from '@/components/treatments/TreatmentDetailCTA'

export default function TreatmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const treatment = TREATMENTS.find(t => t.id === id)

  if (!treatment) {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="py-20 text-center">
          <p className="text-xl text-[#475569]">This treatment page could not be found.</p>
          <Link href="/treatments" className="text-[#F26522] font-bold mt-4 inline-block">
            Back to Treatments
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* Hero Section WITH Dynamic Background Image */}
        <TreatmentHeroSection 
          name={treatment.name} 
          description={treatment.fullDesc} 
          bgImage={treatment.bgImage} 
        />

        {/* Main Content - Niche ka section bilkul same rahega */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Content Image intact rahegi */}
                <TreatmentAboutSection
                  icon={treatment.icon}
                  name={treatment.name}
                  fullDesc={treatment.fullDesc}
                  services={treatment.services}
                  image={treatment.image}
                />
                <TreatmentProcessSection />
                <TreatmentFAQSection treatmentName={treatment.name} />
              </div>

              <div className="lg:col-span-1">
                <BookingConsultationBox treatmentName={treatment.name} />
              </div>
            </div>
          </div>
        </section>

        <TreatmentDetailCTA />
      </main>

      <Footer />
    </>
  )
}