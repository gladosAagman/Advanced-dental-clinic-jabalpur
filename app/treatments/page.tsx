'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import TreatmentsHeroSection from '@/components/treatments/TreatmentsHeroSection'
import TreatmentsHeaderSection from '@/components/treatments/TreatmentsHeaderSection'
import TreatmentsGridSection from '@/components/treatments/TreatmentsGridSection'
import FeaturedTreatmentsSection from '@/components/treatments/FeaturedTreatmentsSection'
import FinalCTASection from '@/components/shared/FinalCTASection'

export default function TreatmentsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <TreatmentsHeroSection />
        <TreatmentsHeaderSection />
        <TreatmentsGridSection />
        <FeaturedTreatmentsSection />
        <FinalCTASection />
      </main>

      <Footer />
    </>
  )
}
