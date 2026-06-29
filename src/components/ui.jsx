import React from 'react'

export function SectionTitle({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font900 uppercase tracking-[0.18em] text-cobalt">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-ink/75">{text}</p>}
      <div className={`mt-5 h-1.5 w-20 rounded-full bg-cobalt ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-cobalt bg-white text-navy hover:bg-mist'
      : variant === 'ghost'
        ? 'text-navy hover:bg-mist'
        : 'bg-cobalt text-white shadow-glow hover:bg-blue-600'

  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font900 transition ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function Card({ children, className = '' }) {
  const hasCustomBg = /\bbg-/.test(className)
  return <div className={`rounded-lg border border-line ${hasCustomBg ? '' : 'bg-white'} shadow-soft ${className}`}>{children}</div>
}

export function Badge({ children, tone = 'blue' }) {
  const tones = {
    blue: 'bg-blue-50 text-cobalt',
    navy: 'bg-navy text-white',
    green: 'bg-emerald-50 text-emerald-700',
    mint: 'bg-emerald-100 text-emerald-800',
    locked: 'bg-slate-100 text-slate-600',
  }
  return <span className={`rounded-full px-3 py-1 text-xs font900 ${tones[tone]}`}>{children}</span>
}

export function ProgressBar({ value }) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-mist">
      <div className="h-full rounded-full bg-cobalt" style={{ width: `${value}%` }} />
    </div>
  )
}

export function StatCard({ label, value, note, icon: Icon }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font800 text-ink/60">{label}</p>
          <p className="mt-2 text-2xl font-black text-navy">{value}</p>
          <p className="mt-1 text-sm text-ink/60">{note}</p>
        </div>
        {Icon && (
          <div className="rounded-lg bg-blue-50 p-3 text-cobalt">
            <Icon size={22} />
          </div>
        )}
      </div>
    </Card>
  )
}
