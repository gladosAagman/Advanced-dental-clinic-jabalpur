// 'use client'

// import Image from 'next/image'

// interface DoctorCardProps {
//   id: string
//   name: string
//   title: string
//   qualifications: string[]
//   image?: string
// }

// export default function DoctorCard({
//   name,
//   title,
//   qualifications,
//   image
// }: DoctorCardProps) {
//   return (
//     <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition">
//       {/* Doctor image or placeholder */}
//       <div className="h-64 md:h-72 w-full bg-gray-100 relative overflow-hidden rounded-t-2xl">
//         {image ? (
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover object-center drop-shadow-sm"
           
//           />
//         ) : (
//           <span className="text-6xl">👨‍⚕️</span>
//         )}
//       </div>

//       <div className="p-8">
//         <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{name}</h3>
//         <p className="text-[#F26522] font-bold mb-4">{title}</p>
//         <div className="space-y-2">
//           {qualifications.slice(0, 3).map((qual, idx) => (
//             <p key={idx} className="text-sm text-[#475569] flex gap-2">
//               <span className="text-[#0F4C81]">✓</span>
//               {qual}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { CldImage } from 'next-cloudinary'

interface DoctorCardProps {
  id: string
  name: string
  title: string
  qualifications: string[]
  image?: string
  imagePosition?: string
}

export default function DoctorCard({
  name,
  title,
  qualifications,
  image,
  imagePosition
}: DoctorCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col h-full">
      {/* Image Height ko 80 (320px) badha diya hai taaki card bada aur clear dikhe */}
      <div className="h-80 w-full bg-gray-100 relative overflow-hidden rounded-t-2xl flex-shrink-0">
        {image ? (
          <CldImage
            src={image}
            alt={name}
            fill
            className="object-cover"
            style={{
              // CSS inline style se custom object-position accurate apply hota hai
              objectPosition: imagePosition
                ? imagePosition.replace('object-', '').replace('[', '').replace(']', '')
                : 'top'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">👨‍⚕️</span>
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{name}</h3>
          <p className="text-[#F26522] font-semibold text-base mb-4">{title}</p>
          <div className="space-y-2">
            {qualifications.slice(0, 3).map((qual, idx) => (
              <p key={idx} className="text-sm text-[#475569] flex gap-2">
                <span className="text-[#0F4C81] font-bold">✓</span>
                {qual}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}