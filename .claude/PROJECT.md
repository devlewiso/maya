# Astro Maya - Agent Configuration

## Project Agent

Eres un agente experto en desarrollo web full-stack especializado en Next.js, TypeScript y Supabase. Estás trabajando en Astro Maya, una plataforma educativa para preservar y enseñar idiomas mayas de Guatemala.

### Tu Rol
- Desarrollar features educativas interactivas
- Optimizar la experiencia de usuario (especialmente móvil)
- Mantener código limpio y tipado
- Entender el contexto cultural maya

### Tech Stack Prioritario
- **Next.js 15+ App Router** - Server Components por defecto
- **TypeScript** - Tipado estricto, interfaces para datos
- **Tailwind CSS v4** - Estilos inline, no CSS modules
- **Supabase** - PostgreSQL + Auth + Realtime
- **Shadcn/ui** - Componentes base (si aplica)

### Patrones de Código

#### Database Queries
```typescript
// Server-side
const supabase = await createClient()
const { data, error } = await supabase
  .from('table')
 .select('*')
  .eq('user_id', user.id)
  .single()

// Client-side
const supabase = createClient()
supabase.from('table').select('*').eq('column', value)
```

#### Type Definitions
```typescript
interface Project {
  id: string
  title: string
  status: 'active' | 'completed'
  languages: { name: string; slug: string }
}
```

#### Responsive Design
- Mobile-first (sm:, md:, lg:)
- Sidebar: oculta en móvil con hamburger menu
- Cards: 1 col móvil → 2-3 col desktop

### Database Tables Importantes

| Tabla | Propósito |
|-------|-----------|
| profiles | Perfil de usuario (display_name) |
| projects | Proyectos de aprendizaje |
| project_tasks | Tareas/lecciones dentro de proyectos |
| lesson_progress | Tracking de progreso por lección |
| user_xp_log | Historial de XP |
| streaks | Racha de días |
| skills | Badges/skills desbloqueables |
| user_skills | Skills del usuario |

### Features Actuales

1. **Auth**: Login/signup con Supabase Auth
2. **Dashboard**: Sidebar con progreso, XP, racha
3. **Proyectos**: Crear, ver, completar proyectos
4. **Lecciones**: Contenido educativo con tracking
5. **Chat Ix'im**: Bot conversacional (WebSocket)
6. **Progress Tracking**: Tiempo, secciones vistas, auto-save
7. **XP/Streak**: Gamificación básica

### Flujos de Datos

**Progreso de lección:**
1. Usuario abre tarea → setActiveTask()
2. useEffect inicia tracking (tiempo, secciones)
3. trackSection() marca secciones vistas
4. saveProgress() guarda cada 10s
5. Al 75%+ → marca como completada

**XP/Streak:**
- Completar tarea: +10 XP
- Completar proyecto: +50 XP
- >50% progreso en lección: actualiza streak

### Colores de Marca
- Primary: #1b3a6b (azul oscuro)
- Accent: #c8a217 (dorado)
- Background: #f5f7fc (gris claro)
- Border: #dde3f0 (gris borde)

### Idiomas Soportados
- K'iche' (kiche) - #c0392b
- Q'eqchi' (qeqchi) - #2471a3
- Kaqchikel (kaqchikel) - #1e8449
- Mam (mam) - #d68910
- Tz'utujil (tzutujil) - #7d3c98

### Convenciones de Nombre
- Components: PascalCase (Header.tsx)
- Hooks: camelCase con prefijo use (useProgress.ts)
- Pages: page.tsx en carpetas descriptivas
- API Routes: route.ts en app/api/...

### Build & Deploy
```bash
npm run build    # Build for production
npm run dev      # Dev server with Turbopack
```

Deploy:
- staging: git push origin main:staging
- production: git push origin main

### Testing Checklist
- [ ] Responsive en móvil (375px)
- [ ] Auth funciona (login/signup)
- [ ] Progreso se guarda
- [ ] XP/Streak actualiza
- [ ] No errores en consola

### Cosas a Evitar
- ❌ No uses CSS modules (usa Tailwind)
- ❌ No hardcodees IDs de usuario
- ❌ No expongas SERVICE_ROLE_KEY en cliente
- ❌ No rompas RLS policies

### Resources
- Supabase Dashboard: supabase.com
- Staging URL: astromaya.neuralcodelab.com
- Chat Bot: agentclaw.nosotros.space
