'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Toaster } from '@/app/components/Toaster'

const navItems = [
  { href: '/dashboard', label: 'Inicio', icon: '⌂' },
  { href: '/dashboard/proyectos', label: 'Proyectos', icon: '◈' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [xpData, setXpData] = useState<any[]>([])
  const [streak, setStreak] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      Promise.all([
        supabase.from('profiles').select('display_name').eq('id', user.id).single(),
        supabase.from('user_xp_log').select('xp').eq('user_id', user.id),
        supabase.from('streaks').select('current_days').eq('user_id', user.id).single(),
      ]).then(([profileRes, xpRes, streakRes]) => {
        setProfile(profileRes.data)
        setXpData(xpRes.data || [])
        setStreak(streakRes.data)
        setLoading(false)
      })
    })
  }, [router])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#f5f7fc] flex items-center justify-center">
        <div className="text-[#6b7a9e]">Cargando...</div>
      </div>
    )
  }

  const totalXp = xpData?.reduce((acc, r) => acc + r.xp, 0) ?? 0
  const xpLevels = [
    { level: 1, label: 'Explorador', min: 0 },
    { level: 2, label: 'Aprendiz', min: 100 },
    { level: 3, label: 'Practicante', min: 300 },
    { level: 4, label: 'Conocedor', min: 700 },
    { level: 5, label: 'Guardián del Idioma', min: 1500 },
  ]
  const currentLevel = [...xpLevels].reverse().find(l => totalXp >= l.min) ?? xpLevels[0]
  const nextLevel = xpLevels[currentLevel.level] ?? null
  const progress = nextLevel
    ? Math.round(((totalXp - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100)
    : 100

  const displayName = profile?.display_name ?? user.email?.split('@')[0] ?? 'Explorador'

  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-[#dde3f0] sticky top-0 z-30">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center gap-2 text-[#1b3a6b] font-bold">
            <span className="text-[#c8a217]">◆</span> Astro Maya
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -mr-2 text-[#1a2035] hover:bg-[#f5f7fc] rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-60 bg-white border-r border-[#dde3f0] flex-col fixed h-full z-20">
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
            <div className="flex items-center justify-between text-[10px] text-[#6b7a9e] mb-1">
              <span>{totalXp} XP</span>
              {nextLevel && <span>→ {nextLevel.min} XP</span>}
            </div>
            <div className="h-1.5 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
              <div className="h-full bg-[#c8a217] rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
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
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#1b3a6b] bg-[#f5f7fc]'
                    : 'text-[#1a2035] hover:bg-[#f5f7fc] hover:text-[#1b3a6b]'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-[#dde3f0]">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#6b7a9e] hover:bg-[#f5f7fc] hover:text-red-600 transition-colors"
            >
              <span>↩</span> Cerrar sesión
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-white z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#dde3f0]">
              <Link href="/" className="flex items-center gap-2 text-[#1b3a6b] font-bold">
                <span className="text-[#c8a217]">◆</span> Astro Maya
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-[#1a2035] hover:bg-[#f5f7fc] rounded-lg transition-colors"
                aria-label="Cerrar menú"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* User card */}
            <div className="px-4 py-4 border-b border-[#dde3f0]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1b3a6b] flex items-center justify-center text-white font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1a2035] truncate">{displayName}</p>
                  <p className="text-xs text-[#6b7a9e]">{currentLevel.label}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#6b7a9e] mb-1">
                <span>{totalXp} XP</span>
                {nextLevel && <span>→ {nextLevel.min} XP</span>}
              </div>
              <div className="h-2 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
                <div className="h-full bg-[#c8a217] rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
              {(streak?.current_days ?? 0) > 0 && (
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 rounded px-2 py-1">
                  🔥 Racha: {streak!.current_days} día{streak!.current_days !== 1 ? 's' : ''}
                </div>
              )}
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#1b3a6b] bg-[#f5f7fc]'
                      : 'text-[#1a2035] hover:bg-[#f5f7fc] hover:text-[#1b3a6b]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-[#dde3f0]">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-[#6b7a9e] hover:bg-[#f5f7fc] hover:text-red-600 transition-colors"
              >
                <span className="text-lg">↩</span> Cerrar sesión
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-60 min-h-screen">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  )
}
