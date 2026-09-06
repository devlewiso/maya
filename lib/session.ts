import { headers } from 'next/headers'
import { auth } from '@/lib/auth'

/** Sesión actual (o null). Para Server Components / Server Actions / Route Handlers. */
export async function getSession() {
  return auth.api.getSession({ headers: await headers() })
}

/** Devuelve el usuario autenticado o lanza. Sustituye a las políticas RLS: */
/** cada acción de datos debe llamar a esto y filtrar por `user.id`. */
export async function requireUser() {
  const session = await getSession()
  if (!session?.user) {
    throw new Error('UNAUTHORIZED')
  }
  return session.user
}
