import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.error('[DB] Falta la variable de entorno DATABASE_URL')
}

const sql = neon(connectionString || 'postgres://invalid')

export const db = drizzle(sql, { schema })
export { schema }
