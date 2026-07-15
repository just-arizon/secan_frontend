import { motion } from 'framer-motion'
import { council, councilIntro } from '@/data/executiveCouncil'

const tierColors = {
  1: 'bg-green-700 text-white',
  2: 'bg-green-600 text-white',
  3: 'bg-green-50 text-green-800 border border-green-200',
  4: 'bg-amber-50 text-amber-800 border border-amber-200',
  5: 'bg-gray-100 text-gray-600 border border-gray-200',
}

function initials(name) {
  return name
    .replace(/,.*$/, '')
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

function MemberCard({ member, size = 'md' }) {
  const isLarge = size === 'lg'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div
        className={`mx-auto flex items-center justify-center rounded-full font-bold mb-3 ${
          isLarge ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg'
        } ${tierColors[member.tier]}`}
      >
        {initials(member.name)}
      </div>
      <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-green-700 mb-1">
        {member.role}
      </span>
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-base' : 'text-sm'}`}>
        {member.name}
      </h3>
      <p className="text-xs text-gray-500 mt-1">{member.title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{member.institution}</p>
    </motion.div>
  )
}

function Connector() {
  return <div className="w-px h-8 bg-gray-200 mx-auto" />
}

export default function ExecutiveCouncil() {
  const byTier = (n) => council.filter((m) => m.tier === n)

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#fafaf8',
        backgroundImage:
          'radial-gradient(circle, rgba(21,87,52,0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Soft directional glow, top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(21,87,52,0.10) 0%, rgba(21,87,52,0) 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Executive Council {councilIntro.term}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Executive Council</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{councilIntro.description}</p>
        </div>

        {/* Tier 1 — President */}
        <Connector />
        <div className="max-w-xs mx-auto mb-2">
          <MemberCard member={byTier(1)[0]} size="lg" />
        </div>

        {/* Tier 2 — Vice President */}
        <Connector />
        <div className="max-w-xs mx-auto mb-2">
          <MemberCard member={byTier(2)[0]} />
        </div>

        {/* Tier 3 — core officers */}
        <Connector />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-2">
          {byTier(3).map((m) => (
            <MemberCard key={m.role} member={m} />
          ))}
        </div>

        {/* Tier 4 — editors */}
        <Connector />
        <div className="grid grid-cols-2 gap-5 max-w-lg mx-auto mb-2">
          {byTier(4).map((m) => (
            <MemberCard key={m.role} member={m} />
          ))}
        </div>

        {/* Tier 5 — ex-officio */}
        <Connector />
        <div className="grid grid-cols-2 gap-5 max-w-lg mx-auto">
          {byTier(5).map((m) => (
            <MemberCard key={m.role} member={m} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-xl p-8 text-center text-white"
          style={{ background: 'rgba(21,87,52,1)' }}
        >
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3">Leadership in Service</h2>
          <p className="text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
            {councilIntro.closing}
          </p>
        </motion.div>
      </div>
    </div>
  )
}