'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { CLINIC } from '@/lib/data/site';
import { CldImage } from 'next-cloudinary';


export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About (4 cols) */}
          <div className="lg:col-span-4 pr-4">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-3 mb-2">
                <CldImage
                  src="branding/advanced-dental-clinic-logo"
                  alt="Advanced Ranjhi Dental Logo"
                  width={320}
                  height={80}
                  className="h-20 w-auto"
                  style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
                />
              </div>

            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-8 pr-4">
              Painless dental care powered by the latest technology. We are committed to delivering world-class dentistry in Jabalpur with care, precision and warmth.
            </p>
            <div className="flex gap-4">
              <a href={CLINIC.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={CLINIC.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={CLINIC.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-colors" title="Chat on WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Treatments', href: '/treatments' },
                { name: 'Doctors', href: '/doctors' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#F26522]" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3">
              {[
                'Orthodontics & Braces',
                'Invisalign & Aligners',
                'Dental Implants',
                'Painless Root Canal',
                'Cosmetic Dentistry',
                'Kids Dentistry'
              ].map((treatment) => (
                <li key={treatment}>
                  <Link href="#" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#F26522]" /> {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 whitespace-nowrap">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#F26522] shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm leading-relaxed">{CLINIC.address}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-[#F26522] shrink-0" />
                <a href={`tel:${CLINIC.phoneRaw}`} className="text-blue-100 hover:text-white text-sm transition-colors">{CLINIC.phone}</a>
              </div>
              <div className="flex gap-3 items-center">
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-[#25D366] shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white text-sm transition-colors">WhatsApp</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-[#F26522] shrink-0" />
                <a href={`mailto:${CLINIC.email}`} className="text-blue-100 hover:text-white text-sm transition-colors">{CLINIC.email}</a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={18} className="text-[#F26522] shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm leading-relaxed">Mon — Sat: 10:00 AM — 8:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200/80">
            © 2026 Dr. Mulchandani's Advanced Ranjhi Dental Hospital. All rights reserved.
          </p>
          <p className="text-sm text-blue-200/80">
            Designed with care for healthier smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}


