'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle2, Loader } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  treatment: z.string().min(1, 'Please select a treatment'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const treatments = [
  'Orthodontics / Braces',
  'Invisalign',
  'Dental Implants',
  'Root Canal',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Kids Dentistry',
  'Other',
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border-2 border-teal-200 text-center">
        <CheckCircle2 size={48} className="text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your message has been received. We&apos;ll contact you soon to schedule your appointment.
        </p>
        <p className="text-sm text-gray-500">
          Expected response time: Within 24 hours
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name *
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="Enter your full name"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.name && (
          <div className="flex gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {errors.name.message}
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.email && (
          <div className="flex gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {errors.email.message}
          </div>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number *
        </label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+91 9876-543210"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            errors.phone
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.phone && (
          <div className="flex gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {errors.phone.message}
          </div>
        )}
      </div>

      {/* Treatment */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Treatment Interested In *
        </label>
        <select
          {...register('treatment')}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all bg-white ${
            errors.treatment
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
        >
          <option value="">Select a treatment</option>
          {treatments.map((treatment) => (
            <option key={treatment} value={treatment}>
              {treatment}
            </option>
          ))}
        </select>
        {errors.treatment && (
          <div className="flex gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {errors.treatment.message}
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          placeholder="Tell us about your dental concerns or questions..."
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.message && (
          <div className="flex gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {errors.message.message}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Appointment Request'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your information will not be shared.
      </p>
    </form>
  )
}
