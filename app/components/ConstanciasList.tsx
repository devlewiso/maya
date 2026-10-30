import Link from 'next/link'

export interface ConstanciaItem {
  id: number
  titulo: string
  idioma: string
  ruta: string
  fecha: string
  codigo: string
}

/** Lista de constancias de logro; cada una abre su hoja imprimible. */
export function ConstanciasList({ constancias }: { constancias: ConstanciaItem[] }) {
  if (constancias.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-[#e4e2da] p-6 text-center">
        <h3 className="font-bold text-[#14181f] text-sm mb-1">Aún no tienes constancias</h3>
        <p className="text-sm text-[#5e6673]">Completa una ruta para obtener tu constancia de logro.</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {constancias.map((c) => (
        <li key={c.id}>
          <Link
            href={`/dashboard/constancia/${c.id}`}
            className="group block bg-white rounded-2xl border border-[#e4e2da] overflow-hidden hover:border-[#14181f] transition-colors"
          >
            <div className="h-1.5 bg-[#d9a62b]" />
            <div className="p-5">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#5e6673] mb-2">
                {c.idioma} · {c.ruta}
              </p>
              <p className="text-lg font-extrabold text-[#14181f] break-words">{c.titulo}</p>
              <p className="text-sm text-[#5e6673] mt-1">Completada el {c.fecha}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[#5e6673]">{c.codigo}</span>
                <span className="text-sm font-semibold text-[#0e5c4a]">
                  Ver constancia <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
