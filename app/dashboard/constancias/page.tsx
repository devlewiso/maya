import { getConstancias } from '@/app/actions/dashboard'
import { ConstanciasList } from '@/app/components/ConstanciasList'

export const metadata = { title: 'Mis constancias', robots: { index: false } }

export default async function ConstanciasPage() {
  const constancias = await getConstancias()

  return (
    <div className="px-4 sm:px-8 py-8 lg:py-10 max-w-6xl mx-auto">
      <header className="mb-8">
        <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-[#5e6673] mb-2">Tu panel</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#14181f] mb-2">Mis constancias</h1>
        <p className="text-[15px] text-[#4a5260] max-w-2xl">
          Una constancia por cada ruta que completas. Es un reconocimiento simbólico: puedes guardarla en PDF o compartir su enlace de verificación.
        </p>
      </header>
      <ConstanciasList constancias={constancias} />
    </div>
  )
}
