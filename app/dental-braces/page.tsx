import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { Metadata } from 'next'
import { cldUrl } from '@/lib/cloudinary'
import { treatmentServices } from '@/lib/data/treatmentServices'
import { CheckCircle2, Clock, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dental Braces',
  description: 'Professional dental braces treatment including metal, ceramic, and self-ligating options. Expert orthodontist Dr. Akhilesh Mulchandani.',
  alternates: { canonical: '/dental-braces' },
}

export default function DentalBracesPage() {
  const service = treatmentServices.dentalBraces

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              ORTHODONTIC EXCELLENCE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Smile with Dental Braces
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Schedule Consultation</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cldUrl("gallery/orthodontic-transformation-case")}
              alt="Dental braces treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Benefits of Dental Braces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <CheckCircle2 size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Braces */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Types of Braces Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.types.map((type, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> {type.duration}</p>
                  <p className="text-sm text-gray-700"><strong>Cost:</strong> {type.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Treatment Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Aftercare & Maintenance</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.aftercare}</p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
