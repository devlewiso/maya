'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { getShellStats } from '@/app/actions/dashboard'
import { Toaster } from '@/app/components/Toaster'
import { Onboarding } from '@/app/components/Onboarding'
import { LogoMark, MayaNumeral } from '@/app/components/Tejido'

const navItems = [
  { href: '/dashboard', label: 'Inicio', icon: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z' },
  { href: '/dashboard/proyectos', label: 'Proyectos', icon: 'M12 3l9 9-9 9-9-9z' },
]

function NavIcon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [stats, setStats] = useState<{
    displayName: string
    email: string
    totalXp: number
    currentDays: number
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user ?? null

  useEffect(() => {
    if (isPending) return
    if (!user) {
      router.push('/login')
      return
    }
    getShellStats()
      .then((s) => setStats(s))
      .catch(() => setStats(null))
      .finally(() => setLoading(false))
  }, [isPending, user, router])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  async function handleSignOut() {
    await authClient.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading || isPending || !user) {
    return (
      <div className="min-h-screen bg-[#f6f5f1] flex items-center justify-center">
        <div className="text-[#5e6673]">Cargando...</div>
      </div>
    )
  }

  const totalXp = stats?.totalXp ?? 0
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

  const displayName =
    stats?.displayName ?? user?.name ?? user?.email?.split('@')[0] ?? 'Explorador'
  const streak = { current_days: stats?.currentDays ?? 0 }

  return (
    <div className="min-h-screen bg-[#f6f5f1]">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-[#e4e2da] sticky top-0 z-30">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight text-[#14181f]">
            <LogoMark size={28} /> Astro Maya
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -mr-2 text-[#14181f] hover:bg-[#f6f5f1] rounded-lg transition-colors"
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
        <aside className="hidden lg:flex w-64 bg-white border-r border-[#e4e2da] flex-col fixed h-full z-20">
          {/* Logo */}
          <div className="px-5 h-16 flex items-center border-b border-[#e4e2da]">
            <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold tracking-tight text-[#14181f]">
              <LogoMark size={30} /> Astro Maya
            </Link>
          </div>

          {/* Usuario y nivel */}
          <div className="px-5 py-5 border-b border-[#e4e2da]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0e5c4a] flex items-center justify-center text-white font-bold">
                {displayName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#14181f] truncate">{displayName}</p>
                <p className="text-xs text-[#5e6673]">Nivel {currentLevel.level} · {currentLevel.label}</p>
              </div>
            </div>
            <div className="flex items-end justify-between mb-2">
              <MayaNumeral value={currentLevel.level} color="#0e5c4a" />
              <span className="font-mono text-[11px] text-[#5e6673]">
                {totalXp}{nextLevel ? ` / ${nextLevel.min}` : ''} XP
              </span>
            </div>
            <div className="h-1.5 bg-[#efede6] rounded-full overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso al siguiente nivel">
              <div className="h-full bg-[#d9a62b] rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            {streak.current_days > 0 && (
              <p className="mt-3 text-xs text-[#5e6673]">
                Racha: <span className="font-semibold text-[#14181f]">{streak.current_days} día{streak.current_days !== 1 ? 's' : ''}</span>
              </p>
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
                    ? 'text-[#0a4337] bg-[#e8f1ee] font-bold'
                    : 'text-[#3b4250] hover:bg-[#f6f5f1] hover:text-[#14181f]'
                }`}
              >
                <NavIcon d={item.icon} />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-[#e4e2da]">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#5e6673] hover:bg-[#f6f5f1] hover:text-[#a3362a] transition-colors"
            >
              <NavIcon d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10" /> Cerrar sesión
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
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#e4e2da]">
              <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight text-[#14181f]">
                <LogoMark size={28} /> Astro Maya
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-[#14181f] hover:bg-[#f6f5f1] rounded-lg transition-colors"
                aria-label="Cerrar menú"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Usuario y nivel */}
            <div className="px-5 py-5 border-b border-[#e4e2da]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0e5c4a] flex items-center justify-center text-white font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#14181f] truncate">{displayName}</p>
                  <p className="text-xs text-[#5e6673]">Nivel {currentLevel.level} · {currentLevel.label}</p>
                </div>
              </div>
              <div className="flex items-end justify-between mb-2">
                <MayaNumeral value={currentLevel.level} color="#0e5c4a" />
                <span className="font-mono text-[11px] text-[#5e6673]">
                  {totalXp}{nextLevel ? ` / ${nextLevel.min}` : ''} XP
                </span>
              </div>
              <div className="h-1.5 bg-[#efede6] rounded-full overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso al siguiente nivel">
                <div className="h-full bg-[#d9a62b] rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
              {streak.current_days > 0 && (
                <p className="mt-3 text-xs text-[#5e6673]">
                  Racha: <span className="font-semibold text-[#14181f]">{streak.current_days} día{streak.current_days !== 1 ? 's' : ''}</span>
                </p>
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
                      ? 'text-[#0a4337] bg-[#e8f1ee] font-bold'
                      : 'text-[#3b4250] hover:bg-[#f6f5f1] hover:text-[#14181f]'
                  }`}
                >
                  <NavIcon d={item.icon} />
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-[#e4e2da]">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-[#5e6673] hover:bg-[#f6f5f1] hover:text-[#a3362a] transition-colors"
              >
                <NavIcon d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10" /> Cerrar sesión
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 min-h-screen">
          {children}
        </main>
      </div>
      <Toaster />
      <Onboarding />
    </div>
  )
}
