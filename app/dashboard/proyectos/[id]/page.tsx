'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function ProyectoDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const supabase = createClient()

  const [project, setProject] = useState<any>(null)
  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [completing, setCompleting] = useState<number | null>(null)
  const [newSkill, setNewSkill] = useState<any>(null)

  useEffect(() => {
    async function load() {
      const { data: proj } = await supabase
        .from('projects')
        .select('*, languages(name, slug)')
        .eq('id', id)
        .single()

      const { data: taskList } = await supabase
        .from('project_tasks')
        .select('*, lessons(title, level, description)')
        .eq('project_id', id)
        .order('order_index')

      setProject(proj)
      setTasks(taskList ?? [])
      setLoading(false)
    }
    load()
  }, [id])

  async function completeTask(taskId: number, lessonId: number | null, xpReward: number) {
    setCompleting(taskId)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Marcar tarea completada
    await supabase.from('project_tasks').update({ completed: true, completed_at: new Date().toISOString() }).eq('id', taskId)

    // Marcar lección completada si tiene lesson_id
    if (lessonId) {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
        score: 100,
      })
    }

    // Sumar XP
    await supabase.from('user_xp_log').insert({
      user_id: user.id,
      xp: xpReward,
      reason: 'task_complete',
      ref_id: taskId.toString(),
    })

    // Actualizar racha
    const today = new Date().toISOString().split('T')[0]
    const { data: streak } = await supabase.from('streaks').select('*').eq('user_id', user.id).single()
    if (streak) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      const newDays = streak.last_activity === yesterday ? streak.current_days + 1
        : streak.last_activity === today ? streak.current_days
        : 1
      await supabase.from('streaks').update({
        current_days: newDays,
        longest_days: Math.max(newDays, streak.longest_days),
        last_activity: today,
      }).eq('user_id', user.id)
    }

    // Dar skill "primera lección"
    const { data: firstSkill } = await supabase.from('skills').select('id').eq('slug', 'first-lesson').single()
    if (firstSkill) {
      await supabase.from('user_skills').upsert({ user_id: user.id, skill_id: firstSkill.id })
    }

    const updatedTasks = tasks.map(t => t.id === taskId ? { ...t, completed: true } : t)
    setTasks(updatedTasks)

    // ¿Proyecto completado?
    const allDone = updatedTasks.every(t => t.completed)
    if (allDone) {
      await supabase.from('projects').update({ status: 'completed', completed_at: new Date().toISOString() }).eq('id', id)

      // XP bonus por proyecto
      await supabase.from('user_xp_log').insert({
        user_id: user.id, xp: 50, reason: 'project_complete', ref_id: id
      })

      // Dar skill de nivel/idioma
      if (project?.languages?.slug) {
        const { data: levelSkill } = await supabase.from('skills').select('id, name, icon')
          .eq('language_id', project.language_id)
          .eq('level', 'principiante')
          .single()
        if (levelSkill) {
          await supabase.from('user_skills').upsert({ user_id: user.id, skill_id: levelSkill.id })
          setNewSkill(levelSkill)
        }
      }

      setProject((p: any) => ({ ...p, status: 'completed' }))
    }

    setCompleting(null)
  }

  if (loading) return <div className="p-8 text-sm text-[#6b7a9e]">Cargando...</div>
  if (!project) return <div className="p-8 text-sm text-red-500">Proyecto no encontrado</div>

  const completedCount = tasks.filter(t => t.completed).length
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0
  const isCompleted = project.status === 'completed'

  const LANG_COLORS: Record<string, string> = {
    kiche: '#c0392b', qeqchi: '#2471a3', kaqchikel: '#1e8449', mam: '#d68910', tzutujil: '#7d3c98'
  }
  const color = LANG_COLORS[project.languages?.slug ?? ''] ?? '#1b3a6b'

  return (
    <div className="p-8 max-w-3xl">
      {/* Celebración skill nuevo */}
      {newSkill && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm shadow-2xl">
            <div className="text-6xl mb-3">{newSkill.icon}</div>
            <h2 className="text-xl font-bold text-[#1a2035] mb-1">¡Skill desbloqueado!</h2>
            <p className="text-2xl font-bold text-[#c8a217] mb-2">{newSkill.name}</p>
            <p className="text-sm text-[#6b7a9e] mb-6">Completaste el proyecto. ¡Sigue aprendiendo!</p>
            <button
              onClick={() => { setNewSkill(null); router.push('/dashboard/proyectos') }}
              className="w-full py-3 bg-[#1b3a6b] text-white font-bold rounded-xl hover:bg-[#254d8f] transition"
            >
              ¡Genial! Ver proyectos
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <Link href="/dashboard/proyectos" className="text-xs text-[#6b7a9e] hover:text-[#1b3a6b] mb-3 inline-flex items-center gap-1">
          ← Proyectos
        </Link>
        <div className="h-1 rounded-full mb-4 mt-2" style={{ backgroundColor: color }} />
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1a2035]">{project.title}</h1>
            {project.description && <p className="text-sm text-[#6b7a9e] mt-1">{project.description}</p>}
            {project.languages && (
              <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: color }}>
                {project.languages.name}
              </span>
            )}
          </div>
          {isCompleted && (
            <span className="text-xs bg-green-50 text-green-700 border border-green-100 rounded-full px-3 py-1 font-semibold">✓ Completado</span>
          )}
        </div>
      </div>

      {/* Progreso */}
      <div className="bg-white rounded-xl border border-[#dde3f0] p-5 mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-semibold text-[#1a2035]">Progreso</span>
          <span className="font-bold text-[#1b3a6b]">{completedCount}/{tasks.length} tareas · {progress}%</span>
        </div>
        <div className="h-2 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
        </div>
        {!isCompleted && tasks.length > 0 && (
          <p className="text-xs text-[#6b7a9e] mt-2">
            Completa todas las tareas para ganar +50 XP y un skill badge
          </p>
        )}
      </div>

      {/* Tareas */}
      <div className="space-y-3">
        {tasks.length === 0 && (
          <div className="bg-white rounded-xl border border-dashed border-[#dde3f0] p-8 text-center">
            <p className="text-sm text-[#6b7a9e]">Este proyecto no tiene tareas asignadas.</p>
          </div>
        )}
        {tasks.map((task: any, idx: number) => {
          const locked = idx > 0 && !tasks[idx - 1].completed
          return (
            <div
              key={task.id}
              className={`bg-white rounded-xl border p-5 transition-all ${
                task.completed ? 'border-green-100 bg-green-50/30' :
                locked ? 'border-[#dde3f0] opacity-50' :
                'border-[#dde3f0] hover:border-[#1b3a6b]/20 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Indicador */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold ${
                  task.completed ? 'bg-green-500 text-white' :
                  locked ? 'bg-[#f5f7fc] border border-[#dde3f0] text-[#6b7a9e]' :
                  'border-2 text-[#1b3a6b]'
                }`} style={{ borderColor: task.completed || locked ? undefined : color }}>
                  {task.completed ? '✓' : idx + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className={`font-semibold text-sm ${task.completed ? 'text-[#6b7a9e] line-through' : 'text-[#1a2035]'}`}>
                        {task.title}
                      </p>
                      {task.description && (
                        <p className="text-xs text-[#6b7a9e] mt-0.5 line-clamp-1">{task.description}</p>
                      )}
                      {task.lessons?.level && (
                        <span className="inline-block mt-1 text-[10px] font-medium text-[#6b7a9e] bg-[#f5f7fc] rounded px-1.5 py-0.5 capitalize">
                          {task.lessons.level}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] font-semibold text-[#c8a217]">+{task.xp_reward} XP</span>
                      {!task.completed && !locked && (
                        <button
                          onClick={() => completeTask(task.id, task.lesson_id, task.xp_reward)}
                          disabled={completing === task.id}
                          className="px-3 py-1.5 text-xs font-bold text-white rounded-lg transition disabled:opacity-60"
                          style={{ backgroundColor: color }}
                        >
                          {completing === task.id ? '...' : 'Completar'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
