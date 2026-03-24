# Phase 04: Testing

**Goal:** Unit tests, component tests, and manual QA loop.

**Duration:** 3 sessions

**Plugin boost:** Superpowers may enforce TDD (red-green-refactor).

---

## Session 1: Utility & Hook Tests

**Prompt CC:**
```
Start Phase 04. Write tests for all utility functions and custom hooks.
Use Vitest. Co-locate tests next to source files.
Follow TDD: write failing tests first, then verify they pass.
```

**What CC should test:**
- All functions in src/lib/utils/
- All custom hooks in src/hooks/
- Zod schemas (valid + invalid inputs)
- Auth actions (mock Supabase)

---

## Session 2: Component Tests

**Prompt CC:**
```
Continue Phase 04. Write component tests for core UI components.
Use Vitest + React Testing Library. Test user interactions, not implementation details.
```

**What CC should test:**
- Key custom components (not shadcn internals)
- Form submissions with valid/invalid data
- Loading/empty/error state rendering

---

## Session 3: Manual QA Loop

**Prompt CC:**
```
Continue Phase 04. Run through the QA checklist below.
Fix everything found. Run code-reviewer subagent, then commit.
```

**QA Checklist:**
- [ ] All pages load without errors
- [ ] Auth flow: signup → verify → login → logout
- [ ] Protected routes redirect when logged out
- [ ] Forms validate correctly
- [ ] Mobile responsive at 375px
- [ ] Tablet at 768px
- [ ] Desktop at 1280px
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] No layout shifts
- [ ] Keyboard navigation works

---

## Definition of Done
- [ ] All utility tests pass
- [ ] Core component tests pass
- [ ] QA checklist complete
- [ ] Zero console errors
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run test` passes
