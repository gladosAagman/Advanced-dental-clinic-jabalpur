// Comprehensive site data for Dr. Mulchandani's Advanced Ranjhi Dental Hospital

export const CLINIC = {
  name: "Dr. Mulchandani's Advanced Ranjhi Dental Hospital",
  shortName: "Advanced Ranjhi Dental",
  tagline: "Painless Dental Care",
  slogan: "Your Smile, Our Priority",
  address: "Main Road, Ranjhi, Jabalpur, Madhya Pradesh 482005",
  addressShort: "Jabalpur, MP",
  phone: "+91 89827 77707",
  phoneRaw: "+918982777707",
  phone2: "",
  phone3: "",
  email: "advanceddentaljabalpur@gmail.com",
  website: "www.advanceddentaljabalpur.in",
  social: {
    instagram: "https://www.instagram.com/advance_dental_clinic_jabalpur/",
    facebook: "https://www.facebook.com/people/Dr-Mulchandanis-Advanced-Dental-Clinic/100063534532763/?locale=pt_PT#",
    youtube: "https://www.youtube.com/@drakhileshmulchandanidenta854",
  },
  hours: "Mon - Sat: 10:00 AM - 8:30 PM",
  emergency: "24×7 Emergency",
  whatsapp: "+91 89827 77707",
  googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.5638404117526!2d79.193...placeholder",
  stats: {
    patients: "10,000+",
    experience: "15",
    rating: "4.9"
  }
};

export const TRUST_BADGES = [
  "Smile Design",
  "15+ Years Experience",
  "4.9★ Google Rating",
  "ISO Certified Clinic",
  "OSHA Sterilization",
  "Painless Laser Dentistry",
  "Digital Smile Design",
  "15+ Years Experience",
  "4.9★ Google Rating"
];

export const HERO = {
  title: "Your Smile Deserves Excellence",
  subtitle: "Experience world-class dental care with cutting-edge technology and compassionate treatment",
  cta1: "Book Free Consultation",
  cta2: "Call Now",
  backgroundImage: "/hero-dental.jpg"
};

