import React from 'react'
import { Award, Rocket, Sparkles } from 'lucide-react'

const iconMap = {
  origin: Sparkles,
  recognition: Award,
  evolution: Rocket,
}

export function BrandTimeline({ items }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-[25px] top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cobalt/55 via-sky/35 to-cobalt/10 md:left-6 md:right-6 md:top-6 md:h-px md:w-auto md:bg-gradient-to-r md:from-cobalt/18 md:via-sky/58 md:to-cobalt/18" />

      <ol className="relative grid gap-8 md:grid-cols-3 md:gap-8">
        {items.map((item) => {
          const Icon = iconMap[item.type] || Sparkles

          return (
            <li
              key={item.year}
              className="relative grid grid-cols-[52px_1fr] gap-4 md:block"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cobalt/18 bg-[#fbfaf6] text-cobalt shadow-[0_16px_32px_rgba(16,103,255,0.10)] ring-[6px] ring-[#F2EEE6] md:mb-6">
                <Icon size={18} strokeWidth={2.3} />
              </div>

              <article className="min-w-0">
                <p className="text-[42px] font-black leading-none text-cobalt md:text-[56px]">
                  {item.year}
                </p>
                <div className="mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-cobalt via-sky to-[#E7EEF7]" />
                <h3 className="mt-4 text-xl font-black leading-tight text-navy md:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[31rem] text-[15px] leading-7 text-ink/74 md:max-w-none">
                  {item.text}
                </p>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
