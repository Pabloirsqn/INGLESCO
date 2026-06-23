import React, { useState } from 'react'
import {
  Award,
  BadgeCheck,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Coffee,
  Factory,
  Flame,
  Globe2,
  GraduationCap,
  Headphones,
  Home,
  Languages,
  LogOut,
  MapPin,
  Medal,
  MessageCircle,
  Mic,
  Plane,
  Play,
  Settings,
  Sparkles,
  Target,
  Trophy,
  UserRound,
  UsersRound,
  Video,
} from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import { Badge, Button, Card, ProgressBar } from '../components/ui.jsx'

const student = {
  name: 'María González',
  firstName: 'María',
  country: 'México',
  currentLevel: 'A2',
  currentUnit: 'Travel & Daily Conversations',
  currentUnitLabel: 'Unit 3 — Travel & Daily Conversations',
  unitProgress: 58,
  progressToNextLevel: 46,
  targetLevel: 'B1',
  globalRequiredLevel: 'C1',
  generalRank: 'Silver Explorer',
  streak: 6,
  weeklyMinutes: 142,
  totalMinutes: 760,
  classesTaken: 8,
  clubsAttended: 3,
  practicesCompleted: 14,
  unitsCompleted: 2,
  industryInterest: 'Travel & hospitality',
  goal: 'Viajar y comunicarse con más confianza',
  monthsInProgram: 2,
  participation: 78,
}

const levels = {
  A1: ['First Words & Daily Basics', 'Introductions & Simple Questions', 'Everyday Objects', 'Basic Travel Survival'],
  A2: ['Daily Life Conversations', 'Travel & Daily Conversations', 'Work Basics', 'Social English', 'Grammar in Real Use'],
  B1: ['Confident Conversations', 'Work & Industry English', 'Travel Independence', 'Presentations & Opinions', 'Global Prep 1'],
  B2: ['Professional Communication', 'Industry Conversations', 'Debate & Opinion', 'Global Culture', 'Global Prep 2'],
  C1: ['Advanced Fluency', 'Professional & Academic English', 'Real World Immersion', 'Global Readiness', 'Pre-Departure Practice'],
}

const unitSteps = [
  { title: 'Airports & Hotels', type: 'Practice 1', status: 'Completado' },
  { title: 'Asking for Directions', type: 'Practice 2', status: 'Completado' },
  { title: 'Online Class', type: 'Speaking Foundations', status: 'Completado' },
  { title: 'Coffee Talk Club', type: 'Conversation Club', status: 'En progreso' },
  { title: 'Mini Validation', type: 'Unit check', status: 'Próximo' },
]

const todayPlan = [
  { task: 'Completar práctica', detail: 'Travel Situations — 20 min', status: 'En progreso', cta: 'Empezar' },
  { task: 'Reservar club', detail: 'Coffee Talk — Travel Stories', status: 'Pendiente', cta: 'Reservar' },
  { task: 'Repasar vocabulario', detail: 'Airports & Hotels — 10 min', status: 'Pendiente', cta: 'Repasar' },
]

const nextClass = {
  title: 'Speaking Foundations',
  teacher: 'Laura Méndez',
  date: 'Miércoles',
  time: '7:00 PM',
  topic: 'Asking for help while traveling',
  related: 'Unit 3 — Travel & Daily Conversations',
  status: 'Programada',
}

const recommendedClub = {
  name: 'Coffee Talk: Travel Stories',
  mode: 'Presencial',
  place: 'Café Central',
  date: 'Sábado 11:00 AM',
  level: 'A2-B1',
  spots: '8 cupos',
  topic: 'Travel stories, airports and asking for help',
}

const practices = [
  { title: 'Airports & Hotels', skill: 'Vocabulary + Listening', status: 'Completado', duration: '18 min', progress: 100, context: 'Travel' },
  { title: 'Asking for Directions', skill: 'Speaking Prep + Vocabulary', status: 'En progreso', duration: '20 min', progress: 45, context: 'Travel' },
  { title: 'Ordering & Small Talk', skill: 'Speaking Prep', status: 'Pendiente', duration: '16 min', progress: 0, context: 'Real Life' },
  { title: 'Travel Problems', skill: 'Listening + Speaking Prep', status: 'Pendiente', duration: '22 min', progress: 0, context: 'Travel' },
  { title: 'Mini Validation', skill: 'Unit check', status: 'Próximo', duration: '12 min', progress: 0, context: 'Travel' },
]

const modules = [
  { title: 'Travel Situations', context: 'Travel', level: 'A2', progress: 62 },
  { title: 'Business Introductions', context: 'Business', level: 'A2-B1', progress: 48 },
  { title: 'Logistics Vocabulary', context: 'Logistics', level: 'B1', progress: 15 },
  { title: 'Medical Conversations', context: 'Medical', level: 'B1', progress: 0 },
  { title: 'Automotive Processes', context: 'Automotive', level: 'B1', progress: 0 },
  { title: 'Real Life Conversations', context: 'Real Life', level: 'A2', progress: 34 },
]

const classes = [
  { title: 'Speaking Foundations', teacher: 'Laura Méndez', date: 'Miércoles', time: '7:00 PM', topic: 'Asking for help while traveling', related: student.currentUnitLabel, status: 'Programada', feedback: 'Próxima sesión' },
  { title: 'Grammar in Real Use', teacher: 'Ana Torres', date: 'Viernes', time: '6:00 PM', topic: 'Questions in real conversations', related: 'Grammar in Real Use', status: 'Programada', feedback: 'Material listo' },
  { title: 'Pronunciation Lab', teacher: 'Sofia Reed', date: 'Lunes', time: '8:00 PM', topic: 'Clear vowel sounds', related: 'Social English', status: 'Pendiente', feedback: 'Sugerida' },
  { title: 'Travel English', teacher: 'Kevin Brown', date: 'Hace 4 días', time: '7:00 PM', topic: 'Hotel check-in', related: student.currentUnitLabel, status: 'Tomada', feedback: 'Buen avance en respuestas cortas' },
  { title: 'Conversation Review', teacher: 'Laura Méndez', date: 'Hace 10 días', time: '7:00 PM', topic: 'Daily routines', related: 'Daily Life Conversations', status: 'Tomada', feedback: 'Practicar conectores básicos' },
]

