import React, { useState } from 'react'
import { ArrowUpRight, Download, Filter, Search, UsersRound } from 'lucide-react'
import { AppShell } from '../layouts/AppShell.jsx'
import { Badge, Button, Card } from '../components/ui.jsx'
import { adminNav, adminStats, leadRows } from '../data/mockData.js'

export function AdminApp({ onNavigate }) {
  const [active, setActive] = useState('Dashboard general')

  return (
    <AppShell
      title={active}
      subtitle="Vista operativa para revisar crecimiento, seguimiento académico y oportunidades."
      nav={adminNav}
      active={active}
      setActive={setActive}
      onNavigate={onNavigate}
      accent="admin"
    >
      {active === 'Dashboard general' ? <AdminDashboard /> : <AdminSection active={active} />}
    </AppShell>
  )
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map(([label, value, note]) => (
          <Card key={label} className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font900 text-ink/60">{label}</p>
              <ArrowUpRight size={18} className="text-cobalt" />
            </div>
            <p className="mt-3 text-3xl font-black text-navy">{value}</p>
            <p className="mt-1 text-sm text-ink/60">{note}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="min-w-0 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-black text-navy">Leads recientes</h3>
            <div className="flex gap-2">
              <Button variant="secondary" className="px-3 py-2"><Filter size={16} /> Filtrar</Button>
              <Button className="px-3 py-2"><Download size={16} /> Exportar</Button>
            </div>
          </div>
          <Table headers={['Nombre', 'País', 'Nivel', 'Objetivo', 'Estado']} rows={leadRows} />
        </Card>
        <Card className="overflow-hidden">
          <div className="bg-navy p-6 text-white">
            <UsersRound size={30} className="text-sky" />
            <h3 className="mt-4 text-2xl font-black">Pulso académico</h3>
            <p className="mt-2 text-blue-100">73 alumnos están listos para evaluación y 29 podrían entrar a prevalidación internacional.</p>
          </div>
          <div className="grid gap-4 p-6">
            {['Evaluación B1', 'Seguimiento de inactividad', 'Validación oral', 'Candidatos Global'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-lg bg-pearl p-4">
                <span className="font900 text-navy">{item}</span>
                <Badge tone={index === 3 ? 'blue' : 'green'}>{[34, 18, 21, 29][index]}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function AdminSection({ active }) {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-navy">{active}</h2>
          <p className="mt-1 text-ink/65">Módulo mock con información suficiente para validar flujo y navegación.</p>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-ink/40" />
          <input className="w-full rounded-lg border border-line bg-pearl py-2.5 pl-10 pr-4 outline-none focus:border-cobalt sm:w-72" placeholder="Buscar" />
        </div>
      </div>
      <Table
        headers={['Registro', 'Segmento', 'Estado', 'Prioridad', 'Acción']}
        rows={[
          [`${active} 001`, 'Growth', 'Activo', 'Alta', 'Revisar'],
          [`${active} 002`, 'Starter', 'Pendiente', 'Media', 'Contactar'],
          [`${active} 003`, 'Global', 'Validación', 'Alta', 'Aprobar'],
          [`${active} 004`, 'Growth', 'Activo', 'Baja', 'Monitorear'],
        ]}
      />
    </Card>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink/55">
            {headers.map((header) => <th key={header} className="py-3 font900">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')} className="border-b border-line/70 last:border-0">
              {row.map((cell, index) => (
                <td key={cell} className="py-4 pr-5">
                  {index === row.length - 1 ? <Badge tone="blue">{cell}</Badge> : <span className={index === 0 ? 'font900 text-navy' : 'text-ink/70'}>{cell}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
