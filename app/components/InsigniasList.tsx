import Link from 'next/link'

export interface InsigniaItem {
  id: number
  titulo: string
  idioma: string
  ruta: string
  fecha: string
  color: string
}

/** Insignias de logro del usuario; cada una abre su imagen para descargar. */
export function InsigniasList({ insignias }: { insignias: InsigniaItem[] }) {
  if (insignias.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-[#e4e2da] p-6 text-center">
        <h3 className="font-bold text-[#14181f] text-sm mb-1">Aún no tienes insignias</h3>
        <p className="text-sm text-[#5e6673]">Completa una ruta para ganar tu primera insignia de logro.</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {insignias.map((ins) => (
        <li key={ins.id}>
          <Link
            href={`/dashboard/insignia/${ins.id}`}
            className="group flex items-center gap-4 bg-white rounded-2xl border border-[#e4e2da] p-5 hover:border-[#14181f] transition-colors"
          >
            <svg width="56" height="56" viewBox="0 0 60 60" className="shrink-0" aria-hidden="true">
              <rect width="60" height="60" rx="12" fill="#101418" />
              <path d="M30 8 L52 30 L30 52 L8 30 Z" fill="none" stroke="#d9a62b" strokeWidth="2" />
              <path d="M30 13 L47 30 L30 47 L13 30 Z" fill={ins.color} />
              <circle cx="30" cy="26" r="2.5" fill="#fbf7ec" /><circle cx="25.5" cy="33" r="2.5" fill="#fbf7ec" /><circle cx="34.5" cy="33" r="2.5" fill="#fbf7ec" />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#5e6673] mb-1">{ins.idioma} · {ins.ruta}</p>
              <p className="font-extrabold text-[#14181f] break-words">{ins.titulo}</p>
              <p className="text-sm text-[#5e6673]">Completada el {ins.fecha}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-[#0e5c4a]">
              Ver <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
