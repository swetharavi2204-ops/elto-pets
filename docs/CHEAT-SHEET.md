# Cheat Sheet — Daily Reference

## Start a Session
```bash
cc                    # alias for: claude --model opusplan
```

## Session Rules
- **ONE component or endpoint per session**
- **`/exit` between tasks** — fresh context
- **Commit after every completed unit**
- **Code-reviewer subagent before every commit**

## Plugin Commands
| Command | Plugin | When |
|---------|--------|------|
| `/brainstorming` | Superpowers | Before M/L features |
| `/execute-plan` | Superpowers | Batched implementation |

## Auto-Activating Plugins (no command needed)
| Plugin | Activates when... |
|--------|-------------------|
| Frontend Design | Any UI/frontend task |
| UI/UX Pro Max | Any design decision needed |
| Memory plugin | Always (silent background) |

## Subagent Commands (say these to Claude)
- "Run the code-reviewer agent on the current diff"
- "Run the visual-diff-checker on [ComponentName]"
- "Run the planner agent for [feature]"

## Phase 03 UI Flow
```
You: "Build [ComponentName]"
  → Frontend Design + UI/UX Pro Max auto-activate
  → CC builds HTML prototype with distinctive design
  → You: "Approved" or feedback
  → CC converts to React with shadcn/ui
  → visual-diff-checker subagent (fidelity)
  → code-reviewer subagent (quality)
  → Commit → /exit → next component
```

## 3-Strike Debug Rule
1. Fix from error message
2. Check HTML prototype drift
3. Check manifest conflicts
4. After 3 strikes: STOP → save state → /exit

## Key Commands
| What | Command |
|------|---------|
| Start session | `cc` |
| Exit session | `/exit` |
| Check types | `npx tsc --noEmit` |
| Run tests | `npm run test` |
| Add shadcn component | `npx shadcn@latest add [name]` |
| Reload plugins | `/reload-plugins` |
