# Phase 05: API Routes

**Goal:** Build all API endpoints. One route group per session.

**Duration:** 5-6 sessions

---

## Rules for API Routes

Every route MUST have (in this order):
1. Auth check (if protected)
2. Zod validation of request body/params
3. Business logic
4. Error handling with proper HTTP status codes
5. Typed response

Run **code-reviewer subagent** before committing every route group.

---

## Session Template

```
Start of session:
  CC reads SESSION-STATE.md → knows which route group is next

You say: "Build [route-group] API routes"

CC:
  1. Creates Zod schemas for request/response
  2. Builds each route (GET, POST, PUT, DELETE)
  3. Adds auth check where needed
  4. Tests with curl or Thunder Client
  5. Runs code-reviewer subagent
  6. Commits
  7. Updates SESSION-STATE.md

You: /exit → fresh session → next route group
```

---

## Route Groups (one per session)

Customise based on your PROJECT.md API routes:

### Session 1: [Primary resource] API
### Session 2: [Secondary resource] API
### Session 3-5: [Additional route groups]
### Final session: Admin API (if applicable)

---

## Manifest

After Phase 05, CC writes `manifests/api-manifest.md`:

```markdown
# API Manifest
Routes: [list all routes]
Auth protected: [which routes]
Schemas: [list Zod schemas]
Error handling: [consistent format? yes/no]
```

## Definition of Done
- [ ] All routes from PROJECT.md implemented
- [ ] Zod validation on every route
- [ ] Auth checks on protected routes
- [ ] Proper HTTP status codes
- [ ] Typed responses
- [ ] Code review passed on every route group
- [ ] `npx tsc --noEmit` passes
- [ ] Manifest written
