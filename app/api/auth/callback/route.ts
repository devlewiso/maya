import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')

  // Si hay error de OAuth, redirigir al login
  if (error) {
    return NextResponse.redirect(new URL('/login?error=oauth', requestUrl.origin))
  }

  if (code) {
    const supabase = await createServerClient()

    // Intercambiar código por sesión (esto maneja PKCE del lado del servidor)
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

    if (exchangeError) {
      console.error('Error exchanging code:', exchangeError)
      return NextResponse.redirect(new URL('/login?error=exchange', requestUrl.origin))
    }

    // Éxito - redirigir al dashboard
    return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
  }

  // No hay código, redirigir al login
  return NextResponse.redirect(new URL('/login?error=no_code', requestUrl.origin))
}
