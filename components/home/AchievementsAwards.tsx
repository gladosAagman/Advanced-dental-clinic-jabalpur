'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { cldUrl } from '@/lib/cloudinary';

const IMAGES = [
  "awards/digital-orthodontics-award",
  "awards/porcelain-veneers-award",
  "awards/oral-lesion-award",
];

export default function AchievementsAwards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${cldUrl('hero/achievements-section-hero')}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Achievements & Awards
          </h2>
          {/* Custom divider with line and circle */}
          <div className="flex items-center justify-center gap-4 mt-6 max-w-xs mx-auto">
            <div className="h-0.5 bg-white/40 flex-1"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-white/60 bg-white"></div>
            <div className="h-0.5 bg-white/40 flex-1"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center px-4 md:px-12 max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 p-3 rounded-full bg-white/10 hover:bg-[#F26522] text-white border border-white/20 transition-all duration-300 z-20 focus:outline-none"
            aria-label="Previous achievement"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Certificates Row */}
          <div className="w-full overflow-hidden py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
              {IMAGES.map((img, idx) => {
                // Show the active one on mobile, active + next on tablet, and all on desktop
                const isVisibleOnMobile = idx === currentIndex;
                const isVisibleOnTablet = idx === currentIndex || idx === (currentIndex + 1) % IMAGES.length;

                return (
                  <div 
                    key={idx}
                    className={`bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 ${
                      isVisibleOnMobile ? 'block' : 'hidden sm:block'
                    } ${
                      isVisibleOnTablet ? 'sm:block' : 'sm:hidden md:block'
                    }`}
                  >
                    <div className="relative aspect-3/4 w-full bg-white rounded-xl overflow-hidden shadow-inner p-1">
                      <CldImage
                        src={img}
                        alt={`Advanced Dental Clinic Jabalpur award certificate ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 p-3 rounded-full bg-white/10 hover:bg-[#F26522] text-white border border-white/20 transition-all duration-300 z-20 focus:outline-none"
            aria-label="Next achievement"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}


