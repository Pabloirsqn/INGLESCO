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
  Languages,
  MessageCircle,
  UsersRound,
  Video,
} from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import heroBackground from '../assets/hero-inglesco-global.png'
import { HeroAccordion } from '../components/HeroAccordion.jsx'
import { Badge, Button, Card } from '../components/ui.jsx'

const history = [
  ['Hace más de 30 años', 'Nace una visión educativa más humana, práctica y conectada con la vida real.'],
  ['2013', 'POSIBLE reconoce la propuesta temática y de vanguardia que hoy inspira esta nueva etapa.'],
  ['Hoy', 'INGLESCO 2.0 evoluciona como plataforma, clases, clubes, comunidad e inglés aplicado.'],
]

const methodSteps = [
  ['Ubica tu nivel', 'Empiezas desde una base clara.'],
  ['Practica en plataforma', 'Mantienes contacto frecuente con el idioma.'],
  ['Refuerza con clases', 'Avanzas con profesores y estructura.'],
  ['Conversa en comunidad', 'Ganas seguridad en espacios reales.'],
  ['Aplica el inglés', 'Lo conectas con viajes, trabajo e industrias.'],
]

const weekStats = [
  ['4', 'prácticas en plataforma'],
  ['1', 'clase en línea'],
  ['2', 'clubes de conversación'],
  ['1', 'contexto aplicado'],
]

const weekChips = [
  ['Plataforma', Languages],
  ['Clases', Video],
  ['Clubes', MessageCircle],
  ['Inglés aplicado', BriefcaseBusiness],
]

