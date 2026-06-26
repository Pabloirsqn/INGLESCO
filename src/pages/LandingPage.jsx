import React, { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Car,
  CheckCircle2,
  CirclePlay,
  Factory,
  Globe2,
  HeartPulse,
  Hotel,
  Menu,
  MessageCircle,
  UsersRound,
  X,
} from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import heroBackground from '../assets/hero-inglesco-global.png'
import { BrandTimeline } from '../components/BrandTimeline.jsx'
import { HeroAccordion } from '../components/HeroAccordion.jsx'
import { Badge, Button, Card } from '../components/ui.jsx'

const history = [
  {
    year: '1996',
    title: 'Nace INGLESCO',
    text: 'Nace como una escuela de inglés temática, creada para que aprender el idioma se sintiera más cercano, práctico y conectado con situaciones reales, no como una clase tradicional más.',
    type: 'origin',
  },
  {
    year: '2013',
    title: 'Reconocimiento POSIBLE',
    text: 'INGLESCO obtiene el primer lugar entre más de 200 mil ideas en POSIBLE de Fundación Televisa, gracias a una propuesta educativa innovadora, temática y de vanguardia.',
    type: 'recognition',
  },
  {
    year: '2026',
    title: 'Evoluciona a INGLESCO 2.0',
    text: 'La marca vuelve más fuerte: una plataforma moderna que integra práctica digital, clases, comunidad, networking e INGLESCO Global para llevar el inglés a la vida real.',
    type: 'evolution',
  },
]

const liveEnglishSteps = [
  ['Practica', 'Crea constancia con rutas claras, ejercicios guiados y contacto frecuente con el idioma.', CheckCircle2],
  ['Conecta', 'Gana confianza hablando con profesores, compañeros y espacios diseñados para soltar el inglés.', MessageCircle],
  ['Vive', 'Lleva tu inglés a vida diaria, trabajo, viajes, networking e INGLESCO Global.', Globe2],
]

const clubTypes = [
  {
    title: 'Club en línea',
    text: 'Sesiones guiadas para hablar con frecuencia, mantener ritmo y practicar desde cualquier lugar.',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=84',
    tag: 'Online',
  },
  {
    title: 'Coffee Talks',
    text: 'Encuentros en cafés, parques o coworkings para practicar en contextos relajados y reales.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=84',
    tag: 'Presencial',
  },
  {
    title: 'Sesiones temáticas',
    text: 'Conversaciones sobre viajes, negocios, entrevistas, cultura y situaciones de la vida real.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=84',
    tag: 'Temático',
  },
]

