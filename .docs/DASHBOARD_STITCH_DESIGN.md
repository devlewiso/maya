# Astro Maya - Dashboard Redesign para Google Stitch

## 🎨 Concepto de Diseño

**Tema**: "Cosmovisión Maya Moderna" - Una interfaz que combina elementos tradicionales mayas con diseño UI moderno.

**Paleta de colores**:
- Primario: `#1b3a6b` (Azul maya - cielo nocturno)
- Acento: `#c8a217` (Dorado - sol/k'in)
- Fondo: `#f5f7fc` (Blanco humo)
- Bordes: `#dde3f0` (Gris azulado)

---

## 📐 Layout Propuesto

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ◆ Astro Maya    [🔔] [👤 Usuario]                       │   │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HERO SECTION (Bienvenida)                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ¡Buenos días, [Nombre]! ☀️                              │   │
│  │  "El sol k'in ilumina tu camino de aprendizaje"         │   │
│  │                                                          │   │
│  │  [████████████░░░░] 65% - Nivel 3: Practicante          │   │
│  │  🔥 Racha: 7 días                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │  ESTADÍSTICAS RÁPIDAS       │  │  PROGRESO SEMANAL        │ │
│  │  ┌─────┬─────┬─────┐       │  │  ┌──────────────────┐    │ │
│  │  │ 📚  │ 🏆  │ 🔥  │       │  │  │  L M M J V S D   │    │ │
│  │  │ 12  │  3  │  7  │       │  │  │ █ █ ░ █ █ ░ ░    │    │ │
│  │  │lec  │skill│días │       │  │  │                  │    │ │
│  │  └─────┴─────┴─────┘       │  │  └──────────────────┘    │ │
│  └─────────────────────────────┘  └──────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SECCIÓN PRINCIPAL (2 columnas)                                 │
│                                                                 │
│  ┌───────────────────────────────────┐  ┌──────────────────┐   │
│  │ 📁 PROYECTOS ACTIVOS (3)          │  │ ⭐ SKILLS        │   │
│  │                                   │  │                  │   │
│  │ ┌───────────────────────────────┐ │  │ ┌────┬────┬────┐ │   │
│  │ │ ◆ Ruta K'iche' Básico         │ │  │ │ ◈  │ 📚 │ 🔥│ │   │
│  │ │   3/10 tareas • 30%           │ │  │ │Ajt │ Ajc│Wuq│ │   │
│  │ │   [████░░░░░░░░░░]            │ │  │ └────┴────┴────┘ │   │
│  │ └───────────────────────────────┘ │  │ +2 más           │   │
│  │                                   │  │                  │   │
│  │ ┌───────────────────────────────┐ │  │ ┌──────────────┐ │   │
│  │ │ ◆ Inmersión Q'eqchi'          │ │  │ │ 💡 SUGERENCIA│ │   │
│  │ │   1/8 tareas • 12%            │ │  │ │ Completa 3   │ │   │
│  │ │   [██░░░░░░░░░░░░]            │ │  │ │ lecciones    │ │   │
│  │ └───────────────────────────────┘ │  │ │ para ganar   │ │   │
│  │                                   │  │ │ "Estudiante" │ │   │
│  │ [+ Crear nuevo proyecto]          │  │ └──────────────┘ │   │
│  └───────────────────────────────────┘  └──────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🌍 EXPLORAR IDIOMAS                                            │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  K'iche'│ │ Q'eqchi'│ │Kaqchikel│ │  Mam   │ │Tz'utujil│      │
│  │  [███] │ │  [██]  │ │  [█]   │ │  [░]   │ │  [░]   │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Componentes Detallados

### 1. Hero Section - "Bienvenida Maya"

```tsx
<div className="bg-gradient-to-r from-[#1b3a6b] to-[#2a4d8c] rounded-2xl p-6 text-white">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold">¡Buenos días, Carlos! ☀️</h1>
      <p className="text-sm text-blue-100 mt-1">
        "El sol k'in ilumina tu camino de aprendizaje"
      </p>
    </div>
    <div className="text-right">
      <div className="text-3xl font-bold">🔥 7</div>
      <div className="text-xs text-blue-100">días de racha</div>
    </div>
  </div>
  
  {/* XP Progress */}
  <div className="mt-4">
    <div className="flex justify-between text-xs mb-1">
      <span>Nivel 3: Practicante</span>
      <span>650/1000 XP</span>
    </div>
    <div className="h-2 bg-blue-900 rounded-full overflow-hidden">
      <div className="h-full bg-[#c8a217] rounded-full" style={{ width: '65%' }} />
    </div>
  </div>
</div>
```

---

### 2. Stats Cards - "Tríada del Guerrero"

```tsx
<div className="grid grid-cols-3 gap-4">
  {/* Lecciones */}
  <div className="bg-white rounded-xl border border-[#dde3f0] p-4 hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
      <span className="text-xl">📚</span>
    </div>
    <div className="text-2xl font-bold text-[#1a2035]">12</div>
    <div className="text-xs text-[#6b7a9e]">Lecciones</div>
  </div>
  
  {/* Skills */}
  <div className="bg-white rounded-xl border border-[#dde3f0] p-4 hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
      <span className="text-xl">🏆</span>
    </div>
    <div className="text-2xl font-bold text-[#1a2035]">3</div>
    <div className="text-xs text-[#6b7a9e]">Skills</div>
  </div>
  
  {/* Racha */}
  <div className="bg-white rounded-xl border border-[#dde3f0] p-4 hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
      <span className="text-xl">🔥</span>
    </div>
    <div className="text-2xl font-bold text-[#1a2035]">7</div>
    <div className="text-xs text-[#6b7a9e]">Días de racha</div>
  </div>
</div>
```

---

### 3. Proyectos Activos - "Tus Caminos"

```tsx
<div className="bg-white rounded-xl border border-[#dde3f0] p-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className="font-bold text-[#1a2035] flex items-center gap-2">
      <span className="text-lg">📁</span>
      Proyectos Activos
    </h2>
    <Link href="/dashboard/proyectos" className="text-xs text-[#1b3a6b] font-semibold">
      Ver todos →
    </Link>
  </div>
  
  <div className="space-y-3">
    {projects.map(project => (
      <Link 
        key={project.id}
        href={`/dashboard/proyectos/${project.id}`}
        className="block p-4 rounded-lg border border-[#dde3f0] hover:border-[#1b3a6b] hover:bg-[#f5f7fc] transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[#c8a217]">◆</span>
              <span className="font-semibold text-sm">{project.title}</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-xs text-[#6b7a9e]">
                {project.completedTasks}/{project.totalTasks} tareas
              </span>
              <div className="flex-1 h-1.5 bg-[#f5f7fc] rounded-full">
                <div 
                  className="h-full bg-[#1b3a6b] rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#1b3a6b]">
                {project.progress}%
              </span>
            </div>
          </div>
          <span className="text-[#1b3a6b] text-sm font-medium">Ver →</span>
        </div>
      </Link>
    ))}
  </div>
  
  <button className="w-full mt-4 py-2 border-2 border-dashed border-[#dde3f0] rounded-lg text-sm text-[#6b7a9e] hover:border-[#1b3a6b] hover:text-[#1b3a6b] transition">
    + Crear nuevo proyecto
  </button>
</div>
```

---

### 4. Skills - "Tus Logros"

```tsx
<div className="bg-white rounded-xl border border-[#dde3f0] p-6">
  <h2 className="font-bold text-[#1a2035] flex items-center gap-2 mb-4">
    <span className="text-lg">⭐</span>
    Skills Ganados
  </h2>
  
  <div className="grid grid-cols-3 gap-2">
    {skills.map(skill => (
      <div 
        key={skill.id}
        className="bg-[#f5f7fc] rounded-lg p-3 text-center hover:bg-[#c8a217]/10 hover:scale-105 transition-all cursor-pointer"
        title={skill.description}
      >
        <div className="text-2xl mb-1">{skill.icon}</div>
        <div className="text-[10px] font-semibold text-[#1a2035]">
          {skill.name}
        </div>
      </div>
    ))}
  </div>
  
  {/* Próximo skill */}
  <div className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
    <div className="flex items-center gap-2">
      <span className="text-xl">💡</span>
      <div>
        <div className="text-xs font-semibold text-[#1a2035]">
          Próximo: "Estudiante"
        </div>
        <div className="text-[10px] text-[#6b7a9e]">
          Completa 3 lecciones más
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 5. Idiomas - "Explora los 5 Idiomas"

```tsx
<div className="mt-8">
  <h2 className="font-bold text-[#1a2035] mb-4 flex items-center gap-2">
    <span className="text-lg">🌍</span>
    Explorar Idiomas Mayas
  </h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
    {[
      { name: "K'iche'", slug: 'kiche', color: '#c0392b', progress: 45 },
      { name: "Q'eqchi'", slug: 'qeqchi', color: '#2471a3', progress: 20 },
      { name: 'Kaqchikel', slug: 'kaqchikel', color: '#1e8449', progress: 0 },
      { name: 'Mam', slug: 'mam', color: '#d68910', progress: 0 },
      { name: "Tz'utujil", slug: 'tzutujil', color: '#7d3c98', progress: 0 },
    ].map(lang => (
      <Link
        key={lang.slug}
        href={`/dashboard/proyectos?lang=${lang.slug}`}
        className="group bg-white rounded-xl border border-[#dde3f0] p-4 hover:shadow-lg hover:border-transparent transition-all"
      >
        <div className="relative">
          {/* Barra de progreso decorativa */}
          <div 
            className="h-1 rounded-full mb-3"
            style={{ backgroundColor: lang.color }}
          />
          
          {/* Círculo de progreso */}
          {lang.progress > 0 && (
            <div className="absolute top-0 right-0 w-6 h-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="12" cy="12" r="10"
                  stroke="#f5f7fc" strokeWidth="2" fill="none"
                />
                <circle
                  cx="12" cy="12" r="10"
                  stroke={lang.color} strokeWidth="2" fill="none"
                  strokeDasharray={`${lang.progress * 0.628} 62.8`}
                />
              </svg>
            </div>
          )}
          
          <p className="text-xs font-bold text-[#1a2035] group-hover:text-[#1b3a6b]">
            {lang.name}
          </p>
          
          {lang.progress > 0 && (
            <p className="text-[10px] text-[#6b7a9e] mt-1">
              {lang.progress}% completo
            </p>
          )}
        </div>
      </Link>
    ))}
  </div>
</div>
```

---

## 🎨 Elementos Decorativos Mayas

### Símbolos para usar:

```tsx
{/* K'in (Sol) - Para progreso/racha */}
<span className="text-amber-500">☀️</span>

{/* Estrella (Citab) - Para skills */}
<span className="text-yellow-500">⭐</span>

/* Luna (Po') - Para logros nocturnos */
<span className="text-blue-300">🌙</span>

/* Maíz (Imix) - Para proyectos */}
<span className="text-green-600">🌽</span>
```

### Patrones decorativos:

```tsx
{/* Borde decorativo maya */}
<div className="border-t-4 border-[#c8a217]" 
     style={{
       borderImage: 'repeating-linear-gradient(90deg, #c8a217 0px, #c8a217 10px, transparent 10px, transparent 20px) 4'
     }} 
