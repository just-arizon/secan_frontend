import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

export default function PortalLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    // TEMPORARY: no backend yet. This just simulates a logged-in state.
    // Replace with a real API call once auth is available:
    // const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    sessionStorage.setItem('secan_portal_demo_user', email)
    navigate('/member-portal/dashboard')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto mb-3">
            <LogIn size={20} />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Member Portal</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to access your membership dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
              {error}
            </p>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700/30 focus:border-green-700"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-2.5 rounded transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
           Don't have an account yet?{' '}
          <Link to="/membership/apply" className="text-green-700 font-semibold hover:underline">
            Create an account?
          </Link>
        </p>
        <p className="text-xs text-gray-400 text-center mt-1 mb-3">
         {' '}
          <Link to="/membership/apply" className="text-green-700 font-semibold hover:underline">
            Forget password?
          </Link>
        </p>
      </div>
    </div>
  )
}