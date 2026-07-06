// src/components/sections/NewsSpotlight.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import jecaCover from '@/assets/jeca-cover.png'
import newsWebinar from '@/assets/news/webinar.png'
import newsAwards from '@/assets/news/awards.png'
import newsConference from '@/assets/news/conference.png'
import memberPhoto from '@/assets/chioma-okafor.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function NewsSpotlight() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Column 1: JECA Spotlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-lg font-bold text-green-700 uppercase mb-4">
            JECA Spotlight
          </h2>

          <div className="flex gap-4">
            <img
              src={jecaCover}
              alt="JECA Journal Cover"
              className="w-30 h-auto rounded shadow-md flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-green-800 text-sm leading-snug mb-2">
                Journal of Experimental and Clinical Anatomy
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                A peer-reviewed journal publishing original research in all areas of anatomy.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  to="/publications/jeca/current-issue"
                  className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold text-center py-2 rounded transition"
                >
                  Current Issue
                </Link>
                <Link
                  to="/publications/jeca/archive"
                  className="border border-green-700 text-green-700 hover:bg-green-50 text-sm font-semibold text-center py-2 rounded transition"
                >
                  Archive
                </Link>
                <Link
                  to="/publications/jeca/guidelines"
                  className="border border-green-700 text-green-700 hover:bg-green-50 text-sm font-semibold text-center py-2 rounded transition"
                >
                  Author Guidelines
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Latest News */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-lg font-bold text-green-700 uppercase mb-4">
            Latest News
          </h2>

          <div className="flex flex-col gap-5">
            <NewsItem
              image={newsWebinar}
              title="SECAN Webinar Series Launches"
              excerpt="Interactive sessions for members and students."
              link="/news/webinar-series"
            />
            <NewsItem
              image={newsAwards}
              title="Members Receive International Awards"
              excerpt="SECAN members recognised for excellence in research."
              link="/news/international-awards"
            />
            <NewsItem
              image={newsConference}
              title="SECAN 2027 Conference Registration Opens"
              excerpt="Early bird registration now open."
              link="/news/conference-registration"
            />
          </div>

          <Link
            to="/news"
            className="block mt-5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold text-center py-2 rounded transition"
          >
            View All News
          </Link>
        </motion.div>

        {/* Column 3: Member Spotlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-bold text-green-700 uppercase mb-4">
            Member Spotlight
          </h2>

          <div className="flex gap-4">
            <img
              src={memberPhoto}
              alt="Dr. Chioma E. Okafor"
              className="w-24 h-full rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-green-800 text-base">
                Dr. Chioma E. Okafor
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                University of Nigeria, Nsukka
              </p>

              <p className="text-sm mb-2">
                <span className="font-semibold text-gray-800">Research Interest: </span>
                <span className="text-gray-600">Neuroanatomy</span>
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold text-gray-800">Recent Achievement: </span>
                <span className="text-gray-600">Awarded Best Research Presentation at IFAA 2024</span>
              </p>

              <p className="text-sm italic text-gray-500">
                "Anatomy is the foundation of medicine and the bridge to innovation."
              </p>
            </div>
          </div>

          <Link
            to="/members/chioma-okafor"
            className="block mt-5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold text-center py-2 rounded transition"
          >
            Read Her Story
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

// Reusable news item for Column 2
function NewsItem({ image, title, excerpt, link }) {
  return (
    <div className="flex gap-3">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded object-cover flex-shrink-0"
      />
      <div>
        <h3 className="font-semibold text-sm text-gray-800 leading-snug mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{excerpt}</p>
        <Link
          to={link}
          className="text-xs font-semibold text-green-700 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}