// 'use client'

// import { TopBar } from '@/components/layout/TopBar'
// import { Navbar } from '@/components/layout/Navbar'
// import { Footer } from '@/components/layout/Footer'
// import PageBanner from '@/components/shared/PageBanner'
// import { TECHNOLOGIES } from '@/lib/data/site'
// import { 
//   Zap, 
//   ShieldCheck, 
//   Sun, 
//   Award, 
//   Sparkles, 
//   Wind, 
//   Trash2, 
//   RefreshCw 
// } from 'lucide-react'

// export default function ClinicalSetupPage() {
//   const safetyMeasures = [
//     { 
//       title: 'UV Sterilization Chambers', 
//       desc: 'Advanced UV technology to eliminate 99.9% of pathogens',
//       icon: Sun 
//     },
//     { 
//       title: 'ISO 9001 Certification', 
//       desc: 'Internationally recognized quality management system',
//       icon: Award 
//     },
//     { 
//       title: 'Medical-Grade Autoclave', 
//       desc: 'High-pressure steam sterilization for instruments',
//       icon: Sparkles 
//     },
//     { 
//       title: 'HEPA Air Filtration', 
//       desc: 'Hospital-grade air purification systems',
//       icon: Wind 
//     },
//     { 
//       title: 'Disposable Consumables', 
//       desc: 'Single-use items for maximum hygiene',
//       icon: Trash2 
//     },
//     { 
//       title: 'Daily Sanitization', 
//       desc: 'Complete facility disinfection protocols',
//       icon: RefreshCw 
//     },
//   ];

//   return (
//     <>
//       <TopBar />
//       <Navbar />

//       <PageBanner 
//         title="Clinical Setup & Technology"
//         subtitle="State-of-the-art infrastructure meeting international standards"
//         bgImage={cldUrl("adc/hero/clinical-setup-hero")}
//       />

//       <main>
//         {/* Advanced Technology */}
//         <section className="py-20 md:py-32 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Advanced Technology</h2>
//               <p className="text-lg text-[#475569]">German and Swiss equipment for precise diagnosis and treatment</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {TECHNOLOGIES.map((tech, idx) => (
//                 <div key={idx} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0F4C81]/10 transition-all duration-300 flex flex-col">
//                   {/* Image Container */}
//                   {tech.image && (
//                     <div className="w-full relative aspect-[4/3] overflow-hidden">
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img
//                         src={tech.image}
//                         alt={tech.name}
//                         loading="lazy"
//                         className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   )}
                  
//                   {/* Content */}
//                   <div className="p-6 md:p-8 flex flex-col flex-grow">
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="w-12 h-12 rounded-xl bg-[#F26522]/10 flex items-center justify-center shrink-0">
//                         <Zap size={24} className="text-[#F26522]" />
//                       </div>
//                       <h3 className="text-xl font-bold text-[#0F172A] leading-tight">{tech.name}</h3>
//                     </div>
//                     <p className="text-[#475569] text-base leading-relaxed">{tech.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Safety & Sterilization */}
//         <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] text-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold mb-4">Safety & Sterilization Protocols</h2>
//               <p className="text-lg text-white/80">Highest standards of infection control and patient safety</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {safetyMeasures.map((measure, idx) => {
//                 const IconComponent = measure.icon;
//                 return (
//                   <div 
//                     key={idx} 
//                     className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
//                   >
//                     <div>
//                       {/* Icon Container Badge */}
//                       <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6 border border-white/20 shadow-inner">
//                         <IconComponent size={28} className="text-[#F26522]" />
//                       </div>
                      
//                       <h3 className="text-xl font-bold mb-3 text-white">{measure.title}</h3>
//                       <p className="text-white/80 text-sm leading-relaxed">{measure.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ISO Certification */}
//         <section className="py-20 md:py-32 bg-white">
          
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }



'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { TECHNOLOGIES } from '@/lib/data/site'
import { Zap } from 'lucide-react'
import { cldUrl } from '@/lib/cloudinary'

export default function ClinicalSetupPage() {
  const safetyMeasures = [
    { 
      title: 'UV Sterilization Chambers', 
      desc: 'Advanced UV technology to eliminate 99.9% of pathogens',
      image: 'adc/clinical-setup/uv-sterilization-chamber'
    },
    { 
      title: 'ISO 9001 Certification', 
      desc: 'Internationally recognized quality management system',
      image: 'adc/clinical-setup/iso-9001-certification' 
    },
    { 
      title: 'Medical-Grade Autoclave', 
      desc: 'High-pressure steam sterilization for instruments',
      image: 'adc/clinical-setup/medical-grade-autoclave' 
    },
    { 
      title: 'HEPA Air Filtration', 
      desc: 'Hospital-grade air purification systems',
      image: 'adc/clinical-setup/hepa-air-filtration' 
    },
    { 
      title: 'Disposable Consumables', 
      desc: 'Single-use items for maximum hygiene',
      image: 'adc/clinical-setup/disposable-consumables' 
    },
    { 
      title: 'Daily Sanitization', 
      desc: 'Complete facility disinfection protocols',
      image: 'adc/clinical-setup/daily-sanitization-protocol' 
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Clinical Setup & Technology"
        subtitle="State-of-the-art infrastructure meeting international standards"
        bgImage={cldUrl("adc/hero/clinical-setup-hero")}
      />

      <main>
        {/* Advanced Technology Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Advanced Technology</h2>
              <p className="text-lg text-[#475569]">German and Swiss equipment for precise diagnosis and treatment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {TECHNOLOGIES.map((tech, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0F4C81]/10 transition-all duration-300 flex flex-col">
                  {/* Image Container */}
                  {tech.image && (
                    <div className="w-full relative aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.image}
                        alt={tech.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F26522]/10 flex items-center justify-center shrink-0">
                        <Zap size={24} className="text-[#F26522]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] leading-tight">{tech.name}</h3>
                    </div>
                    <p className="text-[#475569] text-base leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Sterilization Protocols (Now matches Advanced Technology design) */}
        <section className="py-20 md:py-32 bg-gray-50 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Safety & Sterilization Protocols</h2>
              <p className="text-lg text-[#475569]">Highest standards of infection control and patient safety</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {safetyMeasures.map((measure, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0F4C81]/10 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="w-full relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={measure.image}
                      alt={measure.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F26522]/10 flex items-center justify-center shrink-0">
                        <Zap size={24} className="text-[#F26522]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] leading-tight">{measure.title}</h3>
                    </div>
                    <p className="text-[#475569] text-base leading-relaxed">{measure.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ISO Certification */}
        {/* <section className="py-20 md:py-32 bg-white">
          
        </section> */}
      </main>

      <Footer />
    </>
  );
}