import { Navbar } from '@/components/layout/Navbar'
import { TopContactBar } from '@/components/layout/TopContactBar'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/shared/PageHero'
import { CTA } from '@/components/home/CTA'
import { BeforeAfterGallery } from '@/components/home/BeforeAfterGallery'
import { Testimonials } from '@/components/home/Testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Treatment Results | Great Lakes Dental Clinic',
  description: 'View real patient smile transformations and before-after results from our dental treatments including braces, Invisalign, and cosmetic dentistry.',
}

const galleryCategories = [
  'Dental Braces',
  'Invisalign',
  'Smile Designing',
  'Cosmetic Dentistry',
  'Dental Veneers',
  'Dental Crowns',
  'Composite Fillings',
  'Full Smile Makeovers',
]

export default function TreatmentResultsPage() {
  return (
    <main>
      <TopContactBar />
      <Navbar />
      
      <PageHero 
        title="Treatment Results"
        subtitle="Orthodontic and cosmetic dental treatment can significantly improve both oral health and smile aesthetics. View real patient transformations to see what we can achieve for you."
        pageName="Treatment Results"
        cta={[
          { label: 'Book Consultation', href: '/contact' },
          { label: 'View Gallery', href: '#gallery' },
          { label: 'Call Now', href: 'tel:+919294777707' },
        ]}
      />

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Patient Smile Transformations</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The clinic showcases real patient transformations to demonstrate clinical expertise and help future patients understand the results that can be achieved through personalized treatment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our before-and-after treatment photographs provide confidence in the clinic's knowledge, experience, and ability to deliver predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Categories Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Treatment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center"
              >
                <p className="font-semibold text-gray-900">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Showcase Results Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Showcase Treatment Results?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Build Trust', desc: 'Real patient cases demonstrate expertise' },
              { title: 'Documented Results', desc: 'Verified treatments with proven outcomes' },
              { title: 'See Possibilities', desc: 'Understand what can be achieved' },
              { title: 'Gain Confidence', desc: 'Before booking treatment' },
              { title: 'Compare Options', desc: 'Different treatment possibilities' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
