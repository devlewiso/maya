/**
 * Carga las lecciones de app/content/*Leccion.js a la tabla `lessons` (en la migración Supabase → Neon solo se
 * sembraron idiomas y skills, y sin lecciones todo proyecto se creaba vacío). También:
 *   - crea un skill por idioma de nivel «principiante» (el que completeTask entrega al terminar una ruta), y
 *   - rellena los proyectos que se crearon sin tareas, con las mismas reglas que createProject.
 * Idempotente: se puede correr varias veces sin duplicar nada.
 *   npx tsx --env-file=.env.local lib/db/seed-lecciones.ts [--dry-run]
 */
import { and, eq, sql } from 'drizzle-orm'
import { db } from './index'
import { languages, lessons, projectTasks, skills } from './schema'
import { kicheLessons } from '../../app/content/kicheLeccion'
import { qeqchiLessons } from '../../app/content/qeqchiLeccion'
import { kaqchikelLessons } from '../../app/content/kaqchikelLeccion'
import { mamLessons } from '../../app/content/mamLeccion'
import { tzutujilLessons } from '../../app/content/tzutujilLeccion'

type Contenido = { title: string; level: string; description?: string; content?: unknown }
const CONTENIDO: Record<string, Contenido[]> = {
  kiche: kicheLessons, qeqchi: qeqchiLessons, kaqchikel: kaqchikelLessons, mam: mamLessons, tzutujil: tzutujilLessons,
}
const SECO = process.argv.includes('--dry-run')
// «Principiante-Intermedio» → «principiante-intermedio»: así coincide con el filtro de createProject (level = 'principiante').
const nivel = (l: string) => l.trim().toLowerCase()

async function main() {
  const idiomas = await db.select().from(languages)
  let nuevasLecciones = 0, nuevosSkills = 0, proyectosRellenados = 0, tareasNuevas = 0

  for (const idioma of idiomas) {
    const lista = CONTENIDO[idioma.slug]
    if (!lista) continue
    // 1. lecciones (order_index = posición en el archivo: la página del proyecto busca el contenido así)
    const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(lessons).where(eq(lessons.languageId, idioma.id))
    if (n === 0) {
      const filas = lista.map((l, i) => ({ languageId: idioma.id, title: l.title, level: nivel(l.level), description: l.description ?? null, orderIndex: i + 1, contentJson: l.content ?? null }))
      if (!SECO) await db.insert(lessons).values(filas)
      nuevasLecciones += filas.length
    }
    // 2. skill del idioma para quien completa una ruta
    const slug = `ruta-${idioma.slug}`
    const existe = await db.select({ id: skills.id }).from(skills).where(eq(skills.slug, slug))
    if (existe.length === 0) {
      if (!SECO) await db.insert(skills).values({ slug, name: `Ruta de ${idioma.name}`, description: `Completó una ruta de ${idioma.name}`, icon: '🏅', languageId: idioma.id, level: 'principiante' })
      nuevosSkills++
    }
  }

  // 3. proyectos sin tareas: mismas reglas que createProject (ruta básica y express = principiante; express = 3 primeras)
  const vacios = await db.execute(sql`select p.id, p.type, p.language_id from projects p where p.language_id is not null and not exists (select 1 from project_tasks t where t.project_id = p.id)`)
  for (const p of (vacios.rows ?? vacios) as { id: number; type: string; language_id: number }[]) {
    const soloPrincipiante = p.type === 'ruta_basica' || p.type === 'vocabulario_express'
    let filas = await db.select().from(lessons)
      .where(soloPrincipiante ? and(eq(lessons.languageId, p.language_id), eq(lessons.level, 'principiante')) : eq(lessons.languageId, p.language_id))
      .orderBy(lessons.orderIndex)
    if (p.type === 'vocabulario_express') filas = filas.slice(0, 3)
    if (filas.length === 0) continue
    if (!SECO) await db.insert(projectTasks).values(filas.map((l, i) => ({ projectId: p.id, lessonId: l.id, title: l.title, description: l.description, orderIndex: i + 1, xpReward: 10 })))
    proyectosRellenados++
    tareasNuevas += filas.length
  }

  console.log(`${SECO ? '[simulación] ' : ''}lecciones nuevas: ${nuevasLecciones} · skills nuevos: ${nuevosSkills} · proyectos rellenados: ${proyectosRellenados} (${tareasNuevas} tareas)`)
}

main().then(() => process.exit(0), (err) => { console.error(err); process.exit(1) })
