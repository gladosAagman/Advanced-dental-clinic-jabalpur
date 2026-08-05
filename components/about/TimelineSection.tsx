'use client'

export default function TimelineSection() {
  const timeline = [
    {
      year: '2011',
      title: 'Clinic Founded',
      desc: 'Dr. Akhilesh Mulchandani opens the first dental practice in Ranjhi.'
    },
    {
      year: '2014',
      title: 'Specialist Team',
      desc: 'Expanded with in-house orthodontist & implantologist specialists.'
    },
    {
      year: '2018',
      title: 'Digital Dentistry',
      desc: 'Introduced intra-oral scanning, digital OPG and rotary endodontics.'
    },
    {
      year: '2022',
      title: 'ISO Certification',
      desc: 'Achieved ISO certification for international standard infection control.'
    },
    {
      year: 'Today',
      title: '50,000+ Smiles',
      desc: 'A trusted name across central India, with patients flying in from neighboring states.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F5FF] text-[#0F4C81] px-4 py-2 rounded-full text-sm font-bold mb-4">
            🏆 MILESTONES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A]">
            Our Journey of Excellence
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#F26522] to-[#0F4C81]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`flex gap-8 items-start ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl font-bold text-[#F26522]">{item.year}</h3>
                  <p className="text-xl font-bold text-[#0F172A]">{item.title}</p>
                  <p className="text-[#475569]">{item.desc}</p>
                </div>
                <div className="w-4 h-4 bg-[#F26522] rounded-full relative z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
