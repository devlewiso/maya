import Link from 'next/link'
import { notFound } from 'next/navigation'
import { and, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects, projectTasks } from '@/lib/db/schema'
import { requireUser } from '@/lib/session'
import { codigoConstancia, fechaLarga, nombreRuta } from '@/lib/constancia'
import Constancia from '@/app/components/Constancia'
import AccionesConstancia from './AccionesConstancia'

export const metadata = { title: 'Mi constancia de logro', robots: { index: false } }

const SITIO = 'https://astromaya.neuralcodelab.com'

export default async function ConstanciaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const projectId = Number(id)
  if (!Number.isInteger(projectId)) notFound()

  const user = await requireUser()
  const project = await db.query.projects.findFirst({
    where: and(eq(projects.id, projectId), eq(projects.userId, user.id)),
    with: { language: { columns: { name: true } } },
  })
  // Solo el dueño, y solo cuando la ruta está completa.
  if (!project || project.status !== 'completed' || !project.completedAt) notFound()

  const tareas = await db
    .select({ completed: projectTasks.completed, xp: projectTasks.xpReward })
    .from(projectTasks)
    .where(eq(projectTasks.projectId, projectId))
  const lecciones = tareas.filter((t) => t.completed).length
  const xp = tareas.filter((t) => t.completed).reduce((s, t) => s + (t.xp ?? 0), 0) + 50 // +50 al completar la ruta

  const codigo = codigoConstancia(project.id, user.id, project.completedAt)
  const urlVerificar = `${SITIO}/verificar/${codigo}`

  return (
    <div className="p-6">
      <div className="no-print mx-auto mb-5 flex max-w-[1100px] flex-wrap items-center justify-between gap-3">
        <div>
          <Link href={`/dashboard/proyectos/${project.id}`} className="text-xs text-[#5e6673] hover:text-[#0e5c4a]">← Volver a la ruta</Link>
          <h1 className="mt-1 text-xl font-bold text-[#14181f]">Tu constancia de logro 🏅</h1>
          <p className="text-sm text-[#5e6673]">Un reconocimiento simbólico por tu esfuerzo. Guárdala en PDF o compártela con su enlace de verificación.</p>
        </div>
        <AccionesConstancia urlVerificar={urlVerificar} />
      </div>

      <Constancia
        nombre={user.name}
        idioma={project.language?.name ?? 'maya'}
        ruta={nombreRuta(project.type)}
        titulo={project.title}
        lecciones={lecciones}
        xp={xp}
        fecha={fechaLarga(project.completedAt)}
        codigo={codigo}
        urlVerificar={urlVerificar}
      />
    </div>
  )
}
