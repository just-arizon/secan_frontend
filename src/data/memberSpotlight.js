import nelsonPhoto from '@/assets/nelson-ejumedia.png'

export const memberSpotlights = [
  {
    slug: 'nelson-ejumedia',
    name: 'Nelson Ejumedia',
    institution: 'Department of Human Anatomy and Cell Biology, Delta State University, Abraka',
    photo: nelsonPhoto,
    researchInterests: [
      'Neuroscience',
      'Medical Education',
      'Artificial Intelligence',
      'Digital Health',
    ],
    recentAchievement:
      'Recipient of the Most Innovative Student Award (ASSON DELSU, 2025); Led HealthHack25 and contributed to the development of a Neuroadaptive Learning Assistant.',
    quote: 'Innovation in anatomy begins when we dare to solve problems beyond the classroom.',
    intro:
      "The Society of Experimental and Clinical Anatomists of Nigeria (SECAN) is delighted to feature Nelson Ejumedia, an outstanding undergraduate member whose passion for innovation, leadership, and anatomical sciences exemplifies the future of the profession.",
    body: [
      "Nelson is a third-year Anatomy student at Delta State University (DELSU) with a keen interest in the intersection of anatomy, neuroscience, technology, and digital innovation. Driven by a desire to improve learning experiences, he collaborated with fellow students to develop an AI-powered adaptive quiz application, an initiative that has laid the foundation for his ongoing research in technology-enhanced medical education.",
      "His innovative mindset and leadership have earned him the Most Innovative Student Award from the Anatomy Students' Society of Nigeria (ASSON), DELSU Chapter (2025).",
      "Beyond the classroom, Nelson has demonstrated exceptional leadership within student and professional organizations. He currently serves as the National Director of Innovation & Technology of the Health Equity Accelerator Leadership (HEAL) Society and is also the President of the HEAL Society, DELSU Chapter. In these roles, he successfully led HealthHack25, the Society's inaugural health innovation hackathon, bringing together young minds to develop technology-driven solutions for healthcare challenges.",
      "Nelson has also expanded his expertise through international training, contributing to the development of a Neuroadaptive Learning Assistant powered by EEG data during the BCI & Neurotechnology Spring School organized by g.tec medical engineering GmbH.",
      "His commitment to academic excellence and leadership is reflected in several prestigious recognitions, including participation in the Aspire Institute Leaders Program, selection as a HEAL Fellowship Rising Star, and appointment as a Research Academy Scholar with the Slum and Rural Health Initiative Network (SRHIN).",
      "Complementing his academic pursuits, Nelson recently completed an internship at Hope Radiology Centre, Delta State, where he gained practical exposure to diagnostic imaging. He also served as Project Director for Project Bridge, leading community outreach initiatives aimed at increasing awareness of urinary tract infections (UTIs) in underserved communities.",
      "Passionate about mentoring fellow students, Nelson recently spoke at a webinar organized by the Anatomy Students' Society of Nigeria (ASSON), Rivers State University Chapter, where he encouraged undergraduate anatomy students to look beyond academic qualifications and actively pursue opportunities that foster innovation, leadership, and professional growth.",
    ],
    areasOfInterest: [
      'Neuroscience',
      'Medical Education',
      'Artificial Intelligence in Healthcare',
      'Digital Health',
      'Health Innovation',
      'Community Engagement',
    ],
    closing:
      'At SECAN, we are proud to celebrate undergraduate members like Nelson Ejumedia, whose vision, initiative, and dedication continue to demonstrate the limitless potential of the next generation of anatomists. We congratulate Nelson on his remarkable achievements and look forward to his continued contributions to anatomical sciences, biomedical innovation, and healthcare in Nigeria and beyond.',
  },
]

export function getMemberBySlug(slug) {
  return memberSpotlights.find((m) => m.slug === slug)
}