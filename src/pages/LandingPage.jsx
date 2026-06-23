import React, { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Car,
  CheckCircle2,
  CirclePlay,
  Coffee,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Languages,
  MessageCircle,
  Plane,
  Sparkles,
  TrendingUp,
  UsersRound,
  Video,
} from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import { Badge, Button, Card, ProgressBar, SectionTitle } from '../components/ui.jsx'

const history = [
  ['Hace más de 30 años', 'Nace la historia de INGLESCO con una idea distinta: enseñar inglés de forma más humana, práctica y conectada con la vida real.'],
  ['2013', 'POSIBLE reconoce a INGLESCO como una escuela de inglés temática de vanguardia por su propuesta innovadora.'],
  ['Hoy', 'INGLESCO evoluciona como INGLESCO 2.0: plataforma, clases, clubes, comunidad e inglés aplicado al mundo real.'],
]

const comparison = {
  study: ['Memorización', 'Ejercicios aislados', 'Poca conversación', 'Avance sin contexto'],
  live: ['Práctica constante', 'Clases en línea', 'Clubes de conversación', 'Comunidad', 'Inglés aplicado a la vida real'],
}

const ecosystem = [
  { label: 'Plataforma de práctica', icon: Languages },
  { label: 'Clases en línea con profesores', icon: Video },
  { label: 'Clubes de conversación', icon: MessageCircle },
  { label: 'Comunidad activa', icon: UsersRound },
  { label: 'Inglés aplicado a industrias', icon: BriefcaseBusiness },
  { label: 'Experiencias internacionales', icon: Globe2 },
]

const methodSteps = [
  ['Ubica tu nivel', 'El alumno identifica su punto de partida para comenzar desde una base adecuada.'],
  ['Practica en plataforma', 'La plataforma mantiene al alumno en contacto frecuente con ejercicios, recursos y práctica.'],
  ['Refuerza con clases en línea', 'Las clases con profesores ayudan a resolver dudas, mejorar estructura y avanzar con claridad.'],
  ['Conversa en comunidad', 'Los clubes de conversación ayudan a ganar fluidez, seguridad y naturalidad.'],
  ['Aplica el inglés a tu mundo', 'El idioma se conecta con viajes, trabajo, industrias, cultura, comunidad y experiencias internacionales.'],
]

const clubTypes = [
  {
    title: 'Online Club',
    text: 'Clubes en línea para practicar desde cualquier lugar, mantener ritmo y hablar con más frecuencia.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Coffee / Park Talk',
    text: 'Encuentros presenciales en espacios dinámicos como cafés, parques, coworkings o bares, según la actividad.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Thematic Sessions',
    text: 'Conversaciones sobre viajes, negocios, cultura, entrevistas, industrias y experiencias internacionales.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=82',
  },
]

const industries = [
  { name: 'Logística', full: 'Logística y comercio exterior', text: 'Coordina envíos, proveedores, rutas y operaciones en inglés.', icon: Factory },
  { name: 'Automotriz', full: 'Automotriz', text: 'Comunica procesos, calidad, producción y soporte técnico.', icon: Car },
  { name: 'Medicina', full: 'Medicina y salud', text: 'Refuerza vocabulario clínico, atención y comunicación profesional.', icon: HeartPulse },
  { name: 'Negocios', full: 'Negocios', text: 'Presenta ideas, negocia y conversa con mayor seguridad.', icon: BriefcaseBusiness },
  { name: 'Travel', full: 'Travel & hospitality', text: 'Muévete con confianza en aeropuertos, hoteles, tours y ciudades.', icon: Hotel },
  { name: 'Entrevistas', full: 'Entrevistas laborales', text: 'Habla de tu perfil, experiencia y objetivos con mayor claridad.', icon: BadgeCheck },
  { name: 'Clientes', full: 'Atención a clientes', text: 'Atiende solicitudes, explica soluciones y da seguimiento.', icon: MessageCircle },
  { name: 'Estudios', full: 'Estudios internacionales', text: 'Prepárate para clases, proyectos y vida académica internacional.', icon: GraduationCap },
  { name: 'Vida diaria', full: 'Vida diaria en otro país', text: 'Resuelve conversaciones cotidianas con más naturalidad.', icon: Globe2 },
  { name: 'Networking', full: 'Conversación social y networking', text: 'Conecta social y profesionalmente con más confianza.', icon: Building2 },
]

const communityItems = ['Retos de práctica', 'Conversaciones temáticas', 'Clubes en línea y presenciales', 'Cultura internacional', 'Historias de avance', 'Actividades por intereses']

