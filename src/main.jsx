import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { LandingPage } from './pages/LandingPage.jsx'
import { PlansPage } from './pages/PlansPage.jsx'
import { StudentApp } from './pages/StudentApp.jsx'
import { AdminApp } from './pages/AdminApp.jsx'
import { AmbassadorApp } from './pages/AmbassadorApp.jsx'
import { RoleSwitch } from './components/RoleSwitch.jsx'

const views = {
  landing: LandingPage,
  plans: PlansPage,
  student: StudentApp,
  admin: AdminApp,
  ambassador: AmbassadorApp,
}

function viewFromPath() {
  return window.location.pathname === '/planes' || window.location.pathname === '/checkout' ? 'plans' : 'landing'
}

function App() {
  const [view, setViewState] = useState(viewFromPath)
  const CurrentView = views[view]

  function setView(nextView) {
    setViewState(nextView)
    if (nextView === 'landing' || nextView === 'plans') {
      const nextPath = nextView === 'plans' ? '/planes' : '/'
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath)
      }
    }
  }

  useEffect(() => {
    const onPopState = () => setViewState(viewFromPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <RoleSwitch current={view} onChange={setView} />
      <CurrentView onNavigate={setView} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
