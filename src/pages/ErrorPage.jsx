// pages/ErrorPage.jsx
import { useRouteError } from 'react-router-dom'
import NotFound from './NotFound'

export default function ErrorPage() {
  const error = useRouteError()
  if (error?.status === 404) return <NotFound />

  // genuine crash — different message
  return (
    <div className="text-center py-24">
      <p className="text-sm text-gray-500">Something went wrong. Please try again.</p>
    </div>
  )
}