'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import TrustBadgesMarquee from '@/components/home/TrustBadgesMarquee'
import HeroSection from '@/components/home/HeroSection'
import { HeroWithDoctor } from '@/components/home/HeroWithDoctor'
import AchievementsAwards from '@/components/home/AchievementsAwards'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import ModernTechnology from '@/components/home/ModernTechnology'
import PatientStories from '@/components/home/PatientStories'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'
import { TREATMENTS } from '@/lib/data/site'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Badges Marquee */}
        <TrustBadgesMarquee />

        {/* Meet Your Dentist Section */}
        <HeroWithDoctor />

        {/* Achievements & Awards Section */}
        <AchievementsAwards />

        {/* Our Treatments Section */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="max-w-350 mx-auto px-6">
            {/* Section header */}
            <div className="mb-16 text-center">
              <div className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4 shadow-sm">
                <span className="text-[#F26522] mr-2">✦</span> OUR TREATMENTS
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 tracking-tight">
                Complete Dental Care Under<br />
                One Roof
              </h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
                From routine check-ups to complex full-mouth rehabilitation — our specialists deliver world-class dentistry tailored to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TREATMENTS.map((treatment) => (
                <div key={treatment.id} className="group bg-white rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Image Section (16:9 Ratio) */}
                  <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                    {treatment.image && (
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">{treatment.name}</h3>
                    <p className="text-text-secondary text-base leading-relaxed mb-6 flex-1">{treatment.shortDesc}</p>
                    <Link href={`/treatments/${treatment.id}`} className="text-[#F26522] font-semibold text-lg hover:underline flex items-center gap-2 mt-auto">
                      Learn more <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Technology Section */}
        <ModernTechnology />

        {/* Why Choose Us - 6 Feature Cards */}
        <WhyChooseUs />

        {/* Patient Stories / Testimonials */}
        <PatientStories />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
