---
name: coding-standards
description: "Production coding standards for Next.js + TypeScript + Tailwind + shadcn/ui + Supabase projects."
globs: ["src/**/*.ts", "src/**/*.tsx"]
---

# Coding Standards

## TypeScript
- Strict mode. No `any` — use `unknown` + type narrowing or specific types.
- Use `type` imports: `import type { Product } from '@/types'`
- Nullish coalescing (`??`) over logical OR (`||`).
- Optional chaining (`?.`) — but handle the null case explicitly.

## React / Next.js
- Server components by default. `'use client'` only when hooks or interactivity needed.
- Props interface defined above the component, not inline.
- Destructure props in function signature.
- Every component exports a skeleton.
- Every async component has a loading.tsx sibling.
- Error boundaries via error.tsx.

## shadcn/ui
- Use shadcn components for ALL standard UI elements (Button, Card, Input, Dialog, etc.)
- Import from `@/components/ui/[component]`
- Customise via className prop — don't fork the component unless necessary
- For new shadcn components: `npx shadcn@latest add [component]`

## Tailwind / Styling
- CSS variables for ALL brand colours — never hardcoded hex.
- Use `cn()` utility for conditional classes.
- Responsive: mobile-first. `md:` for tablet, `lg:` for desktop.
- No inline styles. No `style={}`.
- When Frontend Design plugin makes aesthetic suggestions, implement them
  using Tailwind classes and CSS variables — never raw CSS.

## Data Fetching
- Server components: `await supabase.from()` directly.
- Client components: React Query for server data, Zustand for UI state.
- Always handle: loading → skeleton, empty → message + action, error → message + retry.

## Forms
- Always use react-hook-form + Zod schema.
- Zod schema defined BEFORE the component.
- Client + server validation via same schema.
- Honeypot on public forms. `noValidate` on form tag.

## Security
- Never import secrets in 'use client' files.
- Auth check at top of every protected API route.
- Zod validation at top of every API route.

## Git
- Run `/review` (G Stack) before every commit. Fall back to code-reviewer subagent.
- Commit after every completed unit.
- Message: `type(scope): description`
- Never commit with tsc or eslint errors.
