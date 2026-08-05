'use client'

import { cldUrl } from '@/lib/cloudinary'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'
import { CLINIC } from '@/lib/data/site'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner 
        title="Contact Us"
        subtitle="Get in touch with our team for any queries or to book an appointment"
        bgImage={cldUrl("hero/contact-page-hero")}
      />

      <main>
        {/* Contact Info & Form */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Contact Information</h2>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Phone</p>
                    <a href={`tel:${CLINIC.phoneRaw}`} className="text-[#475569] hover:text-[#F26522]">
                      {CLINIC.phone}
                    </a>
                    <p className="text-[#475569] text-sm mt-1">{CLINIC.phone2}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Email</p>
                    <a href={`mailto:${CLINIC.email}`} className="text-[#475569] hover:text-[#F26522]">
                      {CLINIC.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Address</p>
                    <p className="text-[#475569]">{CLINIC.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={24} className="text-[#F26522] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#0F172A]">Hours</p>
                    <p className="text-[#475569]">{CLINIC.hours}</p>
                    <p className="text-[#F26522] font-bold text-sm mt-1">{CLINIC.emergency}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#25D366] flex-shrink-0" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="font-bold text-[#0F172A]">WhatsApp</p>
                    <a href={`https://wa.me/${CLINIC.phoneRaw}`} className="text-[#475569] hover:text-[#F26522]">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-xl border border-[#E2E8F0]">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                        >
                          <option value="">Select a subject</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Braces">Braces</option>
                          <option value="Implants">Implants</option>
                          <option value="Cosmetic">Cosmetic</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F26522]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#F26522] text-white py-3 rounded-lg font-bold hover:bg-[#E55A1A] transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                      <p className="text-green-600 font-medium text-center">
                        Thank you! Your message has been sent. We'll get back to you soon.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-600 font-medium text-center">
                        {errorMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="h-96 bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Dr.+Mulchandani's+Ranjhi+Dental+Clinic,+Jabalpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
