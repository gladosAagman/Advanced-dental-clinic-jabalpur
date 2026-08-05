'use client'

import { TECHNOLOGIES } from '@/lib/data/site'
import { Zap, Radio, Eye, Cpu, Smartphone, Shield, PenToolIcon, Sparkles } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

// Map the correct icons to match the design precisely
const getTechIcon = (name: string) => {
  if (name.includes('OPG')) return <Radio className="w-6 h-6" />
  if (name.includes('Laser')) return <Zap className="w-6 h-6" />
  if (name.includes('Scanner')) return <Eye className="w-6 h-6" />
  if (name.includes('Rotary')) return <Cpu className="w-6 h-6" />
  if (name.includes('Smile')) return <PenToolIcon className="w-6 h-6" />
  if (name.includes('Sterilization')) return <Shield className="w-6 h-6" />
  return <Sparkles className="w-6 h-6" />
}

export default function ModernTechnology() {
  return (
    <section className="relative py-24 md:py-32 bg-primary">
      <div className="relative max-w-350 mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
            MODERN TECHNOLOGY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Digital Dentistry, Precision<br />
            Outcomes
          </h2>
          <p className="text-blue-100/90 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We invest in the latest dental technology so you receive faster, safer and more comfortable treatment — with predictable, world-class results.
          </p>
        </div>

        {/* Technology cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TECHNOLOGIES.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#1A5C94] border border-[#2A6CA4] rounded-[20px] overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0a3156]/50 transition-all duration-300 group flex flex-col"
            >
              {/* Image Container with fixed height (260px), rounded corners (20px), object-fit */}
              {tech.image && (
                <div className="w-full relative h-65 overflow-hidden">
                  <CldImage
                    src={tech.image}
                    alt={tech.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-[#F26522] rounded-xl flex items-center justify-center text-white shadow-lg">
                    {getTechIcon(tech.name)}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-blue-100/90 leading-relaxed text-base">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
