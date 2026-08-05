// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'

// interface TreatmentCardProps {
//   id: string
//   icon: string
//   name: string
//   shortDesc: string
//   image?: string
// }

// export default function TreatmentCard({
//   id,
//   icon,
//   name,
//   shortDesc,
//   image
// }: TreatmentCardProps) {
//   return (
//     <Link
//       href={`/treatments/${id}`}
//       className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#F26522] flex flex-col h-full"
//     >
//       {/* Background gradient on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#1B5FA0] opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10"></div>

//       {/* Image Container - Full Card Width with Dynamic Aspect Ratio */}
//       <div className="w-full aspect-[4/3] bg-slate-100 relative overflow-hidden">
//         {image ? (
//           <Image
//             src={image}
//             alt={name}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] flex items-center justify-center">
//             <span className="text-5xl group-hover:scale-110 transition-transform">{icon}</span>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="relative z-20 p-6 flex flex-col flex-grow justify-between">
//         <div>
//           <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-white mb-3 transition-colors">
//             {name}
//           </h3>
//           <p className="text-[#475569] group-hover:text-white/90 mb-4 transition-colors text-sm leading-relaxed">
//             {shortDesc}
//           </p>
//         </div>

//         {/* Learn More Link */}
//         <div className="text-[#F26522] font-bold group-hover:text-[#FFB88C] flex items-center gap-2 transition-colors mt-auto">
//           Learn more <span>→</span>
//         </div>
//       </div>
//     </Link>
//   )
// }



'use client'

import Link from 'next/link'
import Image from 'next/image'

interface TreatmentCardProps {
  id: string
  icon: string
  name: string
  shortDesc: string
  image?: string
}

export default function TreatmentCard({
  id,
  icon,
  name,
  shortDesc,
  image
}: TreatmentCardProps) {
  return (
    <Link
      href={`/treatments/${id}`}
      className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#F26522] flex flex-col h-full"
    >
      {/* Blue overlay complete remove kar diya hai */}

      {/* Image Container */}
      <div className="w-full aspect-[4/3] bg-slate-100 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0F4C81] to-[#6BA3D4] flex items-center justify-center">
            <span className="text-5xl group-hover:scale-110 transition-transform">{icon}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#F26522] mb-3 transition-colors">
            {name}
          </h3>
          <p className="text-[#475569] mb-4 transition-colors text-sm leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="text-[#F26522] font-bold group-hover:translate-x-1 flex items-center gap-2 transition-transform mt-auto">
          Learn more <span>→</span>
        </div>
      </div>
    </Link>
  )
}