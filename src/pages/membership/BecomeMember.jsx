import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import {
  membershipIntro,
  membershipCategories,
  membershipBenefits,
  registrationFee,
  annualDues,
} from '@/data/membership'
import { motion } from 'framer-motion'

export default function BecomeMember() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
       <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-6 hover:underline"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>


      {/* Intro */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Become A Member</h1>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-14">{membershipIntro}</p>

        {/* Why join */}
      <section className="mt-4 mb-12">
        <h2 className="text-xl font-bold text-green-700 uppercase mb-6">
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

      {/* Categories */}
      <h2 className="text-lg font-bold text-green-700 uppercase mb-2">Membership Categories</h2>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-8">
        SECAN offers a range of membership categories designed to accommodate professionals,
        trainees, and distinguished contributors to the anatomical sciences.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {membershipCategories.map((cat) => {
          const Icon = cat.icon
          return (
            <div key={cat.name} className="border border-gray-200 rounded-xl p-5">
              <Icon className="text-green-700 mb-3" size={26} strokeWidth={1.75} />
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">{cat.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
            </div>
          )
        })}
      </div>

      
      {/* Registration & Annual Dues */}
      <section className="">
        <h2 className="text-lg font-bold text-green-700 uppercase mb-2">
          Registration &amp; Annual Dues
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          SECAN membership is subject to a one-time registration fee and annual membership dues in
          accordance with the Society's Constitution.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Registration Fee — {registrationFee.amount}
          </p>
          <p className="text-xs text-gray-500">{registrationFee.note}</p>
        </div>
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden mb-6">
          <thead>
            <tr className="bg-green-700 text-white text-left">
              <th className="px-4 py-2.5 font-semibold">Membership Category</th>
              <th className="px-4 py-2.5 font-semibold">Annual Dues</th>
            </tr>
          </thead>
          <tbody>
            {annualDues.map((row, i) => (
              <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2.5 text-gray-700">{row.category}</td>
                <td className="px-4 py-2.5 text-gray-700">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-400 leading-relaxed mb-2">
          Please note: annual dues are payable at the beginning of each calendar year. Fees are
          subject to review and approval by the Society in accordance with the SECAN Constitution.
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Payments should be made through official SECAN payment channels. Details will be
          provided during the application or renewal process. For enquiries regarding payments or
          membership status, please{' '}
          <Link to="/contact" className="text-green-700 font-semibold hover:underline">
            contact the secretariat
          </Link>
          .
        </p>
      </section>

      {/* Apply / Renew CTA */}
      <div
        className="rounded-xl p-6 md:p-8 text-white my-14"
        style={{ background: 'rgba(21,87,52,1)' }}
      >
        <h2 className="text-lg font-bold mb-2">Ready to Join SECAN?</h2>
        <p className="text-sm text-white/85 leading-relaxed mb-5 max-w-lg">
          Complete the online membership application and become part of a vibrant community
          committed to advancing anatomical sciences in Nigeria and beyond.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/membership/apply-for-membership"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
          >
            → Apply for Membership
          </Link>
          <a
            href="mailto:info@secanigeria.org?subject=Membership Renewal"
            className="border border-white text-white hover:bg-white/10 text-sm font-semibold px-5 py-2.5 rounded transition"
          >
            → Renew Your Membership
          </a>
        </div>
      </div>

    </div>
  )
}