'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')
    const errorParam = searchParams.get('error')

    if (errorParam) {
      router.push('/login?error=oauth')
      return
    }

    if (!code) {
      router.push('/login?error=no_code')
      return
    }

    // Llamar a la API route que maneja el exchange del lado del servidor
    // Esto preserva las cookies de PKCE
    fetch(`/api/auth/callback?code=${code}`)
      .then(res => {
        if (res.redirected) {
          window.location.href = res.url
        } else if (!res.ok) {
          router.push('/login?error=exchange')
        }
      })
      .catch(() => {
        router.push('/login?error=network')
      })
  }, [searchParams, router])

  return (
    <div className="text-center">
      <div className="text-4xl mb-4">⏳</div>
      <p className="text-lg font-semibold text-[#1a2035]">Completando inicio de sesión...</p>
      <p className="text-sm text-[#6b7a9e] mt-1">Redirigiendo al dashboard</p>
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
