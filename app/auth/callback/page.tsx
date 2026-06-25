'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    // Obtener el código de la URL
    const hash = window.location.hash
    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')

    if (code) {
      // Intercambiar el código por sesión
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          console.error('Error exchanging code for session:', error)
          router.push('/login?error=auth_failed')
        } else {
          // Éxito - redirigir al dashboard
          router.push('/dashboard')
        }
      })
    } else if (hash.includes('access_token')) {
      // OAuth implícito (hash)
      router.push('/dashboard')
    } else {
      // No hay código, redirigir al login
      router.push('/login?error=no_code')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#f5f7fc] flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-lg font-semibold text-[#1a2035]">Completando inicio de sesión...</p>
        <p className="text-sm text-[#6b7a9e] mt-1">Redirigiendo al dashboard</p>
      </div>
    </div>
  )
}