/>
```

---

## 📱 Responsive Breakpoints

```tsx
// Mobile (< 640px)
- 1 columna para todo
- Stats en fila horizontal (3 items)
- Hero section compacta

// Tablet (640px - 1024px)
- 2 columnas para proyectos/skills
- Grid de 3 para stats
- Grid de 3 para idiomas

// Desktop (> 1024px)
- 2 columnas (2/3 + 1/3)
- Grid de 5 para idiomas
- Sidebar opcional para navegación
```

---

## 🚀 Animaciones Sugeridas

```tsx
// Fade in al cargar
<div className="animate-fade-in">...</div>

// Pulse para notificaciones
<div className="animate-pulse">🔔</div>

// Slide up para tarjetas
<div className="animate-slide-up">...</div>

// Hover scale para skills
<div className="hover:scale-105 transition-transform">...</div>
```

---

## 📊 Datos de Ejemplo para Stitch

```typescript
const dashboardData = {
  user: {
    name: "Carlos",
    level: 3,
    levelName: "Practicante",
    xp: 650,
    nextLevelXp: 1000,
    streak: 7,
  },
  stats: {
    lessonsCompleted: 12,
    skillsEarned: 3,
    projectsActive: 2,
  },
  projects: [
    {
      id: 1,
      title: "Ruta K'iche' Básico",
      completedTasks: 3,
      totalTasks: 10,
      progress: 30,
      language: "kiche",
    },
    {
      id: 2,
      title: "Inmersión Q'eqchi'",
      completedTasks: 1,
      totalTasks: 8,
      progress: 12,
      language: "qeqchi",
    },
  ],
  skills: [
    { id: 1, name: "Ajtikonel", icon: "◈", description: "Primer proyecto" },
    { id: 2, name: "Ajch'abal", icon: "📚", description: "Primera lección" },
    { id: 3, name: "Wuqqub' Q'ij", icon: "🔥", description: "7 días de racha" },
  ],
  languages: [
    { name: "K'iche'", slug: "kiche", color: "#c0392b", progress: 45 },
    { name: "Q'eqchi'", slug: "qeqchi", color: "#2471a3", progress: 20 },
    { name: "Kaqchikel", slug: "kaqchikel", color: "#1e8449", progress: 0 },
    { name: "Mam", slug: "mam", color: "#d68910", progress: 0 },
    { name: "Tz'utujil", slug: "tzutujil", color: "#7d3c98", progress: 0 },
  ],
}
```

---

## 📝 Notas para Stitch

1. **Usá el prompt**: "Dashboard educativo con temática maya moderna, colores azul y dorado, interfaz limpia y minimalista"

2. **Elementos clave**:
   - Hero section con gradiente azul
   - Cards con bordes redondeados
   - Iconos emojis para cada sección
   - Barras de progreso visibles
   - Grid responsive

3. **Inspiración**: Duolingo + Khan Academy + elementos mayas sutiles

4. **No incluir**: ChatWidget, anuncios, elementos distractores

---

**Estado**: 📐 Lista para visualizar en Google Stitch
**Última actualización**: 2025-06-25
