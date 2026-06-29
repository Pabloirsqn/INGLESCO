import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react'
import { Button } from './ui.jsx'
import { CURRENCIES, PRICING, VALID_AMBASSADOR_CODE, buildCheckoutDraft, formatPrice, getPrices } from '../data/pricing.js'

const CONFETTI_COLORS = ['#00AEEF', '#1E63F2', '#6E8B58', '#CB6C3A', '#F2EEE6']
const CONFETTI_PIECES = Array.from({ length: 28 }, (_, index) => ({
  left: 8 + ((index * 13) % 84),
  delay: (index % 8) * 0.055,
  duration: 1.15 + (index % 5) * 0.12,
  rotate: (index * 37) % 180,
  drift: ((index % 7) - 3) * 22,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
}))

export function PricingSection({ onSummaryChange, onCheckoutNavigate }) {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [draftCode, setDraftCode] = useState('')
  const [appliedCode, setAppliedCode] = useState('')
  const [codeError, setCodeError] = useState('')
  const [codeSuccess, setCodeSuccess] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState('starter')
  const [visiblePlanId, setVisiblePlanId] = useState('starter')
  const [hasUserSelectedPlan, setHasUserSelectedPlan] = useState(false)
  const carouselRef = useRef(null)
  const confettiTimeoutRef = useRef(null)
  const isAmbassadorApplied = appliedCode.length > 0
  const selectedPlan = PRICING.find((plan) => plan.id === selectedPlanId) || PRICING[0]
  const selectedPrices = getPrices(selectedPlan, selectedCurrency, isAmbassadorApplied)

  const summary = useMemo(() => ({
    plan: selectedPlan.name,
    currency: selectedCurrency,
    priceType: isAmbassadorApplied ? 'Embajador' : 'Normal',
    monthly: formatPrice(selectedPrices.monthly, selectedCurrency),
    activation: formatPrice(selectedPrices.activation, selectedCurrency),
    code: appliedCode,
  }), [appliedCode, isAmbassadorApplied, selectedCurrency, selectedPlan.name, selectedPrices.activation, selectedPrices.monthly])

  useEffect(() => {
    onSummaryChange?.(summary)
  }, [onSummaryChange, summary])

  useEffect(() => () => {
    if (confettiTimeoutRef.current) window.clearTimeout(confettiTimeoutRef.current)
  }, [])

  const triggerConfetti = () => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (confettiTimeoutRef.current) window.clearTimeout(confettiTimeoutRef.current)
    setShowConfetti(true)
    confettiTimeoutRef.current = window.setTimeout(() => setShowConfetti(false), 1700)
  }

  const applyCode = () => {
    const nextCode = draftCode.trim().toUpperCase()
    if (nextCode === VALID_AMBASSADOR_CODE) {
      const shouldCelebrate = appliedCode !== VALID_AMBASSADOR_CODE
      setAppliedCode(VALID_AMBASSADOR_CODE)
      setDraftCode(VALID_AMBASSADOR_CODE)
      setCodeError('')
      setCodeSuccess('Código JPABLO20 aplicado correctamente.')
      if (shouldCelebrate) triggerConfetti()
      return
    }

    setAppliedCode('')
    setCodeSuccess('')
    setCodeError('Código no válido. Revisa tu código de embajador.')
  }

  const removeCode = () => {
    setAppliedCode('')
    setDraftCode('')
    setCodeError('')
    setCodeSuccess('')
  }

  const selectPlan = (planId) => {
    setSelectedPlanId(planId)
    setVisiblePlanId(planId)
    setHasUserSelectedPlan(true)
    const draft = buildCheckoutDraft({ planId, currency: selectedCurrency, code: appliedCode })
    window.localStorage?.setItem('inglescoCheckoutDraft', JSON.stringify(draft))
    onCheckoutNavigate?.(draft)
  }

  const scrollToPlan = (planId) => {
    const carousel = carouselRef.current
    const target = carousel?.querySelector(`[data-plan-id="${planId}"]`)
    if (!carousel || !target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setVisiblePlanId(planId)
  }

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cards = Array.from(carousel.querySelectorAll('[data-plan-id]'))
    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2
    const closest = cards.reduce((current, card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - carouselCenter)
      return distance < current.distance ? { id: card.dataset.planId, distance } : current
    }, { id: visiblePlanId, distance: Number.POSITIVE_INFINITY })

    if (closest.id && closest.id !== visiblePlanId) setVisiblePlanId(closest.id)
  }

  return (
    <section id="pricing" className="relative overflow-x-hidden overflow-y-visible bg-navy pt-16 pb-[calc(11rem+env(safe-area-inset-bottom))] text-white sm:pt-20 sm:pb-48">
      {showConfetti && <ConfettiBurst />}
      <div className="pricing-particles pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-12 h-96 w-96 rounded-full bg-[#1E63F2]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-20 h-[520px] w-[520px] rounded-full bg-[#00AEEF]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,99,242,0.22),transparent_44%),linear-gradient(180deg,rgba(11,29,61,0.12),rgba(11,29,61,0.96))]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            Elige tu plan INGLESCO 2.0
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#E7EEF7]/82">
            Aprende inglés con clases en vivo, plataforma 24/7, práctica con IA y una ruta real hacia experiencias internacionales.
          </p>
        </div>

        <div className="mx-auto mt-7 max-w-5xl rounded-[24px] border border-[#C7D1DE]/16 bg-[#123A8F]/18 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.14)] backdrop-blur-xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
              <div>
                <p className="text-lg font-black text-white">¿Tienes código de embajador?</p>
                <p className="mt-1 text-sm leading-6 text-[#E7EEF7]/74">
                  Desbloquea 30% menos en mensualidad y activación.
                </p>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto]">
                <label className="block">
                  <span className="sr-only">Ingresa tu código</span>
                  <input
                    value={draftCode}
                    onChange={(event) => setDraftCode(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        applyCode()
                      }
                    }}
                    className="h-12 w-full rounded-[15px] border border-[#C7D1DE]/35 bg-[#0B1D3D]/55 px-4 text-sm font900 uppercase text-[#F2EEE6] outline-none transition placeholder:normal-case placeholder:text-[#C7D1DE]/65 focus:border-sky focus:ring-4 focus:ring-sky/10"
                    placeholder="Ingresa tu código"
                  />
                </label>
                <div className="grid gap-2 sm:grid-cols-[auto_auto]">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-[15px] bg-sky px-5 text-sm font900 text-navy transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
                    onClick={applyCode}
                  >
                    {isAmbassadorApplied ? 'Cambiar' : 'Aplicar'}
                  </button>
                  {isAmbassadorApplied && (
                    <button
                      type="button"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-[15px] border border-[#C7D1DE]/16 bg-[#E7EEF7]/[0.07] px-4 text-sm font900 text-[#C7D1DE] transition hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
                      onClick={removeCode}
                    >
                      <X size={16} /> Quitar código
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span className={`font900 ${isAmbassadorApplied ? 'text-sky' : 'text-[#E7EEF7]'}`}>
                  Tarifa actual: {isAmbassadorApplied ? 'Embajador' : 'Normal'}
                </span>
                <span className="text-[#E7EEF7]/38">|</span>
                <span className="text-[#E7EEF7]/70">
                  {isAmbassadorApplied ? `Código aplicado: ${appliedCode}` : 'Aplica tu código de embajador para desbloquear la tarifa preferencial.'}
                </span>
              </div>
              {(codeError || codeSuccess) && (
                <p className={`mt-2 text-sm font900 leading-5 ${codeError ? 'text-[#CB6C3A]' : 'text-[#00AEEF]'}`}>
                  {codeError || codeSuccess}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm font900 text-[#E7EEF7]">Moneda</p>
              <div className="mt-2 grid grid-cols-2 rounded-[16px] bg-[#0B1D3D]/42 p-1">
                {CURRENCIES.map((currency) => (
                  <button
                    key={currency}
                    type="button"
                    className={`min-h-11 rounded-[13px] px-4 text-sm font900 transition ${
                      selectedCurrency === currency
                        ? 'bg-[#F2EEE6] text-navy shadow-[0_12px_24px_rgba(0,0,0,0.16)]'
                        : 'text-[#E7EEF7]/72 hover:bg-white/[0.08]'
                    }`}
                    onClick={() => setSelectedCurrency(currency)}
                  >
                    {currency}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-[#E7EEF7]/58">
                Los precios pueden variar ligeramente según país, método de pago o tipo de cambio aplicado por el procesador.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs font900 uppercase tracking-[0.12em] text-[#C7D1DE]/72 lg:hidden">
          Desliza para comparar planes
        </p>

        <div
          ref={carouselRef}
          className="pricing-carousel -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-7 lg:mx-0 lg:mt-9 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
          onScroll={handleCarouselScroll}
        >
          {PRICING.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              currency={selectedCurrency}
              isAmbassadorApplied={isAmbassadorApplied}
              selected={hasUserSelectedPlan && selectedPlanId === plan.id}
              className="w-[88vw] max-w-[88vw] shrink-0 snap-center lg:w-auto lg:max-w-none"
              onSelect={() => selectPlan(plan.id)}
            />
          ))}
        </div>

        <div className="mt-1 flex items-center justify-center gap-2 lg:hidden" aria-label="Selector de plan">
          {PRICING.map((plan) => {
            const active = visiblePlanId === plan.id
            return (
              <button
                key={plan.id}
                type="button"
                aria-label={`Ver plan ${plan.name}`}
                className={`h-2.5 rounded-full transition ${
                  active
                    ? plan.recommended ? 'w-7 bg-[#6E8B58]' : 'w-7 bg-[#00AEEF]'
                    : 'w-2.5 bg-[#C7D1DE]/36'
                }`}
                onClick={() => scrollToPlan(plan.id)}
              />
            )
          })}
        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-6 text-[#E7EEF7]/68">
          Las experiencias internacionales están sujetas a avance, nivel requerido, validación académica, perfil del alumno y disponibilidad. No representan una promesa inmediata.
        </p>
      </div>
    </section>
  )
}

function ConfettiBurst() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
      {CONFETTI_PIECES.map((piece, index) => (
        <span
          key={index}
          className="pricing-confetti-piece"
          style={{
            '--confetti-left': `${piece.left}%`,
            '--confetti-delay': `${piece.delay}s`,
            '--confetti-duration': `${piece.duration}s`,
            '--confetti-rotate': `${piece.rotate}deg`,
            '--confetti-drift': `${piece.drift}px`,
            '--confetti-color': piece.color,
          }}
        />
      ))}
    </div>
  )
}

function PricingCard({ plan, currency, isAmbassadorApplied, selected, className = '', onSelect }) {
  const isGlobal = plan.recommended
  const prices = getPrices(plan, currency, isAmbassadorApplied)
  const activeLabel = isAmbassadorApplied ? 'Tarifa embajador' : 'Tarifa normal'

  return (
    <article
      data-plan-id={plan.id}
      className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-5 shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition sm:p-7 ${
        isGlobal
          ? 'border-[#6E8B58]/38 bg-[linear-gradient(145deg,rgba(6,23,52,0.96),rgba(18,58,143,0.34))] text-white shadow-[0_24px_70px_rgba(2,16,35,0.34),0_0_0_1px_rgba(0,174,239,0.08)]'
          : 'border-[#1E63F2]/20 bg-[linear-gradient(145deg,rgba(18,58,143,0.34),rgba(11,29,61,0.78))] text-white shadow-[0_22px_58px_rgba(30,99,242,0.08)]'
      } ${selected ? (isGlobal ? 'ring-2 ring-[#6E8B58]/60' : 'ring-2 ring-sky/55') : 'ring-1 ring-white/0'} ${className}`}
    >
      {isGlobal && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#6E8B58]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-[#00AEEF]/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#A9BE95]/52 to-[#00AEEF]/16" />
        </>
      )}

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-black text-white">{plan.name}</h3>
            {isGlobal && (
              <span className="rounded-full border border-[#A9BE95]/24 bg-[#F2EEE6] px-3 py-1 text-xs font900 text-[#48683B] shadow-[0_10px_24px_rgba(110,139,88,0.16)]">
                Recomendado
              </span>
            )}
            {!isGlobal && (
              <span className="rounded-full border border-[#E7EEF7]/18 bg-[#F2EEE6]/90 px-3 py-1 text-xs font900 text-navy">
                {plan.unselectedBadge}
              </span>
            )}
            {selected && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky/24 bg-sky/10 px-3 py-1 text-xs font900 text-sky">
                <Sparkles size={13} /> Seleccionado
              </span>
            )}
          </div>
          <p className="mt-3 text-sm font900 text-[#F2EEE6]">{plan.positioning}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#C7D1DE]">
            {plan.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {plan.highlights.map((item) => (
              <span
                key={item}
                className={`rounded-full border px-2.5 py-1 text-[11px] font900 ${
                  isGlobal
                    ? 'border-[#6E8B58]/36 bg-[#6E8B58]/14 text-[#DCE7D2]'
                    : 'border-[#C7D1DE]/18 bg-[#E7EEF7]/[0.06] text-[#C7D1DE]'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-5">
        <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
          <span className="text-[34px] font-black leading-none text-white sm:text-5xl">
            {formatPrice(prices.monthly, currency)}
          </span>
          <span className="pb-1 text-sm font900 text-[#E7EEF7]/74">/ mes</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font900">
          <span className={`rounded-full border px-3 py-1 text-xs font900 ${
            isAmbassadorApplied ? 'border-sky/24 bg-sky/10 text-sky' : 'border-[#C7D1DE]/16 bg-[#E7EEF7]/[0.06] text-[#C7D1DE]'
          }`}>
            {activeLabel}
          </span>
          <span className="text-[#E7EEF7]/50">·</span>
          <span className="text-[#CB6C3A]">Activación: {formatPrice(prices.activation, currency)}</span>
        </div>

        <div className="mt-3 space-y-2 text-sm font900">
          <PriceReferenceLine prices={prices} currency={currency} isAmbassadorApplied={isAmbassadorApplied} />
        </div>
      </div>

      <div className="relative mt-5 grid gap-2">
        {isGlobal && (
          <p className="mb-1 text-sm font900 leading-6 text-[#F2EEE6]">
            Incluye Starter + preparación internacional avanzada
          </p>
        )}
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${isGlobal ? 'text-[#A9BE95]' : 'text-[#00AEEF]/70'}`} />
            <span className="text-sm leading-5 text-[#C7D1DE]">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        onClick={onSelect}
        className={`relative mt-auto min-h-[52px] w-full bg-sky px-5 py-0 text-[15px] font800 text-navy shadow-[0_18px_36px_rgba(0,174,239,0.16)] hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky sm:min-h-[56px] sm:text-base ${
          isGlobal ? 'hover:shadow-[0_18px_42px_rgba(110,139,88,0.28)]' : ''
        }`}
      >
        {plan.cta} <ArrowRight size={18} />
      </Button>
    </article>
  )
}

function PriceReferenceLine({ prices, currency, isAmbassadorApplied }) {
  if (isAmbassadorApplied) {
    return (
      <p className="leading-6 text-[#E7EEF7]/58">
        Precio normal: {formatPrice(prices.normalMonthly, currency)} / mes + {formatPrice(prices.normalActivation, currency)} activación.
      </p>
    )
  }

  return (
    <p className="leading-6 text-[#E7EEF7]/62">
      Con código:{' '}
      <span className="text-[#00AEEF]">
        {formatPrice(prices.ambassadorMonthly, currency)} / mes + {formatPrice(prices.ambassadorActivation, currency)} activación
      </span>
      .
    </p>
  )
}