const industries = [
  {
    name: 'Logística',
    full: 'Logística y comercio exterior',
    text: 'Practica vocabulario y situaciones relacionadas con envíos, proveedores, rutas, operaciones y coordinación internacional.',
    bullets: ['Coordinar un envío', 'Confirmar tiempos de entrega', 'Explicar un retraso'],
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=84',
    icon: Factory,
  },
  {
    name: 'Automotriz',
    full: 'Automotriz',
    text: 'Comunica procesos, calidad, producción, mantenimiento y soporte técnico con vocabulario útil para planta o ingeniería.',
    bullets: ['Describir procesos', 'Reportar incidencias', 'Hablar de calidad'],
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=84',
    icon: Car,
  },
  {
    name: 'Medicina',
    full: 'Medicina y salud',
    text: 'Refuerza vocabulario clínico, atención, síntomas, protocolos y comunicación profesional con pacientes o equipos.',
    bullets: ['Explicar síntomas', 'Dar seguimiento', 'Comunicar indicaciones'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=84',
    icon: HeartPulse,
  },
  {
    name: 'Negocios',
    full: 'Negocios',
    text: 'Practica presentaciones, reuniones, negociaciones, networking y conversación profesional con mayor seguridad.',
    bullets: ['Presentar ideas', 'Negociar acuerdos', 'Participar en reuniones'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=84',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Viajes',
    full: 'Viajes y hospitalidad',
    text: 'Muévete con confianza en aeropuertos, hoteles, tours, restaurantes y situaciones comunes de viaje.',
    bullets: ['Resolver en aeropuerto', 'Pedir apoyo en hotel', 'Conversar en tours'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=84',
    icon: Hotel,
  },
  {
    name: 'Entrevistas',
    full: 'Entrevistas laborales',
    text: 'Habla de tu perfil, experiencia, logros y objetivos con estructura, claridad y vocabulario profesional.',
    bullets: ['Presentar tu perfil', 'Responder preguntas', 'Explicar logros'],
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=84',
    icon: BadgeCheck,
  },
  {
    name: 'Vida diaria',
    full: 'Vida diaria en otro país',
    text: 'Practica conversaciones cotidianas para resolver compras, traslados, servicios y momentos sociales.',
    bullets: ['Pedir direcciones', 'Comprar y ordenar', 'Resolver imprevistos'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=84',
    icon: Globe2,
  },
  {
    name: 'Networking',
    full: 'Conversación social y networking',
    text: 'Conecta social y profesionalmente con más confianza en eventos, comunidades y espacios internacionales.',
    bullets: ['Iniciar conversación', 'Hablar de proyectos', 'Dar seguimiento'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=84',
    icon: Building2,
  },
]

const destinations = [
  { city: 'Tokyo', tag: 'Exploración global', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=82' },
  { city: 'Vancouver', tag: 'Inglés y vida urbana', image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=700&q=82' },
  { city: 'Nueva York', tag: 'Oportunidades y networking', image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=700&q=82' },
  { city: 'Dublín', tag: 'Inmersión en inglés', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=700&q=82' },
  { city: 'Londres', tag: 'Experiencia internacional', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=82' },
  { city: 'Melbourne', tag: 'Vida global', image: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?auto=format&fit=crop&w=700&q=82' },
]

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionHeader({ eyebrow, title, text, centered = false, light = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`text-sm font900 uppercase tracking-[0.18em] ${light ? 'text-sky' : 'text-cobalt'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-7 ${light ? 'text-blue-100' : 'text-ink/75'}`}>{text}</p>}
    </div>
  )
}

function HistorySection() {
  return (
    <section id="historia" className="bg-[#F2EEE6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          title="Una historia que vuelve a evolucionar."
          text="Lo que empezó como una escuela temática hoy evoluciona en una plataforma para practicar, conectar y llevar el inglés a la vida real."
          centered
        />

        <div className="mx-auto mt-10 max-w-5xl rounded-[22px] border border-[#C7D1DE]/20 bg-[#F2EEE6]/35 p-3 shadow-[0_8px_24px_rgba(6,31,73,0.03)] backdrop-blur sm:p-5">
          <BrandTimeline items={history} />
        </div>

        <div className="mx-auto mt-12 max-w-4xl px-4 py-3 text-center">
          <p className="text-2xl font-black leading-tight text-navy sm:text-4xl">
            No volvemos para enseñar inglés como siempre.
            <br />
            <span className="mt-2 inline-block text-cobalt">Volvemos para ayudarte a vivirlo.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function LiveEnglishMethod() {
  return (
    <div className="rounded-[26px] bg-gradient-to-b from-[#1E63F2] via-[#00AEEF] to-[#E7EEF7] p-px shadow-[0_14px_34px_rgba(11,29,61,0.032)] lg:max-w-[520px] lg:justify-self-end">
      <div className="relative overflow-hidden rounded-[25px] bg-[#fbfaf6] p-5 md:p-6">
        <div className="absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[#00AEEF]/7 blur-3xl" />
        <div className="absolute -bottom-28 left-4 h-40 w-40 rounded-full bg-[#1E63F2]/5 blur-3xl" />
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/38 to-transparent" />
        <div className="relative">
          <p className="text-xl font-black leading-tight text-navy sm:text-[25px]">El inglés se vive en movimiento.</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink/68">Practicar, conectar y vivir el idioma: tres movimientos para convertir el inglés en una experiencia real.</p>
        </div>

        <div className="relative mt-5 grid gap-1">
          <div className="absolute left-[17px] top-6 hidden h-[calc(100%-3rem)] w-[2px] rounded-full bg-gradient-to-b from-cobalt/48 via-[#00AEEF]/34 to-cobalt/8 sm:block" />
          {liveEnglishSteps.map(([title, text, Icon]) => (
            <article key={title} className="relative grid gap-3 py-2.5 sm:grid-cols-[42px_1fr]">
              <div className="flex items-start gap-4 sm:block">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1E63F2]/18 bg-[#E7EEF7]/62 text-cobalt shadow-[0_6px_14px_rgba(30,99,242,0.05)] ring-[3px] ring-[#F2EEE6]/62 backdrop-blur">
                  <Icon size={16} strokeWidth={2.2} />
                </div>
              </div>
              <div className="border-b border-[#1E63F2]/12 pb-4 last:border-b-0">
                <div className="flex items-baseline">
                  <h3 className="text-xl font-black leading-tight text-navy">{title}</h3>
                </div>
                <p className="mt-2 text-[14px] leading-6 text-ink/72">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="relative mt-4 flex flex-wrap items-center gap-2.5 border-t border-[#1E63F2]/14 pt-3 text-[13px] font900 text-navy/72">
          <span>Constancia</span>
          <ArrowRight size={15} className="text-cobalt" />
          <span>Confianza</span>
          <ArrowRight size={15} className="text-cobalt" />
          <span>Mundo real</span>
        </div>
      </div>
    </div>
  )
}

function MethodSection() {
  return (
    <section id="metodo" className="bg-[#fbfaf6] py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.98fr_0.86fr] lg:items-center">
          <div>
            <SectionHeader
              title="De estudiar inglés a vivirlo."
              text="Muchas personas han estudiado inglés durante años, pero nunca han tenido suficientes espacios para usarlo con confianza. INGLESCO 2.0 nace para cerrar esa brecha: convertir el idioma en una práctica constante, acompañada por clases, comunidad y situaciones reales."
            />
            <p className="mt-5 leading-7 text-ink/75">Aquí el inglés deja de ser una materia aislada. Se vuelve parte de tu rutina, de tus conversaciones y de las oportunidades que quieres construir.</p>
            <blockquote className="relative mt-8 max-w-xl py-4 pl-6 pr-4">
              <span className="absolute bottom-3 left-0 top-3 w-[5px] rounded-full bg-gradient-to-b from-cobalt via-[#00AEEF] to-cobalt/35" />
              <span className="absolute inset-y-0 left-0 w-32 rounded-r-[28px] bg-[#F2EEE6]/45" />
              <p className="relative text-xl font-black leading-tight text-navy">No se trata de acumular lecciones.<br />Se trata de construir momentos reales para usar el idioma.</p>
            </blockquote>
          </div>
          <LiveEnglishMethod />
        </div>
      </div>
    </section>
  )
}

function ClubExperienceCards() {
  return (
    <section id="clubes" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeader
            title="La confianza se construye conversando."
            text="INGLESCO 2.0 crea espacios para practicar sin presión: clubes en línea, encuentros presenciales y sesiones temáticas donde hablar se vuelve más natural, social y constante."
          />
          <div className="relative overflow-hidden rounded-[26px] bg-navy px-6 py-7 text-white shadow-[0_18px_44px_rgba(11,29,61,0.16)]">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/80 to-transparent" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00AEEF]/24 bg-white/7 text-sky">
              <UsersRound size={20} />
            </div>
            <p className="mt-6 text-2xl font-black leading-tight">La idea no es hablar perfecto desde el día uno.<br />La idea es tener un espacio donde empezar a hablar.</p>
            <p className="mt-4 max-w-xl leading-7 text-blue-100">Por eso creamos espacios donde practicar se siente natural, acompañado y posible.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {clubTypes.map((club) => (
            <article key={club.title} className="group overflow-hidden rounded-[22px] border border-[#1E63F2]/12 bg-white shadow-[0_10px_26px_rgba(11,29,61,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#1E63F2]/22 hover:shadow-[0_16px_38px_rgba(11,29,61,0.07)]">
              <div className="relative h-56 overflow-hidden">
                <img src={club.image} alt={club.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/24 via-transparent to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-[#1E63F2]/18 bg-white/90 px-3.5 py-1.5 text-xs font900 text-cobalt backdrop-blur">
                    {club.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[21px] font-black leading-tight text-navy">{club.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-ink/70">{club.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryExplorer() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const industry = industries[activeIndustry]
  const IndustryIcon = industry.icon

  return (
    <section id="industrias" className="bg-ivory pb-28 pt-14 sm:py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            title="Inglés para lo que realmente necesitas."
            text="No todos necesitan inglés para lo mismo. INGLESCO 2.0 adapta la práctica a contextos reales: trabajo, viajes, entrevistas, industria, networking y vida diaria."
          />
          <Button variant="secondary" className="w-full sm:w-fit" onClick={() => goToSection('global')}>Ver INGLESCO Global <ArrowRight size={18} /></Button>
        </div>

        <div className="relative w-full overflow-hidden rounded-[25px] border border-[#C7D1DE]/30 bg-white shadow-[0_18px_48px_rgba(11,29,61,0.06)]">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-[2px] bg-gradient-to-b from-[#1E63F2] via-[#00AEEF] to-[#E7EEF7]" />
          <div className="grid min-w-0 rounded-[24px] bg-white lg:grid-cols-[300px_1fr]">
            <div className="min-w-0 border-b border-[#C7D1DE]/28 bg-[#F2EEE6]/45 p-4 lg:border-b-0 lg:border-r">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:block lg:space-y-2 lg:overflow-visible lg:px-0 lg:pb-0">
              {industries.map((item, index) => {
                const Icon = item.icon
                const isActive = index === activeIndustry
                return (
                  <button
                    key={item.name}
                    className={`flex min-h-11 min-w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-[15px] border px-4 py-3 text-left text-sm font900 transition lg:w-full ${isActive ? 'border-cobalt/20 bg-navy text-white shadow-[0_12px_24px_rgba(11,29,61,0.14)]' : 'border-transparent bg-white/58 text-ink/70 hover:border-[#1E63F2]/14 hover:bg-white'}`}
                    onClick={() => setActiveIndustry(index)}
                  >
                    <Icon size={16} strokeWidth={2.1} className={isActive ? 'text-sky' : 'text-cobalt/80'} />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

            <div className="grid min-w-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="min-w-0 p-5 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-[#1E63F2]/12 bg-[#E7EEF7]/55 p-3 text-cobalt"><IndustryIcon size={24} strokeWidth={2.1} /></div>
                <div className="min-w-0">
                  <Badge>{industry.full}</Badge>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-navy sm:text-3xl">{industry.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{industry.text}</p>
              <div className="mt-6 space-y-2.5">
                {industry.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[15px] border border-[#1E63F2]/10 bg-[#F2EEE6]/45 px-4 py-3">
                    <CheckCircle2 size={17} className="text-cobalt" />
                    <span className="min-w-0 break-words font900 leading-6 text-navy/92">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[240px] overflow-hidden bg-navy sm:min-h-[280px] lg:min-h-[360px]">
              <img src={industry.image} alt={industry.full} loading="lazy" className="h-full min-h-[240px] w-full object-cover object-center opacity-90 sm:min-h-[280px] lg:min-h-[360px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-white/22 bg-navy/62 p-4 shadow-[0_18px_42px_rgba(11,29,61,0.22)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                <p className="text-xs font900 text-blue-100">Situaciones reales</p>
                <p className="mt-2 break-words text-base font-black leading-tight text-white sm:text-lg">{industry.bullets.join(' · ')}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GlobalJourneySteps() {
  const steps = ['Practica constantemente', 'Refuerza con clases y comunidad', 'Alcanza el nivel requerido', 'Valida tu preparación', 'Vive una experiencia internacional']

  return (
    <div className="rounded-[28px] border border-[#E7EEF7]/12 bg-white/[0.07] p-5 backdrop-blur-md sm:p-6">
      <h3 className="text-2xl font-black">Tu camino hacia INGLESCO Global</h3>
      <div className="relative mt-6 grid gap-3">
        {steps.map((item, index) => (
          <div key={item} className="relative grid gap-3 sm:grid-cols-[40px_1fr]">
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E7EEF7]/35 bg-white/[0.055] text-xs font900 text-sky">
              {index + 1}
            </div>
            <p className="self-center rounded-[14px] border border-[#E7EEF7]/35 bg-white/[0.03] px-4 py-2.5 font900 text-[#E7EEF7]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DestinationCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {destinations.map(({ city, image, tag }) => (
        <div key={city} className="group relative h-44 overflow-hidden rounded-[20px] border border-white/10 bg-white/10 sm:h-52 lg:col-span-2">
          <img src={image} alt={city} loading="lazy" className="h-full w-full object-cover opacity-[0.88] transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-black leading-tight text-white">{city}</p>
            <p className="mt-1 text-sm font700 text-[#E7EEF7]/72">{tag}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function GlobalSection() {
  return (
    <section id="global" className="relative overflow-hidden bg-navy py-16 text-white">
      <img
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85"
        alt="Experiencia internacional"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#00AEEF]/22 bg-white/8 px-3 py-1 text-sm font900 text-sky">INGLESCO Global</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">Lleva tu inglés al mundo real.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#E7EEF7]/78">INGLESCO Global es la extensión internacional de INGLESCO 2.0: una visión de experiencias, networking y práctica internacional para alumnos que avanzan con constancia, alcanzan el nivel necesario y validan su preparación.</p>
            <p className="mt-5 leading-7 text-[#E7EEF7]/78">No se trata de una promesa inmediata. Es una meta que se construye con práctica, clases, clubes, comunidad y avance medible.</p>
            <p className="mt-7 max-w-2xl text-3xl font-black leading-tight">
              <span className="text-sky">Primero construimos la confianza.</span>{' '}
              <span className="text-white">Luego abrimos el mundo.</span>
            </p>
          </div>
          <GlobalJourneySteps />
        </div>

        <div id="global-destinos" className="mt-16 scroll-mt-24">
          <div className="mb-7 max-w-3xl">
            <h3 className="mt-3 text-3xl font-black leading-tight">Destinos que inspiran proyección global.</h3>
            <p className="mt-4 leading-7 text-[#E7EEF7]/78">Estos son algunos destinos donde alumnos preparados pueden llevar el inglés fuera del aula y practicarlo en experiencias reales.</p>
          </div>
          <DestinationCards />
        </div>
      </div>
    </section>
  )
}

function FinalCTA({ onNavigate }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <Card className="relative overflow-hidden bg-navy p-8 text-white sm:p-10">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=84"
          alt="Alumnos avanzando en comunidad"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge>Inscripción</Badge>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">Da el primer paso para vivir tu inglés con INGLESCO 2.0.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">Practica con constancia, refuerza con profesores, conversa con comunidad y prepara tu inglés para situaciones reales.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button onClick={() => onNavigate('plans')} className="w-full sm:w-auto lg:w-full">Quiero empezar <ArrowRight size={18} /></Button>
            <Button variant="secondary" onClick={() => onNavigate('plans')} className="w-full sm:w-auto lg:w-full">Ver planes</Button>
          </div>
        </div>
      </Card>
    </section>
  )
}

export function LandingPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const goToMobileSection = (id) => {
    closeMobileMenu()
    goToSection(id)
  }
  const goToPlans = () => {
    closeMobileMenu()
    onNavigate('plans')
  }

  return (
    <main className="overflow-x-hidden pb-28 sm:pb-20">
      <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font800 text-ink/70 lg:flex">
            <a href="#inicio">Inicio</a>
            <a href="#historia">Historia</a>
            <a href="#metodo">Método</a>
            <a href="#clubes">Clubes</a>
            <a href="#industrias">Industrias</a>
            <a href="#global">Global</a>
            <button className="font800 text-ink/70" onClick={() => onNavigate('plans')}>Inscripción</button>
          </nav>
          <Button onClick={() => onNavigate('plans')} className="hidden lg:inline-flex">Quiero inscribirme</Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#C7D1DE]/60 bg-white text-navy shadow-[0_8px_18px_rgba(11,29,61,0.06)] lg:hidden"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-line bg-ivory px-5 py-4 shadow-[0_18px_40px_rgba(11,29,61,0.08)] lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2 text-sm font900 text-navy">
              {[
                ['Inicio', 'inicio'],
                ['Historia', 'historia'],
                ['MÃ©todo', 'metodo'],
                ['Clubes', 'clubes'],
                ['Industrias', 'industrias'],
                ['Global', 'global'],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  className="min-h-11 rounded-lg px-3 text-left transition hover:bg-[#E7EEF7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
                  onClick={() => goToMobileSection(id)}
                >
                  {label}
                </button>
              ))}
              <Button onClick={goToPlans} className="mt-2 min-h-11 w-full">Quiero inscribirme</Button>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-navy text-white lg:min-h-[720px]">
        <img
          src={heroBackground}
          alt="Comunidad INGLESCO 2.0 en una ciudad internacional"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/86 to-navy/28 lg:via-navy/78 lg:to-navy/18" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,31,73,0.98)_0%,rgba(6,31,73,0.92)_42%,rgba(18,58,143,0.48)_72%,rgba(18,184,232,0.10)_100%)] lg:bg-[linear-gradient(105deg,rgba(6,31,73,0.98)_0%,rgba(6,31,73,0.88)_34%,rgba(18,58,143,0.40)_68%,rgba(18,184,232,0.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/66 via-navy/12 to-navy/24 lg:from-navy/58 lg:via-transparent lg:to-navy/10" />
        <div className="relative mx-auto grid min-h-[100svh] min-w-0 max-w-7xl items-center gap-8 px-5 pb-12 pt-14 sm:px-6 lg:min-h-[720px] lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 lg:px-5 lg:py-[72px] xl:gap-20">
          <div className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-3rem)] lg:max-w-[580px]">
            <h1 className="max-w-[12ch] text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:max-w-4xl lg:text-6xl lg:leading-[1.02] xl:text-7xl">
              No estudies inglés... <span className="text-sky">¡Vívelo!</span>
            </h1>
            <p className="mt-5 w-full max-w-full text-base leading-7 text-blue-50 sm:text-lg sm:leading-8 lg:mt-6 lg:max-w-[580px] lg:text-xl lg:leading-9">
              Una plataforma para practicar, reforzar con clases, conversar en comunidad y llevar tu inglés a situaciones reales de vida, trabajo y viaje.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
              <Button onClick={() => onNavigate('plans')} className="h-12 w-full px-6 sm:w-auto">Quiero empezar <ArrowRight size={18} /></Button>
              <button
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/8 px-6 text-sm font900 text-white/95 backdrop-blur transition hover:border-white/40 hover:bg-white/14 sm:w-auto"
                onClick={() => goToSection('metodo')}
              >
                <CirclePlay size={18} /> Ver cómo funciona
              </button>
            </div>
          </div>
          <div className="w-full min-w-0 max-w-full lg:max-w-[680px] lg:justify-self-end">
            <HeroAccordion />
          </div>
        </div>
      </section>

      <HistorySection />
      <MethodSection />

      <ClubExperienceCards />
      <IndustryExplorer />
      <GlobalSection />
      <FinalCTA onNavigate={onNavigate} />

      <footer className="bg-navy px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Logo light />
          <p className="text-sm text-blue-100">Aprende. Practica. Vive el inglés con INGLESCO 2.0.</p>
        </div>
      </footer>
    </main>
  )
}
