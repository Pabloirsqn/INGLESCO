import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '../assets/logo.jsx'
import { PricingSection } from '../components/PricingSection.jsx'
import { Button } from '../components/ui.jsx'

export function PlansPage({ onNavigate }) {
  const goToCheckout = (draft) => {
    onNavigate('checkout', draft)
  }

  return (
    <main className="min-h-screen bg-navy pb-[calc(12rem+env(safe-area-inset-bottom))] sm:pb-48">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <Button variant="secondary" onClick={() => onNavigate('landing')}><ArrowLeft size={17} /> Volver a la landing</Button>
        </div>
      </header>

      <PricingSection onCheckoutNavigate={goToCheckout} />
    </main>
  )
}
