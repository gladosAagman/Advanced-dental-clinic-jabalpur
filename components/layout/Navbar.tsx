'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { CLINIC } from '@/lib/data/site';
import { CldImage } from 'next-cloudinary';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/doctors', label: 'DOCTORS' },
  { href: '/treatments', label: 'TREATMENTS' },
  { href: '/clinical-setup', label: 'SETUP' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <CldImage src="branding/advanced-dental-clinic-logo" alt="Advanced Ranjhi Dental Logo" width={160} height={40} className="h-10 w-auto" />
          <span className="font-extrabold text-[#0F4C81] text-lg lg:text-xl hidden sm:inline tracking-tight">
            Advanced Dental Jabalpur
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition py-1 border-b-2 ${
                isActive(link.href)
                  ? 'text-[#0F4C81] border-[#0F4C81]'
                  : 'text-[#475569] border-transparent hover:text-[#0F4C81]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="hidden sm:inline-block bg-[#F26522] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#E55A1A] transition"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] lg:hidden shadow-lg pb-4">
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition py-2 px-3 rounded-lg ${
                    isActive(link.href)
                      ? 'text-[#0F4C81] bg-[#F8FAFC]'
                      : 'text-[#475569] hover:text-[#0F4C81] hover:bg-[#F8FAFC]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${CLINIC.phoneRaw}`} className="bg-[#F26522] text-white px-4 py-3 rounded-lg text-sm font-semibold mt-4 text-center mx-3 shadow-md">
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
