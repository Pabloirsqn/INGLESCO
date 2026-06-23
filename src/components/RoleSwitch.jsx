import React from 'react'
import { Globe2, ShieldCheck, UserRound, UsersRound } from 'lucide-react'

const roles = [
  { id: 'landing', label: 'Landing', icon: Globe2 },
  { id: 'plans', label: 'Planes', icon: Globe2 },
  { id: 'student', label: 'Estudiante', icon: UserRound },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
  { id: 'ambassador', label: 'Embajador', icon: UsersRound },
]

export function RoleSwitch({ current, onChange }) {
  return (
    <div className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 rounded-full border border-white/60 bg-white/90 p-1.5 shadow-soft backdrop-blur sm:bottom-4 sm:w-[calc(100%-2rem)]">
      <div className="grid grid-cols-5 gap-1">
        {roles.map((role) => {
          const Icon = role.icon
          const active = current === role.id
          return (
            <button
              key={role.id}
              className={`flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font800 transition sm:text-sm ${
                active ? 'bg-navy text-white shadow-glow' : 'text-ink hover:bg-mist'
              }`}
              onClick={() => onChange(role.id)}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{role.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