export const TREATMENTS = [
  {
    id: "orthodontics",
    name: "Orthodontics",
    icon: "🦷",
    shortDesc: "Straight teeth transformation",
    fullDesc: "Expert orthodontic solutions for perfect tooth alignment using latest technology including traditional braces and modern aligners.",
    image: "/images/IMG_7084.JPG.jpeg",
    bgImage: '/images/orthodontics_new.png',
    services: [
      { name: "Fixed Braces", desc: "Traditional metal braces for effective tooth alignment" },
      { name: "Ceramic Braces", desc: "Tooth-colored braces for aesthetic appearance" },
      { name: "Lingual Braces", desc: "Hidden braces placed behind teeth" },
      { name: "Invisalign", desc: "Clear, removable aligners for discrete treatment" },
      { name: "Space Closure", desc: "Close gaps between teeth" },
      { name: "Bite Correction", desc: "Fix overbite, underbite, and crossbite" },
      { name: "Retention", desc: "Maintain results with custom retainers" }
    ],
    benefits: [
      "Improved bite and chewing function",
      "Enhanced smile aesthetics",
      "Better oral hygiene",
      "Reduced jaw pain and TMJ issues",
      "Increased confidence and self-esteem",
      "Better speech clarity"
    ]
  },
  {
    id: "implants",
    name: "Dental Implants",
    icon: "🦷",
    shortDesc: "Permanent tooth replacement",
    fullDesc: "Advanced dental implant technology for missing teeth replacement with osseointegration and lifetime durability.",
    image: "/images/treatment-implants.png",
    bgImage: '/images/Dental Implants_new.png',
    services: [
      { name: "Single Tooth Implant", desc: "Replace one missing tooth" },
      { name: "Multiple Implants", desc: "Replace several teeth with multiple implants" },
      { name: "Full Arch Implants", desc: "Complete upper or lower jaw replacement" },
      { name: "Immediate Loading", desc: "Tooth placement same day as implant" },
      { name: "Bone Grafting", desc: "Build jaw bone for implant support" },
      { name: "Sinus Lift", desc: "Increase bone height in upper jaw" },
      { name: "Implant Maintenance", desc: "Professional cleaning and care" }
    ],
    benefits: [
      "Permanent tooth replacement",
      "Natural look and feel",
      "Improved chewing efficiency",
      "Preserves jaw bone structure",
      "Prevents facial collapse",
      "Lifelong solution with proper care",
      "High success rate (98%+)"
    ]
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    icon: "✨",
    shortDesc: "Smile makeover services",
    fullDesc: "Transform your smile with comprehensive cosmetic dental procedures to enhance beauty and confidence.",
    image: "/images/IMG_7052.JPG.jpeg",
    bgImage: '/images/Cosmetic Dentistry.png',

    services: [
      { name: "Teeth Whitening", desc: "Professional bleaching for bright white smile" },
      { name: "Composite Bonding", desc: "Repair chips and gaps with tooth-colored resin" },
      { name: "Veneers", desc: "Porcelain shells to reshape teeth" },
      { name: "Crown & Bridge", desc: "Cover damaged teeth with crowns" },
      { name: "Smile Design", desc: "Digital smile makeover planning" },
      { name: "Gum Contouring", desc: "Reshape gums for perfect smile" },
      { name: "Aesthetic Fillings", desc: "Invisible restorations with composite materials" }
    ],
    benefits: [
      "Dramatically enhanced smile",
      "Increased confidence",
      "Improved self-image",
      "Professional appearance",
      "Natural-looking results",
      "Durable and long-lasting",
      "Quick transformation"
    ]
  },
  {
    id: "periodontics",
    name: "Periodontics & Implants",
    icon: "🌱",
    shortDesc: "Gum health and implantology",
    fullDesc: "Specialized treatment for gum diseases and comprehensive implant dentistry solutions.",
    image: "/images/IMG_7097.JPG.jpeg",
    bgImage: '/images/Periodontics & Implants_new.png',

    services: [
      { name: "Gum Treatment", desc: "Cure gingivitis and periodontitis" },
      { name: "Scaling & Root Planing", desc: "Deep cleaning for gum health" },
      { name: "Flap Surgery", desc: "Advanced gum disease treatment" },
      { name: "Bone Regeneration", desc: "Restore lost bone structure" },
      { name: "Implant Placement", desc: "Expert implant surgery" },
      { name: "Implant Restoration", desc: "Complete implant crowns and dentures" }
    ],
    benefits: [
      "Healthy gums and bones",
      "Prevention of tooth loss",
      "Better overall health",
      "Fresher breath",
      "Reduced bleeding and swelling",
      "Successful implant support",
      "Long-term oral health"
    ]
  },
  {
    id: "restorative",
    name: "Restorative Dentistry",
    icon: "🔧",
    shortDesc: "Tooth repair and restoration",
    fullDesc: "Comprehensive restoration solutions for damaged teeth using advanced materials and techniques.",
    image: "/images/IMG_7119.JPG.jpeg",
    bgImage: '/images/Restorative Dentistry_new.png',

    services: [
      { name: "Amalgam Fillings", desc: "Traditional silver amalgam restoration" },
      { name: "Composite Fillings", desc: "Tooth-colored aesthetic fillings" },
      { name: "Root Canal Treatment", desc: "Save infected teeth with endodontic therapy" },
      { name: "Crowns & Bridges", desc: "Protect and restore damaged teeth" },
      { name: "Inlays & Onlays", desc: "Partial tooth restoration" },
      { name: "Post & Core", desc: "Support for severely damaged teeth" }
    ],
    benefits: [
      "Restored tooth function",
      "Pain relief and comfort",
      "Preservation of natural teeth",
      "Improved appearance",
      "Prevention of further damage",
      "Long-lasting solutions",
      "Restored chewing ability"
    ]
  },
  {
    id: "preventive",
    name: "Preventive Care",
    icon: "🛡️",
    shortDesc: "Dental health maintenance",
    fullDesc: "Professional preventive care to maintain optimal oral health and prevent future problems.",
    image: "/images/IMG_7112.JPG.jpeg",
    bgImage: '/images/Preventive Care_new.png',

    services: [
      { name: "Regular Checkups", desc: "Bi-annual dental examination" },
      { name: "Professional Cleaning", desc: "Remove tartar and plaque buildup" },
      { name: "Fluoride Treatment", desc: "Strengthen enamel and prevent decay" },
      { name: "Sealants", desc: "Protect teeth from decay" },
      { name: "Oral Hygiene Guidance", desc: "Expert tips for home care" },
      { name: "Early Detection", desc: "Identify problems before they worsen" }
    ]
  }
];

