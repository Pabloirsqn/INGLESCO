import React from 'react'
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import { PricingSection } from '../components/PricingSection.jsx'
import { Badge, Button, Card } from '../components/ui.jsx'

const planOptions = ['Starter', 'Global']

const industries = [
  'Logística / comercio exterior',
  'Automotriz',
  'Medicina / salud',
  'Negocios',
  'Travel / hospitality',
  'Estudios internacionales',
  'Entrevistas laborales',
  'Vida diaria / conversación general',
  'Otro',
]

const levels = ['A1 inicial', 'A2 básico', 'B1 intermedio', 'B2 intermedio alto', 'No estoy seguro']

export function PlansPage({ onNavigate }) {
  return (
    <main className="min-h-screen bg-ivory pb-28">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <Button variant="secondary" onClick={() => onNavigate('landing')}><ArrowLeft size={17} /> Volver a la landing</Button>
        </div>
      </header>

      <PricingSection onNavigate={onNavigate} />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="bg-navy p-8 text-white">
          <Badge tone="blue">Sin pagos reales todavía</Badge>
          <h2 className="mt-5 text-3xl font-black leading-tight">Un asesor te ayudará a confirmar el siguiente paso.</h2>
          <p className="mt-4 leading-7 text-blue-100">
            Esta página funciona como checkout mock. No procesa pagos; solo captura intención de inscripción para validar el flujo comercial.
          </p>
          <div className="mt-8 space-y-3">
            {['Confirmación de plan', 'Orientación por nivel', 'Contexto o industria de interés', 'Siguiente paso de inscripción'].map((item) => (
              <p key={item} className="flex items-center gap-3 font900"><CheckCircle2 size={18} className="text-sky" /> {item}</p>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-black text-navy">Formulario de inscripción</h2>
          <p className="mt-2 text-sm leading-6 text-ink/65">Un asesor de INGLESCO te contactará para confirmar tu inscripción y explicarte el siguiente paso.</p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" placeholder="Tu nombre completo" />
            <Field label="WhatsApp" placeholder="+52..." />
            <Field label="País" placeholder="México, Colombia, Perú..." />
            <Select label="Nivel actual" options={levels} />
            <Field label="Objetivo principal" placeholder="Trabajo, viajes, estudios..." className="sm:col-span-2" />
            <Select label="Industria o contexto de interés" options={industries} />
            <Select label="Plan de interés" options={planOptions} />
          </form>

          <Button className="mt-6 w-full"><Send size={17} /> Enviar solicitud</Button>
        </Card>
      </section>
    </main>
  )
}

function Field({ label, placeholder, className = '' }) {
  return (
    <label className={className}>
      <span className="text-sm font900 text-navy">{label}</span>
      <input className="mt-2 w-full rounded-lg border border-line bg-pearl px-4 py-3 outline-none focus:border-cobalt" placeholder={placeholder} />
    </label>
  )
}

function Select({ label, options }) {
  return (
    <label>
      <span className="text-sm font900 text-navy">{label}</span>
      <select className="mt-2 w-full rounded-lg border border-line bg-pearl px-4 py-3 outline-none focus:border-cobalt">
        <option value="">Selecciona una opción</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}
