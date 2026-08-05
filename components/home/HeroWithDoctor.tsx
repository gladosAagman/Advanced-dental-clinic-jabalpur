'use client'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export function HeroWithDoctor() {
  const qualifications = [
    "BDS",
    "Fellowship in Implantology (Germany)",
    "OSHA Certified Sterilization Protocols",
    "MDS — Orthodontics & Dentofacial Orthopaedics",
    "Implantologist & Maxillofacial Surgeon"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Badges */}
          <div className="relative">
            {/* Image Container with Proper Aspect Ratio & Alignment */}
            <div className="relative h-[480px] sm:h-[550px] lg:h-[620px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl border-4 border-white group">
              <CldImage
                src="home/hero-doctor-photo"
                alt="Dr. Akhilesh Mulchandani, Chief Dental Surgeon at Advanced Dental Clinic Jabalpur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Top Left Badge */}
            <div className="absolute top-6 -left-4 md:-left-8 bg-[#0F4C81] text-white px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl z-10 flex flex-col">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-blue-200 uppercase mb-0.5">Chief Dental Surgeon</span>
              <span className="text-base md:text-xl font-bold">Dr. Akhilesh Mulchandani</span>
            </div>

            {/* Bottom Right Badge */}
            <div className="absolute bottom-6 right-0 md:-right-6 bg-white px-5 py-4 rounded-2xl shadow-xl z-10 flex items-center gap-3 max-w-[260px] md:max-w-[280px]">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FFF0E8] rounded-xl flex items-center justify-center text-[#F26522]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.2989 3.3283 20.5662C3.67777 20.8335 4.10667 20.9708 4.545 20.955H19.455C19.8933 20.9708 20.3222 20.8335 20.6717 20.5662C21.0212 20.2989 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base md:text-lg text-[#0F172A]">15+ Years</span>
                <span className="text-xs md:text-sm text-[#64748B] leading-tight mt-0.5">Of trusted dental expertise serving Jabalpur.</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 lg:pl-8">
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
              <Sparkles size={16} className="text-[#0F4C81]" />
              MEET YOUR DENTIST
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
              A trusted name in dentistry, dedicated to <span className="text-[#0F4C81]">painless care</span>.
            </h2>
            <p className="text-lg lg:text-xl text-[#475569] leading-relaxed">
              Dr. Mulchandani is a renowned dental surgeon practicing in Jabalpur with over 15 years of experience. He specializes in complex implantology cases, full-mouth rehabilitation and painless dental procedures. Together with a team of specialists, we deliver world-class dentistry rooted in compassion, precision and modern technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 pt-4">
              {qualifications.map((qual, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00B67A] shrink-0 mt-0.5" />
                  <span className="text-[#475569] font-medium text-lg">{qual}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link href="/about" className="w-full sm:w-auto bg-[#0F4C81] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0A3560] transition-colors flex items-center justify-center gap-2 text-lg">
                Know More <span className="text-xl">›</span>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto border-2 border-[#CBD5E1] text-[#0F4C81] px-8 py-4 rounded-xl font-bold hover:bg-[#F8FAFC] transition-colors flex items-center justify-center text-lg bg-white">
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}