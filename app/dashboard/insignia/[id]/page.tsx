import Link from 'next/link'
import { notFound } from 'next/navigation'
import { and, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects } from '@/lib/db/schema'
import { requireUser } from '@/lib/session'
import { colorIdioma, fechaLarga, nombreRuta } from '@/lib/insignia'
import Insignia from '@/app/components/Insignia'

export const metadata = { title: 'Mi insignia de logro', robots: { index: false } }

export default async function InsigniaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const projectId = Number(id)
  if (!Number.isInteger(projectId)) notFound()

  const user = await requireUser()
  const project = await db.query.projects.findFirst({
    where: and(eq(projects.id, projectId), eq(projects.userId, user.id)),
    with: { language: { columns: { name: true, slug: true } } },
  })
  // Solo el dueño, y solo cuando la ruta está completa.
  if (!project || project.status !== 'completed' || !project.completedAt) notFound()

  return (
    <div className="px-4 sm:px-8 py-8 lg:py-10 max-w-6xl mx-auto">
      <Link href="/dashboard/insignias" className="text-sm text-[#5e6673] hover:text-[#0e5c4a]">← Mis insignias</Link>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-8 lg:gap-12 items-start">
        <Insignia
          nombre={user.name}
          idioma={project.language?.name ?? 'Idioma maya'}
          ruta={nombreRuta(project.type)}
          fecha={fechaLarga(project.completedAt)}
          color={colorIdioma(project.language?.slug)}
        />
        <div className="max-w-xl">
          <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-[#5e6673] mb-2">Insignia de logro</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#14181f] mb-3">¡Completaste «{project.title}»!</h1>
          <p className="text-[15px] leading-relaxed text-[#4a5260] mb-6">
            Descarga la imagen para guardarla o compartirla en tus redes. Es un recuerdo de tu avance aprendiendo una lengua maya.
          </p>
          <p className="text-sm leading-relaxed text-[#4a5260] bg-white border border-[#e4e2da] border-l-4 border-l-[#d9a62b] rounded-xl px-4 py-3.5">
            <b className="text-[#14181f]">Es un logro dentro de Astro Maya, no un certificado.</b> No tiene validez académica ni oficial ante ninguna institución.
          </p>
        </div>
      </div>
    </div>
  )
}
