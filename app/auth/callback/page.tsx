'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()

    const code = searchParams.get('code')
    const errorParam = searchParams.get('error')

    if (errorParam) {
      setError('Error en la autenticación')
      setTimeout(() => router.push('/login'), 3000)
      return
    }

    if (!code) {
      setError('No se recibió código de autenticación')
      setTimeout(() => router.push('/login'), 3000)
      return
    }

    // Intercambiar el código por sesión
    supabase.auth.exchangeCodeForSession(code).then(({ error: exchangeError }) => {
      if (exchangeError) {
        console.error('Error exchanging code for session:', exchangeError)
        // Si falla, intentar con getUser y redirect
        supabase.auth.getUser().then(({ data: { user } }) => {
          if (user) {
            router.push('/dashboard')
          } else {
            setError('No se pudo completar la sesión')
            setTimeout(() => router.push('/login'), 3000)
          }
        })
      } else {
        // Éxito - redirigir al dashboard
        router.push('/dashboard')
      }
    })
  }, [searchParams, router])

  return (
    <div className="text-center">
      {error ? (
        <>
          <div className="text-4xl mb-4">❌</div>
          <p className="text-lg font-semibold text-[#1a2035]">{error}</p>
          <p className="text-sm text-[#6b7a9e] mt-1">Redirigiendo al login...</p>
        </>
      ) : (
        <>
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg font-semibold text-[#1a2035]">Completando inicio de sesión...</p>
          <p className="text-sm text-[#6b7a9e] mt-1">Redirigiendo al dashboard</p>
        </>
      )}
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fc] flex items-center justify-center">
      <Suspense fallback={
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg font-semibold text-[#1a2035]">Cargando...</p>
        </div>
      }>
        <AuthCallbackContent />
      </Suspense>
    </div>
  )
}
