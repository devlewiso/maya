import Link from 'next/link'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects, user } from '@/lib/db/schema'
import { fechaLarga, firmaValida, leerCodigo, nombreRuta } from '@/lib/constancia'
import Header from '@/app/components/Header'
import Footer from '@/app/components/footer'

export const metadata = { title: 'Verificar constancia', robots: { index: false } }

// Comprueba una constancia de logro: el código trae el id del proyecto y una firma HMAC.
// Solo muestra lo que ya figura en la constancia (nombre, idioma, ruta y fecha).
async function buscar(codigo: string) {
  const leido = leerCodigo(decodeURIComponent(codigo))
  if (!leido) return null
  const [fila] = await db
    .select({ userId: projects.userId, status: projects.status, completedAt: projects.completedAt, type: projects.type, nombre: user.name, languageId: projects.languageId })
    .from(projects)
    .innerJoin(user, eq(user.id, projects.userId))
    .where(eq(projects.id, leido.projectId))
  if (!fila?.userId || fila.status !== 'completed' || !fila.completedAt) return null
  if (!firmaValida(decodeURIComponent(codigo), fila.userId, fila.completedAt)) return null
  const idioma = fila.languageId ? await db.query.languages.findFirst({ where: (l, { eq }) => eq(l.id, fila.languageId!), columns: { name: true } }) : null
  return { nombre: fila.nombre, idioma: idioma?.name ?? 'maya', ruta: nombreRuta(fila.type), fecha: fechaLarga(fila.completedAt) }
}

export default async function VerificarPage({ params }: { params: Promise<{ codigo: string }> }) {
  const { codigo } = await params
  const r = await buscar(codigo)
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
        {r ? (
          <div className="w-full rounded-2xl border border-[#e4e2da] bg-white p-8 shadow-sm">
            <div className="text-5xl">🏅</div>
            <h1 className="mt-3 text-2xl font-bold text-[#0e5c4a]">Constancia válida</h1>
            <p className="mt-4 text-[#14181f]"><b>{r.nombre}</b> completó la <b>{r.ruta}</b> de <b>{r.idioma}</b> en Astro Maya el {r.fecha}.</p>
            <p className="mt-4 font-mono text-sm text-[#0e5c4a]">{decodeURIComponent(codigo).toUpperCase()}</p>
            <p className="mt-6 text-xs text-[#5e6673]">Reconocimiento simbólico de Astro Maya. No es un certificado académico oficial ni está avalado por la ALMG, el MINEDUC u otra institución.</p>
          </div>
        ) : (
          <div className="w-full rounded-2xl border border-[#e4e2da] bg-white p-8 shadow-sm">
            <div className="text-5xl">❔</div>
            <h1 className="mt-3 text-2xl font-bold text-[#14181f]">No encontramos esa constancia</h1>
            <p className="mt-3 text-sm text-[#5e6673]">Revisa que el código esté completo, por ejemplo <span className="font-mono">AM-128-3F9A0C51D2</span>.</p>
          </div>
        )}
        <Link href="/" className="mt-8 text-sm font-semibold text-[#0e5c4a] hover:underline">Aprender idiomas mayas en Astro Maya →</Link>
      </main>
      <Footer />
    </>
  )
}
