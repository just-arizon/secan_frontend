import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { membershipCategories } from '@/data/membership'
import { memberSpotlights } from '@/data/memberSpotlight'

export default function Join() {
  const featured = memberSpotlights[0]

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 text-white text-center"
        style={{ background: 'rgba(21,87,52,1)' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Become Part of Nigeria's Anatomical Sciences Community
          </motion.h1>
          <p className="text-white/85 text-sm mb-8 leading-relaxed">
            Join a growing network of anatomists, researchers, educators, and students advancing
            excellence in experimental and clinical Anatomy across Nigeria and beyond.
          </p>
          <Link
            to="/membership/apply-for-membership"
            className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded transition"
          >
            Start your Application
          </Link>
        </div>
      </section>


      {/* Categories preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-green-700 uppercase mb-6 text-center">
            Choose Your Membership Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {membershipCategories.slice(0, 3).map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.name} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <Icon className="text-green-700 mx-auto mb-3" size={26} strokeWidth={1.75} />
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{cat.name}</h3>
                  <span className="text-xs text-green-700 font-semibold">{cat.dues}</span>
                </div>
              )
            })}
          </div>
          <div className="text-center">
            <Link
              to="/membership/categories"
              className="text-sm font-semibold text-green-700 hover:underline"
            >
              See all categories & benefits →
            </Link>
          </div>
        </div>
      </section>

      {/* Member voice */}
      {featured && (
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <img
            src={featured.photo}
            alt={featured.name}
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-lg italic text-gray-800 mb-3">"{featured.quote}"</p>
          <p className="text-sm text-gray-500">
            {featured.name} · {featured.institution}
          </p>
        </section>
      )}

      {/* Final CTA */}

    </div>
  )
}