'use client'

import { TRUST_BADGES } from '@/lib/data/site'

export default function TrustBadgesMarquee() {
  return (
    <div className="w-full bg-white py-4 overflow-hidden border-b border-border">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          animation: scroll-left 30s linear infinite;
          display: flex;
          gap: 2rem;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-sm font-medium text-primary"
            >
              <span className="text-[#F26522]">●</span>
              {badge}
            </div>
          ))}
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={`repeat-${idx}`}
              className="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-sm font-medium text-primary"
            >
              <span className="text-[#F26522]">●</span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
