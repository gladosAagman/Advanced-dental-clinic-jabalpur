'use client'

import { WHY_CHOOSE_US } from '@/lib/data/site'
import { HeartPulse, Users, ShieldCheck, Wallet, Sparkles, PhoneCall } from 'lucide-react'
import { CldImage } from 'next-cloudinary'

// Map the correct icons
const getIcon = (title: string) => {
  if (title.includes('Painless')) return <HeartPulse className="w-5 h-5" />
  if (title.includes('Specialist')) return <Users className="w-5 h-5" />
  if (title.includes('Standards')) return <ShieldCheck className="w-5 h-5" />
  if (title.includes('Affordable')) return <Wallet className="w-5 h-5" />
  if (title.includes('State-of-the-Art')) return <Sparkles className="w-5 h-5" />
  if (title.includes('Emergency')) return <PhoneCall className="w-5 h-5" />
  return <HeartPulse className="w-5 h-5" />
}

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Text & Image */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
                <Sparkles size={16} className="text-[#0F4C81]" /> WHY CHOOSE US
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-[1.1] tracking-tight">
                The dental experience<br />
                you&apos;ve been <span className="text-[#F26522]">waiting<br />for</span>.
              </h2>
              <p className="text-[#475569] text-xl leading-relaxed">
                We blend specialist expertise, modern technology and a warm, hospitality-first approach — so every visit feels reassuring, transparent and effortless.
              </p>
            </div>

            {/* Image Container */}
            <div className="relative flex-grow min-h-[400px] rounded-[2rem] overflow-hidden mt-auto">
              <CldImage
                src="team/clinic-team-photo-01"
                alt="Modern Clinical Setup"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover bg-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Modern Clinical Setup</h3>
                <p className="text-gray-200 text-sm">State-of-the-art infrastructure in the heart of Jabalpur.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {WHY_CHOOSE_US.map((feature, idx) => (
                <div
                  key={idx}
                  className={`group relative border border-[#E2E8F0] rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    feature.image ? 'min-h-[250px] flex flex-col justify-end p-8 border-none' : 'bg-white p-8'
                  }`}
                >
                  {/* Optional Background Image */}
                  {feature.image && (
                    <>
                      <CldImage
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent mix-blend-multiply" />
                    </>
                  )}

                  <div className="relative z-10">
                    {/* Icon container */}
                    {!feature.image && (
                      <div className="w-12 h-12 bg-[#FFF0E8] text-[#F26522] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F26522] group-hover:text-white transition-colors duration-300">
                        {getIcon(feature.title)}
                      </div>
                    )}

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-3 ${feature.image ? 'text-white drop-shadow-md' : 'text-[#0F172A]'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${feature.image ? 'text-white/90 drop-shadow-sm' : 'text-[#64748B]'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
