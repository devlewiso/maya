# Astro Maya - Claude Context

## Project Overview
Astro Maya es una plataforma educativa para aprender idiomas mayas de Guatemala: K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil.

## Tech Stack
- **Framework**: Next.js 15.5+ con App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Neon (Postgres serverless) vía driver `@neondatabase/serverless`
- **ORM**: Drizzle (`lib/db/schema.ts`, migraciones en `drizzle/`)
- **Auth**: Better Auth (email+password y Google) — `lib/auth.ts` / `lib/auth-client.ts`
- **Package Manager**: npm

> Migrado desde Supabase (Auth + Postgres) en 2026-09. Ya no hay RLS: la
> autorización se aplica en cada Server Action / Server Component filtrando por
> `session.user.id` (helper `requireUser()` en `lib/session.ts`).

## Project Structure

```
/home/devlewiso/Downloads/github/maya/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout con metadata
│   ├── globals.css               # Global styles
│   ├── dashboard/                # Protected dashboard routes
│   │   ├── page.tsx              # Main dashboard
│   │   ├── layout.tsx            # Dashboard layout (sidebar)
│   │   └── proyectos/            # Projects management
│   │       ├── page.tsx          # Projects list
│   │       └── [id]/page.tsx     # Project detail with lessons
│   ├── login/page.tsx            # Login page
│   ├── signup/page.tsx           # Signup page
│   ├── lecciones/page.tsx        # Public lessons
│   └── [idioma]Leccion/          # Language-specific lessons
│       ├── page.tsx              # Lesson viewer
│       └── layout.tsx
├── app/api/                      # API Routes
│   └── auth/signout/route.ts
├── app/components/               # Shared components
│   ├── Header.tsx
│   ├── ChatWidget.tsx            # Ix'im AI assistant
│   ├── CookieBanner.tsx
│   └── ScrollToTop.tsx
├── lib/                          # Utilities
│   └── supabase/                 # Supabase clients
│       ├── client.ts             # Browser client
│       └── server.ts             # Server client
├── supabase/                     # Supabase config
│   └── config.toml
└── public/                       # Static assets

```

## Database Schema (Neon / Drizzle — `lib/db/schema.ts`)

### Tables
- **user / session / account / verification**: tablas de Better Auth. `user.name` es el
  display_name y `user.image` el avatar (antes tabla `profiles`, ya eliminada).
- **projects**: id, user_id (text), title, description, language_id, type, status, completed_at, created_at
- **project_tasks**: id, project_id, lesson_id, title, description, order_index, xp_reward, completed, completed_at
- **lesson_progress**: user_id, lesson_id, progress_percent, time_spent_seconds, sections_viewed, completed, completed_at, last_viewed_at
- **user_xp_log**: id, user_id, xp, reason, ref_id, created_at
- **streaks**: user_id, current_days, longest_days, last_activity
- **skills**: id, slug, name, description, icon, language_id, level
- **user_skills**: user_id, skill_id, earned_at
- **languages**: id, name, slug, is_active
- **lessons**: id, language_id, title, level, description, order_index, content_json

### Key Relationships
- projects → languages (language_id)
- project_tasks → projects (project_id), lessons (lesson_id)
- lesson_progress / user_xp_log / streaks / user_skills / projects → user (user_id, text, ON DELETE CASCADE)
- user_skills → skills (skill_id)

## Authentication Flow
1. Login/signup vía Better Auth: `authClient` (`lib/auth-client.ts`) en componentes
   cliente — `signIn.email`, `signUp.email`, `signIn.social({provider:'google'})`.
2. Handler en `app/api/auth/[...all]/route.ts`. Callback de Google: `/api/auth/callback/google`.
3. `middleware.ts` hace un chequeo optimista de cookie (`getSessionCookie`) para
   `/dashboard/*`, `/login`, `/signup`.
4. En el servidor: `getSession()` / `requireUser()` desde `lib/session.ts`.
5. El "perfil" vive en la tabla `user` de Better Auth: `user.name` == display_name,
   `user.image` == avatar_url. Al crear un usuario, un `databaseHook` inicializa su `streaks`.
6. Todo acceso a datos del dashboard pasa por Server Actions en `app/actions/dashboard.ts`.

## Progress Tracking System
- Auto-tracks time spent in lessons
- Tracks sections viewed (vocab, phrases, grammar, cultural)
- Saves progress every 10 seconds
- Updates streak on >50% progress
- Completes lesson automatically at ≥75% progress

## XP System
- Task completion: +10 XP
- Project completion: +50 XP
- Skills unlock based on XP and achievements

## Chat Bot (Ix'im)
- WebSocket: wss://agentclaw.nosotros.space
- HTTP Fallback: https://agentclaw.nosotros.space/chat
- Provides language learning assistance

## Code Conventions
- TypeScript with strict types
- Tailwind for styling (custom colors: #1b3a6b, #c8a217, #f5f7fc, #dde3f0)
- Server components by default, 'use client' for interactivity
- Queries con Drizzle; autorización manual por `user.id` en cada Server Action

## Environment Variables
```
DATABASE_URL=            # Neon pooled (runtime app)
DATABASE_URL_UNPOOLED=   # Neon directo (migraciones drizzle-kit)
BETTER_AUTH_SECRET=      # openssl rand -base64 32
BETTER_AUTH_URL=         # http://localhost:3001 en dev, dominio en prod
NEXT_PUBLIC_BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
Neon está linkeado con `neon link` (`.neon/`, proyecto `little-cake-70155363`).
`neon env pull` refresca las DATABASE_URL en `.env.local`.

## DB / Migraciones
- Editar `lib/db/schema.ts` → `npm run db:generate` → `npm run db:migrate` (aplica a Neon).
- `npm run db:seed` reinserta languages + skills.
- `npm run db:studio` abre Drizzle Studio.

## Common Tasks

### Add a new language lesson
1. Add content to app/content/[language]Leccion.js
2. Ensure language exists in languages table
3. Create lessons in database with proper order_index

### Add a new skill
1. Insert into skills table
2. Add logic to award skill in project detail page
3. Icon should be an emoji

### Modify progress tracking
- Edit app/dashboard/proyectos/[id]/page.tsx
- Track sections via ref callbacks
- Save via saveProgress() function

## Deployment
- Platform: Netlify/Vercel
- Branch main → Production
- Branch staging → Staging environment
