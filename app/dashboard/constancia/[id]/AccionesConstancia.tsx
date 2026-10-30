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
      <button onClick={copiar} className="rounded-xl border border-[#e4e2da] bg-white px-4 py-2.5 text-sm font-semibold text-[#0e5c4a] hover:bg-[#f6f5f1] transition">
        Copiar enlace
      </button>
      <button onClick={() => window.print()} className="rounded-xl bg-[#0e5c4a] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#0a4337] transition">
        Descargar PDF / Imprimir
      </button>
    </div>
  )
}