export const SERVICES = {
  orthodontics: {
    title: "Orthodontics",
    description: "Achieve the perfect smile with our comprehensive orthodontic solutions. We offer a range of options from traditional braces to modern invisible aligners, all designed to give you straight teeth and a confident smile.",
    benefits: [
      "Improved bite alignment",
      "Enhanced facial aesthetics",
      "Better oral hygiene",
      "Increased confidence",
      "Long-lasting results",
      "Discreet treatment options"
    ],
    process: [
      "Initial consultation and examination",
      "Digital 3D treatment planning",
      "Custom braces or aligner fabrication",
      "Regular monthly adjustments",
      "Retention phase for lasting results"
    ],
    timeline: "18-36 months depending on complexity"
  },
  braces: {
    title: "Dental Braces",
    description: "Traditional and advanced braces for effective tooth alignment. Our orthodontists use the latest bracket technology and wire materials for efficient and comfortable treatment.",
    types: [
      { name: "Metal Braces", desc: "Most effective and affordable option" },
      { name: "Ceramic Braces", desc: "Tooth-colored, aesthetic appearance" },
      { name: "Lingual Braces", desc: "Hidden behind teeth for complete discretion" }
    ],
    whyChooseUs: [
      "Expert orthodontists with 20+ years experience",
      "Latest German and Swiss technology",
      "Painless and comfortable treatment",
      "Customized treatment plans",
      "Affordable pricing with flexible payment options",
      "Regular progress monitoring and adjustments"
    ]
  },
  invisalign: {
    title: "Invisalign Clear Aligners",
    description: "Transform your smile discreetly with Invisalign clear aligners. These virtually invisible trays gradually align your teeth without brackets or wires, allowing you to smile throughout treatment.",
    benefits: [
      "Completely invisible treatment",
      "Removable for eating and cleaning",
      "More comfortable than braces",
      "Shorter treatment time",
      "Predictable results with digital planning",
      "No dietary restrictions"
    ],
    process: [
      "Digital 3D smile assessment",
      "Custom aligner series creation",
      "Wear each aligner for 1-2 weeks",
      "Easy removal and replacement",
      "Regular virtual or in-person checkups",
      "Retention with final fixed retainer"
    ],
    whyChooseCare: [
      "Gold Invisalign Provider certification",
      "Over 5000 successful treatments",
      "Latest iTero digital scanning",
      "Competitive pricing",
      "Lifetime warranty on results",
      "Expert team trained in latest techniques"
    ]
  },
  cosmetic: {
    title: "Cosmetic Dentistry - Smile Makeover",
    description: "Achieve the smile of your dreams with our comprehensive cosmetic dental services. From teeth whitening to full smile makeovers, we use advanced techniques and premium materials.",
    procedures: [
      { name: "Teeth Whitening", desc: "Professional whitening for bright, white teeth in 1 hour" },
      { name: "Dental Veneers", desc: "Thin porcelain shells to reshape your smile" },
      { name: "Composite Bonding", desc: "Repair chips and close gaps with tooth-colored resin" },
      { name: "Gum Contouring", desc: "Perfect your gum line for an ideal smile" },
      { name: "Smile Design", desc: "Digital smile makeover and planning" },
      { name: "Full Mouth Rehabilitation", desc: "Complete smile transformation" }
    ],
    results: "Dramatic improvement in 1-3 visits"
  },
  implants: {
    title: "Dental Implants - Permanent Tooth Replacement",
    description: "Replace missing teeth with dental implants - the gold standard in tooth replacement. Our implants are made from biocompatible materials and designed to last a lifetime.",
    advantages: [
      "Permanent tooth replacement",
      "Looks and feels like natural teeth",
      "Preserves jaw bone structure",
      "Maintains facial structure",
      "No damage to adjacent teeth",
      "High success rate (98%+)",
      "Lifetime durability with proper care"
    ],
    process: [
      "Comprehensive evaluation and planning",
      "3D CBCT scanning",
      "Implant placement surgery",
      "Osseointegration period (3-6 months)",
      "Abutment placement",
      "Custom crown fabrication",
      "Lifetime maintenance"
    ]
  }
};

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Akhilesh Mulchandani",
    title: "Chief Dental Surgeon",
    specialty: "Orthodontics, Implantology, Full-mouth Rehabilitation",
    qualifications: ["BDS", "MDS (Orthodontics & Dentofacial Orthopaedics)", "Fellowship in Implantology (Germany)"],
    experience: "15+ Years",
    bio: "Dr. Akhilesh Mulchandani is a renowned dental surgeon practicing in Jabalpur with over 15 years of experience. He specializes in complex implantology cases, full-mouth rehabilitation and painless dental procedures. Together with a team of specialists, we deliver world-class dentistry rooted in compassion, precision and modern technology.",
    image: "/images/IMG_7025.JPG.jpeg",
    imagePosition: "object-[center_15%]",
    certifications: [
      "BDS",
      "Fellowship in Implantology (Germany)",
      "MDS - Orthodontics & Dentofacial Orthopaedics",
      "Implantologist & Maxillofacial Surgeon",
      "OSHA Certified Sterilization Protocols"
    ]
  },
  {
    id: 2,
    name: "Dr. Priya Mulchandani",
    title: "Cosmetic & Restorative Dentist",
    specialty: "Cosmetic Dentistry, Smile Design",
    qualifications: ["BDS", "Advanced Cosmetic Training"],
    experience: "12+ Years",
    bio: "Specializing in cosmetic dentistry and smile makeovers, Dr. Priya Mulchandani creates beautiful, natural-looking smiles that boost confidence.",
    image: "/images/IMG_7106.JPG.jpeg",
    imagePosition: "object-[center_45%]",
    certifications: [
      "Certified Smile Designer",
      "Expert in Teeth Whitening",
      "Digital Smile Planning Specialist"
    ]
  },
  {
    id: 3,
    name: "Dr. Pranav Asati",
    title: "Cosmetic & Restorative Dentist",
    specialty: "Cosmetic Dentistry, Smile Design",
    qualifications: ["BDS", "MDS ORAL AND MAXILLOFACIAL SURGEON"],
    experience: "12+ Years",
    bio: "Specializing in cosmetic dentistry and smile makeovers, Dr. Priya Mulchandani creates beautiful, natural-looking smiles that boost confidence.",
    image: "/images/Dr_Pranav_Asati.jpeg",
    imagePosition: "object-top",
    certifications: [
      "Certified Smile Designer",
      "Expert in Teeth Whitening",
      "Digital Smile Planning Specialist"
    ]
  },

  {
    id: 4,
    name: "Dr. Nishant Shrivastava",
    title: "Cosmetic & Restorative Dentist",
    specialty: "Cosmetic Dentistry, Smile Design",
    qualifications: ["BDS", "MDS "],
    experience: "12+ Years",
    bio: "Specializing in cosmetic dentistry and smile makeovers, Dr. Priya Mulchandani creates beautiful, natural-looking smiles that boost confidence.",
    image: "/images/Dr_Nishant_Shrivastava.png",
    imagePosition: "object-[center_45%]",
    certifications: [
      "Certified Smile Designer",
      "Expert in Teeth Whitening",
      "Digital Smile Planning Specialist"
    ]
  }

];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    treatment: "Dental Braces",
    rating: 5,
    text: "Dr. Mulchandani gave me the smile I always wanted. The treatment was painless and the results exceeded my expectations.",
    image: "/testimonial-1.jpg"
  },
  {
    name: "Priya Patel",
    treatment: "Invisalign",
    rating: 5,
    text: "Amazing experience! The clear aligners were so convenient and nobody knew I was getting treatment. Highly recommend!",
    image: "/testimonial-2.jpg"
  },
  {
    name: "Amit Singh",
    treatment: "Dental Implants",
    rating: 5,
    text: "The implant procedure was smooth and professional. I got my confidence back. The team is wonderful!",
    image: "/testimonial-3.jpg"
  },
  {
    name: "Neha Gupta",
    treatment: "Smile Makeover",
    rating: 5,
    text: "My smile transformation has changed my life. Dr. Sharma's cosmetic work is exceptional. Thank you!",
    image: "/testimonial-4.jpg"
  },
  {
    name: "Vikram Malhotra",
    treatment: "Root Canal Treatment",
    rating: 5,
    text: "I had a sudden severe toothache and Dr. Mulchandani performed a microscopic root canal in a single sitting. Completely painless and relief was instant!",
    image: "/testimonial-5.jpg"
  },
  {
    name: "Akansha Shrivastava",
    treatment: "Teeth Whitening",
    rating: 5,
    text: "Got my teeth whitened before my wedding. The results are amazing! My teeth look natural and bright. The staff is super friendly.",
    image: "/testimonial-6.jpg"
  },
  {
    name: "Sneha Jain",
    treatment: "Laser Dentistry",
    rating: 5,
    text: "Excellent experience with laser gum treatment. No bleeding, no pain, and extremely fast recovery. The technology here is top-notch.",
    image: "/testimonial-7.jpg"
  },
  {
    name: "Raj Gupta",
    treatment: "Pediatric Dentistry",
    rating: 5,
    text: "Brought my 7-year-old here for dental fillings. Dr. Mulchandani and the staff made her feel so comfortable. She actually enjoyed her dentist visit!",
    image: "/testimonial-8.jpg"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Painless Procedures",
    description: "Advanced anesthesia & laser tools for a comfortable visit.",
    icon: "💖",
    image: "/images/IMG_7013.JPG.jpeg"
  },
  {
    title: "Specialist Team",
    description: "In-house orthodontists, endodontists and implantologists.",
    icon: "👥",
    image: "/images/IMG_7068.JPG.jpeg"
  },
  {
    title: "International Standards",
    description: "OSHA-compliant sterilization & ISO-certified workflows.",
    icon: "🏆",
    image: "/images/IMG_7071.JPG.jpeg"
  },
  {
    title: "Affordable & Transparent",
    description: "Honest pricing, EMI options, no hidden charges.",
    icon: "💼",
    image: "/images/IMG_7130.JPG.jpeg"
  },
  {
    title: "State-of-the-Art Setup",
    description: "Digital dentistry suite with the latest technology.",
    icon: "⚙️",
    image: "/images/IMG_7114.JPG.jpeg"
  },
  {
    title: "24×7 Emergency Care",
    description: "Round-the-clock support for dental emergencies.",
    icon: "📞",
    image: "/images/IMG_7077.JPG.jpeg"
  }
];

