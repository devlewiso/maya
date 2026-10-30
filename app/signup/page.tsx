'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

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

    // El "perfil" (name) vive en la tabla `user`; el streak lo crea el
    // databaseHook `user.create.after` de Better Auth.
    const { error: signUpError } = await authClient.signUp.email({
      name: name || email.split('@')[0],
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message ?? 'No se pudo crear la cuenta.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#f6f5f1] flex flex-col">
      <div className="px-6 py-5 border-b border-[#e4e2da] bg-white">
        <Link href="/" className="inline-flex items-center gap-2 text-[#0e5c4a] font-bold text-lg">
          <span className="text-[#8a6410]">◆</span> Astro Maya
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#14181f] mb-1">Crea tu cuenta</h1>
            <p className="text-sm text-[#5e6673]">Gratis para siempre · Sin tarjeta</p>
          </div>

          <form onSubmit={handleSignup} className="bg-white rounded-xl border border-[#e4e2da] p-6 space-y-4">
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#14181f] mb-1.5">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Tu nombre"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#e4e2da] bg-[#f6f5f1] focus:outline-none focus:border-[#0e5c4a] focus:ring-1 focus:ring-[#0e5c4a] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14181f] mb-1.5">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="tu@correo.com"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#e4e2da] bg-[#f6f5f1] focus:outline-none focus:border-[#0e5c4a] focus:ring-1 focus:ring-[#0e5c4a] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14181f] mb-1.5">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Mínimo 6 caracteres"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#e4e2da] bg-[#f6f5f1] focus:outline-none focus:border-[#0e5c4a] focus:ring-1 focus:ring-[#0e5c4a] transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#d9a62b] text-[#101418] font-bold rounded-lg text-sm hover:bg-[#e6b647] transition disabled:opacity-60"
            >
              {loading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
            </button>
          </form>

          <p className="text-center text-xs text-[#5e6673] mt-5">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-[#0e5c4a] font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>

          <p className="text-center text-[10px] text-[#5e6673] mt-4 leading-relaxed">
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
