import React, { useState } from 'react'
import { Globe2, Languages, MessageCircle, Video } from 'lucide-react'
import heroGlobalImage from '../assets/hero-inglesco-global.png'

const heroAccordionItems = [
  {
    title: 'Plataforma',
    text: 'Practica a tu ritmo con rutas claras y avance visible.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=84',
    icon: Languages,
  },
  {
    title: 'Clases en línea',
    text: 'Refuerza tu inglés con guía real, no solo ejercicios.',
    image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=900&q=84',
    icon: Video,
  },
  {
    title: 'Clubes de conversación',
    text: 'Habla, conecta y gana confianza en comunidad.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=84',
    icon: MessageCircle,
  },
  {
    title: 'INGLESCO Global',
    text: 'Lleva tu inglés hacia experiencias internacionales.',
    image: heroGlobalImage,
    icon: Globe2,
  },
]

export function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full rounded-[28px] border border-white/35 bg-[rgba(231,238,247,0.28)] p-3 shadow-[0_30px_90px_rgba(6,31,73,0.16)] backdrop-blur-md sm:p-4">
      <div className="flex gap-3 overflow-x-auto pb-1 lg:h-[470px] lg:gap-3.5 lg:overflow-hidden lg:pb-0">
        {heroAccordionItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === activeIndex

          return (
            <button
              key={item.title}
              className={`group relative h-72 min-w-[238px] overflow-hidden rounded-[24px] border border-white/35 text-left shadow-[0_20px_54px_rgba(6,31,73,0.18)] outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-sky/80 sm:h-80 sm:min-w-[270px] lg:h-full lg:min-w-0 ${
                isActive ? 'lg:flex-[3.8]' : 'lg:flex-[0.74]'
              }`}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              type="button"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className={`absolute inset-0 transition duration-500 ${isActive ? 'bg-gradient-to-t from-navy/88 via-navy/34 to-navy/8' : 'bg-navy/64'}`} />
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
    </div>
  )
}