export const TECHNOLOGIES = [
  {
    name: "Digital OPG & CBCT",
    description: "3D radiographs for precise diagnosis and treatment planning.",
    image: "/images/opg_machine_generated.png"
  },
  {
    name: "Laser Dentistry",
    description: "Minimally invasive procedures with faster healing.",
    image: "/images/Laser.jpg"
  },
  {
    name: "AI Dental Checkup",
    description: "Fast & contactless digital screening and accurate diagnosis.",
    image: "/images/IMG_7128.JPG.jpeg"
  },
  {
    name: "Microscopic Root Canal",
    description: "Painless single-sitting root canals with advanced magnification.",
    image: "/images/Microscopic.jpeg"
  },
  {
    name: "Digital Smile Design",
    description: "Preview your new smile before treatment begins.",
    image: "/images/DigitalSmile.jpeg"
  },
  {
    name: "Autoclave Sterilization",
    description: "Hospital-grade infection control, every single time.",
    image: "/images/IMG_7134.JPG.jpeg"
  }
];

export const GALLERY_IMAGES = [
  { id: 1, category: "braces", before: "/before-braces-1.jpg", after: "/after-braces-1.jpg", title: "Severe Crowding Correction" },
  { id: 2, category: "implants", before: "/before-implant-1.jpg", after: "/after-implant-1.jpg", title: "Missing Tooth Replacement" },
  { id: 3, category: "cosmetic", before: "/before-cosmetic-1.jpg", after: "/after-cosmetic-1.jpg", title: "Smile Whitening & Makeover" },
  { id: 4, category: "braces", before: "/before-braces-2.jpg", after: "/after-braces-2.jpg", title: "Bite Correction" },
  { id: 5, category: "invisalign", before: "/before-invisalign-1.jpg", after: "/after-invisalign-1.jpg", title: "Discreet Alignment" },
  { id: 6, category: "cosmetic", before: "/before-cosmetic-2.jpg", after: "/after-cosmetic-2.jpg", title: "Full Mouth Rehabilitation" }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Benefits of Invisalign: Why Choose Clear Aligners",
    excerpt: "Discover why Invisalign is the perfect choice for modern orthodontics...",
    date: "2024-06-15",
    author: "Dr. Mulchandani",
    category: "Invisalign"
  },
  {
    id: 2,
    title: "The Future of Dental Implants",
    excerpt: "Learn about the latest advancements in dental implant technology...",
    date: "2024-06-10",
    author: "Dr. Sharma",
    category: "Implants"
  },
  {
    id: 3,
    title: "Smile Makeover: 5 Transformative Cosmetic Procedures",
    excerpt: "Transform your smile with these proven cosmetic dental treatments...",
    date: "2024-06-05",
    author: "Dr. Sharma",
    category: "Cosmetic"
  }
];

