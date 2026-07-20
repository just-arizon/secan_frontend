import { useNavigate } from 'react-router-dom'
import { LogOut, User, CreditCard, Calendar, FileText } from 'lucide-react'

const mockMember = {
  name: 'Demo Member',
  category: 'Full Membership',
  status: 'Active',
  renewalDate: '31 Dec 2026',
  duesOwed: '₦0',
}

export default function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    sessionStorage.removeItem('secan_portal_demo_user')
    navigate('/member-portal')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Welcome back, {mockMember.name}</h1>
          <p className="text-sm text-gray-500">{mockMember.category} · {mockMember.status}</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-300 rounded px-3 py-2 hover:bg-gray-50 transition"
        >
          <LogOut size={14} /> Sign out
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="border border-gray-200 rounded-xl p-4">
          <CreditCard className="text-green-700 mb-2" size={20} />
          <p className="text-xs text-gray-500">Dues owed</p>
          <p className="text-lg font-bold text-gray-900">{mockMember.duesOwed}</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <Calendar className="text-green-700 mb-2" size={20} />
          <p className="text-xs text-gray-500">Renewal date</p>
          <p className="text-lg font-bold text-gray-900">{mockMember.renewalDate}</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <User className="text-green-700 mb-2" size={20} />
          <p className="text-xs text-gray-500">Status</p>
          <p className="text-lg font-bold text-gray-900">{mockMember.status}</p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-6 text-center text-sm text-gray-500">
        <FileText className="mx-auto mb-2 text-gray-400" size={22} />
        Member resources, event registrations, and payment history will appear here once connected
        to the SECAN backend.
      </div>
    </div>
  )
}