/**
 * Insignia de logro: imagen que la persona descarga al completar una ruta (proyecto).
 * Es un logro dentro de la plataforma, no un certificado ni un documento oficial,
 * así que no lleva código de verificación ni firma.
 */

export const TIPOS_RUTA: Record<string, string> = {
  ruta_basica: 'Ruta Básica',
  ruta_completa: 'Ruta Completa',
  inmersion_cultural: 'Inmersión Cultural',
  vocabulario_express: 'Vocabulario Express',
  personalizado: 'Ruta Personalizada',
}

export const nombreRuta = (tipo: string | null | undefined) => TIPOS_RUTA[tipo ?? ''] ?? 'Ruta de aprendizaje'

/** Color de cada idioma (mismo que en el resto del sitio), por slug de la tabla `languages`. */
export const COLOR_IDIOMA: Record<string, string> = {
  kiche: '#a3362a',
  qeqchi: '#2c4a8c',
  kaqchikel: '#1e7a55',
  mam: '#b07a12',
  tzutujil: '#6a3f8c',
}

export const colorIdioma = (slug: string | null | undefined) => COLOR_IDIOMA[slug ?? ''] ?? '#0e5c4a'

export const fechaLarga = (d: Date) =>
  d.toLocaleDateString('es-GT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Guatemala' })
