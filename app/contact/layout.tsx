import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a free consultation at Advanced Dental Clinic Jabalpur. Address, phone, WhatsApp, and clinic hours — Main Road, Ranjhi, Jabalpur, Madhya Pradesh.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
