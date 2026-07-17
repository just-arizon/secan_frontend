import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getNewsBySlug } from '@/data/news'

export async function newsArticleLoader({ params }) {
  const article = getNewsBySlug(params.slug)
  if (!article) throw new Response('Not found', { status: 404 })
  return article
  // later: return fetch(`/api/news/${params.slug}`).then(r => r.json())
}

export default function NewsArticle() {
  const { slug } = useParams()
  const article = getNewsBySlug(slug) // swap to useLoaderData() once loader is wired in router

  if (!article) {
    return <p className="text-center py-20 text-gray-500">Article not found.</p>
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <Link
        to="/news"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-6 hover:underline"
      >
        <ArrowLeft size={14} /> Back to news
      </Link>

      {/* Meta row */}
      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <span className="bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-full">
          {article.category}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {article.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {article.readingTime}
        </span>
      </div>

      {/* Title + dek */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3"
      >
        {article.title}
      </motion.h1>
      <p className="text-gray-500 text-sm mb-1">{article.dek}</p>
      <p className="text-xs text-gray-400 mb-8">By {article.author}</p>

      {/* Hero image */}
      <figure className="mb-8">
        <div className="rounded-xl overflow-hidden bg-gray-100 h-64 md:h-80">
          <img src={article.heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-gray-400 mt-2">{article.heroCaption}</figcaption>
      </figure>

      {/* Body */}
      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
        <p className="font-semibold text-gray-900">{article.lectureTitle}</p>
        <p>{article.intro}</p>
        {article.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Pull quote */}
     {article.quote && (
  <blockquote
    className="my-8 border-l-4 pl-5 py-1 text-lg italic text-gray-800"
    style={{ borderColor: 'rgba(21,87,52,1)' }}
  >
    "{article.quote}"
  </blockquote>
)}

      {/* Highlights */}
     {article.highlights?.length > 0 && (
  <>
    <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-4">
      Key Highlights
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {article.highlights.map((h) => (
        <div key={h.title} className="border border-gray-200 rounded-xl p-4">
          <span className="text-2xl">{h.emoji}</span>
          <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1">{h.title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{h.text}</p>
        </div>
      ))}
    </div>
  </>
)}

      {/* Why this matters */}
{article.whyMatters && (
  <>
    <h2 className="text-sm font-bold uppercase tracking-wide text-green-700 mb-3">
      Why This Matters
    </h2>
    <p className="text-sm text-gray-700 leading-relaxed mb-10">{article.whyMatters}</p>
  </>
)}

      {/* Congratulations callout */}
     {article.congrats && (
  <div className="rounded-xl p-6 text-white mb-10" style={{ background: 'rgba(21,87,52,1)' }}>
    <h2 className="text-sm font-bold uppercase tracking-wide mb-3">Congratulations from SECAN</h2>
    <p className="text-sm text-white/85 leading-relaxed">{article.congrats}</p>
  </div>
)}

      {/* Gallery */}
      {article.gallery?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {article.gallery.map((g, i) => (
            <figure key={i}>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-32">
                <img src={g.image} alt="" className="w-full h-full object-cover" />
              </div>
              <figcaption className="text-[11px] text-gray-400 mt-1.5">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  )
}