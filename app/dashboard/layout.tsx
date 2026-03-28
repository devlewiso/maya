import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name')
    .eq('id', user.id)
    .single()

  const { data: xpData } = await supabase
    .from('user_xp_log')
    .select('xp')
    .eq('user_id', user.id)

  const totalXp = xpData?.reduce((acc, r) => acc + r.xp, 0) ?? 0

  const xpLevels = [
    { level: 1, label: 'Explorador',          min: 0   },
    { level: 2, label: 'Aprendiz',             min: 100 },
    { level: 3, label: 'Practicante',          min: 300 },
    { level: 4, label: 'Conocedor',            min: 700 },
    { level: 5, label: 'Guardián del Idioma',  min: 1500 },
  ]
  const currentLevel = [...xpLevels].reverse().find(l => totalXp >= l.min) ?? xpLevels[0]
  const nextLevel = xpLevels[currentLevel.level] ?? null
  const progress = nextLevel
    ? Math.round(((totalXp - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100)
    : 100

  const { data: streak } = await supabase
    .from('streaks')
    .select('current_days')
    .eq('user_id', user.id)
    .single()

  const displayName = profile?.display_name ?? user.email?.split('@')[0] ?? 'Explorador'

  const navItems = [
    { href: '/dashboard', label: 'Inicio', icon: '⌂' },
    { href: '/dashboard/proyectos', label: 'Proyectos', icon: '◈' },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fc] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-[#dde3f0] flex flex-col fixed h-full z-20">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-[#dde3f0]">
          <Link href="/" className="inline-flex items-center gap-2 text-[#1b3a6b] font-bold">
            <span className="text-[#c8a217]">◆</span> Astro Maya
          </Link>
        </div>

        {/* User card */}
        <div className="px-4 py-4 border-b border-[#dde3f0]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1b3a6b] flex items-center justify-center text-white font-bold text-sm">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#1a2035] truncate">{displayName}</p>
              <p className="text-[10px] text-[#6b7a9e]">{currentLevel.label}</p>
            </div>
          </div>
          {/* XP bar */}
          <div className="flex items-center justify-between text-[10px] text-[#6b7a9e] mb-1">
            <span>{totalXp} XP</span>
            {nextLevel && <span>→ {nextLevel.min} XP</span>}
          </div>
          <div className="h-1.5 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
            <div
              className="h-full bg-[#c8a217] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Racha */}
          {(streak?.current_days ?? 0) > 0 && (
            <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-orange-600 bg-orange-50 rounded px-2 py-0.5">
              🔥 Racha: {streak!.current_days} día{streak!.current_days !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#1a2035] hover:bg-[#f5f7fc] hover:text-[#1b3a6b] font-medium transition-colors"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-[#dde3f0]">
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#6b7a9e] hover:bg-[#f5f7fc] hover:text-red-600 transition-colors"
            >
              <span>↩</span> Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60 min-h-screen">
        {children}
      </main>
    </div>
  )
}
