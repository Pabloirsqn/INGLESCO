import React, { useRef, useState } from 'react'
import { Globe2, Languages, MessageCircle, Video } from 'lucide-react'
import heroGlobalImage from '../assets/hero-inglesco-global.png'

const heroAccordionItems = [
  {
    title: 'Plataforma',
    text: 'Practica a tu ritmo con rutas claras y avance visible.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=84',
    icon: Languages,
    mobileOrderClass: 'order-2 lg:order-none',
  },
  {
    title: 'Clases en línea',
    text: 'Refuerza tu inglés con guía real y sesiones enfocadas.',
    image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=900&q=84',
    icon: Video,
    mobileOrderClass: 'order-3 lg:order-none',
  },
  {
    title: 'Networking en inglés',
    text: 'Conecta, conversa y gana confianza en comunidad.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=84',
    icon: MessageCircle,
    mobileOrderClass: 'order-4 lg:order-none',
  },
  {
    title: 'INGLESCO Global',
    text: 'Lleva tu inglés hacia experiencias internacionales.',
    image: heroGlobalImage,
    icon: Globe2,
    mobileOrderClass: 'order-1 lg:order-none',
  },
]

const mobileDotOrder = ['INGLESCO Global', 'Plataforma', 'Clases en lÃ­nea', 'Networking en inglÃ©s']

export function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollerRef = useRef(null)

  const handleMobileScroll = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cards = Array.from(scroller.querySelectorAll('[data-accordion-index]'))
    const activeCard = cards.reduce((closest, card) => {
      const distance = Math.abs(card.offsetLeft - scroller.scrollLeft)
      return !closest || distance < closest.distance ? { card, distance } : closest
    }, null)

    const nextIndex = Number(activeCard?.card?.dataset.accordionIndex)
    if (Number.isInteger(nextIndex)) setActiveIndex(nextIndex)
  }

  return (
    <div className="w-full max-w-full overflow-hidden rounded-[24px] border border-white/35 bg-[rgba(231,238,247,0.28)] p-2.5 shadow-[0_30px_90px_rgba(6,31,73,0.16)] backdrop-blur-md sm:p-4 lg:rounded-[28px]">
      <div className="mb-2 flex items-center justify-between gap-3 px-1 text-xs font900 text-blue-50/90 lg:hidden">
        <span>Desliza para explorar</span>
        <span aria-hidden="true" className="text-sky">-&gt;</span>
      </div>
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden lg:h-[470px] lg:snap-none lg:gap-3.5 lg:overflow-hidden lg:pb-0"
          onScroll={handleMobileScroll}
        >
        {heroAccordionItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === activeIndex

          return (
            <button
              key={item.title}
              data-accordion-index={index}
              className={`group relative h-[268px] min-w-[80vw] max-w-[80vw] snap-start overflow-hidden rounded-[22px] border border-white/35 text-left shadow-[0_20px_54px_rgba(6,31,73,0.18)] outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-sky/80 sm:h-80 sm:min-w-[320px] sm:max-w-[320px] lg:h-full lg:min-w-0 lg:max-w-none lg:snap-center lg:rounded-[24px] ${item.mobileOrderClass} ${
                isActive ? 'lg:flex-[3.8]' : 'lg:flex-[0.74]'
              }`}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              type="button"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className={`absolute inset-0 transition duration-500 ${isActive ? 'bg-gradient-to-t from-navy/92 via-navy/42 to-navy/12' : 'bg-navy/70'}`} />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur">
                  <Icon size={20} className="text-sky" />
                </div>
                <h3 className={`font-black leading-tight transition-all duration-500 ${isActive ? 'text-3xl' : 'text-xl tracking-wide lg:[writing-mode:vertical-rl] lg:rotate-180 lg:whitespace-nowrap lg:text-lg'}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 max-w-[290px] text-sm font800 leading-6 text-blue-100 transition duration-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-100 lg:opacity-0'}`}>
                  {item.text}
                </p>
              </div>
            </button>
          )
        })}
        </div>
        <div className="pointer-events-none absolute bottom-1 right-0 top-0 w-12 bg-gradient-to-l from-navy/40 via-navy/14 to-transparent lg:hidden" />
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 lg:hidden" aria-label="Progreso del carrusel del hero">
        {mobileDotOrder.map((title) => {
          const itemIndex = heroAccordionItems.findIndex((item) => item.title === title)
          const active = itemIndex === activeIndex
          return (
            <span
              key={title}
              className={`h-1.5 rounded-full transition-all ${active ? 'w-6 bg-sky' : 'w-1.5 bg-white/45'}`}
            />
          )
        })}
      </div>
    </div>
  )
}
