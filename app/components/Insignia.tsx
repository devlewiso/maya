'use client'

import { useEffect, useRef, useState } from 'react'

export interface InsigniaProps {
  nombre: string
  idioma: string
  ruta: string
  fecha: string
  color: string
}

const S = 1080 // la imagen descargada es de 1080 × 1080 px (formato de redes)

// Colores «Tejido»
const OBSIDIANA = '#101418'
const MAIZ = '#d9a62b'
const MAIZ_CLARO = '#e6b647'
const PAPEL = '#fbf7ec'
const GRIS = '#9aa2ad'
const LINEA = '#262d37'
const JADE = '#0e5c4a'

function rombo(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(cx, cy - r)
  ctx.lineTo(cx + r, cy)
  ctx.lineTo(cx, cy + r)
  ctx.lineTo(cx - r, cy)
  ctx.closePath()
}

/** Escribe centrado y reduce la letra si el texto no cabe en `ancho`. */
function texto(ctx: CanvasRenderingContext2D, t: string, x: number, y: number, peso: number, tam: number, familia: string, ancho: number) {
  let size = tam
  do {
    ctx.font = `${peso} ${size}px ${familia}`
    size -= 2
  } while (ctx.measureText(t).width > ancho && size > 18)
  ctx.fillText(t, x, y)
}

function dibujar(ctx: CanvasRenderingContext2D, p: InsigniaProps, sans: string, mono: string) {
  const cx = S / 2
  ctx.fillStyle = OBSIDIANA
  ctx.fillRect(0, 0, S, S)

  // Banda de rombos (huipil), como TejidoBand
  const h = 44
  ctx.fillStyle = MAIZ
  ctx.strokeStyle = MAIZ
  ctx.lineWidth = 4
  for (let x = 0; x < S; x += h * 2) {
    rombo(ctx, x + h / 2, h / 2, h / 2)
    ctx.fill()
    rombo(ctx, x + h * 1.5, h / 2, h / 2 - 2)
    ctx.stroke()
  }

  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = MAIZ
  if ('letterSpacing' in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '6px'
  texto(ctx, 'INSIGNIA DE LOGRO', cx, 150, 500, 30, mono, 900)
  if ('letterSpacing' in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = '0px'

  // Emblema: rombo maíz, relleno con el color del idioma, rombo interior y 3 puntos (el 3 maya)
  const ey = 380
  ctx.lineWidth = 8
  ctx.strokeStyle = MAIZ
  rombo(ctx, cx, ey, 190)
  ctx.stroke()
  ctx.beginPath()
  for (const [x1, y1, x2, y2] of [[cx - 205, ey, cx - 186, ey], [cx + 186, ey, cx + 205, ey], [cx, ey - 205, cx, ey - 186], [cx, ey + 186, cx, ey + 205]]) {
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
  }
  ctx.stroke()
  ctx.fillStyle = p.color
  rombo(ctx, cx, ey, 160)
  ctx.fill()
  ctx.strokeStyle = PAPEL
  ctx.lineWidth = 6
  rombo(ctx, cx, ey, 98)
  ctx.stroke()
  ctx.fillStyle = PAPEL
  for (const [dx, dy] of [[0, -26], [-34, 22], [34, 22]]) {
    ctx.beginPath()
    ctx.arc(cx + dx, ey + dy, 13, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.fillStyle = '#ffffff'
  texto(ctx, p.idioma, cx, 690, 800, 104, sans, 940)
  ctx.fillStyle = MAIZ_CLARO
  texto(ctx, `${p.ruta} completada`, cx, 760, 600, 42, sans, 940)
  ctx.fillStyle = '#ffffff'
  texto(ctx, p.nombre, cx, 858, 700, 52, sans, 940)
  ctx.fillStyle = GRIS
  texto(ctx, p.fecha, cx, 912, 400, 34, sans, 940)

  // Pie: marca y aviso
  ctx.fillStyle = LINEA
  ctx.fillRect(0, 966, S, 2)
  const py = 1024
  ctx.fillStyle = JADE
  ctx.beginPath()
  ctx.roundRect(60, py - 34, 48, 48, 9)
  ctx.fill()
  ctx.strokeStyle = MAIZ
  ctx.lineWidth = 4
  rombo(ctx, 84, py - 10, 14)
  ctx.stroke()
  ctx.textAlign = 'left'
  ctx.fillStyle = '#ffffff'
  ctx.font = `800 34px ${sans}`
  ctx.fillText('Astro Maya', 124, py + 2)
  ctx.textAlign = 'right'
  ctx.fillStyle = GRIS
  ctx.font = `400 24px ${mono}`
  ctx.fillText('Logro en la plataforma · no es un certificado', S - 60, py)
}

/** Dibuja la insignia en un canvas (la misma imagen que se descarga) y ofrece «Descargar imagen». */
export default function Insignia(props: InsigniaProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [lista, setLista] = useState(false)
  const { nombre, idioma, ruta, fecha, color } = props

  useEffect(() => {
    let vivo = true
    // Espera las fuentes de la página (next/font) para que el canvas no use otra letra.
    document.fonts.ready.then(() => {
      const canvas = ref.current
      const ctx = canvas?.getContext('2d')
      if (!vivo || !canvas || !ctx) return
      const raiz = getComputedStyle(document.documentElement)
      const sans = raiz.getPropertyValue('--font-jakarta').trim() || 'system-ui, sans-serif'
      const mono = raiz.getPropertyValue('--font-plex-mono').trim() || 'ui-monospace, monospace'
      dibujar(ctx, { nombre, idioma, ruta, fecha, color }, sans, mono)
      setLista(true)
    })
    return () => { vivo = false }
  }, [nombre, idioma, ruta, fecha, color])

  function descargar() {
    ref.current?.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const slug = idioma.toLowerCase().normalize('NFD').replace(/[^a-z]/g, '')
      a.href = url
      a.download = `insignia-astro-maya-${slug}.png`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    }, 'image/png')
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-[520px]">
      <canvas
        ref={ref}
        width={S}
        height={S}
        role="img"
        aria-label={`Insignia de logro: ${ruta} de ${idioma}, ${nombre}, ${fecha}`}
        className="w-full h-auto rounded-2xl bg-[#101418]"
      />
      <button
        type="button"
        onClick={descargar}
        disabled={!lista}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0e5c4a] text-white font-bold rounded-xl hover:bg-[#0a4337] transition-colors disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
        </svg>
        Descargar imagen
      </button>
    </div>
  )
}
