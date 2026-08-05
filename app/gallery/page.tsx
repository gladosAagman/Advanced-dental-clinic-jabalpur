'use client'

import { cldUrl } from '@/lib/cloudinary'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

// Explicit Type Definition to avoid TS errors
interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  fit?: 'contain' | 'cover';
}

const MASONRY_ITEMS = [
  { id: 1, src: 'gallery/clinic-gallery-01' },
  { id: 2, src: 'gallery/clinic-gallery-02' },
  { id: 3, src: 'gallery/clinic-gallery-03' },
  { id: 4, src: 'gallery/clinic-gallery-04' },
  { id: 5, src: 'gallery/clinic-gallery-05' },
  { id: 6, src: 'gallery/clinic-gallery-06' },
  { id: 7, src: 'gallery/clinic-gallery-07' },
  { id: 8, src: 'gallery/clinic-gallery-08' },
  { id: 9, src: 'gallery/clinic-gallery-09' },
  { id: 10, src: 'gallery/clinic-gallery-10' },
  { id: 11, src: 'gallery/clinic-gallery-11' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openModal, setOpenModal] = useState<null | typeof MASONRY_ITEMS[number]>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, category: 'braces', title: 'Orthodontic Transformation', image: 'gallery/orthodontic-transformation-case' },
    { id: 2, category: 'implants', title: 'Dental Implant Case', image: 'gallery/dental-implant-case' },
    { id: 3, category: 'cosmetic', title: 'Smile Makeover', image: 'gallery/smile-makeover-case' },
    { id: 4, category: 'braces', title: 'Complex Case Resolution', image: 'gallery/complex-case-resolution' },
    { id: 5, category: 'whitening', title: 'Professional Whitening', image: 'gallery/professional-teeth-whitening' },
    { id: 6, category: 'implants', title: 'Full Mouth Implants', image: 'gallery/full-mouth-implants' },
  ];

  const categories = ['all', 'braces', 'implants', 'cosmetic', 'whitening'];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Treatment Results & Gallery"
        subtitle="See the transformations we've created for our patients"
        breadcrumb={[{ label: 'Gallery' }]}
        bgImage={cldUrl("hero/gallery-page-hero")} 
      />

      <main>
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-16 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold capitalize transition ${
                    selectedCategory === cat
                      ? 'bg-[#F26522] text-white'
                      : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {cat === 'all' ? 'All Results' : cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition flex flex-col">
                  <div className="aspect-square bg-[#F8FAFC] relative overflow-hidden flex items-center justify-center p-2">
                    {item.image ? (
                      <CldImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`rounded-lg ${
                          item.fit === 'contain' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-2">📸</div>
                          <p className="text-white text-sm">Before & After</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-sm text-[#F26522] font-bold mb-2 capitalize">{item.category}</p>
                      <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                      <p className="text-[#475569] text-sm mt-2">Professional treatment with exceptional results</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LAYOUT Heading & Masonry Grid Design */}
            <div className="mt-28">
              <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-10 tracking-wide uppercase">
                LAYOUT
              </h2>

              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {MASONRY_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setOpenModal(item)}
                    className="group relative w-full overflow-hidden rounded-[1.4rem] bg-[#F8FAFC] border border-[#E2E8F0] break-inside-avoid block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cldUrl(item.src)}
                      loading="lazy"
                      alt="Advanced Dental Clinic Jabalpur gallery photo"
                      className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-[#0F4C81]/0 transition-colors duration-500 group-hover:bg-[#0F4C81]/20 pointer-events-none" />
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Ready for Your Transformation?</h3>
              <p className="text-[#475569] mb-8 max-w-2xl mx-auto">
                Join thousands of happy patients who have transformed their smiles with us
              </p>
              <a href="/contact" className="inline-block bg-[#F26522] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#E55A1A] transition">
                Book Your Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for LAYOUT Design */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setOpenModal(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              src={cldUrl(openModal.src)}
              alt="Advanced Dental Clinic Jabalpur gallery photo enlarged"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] rounded-[1.5rem] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}