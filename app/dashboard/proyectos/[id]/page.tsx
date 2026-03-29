'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { kicheLessons } from '@/app/content/kicheLeccion'
import { qeqchiLessons } from '@/app/content/qeqchiLeccion'
import { kaqchikelLessons } from '@/app/content/kaqchikelLeccion'
import { mamLessons } from '@/app/content/mamLeccion'
import { tzutujilLessons } from '@/app/content/tzutujilLeccion'

const CONTENT_MAP: Record<string, any[]> = {
  kiche: kicheLessons,
  qeqchi: qeqchiLessons,
  kaqchikel: kaqchikelLessons,
  mam: mamLessons,
  tzutujil: tzutujilLessons,
}

const LANG_COLORS: Record<string, string> = {
  kiche: '#c0392b', qeqchi: '#2471a3', kaqchikel: '#1e8449', mam: '#d68910', tzutujil: '#7d3c98'
}

const LEVEL_LABELS: Record<string, string> = {
  principiante: 'Principiante', intermedio: 'Intermedio', avanzado: 'Avanzado'
}

const LEVEL_COLORS: Record<string, string> = {
  principiante: '#1e8449', intermedio: '#d68910', avanzado: '#c0392b'
}

export default function ProyectoDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const supabase = createClient()

  const [project, setProject] = useState<any>(null)
  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [completing, setCompleting] = useState(false)
  const [newSkill, setNewSkill] = useState<any>(null)
  const [activeTask, setActiveTask] = useState<any>(null)

  useEffect(() => {
    async function load() {
      const { data: proj } = await supabase
        .from('projects')
        .select('*, languages(name, slug)')
        .eq('id', id)
        .single()

      const { data: taskList } = await supabase
        .from('project_tasks')
        .select('*, lessons(title, level, description, order_index)')
        .eq('project_id', id)
        .order('order_index')

      setProject(proj)
      setTasks(taskList ?? [])
      setLoading(false)
    }
    load()
  }, [id])

  function getLessonContent(task: any) {
    const slug = project?.languages?.slug
    if (!slug || !task.lessons?.order_index) return null
    const lessons = CONTENT_MAP[slug]
    if (!lessons) return null
    return lessons[task.lessons.order_index - 1] ?? null
  }

  async function completeTask(taskId: number, lessonId: number | null, xpReward: number) {
    setCompleting(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('project_tasks')
      .update({ completed: true, completed_at: new Date().toISOString() })
      .eq('id', taskId)

    if (lessonId) {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
        score: 100,
      })
    }

    await supabase.from('user_xp_log').insert({
      user_id: user.id,
      xp: xpReward,
      reason: 'task_complete',
      ref_id: taskId.toString(),
    })

    const today = new Date().toISOString().split('T')[0]
    const { data: streak } = await supabase.from('streaks').select('*').eq('user_id', user.id).single()
    if (streak) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      const newDays = streak.last_activity === yesterday ? streak.current_days + 1
        : streak.last_activity === today ? streak.current_days : 1
      await supabase.from('streaks').update({
        current_days: newDays,
        longest_days: Math.max(newDays, streak.longest_days),
        last_activity: today,
      }).eq('user_id', user.id)
    }

    const { data: firstSkill } = await supabase.from('skills').select('id').eq('slug', 'first-lesson').single()
    if (firstSkill) {
      await supabase.from('user_skills').upsert({ user_id: user.id, skill_id: firstSkill.id })
    }

    const updatedTasks = tasks.map(t => t.id === taskId ? { ...t, completed: true } : t)
    setTasks(updatedTasks)
    setActiveTask(null)

    const allDone = updatedTasks.every(t => t.completed)
    if (allDone) {
      await supabase.from('projects')
        .update({ status: 'completed', completed_at: new Date().toISOString() })
        .eq('id', id)

      await supabase.from('user_xp_log').insert({
        user_id: user.id, xp: 50, reason: 'project_complete', ref_id: id
      })

      if (project?.language_id) {
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

    setCompleting(false)
  }

  if (loading) return <div className="p-8 text-sm text-[#6b7a9e]">Cargando...</div>
  if (!project) return <div className="p-8 text-sm text-red-500">Proyecto no encontrado</div>

  const completedCount = tasks.filter(t => t.completed).length
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0
  const isCompleted = project.status === 'completed'
  const color = LANG_COLORS[project.languages?.slug ?? ''] ?? '#1b3a6b'

  const content = activeTask ? getLessonContent(activeTask) : null
  const mayaKey = content?.content?.vocabulary?.[0]
    ? Object.keys(content.content.vocabulary[0]).find(k => k !== 'spanish') ?? 'maya'
    : 'maya'

  return (
    <div className="p-6 max-w-3xl">
      {/* Modal skill desbloqueado */}
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

      {/* Panel de lección */}
      {activeTask && (
        <div className="fixed inset-0 bg-black/40 z-40 flex justify-end" onClick={() => setActiveTask(null)}>
          <div
            className="bg-white w-full max-w-xl h-full overflow-y-auto shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header del panel */}
            <div className="sticky top-0 bg-white border-b border-[#dde3f0] px-6 py-4 flex items-start justify-between gap-4 z-10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: color }}
                  >
                    {project.languages?.name}
                  </span>
                  {activeTask.lessons?.level && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: LEVEL_COLORS[activeTask.lessons.level] ?? '#6b7a9e' }}
                    >
                      {LEVEL_LABELS[activeTask.lessons.level] ?? activeTask.lessons.level}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-[#1a2035] leading-tight">{activeTask.title}</h2>
              </div>
              <button
                onClick={() => setActiveTask(null)}
                className="text-[#6b7a9e] hover:text-[#1a2035] text-2xl leading-none flex-shrink-0 mt-1"
              >
                ×
              </button>
            </div>

            <div className="flex-1 px-6 py-5 space-y-6">
              {content ? (
                <>
                  {/* Vocabulario */}
                  {content.content?.vocabulary?.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b7a9e] mb-3">
                        Vocabulario
                      </h3>
                      <div className="rounded-xl border border-[#dde3f0] overflow-hidden">
                        <div
                          className="grid grid-cols-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white"
                          style={{ backgroundColor: color }}
                        >
                          <span>{project.languages?.name}</span>
                          <span>Español</span>
                        </div>
                        {content.content.vocabulary.map((item: any, i: number) => (
                          <div
                            key={i}
                            className={`grid grid-cols-2 px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7fc]'}`}
                          >
                            <span className="font-semibold text-[#1a2035]">{item[mayaKey]}</span>
                            <span className="text-[#6b7a9e]">{item.spanish}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Frases */}
                  {content.content?.phrases?.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b7a9e] mb-3">
                        Frases clave
                      </h3>
                      <div className="space-y-2">
                        {content.content.phrases.map((p: any, i: number) => (
                          <div
                            key={i}
                            className="bg-[#f5f7fc] rounded-lg px-4 py-3 border border-[#dde3f0]"
                          >
                            <p className="font-semibold text-sm text-[#1a2035]">{p[mayaKey]}</p>
                            <p className="text-xs text-[#6b7a9e] mt-0.5">{p.spanish}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Gramática */}
                  {content.content?.grammar && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b7a9e] mb-2">
                        Gramática
                      </h3>
                      <p className="text-sm text-[#3a4a6b] bg-[#f0f4ff] rounded-lg px-4 py-3 border border-[#dde3f0] leading-relaxed">
                        {content.content.grammar}
                      </p>
                    </div>
                  )}

                  {/* Nota cultural */}
                  {content.content?.culturalNote && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b7a9e] mb-2">
                        Nota cultural
                      </h3>
                      <div
                        className="rounded-lg px-4 py-3 border text-sm text-white leading-relaxed"
                        style={{ backgroundColor: color }}
                      >
                        {content.content.culturalNote}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-[#6b7a9e]">{activeTask.description ?? 'Completa esta lección para avanzar.'}</p>
              )}
            </div>

            {/* Footer con acción */}
            <div className="sticky bottom-0 bg-white border-t border-[#dde3f0] px-6 py-4">
              {activeTask.completed ? (
                <div className="flex items-center justify-center gap-2 py-2 text-green-600 font-semibold text-sm">
                  <span>✓</span> Lección completada · +{activeTask.xp_reward} XP
                </div>
              ) : (
                <button
                  onClick={() => completeTask(activeTask.id, activeTask.lesson_id, activeTask.xp_reward)}
                  disabled={completing}
                  className="w-full py-3 text-white font-bold rounded-xl text-sm transition disabled:opacity-60"
                  style={{ backgroundColor: color }}
                >
                  {completing ? 'Guardando...' : `Marcar como completada · +${activeTask.xp_reward} XP`}
                </button>
              )}
            </div>
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
      <div className="bg-white rounded-xl border border-[#dde3f0] p-5 mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-semibold text-[#1a2035]">Progreso del path</span>
          <span className="font-bold" style={{ color }}>{completedCount}/{tasks.length} lecciones · {progress}%</span>
        </div>
        <div className="h-2 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
        </div>
        {!isCompleted && tasks.length > 0 && (
          <p className="text-xs text-[#6b7a9e] mt-2">
            Completa todas las lecciones para ganar +50 XP y un skill badge
          </p>
        )}
      </div>

      {/* Learning path */}
      {tasks.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-[#dde3f0] p-8 text-center">
          <p className="text-sm text-[#6b7a9e]">Este proyecto no tiene lecciones asignadas.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Línea vertical del path */}
          <div
            className="absolute left-5 top-5 bottom-5 w-0.5"
            style={{ backgroundColor: '#dde3f0' }}
          />

          <div className="space-y-3">
            {tasks.map((task: any, idx: number) => {
              const locked = idx > 0 && !tasks[idx - 1].completed
              const isCurrent = !task.completed && !locked
              const lessonContent = getLessonContent(task)

              return (
                <div key={task.id} className="relative flex gap-4">
                  {/* Nodo del path */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold border-2 transition-all ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : isCurrent
                        ? 'text-white border-transparent'
                        : 'bg-[#f5f7fc] border-[#dde3f0] text-[#6b7a9e]'
                    }`}
                    style={isCurrent ? { backgroundColor: color, borderColor: color } : undefined}
                  >
                    {task.completed ? '✓' : idx + 1}
                  </div>

                  {/* Card de la lección */}
                  <div
                    className={`flex-1 bg-white rounded-xl border p-4 mb-0 transition-all cursor-pointer ${
                      task.completed
                        ? 'border-green-100'
                        : locked
                        ? 'border-[#dde3f0] opacity-40 cursor-not-allowed'
                        : 'border-[#dde3f0] hover:border-[#1b3a6b]/30 hover:shadow-sm'
                    }`}
                    onClick={() => !locked && setActiveTask(task)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm leading-tight ${task.completed ? 'text-[#6b7a9e]' : 'text-[#1a2035]'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          {task.lessons?.level && (
                            <span
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded text-white"
                              style={{ backgroundColor: LEVEL_COLORS[task.lessons.level] ?? '#6b7a9e' }}
                            >
                              {LEVEL_LABELS[task.lessons.level] ?? task.lessons.level}
                            </span>
                          )}
                          {lessonContent?.content?.vocabulary?.length > 0 && (
                            <span className="text-[10px] text-[#6b7a9e]">
                              {lessonContent.content.vocabulary.length} palabras
                            </span>
                          )}
                          {lessonContent?.content?.phrases?.length > 0 && (
                            <span className="text-[10px] text-[#6b7a9e]">
                              {lessonContent.content.phrases.length} frases
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-semibold text-[#c8a217]">+{task.xp_reward} XP</span>
                        {task.completed ? (
                          <span className="text-[10px] text-green-600 font-semibold">Completada</span>
                        ) : locked ? (
                          <span className="text-[10px] text-[#6b7a9e]">🔒</span>
                        ) : (
                          <span className="text-[10px] font-semibold text-[#1b3a6b]">Ver →</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
