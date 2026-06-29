import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { LandingPage } from './pages/LandingPage.jsx'
import { PlansPage } from './pages/PlansPage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { StudentApp } from './pages/StudentApp.jsx'
import { AdminApp } from './pages/AdminApp.jsx'
import { AmbassadorApp } from './pages/AmbassadorApp.jsx'
import { RoleSwitch } from './components/RoleSwitch.jsx'

const views = {
  landing: LandingPage,
  plans: PlansPage,
  checkout: CheckoutPage,
  student: StudentApp,
  admin: AdminApp,
  ambassador: AmbassadorApp,
}

function viewFromPath() {
  if (window.location.pathname === '/checkout') return 'checkout'
  return window.location.pathname === '/planes' ? 'plans' : 'landing'
}

function scrollToPageTop() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })
}

function App() {
  const [view, setViewState] = useState(viewFromPath)
  const CurrentView = views[view]

  function setView(nextView, payload) {
    setViewState(nextView)
    if (nextView === 'landing' || nextView === 'plans' || nextView === 'checkout') {
      let nextPath = nextView === 'plans' ? '/planes' : '/'
      if (nextView === 'checkout') {
        const params = new URLSearchParams()
        if (payload?.planId) params.set('plan', payload.planId)
        if (payload?.currency) params.set('currency', payload.currency)
        if (payload?.code) params.set('code', payload.code)
        nextPath = `/checkout${params.toString() ? `?${params.toString()}` : ''}`
        if (payload) window.localStorage?.setItem('inglescoCheckoutDraft', JSON.stringify(payload))
      }
      const currentPath = `${window.location.pathname}${window.location.search}`
      if (currentPath !== nextPath) {
        window.history.pushState({}, '', nextPath)
      }
    }
    if (nextView === 'plans' || nextView === 'checkout') scrollToPageTop()
  }

  useEffect(() => {
    const onPopState = () => {
      const nextView = viewFromPath()
      setViewState(nextView)
      if (nextView === 'plans' || nextView === 'checkout') scrollToPageTop()
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (view === 'plans' || view === 'checkout') scrollToPageTop()
  }, [view])

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <RoleSwitch current={view} onChange={setView} />
      <CurrentView onNavigate={setView} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
