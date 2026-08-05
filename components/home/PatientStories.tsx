'use client'

import { useState } from 'react'
import { TESTIMONIALS } from '@/lib/data/site'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function PatientStories() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  return (
    <section className="py-24 md:py-32 bg-surface">
      <style>{`
        .swiper-wrapper {
          display: flex !important;
          align-items: stretch !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
      `}</style>
      <div className="max-w-350 mx-auto px-6">
        {/* Section header and navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-sm border border-border">
              <Star size={14} className="text-primary" /> PATIENT STORIES
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-text-primary leading-[1.1] tracking-tight">
              Loved by 50,000+ smiling<br />
              patients.
            </h2>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => swiperRef?.slidePrev()}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#94A3B8] hover:text-text-primary hover:border-text-primary transition-colors bg-white shadow-sm active:scale-95 cursor-pointer z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => swiperRef?.slideNext()}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#94A3B8] hover:text-text-primary hover:border-text-primary transition-colors bg-white shadow-sm active:scale-95 cursor-pointer z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials slider */}
        <div className="w-full">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <SwiperSlide key={`${testimonial.name}-${idx}`} className="h-auto py-2 flex">
                <div className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col w-full h-full min-h-75 select-none">
                  {/* Large background quote */}
                  <div className="absolute top-6 right-6 text-[#F0F5FF]">
                    <Quote size={80} strokeWidth={0.5} fill="currentColor" />
                  </div>

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} className="text-[#F26522] fill-[#F26522]" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-text-secondary text-base leading-relaxed mb-8 relative z-10">
                    “{testimonial.text}”
                  </p>
                  
                  <div className="mt-auto">
                    {/* Divider */}
                    <div className="h-px bg-[#F1F5F9] mb-6 w-full" />

                    {/* Patient info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-[#1A5C94] text-white flex items-center justify-center font-bold text-lg shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-text-primary">{testimonial.name}</p>
                        <p className="text-sm text-text-light">{testimonial.treatment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
