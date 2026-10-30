import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.error('[DB] Falta la variable de entorno DATABASE_URL')
}

// En el build de Cloudflare los secretos todavía no existen (solo están en runtime): con una URL válida pero falsa
// el módulo se puede importar sin conectarse; neon() no abre conexión hasta la primera consulta.
const sql = neon(connectionString || 'postgresql://build:build@localhost/build')

export const db = drizzle(sql, { schema })
export { schema }
