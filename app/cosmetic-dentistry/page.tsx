import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { Metadata } from 'next'
import Image from 'next/image'
import { treatmentServices } from '@/lib/data/treatmentServices'
import { Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Great Lakes Dental Clinic',
  description: 'Transform your smile with professional cosmetic dentistry. Teeth whitening, veneers, smile design, and more.',
}

export default function CosmeticDentistryPage() {
  const service = treatmentServices.cosmeticDentistry

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-32 pb-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
              SMILE TRANSFORMATION
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Dream Smile Awaits
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Book Smile Consultation</button>
              <button className="btn-secondary">View Gallery</button>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cosmetic.png"
              alt="Cosmetic dentistry smile transformation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Treatments Offered */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Cosmetic Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.treatments.map((treatment, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{treatment.name}</h3>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm font-semibold text-amber-900"><strong>Benefits:</strong> {treatment.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Your Transformation Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-amber-600" />
              Maintain Your Beautiful Smile
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.aftercare}</p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
