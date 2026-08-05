import { Navbar } from '@/components/layout/Navbar'
import { TopContactBar } from '@/components/layout/TopContactBar'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/shared/PageHero'
import { CTA } from '@/components/home/CTA'
import { Testimonials } from '@/components/home/Testimonials'
import { Metadata } from 'next'
import { treatmentOptionsContent } from '@/lib/data/pageContent'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Treatment Options | Great Lakes Dental Clinic',
  description: 'Explore comprehensive dental treatments including orthodontics, implants, cosmetic dentistry, and more at Great Lakes Dental Clinic.',
}

export default function TreatmentOptionsPage() {
  const departmentRoutes: Record<string, string> = {
    ORTHODONTICS: '/dental-braces',
    PROSTHODONTICS: '/dental-implants',
    'COSMETIC DENTISTRY': '/cosmetic-dentistry',
    INVISALIGN: '/invisalign',
  }

  return (
    <main>
      <TopContactBar />
      <Navbar />
      
      <PageHero 
        title={treatmentOptionsContent.title}
        subtitle={treatmentOptionsContent.intro}
        pageName="Treatment Options"
        cta={[
          { label: 'Book Appointment', href: '/contact' },
          { label: 'Call Now', href: 'tel:+919294777707' },
        ]}
      />

      {/* Departments Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Dental Specialties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentOptionsContent.departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                
                {(dept.treatments || dept.procedures || dept.services) && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Available Treatments:</p>
                    <ul className="space-y-2">
                      {(dept.treatments || dept.procedures || dept.services)?.slice(0, 5).map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-teal-600">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {dept.benefits && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Benefits:</p>
                    <ul className="space-y-2">
                      {dept.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-amber-600">+</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {departmentRoutes[dept.name] && (
                  <Link href={departmentRoutes[dept.name]}>
                    <Button className="btn-secondary w-full">Learn More</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
