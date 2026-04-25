'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { data: signInData, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Correo o contraseña incorrectos.')
      setLoading(false)
      return
    }

    // Verificar y crear perfil si no existe (para usuarios antiguos)
    if (signInData.user) {
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', signInData.user.id)
        .single()

      if (!existingProfile) {
        // Crear perfil faltante
        await supabase.from('profiles').insert({
          id: signInData.user.id,
          display_name: signInData.user.user_metadata?.full_name || email.split('@')[0],
          email: email,
        })
      }

      // Verificar y crear streak si no existe
      const { data: existingStreak } = await supabase
        .from('streaks')
        .select('user_id')
        .eq('user_id', signInData.user.id)
        .single()

      if (!existingStreak) {
        await supabase.from('streaks').insert({
          user_id: signInData.user.id,
          current_days: 0,
          longest_days: 0,
          last_activity: null,
        })
      }
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#f5f7fc] flex flex-col">
      {/* Header mínimo */}
      <div className="px-6 py-5 border-b border-[#dde3f0] bg-white">
        <Link href="/" className="inline-flex items-center gap-2 text-[#1b3a6b] font-bold text-lg">
          <span className="text-[#c8a217]">◆</span> Astro Maya
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1a2035] mb-1">Bienvenido de nuevo</h1>
            <p className="text-sm text-[#6b7a9e]">Continúa tu aprendizaje</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-xl border border-[#dde3f0] p-6 space-y-4">
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="tu@correo.com"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#1b3a6b] text-white font-semibold rounded-lg text-sm hover:bg-[#254d8f] transition disabled:opacity-60"
            >
              {loading ? 'Entrando...' : 'Iniciar sesión'}
            </button>
          </form>

          <p className="text-center text-xs text-[#6b7a9e] mt-5">
            ¿No tienes cuenta?{' '}
            <Link href="/signup" className="text-[#1b3a6b] font-semibold hover:underline">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
