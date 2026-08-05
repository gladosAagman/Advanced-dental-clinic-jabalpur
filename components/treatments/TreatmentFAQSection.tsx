'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface TreatmentFAQSectionProps {
  treatmentName: string
}

export default function TreatmentFAQSection({ treatmentName }: TreatmentFAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState(0)

  const treatmentFaq = [
    {
      q: `Is ${treatmentName} treatment really painless?`,
      a: 'Yes. We use modern anesthesia techniques and gentle hands-on approach. Most patients report zero to minimal discomfort during the procedure.'
    },
    {
      q: `How much does ${treatmentName} cost?`,
      a: 'Costs vary based on complexity and materials. We offer transparent pricing and flexible EMI options. Call us for a customized quote.'
    },
    {
      q: `How long does the treatment take?`,
      a: 'Duration depends on case complexity. We\'ll provide a detailed timeline during your consultation.'
    },
    {
      q: 'Do you accept insurance?',
      a: 'We accept most major insurance plans. Consult our team for coverage details. We also offer direct payment and EMI options.'
    }
  ]

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-black text-[#0F172A] mb-8">Frequently Asked</h2>
      <div className="space-y-4">
        {treatmentFaq.map((faq, idx) => (
          <div key={idx} className="border border-[#E2E8F0] rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
              className="w-full p-6 flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition"
            >
              <span className="font-bold text-[#0F172A] text-left">{faq.q}</span>
              <ChevronDown
                size={20}
                className={`text-[#F26522] flex-shrink-0 transition-transform ${
                  expandedFaq === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFaq === idx && (
              <div className="px-6 pb-6 border-t border-[#E2E8F0]">
                <p className="text-[#475569]">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
