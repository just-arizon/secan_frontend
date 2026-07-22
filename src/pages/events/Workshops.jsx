import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { workshopsAndWebinars } from '@/data/meetingsEvents'

export default function Workshops() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Workshops & Webinars</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-2xl">
        SECAN organizes workshops, webinars, and professional development programmes that
        promote excellence in anatomical sciences and foster collaboration among anatomists and
        biomedical scientists.
      </p>

      <div className="space-y-4">
        {workshopsAndWebinars.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col sm:flex-row"
          >
            <div className="sm:w-40 h-32 sm:h-auto bg-gray-100 flex-shrink-0">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-sm text-gray-900 mb-1.5">{item.title}</h3>
              <p className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                <Calendar size={12} /> {item.date}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}