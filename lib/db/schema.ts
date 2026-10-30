import { relations } from 'drizzle-orm'
import {
  pgTable,
  text,
  integer,
  serial,
  boolean,
  timestamp,
  jsonb,
  primaryKey,
  index,
} from 'drizzle-orm/pg-core'

/* ------------------------------------------------------------------ */
/* Better Auth core tables                                             */
/* Keep these in sync with `npx @better-auth/cli generate`.            */
/* `user.name`  == antiguo profiles.display_name                        */
/* `user.image` == antiguo profiles.avatar_url                          */
/* ------------------------------------------------------------------ */

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
})

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: timestamp('expires_at').notNull(),
    token: text('token').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
  },
  (t) => [index('session_userId_idx').on(t.userId)],
)

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index('account_userId_idx').on(t.userId)],
)

export const verification = pgTable(
  'verification',
  {
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index('verification_identifier_idx').on(t.identifier)],
)

/* ------------------------------------------------------------------ */
/* Tablas de negocio (portadas 1:1 del esquema Supabase)               */
/* user_id: uuid -> text (id de Better Auth)                            */
/* ------------------------------------------------------------------ */

export const languages = pgTable('languages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const lessons = pgTable('lessons', {
  id: serial('id').primaryKey(),
  languageId: integer('language_id').references(() => languages.id),
  title: text('title').notNull(),
  level: text('level').notNull(),
  description: text('description'),
  orderIndex: integer('order_index'),
  contentJson: jsonb('content_json'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  description: text('description'),
  languageId: integer('language_id').references(() => languages.id),
  type: text('type').notNull().default('ruta_basica'),
  status: text('status').default('active'),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const projectTasks = pgTable('project_tasks', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id').references(() => projects.id, {
    onDelete: 'cascade',
  }),
  lessonId: integer('lesson_id').references(() => lessons.id),
  title: text('title').notNull(),
  description: text('description'),
  orderIndex: integer('order_index'),
  xpReward: integer('xp_reward').default(10),
  completed: boolean('completed').default(false),
  completedAt: timestamp('completed_at', { withTimezone: true }),
})

export const lessonProgress = pgTable(
  'lesson_progress',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    lessonId: integer('lesson_id').notNull(),
    progressPercent: integer('progress_percent').default(0),
    timeSpentSeconds: integer('time_spent_seconds').default(0),
    sectionsViewed: text('sections_viewed').array().default([]),
    completed: boolean('completed').default(false),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    lastViewedAt: timestamp('last_viewed_at', { withTimezone: true }),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
)

export const userXpLog = pgTable('user_xp_log', {
  id: serial('id').primaryKey(),
  userId: text('user_id').references(() => user.id, { onDelete: 'cascade' }),
  xp: integer('xp').notNull(),
  reason: text('reason'),
  refId: text('ref_id'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

export const streaks = pgTable('streaks', {
  userId: text('user_id')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade' }),
  currentDays: integer('current_days').default(0),
  longestDays: integer('longest_days').default(0),
  lastActivity: timestamp('last_activity', { withTimezone: true }),
})

export const skills = pgTable('skills', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  icon: text('icon'),
  languageId: integer('language_id').references(() => languages.id),
  level: text('level'),
})

export const userSkills = pgTable(
  'user_skills',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    skillId: integer('skill_id')
      .notNull()
      .references(() => skills.id, { onDelete: 'cascade' }),
    earnedAt: timestamp('earned_at', { withTimezone: true }).defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.skillId] })],
)

/* ------------------------------------------------------------------ */
/* Relations (para db.query con joins)                                 */
/* ------------------------------------------------------------------ */

export const projectsRelations = relations(projects, ({ one, many }) => ({
  language: one(languages, {
    fields: [projects.languageId],
    references: [languages.id],
  }),
  tasks: many(projectTasks),
}))

export const projectTasksRelations = relations(projectTasks, ({ one }) => ({
  project: one(projects, {
    fields: [projectTasks.projectId],
    references: [projects.id],
  }),
  lesson: one(lessons, {
    fields: [projectTasks.lessonId],
    references: [lessons.id],
  }),
}))

export const languagesRelations = relations(languages, ({ many }) => ({
  projects: many(projects),
  lessons: many(lessons),
}))

export const lessonsRelations = relations(lessons, ({ one }) => ({
  language: one(languages, {
    fields: [lessons.languageId],
    references: [languages.id],
  }),
}))
