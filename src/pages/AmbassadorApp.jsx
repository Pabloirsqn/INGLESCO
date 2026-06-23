import React, { useState } from 'react'
import { Copy, Download, ExternalLink, Medal, Share2 } from 'lucide-react'
import { AppShell } from '../layouts/AppShell.jsx'
import { Badge, Button, Card } from '../components/ui.jsx'
import { ambassadorNav, ambassadorRows, ambassadorStats } from '../data/mockData.js'

export function AmbassadorApp({ onNavigate }) {
  const [active, setActive] = useState('Dashboard comercial')

  return (
    <AppShell
      title={active}
      subtitle="Herramientas comerciales para referir alumnos, consultar comisiones y compartir materiales."
      nav={ambassadorNav}
      active={active}
      setActive={setActive}
      onNavigate={onNavigate}
    >
      {active === 'Dashboard comercial' ? <AmbassadorDashboard /> : <AmbassadorSection active={active} />}
    </AppShell>
  )
}

function AmbassadorDashboard() {
  return (
    <div className="space-y-6">
      <Card className="grid gap-6 p-6 lg:grid-cols-[1fr_420px]">
        <div>
          <Badge>Embajador verificado</Badge>
          <h2 className="mt-5 text-3xl font-black text-navy">Código de referido: JPABLO20</h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/70">Comparte este enlace para registrar leads, medir activaciones y estimar comisiones del mes.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button><Copy size={17} /> Copiar link</Button>
            <Button variant="secondary"><Share2 size={17} /> Compartir</Button>
          </div>
        </div>
        <div className="rounded-lg bg-pearl p-5">
          <p className="text-sm font900 text-ink/60">Link de referido</p>
          <p className="mt-2 break-all rounded-lg border border-line bg-white p-4 font900 text-navy">inglesco.com/start?ref=JPABLO20</p>
          <p className="mt-4 text-sm text-ink/60">Última activación registrada hace 2 horas.</p>
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {ambassadorStats.map(([label, value, note]) => (
          <Card key={label} className="p-5">
            <p className="text-sm font900 text-ink/60">{label}</p>
            <p className="mt-3 text-3xl font-black text-navy">{value}</p>
            <p className="mt-1 text-sm text-ink/60">{note}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <h3 className="text-xl font-black text-navy">Alumnos inscritos por referido</h3>
          <div className="mt-6 space-y-3">
            {ambassadorRows.map((row) => (
              <div key={row[0]} className="grid grid-cols-4 items-center gap-3 rounded-lg bg-pearl p-4 text-sm">
                <span className="font900 text-navy">{row[0]}</span>
                <span>{row[1]}</span>
                <Badge tone={row[2] === 'Activo' ? 'green' : 'locked'}>{row[2]}</Badge>
                <span className="text-right font900 text-cobalt">{row[3]}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-navy p-6 text-white">
          <Medal size={32} className="text-sky" />
          <h3 className="mt-5 text-2xl font-black">Ranking básico</h3>
          <div className="mt-5 space-y-3">
            {['1. Sofía - 26', '2. Pablo - 18', '3. Mariana - 16'].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-3 font900">{item} activaciones</div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function AmbassadorSection({ active }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {['Guía de mensajes', 'Post para redes', 'Presentación corta', 'FAQ comercial', 'Historia de éxito', 'Checklist de seguimiento'].map((item, index) => (
        <Card key={item} className="p-6">
          <div className="flex items-center justify-between">
            <Badge tone={index % 2 ? 'green' : 'blue'}>{active}</Badge>
            {index % 2 ? <ExternalLink size={18} className="text-cobalt" /> : <Download size={18} className="text-cobalt" />}
          </div>
          <h3 className="mt-5 text-xl font-black text-navy">{item}</h3>
          <p className="mt-3 text-sm leading-6 text-ink/70">Recurso mock listo para mostrar cómo el embajador impulsa leads y activaciones.</p>
        </Card>
      ))}
    </div>
  )
}
