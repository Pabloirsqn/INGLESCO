import React, { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge, Button } from './ui.jsx'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Ideal para empezar a vivir el inglés con una ruta accesible, práctica y acompañada.',
    monthly: 39,
    activation: {
      normal: 25,
      invited: 19,
      savings: 6,
    },
    cta: 'Quiero empezar',
    disclaimer: 'La experiencia internacional está sujeta a avance, nivel requerido, validación académica y disponibilidad.',
    features: [
      '3 horas de clases en vivo a la semana',
      'Plataforma INGLESCO 2.0 24/7',
      'Práctica con inteligencia artificial',
      'Comunidad internacional online',
      'Clubes de conversación',
      'Materiales digitales',
      'Seguimiento de avance',
      'Ruta de preparación para experiencia internacional de 2 semanas',
    ],
  },
  {
    name: 'Global',
    description: 'Diseñado para avanzar más rápido y usar el inglés como herramienta real para trabajar, viajar, conectar y acceder a oportunidades globales.',
    monthly: 59,
    activation: {
      normal: 51,
      invited: 39,
      savings: 12,
    },
    cta: 'Quiero ir global',
    recommended: true,
    disclaimer: 'Las experiencias internacionales están sujetas a avance, nivel requerido, validación académica, perfil del alumno y disponibilidad.',
    features: [
      'Todo lo del Plan Starter',
      '6 horas de clases en vivo a la semana',
      'Mayor acompañamiento académico',
      'Acceso prioritario a clubes de conversación',
      'Talleres de empleabilidad internacional',
      'Preparación para entrevistas en inglés',
      'Networking internacional guiado',
      'Orientación para voluntariados, prácticas y experiencias globales',
      'Ruta prioritaria para experiencias internacionales de 2 a 8 semanas',
    ],
  },
]

export function PricingSection({ onNavigate }) {
  const [pricingMode, setPricingMode] = useState('invited')
  const isInvited = pricingMode === 'invited'

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#F2EEE6] py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#00AEEF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38vw] bg-gradient-to-l from-[#E7EEF7]/52 to-transparent lg:block" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black leading-tight text-navy sm:text-5xl">
            Elige cómo quieres vivir el inglés.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/74">
            Dos planes claros para practicar, avanzar y construir tu camino hacia experiencias reales con INGLESCO 2.0.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-[#C7D1DE]/34 bg-white/68 p-3 shadow-[0_16px_42px_rgba(11,29,61,0.055)] backdrop-blur">
          <div className="grid gap-2 rounded-[18px] bg-[#E7EEF7]/54 p-1.5 sm:grid-cols-2">
            {[
              ['normal', 'Normal'],
              ['invited', 'Invitado -30% activación'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`min-h-11 rounded-[14px] px-4 py-2 text-sm font900 transition ${
                  pricingMode === value
                    ? 'bg-navy text-white shadow-[0_12px_24px_rgba(11,29,61,0.16)]'
                    : 'text-ink/66 hover:bg-white/72 hover:text-navy'
                }`}
                onClick={() => setPricingMode(value)}
              >
                {label}
              </button>
            ))}
          </div>

          {isInvited && (
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <label className="block">
                <span className="sr-only">Código de embajador</span>
                <input
                  className="h-12 w-full rounded-[14px] border border-[#C7D1DE]/55 bg-[#fbfaf6] px-4 text-sm font900 text-navy outline-none transition placeholder:text-ink/38 focus:border-cobalt"
                  placeholder="Código de embajador"
                />
              </label>
              <p className="text-xs font900 leading-5 text-ink/58 sm:max-w-[240px]">
                Este precio se activa con un código válido de embajador INGLESCO 2.0.
              </p>
            </div>
          )}
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isInvited={isInvited} onNavigate={onNavigate} />
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-6 text-ink/58">
          Las experiencias internacionales de INGLESCO Global no son una promesa inmediata. Están sujetas a avance, nivel requerido, validación académica, perfil del alumno y disponibilidad.
        </p>
      </div>
    </section>
  )
}

function PricingCard({ plan, isInvited, onNavigate }) {
  const activation = isInvited ? plan.activation.invited : plan.activation.normal
  const activationLabel = isInvited ? `Activación con código: $${activation} USD` : `Activación normal: $${activation} USD`
  const isGlobal = plan.recommended

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_48px_rgba(11,29,61,0.08)] sm:p-8 ${
        isGlobal
          ? 'border-[#00AEEF]/34 bg-navy text-white'
          : 'border-[#C7D1DE]/38 bg-white/82 text-navy'
      }`}
    >
      {isGlobal && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#00AEEF]/18 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/70 to-transparent" />
        </>
      )}

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className={`text-2xl font-black ${isGlobal ? 'text-white' : 'text-navy'}`}>{plan.name}</h3>
            {isGlobal && <Badge>Recomendado</Badge>}
          </div>
          <p className={`mt-4 max-w-xl text-sm leading-6 ${isGlobal ? 'text-[#E7EEF7]/80' : 'text-ink/68'}`}>
            {plan.description}
          </p>
        </div>
      </div>

      <div className="relative mt-7">
        <div className="flex items-end gap-2">
          <span className={`text-4xl font-black leading-none sm:text-5xl ${isGlobal ? 'text-white' : 'text-navy'}`}>
            ${plan.monthly} USD
          </span>
          <span className={`pb-1 text-sm font900 ${isGlobal ? 'text-[#E7EEF7]/68' : 'text-ink/58'}`}>/ mes</span>
        </div>
        <div className={`mt-4 inline-flex rounded-full border px-4 py-2 text-sm font900 ${
          isGlobal
            ? 'border-[#E7EEF7]/24 bg-white/[0.06] text-[#E7EEF7]'
            : 'border-[#1E63F2]/12 bg-[#E7EEF7]/54 text-cobalt'
        }`}>
          {activationLabel}
        </div>
        {isInvited && (
          <p className={`mt-3 text-sm font900 ${isGlobal ? 'text-sky' : 'text-cobalt'}`}>
            Ahorras ${plan.activation.savings} USD en activación con código.
          </p>
        )}
      </div>

      <div className="relative mt-7 grid gap-2.5">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${isGlobal ? 'text-sky' : 'text-cobalt'}`} />
            <span className={`text-sm leading-6 ${isGlobal ? 'text-[#E7EEF7]/86' : 'text-ink/72'}`}>{feature}</span>
          </div>
        ))}
      </div>

      <p className={`relative mt-6 text-xs leading-5 ${isGlobal ? 'text-[#E7EEF7]/62' : 'text-ink/50'}`}>
        {plan.disclaimer}
      </p>

      <Button
        onClick={() => onNavigate?.('plans')}
        className={`relative mt-7 h-12 w-full ${
          isGlobal
            ? 'bg-white text-navy shadow-[0_18px_36px_rgba(0,174,239,0.16)] hover:bg-[#E7EEF7]'
            : ''
        }`}
      >
        {plan.cta} <ArrowRight size={18} />
      </Button>
    </article>
  )
}
