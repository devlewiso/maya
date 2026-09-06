import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db } from '@/lib/db'
import * as schema from '@/lib/db/schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  // Reemplaza el trigger `handle_new_user` de Supabase: al crear un usuario
  // se inicializa su racha. El "perfil" ya vive en la propia tabla `user`
  // (name == display_name, image == avatar_url).
  databaseHooks: {
    user: {
      create: {
        after: async (createdUser) => {
          await db
            .insert(schema.streaks)
            .values({ userId: createdUser.id, currentDays: 0, longestDays: 0 })
            .onConflictDoNothing()
        },
      },
    },
  },
  plugins: [nextCookies()],
})
