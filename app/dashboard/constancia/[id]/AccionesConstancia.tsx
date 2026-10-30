'use client'

import { toast } from 'sonner'

export default function AccionesConstancia({ urlVerificar }: { urlVerificar: string }) {
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(urlVerificar)
      toast.success('Enlace de verificación copiado')
    } catch {
      toast.error('No se pudo copiar el enlace')
    }
  }
  return (
    <div className="flex gap-2">
      <button onClick={copiar} className="rounded-xl border border-[#dde3f0] bg-white px-4 py-2.5 text-sm font-semibold text-[#1b3a6b] hover:bg-[#f5f7fc] transition">
        Copiar enlace
      </button>
      <button onClick={() => window.print()} className="rounded-xl bg-[#1b3a6b] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#254d8f] transition">
        Descargar PDF / Imprimir
      </button>
    </div>
  )
}
