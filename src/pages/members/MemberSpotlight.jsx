import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getMemberBySlug } from '@/data/memberSpotlight'

export async function memberSpotlightLoader({ params }) {
  const member = getMemberBySlug(params.slug)
  if (!member) throw new Response('Not found', { status: 404 })
  return member
}

export default function MemberSpotlight() {
  const { slug } = useParams()
  const member = getMemberBySlug(slug)

  if (!member) return null // errorElement handles missing data via the loader

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-6 hover:underline"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <div className="text-xs font-semibold text-green-700 uppercase">Member Spotlight</div>

      <div className="flex gap-5 items-center mt-3 mb-8">
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-900">{member.name}</h1>
          <p className="text-sm text-gray-500">{member.institution}</p>
        </div>
      </div>

      <blockquote
        className="border-l-4 pl-5 py-1 text-lg italic text-gray-800 mb-8"
        style={{ borderColor: 'rgba(21,87,52,1)' }}
      >
        "{member.quote}"
      </blockquote>

      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4 mb-10">
        <p>{member.intro}</p>
        {member.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-3">
        Areas of Interest
      </h2>
      <div className="flex flex-wrap gap-2 mb-10">
        {member.areasOfInterest.map((area) => (
          <span
            key={area}
            className="text-xs font-medium bg-green-50 text-green-700 px-3 py-1.5 rounded-full"
          >
            {area}
          </span>
        ))}
      </div>

      <div className="rounded-xl p-6 text-white" style={{ background: 'rgba(21,87,52,1)' }}>
        <p className="text-sm text-white/85 leading-relaxed">{member.closing}</p>
      </div>
    </article>
  )
}