import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { Metadata } from 'next'
import { cldUrl } from '@/lib/cloudinary'
import { treatmentServices } from '@/lib/data/treatmentServices'
import { CheckCircle2, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Implants',
  description: 'Premium dental implants for missing teeth replacement. Expert implant dentistry with 95%+ success rate.',
  alternates: { canonical: '/dental-implants' },
}

export default function DentalImplantsPage() {
  const service = treatmentServices.dentalImplants

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              PERMANENT SOLUTION
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Restore Your Smile with Dental Implants
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Schedule Assessment</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cldUrl("services/dental-implants-treatment")}
              alt="Dental implants restoration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Choose Dental Implants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <Award size={28} className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Implants */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Implant Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.types.map((type, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            The Implant Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 text-white font-bold text-lg">
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

      {/* Timeline & Success Rate */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-emerald-600 mb-2">{service.duration}</h3>
            <p className="text-gray-600 font-semibold">Complete Treatment Timeline</p>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-emerald-600 mb-2">95%+</h3>
            <p className="text-gray-600 font-semibold">Success Rate</p>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-emerald-600 mb-2">20+ Years</h3>
            <p className="text-gray-600 font-semibold">Implant Longevity</p>
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-emerald-50 rounded-2xl p-12 border-2 border-emerald-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Implant Care</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.aftercare}</p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
