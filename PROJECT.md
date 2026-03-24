# PROJECT.md — Project Specification

## Project Name
Elto Pets

## Description
Elto Pets is a premium e-commerce website and landing page for pet products (treats, toys, accessories). It provides a beautiful shopping experience for pet owners with product browsing, cart management, secure checkout, and order tracking.

## Tech Stack
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui + CSS variables
- Components: shadcn/ui (install via `npx shadcn@latest init`)
- Database: Supabase (PostgreSQL + Auth + Storage)
- State: React Query (server) + Zustand (client UI)
- Animation: Framer Motion
- Forms: react-hook-form + Zod validation
- Icons: lucide-react
- Deployment: Vercel

## Core Features
1. [Feature 1 — one sentence]
2. [Feature 2 — one sentence]
3. [Feature 3 — one sentence]
4. [Feature 4 — one sentence]
5. [Feature 5 — one sentence]

---

## Design System

### How to generate this section (for new projects)
If the fields below are empty, use the UI/UX Pro Max plugin to generate recommendations:
1. Tell Claude: "Generate a design system for [describe your project]"
2. UI/UX Pro Max auto-activates → searches its database
3. It returns recommended style, colours, fonts, and UX patterns
4. Review the suggestions, pick what you like, fill in the values below
5. These values become the source of truth for the entire project

### Design Direction
- **Style**: [e.g., minimalist, glassmorphism, brutalist, editorial, luxury — pick one]
- **Mood**: [e.g., warm and inviting, sleek and professional, playful and bold]
- **Inspiration**: [link to a reference site or describe the feeling]

### Colours (define as CSS variables in globals.css)
- Primary: [hex] → var(--color-primary)
- Primary hover: [hex] → var(--color-primary-hover)
- Secondary: [hex] → var(--color-secondary)
- Accent: [hex] → var(--color-accent)
- Background: [hex] → var(--color-bg)
- Surface: [hex] → var(--color-surface)
- Text: [hex] → var(--color-text)
- Text muted: [hex] → var(--color-text-muted)
- Error: [hex] → var(--color-error)
- Success: [hex] → var(--color-success)
- Border: [hex] → var(--color-border)

### Fonts
- Display (headings): [font name] → var(--font-display)
  Google Fonts import: [url]
- Body (text): [font name] → var(--font-body)
  Google Fonts import: [url]

### Spacing
- Section padding: [value, e.g., py-20 lg:py-28]
- Card padding: [value, e.g., p-6]
- Component gap: [value, e.g., gap-4]

### Border Radius
- Small (buttons, inputs): [value, e.g., rounded-lg]
- Medium (cards): [value, e.g., rounded-xl]
- Large (modals, sections): [value, e.g., rounded-2xl]

### Animation Approach
- Entrance: [e.g., fade up with stagger, slide in from left]
- Hover: [e.g., subtle lift y: -2, scale 1.02]
- Timing: [e.g., 150ms for hover, 500ms for entrance]
- Always include: prefers-reduced-motion media query

---

## Pages & Routes

| Route | Page | Auth Required | Description |
|-------|------|---------------|-------------|
| / | Home | No | [description] |
| /about | About | No | [description] |
| /auth/login | Login | No | [description] |
| /auth/signup | Signup | No | [description] |
| /dashboard | Dashboard | Yes | [description] |

## Database Tables

### [table_name]
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| [column] | [type] | [notes] |

## API Routes

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | /api/[resource] | No | List items |
| GET | /api/[resource]/[id] | No | Get single item |
| POST | /api/[resource] | Yes | Create item |

## Third-Party Integrations
- [Service 1]: [what for]
- [Service 2]: [what for]

## Notes
[Anything else CC should know about the project]
