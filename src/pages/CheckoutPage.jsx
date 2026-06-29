import React, { useMemo, useState } from 'react'
import { ArrowLeft, BadgeCheck, CheckCircle2, ChevronDown, CreditCard, HelpCircle, LockKeyhole, ShieldCheck, Smartphone, WalletCards } from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import { Button } from '../components/ui.jsx'
import { CURRENCIES, PRICING, VALID_AMBASSADOR_CODE, buildCheckoutDraft } from '../data/pricing.js'

const paymentMethods = [
  { id: 'card', label: 'Tarjeta', description: 'Crédito o débito', icon: CreditCard, available: true },
  { id: 'paypal', label: 'PayPal', description: 'Continuar con PayPal', icon: WalletCards, available: false },
  { id: 'apple_pay', label: 'Apple Pay', description: 'Dispositivos compatibles', icon: Smartphone, available: false },
  { id: 'google_pay', label: 'Google Pay', description: 'Pago rápido compatible', icon: BadgeCheck, available: false },
]

const levels = ['Principiante', 'Básico', 'Intermedio', 'Avanzado', 'No estoy seguro']

function checkoutFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const planId = params.get('plan')
  const currency = params.get('currency')
  const code = params.get('code')

  if (planId) return buildCheckoutDraft({ planId, currency, code })

  try {
    const stored = JSON.parse(window.localStorage.getItem('inglescoCheckoutDraft') || 'null')
    if (stored?.planId) return buildCheckoutDraft({ planId: stored.planId, currency: stored.currency, code: stored.code })
  } catch {
    return null
  }

  return null
}

function createCheckoutSession(payload) {
  // TODO: replace mock checkout with a PCI-compliant provider session before production.
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ok: true, payload }), 700)
  })
}

function submitHelpRequest(payload) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ok: true, payload }), 650)
  })
}

