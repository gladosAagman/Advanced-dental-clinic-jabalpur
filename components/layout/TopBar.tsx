import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CLINIC } from '@/lib/data/site';

export function TopBar() {
  return (
    <div className="hidden lg:block bg-[#0F4C81] text-white text-sm">
      <div className="max-w-[1600px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Side Group */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90">
            <MapPin size={14} className="text-white/80" />
            <span>{CLINIC.address}</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock size={14} className="text-white/80" />
            <span>{CLINIC.hours}</span>
          </div>
        </div>

        {/* Right Side Group */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90">
            <Phone size={14} className="text-white/80" />
            <div className="flex items-center gap-2">
              <a href={`tel:${CLINIC.phoneRaw}`} className="text-white/90 hover:text-white transition font-medium tracking-wide">{CLINIC.phone}</a>
              <span className="text-white/40">/</span>
              <a href={`tel:${CLINIC.phone2?.replace(/\s+/g, '')}`} className="text-white/90 hover:text-white transition font-medium tracking-wide">{CLINIC.phone2}</a>
              <span className="text-white/40">/</span>
              <a href={`tel:${CLINIC.phone3?.replace(/\s+/g, '')}`} className="text-white/90 hover:text-white transition font-medium tracking-wide">{CLINIC.phone3}</a>
            </div>
          </div>
          <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2 hover:text-gray-200 transition text-white/90 font-medium">
            <Mail size={14} className="text-white/80" />
            {CLINIC.email}
          </a>
        </div>
      </div>
    </div>
  );
}
