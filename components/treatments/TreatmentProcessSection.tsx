'use client'

export default function TreatmentProcessSection() {
  const treatmentProcess = [
    {
      step: 1,
      title: 'Consultation',
      desc: 'Detailed examination, diagnostics and digital scans.'
    },
    {
      step: 2,
      title: 'Treatment Plan',
      desc: 'Personalized planning with transparent pricing.'
    },
    {
      step: 3,
      title: 'Procedure',
      desc: 'Painless, precise treatment using modern technology.'
    },
    {
      step: 4,
      title: 'Follow-Up',
      desc: 'Aftercare, reviews and long-term maintenance.'
    }
  ]

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-black text-[#0F172A] mb-8">Treatment Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatmentProcess.map((item) => (
          <div key={item.step} className="border border-[#E2E8F0] rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold mb-4">
              {item.step}
            </div>
            <h4 className="text-xl font-bold text-[#0F172A] mb-2">{item.title}</h4>
            <p className="text-[#475569]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
