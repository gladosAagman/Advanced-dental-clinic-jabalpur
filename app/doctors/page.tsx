'use client'

import { cldUrl } from '@/lib/cloudinary'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { DOCTORS, CLINIC } from '@/lib/data/site'
import Link from 'next/link'
import { Award, GraduationCap } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

export default function DoctorsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Meet Our Expert Doctors"
        subtitle="Highly qualified specialists with international training and experience"
        bgImage={cldUrl("hero/doctors-page-hero")}
        bgPosition="bg-[center_35%]"
        bgSize="bg-cover scale-[1.15]"
        contentClassName="translate-y-16 md:translate-y-20"
      />

      <main className="bg-white">
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {DOCTORS.map((doctor) => (
                <div key={doctor.id} className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition">
                  <div className="h-[350px] md:h-[450px] w-full relative bg-gray-100 overflow-hidden rounded-t-2xl">
                    <CldImage
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover drop-shadow-sm ${(doctor as any).imagePosition || 'object-center'}`}
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-2">{doctor.name}</h3>
                    <p className="text-[#F26522] font-bold mb-4">{doctor.title}</p>
                    <p className="text-[#475569] mb-6">{doctor.bio}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                          <GraduationCap size={20} /> Qualifications
                        </h4>
                        <ul className="space-y-1">
                          {doctor.qualifications.map((qual, idx) => (
                            <li key={idx} className="text-[#475569] text-sm">• {qual}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                          <Award size={20} /> Certifications
                        </h4>
                        <ul className="space-y-1">
                          {doctor.certifications.map((cert, idx) => (
                            <li key={idx} className="text-[#475569] text-sm">• {cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2 text-sm">
                      <span className="bg-[#E2E8F0] text-[#0F4C81] px-3 py-1 rounded-full font-semibold">
                        {doctor.experience}
                      </span>
                      <span className="bg-[#FFF4E6] text-[#F26522] px-3 py-1 rounded-full font-semibold">
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 md:py-32 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Book Your Appointment Today</h2>
            <p className="text-lg text-[#475569] mb-8">Get expert dental care from our experienced specialists</p>
            <Link href="/contact" className="inline-block bg-[#F26522] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#E55A1A] transition">
              Schedule Your Visit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