function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function LandingPage({ onNavigate }) {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const IndustryIcon = industries[activeIndustry].icon

  return (
    <main className="pb-24">
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

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <Badge>INGLESCO está de vuelta</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
              No estudies inglés... <span className="text-cobalt">¡Vívelo!</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/75">
              Practica inglés de forma constante en plataforma, refuerza tu avance con clases en línea y conversa con una comunidad diseñada para ayudarte a usar el idioma en la vida real.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/65">
              INGLESCO está de vuelta para que el inglés deje de ser una materia y se convierta en una herramienta para crecer, viajar, conectar y evolucionar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => onNavigate('plans')}>Quiero empezar <ArrowRight size={18} /></Button>
              <Button variant="secondary" onClick={() => goToSection('historia')}><CirclePlay size={18} /> Conocer INGLESCO</Button>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=86"
              alt="Personas conversando en un entorno internacional"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-md rounded-lg bg-white/95 p-5 shadow-soft">
              <p className="text-lg font-black text-navy">Aprende. Practica. Conecta. Vive.</p>
              <p className="mt-2 text-sm text-ink/70">INGLESCO 2.0 - inglés para el mundo real.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Marca con historia"
                title="INGLESCO está de vuelta."
                text="Una historia de innovación que evoluciona para una nueva generación."
              />
              <div className="mt-8 space-y-5 text-lg leading-8 text-ink/75">
                <p>INGLESCO nació hace más de 30 años con una idea clara: enseñar inglés de una forma diferente, más humana, práctica y conectada con la vida real.</p>
                <p>En 2013, INGLESCO fue reconocida por POSIBLE como una escuela de inglés temática de vanguardia, destacando por su propuesta innovadora y su visión de transformar la manera en que las personas aprenden una segunda lengua.</p>
                <p>Hoy, INGLESCO regresa como INGLESCO 2.0: una evolución que combina experiencia, acompañamiento humano y tecnología como herramienta para practicar, avanzar y conectar el inglés con oportunidades reales.</p>
              </div>
              <p className="mt-8 text-2xl font-black leading-tight text-cobalt">No volvemos para enseñar inglés como siempre. Volvemos para ayudarte a vivirlo.</p>
            </div>

            <div className="rounded-lg bg-pearl p-6 shadow-soft">
              <div className="rounded-lg bg-navy p-6 text-white">
                <Sparkles size={30} className="text-sky" />
                <h3 className="mt-4 text-2xl font-black">Historia viva, visión renovada.</h3>
                <p className="mt-3 leading-7 text-blue-100">La marca evoluciona sin perder su esencia: aprender desde la experiencia, la conversación y la vida real.</p>
              </div>
              <div className="mt-6 space-y-0">
                {history.map(([date, text], index) => (
                  <div key={date} className="grid grid-cols-[44px_1fr] gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt text-sm font-black text-white">{index + 1}</div>
                      {index < history.length - 1 && <div className="h-full min-h-16 w-px bg-line" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-lg font-black text-navy">{date}</p>
                      <p className="mt-2 leading-7 text-ink/70">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionTitle
            title="Por qué estudiar inglés no siempre es suficiente."
            text="Muchas personas han estudiado inglés durante años, pero no han tenido suficientes espacios para usarlo. El inglés se aprende mejor cuando deja de ser solo teoría y se convierte en práctica constante, conversación real y contacto frecuente con situaciones que sí forman parte de la vida del alumno."
          />
          <div className="grid overflow-hidden rounded-lg border border-line bg-white shadow-soft md:grid-cols-2">
            <div className="p-6">
              <p className="text-sm font900 uppercase tracking-[0.14em] text-ink/45">Estudiar inglés como materia</p>
              <div className="mt-5 space-y-3">
                {comparison.study.map((item) => <p key={item} className="rounded-lg bg-pearl px-4 py-3 font900 text-ink/65">{item}</p>)}
              </div>
            </div>
            <div className="bg-navy p-6 text-white">
              <p className="text-sm font900 uppercase tracking-[0.14em] text-sky">Vivir inglés como herramienta</p>
              <div className="mt-5 space-y-3">
                {comparison.live.map((item) => <p key={item} className="rounded-lg bg-white/10 px-4 py-3 font900">{item}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="relative rounded-lg bg-white p-6 shadow-soft">
              <div className="rounded-lg bg-navy p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font900 uppercase tracking-[0.14em] text-sky">INGLESCO 2.0</p>
                    <h3 className="mt-2 text-2xl font-black">Tu semana de práctica</h3>
                  </div>
                  <Badge tone="blue">B1</Badge>
                </div>
                <div className="mt-6"><ProgressBar value={62} /></div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white/10 p-4"><b>4</b><br />prácticas</div>
                  <div className="rounded-lg bg-white/10 p-4"><b>1</b><br />clase</div>
                  <div className="rounded-lg bg-white/10 p-4"><b>2</b><br />clubes</div>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ecosystem.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-lg bg-pearl p-4">
                      <Icon size={20} className="text-cobalt" />
                      <span className="font900 text-navy">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <SectionTitle
              eyebrow="Qué es INGLESCO 2.0"
              title="Un ecosistema para practicar, reforzar y vivir el inglés."
              text="INGLESCO 2.0 combina plataforma, clases en línea, clubes de conversación y comunidad para que el alumno tenga contacto constante con el idioma. La tecnología nos ayuda a crear un espacio de práctica más accesible, organizado y flexible; los profesores y la comunidad mantienen el aprendizaje humano, conversacional y real."
            />
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font900 uppercase tracking-[0.18em] text-sky">Método INGLESCO</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Así se vive el inglés en INGLESCO.</h2>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="grid min-w-[980px] grid-cols-5 gap-0">
              {methodSteps.map(([title, text], index) => (
                <div key={title} className="relative px-4">
                  <div className="absolute left-0 right-0 top-6 h-px bg-white/20" />
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cobalt text-lg font-black">{index + 1}</div>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clubes" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle
            title="Hablar inglés también necesita espacios reales."
            text="Hablar inglés no se logra solo estudiando. Se logra practicando, escuchando, respondiendo, equivocándose y volviendo a intentarlo. Por eso INGLESCO integra clubes de conversación en ambientes naturales, sociales y relajados."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {clubTypes.map((club) => (
              <div key={club.title} className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
                <img src={club.image} alt={club.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-black text-navy">{club.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{club.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl font-black text-cobalt">La idea no es hablar perfecto desde el día uno. La idea es empezar a hablar.</p>
      </section>

      <section id="industrias" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionTitle
              title="Inglés para lo que realmente necesitas."
              text="El inglés no se usa igual en todos lados. No habla igual alguien que trabaja en logística, medicina, automotriz, negocios o turismo. Por eso INGLESCO conecta la práctica del idioma con contextos reales, vocabulario útil y situaciones que el alumno puede vivir."
            />
            <Card className="p-6">
              <div className="flex items-start gap-5">
                <div className="rounded-lg bg-blue-50 p-4 text-cobalt"><IndustryIcon size={30} /></div>
                <div>
                  <Badge>{industries[activeIndustry].full}</Badge>
                  <h3 className="mt-4 text-3xl font-black text-navy">{industries[activeIndustry].name}</h3>
                  <p className="mt-3 text-lg leading-8 text-ink/70">{industries[activeIndustry].text}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <button
                    key={industry.name}
                    className={`rounded-full px-4 py-2 text-sm font900 transition ${index === activeIndustry ? 'bg-navy text-white' : 'bg-pearl text-ink/70 hover:bg-mist'}`}
                    onClick={() => setActiveIndustry(index)}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="global" className="relative overflow-hidden bg-navy py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1600&q=85"
          alt="Ciudad internacional"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font900 uppercase tracking-[0.18em] text-sky">INGLESCO Global</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Lleva tu inglés al mundo real.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">
              INGLESCO Global es la extensión natural de nuestro método. La idea es que el inglés no se quede en la pantalla ni en el aula: queremos que los alumnos que avancen con constancia y alcancen el nivel requerido puedan vivir una experiencia internacional de algunas semanas.
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Para vivir esta experiencia, el alumno necesita cumplir un periodo mínimo dentro de INGLESCO, alcanzar cierto nivel de inglés y validar que está listo para comunicarse durante la experiencia.
            </p>
            <p className="mt-8 text-2xl font-black text-white">Primero construimos la confianza. Luego abrimos el mundo.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-black">Tu camino hacia Global</h3>
            <div className="mt-6 space-y-4">
              {['Practica constantemente.', 'Refuerza con clases y clubes.', 'Alcanza el nivel requerido.', 'Valida tu preparación.', 'Vive una experiencia internacional.'].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt font-black">{index + 1}</div>
                  <p className="font900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=82" alt="Estudiantes en comunidad" className="h-64 w-full rounded-lg object-cover shadow-soft" />
          <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=82" alt="Conversación grupal" className="mt-10 h-64 w-full rounded-lg object-cover shadow-soft" />
          <div className="rounded-lg bg-navy p-6 text-white shadow-soft">
            <UsersRound className="text-sky" size={28} />
            <p className="mt-4 text-2xl font-black">Practicar, conectar y avanzar.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=82" alt="Actividad colaborativa" className="h-56 w-full rounded-lg object-cover shadow-soft" />
        </div>
        <div>
          <SectionTitle
            title="Una comunidad para practicar, conectar y avanzar."
            text="Aprender inglés es más fácil cuando no lo haces solo. En INGLESCO buscamos construir una comunidad donde los alumnos practiquen, conversen, se motiven y compartan el proceso de convertir el idioma en parte de su vida."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {communityItems.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Card className="grid gap-8 bg-white p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge>Inscripción</Badge>
            <h2 className="mt-4 text-3xl font-black text-navy sm:text-4xl">Empieza tu camino en INGLESCO 2.0</h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/70">Practica inglés de forma constante, refuérzalo con profesores, conversa con una comunidad y prepárate para usarlo en el mundo real.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button onClick={() => onNavigate('plans')}>Quiero inscribirme <ArrowRight size={18} /></Button>
            <Button variant="secondary" onClick={() => onNavigate('plans')}>Ver planes</Button>
          </div>
        </Card>
      </section>

      <footer className="bg-navy px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Logo light />
          <p className="text-sm text-blue-100">Aprende. Practica. Vive el inglés.</p>
        </div>
      </footer>
    </main>
  )
}
