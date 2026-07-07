
import { motion } from 'framer-motion'
import { Users, Building2, CalendarDays, UsersRound, BookOpen, MapPin } from 'lucide-react'

export function StatsBar() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Members' },
    { icon: Building2, value: '50+', label: 'Institutions Represented' },
    { icon: CalendarDays, value: '30+', label: 'Years of Excellence' },
    { icon: UsersRound, value: 'Annual', label: 'Scientific Meeting' },
    { icon: BookOpen, value: 'Official Journal', label: 'JECA' },
    { icon: MapPin, value: '36', label: 'States Represented' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#D7E7FB] rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 py-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon className="text-green-700" size={28} strokeWidth={1.75} />
                <span className="text-sm md:text-lg font-extrabold text-green-900">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-gray-500 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
