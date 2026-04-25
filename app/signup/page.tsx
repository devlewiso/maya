'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // Crear perfil en la tabla profiles
    if (signUpData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: signUpData.user.id,
          display_name: name || email.split('@')[0],
          email: email,
        })

      if (profileError) {
        console.error('Error creating profile:', profileError)
        // No bloqueamos el registro si falla la creación del perfil
      }

      // Inicializar streak para el nuevo usuario
      const { error: streakError } = await supabase
        .from('streaks')
        .insert({
          user_id: signUpData.user.id,
          current_days: 0,
          longest_days: 0,
          last_activity: null,
        })

      if (streakError) {
        console.error('Error creating streak:', streakError)
      }
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#f5f7fc] flex flex-col">
      <div className="px-6 py-5 border-b border-[#dde3f0] bg-white">
        <Link href="/" className="inline-flex items-center gap-2 text-[#1b3a6b] font-bold text-lg">
          <span className="text-[#c8a217]">◆</span> Astro Maya
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1a2035] mb-1">Crea tu cuenta</h1>
            <p className="text-sm text-[#6b7a9e]">Gratis para siempre · Sin tarjeta</p>
          </div>

          <form onSubmit={handleSignup} className="bg-white rounded-xl border border-[#dde3f0] p-6 space-y-4">
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1a2035] mb-1.5">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Tu nombre"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] transition"
              />
            </div>

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
                placeholder="Mínimo 6 caracteres"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#c8a217] text-[#0f2347] font-bold rounded-lg text-sm hover:bg-[#e8be2c] transition disabled:opacity-60"
            >
              {loading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
            </button>
          </form>

          <p className="text-center text-xs text-[#6b7a9e] mt-5">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-[#1b3a6b] font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>

          <p className="text-center text-[10px] text-[#6b7a9e] mt-4 leading-relaxed">
            Al registrarte aceptas nuestros{' '}
            <Link href="/terminos" className="underline">Términos</Link>
            {' '}y{' '}
            <Link href="/privacidad" className="underline">Política de privacidad</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
