import Link from 'next/link'
import { StreakReminder } from '@/app/components/StreakReminder'
import { LANGUAGES } from '@/app/components/Tejido'
import { ConstanciasList } from '@/app/components/ConstanciasList'
import { getConstancias, getDashboardData } from '@/app/actions/dashboard'

const card = 'bg-white rounded-2xl border border-[#e4e2da]'
const eyebrow = 'font-mono text-[12px] tracking-[0.08em] uppercase text-[#5e6673]'

export default async function DashboardPage() {
  const [{ projects, earnedSkills, completedCount, currentDays }, constancias] = await Promise.all([
    getDashboardData(),
    getConstancias(),
  ])

  const activeProjects = projects.filter(p => p.status === 'active')

  const stats = [
    { value: completedCount, label: 'Lecciones completadas' },
    { value: earnedSkills.length, label: 'Skills ganados' },
    { value: currentDays, label: currentDays === 1 ? 'Día de racha' : 'Días de racha' },
  ]

  return (
    <div className="px-4 sm:px-8 py-8 lg:py-10 max-w-6xl mx-auto">
      <StreakReminder />

      <header className="mb-8">
        <p className={`${eyebrow} mb-2`}>Tu panel</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#14181f] mb-2">Tu ruta de aprendizaje</h1>
        <p className="text-[15px] text-[#4a5260]">Sigue tu progreso y completa proyectos para ganar skills.</p>
      </header>

      <section aria-label="Tu progreso" className={`${card} grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e4e2da] mb-10`}>
        {stats.map(s => (
          <div key={s.label} className="px-6 py-5">
            <p className="text-3xl font-extrabold text-[#14181f]">{s.value}</p>
            <p className="text-sm text-[#5e6673] mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Proyectos activos */}
        <section className="lg:col-span-2">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-extrabold text-[#14181f]">Proyectos activos</h2>
            <Link href="/dashboard/proyectos" className="text-sm text-[#0e5c4a] font-semibold hover:text-[#0a4337]">
              Ver todos →
            </Link>
          </div>

          {activeProjects.length === 0 ? (
            <div className={`${card} border-dashed p-8 text-center`}>
              <h3 className="font-bold text-[#14181f] mb-1">No tienes proyectos activos</h3>
              <p className="text-sm text-[#5e6673] mb-5">Crea tu primer proyecto para empezar a aprender un idioma maya.</p>
              <Link
                href="/dashboard/proyectos"
                className="inline-flex px-5 py-2.5 bg-[#0e5c4a] text-white text-sm font-bold rounded-xl hover:bg-[#0a4337] transition-colors"
              >
                Crear proyecto
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {activeProjects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/dashboard/proyectos/${project.id}`}
                  className={`${card} group px-5 py-4 flex items-center justify-between gap-4 hover:border-[#14181f] transition-colors`}
                >
                  <div className="min-w-0">
                    <p className="font-bold text-[#14181f] break-words">{project.title}</p>
                    {project.description && (
                      <p className="text-sm text-[#5e6673] mt-0.5 line-clamp-1 break-words">{project.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm text-[#0e5c4a] font-semibold">
                    Continuar <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
              <Link
                href="/dashboard/proyectos"
                className="rounded-2xl border border-dashed border-[#cfccc2] px-5 py-3.5 text-center text-sm text-[#0e5c4a] font-semibold hover:border-[#0e5c4a] transition-colors"
              >
                + Nuevo proyecto
              </Link>
            </div>
          )}
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-extrabold text-[#14181f] mb-4">Skills ganados</h2>
          {earnedSkills.length === 0 ? (
            <div className={`${card} border-dashed p-6 text-center`}>
              <h3 className="font-bold text-[#14181f] text-sm mb-1">Sin skills aún</h3>
              <p className="text-sm text-[#5e6673]">Completa tu primer proyecto para ganar tu primer skill.</p>
            </div>
          ) : (
            <ul className={`${card} divide-y divide-[#efede6]`}>
              {earnedSkills.slice(0, 6).map((skill: any) => (
                <li key={skill.id} title={skill.description} className="flex items-center gap-3 px-4 py-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-[#f6f5f1] flex items-center justify-center text-lg" aria-hidden="true">{skill.icon}</span>
                  <span className="text-sm font-semibold text-[#14181f] break-words">{skill.name}</span>
                </li>
              ))}
            </ul>
          )}
          {earnedSkills.length > 6 && (
            <p className="text-sm text-[#5e6673] mt-2">+{earnedSkills.length - 6} más</p>
          )}
        </section>
      </div>

      {/* Constancias */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl font-extrabold text-[#14181f]">Mis constancias</h2>
          {constancias.length > 2 && (
            <Link href="/dashboard/constancias" className="text-sm text-[#0e5c4a] font-semibold hover:text-[#0a4337]">
              Ver todas →
            </Link>
          )}
        </div>
        <ConstanciasList constancias={constancias.slice(0, 2)} />
      </section>

      {/* Idiomas */}
      <section>
        <h2 className="text-xl font-extrabold text-[#14181f] mb-4">Explorar idiomas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {LANGUAGES.map(lang => (
            <Link
              key={lang.href}
              href={lang.href}
              className={`${card} p-5 flex flex-col gap-1 hover:border-[#14181f] transition-colors`}
            >
              <span className="w-8 h-1 rounded-sm mb-3" style={{ background: lang.color }} />
              <span className="font-extrabold text-[#14181f]">{lang.name}</span>
              <span className="text-xs text-[#5e6673]">{lang.region}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
