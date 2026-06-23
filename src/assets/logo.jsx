import React from 'react'

export function Logo({ compact = false, light = false }) {
  const textClass = light ? 'text-white' : 'text-navy'

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-12">
        <div className="absolute left-0 top-1 h-7 w-7 rotate-45 rounded-lg border-[7px] border-cobalt"></div>
        <div className="absolute right-0 top-1 h-7 w-7 rotate-45 rounded-lg border-[7px] border-navy"></div>
        <div className="absolute left-[19px] top-[13px] h-3.5 w-3.5 rounded-full border-2 border-white bg-sky"></div>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className={`text-xl font-black tracking-wide ${textClass}`}>INGLESCO <span className="text-cobalt">2.0</span></div>
          <div className={`mt-1 text-[11px] font-semibold italic ${light ? 'text-blue-100' : 'text-ink/70'}`}>No estudies inglés... ¡Vívelo!</div>
        </div>
      )}
    </div>
  )
}
