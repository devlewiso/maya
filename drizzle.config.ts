import { defineConfig } from 'drizzle-kit'

// Carga .env.local (drizzle-kit solo lee .env por defecto). Node >= 20.12.
try {
  process.loadEnvFile('.env.local')
} catch {
  /* en CI las vars ya vienen del entorno */
}

// Migraciones y push usan la conexión DIRECTA (sin -pooler).
const url =
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.DATABASE_URL ||
  ''

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: { url },
  strict: true,
  verbose: true,
})
