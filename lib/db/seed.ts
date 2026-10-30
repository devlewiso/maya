/**
 * Semilla de datos de referencia (languages + skills).
 * Reproduce lo que había en Supabase antes de la migración.
 *   npm run db:seed
 */
import { db } from './index'
import { languages, skills } from './schema'

const LANGUAGES = [
  { name: "K'iche'", slug: 'kiche', isActive: true },
  { name: "Q'eqchi'", slug: 'qeqchi', isActive: true },
  { name: 'Kaqchikel', slug: 'kaqchikel', isActive: true },
  { name: 'Mam', slug: 'mam', isActive: true },
  { name: "Tz'utujil", slug: 'tzutujil', isActive: true },
]

const SKILLS = [
  {
    slug: 'first-project',
    name: 'Ajtikonel',
    description: 'Creó su primer proyecto',
    icon: '◈',
    level: 'basic',
  },
  {
    slug: 'first-lesson',
    name: "Ajch'ab'al",
    description: 'Completó su primera lección',
    icon: '📚',
    level: 'basic',
  },
  {
    slug: 'seven-day-streak',
    name: "Wuqqub' Q'ij",
    description: 'Racha de 7 días',
    icon: '🔥',
    level: 'intermediate',
  },
  {
    slug: 'vocab-master',
    name: 'Ajwords',
    description: '50 palabras aprendidas',
    icon: '📝',
    level: 'intermediate',
  },
]

async function main() {
  await db.insert(languages).values(LANGUAGES).onConflictDoNothing({ target: languages.slug })
  await db.insert(skills).values(SKILLS).onConflictDoNothing({ target: skills.slug })
  console.log(`Seed OK: ${LANGUAGES.length} languages, ${SKILLS.length} skills`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
