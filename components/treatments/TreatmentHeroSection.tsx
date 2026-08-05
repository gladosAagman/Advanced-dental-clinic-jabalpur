

// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'

// interface TreatmentHeroSectionProps {
//   name: string
//   description: string
// }

// export default function TreatmentHeroSection({ name, description }: TreatmentHeroSectionProps) {
//   return (
//     <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-slate-900">
//       {/* 1. Background Image */}
//       <Image
//         src="/images/hero-dental.png"
//         alt="Hero Background"
//         fill
//         priority
//         className="object-cover object-center z-0"
//       />

//       {/* 2. Dark Overlay (Taki Image ke upar text clearly dikhai de) */}
//       <div className="absolute inset-0 bg-black/40 z-0" />

//       {/* 3. Hero Content */}
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-md">
//           {name}
//         </h1>
//         <p className="text-lg text-gray-100 max-w-3xl leading-relaxed drop-shadow-sm font-medium">
//           {description}
//         </p>
//       </div>
//     </section>
//   )
// }

'use client'

import { CldImage } from 'next-cloudinary'

interface TreatmentHeroSectionProps {
  name: string
  description: string
  bgImage?: string // Dynamic Background Image
}

export default function TreatmentHeroSection({ 
  name, 
  description, 
  bgImage = "hero/clinical-setup-hero" // Default Background Image
}: TreatmentHeroSectionProps) {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-slate-900">
      {/* Hero Background Image */}
      <CldImage
        src={bgImage}
        alt={`${name} background`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Dark Overlay - taaki text clean dikhe */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-md">
          {name}
        </h1>
        <p className="text-lg text-gray-100 max-w-3xl leading-relaxed drop-shadow-sm font-medium">
          {description}
        </p>
      </div>
    </section>
  )
}