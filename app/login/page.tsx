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
  const [googleLoading, setGoogleLoading] = useState(false)

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

  async function handleGoogleLogin() {
    setGoogleLoading(true)
    setError('')

    const supabase = createClient()

    const redirectUrl = `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/auth/callback`

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
      },
    })

    if (error) {
      console.error('[GOOGLE LOGIN] Error:', error)
      setError(`Error al iniciar con Google: ${error.message}`)
      setGoogleLoading(false)
    }
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
          {/* Banner de advertencia */}
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <p className="text-xs text-amber-800">
              <strong>⚠️ Nota:</strong> Si tu cuenta fue eliminada por un error técnico pero te registraste con Google, puedes iniciar sesión normalmente.
            </p>
          </div>

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

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#dde3f0]"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-[#f5f7fc] text-[#6b7a9e]">o continúa con</span>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-2.5 bg-white text-[#1a2035] font-semibold rounded-lg text-sm border border-[#dde3f0] hover:bg-[#f5f7fc] transition disabled:opacity-60 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {googleLoading ? 'Conectando...' : 'Continuar con Google'}
          </button>

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
