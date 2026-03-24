# Phase 01: Database & Infrastructure

**Goal:** Set up project scaffold with shadcn/ui, create Supabase tables, RLS policies, and seed data.

**Duration:** 1-2 sessions

---

## Session 1 — Part A: Project Scaffold

**Prompt CC:**
```
Start Phase 01. Read CLAUDE.md and PROJECT.md.
Set up the Next.js project with TypeScript strict mode, Tailwind, shadcn/ui, and Supabase client.
Install shadcn/ui and add these foundation components: button, card, input, label, skeleton, badge, avatar, separator, dialog, sheet, toast.
Create the folder structure and design system in globals.css.
Don't build any page UI yet. Commit when done.
```

**What CC should create:**
- next.config.js
- tsconfig.json (strict: true)
- tailwind.config.ts
- globals.css with ALL CSS variables from PROJECT.md design section
- Google Fonts imports for display + body fonts from PROJECT.md
- shadcn/ui initialised (`npx shadcn@latest init`) + foundation components installed
- src/lib/supabase/client.ts (browser client)
- src/lib/supabase/server.ts (server client)
- src/lib/utils.ts (cn() helper — created by shadcn init)
- src/components/AnimatedSection.tsx (Framer Motion scroll wrapper)
- src/types/ (shared type definitions)
- vercel.json (SPA rewrites)
- .env.example (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

**Commit:** `chore(init): scaffold project with Next.js, TypeScript, Tailwind, shadcn/ui, Supabase`

---

## Session 1 — Part B: Database Schema

**Prompt CC:**
```
Continue Phase 01. Create all Supabase tables from PROJECT.md.
Write the migration SQL. Add RLS policies for every table.
Create seed data for development. Commit when done.
```

**What CC should create:**
- supabase/migrations/001_initial_schema.sql
- supabase/seed.sql
- RLS policies for every table

**Commit:** `feat(db): add initial schema, RLS policies, and seed data`

---

## Manifest

After Phase 01 is complete, CC writes `manifests/db-manifest.md`:

```markdown
# Database Manifest
Tables: [list]
RLS: [all tables covered? yes/no]
Seed data: [yes/no]
Types generated: [yes/no]
Migration file: [path]
shadcn components installed: [list]
Design system in globals.css: [yes/no]
```

## Definition of Done
- [ ] All tables from PROJECT.md created
- [ ] RLS on every table
- [ ] Seed data loads without errors
- [ ] TypeScript types generated from schema
- [ ] shadcn/ui initialised with foundation components
- [ ] globals.css has all CSS variables from PROJECT.md
- [ ] Google Fonts configured
- [ ] `npx tsc --noEmit` passes
- [ ] Manifest written
