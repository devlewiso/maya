import { getInsignias } from '@/app/actions/dashboard'
import { InsigniasList } from '@/app/components/InsigniasList'
import { InsigniaBanner } from '@/app/components/InsigniaBanner'

export const metadata = { title: 'Mis insignias', robots: { index: false } }

export default async function InsigniasPage() {
  const insignias = await getInsignias()

  return (
    <div className="px-4 sm:px-8 py-8 lg:py-10 max-w-6xl mx-auto">
      <header className="mb-8">
        <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-[#5e6673] mb-2">Tu panel</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#14181f] mb-2">Mis insignias</h1>
        <p className="text-[15px] text-[#4a5260] max-w-2xl">
          Ganas una insignia por cada ruta que completas. Descárgala como imagen para guardarla o compartirla.
        </p>
      </header>
      <div className="mb-10">
        <InsigniasList insignias={insignias} />
      </div>
      <InsigniaBanner variante="cuenta" />
    </div>
  )
}
