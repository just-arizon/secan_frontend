import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { membershipIntro, membershipCategories, membershipBenefits } from '@/data/membership'
import { CheckCircle2 } from 'lucide-react'


export default function Categories() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      
      {/* Why join */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Join SECAN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {membershipBenefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-4"
            >
              <CheckCircle2 className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-gray-600">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">Membership Categories</h1>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-10">{membershipIntro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {membershipCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-gray-200 rounded-xl p-5"
            >
              <Icon className="text-green-700 mb-3" size={26} strokeWidth={1.75} />
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">{cat.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{cat.description}</p>
              <span className="text-xs font-semibold text-green-700">{cat.dues}</span>
            </motion.div>
          )
        })}
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-bold text-green-700 uppercase mb-4">Membership Benefits</h2>
        <ul className="space-y-2">
          {membershipBenefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-700 mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/membership/apply-for-membership"
          className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
        >
          Apply for Membership
        </Link>
      </div>
    </div>
  )
}