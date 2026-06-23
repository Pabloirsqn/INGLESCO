import React from 'react'
import { LogOut } from 'lucide-react'
import { Logo } from '../assets/logo.jsx'

export function AppShell({ title, subtitle, nav, active, setActive, children, onNavigate, accent = 'student' }) {
  return (
    <div className="min-h-screen bg-pearl pb-24 lg:flex lg:pb-0">
      <aside className="border-b border-line bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between px-5 py-5 lg:block">
          <Logo />
          <button onClick={() => onNavigate('landing')} className="rounded-lg p-2 text-ink/60 hover:bg-mist lg:absolute lg:bottom-5 lg:left-5">
            <LogOut size={20} />
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:block lg:space-y-1 lg:overflow-visible">
          {nav.map((item) => {
            const Icon = item.icon
            const activeItem = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font900 transition lg:w-full ${
                  activeItem ? 'bg-navy text-white' : 'text-ink/70 hover:bg-mist hover:text-navy'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            )
          })}
        </nav>
      </aside>
      <main className="w-full lg:pl-72">
        <header className={`border-b border-line bg-white px-5 py-6 sm:px-8 ${accent === 'admin' ? 'bg-gradient-to-r from-white to-blue-50' : ''}`}>
          <p className="text-sm font900 uppercase tracking-[0.18em] text-cobalt">INGLESCO 2.0</p>
          <h1 className="mt-2 text-3xl font-black text-navy">{title}</h1>
          <p className="mt-2 max-w-2xl text-ink/65">{subtitle}</p>
        </header>
        <div className="px-5 pb-28 pt-6 sm:px-8">{children}</div>
      </main>
    </div>
  )
}
