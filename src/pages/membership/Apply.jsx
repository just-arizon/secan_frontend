import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft } from 'lucide-react'

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
  password,
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

export default function Apply() {
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

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="text-green-700 mx-auto mb-4" size={40} />
        <h1 className="text-xl font-bold text-gray-900 mb-2">Application Submitted</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Thank you for applying to SECAN. Your application will be reviewed, and if approved,
          you will receive an email with instructions to complete your registration and access
          the SECAN Member Portal.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-6 hover:underline"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Membership Application</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-10">
        Complete the form below to apply for SECAN membership.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
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
          I agree to abide by the Constitution and regulations of the Society of Experimental and
          Clinical Anatomists of Nigeria (SECAN).
        </label>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-3 rounded transition mt-6"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}