import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { Metadata } from 'next'
import { cldUrl } from '@/lib/cloudinary'
import { treatmentServices } from '@/lib/data/treatmentServices'
import { CheckCircle2, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Invisalign Clear Aligners',
  description: 'Invisible teeth straightening with Invisalign clear aligners. Gold Invisalign Provider. Schedule consultation with Dr. Akhilesh Mulchandani.',
  alternates: { canonical: '/invisalign' },
}

export default function InvisalignPage() {
  const service = treatmentServices.invisalign

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-32 pb-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              GOLD INVISALIGN PROVIDER
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Invisalign: Your Invisible Path to a Perfect Smile
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Start Your Journey</button>
              <button className="btn-secondary">View Results</button>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cldUrl("gallery/smile-makeover-case")}
              alt="Invisalign clear aligners"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Choose Invisalign
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <Sparkles size={28} className="text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitability */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Is Invisalign Right for You?</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">{service.suitability}</p>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            How Invisalign Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 text-white font-bold text-lg">
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

      {/* Timeline & Aftercare */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Treatment Duration</h3>
            <p className="text-lg text-teal-600 font-semibold mb-4">{service.duration}</p>
            <p className="text-gray-600">Results depend on the complexity of your case and compliance with wearing aligners 20-22 hours daily.</p>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Aftercare</h3>
            <p className="text-gray-600 leading-relaxed">{service.aftercare}</p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
