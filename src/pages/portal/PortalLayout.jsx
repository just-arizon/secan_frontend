import { Navigate, Outlet } from 'react-router-dom'

export default function PortalLayout() {
  const demoUser = sessionStorage.getItem('secan_portal_demo_user')

  if (!demoUser) {
    return <Navigate to="/member-portal" replace />
  }

  return <Outlet />
}