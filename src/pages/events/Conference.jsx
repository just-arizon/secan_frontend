import { motion } from 'framer-motion'
import { CalendarCheck, MapPin } from 'lucide-react'
import { upcomingConference, pastConferences } from '@/data/meetingsEvents'
import { Link } from 'react-router-dom'

export default function Conference() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Annual Scientific Conference</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-2xl">
        SECAN's Annual Scientific Conference and General Meeting is the Society's flagship
        event, bringing together anatomists and biomedical scientists from across Nigeria and
        beyond for scientific exchange and professional collaboration.
      </p>

      {/* Upcoming */}
      <section
        className="rounded-xl p-6 md:p-8 text-white mb-12"
        style={{ background: 'rgba(21,87,52,1)' }}
      >
        <span className="inline-block bg-white/15 border border-white/40 text-white text-[11px] font-semibold px-3 py-1 rounded mb-3 w-fit">
          UPCOMING CONFERENCE
        </span>
        <h2 className="text-xl font-bold mb-3">{upcomingConference.title}</h2>
        <p className="flex items-center gap-2 text-sm text-white/85 mb-2">
          <MapPin size={14} /> {upcomingConference.location}
        </p>
        <Link to="/events/upcoming-events"
        className='text-sm bg-white text-black px-5 py-1 '
        >
         View
        </Link>
      </section>

      {/* Past */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-4">
          Previous Conferences
        </h2>
        <div className="space-y-3">
          {pastConferences.map((conf, i) => (
            <motion.div
              key={conf.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-gray-200 rounded-xl p-4"
            >
              <h3 className="font-semibold text-sm text-gray-900 mb-1.5">{conf.title}</h3>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CalendarCheck size={12} /> {conf.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> {conf.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}