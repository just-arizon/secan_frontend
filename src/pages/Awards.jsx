// src/pages/awards/ConferenceAwards.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mic, Image as ImageIcon, GraduationCap, Users, Award } from 'lucide-react'
// import AwardsImg from '@/assets/awards/awards.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ConferenceAwards() {
  const awardCategories = [
    {
      icon: Mic,
      title: 'Best Oral Presentation Award',
      description: 'Awarded across three categories to recognize outstanding spoken research presentations.',
      subcategories: ['Undergraduate', 'Postgraduate', 'Faculty'],
    },
    {
      icon: ImageIcon,
      title: 'Best Poster Presentation Award',
      description: 'Recognizing excellence in visual research communication and scientific poster design.',
      subcategories: [],
    },
  ]

  return (
    <>
      {/* Page Banner */}
      <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(0, 0, 0, .3), rgba(21,87,52, 0.3) 80%),
              `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.2) contrast(1.0)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5 z-30 text-white font-Manrope font-semibold text-2xl">
              Conference Awards
            </div>
          </div>
        </div>
      </motion.div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Recognizing Excellence in Anatomical Science
            </h2>
            <p className="text-gray-600 leading-relaxed">
              SECAN celebrates excellence in anatomical science, education, and scientific
              communication. Each year during our Annual Scientific Conference, outstanding
              contributions are recognized through the following awards:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardCategories.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <Icon className="text-green-700" size={26} strokeWidth={1.75} />
                </div>

                <h3 className="font-bold text-lg text-green-800 mb-3">
                  {award.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {award.description}
                </p>

                {award.subcategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {award.subcategories.map((sub, subIndex) => (
                      <span
                        key={subIndex}
                        className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        {sub === 'Undergraduate' && <GraduationCap size={12} />}
                        {sub === 'Postgraduate' && <Award size={12} />}
                        {sub === 'Faculty' && <Users size={12} />}
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Purpose Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-gray-600 leading-relaxed">
              These awards recognize research excellence, promote effective scientific
              communication, and encourage innovation among students, early-career
              researchers, and established anatomists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D7E7FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-2xl font-bold  mb-3">
              Ready to Submit Your Research?
            </h2>
            <p className=" mb-6">
              Present your work at the SECAN Annual Scientific Conference and stand a chance
              to be recognized for excellence.
            </p>
            <Link
              to="/coming-soon"
              className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded transition"
            >
              Submit Abstract
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}