const clubTypes = [
  {
    title: 'Online Club',
    text: 'Sesiones en línea para hablar con más frecuencia, mantener ritmo y practicar desde cualquier lugar.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=84',
    tag: 'Online',
  },
  {
    title: 'Coffee / Park Talk',
    text: 'Encuentros presenciales en cafés, parques o coworkings según la comunidad y la actividad.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=84',
    tag: 'Presencial',
  },
  {
    title: 'Thematic Sessions',
    text: 'Conversaciones sobre viajes, negocios, cultura, entrevistas y contextos profesionales.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=84',
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
    name: 'Travel',
    full: 'Travel & hospitality',
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
  ['Toronto', 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=700&q=82'],
  ['Vancouver', 'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=700&q=82'],
  ['Madrid', 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=700&q=82'],
  ['Dublín', 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=700&q=82'],
  ['Londres', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=82'],
  ['Melbourne', 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?auto=format&fit=crop&w=700&q=82'],
]

const communityItems = ['Clubes en vivo', 'Red de apoyo', 'Cultura internacional', 'Networking', 'Retos semanales', 'Historias de avance']

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

function StatChips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => <Badge key={item}>{item}</Badge>)}
    </div>
  )
}

function HistorySection() {
  return (
    <section id="historia" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Marca con historia"
              title="INGLESCO 2.0 está de vuelta."
              text="Una historia educativa con visión práctica evoluciona para una nueva generación de alumnos que necesitan usar el inglés en la vida real."
            />
            <p className="mt-6 text-xl font-black leading-tight text-cobalt">No volvemos para enseñar inglés como siempre. Volvemos para ayudarte a vivirlo.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {history.map(([date, text], index) => (
              <div key={date} className="rounded-lg border border-line bg-pearl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt text-sm font-black text-white">{index + 1}</div>
                <p className="mt-5 text-lg font-black text-navy">{date}</p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MethodSection() {
  return (
    <section id="metodo" className="bg-pearl py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Qué es INGLESCO 2.0"
              title="De estudiar inglés a vivirlo."
              text="Muchas personas han estudiado inglés durante años, pero no han tenido suficientes espacios para usarlo. INGLESCO 2.0 nace para cerrar esa brecha: convertir el idioma en una práctica constante, acompañada por profesores, reforzada con comunidad y conectada con situaciones reales de vida, trabajo, viajes e industrias."
            />
            <p className="mt-5 leading-7 text-ink/75">La plataforma mantiene contacto frecuente con el inglés; las clases en línea refuerzan lo que se practica; los clubes crean espacios para hablar con más confianza; y la comunidad vuelve el aprendizaje más humano, social y constante.</p>
            <div className="mt-7 grid gap-3 text-base font900 text-navy sm:grid-cols-2">
              {[
                'Practica constantemente en plataforma.',
                'Refuerza tu avance con clases en línea.',
                'Conversa en clubes y comunidad.',
                'Aplica el inglés a viajes, trabajo e industrias.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cobalt" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-white p-4 shadow-soft sm:p-6">
              <div className="rounded-lg bg-navy p-6 text-white">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font900 uppercase tracking-[0.14em] text-sky">Tu semana en INGLESCO 2.0</p>
                    <h3 className="mt-2 text-2xl font-black">Ritmo real de práctica</h3>
                  </div>
                  <Badge tone="blue">A2-B1</Badge>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {weekStats.map(([value, label]) => (
                    <div key={label} className="rounded-lg bg-white/10 p-4">
                      <p className="text-3xl font-black text-white">{value}</p>
                      <p className="mt-2 text-sm font800 leading-5 text-blue-100">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Travel', 'Business', 'Logistics', 'Daily life'].map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font900 text-blue-100">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {weekChips.map(([label, Icon]) => (
                  <div key={label} className="rounded-lg bg-pearl p-4 text-center">
                    <Icon size={22} className="mx-auto text-cobalt" />
                    <p className="mt-3 text-sm font900 text-navy">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-5 text-xl font-black leading-tight text-cobalt">El objetivo no es solo estudiar inglés. Es usarlo, practicarlo y vivirlo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClubExperienceCards() {
  return (
    <section id="clubes" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Clubes y comunidad"
            title="Hablar inglés necesita espacios reales."
            text="INGLESCO 2.0 combina clubes en línea, encuentros presenciales y sesiones temáticas para que practicar se sienta natural, social y posible."
          />
          <div className="rounded-lg bg-navy p-6 text-white">
            <UsersRound className="text-sky" size={28} />
            <p className="mt-4 text-2xl font-black">Practicar, conectar y avanzar.</p>
            <p className="mt-3 leading-7 text-blue-100">Una red de apoyo para conversar, compartir el proceso y acercarte a cultura internacional sin esperar a sentirte perfecto.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {clubTypes.map((club) => (
            <article key={club.title} className="group overflow-hidden rounded-lg border border-line bg-white shadow-soft">
              <div className="relative h-56 overflow-hidden">
                <img src={club.image} alt={club.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4"><Badge>{club.tag}</Badge></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-navy">{club.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{club.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-5 rounded-lg bg-pearl p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xl font-black leading-tight text-navy">La idea no es hablar perfecto desde el día uno. La idea es empezar a hablar.</p>
          <StatChips items={communityItems} />
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
    <section id="industrias" className="bg-ivory py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Inglés aplicado"
            title="Inglés para lo que realmente necesitas."
            text="El inglés no se usa igual en todos lados. INGLESCO 2.0 conecta la práctica del idioma con contextos reales, vocabulario útil y situaciones que el alumno puede vivir."
          />
          <Button variant="secondary" onClick={() => goToSection('global')}>Ver proyección global <ArrowRight size={18} /></Button>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-line bg-white shadow-soft lg:grid-cols-[320px_1fr]">
          <div className="border-b border-line bg-pearl p-4 lg:border-b-0 lg:border-r">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {industries.map((item, index) => {
                const Icon = item.icon
                const isActive = index === activeIndustry
                return (
                  <button
                    key={item.name}
                    className={`flex min-w-fit items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font900 transition lg:w-full ${isActive ? 'bg-navy text-white shadow-soft' : 'bg-white text-ink/70 hover:bg-mist'}`}
                    onClick={() => setActiveIndustry(index)}
                  >
                    <Icon size={18} className={isActive ? 'text-sky' : 'text-cobalt'} />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-50 p-4 text-cobalt"><IndustryIcon size={30} /></div>
                <div>
                  <Badge>{industry.full}</Badge>
                  <h3 className="mt-4 text-3xl font-black text-navy">{industry.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-lg leading-8 text-ink/70">{industry.text}</p>
              <div className="mt-6 space-y-3">
                {industry.bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-pearl px-4 py-3">
                    <CheckCircle2 size={18} className="text-cobalt" />
                    <span className="font900 text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-navy">
              <img src={industry.image} alt={industry.full} className="h-full min-h-[360px] w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/95 p-4">
                <p className="text-sm font900 uppercase tracking-[0.14em] text-cobalt">Situaciones reales</p>
                <p className="mt-2 text-lg font-black text-navy">{industry.bullets.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GlobalJourneySteps() {
  return (
    <div className="rounded-lg bg-white/10 p-5 backdrop-blur">
      <h3 className="text-2xl font-black">Tu camino hacia INGLESCO Global</h3>
      <div className="mt-5 grid gap-3">
        {['Practica constantemente', 'Refuerza con clases y clubes', 'Alcanza el nivel requerido', 'Valida tu preparación', 'Vive una experiencia internacional'].map((item, index) => (
          <div key={item} className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cobalt font-black">{index + 1}</div>
            <p className="font900">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DestinationCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {destinations.map(([city, image]) => (
        <div key={city} className="relative h-32 overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:h-40">
          <img src={image} alt={city} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          <p className="absolute bottom-3 left-3 text-lg font-black text-white">{city}</p>
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
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="INGLESCO Global"
              title="Lleva tu inglés al mundo real."
              text="INGLESCO Global es la extensión aspiracional de INGLESCO 2.0: una visión de experiencias, networking y práctica internacional para alumnos que avanzan con constancia, alcanzan el nivel necesario y validan su preparación."
              light
            />
            <p className="mt-5 leading-7 text-blue-100">No se trata de una promesa inmediata. Es una meta que se construye con práctica, clases, clubes, comunidad y avance medible.</p>
            <p className="mt-7 text-2xl font-black text-white">Primero construimos la confianza. Luego abrimos el mundo.</p>
          </div>
          <GlobalJourneySteps />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font900 uppercase tracking-[0.18em] text-sky">Visión internacional</p>
            <h3 className="mt-3 text-3xl font-black leading-tight">Destinos que inspiran proyección global.</h3>
            <p className="mt-4 leading-7 text-blue-100">Estas ciudades funcionan como referencia visual del tipo de entornos donde el inglés puede convertirse en experiencia real.</p>
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
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge>Inscripción</Badge>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">Da el primer paso para vivir tu inglés con INGLESCO 2.0.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">Practica con constancia, refuerza con profesores, conversa con comunidad y prepara tu inglés para situaciones reales.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button onClick={() => onNavigate('plans')}>Quiero empezar <ArrowRight size={18} /></Button>
            <Button variant="secondary" onClick={() => onNavigate('plans')}>Ver planes</Button>
          </div>
        </div>
      </Card>
    </section>
  )
}

export function LandingPage({ onNavigate }) {
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
          <Button onClick={() => onNavigate('plans')} className="hidden sm:inline-flex">Quiero inscribirme</Button>
        </div>
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
          <div className="w-full max-w-[680px] lg:justify-self-end">
            <HeroAccordion />
          </div>
        </div>
      </section>

      <HistorySection />
      <MethodSection />

      <section className="bg-navy py-10 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-4 md:grid-cols-5">
            {methodSteps.map(([title, text], index) => (
              <div key={title} className="rounded-lg bg-white/10 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt text-sm font-black">{index + 1}</div>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
