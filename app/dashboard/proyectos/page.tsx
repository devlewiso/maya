'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { SkeletonProject } from '@/app/components/Skeleton'

const PROJECT_TYPES = [
  { value: 'ruta_basica',            label: 'Ruta Básica',           desc: 'Todas las lecciones principiante del idioma' },
  { value: 'ruta_completa',          label: 'Ruta Completa',         desc: 'Todos los niveles del idioma' },
  { value: 'inmersion_cultural',     label: 'Inmersión Cultural',    desc: 'Solo lecciones con notas culturales' },
  { value: 'vocabulario_express',    label: 'Vocabulario Express',   desc: 'Vocabulario y frases rápidas' },
  { value: 'personalizado',          label: 'Personalizado',         desc: 'Elige el idioma y lecciones libremente' },
]

const LANG_COLORS: Record<string, string> = {
  kiche: '#c0392b', qeqchi: '#2471a3', kaqchikel: '#1e8449', mam: '#d68910', tzutujil: '#7d3c98'
}

export default function ProyectosPage() {
  const supabase = createClient()
  const [projects, setProjects] = useState<any[]>([])
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])
  const [languages, setLanguages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [filterLanguage, setFilterLanguage] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all')

  const [form, setForm] = useState({
    title: '', description: '', language_id: '', type: 'ruta_basica'
  })

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const [{ data: proj }, { data: langs }] = await Promise.all([
        supabase.from('projects').select('*, languages(name, slug)').eq('user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('languages').select('*').eq('is_active', true).order('name'),
      ])
      setProjects(proj ?? [])
      setFilteredProjects(proj ?? [])
      setLanguages(langs ?? [])
      setLoading(false)
    }
    load()
  }, [])

  // Filter projects based on search and filters
  useEffect(() => {
    let filtered = projects

    // Search by title
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      )
    }

    // Filter by language
    if (filterLanguage) {
      filtered = filtered.filter(p => p.language_id?.toString() === filterLanguage)
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(p => p.status === filterStatus)
    }

    setFilteredProjects(filtered)
  }, [searchQuery, filterLanguage, filterStatus, projects])

  async function createProject(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Crear proyecto
    const { data: project, error } = await supabase
      .from('projects')
      .insert({
        user_id: user.id,
        title: form.title,
        description: form.description || null,
        language_id: form.language_id ? parseInt(form.language_id) : null,
        type: form.type,
      })
      .select('*, languages(name, slug)')
      .single()

    if (error || !project) { setSaving(false); return }

    // Generar tareas automáticas según el tipo
    if (form.language_id) {
      let query = supabase.from('lessons').select('*').eq('language_id', parseInt(form.language_id))

      if (form.type === 'ruta_basica') query = query.eq('level', 'principiante')
      else if (form.type === 'vocabulario_express') query = query.in('level', ['principiante']).limit(3)

      const { data: lessons } = await query.order('order_index')

      if (lessons && lessons.length > 0) {
        await supabase.from('project_tasks').insert(
          lessons.map((lesson: any, idx: number) => ({
            project_id: project.id,
            lesson_id: lesson.id,
            title: lesson.title,
            description: lesson.description,
            order_index: idx + 1,
            xp_reward: 10,
          }))
        )
      }
    }

    // Dar skill "Ajtikonel" (primer proyecto)
    const { data: existingProjects } = await supabase
      .from('projects').select('id').eq('user_id', user.id)
    if (existingProjects?.length === 1) {
      const { data: skill } = await supabase.from('skills').select('id').eq('slug', 'first-project').single()
      if (skill) {
        await supabase.from('user_skills').upsert({ user_id: user.id, skill_id: skill.id })
      }
    }

    setProjects(prev => [project, ...prev])
    setShowForm(false)
    setForm({ title: '', description: '', language_id: '', type: 'ruta_basica' })
    setSaving(false)
  }

  const active = filteredProjects.filter(p => p.status === 'active')
  const completed = filteredProjects.filter(p => p.status === 'completed')

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2035]">Proyectos</h1>
          <p className="text-sm text-[#6b7a9e] mt-0.5">Crea proyectos y completa tareas para ganar skills</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#1b3a6b] text-white text-sm font-semibold rounded-lg hover:bg-[#254d8f] transition"
        >
          + Nuevo proyecto
        </button>
      </div>

      {/* Search and filters */}
      {!loading && projects.length > 0 && (
        <div className="mb-6 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7a9e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-white focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7a9e] hover:text-[#1a2035]"
              >
                ×
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              value={filterLanguage}
              onChange={(e) => setFilterLanguage(e.target.value)}
              className="px-3 py-1.5 text-sm rounded-lg border border-[#dde3f0] bg-white focus:outline-none focus:border-[#1b3a6b]"
            >
              <option value="">Todos los idiomas</option>
              {languages.map((l: any) => (
                <option key={l.id} value={l.id}>{l.name}</option>
              ))}
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'completed')}
              className="px-3 py-1.5 text-sm rounded-lg border border-[#dde3f0] bg-white focus:outline-none focus:border-[#1b3a6b]"
            >
              <option value="all">Todos los estados</option>
              <option value="active">Activos</option>
              <option value="completed">Completados</option>
            </select>

            {(searchQuery || filterLanguage || filterStatus !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setFilterLanguage('')
                  setFilterStatus('all')
                }}
                className="px-3 py-1.5 text-sm text-[#6b7a9e] hover:text-[#1b3a6b] font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {filteredProjects.length !== projects.length && (
            <p className="text-xs text-[#6b7a9e]">
              Mostrando {filteredProjects.length} de {projects.length} proyectos
            </p>
          )}
        </div>
      )}

      {/* Modal crear proyecto */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            <div className="px-6 py-5 border-b border-[#dde3f0] flex items-center justify-between">
              <h2 className="font-bold text-[#1a2035]">Nuevo proyecto</h2>
              <button onClick={() => setShowForm(false)} className="text-[#6b7a9e] hover:text-[#1a2035] text-xl">×</button>
            </div>
            <form onSubmit={createProject} className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Nombre del proyecto *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Ej. Aprender K'iche' básico"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Descripción (opcional)</label>
                <textarea
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  placeholder="¿Qué quieres lograr con este proyecto?"
                  rows={2}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Idioma</label>
                <select
                  value={form.language_id}
                  onChange={e => setForm(f => ({ ...f, language_id: e.target.value }))}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b]"
                >
                  <option value="">Selecciona un idioma</option>
                  {languages.map((l: any) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a2035] mb-2">Tipo de proyecto</label>
                <div className="space-y-2">
                  {PROJECT_TYPES.map(pt => (
                    <label key={pt.value} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${form.type === pt.value ? 'border-[#1b3a6b] bg-[#f0f4ff]' : 'border-[#dde3f0] hover:border-[#1b3a6b]/30'}`}>
                      <input
                        type="radio"
                        name="type"
                        value={pt.value}
                        checked={form.type === pt.value}
                        onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                        className="mt-0.5 accent-[#1b3a6b]"
                      />
                      <div>
                        <p className="text-xs font-semibold text-[#1a2035]">{pt.label}</p>
                        <p className="text-[10px] text-[#6b7a9e]">{pt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2.5 border border-[#dde3f0] text-sm font-semibold rounded-lg text-[#6b7a9e] hover:bg-[#f5f7fc] transition">
                  Cancelar
                </button>
                <button type="submit" disabled={saving} className="flex-1 py-2.5 bg-[#c8a217] text-[#0f2347] text-sm font-bold rounded-lg hover:bg-[#e8be2c] transition disabled:opacity-60">
                  {saving ? 'Creando...' : 'Crear proyecto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkeletonProject />
          <SkeletonProject />
          <SkeletonProject />
        </div>
      ) : projects.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-[#dde3f0] p-12 text-center">
          <div className="text-4xl mb-3">◈</div>
          <h3 className="font-bold text-[#1a2035] mb-2">Crea tu primer proyecto</h3>
          <p className="text-sm text-[#6b7a9e] mb-6 max-w-sm mx-auto">Elige un idioma, selecciona el tipo de ruta y empieza a ganar skills completando tareas.</p>
          <button onClick={() => setShowForm(true)} className="px-6 py-2.5 bg-[#c8a217] text-[#0f2347] font-bold rounded-lg text-sm hover:bg-[#e8be2c] transition">
            + Crear mi primer proyecto
          </button>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-[#dde3f0] p-8 text-center">
          <div className="w-16 h-16 bg-[#f5f7fc] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-8 h-8 text-[#6b7a9e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-[#1a2035] mb-1">No se encontraron proyectos</h3>
          <p className="text-sm text-[#6b7a9e]">Intenta con otros términos de búsqueda</p>
        </div>
      ) : (
        <>
          {active.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-[#6b7a9e] uppercase tracking-wider mb-3">Activos · {active.length}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {active.map((p: any) => (
                  <Link key={p.id} href={`/dashboard/proyectos/${p.id}`} className="block bg-white rounded-xl border border-[#dde3f0] p-5 hover:shadow-md hover:border-[#1b3a6b]/20 transition-all">
                    {p.languages && (
                      <div className="h-1 rounded-full mb-4" style={{ backgroundColor: LANG_COLORS[p.languages.slug] ?? '#1b3a6b' }} />
                    )}
                    <h3 className="font-bold text-[#1a2035] mb-1">{p.title}</h3>
                    {p.description && <p className="text-xs text-[#6b7a9e] line-clamp-2 mb-3">{p.description}</p>}
                    <div className="flex items-center justify-between">
                      {p.languages && <span className="text-[10px] font-semibold text-[#6b7a9e] uppercase tracking-wide">{p.languages.name}</span>}
                      <span className="text-xs text-[#1b3a6b] font-semibold">Ver tareas →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {completed.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-[#6b7a9e] uppercase tracking-wider mb-3">Completados · {completed.length}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {completed.map((p: any) => (
                  <Link key={p.id} href={`/dashboard/proyectos/${p.id}`} className="block bg-white rounded-xl border border-[#dde3f0] p-5 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[#1a2035]">{p.title}</h3>
                      <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 rounded-full px-2 py-0.5 font-semibold">✓ Completado</span>
                    </div>
                    {p.languages && <span className="text-[10px] font-semibold text-[#6b7a9e] uppercase tracking-wide">{p.languages.name}</span>}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
