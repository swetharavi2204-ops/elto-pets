project: Elto Pets
phase: Phase 02 — UI Components
branch: main
last_updated: 2026-03-24T15:55:00Z

## Last completed
- Hero Section: full-viewport plum gradient hero with large centered logo placeholder, "ELTO" brand name in gold Playfair Display, "Trust · Treats · Love" tagline, decorative gold divider, subtitle, dual CTAs (Shop Now gold gradient + Our Story outline), and stats bar (100% Natural | UK Made & Shipped | 0 Preservatives). Server component using cn() utility, semantic list markup for stats, noise texture overlay, radial gold glow, all colors via CSS variable utilities. HTML prototype approved at design/prototypes/hero.html.

## Next task
- Phase 02: Product Categories
- Reference: docs/superpowers/specs/2026-03-24-elto-pets-homepage-design.md (Section 2/3: Product Showcase / Categories)
- Reference: design/prototypes/hero.html, navbar.html, footer.html for design consistency

## Context needed for next session
- CLAUDE.md (rules)
- PROJECT.md (design system, routes, spec)
- manifests/hero-manifest.md (hero details)
- src/components/home/HeroSection.tsx (reference for component patterns)
- src/app/globals.css (design tokens + utility classes)

## Known issues
- cart_items, saved_items, subscriptions tables not yet in Supabase
- Supabase project on separate account (not MCP-linked) — use anon key for API access
- Cart count hardcoded to 0 — wire to Zustand store when cart phase begins
- Logo placeholder needs real asset (gold brushstroke + dog silhouette)
- Social links point to generic URLs — need real Elto Pets profile URLs

## Completed phases
- [x] Phase 1A: Project scaffold (Next.js, Tailwind, shadcn/ui, design system, Supabase clients)
- [x] Phase 1B: Database schema alignment (TypeScript types synced with live Supabase)

## Component queue (Phase 02)
- [x] Navbar
- [x] Footer
- [x] Hero Section
- [ ] Product Categories
- [ ] Why Elto Pets (Trust Signals)
- [ ] Customer Reviews
- [ ] Newsletter Signup
- [ ] Cookie Consent Banner
