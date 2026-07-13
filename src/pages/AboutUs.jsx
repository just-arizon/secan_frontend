// pages/AboutUs.jsx
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      {/* About landing content — intro, nav to sub-sections, etc. */}
      <Outlet />
    </div>
  )
}