const clubEvents = [
  { name: 'Online Club: First Conversations', mode: 'Online', place: 'Sala virtual', date: 'Martes 8:00 PM', level: 'A1-A2', spots: '12 cupos', topic: 'Introductions and simple questions' },
  { name: 'Coffee Talk: Travel Stories', mode: 'Presencial', place: 'Café Central', date: 'Sábado 11:00 AM', level: 'A2-B1', spots: '8 cupos', topic: 'Travel stories, airports and asking for help' },
  { name: 'Park Talk: Daily Life', mode: 'Presencial', place: 'Parque México', date: 'Domingo 10:00 AM', level: 'A2', spots: '10 cupos', topic: 'Daily life, plans and routines' },
  { name: 'Business English Night', mode: 'Presencial', place: 'Cowork Norte', date: 'Jueves 7:30 PM', level: 'B1', spots: '6 cupos', topic: 'Meetings and short presentations' },
  { name: 'Bar Talk: Social English', mode: 'Presencial', place: 'Social Pub', date: 'Viernes 8:30 PM', level: 'B1', spots: '5 cupos', topic: 'Social English in relaxed settings' },
  { name: 'Global Culture Club', mode: 'Online', place: 'Sala virtual', date: 'Viernes 7:00 PM', level: 'A2-B1', spots: '15 cupos', topic: 'Culture, travel and international habits' },
]

const clubsAttended = ['Coffee Talk: Introductions', 'Online Club: Travel Basics', 'Global Culture Club']

const industries = [
  {
    name: 'Travel',
    full: 'Travel & hospitality',
    description: 'Practica conversaciones reales para moverte en aeropuertos, hoteles, restaurantes, tours y ciudades.',
    situations: ['Check-in en hotel', 'Pedir ayuda en aeropuerto', 'Ordenar en restaurante', 'Preguntar direcciones', 'Resolver un problema de viaje'],
    vocabulary: ['reservation', 'boarding pass', 'directions', 'check-in', 'delayed', 'nearby', 'recommendation'],
    modules: ['Travel Situations', 'Airports & Hotels', 'Asking for Help', 'Social Travel Conversations'],
    clubs: ['Coffee Talk: Travel Stories', 'Online Club: Travel Basics', 'Global Culture Club'],
  },
  {
    name: 'Logística',
    full: 'Logística y comercio exterior',
    description: 'Practica vocabulario y situaciones relacionadas con envíos, proveedores, rutas, operaciones y coordinación internacional.',
    situations: ['Coordinar un envío', 'Confirmar tiempos de entrega', 'Hablar con proveedores', 'Explicar un retraso', 'Revisar documentos básicos'],
    vocabulary: ['shipment', 'supplier', 'delivery time', 'delay', 'invoice', 'customs', 'route'],
    modules: ['Logistics Vocabulary', 'Supplier Calls', 'Operations Basics'],
    clubs: ['Business English Night'],
  },
  {
    name: 'Negocios',
    full: 'Negocios',
    description: 'Practica conversaciones para reuniones, seguimiento, presentaciones y acuerdos profesionales.',
    situations: ['Presentarte en una reunión', 'Explicar una idea', 'Negociar condiciones', 'Dar seguimiento por correo', 'Presentar resultados'],
    vocabulary: ['meeting', 'proposal', 'follow-up', 'deadline', 'budget', 'results', 'agreement'],
    modules: ['Business Introductions', 'Meeting Language', 'Email Follow-up'],
    clubs: ['Business English Night'],
  },
  {
    name: 'Medicina',
    full: 'Medicina y salud',
    description: 'Refuerza vocabulario clínico, atención y comunicación profesional en contextos de salud.',
    situations: ['Recibir a un paciente', 'Explicar síntomas', 'Dar indicaciones', 'Confirmar datos', 'Pedir antecedentes'],
    vocabulary: ['symptoms', 'appointment', 'treatment', 'pain', 'medical history', 'dosage'],
    modules: ['Medical Conversations'],
    clubs: ['Healthcare Talk'],
  },
  {
    name: 'Automotriz',
    full: 'Automotriz',
    description: 'Comunica procesos, calidad, producción y soporte técnico con mayor claridad.',
    situations: ['Explicar un proceso', 'Reportar una falla', 'Hablar de calidad', 'Dar soporte técnico', 'Describir una pieza'],
    vocabulary: ['assembly', 'quality', 'defect', 'maintenance', 'part', 'process'],
    modules: ['Automotive Processes'],
    clubs: ['Technical Talk'],
  },
  {
    name: 'Entrevistas',
    full: 'Entrevistas laborales',
    description: 'Habla de tu perfil, experiencia, fortalezas y objetivos con mayor claridad.',
    situations: ['Presentarte', 'Hablar de experiencia', 'Responder preguntas', 'Cerrar entrevista', 'Explicar logros'],
    vocabulary: ['strengths', 'experience', 'role', 'goals', 'challenge', 'achievement'],
    modules: ['Interview Practice'],
    clubs: ['Career Club'],
  },
]

const skillProgress = [
  ['Listening', 42],
  ['Speaking', 38],
  ['Reading', 55],
  ['Writing', 34],
  ['Vocabulary', 61],
  ['Grammar', 47],
]

const badgeTiers = ['Bronce', 'Plata', 'Oro', 'Diamante', 'ELITE']

