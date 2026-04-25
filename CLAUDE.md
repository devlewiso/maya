# Astro Maya - Claude Context

## Project Overview
Astro Maya es una plataforma educativa para aprender idiomas mayas de Guatemala: K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil.

## Tech Stack
- **Framework**: Next.js 15.5+ con App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Package Manager**: npm/pnpm

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

## Database Schema (Supabase)

### Tables
- **profiles**: user_id, display_name, avatar_url
- **projects**: id, user_id, title, description, language_id, type, status, created_at
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
- lesson_progress → profiles (user_id), lessons (lesson_id)
- user_skills → profiles (user_id), skills (skill_id)

## Authentication Flow
1. User logs in via Supabase Auth
2. Middleware checks auth for /dashboard/* routes
3. Client uses createClient() from @/lib/supabase/client
4. Server uses createClient() from @/lib/supabase/server

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
- Supabase queries with RLS (Row Level Security)

## Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

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
