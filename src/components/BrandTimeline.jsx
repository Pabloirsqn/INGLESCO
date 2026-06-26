import React from 'react'
import { Award, Rocket, Sparkles } from 'lucide-react'

const iconMap = {
  origin: Sparkles,
  recognition: Award,
  evolution: Rocket,
}

function Timeline({ children }) {
  return <ol className="relative mx-auto max-w-4xl">{children}</ol>
}

function TimelineItem({ children }) {
  return (
    <li className="relative grid gap-3 pb-7 last:pb-0 md:grid-cols-[145px_50px_1fr] md:gap-5">
      {children}
    </li>
  )
}

function TimelineDot({ icon: Icon, isLast }) {
  return (
    <div className="absolute left-0 top-1 flex h-full w-10 justify-center md:static md:w-auto">
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cobalt/20 bg-[#E7EEF7]/90 text-cobalt shadow-[0_12px_28px_rgba(16,103,255,0.12)] ring-4 ring-white/60">
        <Icon size={17} strokeWidth={2.25} />
      </div>
      {!isLast && <div className="absolute top-11 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cobalt/36 via-cobalt/20 to-cobalt/8 md:top-11" />}
    </div>
  )
}

function TimelineYear({ year }) {
  return (
    <div className="pl-14 md:pl-0 md:pt-1 md:text-right">
      <p className="text-4xl font-black leading-none text-cobalt md:text-5xl">{year}</p>
    </div>
  )
}

function TimelineContent({ title, text }) {
  return (
    <article className="ml-14 rounded-[18px] border border-[#C7D1DE]/20 bg-[#F2EEE6]/60 p-5 shadow-[0_6px_18px_rgba(6,31,73,0.025)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cobalt/12 hover:bg-[#fbfaf6]/70 md:ml-0 md:p-6">
      <h3 className="text-xl font-black leading-tight text-navy md:text-[25px]">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-ink/76">{text}</p>
    </article>
  )
}

export function BrandTimeline({ items }) {
  return (
    <Timeline>
      {items.map((item, index) => {
        const Icon = iconMap[item.type] || Sparkles

        return (
          <TimelineItem key={item.year}>
            <TimelineYear year={item.year} />
            <TimelineDot icon={Icon} isLast={index === items.length - 1} />
            <TimelineContent title={item.title} text={item.text} />
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
