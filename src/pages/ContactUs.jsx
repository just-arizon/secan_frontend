import { useState } from 'react'
import { Mail, Globe, CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700'
const labelClass = 'block text-xs font-semibold text-gray-700 mb-1.5'

// const socialLinks = [
//   { icon: Twitter, href: 'https://twitter.com/secanigeria', label: 'Twitter' },

// ]

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')

    // TEMPORARY: no backend yet. Replace with a real API call, e.g.:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-10">
        Thank you for your interest in the Society of Experimental and Clinical Anatomists of
        Nigeria (SECAN). For enquiries regarding membership, conferences, publications,
        partnerships, or any other Society activities, please contact us using the information
        below or complete the contact form.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left: Contact info + social */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-4">
              Contact Information
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:info@secanigeria.org"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 transition"
              >
                <Mail size={16} className="text-green-700" /> info@secanigeria.org
              </a>
              <a
                href="https://www.secanigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 transition"
              >
                <Globe size={16} className="text-green-700" /> www.secanigeria.org
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-3">
              Connect With Us
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Follow SECAN on our official social media platforms for the latest news, conference
              updates, educational activities, and announcements.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-green-50 text-green-700 flex items-center justify-center hover:bg-green-700 hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="text-green-700 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-1.5">Message Sent</h3>
              <p className="text-sm text-gray-500">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                  {error}
                </p>
              )}

              <div>
                <label className={labelClass}>Name *</label>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input
                  className={inputClass}
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-2.5 rounded transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}