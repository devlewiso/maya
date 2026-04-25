'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export function StreakReminder() {
  const [showReminder, setShowReminder] = useState(false)
  const [streakDays, setStreakDays] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkStreak() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data: streak } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (streak && streak.current_days > 0) {
        const lastActivity = new Date(streak.last_activity)
        const now = new Date()
        const hoursSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60)

        // Show reminder if more than 20 hours since last activity
        if (hoursSinceActivity > 20) {
          setStreakDays(streak.current_days)
          setShowReminder(true)
        }
      }

      setLoading(false)
    }

    checkStreak()
  }, [])

  if (loading || !showReminder) return null

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 animate-pulse">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🔥</span>
        <div className="flex-1">
          <h3 className="font-bold text-orange-800 text-sm">
            ¡Tu racha de {streakDays} días está en riesgo!
          </h3>
          <p className="text-orange-700 text-xs mt-1">
            No has estudiado hoy. Completa una lección para mantener tu racha.
          </p>
          <Link
            href="/dashboard/proyectos"
            className="inline-block mt-2 px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Continuar aprendiendo →
          </Link>
        </div>
        <button
          onClick={() => setShowReminder(false)}
          className="text-orange-400 hover:text-orange-600 text-lg leading-none"
          aria-label="Cerrar recordatorio"
        >
          ×
        </button>
      </div>
    </div>
  )
}