const badges = [
  { name: 'Consistency Builder', category: 'Constancia de práctica', rank: 'Plata', progress: 6, target: 15, next: 'Oro', note: 'Te faltan 9 días de práctica para subir a Oro.' },
  { name: 'Practice Master', category: 'Prácticas completadas', rank: 'Bronce', progress: 14, target: 15, next: 'Plata', note: 'Te falta 1 práctica para subir a Plata.' },
  { name: 'Conversation Starter', category: 'Clubes asistidos', rank: 'Plata', progress: 3, target: 8, next: 'Oro', note: 'Asiste a 5 clubes más para subir a Oro.' },
  { name: 'Class Performer', category: 'Clases online tomadas', rank: 'Plata', progress: 8, target: 10, next: 'Oro', note: 'Te faltan 2 clases para subir a Oro.' },
  { name: 'Level Climber', category: 'Avance de nivel', rank: 'Bronce', progressLabel: 'A2 en progreso', next: 'Plata', note: 'Completa A2 para subir de rango.' },
  { name: 'Industry Explorer', category: 'Módulos de industria', rank: 'Bronce', progress: 1, target: 3, next: 'Plata', note: 'Completa 2 módulos de contexto más.' },
  { name: 'Global Candidate', category: 'Camino a Global', rank: 'En progreso', progressLabel: 'Meta C1', next: 'Bronce', note: 'Tu camino Global empieza al llegar a B1 y madura hacia C1.' },
  { name: 'Community Builder', category: 'Retos y eventos', rank: 'Bronce', progress: 2, target: 3, next: 'Plata', note: 'Participa en 1 reto más para subir a Plata.' },
]

const achievements = ['Primera semana completada', 'Primer club asistido', '5 clases tomadas', '10 prácticas completadas', 'Travel module iniciado']

