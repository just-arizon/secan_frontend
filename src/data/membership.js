import { GraduationCap, Users, UserCheck, Award, Trophy } from 'lucide-react'

export const membershipIntro =
  'SECAN welcomes professionals, academics, researchers, clinicians, educators, and trainees who are committed to advancing excellence in anatomical sciences. Membership is open to individuals in Anatomy, Medicine, Biomedical Sciences, Veterinary Anatomy, Molecular Biology, Animal Science, Allied Health Sciences, and other related disciplines.'

export const membershipCategories = [
  {
    icon: UserCheck,
    name: 'Full Membership',
    description:
      "Open to professionals in Anatomy and related disciplines who possess at least a bachelor's degree or its equivalent from a recognized institution.",
    dues: '₦15,000 / year',
  },
  {
    icon: Users,
    name: 'Associate Membership',
    description:
      'Open to postgraduate students and final-year undergraduate students in Anatomy and related disciplines preparing for professional careers in the anatomical sciences.',
    dues: '₦10,000 / year',
  },
  {
    icon: GraduationCap,
    name: 'Student Membership',
    description:
      'Open to undergraduate students enrolled in Anatomy and related biomedical programmes — a chance to engage with the Society and build professional networks early.',
    dues: 'Free',
  },
  {
    icon: Award,
    name: 'Honorary Membership',
    description:
      'Conferred upon distinguished individuals who have made outstanding contributions to the growth and advancement of anatomical sciences and SECAN in particular.',
    dues: 'By conferment',
  },
  {
    icon: Trophy,
    name: 'Fellowship (FECAN)',
    description:
      "The Society's highest professional honour, conferred on members who have served meritoriously, demonstrated sustained excellence, and made significant contributions to anatomical sciences and SECAN.",
    dues: 'By conferment',
  },
]

export const membershipBenefits = [
  'Reduced registration fees for the SECAN Annual Scientific Conference and other Society events.',
  'Opportunities to present your research at SECAN scientific meetings.',
  'Access to professional development programmes, workshops, and webinars.',
  'Networking and collaboration with other members.',
  'Eligibility to serve on SECAN committees and contribute to Society initiatives.',
  'Eligibility for Society awards, honours, and professional recognition.',
  'Regular updates on SECAN activities, conferences, and opportunities.',
]

export const registrationFee = {
  amount: '₦10,000',
  note: 'One-time registration fee, payable by all new members upon admission into the Society.',
}

export const annualDues = [
  { category: 'Full Membership', amount: '₦15,000' },
  { category: 'Associate Membership', amount: '₦10,000' },
  { category: 'Student Membership', amount: 'Free' },
]