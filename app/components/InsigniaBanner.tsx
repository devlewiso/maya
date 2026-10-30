import Link from 'next/link'
import { TejidoBand } from './Tejido'

const PASOS = {
  invitado: [
    <><strong>Crea tu cuenta gratis</strong> con tu correo o con Google.</>,
    <><strong>Completa todas las lecciones</strong> de una ruta en el idioma que elijas.</>,
    <><strong>Descarga tu insignia</strong> como imagen desde «Insignias» en tu panel.</>,
  ],
  cuenta: [
    <><strong>Completa una ruta</strong> en Proyectos: todas sus lecciones.</>,
    <><strong>Abre «Insignias»</strong> en el menú de tu panel.</>,
    <><strong>Pulsa «Descargar imagen»</strong> y compártela donde quieras.</>,
  ],
}

/**
 * Explica cómo obtener la insignia de logro y aclara que no es un certificado.
 * La animación (clases `ib-*` en globals.css) es CSS/SVG puro y se detiene con «reducir movimiento».
 */
export function InsigniaBanner({ variante }: { variante: 'invitado' | 'cuenta' }) {
  return (
    <section aria-labelledby="insignia-banner-titulo" className="bg-[#101418] text-white rounded-2xl overflow-hidden">
      <TejidoBand height={12} />
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-center p-5 sm:p-8 md:p-9">
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#d9a62b] mb-2.5">Insignia de logro</p>
          <h2 id="insignia-banner-titulo" className="text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight mb-5">
            Termina una ruta y llévate tu insignia
          </h2>
          <ol className="flex flex-col gap-1.5 mb-5">
            {PASOS[variante].map((paso, i) => (
              <li key={i} className="ib-paso grid grid-cols-[34px_1fr] gap-3 items-center px-3 py-2.5 rounded-xl text-[15px]">
                <span className="flex justify-center gap-1" aria-hidden="true">
                  {Array.from({ length: i + 1 }, (_, j) => <i key={j} className="block w-1.5 h-1.5 rounded-full bg-current" />)}
                </span>
                <span>{paso}</span>
              </li>
            ))}
          </ol>
          <p className="flex gap-2.5 items-start text-[13px] text-[#dce0e6] bg-[#d9a62b]/[0.08] border border-[#d9a62b]/35 rounded-xl px-3.5 py-3 mb-5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9a62b" strokeWidth="2" className="shrink-0 mt-0.5" aria-hidden="true">
              <path d="M12 3 2 21h20L12 3zM12 10v5M12 18v.01" />
            </svg>
            <span>
              <b className="text-[#e6b647]">Es un logro dentro de Astro Maya, no un certificado.</b> No tiene validez académica ni oficial ante ninguna institución. Sirve para celebrar tu avance aprendiendo una lengua maya.
            </span>
          </p>
          {variante === 'invitado' ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/signup" className="px-6 py-3.5 bg-[#d9a62b] text-[#101418] font-extrabold rounded-xl hover:bg-[#e6b647] transition-colors">
                Crear cuenta gratis
              </Link>
              <Link href="/login" className="text-sm font-semibold text-[#dce0e6] underline underline-offset-4 hover:text-white">
                Ya tengo cuenta
              </Link>
            </div>
          ) : (
            <Link href="/dashboard/proyectos" className="inline-flex px-6 py-3.5 bg-[#d9a62b] text-[#101418] font-extrabold rounded-xl hover:bg-[#e6b647] transition-colors">
              Ir a mis proyectos
            </Link>
          )}
        </div>

        <div
          role="img"
          aria-label="Animación: un rombo se teje, toma el color de un idioma, aparece el nombre y se descarga como imagen."
          className="relative aspect-[4/3] max-w-full rounded-2xl order-first md:order-none bg-[radial-gradient(120%_90%_at_50%_40%,#1d2630_0%,#101418_70%)]"
        >
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <circle className="ib-brillo" cx="200" cy="116" r="74" fill="none" stroke="#e6b647" strokeWidth="2" />
            <circle className="ib-chispa" cx="112" cy="70" r="3" fill="#e6b647" />
            <circle className="ib-chispa ib-c2" cx="292" cy="62" r="2.5" fill="#e6b647" />
            <circle className="ib-chispa ib-c3" cx="300" cy="170" r="3" fill="#e6b647" />
            <path className="ib-trazo" d="M200 40 L276 116 L200 192 L124 116 Z" fill="none" stroke="#d9a62b" strokeWidth="3" pathLength={1000} />
            <g className="ib-relleno">
              <path className="ib-color" d="M200 54 L262 116 L200 178 L138 116 Z" fill="#a3362a" />
            </g>
            <path className="ib-trazo ib-t2" d="M200 76 L240 116 L200 156 L160 116 Z" fill="none" stroke="#fbf7ec" strokeWidth="2.5" pathLength={1000} />
            <g className="ib-relleno">
              <circle cx="200" cy="106" r="5" fill="#fbf7ec" />
              <circle cx="187" cy="124" r="5" fill="#fbf7ec" />
              <circle cx="213" cy="124" r="5" fill="#fbf7ec" />
            </g>
            <rect className="ib-texto" x="150" y="204" width="100" height="10" rx="3" fill="#ffffff" />
            <rect className="ib-texto ib-x2" x="166" y="220" width="68" height="6" rx="3" fill="#d9a62b" />
            <g className="ib-bandeja">
              <path d="M156 256 v14 h88 v-14" fill="none" stroke="#d9a62b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path className="ib-check" d="M184 262 l10 9 20 -20" fill="none" stroke="#e6b647" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g className="ib-img">
              <rect x="182" y="226" width="36" height="30" rx="4" fill="#0e5c4a" />
              <text x="200" y="245" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace" fontSize="10" fontWeight="500" fill="#ffffff">PNG</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
