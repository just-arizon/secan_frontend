import { useLoaderData, Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'
import { events } from '@/data/events'

export async function eventsLoader() {
  // swap this for a real fetch once the Laravel API is ready:
  // const res = await fetch('/api/events?status=upcoming')
  // return res.json()
  return events
}

export default function Upcoming() {
  const events = useLoaderData()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>

      {events.length === 0 ? (
        <p className="text-sm text-gray-500 py-12 text-center">
          No upcoming events right now — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <article
              key={event.slug}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-32 bg-gray-100 overflow-hidden">
                <img src={event.image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">{event.title}</h3>

                <div className="text-xs text-gray-500 space-y-1 mb-3">
                  {/* <p className="flex items-center gap-1.5">
                    <Calendar size={12} /> {event.date}
                  </p> */}
                  <p className="flex items-center gap-1.5">
                    <MapPin size={12} /> {event.location}
                  </p>
                </div>

                <Link
                  to={`/${event.slug}`}
                  className="block text-center text-xs font-semibold border border-gray-300 rounded py-1.5 hover:bg-gray-50 transition"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}