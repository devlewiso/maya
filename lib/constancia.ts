import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * Constancia de logro (reconocimiento simbólico, no oficial) al completar una ruta.
 *
 * El código de verificación no se guarda en la base: es el id del proyecto más una firma HMAC
 * (con BETTER_AUTH_SECRET) del proyecto, el usuario y la fecha en que se completó. Así cualquiera
 * puede comprobarlo en /verificar/<código> y nadie puede inventar uno válido.
 */

export const TIPOS_RUTA: Record<string, string> = {
  ruta_basica: 'Ruta Básica',
  ruta_completa: 'Ruta Completa',
  inmersion_cultural: 'Inmersión Cultural',
  vocabulario_express: 'Vocabulario Express',
  personalizado: 'Ruta Personalizada',
}

export const nombreRuta = (tipo: string | null | undefined) => TIPOS_RUTA[tipo ?? ''] ?? 'Ruta de aprendizaje'

function firma(projectId: number, userId: string, completedAt: Date) {
  const secreto = process.env.BETTER_AUTH_SECRET
  if (!secreto) throw new Error('Falta BETTER_AUTH_SECRET para firmar constancias')
  return createHmac('sha256', secreto)
    .update(`constancia:${projectId}:${userId}:${completedAt.toISOString()}`)
    .digest('hex')
    .slice(0, 10)
    .toUpperCase()
}

/** Código público de la constancia, p. ej. AM-128-3F9A0C51D2 */
export function codigoConstancia(projectId: number, userId: string, completedAt: Date) {
  return `AM-${projectId}-${firma(projectId, userId, completedAt)}`
}

/** Separa un código en id de proyecto y firma; null si no tiene el formato. */
export function leerCodigo(codigo: string) {
  const m = /^AM-(\d{1,9})-([0-9A-F]{10})$/.exec(codigo.trim().toUpperCase())
  return m ? { projectId: Number(m[1]), firma: m[2] } : null
}

/** ¿La firma del código corresponde a ese proyecto, usuario y fecha? (comparación en tiempo constante) */
export function firmaValida(codigo: string, userId: string, completedAt: Date) {
  const leido = leerCodigo(codigo)
  if (!leido) return false
  const esperada = Buffer.from(firma(leido.projectId, userId, completedAt))
  const recibida = Buffer.from(leido.firma)
  return esperada.length === recibida.length && timingSafeEqual(esperada, recibida)
}

export const fechaLarga = (d: Date) =>
  d.toLocaleDateString('es-GT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Guatemala' })
