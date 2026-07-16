
import heroImage from '@/assets/news/esom-lecture-hero.png'
import gallery1 from '@/assets/news/esom-lecture-1.png'
import gallery2 from '@/assets/news/esom-lecture-2.png'
import gallery3 from '@/assets/news/esom-lecture-3.png'

export const newsArticles = [
  {
    slug: 'esom-244th-inaugural-lecture',
    category: 'News',
    date: 'July 2026',
    readingTime: '4 mins',
    author: 'SECAN Editorial Unit',
    title: "SECAN National President Delivers University of Nigeria's 244th Inaugural Lecture",
    dek: "Professor Emmanuel Esom presents a compelling discourse on safeguarding the brain's natural defence systems in a landmark inaugural lecture.",
    heroImage,
    heroCaption:
      'Professor Emmanuel Esom delivering the 244th Inaugural Lecture at the University of Nigeria, Enugu Campus (UNEC).',
    lectureTitle:
      '"The Vault and the Vandals: Keeping Watch against the Inadvertent Breach to Nature\'s Best Neural Defence"',
    intro:
      'On Thursday, 25 June 2026, the Society of Experimental and Clinical Anatomists of Nigeria (SECAN) celebrated a proud milestone as its National President, Professor Emmanuel Esom, delivered the 244th Inaugural Lecture of the University of Nigeria, Nsukka (UNN) at the University of Nigeria Enugu Campus (UNEC).',
    body: [
      'The lecture brought together academics, clinicians, researchers, students, and distinguished guests for a thought-provoking exploration of the brain\'s natural protective systems. Drawing on contemporary advances in neuroscience and structural anatomy, Professor Esom examined the intricate biological mechanisms that safeguard the human nervous system, while highlighting the growing impact of environmental exposures, toxic agents, and modern lifestyle factors that can compromise these vital neural defences.',
    ],
    quote:
      'Protecting the brain begins with understanding the remarkable biological systems designed to defend it — and the factors that threaten those defences.',
    highlights: [
      {
        emoji: '🧠',
        title: "Understanding Nature's Neural Defence",
        text: 'An engaging overview of the sophisticated anatomical and physiological barriers that protect the brain and central nervous system, fundamental to maintaining neurological health.',
      },
      {
        emoji: '⚠️',
        title: 'The "Vandals"',
        text: 'An examination of environmental, chemical, and lifestyle-related factors capable of compromising these protective systems, and how they contribute to neurological dysfunction.',
      },
      {
        emoji: '🛡',
        title: 'A Call for Prevention',
        text: 'A call for public awareness, investment in neuroscience research, and stronger collaboration among anatomists, clinicians, and public health professionals.',
      },
    ],
    whyMatters:
      'The lecture reaffirmed the indispensable role of anatomical science in advancing neuroscience, improving clinical practice, and addressing emerging public health challenges. His presentation also reflects SECAN\'s mission of promoting excellence in anatomical education, research, and clinical translation while fostering scientific collaboration that benefits society.',
    congrats:
      "On behalf of the Executive Council and the entire membership of the Society of Experimental and Clinical Anatomists of Nigeria, we extend our heartfelt congratulations to Professor Emmanuel Esom on this outstanding academic achievement. His exemplary leadership, distinguished scholarship, and unwavering commitment to advancing anatomical sciences continue to inspire students, educators, researchers, and clinicians across Nigeria and beyond. We also congratulate the University of Nigeria, Nsukka, for sustaining the proud tradition of inaugural lectures that celebrate scholarly excellence.",
    gallery: [
      { image: gallery1, caption: 'Members of the University management and professional colleagues in attendance.' },
      { image: gallery2, caption: 'Members of the Nigerian Medical Association (Enugu State Chapter) in attendance.' },
      { image: gallery3, caption: 'Presentation of a commemorative plaque to Prof. Esom following the lecture.' },
    ],
  },
]

export function getNewsBySlug(slug) {
  return newsArticles.find((a) => a.slug === slug)
}