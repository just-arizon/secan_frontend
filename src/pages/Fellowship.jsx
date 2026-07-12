// src/pages/awards/Fellowship.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, ScrollText, ShieldCheck, Star } from 'lucide-react'
// import FellowshipImg from '@/assets/awards/fellowship.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Fellowship() {
  const highlights = [
    {
      icon: Star,
      title: 'Highest Honour',
      description: 'One of the Society\'s highest professional honours, conferred on distinguished members.',
    },
    {
      icon: Award,
      title: 'Exceptional Contribution',
      description: 'Recognizes sustained contributions to anatomical sciences, education, research and professional service.',
    },
    {
      icon: ScrollText,
      title: 'Constitutional Process',
      description: 'Awarded in accordance with the Society\'s Constitution and subject to Executive Council approval.',
    },
    {
      icon: ShieldCheck,
      title: 'Role Model Status',
      description: 'Recognizes individuals who have significantly advanced SECAN\'s mission and serve as role models.',
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
              SECAN Fellowship
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
              A Mark of Distinction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The SECAN Fellowship is one of the Society's highest professional honours,
              conferred upon distinguished members who have demonstrated exceptional and
              sustained contributions to the advancement of anatomical sciences, education,
              research, professional service, and the Society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-green-700" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-sm text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Detailed Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-gray-600 leading-relaxed">
              Fellowship is awarded in accordance with the Society's Constitution and is
              subject to approval by the Executive Council. It recognizes individuals whose
              achievements have significantly advanced the objectives and mission of SECAN
              and who serve as role models within the anatomical sciences community.
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
              Learn More About SECAN's Awards & Grants
            </h2>
            <p className=" mb-6">
              Explore the full range of honours and opportunities SECAN offers to
              recognize excellence in anatomical sciences.
            </p>
            <Link
              to="/coming-soon"
              className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded transition"
            >
              View Award Categories
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}