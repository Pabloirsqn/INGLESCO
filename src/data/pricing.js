export const CURRENCIES = ['USD', 'MXN']
export const VALID_AMBASSADOR_CODE = 'JPABLO20'

export const PRICING = [
  {
    id: 'starter',
    name: 'Starter',
    unselectedBadge: 'Ideal para empezar',
    positioning: 'Empieza con lo esencial.',
    description: 'Para quienes quieren comenzar con una ruta accesible, práctica y acompañada.',
    cta: 'Elegir Starter',
    note: 'Experiencia internacional sujeta a avance, nivel requerido, validación académica y disponibilidad.',
    highlights: ['3 hrs/semana', 'Ruta 2 semanas', 'Accesible'],
    prices: {
      USD: { normalMonthly: 51, ambassadorMonthly: 39, normalActivation: 29, ambassadorActivation: 19 },
      MXN: { normalMonthly: 979, ambassadorMonthly: 749, normalActivation: 549, ambassadorActivation: 349 },
    },
    features: [
      '3 horas de clases en vivo a la semana',
      'Plataforma 24/7 + práctica con IA',
      'Comunidad internacional y clubes de conversación',
      'Materiales digitales y seguimiento de avance',
      'Ruta de preparación para experiencia internacional de 2 semanas',
    ],
  },
  {
    id: 'global',
    name: 'Global',
    recommended: true,
    unselectedBadge: 'Recomendado',
    positioning: 'Avanza más rápido y prepárate para oportunidades globales.',
    description: 'Para avanzar más rápido y usar el inglés en trabajo, viajes y oportunidades globales.',
    cta: 'Avanzar con Global',
    note: 'Experiencias internacionales sujetas a avance, nivel requerido, validación académica, perfil del alumno y disponibilidad.',
    highlights: ['6 hrs/semana', '2 a 8 semanas', 'Empleabilidad + networking'],
    prices: {
      USD: { normalMonthly: 77, ambassadorMonthly: 59, normalActivation: 59, ambassadorActivation: 39 },
      MXN: { normalMonthly: 1429, ambassadorMonthly: 1099, normalActivation: 1099, ambassadorActivation: 749 },
    },
    features: [
      'Todo lo del Plan Starter',
      '6 horas de clases en vivo a la semana',
      'Mayor acompañamiento académico',
      'Talleres de empleabilidad y entrevistas en inglés',
      'Networking internacional guiado',
      'Ruta prioritaria para experiencias internacionales de 2 a 8 semanas',
    ],
  },
]

export function formatPrice(amount, currency) {
  return `$${amount.toLocaleString('en-US')} ${currency}`
}

export function getPrices(plan, currency, isAmbassador) {
  const prices = plan.prices[currency] || plan.prices.MXN
  const monthly = isAmbassador ? prices.ambassadorMonthly : prices.normalMonthly
  const activation = isAmbassador ? prices.ambassadorActivation : prices.normalActivation

  return {
    ...prices,
    monthly,
    activation,
    initialTotal: monthly + activation,
    monthlySavings: prices.normalMonthly - prices.ambassadorMonthly,
    activationSavings: prices.normalActivation - prices.ambassadorActivation,
  }
}

export function normalizeAmbassadorCode(code = '') {
  const normalized = code.trim().toUpperCase()
  return normalized === VALID_AMBASSADOR_CODE ? VALID_AMBASSADOR_CODE : ''
}

export function buildCheckoutDraft({ planId = 'starter', currency = 'MXN', code = '' } = {}) {
  const selectedPlan = PRICING.find((plan) => plan.id === planId) || PRICING[0]
  const selectedCurrency = CURRENCIES.includes(currency) ? currency : 'MXN'
  const ambassadorCode = normalizeAmbassadorCode(code)
  const isAmbassadorApplied = Boolean(ambassadorCode)
  const prices = getPrices(selectedPlan, selectedCurrency, isAmbassadorApplied)

  return {
    planId: selectedPlan.id,
    plan: selectedPlan.name,
    currency: selectedCurrency,
    tariffType: isAmbassadorApplied ? 'Embajador' : 'Normal',
    isAmbassadorApplied,
    code: ambassadorCode,
    monthly: prices.monthly,
    activation: prices.activation,
    initialTotal: prices.initialTotal,
    monthlyLabel: formatPrice(prices.monthly, selectedCurrency),
    activationLabel: formatPrice(prices.activation, selectedCurrency),
    initialTotalLabel: formatPrice(prices.initialTotal, selectedCurrency),
  }
}