export function CheckoutPage({ onNavigate }) {
  const [draft] = useState(checkoutFromUrl)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [paymentStatus, setPaymentStatus] = useState('idle')
  const [helpOpen, setHelpOpen] = useState(false)
  const [helpStatus, setHelpStatus] = useState('idle')
  const [helpData, setHelpData] = useState({ name: '', whatsapp: '', country: '', email: '', level: '', message: '' })

  const plan = useMemo(() => PRICING.find((item) => item.id === draft?.planId), [draft?.planId])

  if (!draft || !plan) {
    return (
      <main className="min-h-screen bg-navy px-5 py-10 text-white">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[#C7D1DE]/16 bg-[#123A8F]/18 p-8 text-center shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
          <Logo light />
          <h1 className="mt-8 text-3xl font-black">Elige un plan para continuar.</h1>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#C7D1DE]">No encontramos un resumen activo de inscripción. Vuelve a Planes para elegir Starter o Global.</p>
          <Button className="mt-7 bg-sky text-navy" onClick={() => onNavigate('plans')}>
            Ver planes
          </Button>
        </div>
      </main>
    )
  }

  const paymentMethodData = paymentMethods.find((method) => method.id === paymentMethod) || paymentMethods[0]
  const paymentPayload = {
    plan: draft.plan,
    currency: draft.currency,
    tariffType: draft.tariffType,
    monthly: draft.monthly,
    activation: draft.activation,
    initialTotal: draft.initialTotal,
    code: draft.code,
    paymentMethod,
  }

  const handlePaymentSubmit = async (event) => {
    event.preventDefault()
    setPaymentStatus('loading')
    const form = new FormData(event.currentTarget)
    const payload = {
      ...paymentPayload,
      customerName: form.get('cardholderName'),
      email: form.get('email'),
      whatsapp: form.get('whatsapp'),
    }
    await createCheckoutSession(payload)
    setPaymentStatus('success')
  }

  const handleHelpSubmit = async (event) => {
    event.preventDefault()
    setHelpStatus('loading')
    await submitHelpRequest({ ...paymentPayload, ...helpData })
    setHelpStatus('success')
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-navy pb-[calc(12rem+env(safe-area-inset-bottom))] text-white">
      <div className="pricing-particles pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed -left-32 top-14 h-96 w-96 rounded-full bg-[#1E63F2]/18 blur-3xl" />
      <div className="pointer-events-none fixed right-[-12%] top-24 h-[520px] w-[520px] rounded-full bg-[#00AEEF]/10 blur-3xl" />

      <header className="relative border-b border-white/10 bg-[#0B1D3D]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <Button variant="secondary" onClick={() => onNavigate('plans', draft)}><ArrowLeft size={17} /> Volver a planes</Button>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 py-10 sm:py-12">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {['Pago seguro', 'Confirmación acompañada', 'Soporte de embajador'].map((item) => (
              <span key={item} className="rounded-full border border-[#C7D1DE]/18 bg-[#E7EEF7]/[0.06] px-3 py-1 text-xs font900 text-[#C7D1DE]">{item}</span>
            ))}
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">Finaliza tu inscripción</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#C7D1DE]">
            Revisa tu plan, elige cómo pagar o solicita ayuda de un embajador INGLESCO.
          </p>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <CheckoutSummary draft={draft} plan={plan} />

          <div className="rounded-[30px] border border-[#C7D1DE]/14 bg-[#061734]/92 p-5 shadow-[0_26px_72px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">Elige tu método de pago</h2>
                <p className="mt-2 text-sm leading-6 text-[#C7D1DE]">Completa tu inscripción de forma segura.</p>
              </div>
              <LockKeyhole className="text-sky" size={24} />
            </div>

            <PaymentMethodCarousel active={paymentMethod} onChange={setPaymentMethod} />

            {paymentMethod === 'card' ? (
              <PaymentCardForm status={paymentStatus} onSubmit={handlePaymentSubmit} />
            ) : (
              <UnavailablePayment method={paymentMethodData} />
            )}

            <div className="mt-5 rounded-[20px] border border-[#C7D1DE]/12 bg-[#E7EEF7]/[0.055] p-4">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setHelpOpen((value) => !value)}
                aria-expanded={helpOpen}
              >
                <span className="inline-flex items-center gap-2 font900 text-[#F2EEE6]"><HelpCircle size={18} className="text-[#6E8B58]" /> Obtener ayuda</span>
                <ChevronDown className={`text-[#C7D1DE] transition ${helpOpen ? 'rotate-180' : ''}`} size={18} />
              </button>

              {helpOpen && (
                <HelpRequestForm
                  data={helpData}
                  setData={setHelpData}
                  status={helpStatus}
                  onSubmit={handleHelpSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CheckoutSummary({ draft, plan }) {
  return (
    <aside className="rounded-[30px] border border-[#C7D1DE]/16 bg-[#123A8F]/18 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-black">Resumen de inscripción</h2>
        {draft.code === VALID_AMBASSADOR_CODE && <span className="rounded-full bg-[#F2EEE6] px-3 py-1 text-xs font900 text-[#48683B]">JPABLO20 aplicado</span>}
      </div>
      <p className="mt-3 text-sm leading-6 text-[#C7D1DE]">{plan.description}</p>

      <div className="mt-6 grid gap-3">
        <SummaryRow label="Plan seleccionado" value={draft.plan} />
        <SummaryRow label="Moneda" value={draft.currency} />
        <SummaryRow label="Tipo de tarifa" value={draft.tariffType} />
        <SummaryRow label="Mensualidad" value={`${draft.monthlyLabel} / mes`} highlight />
        <SummaryRow label="Activación" value={draft.activationLabel} accent="terracotta" />
        <SummaryRow label="Total inicial" value={draft.initialTotalLabel} highlight />
        <SummaryRow label="Código aplicado" value={draft.code || 'Sin código aplicado'} accent={draft.code ? 'green' : 'muted'} />
      </div>

      <div className="mt-6 rounded-[20px] border border-[#C7D1DE]/12 bg-[#E7EEF7]/[0.055] p-4">
        <p className="text-sm font900 text-[#F2EEE6]">La mensualidad se cobra de forma recurrente según el plan seleccionado.</p>
        <p className="mt-2 text-xs leading-5 text-[#C7D1DE]/72">
          Las experiencias internacionales están sujetas a avance, nivel requerido, validación académica, perfil del alumno y disponibilidad. No representan una promesa inmediata.
        </p>
      </div>
    </aside>
  )
}

function SummaryRow({ label, value, highlight = false, accent = '' }) {
  const color = highlight ? 'text-[#00AEEF]' : accent === 'terracotta' ? 'text-[#CB6C3A]' : accent === 'green' ? 'text-[#A9BE95]' : 'text-[#F2EEE6]'

  return (
    <div className="flex items-center justify-between gap-4 rounded-[16px] border border-[#C7D1DE]/10 bg-[#0B1D3D]/38 px-4 py-3">
      <span className="text-xs font900 uppercase tracking-[0.08em] text-[#C7D1DE]/68">{label}</span>
      <span className={`text-right text-sm font900 ${color}`}>{value}</span>
    </div>
  )
}

function PaymentMethodCarousel({ active, onChange }) {
  return (
    <div className="payment-method-carousel -mx-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
      {paymentMethods.map((method) => {
        const Icon = method.icon
        const selected = active === method.id
        return (
          <button
            key={method.id}
            type="button"
            className={`min-w-[180px] snap-start rounded-[20px] border p-4 text-left transition sm:min-w-0 ${
              selected
                ? 'border-sky bg-[#123A8F]/44 shadow-[0_16px_36px_rgba(0,174,239,0.12)]'
                : 'border-[#C7D1DE]/14 bg-[#E7EEF7]/[0.045] hover:border-[#C7D1DE]/28'
            }`}
            onClick={() => onChange(method.id)}
          >
            <Icon size={22} className={selected ? 'text-sky' : 'text-[#C7D1DE]'} />
            <p className="mt-3 font900 text-[#F2EEE6]">{method.label}</p>
            <p className="mt-1 text-xs leading-5 text-[#C7D1DE]/72">{method.description}</p>
          </button>
        )
      })}
    </div>
  )
}

function PaymentCardForm({ status, onSubmit }) {
  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField name="cardholderName" label="Nombre del titular" placeholder="Nombre como aparece en la tarjeta" required />
        <CheckoutField name="email" label="Correo de confirmación" placeholder="tu@email.com" type="email" required />
      </div>
      <CheckoutField name="cardNumber" label="Número de tarjeta" placeholder="0000 0000 0000 0000" inputMode="numeric" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField name="expiryDate" label="Vencimiento" placeholder="MM/AA" required />
        <CheckoutField name="cvv" label="CVV" placeholder="CVV" type="password" inputMode="numeric" required />
      </div>
      <CheckoutField name="whatsapp" label="WhatsApp" placeholder="+52..." required />

      <p className="rounded-[16px] border border-[#C7D1DE]/12 bg-[#E7EEF7]/[0.045] p-3 text-xs leading-5 text-[#C7D1DE]/76">
        Este MVP no procesa pagos reales todavía. Para producción, estos campos deben reemplazarse por Stripe Elements, Mercado Pago Card Brick o un proveedor PCI-compliant.
      </p>

      <Button className="min-h-[54px] w-full bg-sky text-base text-navy hover:bg-white" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Procesando...' : 'Continuar al pago seguro'}
      </Button>
      {status === 'success' && <p className="text-sm font900 text-sky">Solicitud de pago iniciada. Un asesor puede ayudarte si necesitas completar el proceso.</p>}
    </form>
  )
}

function UnavailablePayment({ method }) {
  return (
    <div className="mt-6 rounded-[22px] border border-[#C7D1DE]/12 bg-[#E7EEF7]/[0.05] p-5">
      <p className="text-lg font-black text-[#F2EEE6]">{method.label}</p>
      <p className="mt-2 text-sm leading-6 text-[#C7D1DE]">
        {method.label} estará disponible al conectar la pasarela. Puedes solicitar ayuda si deseas completar tu inscripción.
      </p>
    </div>
  )
}

function HelpRequestForm({ data, setData, status, onSubmit }) {
  const update = (field) => (event) => setData((current) => ({ ...current, [field]: event.target.value }))

  return (
    <form className="mt-5 grid gap-4 border-t border-[#C7D1DE]/12 pt-5" onSubmit={onSubmit}>
      <div>
        <h3 className="text-xl font-black text-[#F2EEE6]">¿Prefieres que te acompañemos?</h3>
        <p className="mt-2 text-sm leading-6 text-[#C7D1DE]">Un embajador te contactará para aclarar dudas y realizar tu inscripción.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField label="Nombre" placeholder="Tu nombre completo" value={data.name} onChange={update('name')} required />
        <CheckoutField label="WhatsApp" placeholder="+52..." value={data.whatsapp} onChange={update('whatsapp')} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField label="País" placeholder="México, Colombia, Perú..." value={data.country} onChange={update('country')} required />
        <CheckoutField label="Correo" placeholder="tu@email.com" type="email" value={data.email} onChange={update('email')} />
      </div>
      <label>
        <span className="text-sm font900 text-[#E7EEF7]">Nivel actual</span>
        <select className="mt-2 w-full rounded-[15px] border border-[#C7D1DE]/24 bg-[#0B1D3D]/62 px-4 py-3 text-[#F2EEE6] outline-none focus:border-sky" value={data.level} onChange={update('level')}>
          <option value="">Selecciona una opción</option>
          {levels.map((level) => <option key={level} value={level}>{level}</option>)}
        </select>
      </label>
      <label>
        <span className="text-sm font900 text-[#E7EEF7]">Duda principal</span>
        <textarea className="mt-2 min-h-28 w-full rounded-[15px] border border-[#C7D1DE]/24 bg-[#0B1D3D]/62 px-4 py-3 text-[#F2EEE6] outline-none placeholder:text-[#C7D1DE]/55 focus:border-sky" placeholder="Cuéntanos qué te gustaría resolver antes de inscribirte..." value={data.message} onChange={update('message')} />
      </label>
      <Button className="min-h-[52px] bg-[#6E8B58] text-white hover:bg-[#F2EEE6] hover:text-navy" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando...' : 'Solicitar ayuda'}
      </Button>
      {status === 'success' && <p className="text-sm font900 text-[#A9BE95]">Listo. Un embajador de INGLESCO te contactará para ayudarte con tu inscripción.</p>}
    </form>
  )
}

function CheckoutField({ label, ...props }) {
  return (
    <label>
      <span className="text-sm font900 text-[#E7EEF7]">{label}</span>
      <input
        className="mt-2 w-full rounded-[15px] border border-[#C7D1DE]/24 bg-[#0B1D3D]/62 px-4 py-3 text-[#F2EEE6] outline-none transition placeholder:text-[#C7D1DE]/55 focus:border-sky focus:ring-4 focus:ring-sky/10"
        {...props}
      />
    </label>
  )
}
