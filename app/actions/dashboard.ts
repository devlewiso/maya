'use server'

import { and, desc, eq, sql } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import {
  languages,
  lessonProgress,
  lessons,
  projects,
  projectTasks,
  skills,
  streaks,
  userSkills,
  userXpLog,
} from '@/lib/db/schema'
import { requireUser } from '@/lib/session'
import { codigoConstancia, fechaLarga, nombreRuta } from '@/lib/constancia'

/* ------------------------------------------------------------------ */
/* Helpers internos                                                     */
/* ------------------------------------------------------------------ */

/** Reproduce la lógica de racha del cliente antiguo (updateStreak). */
async function bumpStreak(userId: string) {
  const today = new Date().toISOString().split('T')[0]
  const [streak] = await db
    .select()
    .from(streaks)
    .where(eq(streaks.userId, userId))

  if (!streak) return

  const last = streak.lastActivity
    ? new Date(streak.lastActivity).toISOString().split('T')[0]
    : null
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  const newDays =
    last === yesterday
      ? (streak.currentDays ?? 0) + 1
      : last === today
        ? (streak.currentDays ?? 0)
        : 1

  await db
    .update(streaks)
    .set({
      currentDays: newDays,
      longestDays: Math.max(newDays, streak.longestDays ?? 0),
      lastActivity: new Date(today),
    })
    .where(eq(streaks.userId, userId))
}

async function grantSkillBySlug(userId: string, slug: string) {
  const [skill] = await db.select({ id: skills.id }).from(skills).where(eq(skills.slug, slug))
  if (skill) {
    await db.insert(userSkills).values({ userId, skillId: skill.id }).onConflictDoNothing()
  }
}

/* ------------------------------------------------------------------ */
/* Shell del dashboard (layout + StreakReminder)                        */
/* ------------------------------------------------------------------ */

export async function getShellStats() {
  const user = await requireUser()

  const [[xpRow], [streak]] = await Promise.all([
    db
      .select({ total: sql<number>`coalesce(sum(${userXpLog.xp}), 0)` })
      .from(userXpLog)
      .where(eq(userXpLog.userId, user.id)),
    db.select().from(streaks).where(eq(streaks.userId, user.id)),
  ])

  return {
    displayName: user.name,
    email: user.email,
    totalXp: Number(xpRow?.total ?? 0),
    currentDays: streak?.currentDays ?? 0,
  }
}

export async function getStreakStatus() {
  const user = await requireUser()
  const [streak] = await db.select().from(streaks).where(eq(streaks.userId, user.id))
  if (!streak) return null
  return {
    currentDays: streak.currentDays ?? 0,
    lastActivity: streak.lastActivity ? streak.lastActivity.toISOString() : null,
  }
}

/* ------------------------------------------------------------------ */
/* Lista de proyectos + creación                                        */
/* ------------------------------------------------------------------ */

export async function getProjectsPageData() {
  const user = await requireUser()

  const [projectRows, langRows] = await Promise.all([
    db.query.projects.findMany({
      where: eq(projects.userId, user.id),
      orderBy: [desc(projects.createdAt)],
      with: { language: { columns: { name: true, slug: true } } },
    }),
    db.select().from(languages).where(eq(languages.isActive, true)).orderBy(languages.name),
  ])

  return { projects: projectRows, languages: langRows }
}

type CreateProjectInput = {
  title: string
  description?: string | null
  language_id?: string | null
  type: string
}

