import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [
    { data: projects },
    { data: userSkills },
    { data: skills },
    { data: progress },
    { data: streak },
  ] = await Promise.all([
    supabase.from('projects').select('*').eq('user_id', user!.id).order('created_at', { ascending: false }).limit(3),
    supabase.from('user_skills').select('skill_id, earned_at').eq('user_id', user!.id),
    supabase.from('skills').select('*'),
    supabase.from('lesson_progress').select('id').eq('user_id', user!.id).eq('completed', true),
    supabase.from('streaks').select('*').eq('user_id', user!.id).single(),
  ])

  const earnedSkillIds = new Set(userSkills?.map(s => s.skill_id) ?? [])
  const earnedSkills = skills?.filter(s => earnedSkillIds.has(s.id)) ?? []
  const activeProjects = projects?.filter(p => p.status === 'active') ?? []
  // removed unused

  const langColors: Record<string, string> = {
    kiche: '#c0392b', qeqchi: '#2471a3', kaqchikel: '#1e8449', mam: '#d68910', tzutujil: '#7d3c98'
  }

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1a2035] mb-1">Tu panel de aprendizaje</h1>
        <p className="text-sm text-[#6b7a9e]">Sigue tu progreso y completa proyectos para ganar skills</p>
      </div>

      {/* Stats rápidas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-[#dde3f0] p-5">
          <div className="text-2xl font-bold text-[#1b3a6b]">{progress?.length ?? 0}</div>
          <div className="text-xs text-[#6b7a9e] mt-0.5">Lecciones completadas</div>
        </div>
        <div className="bg-white rounded-xl border border-[#dde3f0] p-5">
          <div className="text-2xl font-bold text-[#1b3a6b]">{earnedSkills.length}</div>
          <div className="text-xs text-[#6b7a9e] mt-0.5">Skills ganados</div>
        </div>
        <div className="bg-white rounded-xl border border-[#dde3f0] p-5">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-[#1b3a6b]">{streak?.data?.current_days ?? 0}</span>
            {(streak?.data?.current_days ?? 0) > 0 && <span className="text-xl">🔥</span>}
          </div>
          <div className="text-xs text-[#6b7a9e] mt-0.5">Días de racha</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Proyectos activos */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#1a2035]">Proyectos activos</h2>
            <Link href="/dashboard/proyectos" className="text-xs text-[#1b3a6b] font-semibold hover:underline">
              Ver todos →
            </Link>
          </div>

          {activeProjects.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-[#dde3f0] p-8 text-center">
              <div className="text-3xl mb-2">◈</div>
              <p className="text-sm text-[#6b7a9e] mb-4">No tienes proyectos activos</p>
              <Link
                href="/dashboard/proyectos"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1b3a6b] text-white text-xs font-semibold rounded-lg hover:bg-[#254d8f] transition"
              >
                + Crear proyecto
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {activeProjects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/dashboard/proyectos/${project.id}`}
                  className="block bg-white rounded-xl border border-[#dde3f0] p-4 hover:border-[#1b3a6b]/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-[#1a2035] break-words">{project.title}</p>
                      {project.description && (
                        <p className="text-xs text-[#6b7a9e] mt-0.5 line-clamp-1 break-words">{project.description}</p>
                      )}
                    </div>
                    <span className="text-xs text-[#1b3a6b] font-medium">Ver →</span>
                  </div>
                </Link>
              ))}
              <Link
                href="/dashboard/proyectos"
                className="block text-center text-xs text-[#1b3a6b] font-semibold py-2 hover:underline"
              >
                + Nuevo proyecto
              </Link>
            </div>
          )}
        </div>

        {/* Skills */}
        <div>
          <h2 className="font-bold text-[#1a2035] mb-4">Skills ganados</h2>
          {earnedSkills.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-[#dde3f0] p-6 text-center">
              <div className="text-2xl mb-2">🪶</div>
              <p className="text-xs text-[#6b7a9e]">Completa tu primer proyecto para ganar tu primer skill</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
              {earnedSkills.slice(0, 6).map((skill: any) => (
                <div
                  key={skill.id}
                  title={skill.description}
                  className="bg-white rounded-xl border border-[#dde3f0] p-3 text-center hover:border-[#c8a217] transition-colors"
                >
                  <div className="text-2xl mb-1">{skill.icon}</div>
                  <p className="text-[10px] font-semibold text-[#1a2035] leading-tight break-words">{skill.name}</p>
                </div>
              ))}
            </div>
          )}
          {earnedSkills.length > 6 && (
            <p className="text-xs text-center text-[#6b7a9e] mt-2">+{earnedSkills.length - 6} más</p>
          )}
        </div>
      </div>

      {/* Idiomas disponibles */}
      <div className="mt-8">
        <h2 className="font-bold text-[#1a2035] mb-4">Explorar idiomas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: "K'iche'", slug: 'kiche' },
            { name: "Q'eqchi'", slug: 'qeqchi' },
            { name: 'Kaqchikel', slug: 'kaqchikel' },
            { name: 'Mam', slug: 'mam' },
            { name: "Tz'utujil", slug: 'tzutujil' },
          ].map(lang => (
            <Link
              key={lang.slug}
              href="/dashboard/proyectos"
              className="bg-white rounded-xl border border-[#dde3f0] p-4 text-center hover:shadow-sm hover:border-transparent transition-all"
            >
              <div className="h-1 rounded-full mb-3" style={{ backgroundColor: langColors[lang.slug] }} />
              <p className="text-xs font-bold text-[#1a2035]">{lang.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
