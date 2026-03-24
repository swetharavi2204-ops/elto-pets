# Phase 06: Deploy to Production

**Goal:** Ship to production with confidence.

**Duration:** 1-2 sessions

---

## Pre-Deployment Checklist

- [ ] All tests passing (`npm run test`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Tested manually at 375/768/1280px
- [ ] Database migrations tested on staging
- [ ] Environment variables set in production (Vercel dashboard)
- [ ] Rollback plan documented
- [ ] Lighthouse score: 95+ on all 4 metrics

---

## Session 1: Pre-Deploy Verification

**Prompt CC:**
```
Start Phase 06. Run all tests, type checks, lint.
Run /qa (G Stack) for final comprehensive quality check.
Create a pre-deploy checklist. Verify each item.
If anything fails, stop and report.
If everything passes, create a deployment plan.
```

---

## Session 2: Deploy & Monitor

**Prompt CC:**
```
Deploy to production:
1. Final test run
2. Build: npm run build
3. Deploy to Vercel
4. Post-deploy smoke tests (check all routes)
5. Run Lighthouse on production URL
6. Monitor for 5 minutes
Wait for my approval before each step.
```

---

## Rollback

```bash
vercel rollback
# or manual:
git revert [commit-hash]
git push
```

---

## Definition of Done
- [ ] All tests passing in production
- [ ] Lighthouse: 95+ on all 4 metrics
- [ ] Error rate < 0.1%
- [ ] Response times within SLA
- [ ] Database healthy
- [ ] Monitoring alerts configured
- [ ] Rollback plan tested
