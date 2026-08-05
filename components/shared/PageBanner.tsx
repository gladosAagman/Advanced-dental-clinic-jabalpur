import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
  to?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Breadcrumb[];
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  contentClassName?: string;
}

export default function PageBanner({ title, subtitle, breadcrumb = [], bgImage, bgPosition = "bg-center", bgSize = "bg-cover", contentClassName = "" }: PageBannerProps) {
  return (
    <section className={`relative text-white pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden ${!bgImage ? 'bg-gradient-to-br from-[#0F4C81] via-[#1B5FA0] to-[#0F4C81]' : 'bg-[#0F172A]'}`}>
      
      {/* Optional Background Image */}
      {bgImage && (
        <>
          <div 
            className={`absolute inset-0 z-0 bg-no-repeat ${bgSize} ${bgPosition}`}
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          {/* Dark Blue Overlay (40-50%) */}
          <div className="absolute inset-0 z-0 bg-[#0F4C81]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent"></div>
        </>
      )}

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-6 relative z-10 ${contentClassName}`}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-balance drop-shadow-md">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