export async function createProject(form: CreateProjectInput) {
  const user = await requireUser()

  const languageId = form.language_id ? parseInt(form.language_id, 10) : null

  const [project] = await db
    .insert(projects)
    .values({
      userId: user.id,
      title: form.title,
      description: form.description || null,
      languageId,
      type: form.type,
    })
    .returning()

  // Generar tareas automáticas según el tipo (comportamiento portado 1:1).
  if (languageId) {
    const levelFilter =
      form.type === 'ruta_basica'
        ? eq(lessons.level, 'principiante')
        : form.type === 'vocabulario_express'
          ? eq(lessons.level, 'principiante')
          : undefined

    let lessonRows = await db
      .select()
      .from(lessons)
      .where(
        levelFilter
          ? and(eq(lessons.languageId, languageId), levelFilter)
          : eq(lessons.languageId, languageId),
      )
      .orderBy(lessons.orderIndex)

    if (form.type === 'vocabulario_express') lessonRows = lessonRows.slice(0, 3)

    if (lessonRows.length > 0) {
      await db.insert(projectTasks).values(
        lessonRows.map((lesson, idx) => ({
          projectId: project.id,
          lessonId: lesson.id,
          title: lesson.title,
          description: lesson.description,
          orderIndex: idx + 1,
          xpReward: 10,
        })),
      )
    }
  }

  // Skill "Ajtikonel" si es el primer proyecto del usuario.
  const [{ count }] = await db
    .select({ count: sql<number>`count(*)` })
    .from(projects)
    .where(eq(projects.userId, user.id))
  if (Number(count) === 1) {
    await grantSkillBySlug(user.id, 'first-project')
  }

  const language = languageId
    ? (await db.select({ name: languages.name, slug: languages.slug }).from(languages).where(eq(languages.id, languageId)))[0] ?? null
    : null

  revalidatePath('/dashboard/proyectos')
  revalidatePath('/dashboard')
  return { ...project, language }
}

/* ------------------------------------------------------------------ */
/* Detalle de proyecto + progreso de lección                            */
/* ------------------------------------------------------------------ */

export async function getProjectDetail(projectId: number) {
  const user = await requireUser()

  const project = await db.query.projects.findFirst({
    where: and(eq(projects.id, projectId), eq(projects.userId, user.id)),
    with: { language: { columns: { name: true, slug: true } } },
  })
  if (!project) throw new Error('NOT_FOUND')

  const tasks = await db.query.projectTasks.findMany({
    where: eq(projectTasks.projectId, projectId),
    orderBy: [projectTasks.orderIndex],
    with: {
      lesson: {
        columns: { title: true, level: true, description: true, orderIndex: true },
      },
    },
  })

  // Forma compatible con el componente cliente (claves snake_case + `languages`/`lessons`).
  return {
    project: {
      id: project.id,
      title: project.title,
      description: project.description,
      status: project.status,
      language_id: project.languageId,
      languages: project.language
        ? { name: project.language.name, slug: project.language.slug }
        : null,
    },
    tasks: tasks.map((t) => ({
      id: t.id,
      title: t.title,
      description: t.description,
      order_index: t.orderIndex,
      xp_reward: t.xpReward,
      completed: t.completed,
      lesson_id: t.lessonId,
      lessons: t.lesson
        ? {
            title: t.lesson.title,
            level: t.lesson.level,
            description: t.lesson.description,
            order_index: t.lesson.orderIndex,
          }
        : null,
    })),
  }
}

type SaveProgressInput = {
  lessonId: number
  progressPercent: number
  timeSpentSeconds: number
  sectionsViewed: string[]
  completed: boolean
}

export async function saveLessonProgress(input: SaveProgressInput) {
  const user = await requireUser()

  await db
    .insert(lessonProgress)
    .values({
      userId: user.id,
      lessonId: input.lessonId,
      progressPercent: input.progressPercent,
      timeSpentSeconds: input.timeSpentSeconds,
      sectionsViewed: input.sectionsViewed,
      lastViewedAt: new Date(),
      completed: input.completed,
    })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonId],
      set: {
        progressPercent: input.progressPercent,
        timeSpentSeconds: input.timeSpentSeconds,
        sectionsViewed: input.sectionsViewed,
        lastViewedAt: new Date(),
        completed: input.completed,
      },
    })

  if (input.progressPercent > 50) {
    await bumpStreak(user.id)
  }
}

type CompleteTaskInput = {
  taskId: number
  lessonId: number | null
  xpReward: number
  projectId: number
}

