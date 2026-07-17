// src/components/sections/FeaturedEventBenefits.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Microscope, GraduationCap, Users, Briefcase } from 'lucide-react'
import conferenceImage from '@/assets/events/conference-2027.jpg'

export function FeaturedEventBenefits() {
  const benefits = [
    {
      icon: Microscope,
      title: 'Research',
      description: 'Access funding opportunities, collaborations and resources.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Workshops, training and teaching resources to enhance skills.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with anatomists locally and internationally.',
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Mentorship, scholarships and career advancement opportunities.',
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Featured Event Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden min-h-[320px] flex flex-col justify-end"
        >
          {/* Background image */}
          <img
            src={conferenceImage}
            alt="SECAN Annual Scientific Conference 2027"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay — same left-to-right technique as the Hero section */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(21,87,52,0.95) 0%, rgba(21,87,52,0.85) 30%, rgba(21,87,52,0.4) 60%, rgba(21,87,52,0.05) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-10">
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded mb-4 w-fit">
              UPCOMING EVENT
            </span>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
              SECAN Annual Scientific Conference 2027
            </h2>

            {/* <p className="text-yellow-400 text-sm font-medium mb-4">
              Theme: Advancing Anatomy for Health, Innovation and Sustainable Development
            </p> */}

            <div className="flex flex-col gap-1 text-white/90 text-sm mb-5">
              <div className="flex items-center gap-2">
                {/* <Calendar size={16} /> */}
                {/* <span>19th – 22nd August, 2027</span> */}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className='font-bold'>Federal University of Lafia, Nasarawa State, Nigeria</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/events/conference/register"
                className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2.5 rounded transition"
              >
                Register Now
              </Link>
              <Link
                to="/events/conference/submit-abstract"
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded transition"
              >
                Submit Abstract
              </Link>
              <Link
                to="/events/conference/sponsor"
                className="border border-white/70 text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-white/10 transition"
              >
                Become Sponsor
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right: Membership Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <div className="mb-6">
            <h2 className="text-lg font-bold text-green-700 uppercase">
              MEMBERSHIP BENEFITS
            </h2>
            <div className="w-full bg-gray-200 h-1 rounded relative">
              <div className="bg-green-700 w-50 h-1 absolute rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow"
                >
                  <Icon className="text-green-700" size={28} strokeWidth={1.75} />
                  <h3 className="font-bold text-sm text-gray-900 uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-snug">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}