const globalDestinations = [
  { city: 'Toronto', country: 'Canadá', duration: '2–4 semanas', focus: 'Conversación real, cultura urbana y comunidad internacional', status: 'Ruta sugerida', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=82' },
  { city: 'Vancouver', country: 'Canadá', duration: '2–4 semanas', focus: 'Vida diaria, naturaleza y práctica multicultural', status: 'Explorando', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=82' },
  { city: 'Kelowna', country: 'Canadá', duration: '6–8 semanas', focus: 'Comunidad local y práctica conversacional', status: 'Explorando', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82' },
  { city: 'Nueva York', country: 'Estados Unidos', duration: '2–4 semanas', focus: 'Cultura urbana, networking y vida diaria', status: 'Convocatoria futura', image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=82' },
  { city: 'Londres', country: 'Reino Unido', duration: '2–4 semanas', focus: 'Cultura, conversación y movilidad internacional', status: 'Próximamente', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=82' },
  { city: 'Dublín', country: 'Irlanda', duration: '2–4 semanas', focus: 'Cultura, conversación y actividades internacionales', status: 'Próximamente', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=900&q=82' },
  { city: 'Malta', country: 'Malta', duration: '2–4 semanas', focus: 'Vida diaria, cultura mediterránea y comunidad internacional', status: 'Explorando', image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=82' },
  { city: 'Sídney', country: 'Australia', duration: '6–8 semanas', focus: 'Cultura local, vida diaria y conversación real', status: 'Convocatoria futura', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=82' },
]

const nav = [
  { label: 'Inicio', icon: Home },
  { label: 'Mi práctica', icon: BookOpen },
  { label: 'Clases', icon: Video },
  { label: 'Clubes', icon: Coffee },
  { label: 'Industrias', icon: BriefcaseBusiness },
  { label: 'Progreso', icon: Trophy },
  { label: 'Medallas', icon: Medal },
  { label: 'INGLESCO Global', icon: Plane },
  { label: 'Comunidad', icon: UsersRound },
  { label: 'Perfil', icon: UserRound },
]

export function StudentApp({ onNavigate }) {
  const [active, setActive] = useState('Inicio')
  const [industryIndex, setIndustryIndex] = useState(0)

  const screens = {
    Inicio: <DashboardHome setActive={setActive} />,
    'Mi práctica': <PracticeScreen />,
    Clases: <ClassesScreen />,
    Clubes: <ClubsScreen />,
    Industrias: <IndustriesScreen activeIndex={industryIndex} setActiveIndex={setIndustryIndex} />,
    Progreso: <ProgressScreen setActive={setActive} />,
    Medallas: <MedalsScreen />,
    'INGLESCO Global': <GlobalScreen />,
    Comunidad: <CommunityScreen />,
    Perfil: <ProfileScreen />,
  }

  return (
    <StudentLayout active={active} setActive={setActive} onNavigate={onNavigate}>
      {screens[active]}
    </StudentLayout>
  )
}

function StudentLayout({ active, setActive, onNavigate, children }) {
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
            const selected = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font900 transition lg:w-full ${
                  selected ? 'bg-navy text-white' : 'text-ink/70 hover:bg-mist hover:text-navy'
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
        <header className="border-b border-line bg-white px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm font900 uppercase tracking-[0.18em] text-cobalt">INGLESCO 2.0</p>
              <h1 className="mt-2 text-3xl font-black text-navy">{active}</h1>
              <p className="mt-2 text-ink/65">{student.name} · {student.currentLevel} · {student.currentUnitLabel}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-4 xl:min-w-[680px]">
              <HeaderPill label="Rango" value={student.generalRank} />
              <HeaderPill label="Racha" value={`${student.streak} días`} />
              <HeaderPill label="Semana" value={`${student.weeklyMinutes} min`} />
              <Button className="py-2.5"><Play size={16} /> Practicar hoy</Button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-sm text-navy">
            <Bell size={18} className="text-cobalt" />
            <span className="font900">Tu siguiente acción:</span>
            reserva Coffee Talk para completar tu unidad y abrir la mini validación.
          </div>
        </header>
        <div className="px-5 pb-28 pt-6 sm:px-8">{children}</div>
      </main>
    </div>
  )
}

function HeaderPill({ label, value }) {
  return (
    <div className="rounded-lg border border-line bg-pearl px-4 py-2">
      <p className="text-xs font900 uppercase tracking-[0.12em] text-ink/45">{label}</p>
      <p className="font-black text-navy">{value}</p>
    </div>
  )
}

function DashboardHome({ setActive }) {
  return (
    <div className="space-y-6">
      <NextStepHero setActive={setActive} />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CurrentUnitPath />
        <TodayPlan />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <NextUnlock />
        <ClassClubBlock />
      </div>
      <GlobalPreview setActive={setActive} />
    </div>
  )
}

function NextStepHero({ setActive }) {
  return (
    <section className="overflow-hidden rounded-lg bg-navy text-white shadow-soft">
      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_340px] lg:p-8">
        <div>
          <Badge tone="blue">Tu siguiente paso</Badge>
          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
            Hola, {student.firstName}. Tu siguiente paso es practicar Travel Situations.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Estás en {student.currentLevel} · {student.currentUnitLabel}. Completa tu práctica de hoy para avanzar en tu unidad y acercarte a {student.targetLevel}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button onClick={() => setActive('Mi práctica')}><Play size={18} /> Empezar práctica de hoy</Button>
            <Button variant="secondary" onClick={() => setActive('Progreso')}>Ver mi unidad</Button>
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-5">
          <div className="grid grid-cols-2 gap-3">
            <HeroMetric label="Nivel actual" value={student.currentLevel} />
            <HeroMetric label="Racha" value={`${student.streak} días`} />
            <HeroMetric label="Unidad" value="58%" />
            <HeroMetric label="Hacia B1" value="46%" />
          </div>
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-sm font900 text-blue-100"><span>Progreso de unidad</span><span>{student.unitProgress}%</span></div>
            <ProgressBar value={student.unitProgress} />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMetric({ label, value }) {
  return (
    <div className="rounded-lg bg-white/10 p-4">
      <p className="text-xs font900 uppercase tracking-[0.12em] text-blue-100">{label}</p>
      <p className="mt-1 text-2xl font-black text-white">{value}</p>
    </div>
  )
}

function CurrentUnitPath() {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge>{student.currentLevel}</Badge>
          <h2 className="mt-3 text-2xl font-black text-navy">{student.currentUnitLabel}</h2>
        </div>
        <div className="min-w-52">
          <div className="mb-2 flex justify-between text-sm font900 text-ink/60"><span>Unidad</span><span>{student.unitProgress}%</span></div>
          <ProgressBar value={student.unitProgress} />
        </div>
      </div>
      <div className="mt-7 grid gap-3 lg:grid-cols-5">
        {unitSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-lg bg-pearl p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-black text-cobalt">{index + 1}</div>
            <p className="mt-4 font900 text-navy">{step.type}</p>
            <p className="mt-1 text-sm text-ink/60">{step.title}</p>
            <div className="mt-4"><StatusBadge status={step.status} /></div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function TodayPlan() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-navy">Plan de hoy</h2>
        <Badge>3 acciones</Badge>
      </div>
      <div className="mt-5 space-y-3">
        {todayPlan.map((item, index) => (
          <div key={item.task} className="grid gap-3 rounded-lg bg-pearl p-4 sm:grid-cols-[32px_1fr_auto] sm:items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-cobalt">{index + 1}</div>
            <div>
              <p className="font900 text-navy">{item.task}</p>
              <p className="text-sm text-ink/60">{item.detail}</p>
            </div>
            <Button className="px-3 py-2">{item.cta}</Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

function NextUnlock() {
  return (
    <Card className="grid gap-6 overflow-hidden p-0 md:grid-cols-[260px_1fr]">
      <div className="bg-navy p-6 text-white">
        <p className="text-sm font900 uppercase tracking-[0.14em] text-sky">Próximo desbloqueo</p>
        <div className="mt-6 flex justify-center">
          <MedalIcon rank="Plata" size="lg" />
        </div>
        <p className="mt-5 text-center text-xl font-black">Silver Consistency</p>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-black text-navy">Te faltan 2 prácticas para desbloquear un nuevo impulso.</h2>
        <p className="mt-3 leading-7 text-ink/70">Asiste a tu próximo club para completar Unit 3 y abrir tu mini validación.</p>
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm font900 text-ink/60"><span>Practice Master hacia Plata</span><span>14/15</span></div>
          <ProgressBar value={93} />
        </div>
        <div className="mt-5"><StatusBadge status="Próximo rango" /></div>
      </div>
    </Card>
  )
}

function ClassClubBlock() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-line p-6 md:border-b-0 md:border-r">
          <Video className="text-cobalt" size={28} />
          <h3 className="mt-4 text-xl font-black text-navy">Próxima clase online</h3>
          <p className="mt-2 text-2xl font-black text-cobalt">{nextClass.title}</p>
          <p className="mt-3 text-sm leading-6 text-ink/70">{nextClass.date} {nextClass.time} · Prof. {nextClass.teacher}</p>
          <p className="mt-2 text-sm text-ink/60">{nextClass.topic}</p>
          <div className="mt-5 flex gap-2">
            <Button className="px-3 py-2">Unirme</Button>
            <Button variant="secondary" className="px-3 py-2">Detalles</Button>
          </div>
        </div>
        <div className="p-6">
          <Coffee className="text-cobalt" size={28} />
          <h3 className="mt-4 text-xl font-black text-navy">Club recomendado</h3>
          <p className="mt-2 text-2xl font-black text-cobalt">{recommendedClub.name}</p>
          <p className="mt-3 text-sm leading-6 text-ink/70">{recommendedClub.date} · {recommendedClub.mode}</p>
          <p className="mt-2 text-sm text-ink/60">{recommendedClub.place} · Nivel {recommendedClub.level}</p>
          <Button className="mt-5 w-full">Reservar lugar</Button>
        </div>
      </div>
    </Card>
  )
}

function GlobalPreview({ setActive }) {
  return (
    <Card className="grid gap-6 bg-white p-6 lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <Badge>Camino a Global</Badge>
        <h2 className="mt-3 text-2xl font-black text-navy">Tu camino hacia INGLESCO Global</h2>
        <p className="mt-3 leading-7 text-ink/70">Sigue avanzando nivel por nivel. Al llegar a C1 y validar tu preparación, podrás aplicar a experiencias internacionales de 2–4 o 6–8 semanas.</p>
        <LevelPath />
        <p className="mt-4 text-sm font900 text-cobalt">Actualmente en A2, construyendo base para B1.</p>
      </div>
      <Button onClick={() => setActive('INGLESCO Global')}><Globe2 size={17} /> Explorar destinos</Button>
    </Card>
  )
}

function LevelPath() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {['A2 actual', 'B1', 'B2', 'C1', 'Global Candidate'].map((level, index) => (
        <React.Fragment key={level}>
          <span className={`rounded-full px-4 py-2 text-sm font900 ${index === 0 ? 'bg-navy text-white' : 'bg-blue-50 text-cobalt'}`}>{level}</span>
          {index < 4 && <span className="text-cobalt">→</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

function PracticeScreen() {
  const [filter, setFilter] = useState('Todos')
  const filters = ['Todos', 'Listening', 'Speaking Prep', 'Reading', 'Writing', 'Vocabulary', 'Grammar']
  const shown = filter === 'Todos' ? practices : practices.filter((practice) => practice.skill.includes(filter))

  return (
    <div className="space-y-6">
      <Card className="grid gap-6 bg-navy p-6 text-white lg:grid-cols-[1fr_320px]">
        <div>
          <Badge tone="blue">Mi práctica</Badge>
          <h2 className="mt-4 text-3xl font-black">{student.currentLevel} · {student.currentUnitLabel}</h2>
          <p className="mt-3 leading-7 text-blue-100">Práctica recomendada: Travel Situations — Asking for directions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button><Play size={17} /> Continuar práctica</Button>
            <Button variant="secondary">Ver unidad</Button>
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-5">
          <p className="font900">Progreso de unidad</p>
          <p className="mt-3 text-4xl font-black text-sky">{student.unitProgress}%</p>
          <div className="mt-4"><ProgressBar value={student.unitProgress} /></div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font900 ${filter === item ? 'bg-navy text-white' : 'bg-pearl text-ink/70 hover:bg-mist'}`}>{item}</button>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {shown.map((practice) => <PracticeRow key={practice.title} practice={practice} />)}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Módulos por contexto</h2>
          <div className="mt-5 space-y-3">
            {modules.map((module) => (
              <div key={module.title} className="rounded-lg bg-pearl p-4">
                <div className="mb-2 flex justify-between text-sm"><span className="font900 text-navy">{module.title}</span><span className="text-ink/60">{module.progress}%</span></div>
                <p className="mb-3 text-xs text-ink/55">{module.context} · {module.level}</p>
                <ProgressBar value={module.progress} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function PracticeRow({ practice }) {
  return (
    <div className="grid gap-4 rounded-lg bg-pearl p-4 md:grid-cols-[1fr_130px_110px] md:items-center">
      <div>
        <p className="font-black text-navy">{practice.title}</p>
        <p className="text-sm text-ink/60">{practice.skill} · {practice.duration}</p>
        <div className="mt-3 max-w-sm"><ProgressBar value={practice.progress} /></div>
      </div>
      <StatusBadge status={practice.status} />
      <Button className="px-4 py-2">{practice.status === 'Completado' ? 'Repasar' : 'Empezar'}</Button>
    </div>
  )
}

function ClassesScreen() {
  return (
    <div className="space-y-6">
      <Card className="grid gap-6 bg-navy p-6 text-white lg:grid-cols-[1fr_320px]">
        <div>
          <Badge tone="blue">Clases en línea</Badge>
          <h2 className="mt-4 text-3xl font-black">Refuerza lo que practicas en plataforma.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-blue-100">Profesores que te ayudan a resolver dudas, mejorar estructura y ganar confianza.</p>
          <div className="mt-6 flex gap-3">
            <Button><Video size={17} /> Unirme</Button>
            <Button variant="secondary">Ver material</Button>
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-5">
          <p className="font900">{nextClass.title}</p>
          <p className="mt-2 text-blue-100">{nextClass.date} {nextClass.time} · Prof. {nextClass.teacher}</p>
          <p className="mt-3 text-sm text-blue-100">{nextClass.topic}</p>
          <p className="mt-3 text-xs font900 text-sky">Relacionado con: {nextClass.related}</p>
        </div>
      </Card>
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Próximas clases</h2>
          <div className="mt-5 space-y-3">{classes.slice(0, 3).map((item) => <ClassRow key={item.title} item={item} />)}</div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Class Performer</h2>
          <MedalSummary badge={badges[3]} />
          <div className="mt-6 space-y-3">{classes.slice(3).map((item) => <ClassRow key={item.title} item={item} compact />)}</div>
        </Card>
      </div>
    </div>
  )
}

function ClassRow({ item, compact = false }) {
  return (
    <div className="rounded-lg bg-pearl p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font900 text-navy">{item.title}</p>
          <p className="text-sm text-ink/60">{item.teacher} · {item.date} · {item.time}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>
      {!compact && <p className="mt-3 text-sm text-ink/70">{item.topic} · {item.related}</p>}
      {compact && <p className="mt-2 text-sm text-ink/60">Feedback: {item.feedback}</p>}
    </div>
  )
}

function ClubsScreen() {
  return (
    <div className="space-y-6">
      <Card className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge>Club recomendado</Badge>
          <h2 className="mt-4 text-3xl font-black text-navy">{recommendedClub.name}</h2>
          <p className="mt-3 leading-7 text-ink/70">Practica inglés en espacios donde puedes hablar, escuchar, equivocarte y ganar confianza.</p>
          <Button className="mt-6">Reservar lugar</Button>
        </div>
        <div className="rounded-lg bg-blue-50 p-5">
          <p className="font900 text-navy">{recommendedClub.mode} · {recommendedClub.place}</p>
          <p className="mt-2 text-ink/70">{recommendedClub.date} · Nivel {recommendedClub.level} · {recommendedClub.spots}</p>
          <p className="mt-3 text-sm text-ink/60">{recommendedClub.topic}</p>
        </div>
      </Card>
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Próximos clubes</h2>
          <div className="mt-5 space-y-4">{clubEvents.map((event) => <ClubEventRow key={event.name} event={event} />)}</div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Conversation Starter</h2>
          <MedalSummary badge={badges[2]} />
          <h3 className="mt-6 font-black text-navy">Clubes asistidos</h3>
          <div className="mt-3 space-y-2">{clubsAttended.map((club) => <p key={club} className="rounded-lg bg-pearl px-4 py-3 text-sm font900 text-ink/70">{club} — asistido</p>)}</div>
        </Card>
      </div>
    </div>
  )
}

function ClubEventRow({ event }) {
  return (
    <div className="grid gap-4 rounded-lg bg-pearl p-4 lg:grid-cols-[1fr_130px_120px] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font900 text-navy">{event.name}</p>
          <Badge tone={event.mode === 'Online' ? 'blue' : 'green'}>{event.mode}</Badge>
        </div>
        <p className="mt-2 text-sm text-ink/70">{event.topic}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-ink/60"><MapPin size={15} /> {event.place} · {event.date} · Nivel {event.level} · {event.spots}</p>
      </div>
      <StatusBadge status="Próximo" />
      <Button className="px-4 py-2">Reservar</Button>
    </div>
  )
}

function IndustriesScreen({ activeIndex, setActiveIndex }) {
  const item = industries[activeIndex]
  return (
    <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
      <Card className="p-5">
        <h2 className="text-xl font-black text-navy">Inglés para lo que realmente necesitas</h2>
        <p className="mt-2 text-sm leading-6 text-ink/60">El inglés cambia según el contexto. Elige un enfoque para ver situaciones, vocabulario y módulos.</p>
        <div className="mt-5 flex flex-wrap gap-2 xl:block xl:space-y-2">
          {industries.map((industry, index) => (
            <button key={industry.name} onClick={() => setActiveIndex(index)} className={`rounded-full px-4 py-2 text-sm font900 xl:w-full xl:rounded-lg xl:text-left ${index === activeIndex ? 'bg-navy text-white' : 'bg-pearl text-ink/70 hover:bg-mist'}`}>{industry.full}</button>
          ))}
        </div>
      </Card>
      <Card className="p-6">
        <Badge>{item.full}</Badge>
        <h2 className="mt-4 text-3xl font-black text-navy">{item.name}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink/70">{item.description}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <InfoList title="Situaciones" items={item.situations} />
          <InfoList title="Vocabulario clave" items={item.vocabulary} />
          <InfoList title="Módulos" items={item.modules} />
          <InfoList title="Clubes" items={item.clubs} />
        </div>
      </Card>
    </div>
  )
}

function InfoList({ title, items }) {
  return (
    <div>
      <h3 className="font-black text-navy">{title}</h3>
      <div className="mt-4 space-y-2">{items.map((item) => <p key={item} className="rounded-lg bg-pearl px-4 py-3 text-sm font900 text-ink/70">{item}</p>)}</div>
    </div>
  )
}

function ProgressScreen({ setActive }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <ProgressRing value={student.progressToNextLevel} title={`Nivel ${student.currentLevel}`} subtitle={`${student.progressToNextLevel}% hacia ${student.targetLevel}`} />
        <Card className="p-6">
          <div className="grid gap-5 md:grid-cols-3">
            <Metric label="Unidad actual" value={student.currentUnit} note={`${student.unitProgress}% completada`} />
            <Metric label="Próxima validación" value="Pendiente" note="Se abre después del club" />
            <Metric label="Rango general" value={student.generalRank} note="Construyendo base" />
          </div>
        </Card>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Avance por habilidad</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{skillProgress.map(([skill, value]) => <SkillBar key={skill} label={skill} value={value} />)}</div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Actividad acumulada</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <MiniStat label="Semana" value={`${student.weeklyMinutes} min`} />
            <MiniStat label="Total" value={`${student.totalMinutes} min`} />
            <MiniStat label="Clases" value={student.classesTaken} />
            <MiniStat label="Clubes" value={student.clubsAttended} />
            <MiniStat label="Prácticas" value={student.practicesCompleted} />
            <MiniStat label="Unidades" value={student.unitsCompleted} />
          </div>
        </Card>
      </div>
      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-navy">Mis medallas</h2>
            <p className="mt-1 text-ink/60">Obtenidas, en progreso y próximas.</p>
          </div>
          <Button onClick={() => setActive('Medallas')}>Ver colección</Button>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{badges.slice(0, 4).map((badge) => <BadgeCard key={badge.name} badge={badge} compact />)}</div>
      </Card>
      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Logros recientes</h2>
          <div className="mt-5 flex flex-wrap gap-3">{achievements.map((item) => <AchievementBadge key={item}>{item}</AchievementBadge>)}</div>
        </Card>
        <Card className="bg-navy p-6 text-white">
          <Target className="text-sky" size={30} />
          <h2 className="mt-4 text-xl font-black">Próximo objetivo recomendado</h2>
          <p className="mt-3 leading-7 text-blue-100">Asiste a un club de conversación esta semana para completar tu unidad actual.</p>
        </Card>
      </div>
    </div>
  )
}

function MedalsScreen() {
  return (
    <div className="space-y-6">
      <Card className="grid gap-6 bg-navy p-6 text-white lg:grid-cols-[1fr_320px]">
        <div>
          <Badge tone="blue">Rango general</Badge>
          <h2 className="mt-4 text-4xl font-black">{student.generalRank}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-blue-100">Tus medallas reflejan constancia, práctica, clases, clubes, comunidad y avance hacia Global.</p>
        </div>
        <div className="rounded-lg bg-white/10 p-5">
          <p className="font900">Próxima mejora</p>
          <p className="mt-3 text-2xl font-black text-sky">Practice Master Plata</p>
          <p className="mt-2 text-blue-100">Te falta 1 práctica para subir de rango.</p>
        </div>
      </Card>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{badges.map((badge) => <BadgeCard key={badge.name} badge={badge} />)}</div>
    </div>
  )
}

function BadgeCard({ badge, compact = false }) {
  const hasProgress = typeof badge.progress === 'number'
  const percent = hasProgress ? Math.min(100, Math.round((badge.progress / badge.target) * 100)) : 38
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <MedalIcon rank={badge.rank} />
        <div>
          <h3 className="font-black text-navy">{badge.name}</h3>
          <p className="mt-1 text-xs text-ink/55">{badge.category}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <RankBadge rank={badge.rank} />
        <Badge tone="locked">Próximo: {badge.next}</Badge>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs font900 text-ink/60">
          <span>{hasProgress ? `${badge.progress}/${badge.target}` : badge.progressLabel}</span>
          <span>{hasProgress ? `${percent}%` : 'En camino'}</span>
        </div>
        <ProgressBar value={percent} />
      </div>
      {!compact && <p className="mt-4 text-sm leading-6 text-ink/70">{badge.note}</p>}
      {!compact && <div className="mt-4 flex flex-wrap gap-1">{badgeTiers.map((tier) => <BadgeTier key={tier} tier={tier} active={tier === badge.rank} />)}</div>}
    </Card>
  )
}

function MedalSummary({ badge }) {
  return (
    <div className="mt-5 rounded-lg bg-pearl p-5">
      <div className="flex items-center gap-4">
        <MedalIcon rank={badge.rank} />
        <div>
          <p className="font-black text-navy">{badge.name} — {badge.rank}</p>
          <p className="text-sm text-ink/60">{badge.progress}/{badge.target} hacia {badge.next}</p>
        </div>
      </div>
      <div className="mt-4"><ProgressBar value={Math.round((badge.progress / badge.target) * 100)} /></div>
    </div>
  )
}

function GlobalScreen() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden bg-navy text-white">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_360px] lg:p-8">
          <div>
            <Badge tone="blue">INGLESCO Global</Badge>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Tu inglés puede llevarte más lejos.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-blue-100">Al llegar a C1 y validar tu preparación, podrás aplicar a experiencias internacionales de 2–4 semanas o 6–8 semanas para practicar tu inglés en un entorno real.</p>
            <p className="mt-4 text-blue-100">Para cuidar la experiencia, buscamos que cada alumno llegue con la confianza suficiente para comunicarse, convivir y aprovechar al máximo su estancia.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-5">
            <p className="font900">Tu preparación actual</p>
            <div className="mt-4 space-y-3">
              <GlobalMetric label="Nivel actual" value="A2" progress={24} />
              <GlobalMetric label="Meta Global" value="C1" progress={24} />
              <GlobalMetric label="Participación" value="78%" progress={78} />
              <GlobalMetric label="Tiempo" value="2 meses" progress={50} />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-black text-navy">Tu camino hacia Global</h2>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {['A2 actual', 'B1', 'B2', 'C1', 'Validación Global', 'Experiencia internacional'].map((step, index) => (
            <React.Fragment key={step}>
              <span className={`rounded-full px-4 py-2 text-sm font900 ${index === 0 ? 'bg-navy text-white' : 'bg-blue-50 text-cobalt'}`}>{step}</span>
              {index < 5 && <span className="text-cobalt">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-5 font900 text-cobalt">Estás en A2. Tu siguiente meta es avanzar hacia B1.</p>
      </Card>

      <section>
        <h2 className="text-2xl font-black text-navy">Destinos aspiracionales</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{globalDestinations.map((destination) => <DestinationCard key={destination.city} destination={destination} />)}</div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Pasos para prepararte</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {['Llegar a nivel C1', 'Cumplir periodo mínimo dentro de INGLESCO', 'Mantener participación constante', 'Validar preparación antes de viajar', 'Elegir una convocatoria disponible'].map((item) => <p key={item} className="rounded-lg bg-pearl p-4 font900 text-ink/70">{item}</p>)}
          </div>
        </Card>
        <Card className="bg-navy p-6 text-white">
          <Plane className="text-sky" size={34} />
          <h2 className="mt-5 text-2xl font-black">Primero construimos la confianza. Luego abrimos el mundo.</h2>
          <p className="mt-4 text-blue-100">Próximo paso: completar A2 y avanzar a B1.</p>
        </Card>
      </div>
    </div>
  )
}

function DestinationCard({ destination }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
      <img src={destination.image} alt={`${destination.city}, ${destination.country}`} className="h-40 w-full object-cover" />
      <div className="p-5">
        <Badge>{destination.status}</Badge>
        <h3 className="mt-4 text-xl font-black text-navy">{destination.city}</h3>
        <p className="text-sm font900 text-cobalt">{destination.country}</p>
        <p className="mt-3 text-sm text-ink/60">Duración: {destination.duration} · Nivel sugerido: C1</p>
        <p className="mt-3 text-sm leading-6 text-ink/70">{destination.focus}</p>
      </div>
    </div>
  )
}

function CommunityScreen() {
  const posts = [
    ['Reto semanal', 'Introduce yourself in 60 seconds. Suma avance para Community Builder.'],
    ['Evento', 'Global Culture Club — Friday 7 PM. Conversación sobre cultura y viajes.'],
    ['Historia de avance', 'Ana completed her first Coffee Talk and unlocked Conversation Starter Bronze.'],
    ['Anuncio', 'Este sábado habrá Coffee Talk presencial para niveles A2-B1.'],
  ]
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <Card className="p-6">
        <Badge>Comunidad INGLESCO</Badge>
        <h2 className="mt-4 text-2xl font-black text-navy">Retos, historias y espacios para practicar.</h2>
        <div className="mt-6 space-y-4">{posts.map(([title, text]) => <FeedItem key={title} title={title} text={text} />)}</div>
      </Card>
      <Card className="p-6">
        <h2 className="text-xl font-black text-navy">Community Builder</h2>
        <MedalSummary badge={badges[7]} />
        <h3 className="mt-6 font-black text-navy">Próximos eventos</h3>
        <div className="mt-3 space-y-3">{clubEvents.slice(0, 4).map((event) => <p key={event.name} className="rounded-lg bg-blue-50 p-4 text-sm font900 text-navy">{event.name} · {event.date}</p>)}</div>
      </Card>
    </div>
  )
}

function FeedItem({ title, text }) {
  return (
    <div className="rounded-lg bg-pearl p-5">
      <p className="font-black text-navy">{title}</p>
      <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
    </div>
  )
}

function ProfileScreen() {
  const fields = [
    ['Nombre', student.name],
    ['País', student.country],
    ['Nivel actual', student.currentLevel],
    ['Unidad actual', student.currentUnit],
    ['Objetivo principal', student.goal],
    ['Industria/contexto', student.industryInterest],
    ['Preferencia de clubes', 'Online / presencial / ambos'],
    ['Rango general', student.generalRank],
    ['Camino a Global', 'Camino a C1'],
  ]
  return (
    <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
      <Card className="bg-navy p-6 text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cobalt text-3xl font-black">MG</div>
        <h2 className="mt-5 text-2xl font-black">{student.name}</h2>
        <p className="mt-2 text-blue-100">Rango actual: {student.generalRank}</p>
        <p className="mt-1 text-blue-100">Meta: llegar a {student.targetLevel}</p>
        <div className="mt-6"><ProgressBar value={student.progressToNextLevel} /></div>
      </Card>
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-navy">Perfil del alumno</h2>
            <Button variant="secondary" className="px-4 py-2"><Settings size={16} /> Configurar</Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{fields.map(([label, value]) => <Metric key={label} label={label} value={value} />)}</div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-black text-navy">Medallas principales</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">{badges.slice(0, 3).map((badge) => <BadgeCard key={badge.name} badge={badge} compact />)}</div>
        </Card>
      </div>
    </div>
  )
}

function GlobalMetric({ label, value, progress }) {
  return (
    <div>
      <div className="mb-2 flex justify-between gap-4 text-sm"><span className="font900 text-white">{label}</span><span className="text-blue-100">{value}</span></div>
      <ProgressBar value={progress} />
    </div>
  )
}

function Metric({ label, value, note }) {
  return (
    <div className="rounded-lg bg-pearl p-4">
      <p className="text-xs font900 uppercase tracking-[0.12em] text-ink/45">{label}</p>
      <p className="mt-1 font-black text-navy">{value}</p>
      {note && <p className="mt-1 text-sm text-ink/60">{note}</p>}
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-lg bg-pearl p-4">
      <p className="text-xs font900 uppercase tracking-[0.12em] text-ink/45">{label}</p>
      <p className="mt-1 text-2xl font-black text-navy">{value}</p>
    </div>
  )
}

function ProgressRing({ value, title, subtitle }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-5">
        <div className="grid h-28 w-28 place-items-center rounded-full" style={{ background: `conic-gradient(#1067ff ${value * 3.6}deg, #eaf1fb 0deg)` }}>
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white">
            <span className="text-2xl font-black text-navy">{value}%</span>
          </div>
        </div>
        <div>
          <p className="text-xl font-black text-navy">{title}</p>
          <p className="mt-1 text-sm text-ink/60">{subtitle}</p>
        </div>
      </div>
    </Card>
  )
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm"><span className="font900 text-navy">{label}</span><span className="text-ink/60">{value}%</span></div>
      <ProgressBar value={value} />
    </div>
  )
}

function MedalIcon({ rank, size = 'md' }) {
  const colors = {
    Bronce: 'from-amber-700 to-orange-300',
    Plata: 'from-slate-500 to-slate-100',
    Oro: 'from-yellow-500 to-amber-100',
    Diamante: 'from-cyan-500 to-blue-100',
    ELITE: 'from-navy to-cobalt',
    'En progreso': 'from-blue-200 to-slate-100',
  }
  const dimensions = size === 'lg' ? 'h-28 w-28 text-4xl' : 'h-14 w-14 text-xl'
  return (
    <div className={`grid ${dimensions} shrink-0 place-items-center rounded-[22px] bg-gradient-to-br ${colors[rank] || colors['En progreso']} font-black text-white shadow-soft`}>
      <Medal size={size === 'lg' ? 42 : 24} />
    </div>
  )
}

function RankBadge({ rank }) {
  const label = rank === 'En progreso' ? 'En progreso' : rank
  return <span className="rounded-full bg-navy px-3 py-1 text-xs font900 text-white">{label}</span>
}

function BadgeTier({ tier, active }) {
  return <span className={`rounded-full px-2 py-1 text-[10px] font900 ${active ? 'bg-cobalt text-white' : 'bg-pearl text-ink/45'}`}>{tier}</span>
}

function AchievementBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font900 text-cobalt">
      <Award size={16} />
      {children}
    </span>
  )
}

function StatusBadge({ status }) {
  const tone = {
    Completado: 'bg-emerald-50 text-emerald-700',
    Tomada: 'bg-emerald-50 text-emerald-700',
    'En progreso': 'bg-blue-50 text-cobalt',
    Programada: 'bg-blue-50 text-cobalt',
    Próximo: 'bg-amber-50 text-amber-700',
    'Próximo rango': 'bg-amber-50 text-amber-700',
    Pendiente: 'bg-slate-100 text-slate-600',
    Cancelada: 'bg-rose-50 text-rose-700',
  }[status] || 'bg-slate-100 text-slate-600'

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font900 ${tone}`}>{status}</span>
}
