'use client'

import { FAQ } from '@/lib/data/site'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left side - Content */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 border border-[#E2E8F0] text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-8 w-max">
              <HelpCircle size={16} className="text-[#8BA1B8]" /> FREQUENTLY ASKED
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              Got questions? <span className="text-[#0F4C81]">We've<br />got answers.</span>
            </h2>
            
            <p className="text-[#475569] text-xl leading-relaxed mb-10">
              Everything you need to know about our treatments, pricing and clinical care. Can't find an answer?
            </p>
            
            <div>
              <button className="bg-[#0F4C81] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0A3560] transition-colors text-lg">
                Ask Our Team
              </button>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ.map((item, idx) => {
              const isExpanded = expanded === idx
              
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? 'border-[#0F4C81] bg-white shadow-md' 
                      : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'
                  }`}
                >
                  <button
                    onClick={() => setExpanded(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                  >
                    <h3 className={`font-bold text-lg md:text-xl pr-8 ${isExpanded ? 'text-[#0F4C81]' : 'text-[#0F172A]'}`}>
                      {item.question}
                    </h3>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded 
                        ? 'bg-[#0F4C81] text-white' 
                        : 'bg-[#F0F5FF] text-[#0F4C81]'
                    }`}>
                      {isExpanded ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-8 pt-2">
                      <p className="text-[#475569] text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
