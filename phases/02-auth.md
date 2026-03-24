# Phase 02: Authentication

**Goal:** Complete auth system with Supabase Auth, middleware, login/signup pages, and callback handling.

**Duration:** 3 sessions

---

## Session 1: Middleware & Auth Schemas

**Prompt CC:**
```
Start Phase 02. Read CLAUDE.md, PROJECT.md, and manifests/db-manifest.md.
Create auth middleware, Zod schemas for login/signup, and the auth utility functions.
Use react-hook-form + Zod for form validation.
Don't build any UI pages yet. Commit when done.
```

**What CC should create:**
- src/middleware.ts (protect routes, refresh session)
- src/lib/auth/schemas.ts (Zod: login, signup, forgot-password)
- src/lib/auth/actions.ts (server actions: signIn, signUp, signOut)
- src/types/auth.ts (auth-related types)

---

## Session 2: Auth Pages

**Prompt CC:**
```
Continue Phase 02. Build login and signup pages.
Follow the HTML-First Law: build HTML prototypes first, get approval, then convert to React.
Use shadcn/ui components (Card, Input, Label, Button) for the forms.
Use react-hook-form + Zod for validation.
One page per session if complex.
```

**Note:** Frontend Design and UI/UX Pro Max plugins will auto-activate here.
Let them suggest the aesthetic direction, but ground everything in PROJECT.md tokens.

**What CC should create:**
- design/prototypes/login.html
- design/prototypes/signup.html
- src/app/auth/login/page.tsx (using shadcn Card, Input, Label, Button)
- src/app/auth/signup/page.tsx

---

## Session 3: Callbacks & Testing

**Prompt CC:**
```
Continue Phase 02. Set up auth callback route, email verification, and test the full auth flow.
Run /review before committing.
```

**What CC should create:**
- src/app/auth/callback/route.ts
- src/app/auth/verify/page.tsx
- Manual test: signup → verify → login → protected route → logout

---

## Manifest

After Phase 02, CC writes `manifests/auth-manifest.md`:

```markdown
# Auth Manifest
Provider: Supabase Auth
Pages: login, signup, verify
Middleware: [protected routes list]
Schemas: [list of Zod schemas]
Callback: [path]
Email verification: [yes/no]
Form library: react-hook-form + Zod
```

## Definition of Done
- [ ] Login and signup work end-to-end
- [ ] Middleware protects all routes listed in PROJECT.md
- [ ] Email verification flow works
- [ ] Auth state persists across page refreshes (httpOnly cookies)
- [ ] shadcn/ui components used for forms
- [ ] react-hook-form + Zod validation on all forms
- [ ] No localStorage usage
- [ ] `/review` passed (or code-reviewer subagent)
- [ ] `npx tsc --noEmit` passes
- [ ] Manifest written