export async function completeTask(input: CompleteTaskInput) {
  const user = await requireUser()

  // Verificar propiedad del proyecto (sustituto de RLS).
  const project = await db.query.projects.findFirst({
    where: and(eq(projects.id, input.projectId), eq(projects.userId, user.id)),
  })
  if (!project) throw new Error('NOT_FOUND')

  await db
    .update(projectTasks)
    .set({ completed: true, completedAt: new Date() })
    .where(eq(projectTasks.id, input.taskId))

  if (input.lessonId) {
    await db
      .insert(lessonProgress)
      .values({
        userId: user.id,
        lessonId: input.lessonId,
        completed: true,
        completedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: [lessonProgress.userId, lessonProgress.lessonId],
        set: { completed: true, completedAt: new Date() },
      })
  }

  await db.insert(userXpLog).values({
    userId: user.id,
    xp: input.xpReward,
    reason: 'task_complete',
    refId: String(input.taskId),
  })

  await bumpStreak(user.id)
  await grantSkillBySlug(user.id, 'first-lesson')

  // ¿Se completó el proyecto entero?
  const tasks = await db
    .select({ completed: projectTasks.completed })
    .from(projectTasks)
    .where(eq(projectTasks.projectId, input.projectId))

  let newSkill: { id: number; name: string; icon: string | null } | null = null
  const allDone = tasks.length > 0 && tasks.every((t) => t.completed)

  if (allDone) {
    await db
      .update(projects)
      .set({ status: 'completed', completedAt: new Date() })
      .where(eq(projects.id, input.projectId))

    await db.insert(userXpLog).values({
      userId: user.id,
      xp: 50,
      reason: 'project_complete',
      refId: String(input.projectId),
    })

    if (project.languageId) {
      const [levelSkill] = await db
        .select({ id: skills.id, name: skills.name, icon: skills.icon })
        .from(skills)
        .where(and(eq(skills.languageId, project.languageId), eq(skills.level, 'principiante')))
      if (levelSkill) {
        await db
          .insert(userSkills)
          .values({ userId: user.id, skillId: levelSkill.id })
          .onConflictDoNothing()
        newSkill = levelSkill
      }
    }
  }

  revalidatePath(`/dashboard/proyectos/${input.projectId}`)
  revalidatePath('/dashboard')
  return { projectCompleted: allDone, newSkill }
}

/* ------------------------------------------------------------------ */
/* Datos del dashboard principal                                        */
/* ------------------------------------------------------------------ */

export async function getDashboardData() {
  const user = await requireUser()

  const [projectRows, earnedSkillRows, allSkills, completedRows, [streak]] =
    await Promise.all([
      db
        .select()
        .from(projects)
        .where(eq(projects.userId, user.id))
        .orderBy(desc(projects.createdAt))
        .limit(3),
      db
        .select({ skillId: userSkills.skillId, earnedAt: userSkills.earnedAt })
        .from(userSkills)
        .where(eq(userSkills.userId, user.id)),
      db.select().from(skills),
      db
        .select({ lessonId: lessonProgress.lessonId })
        .from(lessonProgress)
        .where(and(eq(lessonProgress.userId, user.id), eq(lessonProgress.completed, true))),
      db.select().from(streaks).where(eq(streaks.userId, user.id)),
    ])

  const earnedIds = new Set(earnedSkillRows.map((s) => s.skillId))
  const earnedSkills = allSkills.filter((s) => earnedIds.has(s.id))

  return {
    projects: projectRows,
    earnedSkills,
    completedCount: completedRows.length,
    currentDays: streak?.currentDays ?? 0,
  }
}

/** Constancias de logro del usuario: una por cada ruta (proyecto) completada. */
export async function getConstancias() {
  const user = await requireUser()
  const rows = await db.query.projects.findMany({
    where: and(eq(projects.userId, user.id), eq(projects.status, 'completed')),
    with: { language: { columns: { name: true } } },
    orderBy: desc(projects.completedAt),
  })
  return rows
    .filter((p) => p.completedAt)
    .map((p) => ({
      id: p.id,
      titulo: p.title,
      idioma: p.language?.name ?? 'maya',
      ruta: nombreRuta(p.type),
      fecha: fechaLarga(p.completedAt!),
      codigo: codigoConstancia(p.id, user.id, p.completedAt!),
    }))
}
