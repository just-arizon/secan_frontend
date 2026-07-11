// src/pages/about/AboutUs.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, HeartHandshake } from 'lucide-react'
import AboutImg from '@/assets/about/about.jpeg'
// import councilPhoto from '@/assets/about/council.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutUs() {
  return (
    <>
      {/* Page Banner */}
      <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(0, 0, 0, .3), rgba(21,87,52, 0.3) 80%),
              url(${AboutImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.2) contrast(1.0)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5 z-30 text-white font-Manrope font-semibold text-2xl">
              About Us
            </div>
          </div>
        </div>
      </motion.div>

      {/* Intro / Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Society of Experimental and Clinical Anatomists of Nigeria was established to address the growing need for a specialized platform for anatomists whose work spans both experimental research and clinical application. Since its inception, SECAN has expanded its membership across universities and medical institutions in Nigeria, established a reputable annual scientific conference, and strengthened its academic footprint through publications and collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              text: 'To promote high-quality research in experimental and clinical anatomy, enhance teaching and learning of anatomy, foster collaboration between basic scientists and clinicians, and contribute to national development and healthcare advancement.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To be a globally recognized authority in anatomical sciences, driving innovation, research excellence, and clinical relevance in Nigeria and beyond.',
            },
            {
              icon: HeartHandshake,
              title: 'Our Values',
              text: 'Integrity, collaboration, mentorship and innovation in everything we do.',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
              >
                <Icon className="text-green-700 mx-auto mb-4" size={32} strokeWidth={1.75} />
                <h3 className="font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <motion.img
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={councilPhoto}
            alt="SECAN Executive Council"
            className="rounded-xl w-full h-auto object-cover"
          /> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-2xl font-bold text-green-800 mb-4">
              Executive Council
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SECAN is led by a dedicated council of experienced anatomists committed to
              guiding the society's growth, upholding academic standards, and representing
              Nigeria on the global anatomical sciences stage.
            </p>
            <Link
              to="/about/council"
              className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
            >
              Meet the Council
            </Link>
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
              Join a Growing Community of Anatomists
            </h2>
            <p className=" mb-6">
              Become part of SECAN and connect with a nationwide network dedicated to
              advancing anatomical sciences.
            </p>
            <Link
              to="/membership/apply"
              className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded transition"
            >
              Become a Member
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}