'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getStreakStatus } from '@/app/actions/dashboard'

export function StreakReminder() {
  const [showReminder, setShowReminder] = useState(false)
  const [streakDays, setStreakDays] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkStreak() {
      try {
        const streak = await getStreakStatus()

        if (streak && streak.currentDays > 0 && streak.lastActivity) {
          const hoursSinceActivity =
            (Date.now() - new Date(streak.lastActivity).getTime()) / (1000 * 60 * 60)

          // Show reminder if more than 20 hours since last activity
          if (hoursSinceActivity > 20) {
            setStreakDays(streak.currentDays)
            setShowReminder(true)
          }
        }
      } catch {
        /* sin sesión: no mostramos nada */
      }
      setLoading(false)
    }

    checkStreak()
  }, [])

  if (loading || !showReminder) return null

  return (
    <div role="status" className="bg-white border border-[#e4e2da] border-l-4 border-l-[#d9a62b] rounded-2xl p-5 mb-8 flex items-start gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-[#14181f]">
          Tu racha de {streakDays} día{streakDays !== 1 ? 's' : ''} está en riesgo
        </h3>
        <p className="text-sm text-[#4a5260] mt-1">
          No has estudiado hoy. Completa una lección para mantener tu racha.
        </p>
        <Link
          href="/dashboard/proyectos"
          className="inline-block mt-3 px-4 py-2 bg-[#0e5c4a] text-white text-sm font-bold rounded-xl hover:bg-[#0a4337] transition-colors"
        >
          Continuar aprendiendo
        </Link>
      </div>
      <button
        onClick={() => setShowReminder(false)}
        className="text-[#5e6673] hover:text-[#14181f] text-xl leading-none p-1"
        aria-label="Cerrar recordatorio"
      >
        ×
      </button>
    </div>
  )
}