export const FAQ = [
  {
    question: "Is the treatment at Advanced Dental really painless?",
    answer: "Yes. We use modern anesthesia techniques, laser dentistry and gentle hands-on approach. Most patients report zero to minimal discomfort during procedures including extractions and root canals."
  },
  {
    question: "How much does a dental implant cost in Jabalpur?",
    answer: "Implant costs vary based on complexity and quality of materials. We offer transparent pricing and flexible EMI options. Call us for a customized quote after consultation."
  },
  {
    question: "Do you provide Invisalign treatment?",
    answer: "Yes. We are a certified Invisalign provider with extensive experience. We use the latest digital scanning and treatment planning for optimal results."
  },
  {
    question: "How long does a root canal take?",
    answer: "Most root canals can be completed in a single sitting (45-60 minutes) with our advanced rotary endodontics equipment."
  },
  {
    question: "Is the clinic sterilized properly?",
    answer: "Yes. We follow OSHA-compliant sterilization protocols with medical-grade autoclaves, UV chambers and strict infection control measures."
  },
  {
    question: "Do you treat children?",
    answer: "Yes. We have a dedicated pediatric dentistry section with child-friendly environment and gentle techniques for kids of all ages."
  },
  {
    question: "What are the clinic timings?",
    answer: "Mon - Sat: 10:00 AM - 8:30 PM. We are closed on Sundays. For emergencies, call 24×7 helpline."
  },
  {
    question: "Do you accept insurance?",
    answer: "We accept most major insurance plans. Consult our team for coverage details. We also offer direct payment, card, and EMI options."
  }
];

export const CONTACT_FORM_FIELDS = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "subject", label: "Subject", type: "select", options: ["Consultation", "Braces", "Invisalign", "Implants", "Cosmetic", "Other"], required: true },
  { name: "message", label: "Message", type: "textarea", required: true }
];
