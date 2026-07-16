import { Link } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto text-center py-24 px-4">
        <p className="text-5xl font-bold text-green-700 mb-3">404</p>
        <h1 className="text-lg font-semibold text-gray-900 mb-2">Page not found</h1>
        <p className="text-sm text-gray-500 mb-6">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
        >
          Back to home
        </Link>
      </div>
      <Footer />
    </div>
  )
}