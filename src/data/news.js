
import heroImage from '@/assets/news/esom-lecture-hero.png'
import gallery1 from '@/assets/news/esom-lecture-1.png'
import gallery2 from '@/assets/news/esom-lecture-2.png'
import gallery3 from '@/assets/news/esom-lecture-3.png'
import fulafiaHero from '@/assets/news/fulafia.png'

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

  {
    slug: 'fulafia-to-host-secan-2027',
    category: 'Conferences',
    date: '26 March 2026',
    readingTime: '3 mins',
    author: 'SECAN Publicity Unit',
    title: 'Federal University of Lafia Selected to Host SECAN 2027 Conference',
    dek: "Federal University of Lafia to host SECAN's 25th Scientific Conference and Annual General Meeting.",
    heroImage: fulafiaHero, // import this at the top like the others
    heroCaption:
      'Federal University of Lafia, Nasarawa State — host institution for SECAN 2027.',
    intro:
      'The Federal University of Lafia (FULafia), Nasarawa State, Nigeria, has been selected as the host institution for the 25th Scientific Conference and Annual General Meeting (AGM) of the Society of Experimental and Clinical Anatomists of Nigeria (SECAN), scheduled to be held in 2027.',
    body: [
      "The announcement was made during the Society's Annual General Meeting on 26 March 2026, held as part of the 24th Scientific Conference and Annual General Meeting at Delta State University, Abraka. The decision followed the successful presentation of the hosting bid by the Federal University of Lafia and its subsequent approval by the Society's members.",
      "The successful bid was presented by Professor Sunday A. Musa of the Department of Anatomy, Federal University of Lafia, highlighting the University's preparedness, infrastructure, and commitment to hosting a conference that reflects SECAN's enduring tradition of scientific excellence, innovation, and professional engagement.",
      'Following the presentation, members of the Society unanimously endorsed the bid, officially confirming the Federal University of Lafia as the host institution for SECAN\'s 2027 Annual Scientific Conference and Annual General Meeting.',
      "As SECAN's flagship scientific event, the Annual Scientific Conference and AGM serves as a premier platform for anatomists, biomedical scientists, clinicians, educators, researchers, students, and allied health professionals to present cutting-edge research, exchange ideas, build collaborations, and advance the anatomical sciences.",
      'The Society looks forward to welcoming delegates to Lafia in 2027 for another memorable conference that will promote scientific discovery, professional development, and meaningful engagement within Nigeria\'s anatomical community and beyond.',
    ],
    whyMatters:
      'Further information regarding the conference theme, important dates, abstract submission, registration, accommodation, and sponsorship opportunities will be announced through the SECAN website and official communication channels in due course.',
    congrats:
      'SECAN extends its warm congratulations to the management of the Federal University of Lafia, the Department of Anatomy, and the Local Organizing Team on the successful bid. The Society is confident that the University will provide an excellent setting for a successful conference and looks forward to working collaboratively towards delivering an outstanding scientific meeting.',
    // no `quote`, no `highlights`, no `gallery` — omitted entirely, not left as empty arrays
  },
]


export function getNewsBySlug(slug) {
  return newsArticles.find((a) => a.slug === slug)
}