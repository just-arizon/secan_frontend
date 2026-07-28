import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import {
  membershipIntro,
  membershipCategories,
  membershipBenefits,
  registrationFee,
  annualDues,
} from '@/data/membership'

const initialState = {
  title: '',
  firstName: '',
  middleName: '',
  lastName: '',
  gender: '',
  dob: '',
  email: '',
  phone: '',
  address: '',
  country: '',
  state: '',
  institution: '',
  department: '',
  position: '',
  qualification: '',
  specialization: '',
  category: '',
  otherMemberships: '',
  researchInterests: '',
  certifyTrue: false,
  agreeConstitution: false,
}

const inputClass =
  'w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700'
const labelClass = 'block text-xs font-semibold text-gray-700 mb-1.5'

function Field({ label, children }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-4 mt-10 first:mt-0">
      {children}
    </h2>
  )
}

export default function BecomeMember() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.certifyTrue || !form.agreeConstitution) {
      setError('Please confirm both declaration checkboxes before submitting.')
      return
    }
    if (!form.firstName || !form.lastName || !form.email || !form.category) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')

    // TEMPORARY: no backend yet. Replace with a real API call, e.g.:
    // await fetch('/api/membership/apply', { method: 'POST', body: JSON.stringify(form) })
    console.log('Membership application submitted:', form)
    setSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Intro */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Membership</h1>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-14">{membershipIntro}</p>

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

      {/* Benefits */}
      <h2 className="text-lg font-bold text-green-700 uppercase mb-2">Membership Benefits</h2>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-6">
        SECAN offers valuable opportunities for professional growth, networking, leadership, and
        lifelong learning. As a SECAN member, you can enjoy:
      </p>
      <ul className="space-y-2.5 mb-14">
        {membershipBenefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
            <CheckCircle2 className="text-green-700 flex-shrink-0 mt-0.5" size={16} />
            {b}
          </li>
        ))}
      </ul>

      {/* Apply / Renew CTA */}
      <div
        className="rounded-xl p-6 md:p-8 text-white mb-14"
        style={{ background: 'rgba(21,87,52,1)' }}
      >
        <h2 className="text-lg font-bold mb-2">Ready to Join SECAN?</h2>
        <p className="text-sm text-white/85 leading-relaxed mb-5 max-w-lg">
          Complete the online membership application and become part of a vibrant community
          committed to advancing anatomical sciences in Nigeria and beyond.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#application-form"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
          >
            → Apply for Membership
          </a>
          <a
            href="mailto:info@secanigeria.org?subject=Membership Renewal"
            className="border border-white text-white hover:bg-white/10 text-sm font-semibold px-5 py-2.5 rounded transition"
          >
            → Renew Your Membership
          </a>
        </div>
      </div>

      {/* Registration & Annual Dues */}
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
      <p className="text-xs text-gray-400 leading-relaxed mb-14">
        Payments should be made through official SECAN payment channels. Details will be
        provided during the application or renewal process. For enquiries regarding payments or
        membership status, please{' '}
        <Link to="/contact" className="text-green-700 font-semibold hover:underline">
          contact the secretariat
        </Link>
        .
      </p>

      {/* Application Form */}
      <div id="application-form" className="border-t border-gray-200 pt-14">
        <h2 className="text-lg font-bold text-green-700 uppercase mb-2">
          Membership Application
        </h2>

        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <CheckCircle2 className="text-green-700 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Thank you for applying to SECAN. Your application will be reviewed, and if
              approved, you will receive an email with instructions to complete your
              registration and access the SECAN Member Portal.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                {error}
              </p>
            )}

            <SectionHeading>Personal Information</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Field label="Title">
                <select className={inputClass} value={form.title} onChange={(e) => update('title', e.target.value)}>
                  <option value="">Select</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </select>
              </Field>
              <Field label="First Name *">
                <input className={inputClass} value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
              </Field>
              <Field label="Middle Name">
                <input className={inputClass} value={form.middleName} onChange={(e) => update('middleName', e.target.value)} />
              </Field>
              <Field label="Last Name *">
                <input className={inputClass} value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Gender">
                <select className={inputClass} value={form.gender} onChange={(e) => update('gender', e.target.value)}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Field>
              <Field label="Date of Birth">
                <input type="date" className={inputClass} value={form.dob} onChange={(e) => update('dob', e.target.value)} />
              </Field>
            </div>

            <SectionHeading>Contact Information</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email Address *">
                <input type="email" className={inputClass} value={form.email} onChange={(e) => update('email', e.target.value)} />
              </Field>
              <Field label="Phone Number">
                <input className={inputClass} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
              </Field>
            </div>
            <Field label="Residential Address">
              <input className={inputClass} value={form.address} onChange={(e) => update('address', e.target.value)} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Country">
                <input className={inputClass} value={form.country} onChange={(e) => update('country', e.target.value)} />
              </Field>
              <Field label="State">
                <input className={inputClass} value={form.state} onChange={(e) => update('state', e.target.value)} />
              </Field>
            </div>

            <SectionHeading>Professional Information</SectionHeading>
            <Field label="Institution/Organisation">
              <input className={inputClass} value={form.institution} onChange={(e) => update('institution', e.target.value)} />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Department/Unit">
                <input className={inputClass} value={form.department} onChange={(e) => update('department', e.target.value)} />
              </Field>
              <Field label="Position">
                <input className={inputClass} value={form.position} onChange={(e) => update('position', e.target.value)} />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Highest Qualification">
                <input className={inputClass} value={form.qualification} onChange={(e) => update('qualification', e.target.value)} />
              </Field>
              <Field label="Area of Specialization">
                <input className={inputClass} value={form.specialization} onChange={(e) => update('specialization', e.target.value)} />
              </Field>
            </div>

            <SectionHeading>Membership Details</SectionHeading>
            <Field label="Membership Category *">
              <select className={inputClass} value={form.category} onChange={(e) => update('category', e.target.value)}>
                <option value="">Select a category</option>
                <option>Full Membership</option>
                <option>Associate Membership</option>
                <option>Student Membership</option>
                <option>Honorary Membership</option>
              </select>
            </Field>
            <Field label="Other Professional Society Memberships (optional)">
              <input className={inputClass} value={form.otherMemberships} onChange={(e) => update('otherMemberships', e.target.value)} />
            </Field>
            <Field label="Research Interests">
              <textarea rows={3} className={inputClass} value={form.researchInterests} onChange={(e) => update('researchInterests', e.target.value)} />
            </Field>

            <SectionHeading>Declaration</SectionHeading>
            <label className="flex items-start gap-2.5 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={form.certifyTrue}
                onChange={(e) => update('certifyTrue', e.target.checked)}
              />
              I certify that the information provided is true and accurate.
            </label>
            <label className="flex items-start gap-2.5 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={form.agreeConstitution}
                onChange={(e) => update('agreeConstitution', e.target.checked)}
              />
              I agree to abide by the Constitution and regulations of the Society of Experimental
              and Clinical Anatomists of Nigeria (SECAN).
            </label>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-3 rounded transition mt-6"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  )
}