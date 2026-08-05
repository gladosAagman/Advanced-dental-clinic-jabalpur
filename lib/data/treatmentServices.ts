export const treatmentServices = {
  dentalBraces: {
    id: 'dental-braces',
    title: 'Dental Braces',
    shortDescription: 'Align your teeth with modern braces technology',
    fullDescription: `Dental braces are a time-tested orthodontic solution that have helped millions of patients achieve straighter, more beautiful smiles. Whether you need metal braces, ceramic braces, or advanced self-ligating systems, our clinic offers comprehensive orthodontic treatment using the latest technology and techniques. Dr. Abhisek Ghosh specializes in creating personalized treatment plans that deliver exceptional results in the most comfortable way possible.

Our braces are designed not only to straighten teeth but also to correct bite problems, improve oral health, and enhance your overall facial aesthetics. With advances in orthodontic technology, modern braces are more comfortable, less noticeable, and work faster than ever before. We offer various options to suit your preferences and lifestyle.`,
    benefits: [
      'Straighter, more aligned teeth for improved bite and chewing function',
      'Enhanced facial appearance and confidence',
      'Better oral hygiene due to properly aligned teeth',
      'Long-lasting results that improve overall dental health',
      'Customizable options to match your aesthetic preferences',
      'Experienced treatment monitoring and regular adjustments',
      'Improved speech clarity in some cases',
      'Prevention of future dental complications',
    ],
    types: [
      {
        name: 'Metal Braces',
        description: 'Traditional and most affordable option. Highly effective and durable. Available with colored bands for a more personalized look.',
        duration: '18-24 months',
        cost: 'Most affordable option',
      },
      {
        name: 'Ceramic Braces',
        description: 'Tooth-colored braces that blend with your natural teeth. More aesthetic than metal braces while maintaining strength and effectiveness.',
        duration: '18-24 months',
        cost: 'Moderately priced',
      },
      {
        name: 'Self-Ligating Braces',
        description: 'Advanced braces with a built-in mechanism that reduces pressure and friction. Requires fewer adjustments and reduces treatment time.',
        duration: '16-20 months',
        cost: 'Premium option',
      },
      {
        name: 'Lingual Braces',
        description: 'Placed on the inside of teeth, completely hidden from view. Perfect for professionals who want invisible orthodontics.',
        duration: '18-24 months',
        cost: 'Premium option',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Comprehensive examination, digital imaging, and discussion of treatment options and goals.',
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Custom treatment plan created using advanced 3D imaging to show expected results.',
      },
      {
        step: 3,
        title: 'Braces Placement',
        description: 'Carefully bonded brackets and wires applied to begin the tooth alignment process.',
      },
      {
        step: 4,
        title: 'Regular Adjustments',
        description: 'Monthly visits for wire adjustments and progress monitoring.',
      },
      {
        step: 5,
        title: 'Removal & Retention',
        description: 'Braces removed and custom retainers provided to maintain your new smile.',
      },
    ],
    aftercare: 'Wear your retainers as prescribed to maintain results. Continue regular dental hygiene practices. Avoid hard, sticky, and sugary foods. Brush and floss after every meal.',
    image: '/images/orthodontics.png',
  },

  invisalign: {
    id: 'invisalign',
    title: 'Invisalign Clear Aligners',
    shortDescription: 'Invisible teeth straightening with clear aligners',
    fullDescription: `Invisalign is a revolutionary orthodontic treatment that uses a series of custom-made, clear plastic aligners to gradually straighten your teeth. Unlike traditional braces, Invisalign aligners are virtually invisible, removable, and provide exceptional comfort while effectively correcting misaligned teeth.

Dr. Abhisek Ghosh is a Gold Invisalign Provider with extensive experience in treating complex cases with clear aligners. This advanced technology offers patients the freedom to maintain their lifestyle while achieving their dream smile. Whether you have minor crowding or significant bite issues, Invisalign can provide an elegant solution.`,
    benefits: [
      'Nearly invisible appearance - straighten teeth without anyone noticing',
      'Removable aligners for easy eating, drinking, and oral hygiene',
      'More comfortable than traditional braces with no sharp wires or brackets',
      'Faster treatment in many cases compared to conventional braces',
      'No dietary restrictions - eat whatever you want',
      'Easy to maintain with simple cleaning routine',
      'Predictable results with digital treatment planning',
      'Perfect for professionals and social individuals',
      'Reduces speech impediments caused by traditional braces',
      'Better oral hygiene during treatment',
    ],
    suitability: 'Invisalign is suitable for mild to moderate orthodontic cases including crowding, spacing, bite correction, and tooth alignment. During consultation, Dr. Ghosh will determine if Invisalign is the right choice for your specific case.',
    process: [
      {
        step: 1,
        title: '3D Imaging & Treatment Plan',
        description: 'Digital scan of your teeth creates a precise 3D model showing the exact movement of each tooth and expected results.',
      },
      {
        step: 2,
        title: 'Custom Aligner Fabrication',
        description: 'Series of custom-made aligners manufactured using advanced technology, each one slightly different to guide teeth movement.',
      },
      {
        step: 3,
        title: 'Treatment Begins',
        description: 'Start with the first set of aligners, wearing each set for 7-10 days before progressing to the next.',
      },
      {
        step: 4,
        title: 'Progress Monitoring',
        description: 'Regular check-ups every 6-8 weeks to ensure treatment is progressing as planned.',
      },
      {
        step: 5,
        title: 'Completion & Retention',
        description: 'Achieve your desired smile and transition to retainers to maintain results permanently.',
      },
    ],
    duration: '6-24 months depending on complexity',
    aftercare: 'Wear aligners 20-22 hours daily for optimal results. Remove only for eating, drinking, and cleaning. Maintain excellent oral hygiene. Wear retainers after treatment completion.',
    image: '/images/invisalign.png',
  },

  cosmeticDentistry: {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Transform your smile with advanced cosmetic treatments',
    fullDescription: `Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, and smile. Whether you want to brighten discolored teeth, close gaps, reshape uneven teeth, or create a complete smile makeover, our cosmetic dentistry services can help you achieve the smile of your dreams.

Dr. Abhisek Ghosh combines artistic vision with advanced dental techniques to create natural-looking, beautiful results that complement your facial features and personality. Every smile is unique, and we tailor our cosmetic treatments to your specific needs and desires.`,
    treatments: [
      {
        name: 'Professional Teeth Whitening',
        description: 'In-office whitening using advanced bleaching techniques for dramatic results. Safe, effective, and delivers immediate brightness. Results last 6-12 months with proper maintenance.',
        benefits: 'Brighter, more youthful appearance; boosts confidence; improved oral aesthetics',
      },
      {
        name: 'Dental Veneers',
        description: 'Thin porcelain shells bonded to front teeth to correct shape, color, size, and alignment. Permanent, durable, and deliver dramatic transformations.',
        benefits: 'Complete smile makeover; covers severe discoloration; corrects shape and alignment; lasts 10+ years',
      },
      {
        name: 'Dental Bonding',
        description: 'Tooth-colored composite resin applied to teeth to repair chips, close gaps, and improve appearance. Quick, affordable alternative to veneers.',
        benefits: 'Affordable smile enhancement; quick application; reversible; natural appearance',
      },
      {
        name: 'Gum Contouring',
        description: 'Reshaping of gum line to improve smile aesthetics. Corrects gummy smile and creates proper tooth-to-gum ratio.',
        benefits: 'More balanced smile; improved gum health; enhanced facial aesthetics',
      },
      {
        name: 'Smile Design',
        description: 'Digital smile design using advanced software to show exactly how your smile will look after treatment. Combines orthodontics, restorative, and cosmetic dentistry.',
        benefits: 'Preview results before treatment; customized treatment plan; confidence in final outcome',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Smile Analysis',
        description: 'Comprehensive evaluation of facial structure, tooth shape, color, size, and overall proportions.',
      },
      {
        step: 2,
        title: 'Digital Mockup',
        description: 'Advanced digital software shows exactly how your smile will look after cosmetic enhancement.',
      },
      {
        step: 3,
        title: 'Treatment Planning',
        description: 'Detailed plan created combining various cosmetic and restorative treatments for optimal results.',
      },
      {
        step: 4,
        title: 'Treatment Execution',
        description: 'Precise application of chosen cosmetic treatments with meticulous attention to detail.',
      },
      {
        step: 5,
        title: 'Final Refinement & Maintenance',
        description: 'Final adjustments made and maintenance schedule provided to keep your smile radiant.',
      },
    ],
    aftercare: 'Avoid staining foods and drinks for 48 hours after whitening. Follow post-treatment care instructions. Maintain excellent oral hygiene. Regular dental visits and touch-ups recommended.',
    image: '/images/cosmetic.png',
  },

  dentalImplants: {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDescription: 'Replace missing teeth with permanent implant solutions',
    fullDescription: `Dental implants are the gold standard for replacing missing teeth. A dental implant is a titanium screw that is surgically placed in the jawbone to serve as an artificial tooth root. Once integrated with the bone, a crown is attached to the implant creating a replacement tooth that looks, feels, and functions like a natural tooth.

Unlike bridges or dentures, implants preserve jawbone structure, provide superior comfort, and offer a permanent solution with a success rate exceeding 95%. Dr. Abhisek Ghosh and our surgical team have extensive experience placing implants with precision and achieving excellent long-term outcomes.`,
    benefits: [
      'Permanent replacement for missing teeth lasting 20+ years',
      'Natural appearance and feel identical to real teeth',
      'Improved chewing function and ability to eat normally',
      'Preserves jawbone structure and facial appearance',
      'No special care beyond normal oral hygiene',
      'Better than dentures or bridges for long-term comfort',
      'Does not affect adjacent teeth',
      'Improved speech and confidence',
      'Excellent for single or multiple tooth replacement',
      'Cost-effective over the long term',
    ],
    types: [
      {
        name: 'Single Tooth Implant',
        description: 'Replacement of one missing tooth with individual implant and crown.',
      },
      {
        name: 'Multiple Tooth Implant',
        description: 'Replacement of several missing teeth using multiple implants.',
      },
      {
        name: 'Full Mouth Implants',
        description: 'Complete smile restoration using 4-6 implants to support a full set of teeth.',
      },
      {
        name: 'Implant-Supported Bridge',
        description: 'Multiple teeth replaced using implants as support instead of filing adjacent teeth.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Assessment',
        description: '3D CBCT imaging to evaluate jawbone volume and density. Assessment of overall health and suitability for implants.',
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Detailed surgical plan with implant positioning for optimal function and aesthetics.',
      },
      {
        step: 3,
        title: 'Implant Placement',
        description: 'Surgical placement of titanium implant under local anesthesia. Procedure takes 30-60 minutes.',
      },
      {
        step: 4,
        title: 'Osseointegration',
        description: 'Healing period of 3-6 months as bone fuses with implant surface.',
      },
      {
        step: 5,
        title: 'Crown Placement',
        description: 'Custom-made crown attached to implant creating permanent tooth replacement.',
      },
    ],
    duration: '3-6 months total including healing time',
    aftercare: 'Treat implant as natural tooth with regular brushing and flossing. Avoid smoking. Attend follow-up visits. Maintain excellent oral hygiene.',
    image: '/images/implants.png',
  },
}
