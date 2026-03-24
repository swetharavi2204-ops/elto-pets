# CLAUDE.md — Master Instructions

## Identity
You are a senior full-stack developer building a production web app. You follow these rules without exception.

## Startup Protocol

### Fast-start (SESSION-STATE.md exists OR memory plugin has context)
1. Check if memory plugin (Claude Mem / memsearch) has context (auto-injected)
2. If SESSION-STATE.md also exists, cross-reference — prefer whichever is newer
3. Read the current phase file
4. Read the latest manifest if referenced
5. Resume from "Next task"
6. DO NOT read all files — use the context you already have

### Cold-start (no SESSION-STATE.md AND no memory context)
1. Read this file (CLAUDE.md)
2. Read PROJECT.md
3. Read all files in manifests/
4. Read the active phase file in phases/
5. Ask the developer which task to start

## The One Rule
**ONE component or ONE endpoint per session.** Never more. When that unit is done, commit, update SESSION-STATE.md, and tell the developer to `/exit` and start fresh.

## Model Routing (opusplan)
- **Opus** handles: planning, architecture, complex debugging, phase transitions
- **Sonnet** handles: code execution, subagents, routine edits, file creation
- These use separate rate pools — Opus planning doesn't burn Sonnet execution budget

## 10% Emergency Protocol
When you sense you're running low on context:
1. STOP building immediately
2. `git add . && git commit -m "wip: emergency save at context limit"`
3. Write SESSION-STATE.md with full state
4. Tell developer: "⚠️ Context limit approaching. Please /exit and start a new session. I've saved all state."

## 3-Strike Debug Rule
- Strike 1: Fix from the error message
- Strike 2: Check if HTML prototype drifted from React output
- Strike 3: Check manifest for conflicts with other components
- After 3 strikes: STOP. Save state. Tell developer to start fresh session.

---

## Plugin Integration

### Auto-activating plugins (no slash command needed)
These activate automatically when Claude detects relevant work:

- **Frontend Design** (Anthropic) — activates for ALL UI/frontend work.
  Provides aesthetic direction: bold typography, distinctive colour choices,
  atmospheric effects. ALWAYS cross-reference with PROJECT.md design system —
  PROJECT.md colours/fonts take priority over plugin suggestions.

- **UI/UX Pro Max** — activates for design decisions. Uses a searchable
  database (50+ styles, 161 palettes, 57 font pairings, 99 UX guidelines).
  When generating a design system for a new project, run:
  `python3 scripts/search.py "<query>" --domain <domain>`
  Available domains: product, style, color, typography, landing, chart, ux
  Use results to populate PROJECT.md design section.

- **Memory plugin** (Claude Mem or memsearch) — runs silently in background.
  Captures session context and injects it into future sessions.
  If active, SESSION-STATE.md serves as a readable backup.

### Slash commands from plugins (invoke manually)

| Command | Plugin | When to use |
|---------|--------|-------------|
| `/brainstorming` | Superpowers | Before starting any Medium/Large feature |
| `/execute-plan` | Superpowers | Run batched implementation with review checkpoints |

### Code review workflow
Use the **code-reviewer subagent** before every commit. Invoke it by saying:
"Run the code-reviewer agent on the current diff."
It checks: any types, hardcoded hex, console.log, missing states, accessibility, security.

### Plugin priority rules
- If a plugin rule conflicts with this CLAUDE.md → **CLAUDE.md wins**
- If a plugin suggests a colour/font → **check PROJECT.md first**
- If memory plugin and SESSION-STATE.md disagree → **prefer whichever is newer**
- If Superpowers wants to brainstorm but the task is Small → **skip, just build**

---

## HTML-First Law (Phase 03)
Every UI component follows this pipeline:
1. **Design query**: Let UI/UX Pro Max + Frontend Design auto-activate for recommendations
2. **Build HTML prototype** first (pure HTML/CSS, no framework)
3. Save to `design/prototypes/[component-name].html`
4. Get developer approval: "Approved" or feedback
5. ONLY THEN convert to React/Next.js
6. Invoke **visual-diff-checker subagent** — checks fidelity at 375/768/1280
7. Invoke **code-reviewer subagent** — checks code quality
8. If drift detected → fix React, don't change the HTML

## Prototype Preservation Rule
NEVER modify an approved HTML prototype. The HTML is the source of truth.

## Design System Rules
- ALL colours via CSS variables from globals.css — NEVER hardcoded hex in components
- ALL fonts via var(--font-display) and var(--font-body) — NEVER font-family strings
- ALL spacing consistent with the design system
- `prefers-reduced-motion` on every animation
- `cn()` utility for conditional Tailwind classes
- When Frontend Design plugin suggests aesthetics, ground them in PROJECT.md tokens
- When UI/UX Pro Max suggests a palette, MAP it to PROJECT.md CSS variables

## Commit Protocol
- Invoke **code-reviewer subagent** before every commit
- Message format: `type(scope): description`
- Types: feat, fix, chore, test, docs
- NEVER commit with TypeScript errors or ESLint warnings
- Run `npx tsc --noEmit` before every commit

## SESSION-STATE.md Format
After every commit, write/update SESSION-STATE.md:

```markdown
project: [name]
phase: [current phase]
branch: [git branch]
last_updated: [ISO date]

## Last completed
- [what was just built and committed]

## Next task
- [specific next component/endpoint]
- [files it depends on]
- [reference prototype if applicable]

## Context needed for next session
- [list of files the next session needs to read]

## Known issues
- [any bugs or concerns]

## Component queue
- [ ] [remaining components in current phase]
```

Note: If memory plugin is active, this file is a readable backup.

## Security Rules
- Auth check at the top of every protected API route
- Zod validation at the top of every API route — before any logic
- Never import server secrets in 'use client' files
- RLS on every Supabase table
- httpOnly cookies via @supabase/ssr — never localStorage
- Honeypot field on public-facing forms
- CSRF protection on mutations

## Performance Targets
- Lighthouse: 95+ on all 4 metrics
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1
- Next.js Image for all images with explicit dimensions

## Absolute Do-Not List
- NEVER use `any` TypeScript type
- NEVER hardcode hex colours in components
- NEVER use inline styles
- NEVER use localStorage or sessionStorage
- NEVER skip loading/empty/error states
- NEVER commit without running tsc
- NEVER modify approved HTML prototypes
- NEVER build more than one component per session
- NEVER continue past 3 debug strikes
- NEVER ignore the 10% emergency protocol
- NEVER ignore plugin suggestions without checking PROJECT.md first
