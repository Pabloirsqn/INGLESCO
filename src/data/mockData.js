import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Globe2,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Lock,
  Megaphone,
  MessageCircle,
  Plane,
  Radio,
  Settings,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  UsersRound,
  Video,
} from 'lucide-react'

export const benefits = [
  { title: 'Clases en vivo', text: 'Sesiones con profesores y grupos reducidos para hablar desde la primera semana.', icon: Video },
  { title: 'Plataforma de práctica', text: 'Rutas, ejercicios y retos breves para sostener el avance todos los días.', icon: BookOpen },
  { title: 'IA para conversación', text: 'Refuerzo guiado para practicar situaciones reales sin miedo a equivocarte.', icon: Bot },
  { title: 'Seguimiento personalizado', text: 'Indicadores claros, recomendaciones y acompañamiento por nivel.', icon: ClipboardCheck },
  { title: 'Comunidad internacional', text: 'Espacios para conectar, practicar y celebrar logros con otros estudiantes.', icon: UsersRound },
  { title: 'Oportunidades internacionales', text: 'Una ruta aspiracional hacia experiencias que se desbloquean con avance validado.', icon: Globe2 },
]

export const steps = [
  ['Diagnóstico inicial', 'Conocemos tu nivel, metas y disponibilidad real.'],
  ['Ruta personalizada', 'Asignamos módulos y retos acordes a tu objetivo.'],
  ['Clases + práctica continua', 'Combinas sesiones en vivo, IA y actividades guiadas.'],
  ['Avance, comunidad y oportunidades', 'Validas progreso y desbloqueas nuevas experiencias.'],
]

export const plans = [
  { name: 'Starter', price: '$29', tag: 'Preventa', features: ['Ruta base A1-A2', '2 clases grupales al mes', 'Práctica IA limitada'] },
  { name: 'Growth', price: '$59', tag: 'Más popular', features: ['Ruta personalizada', 'Clases semanales', 'Seguimiento mensual', 'Comunidad activa'] },
  { name: 'Global', price: '$89', tag: 'Visión internacional', features: ['Clases semanales + mentoría', 'Validaciones de progreso', 'Ruta a oportunidades'] },
]

export const testimonials = [
  { name: 'María G.', role: 'Estudiante B1', text: 'Ahora practico sin pena y siento que el inglés ya forma parte de mi semana.' },
  { name: 'Juan P.', role: 'Profesional', text: 'Las clases se sienten útiles, cercanas y conectadas con situaciones reales.' },
  { name: 'Valeria S.', role: 'Universitaria', text: 'La comunidad me mantiene constante y la IA me ayuda a reforzar conversación.' },
]

export const studentNav = [
  { label: 'Dashboard', icon: BarChart3 },
  { label: 'Mi progreso', icon: Trophy },
  { label: 'Clases', icon: CalendarDays },
  { label: 'Práctica con IA', icon: Bot },
  { label: 'Comunidad', icon: MessageCircle },
  { label: 'Oportunidades internacionales', icon: Plane },
  { label: 'Certificados/logros', icon: Award },
  { label: 'Perfil', icon: UserRound },
]

export const adminNav = [
  { label: 'Dashboard general', icon: BarChart3 },
  { label: 'Alumnos', icon: GraduationCap },
  { label: 'Leads', icon: Megaphone },
  { label: 'Embajadores', icon: HeartHandshake },
  { label: 'Pagos', icon: CreditCard },
  { label: 'Progreso académico', icon: ClipboardCheck },
  { label: 'Oportunidades', icon: Globe2 },
  { label: 'Configuración', icon: Settings },
]

export const ambassadorNav = [
  { label: 'Dashboard comercial', icon: BarChart3 },
  { label: 'Mi código/link', icon: Radio },
  { label: 'Leads generados', icon: Megaphone },
  { label: 'Alumnos inscritos', icon: GraduationCap },
  { label: 'Comisiones', icon: HandCoins },
  { label: 'Materiales de venta', icon: Sparkles },
  { label: 'Ranking básico', icon: Trophy },
]

export const studentStats = [
  { label: 'Nivel actual', value: 'Intermedio B1', note: '62% de la ruta', icon: BadgeCheck },
  { label: 'Progreso semanal', value: '7.5 h', note: '+18% vs semana pasada', icon: BarChart3 },
  { label: 'Próxima clase', value: 'Miércoles 7:00 PM', note: 'Conversación esencial', icon: CalendarDays },
  { label: 'Racha de práctica', value: '12 días', note: 'Meta: 20 días', icon: Star },
]

export const modules = [
  { title: 'Work conversations', progress: 74, status: 'Activo' },
  { title: 'Travel confidence', progress: 48, status: 'Activo' },
  { title: 'Grammar in context', progress: 82, status: 'Casi listo' },
]

export const adminStats = [
  ['Total de alumnos', '1,248', '+9.4%'],
  ['Alumnos activos', '936', '75% activos'],
  ['Leads nuevos', '186', 'Esta semana'],
  ['Embajadores activos', '42', '+6 este mes'],
  ['Ingresos estimados', '$38,420', 'MRR mock'],
  ['Retención mensual', '88%', '+3 pts'],
  ['Listos para evaluación', '73', 'B1-B2'],
  ['Candidatos internacionales', '29', 'Validación pendiente'],
]

export const leadRows = [
  ['Ana Torres', 'México', 'A2', 'Viajar con confianza', 'Nuevo'],
  ['Luis Herrera', 'Colombia', 'B1', 'Trabajo remoto', 'Contactado'],
  ['Camila Ruiz', 'Perú', 'A1', 'Estudiar fuera', 'Agendado'],
  ['Diego Soto', 'Chile', 'B2', 'Certificación', 'Evaluación'],
]

export const ambassadorStats = [
  ['Activaciones del mes', '18', 'Meta: 24'],
  ['Comisión por activación', '$12', 'Plan Growth'],
  ['Comisión mensual estimada', '$624', '+22%'],
  ['Leads pendientes', '37', 'Por contactar'],
  ['Alumnos activos referidos', '86', 'Retención 81%'],
]

export const ambassadorRows = [
  ['Laura M.', 'Growth', 'Activo', '$12'],
  ['Carlos D.', 'Starter', 'Pendiente', '$8'],
  ['Natalia C.', 'Global', 'Activo', '$18'],
  ['Sergio R.', 'Growth', 'Activo', '$12'],
]

export const opportunityRequirements = [
  { label: 'Permanencia mínima', done: true, icon: CheckCircle2 },
  { label: 'Validación de aprendizaje', done: false, icon: Lock },
  { label: 'Nivel requerido B2', done: false, icon: Lock },
]
