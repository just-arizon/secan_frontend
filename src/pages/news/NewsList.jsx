// pages/news/NewsList.jsx
import { Link } from 'react-router-dom'
import { newsArticles } from '@/data/news'

export default function NewsList() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {newsArticles.map((a) => (
          <Link
            key={a.slug}
            to={`/news/${a.slug}`}
            className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-100">
              <img src={a.heroImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-green-700 uppercase">{a.category}</span>
              <h3 className="text-sm font-bold text-gray-900 mt-1 mb-1">{a.title}</h3>
              <p className="text-xs text-gray-500">{a.dek}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}