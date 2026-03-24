## Hero Section Manifest

### Files
- `design/prototypes/hero.html` — approved HTML prototype (source of truth)
- `src/components/home/HeroSection.tsx` — React Server Component
- `src/app/page.tsx` — homepage renders HeroSection
- `src/app/globals.css` — utility classes (plum-gradient, gold-gradient, hero-glow, noise-overlay, gold-fade-border, gold-cta-shadow)

### Component Details
- **Type:** React Server Component (no 'use client')
- **Imports:** `Link` from next/link, `cn` from @/lib/utils
- **No shadcn/ui primitives** — pure Tailwind + custom utility classes

### Visual Spec
- **Background:** plum-gradient (170deg, elto-dark → elto-plum)
- **Atmosphere:** radial gold glow (hero-glow), noise texture overlay (noise-overlay)
- **Height:** min-h-screen with 100svh support
- **Logo placeholder:** 120px (md: 96px, sm: 80px), dashed gold border
- **Brand:** "ELTO" — Playfair Display 72px (md: 52px, sm: 40px), gold, wide tracking
- **Tagline:** "Trust · Treats · Love" — Inter 14px, gold/85%, uppercase, wide tracking
- **Divider:** gold-fade-border, 48px width, 40% opacity
- **Subtitle:** "Premium natural dog treats, handcrafted in the UK with ingredients you can trust."
- **CTA Primary:** "Shop Now" — gold-gradient pill, dark text, gold-cta-shadow, hover lift
- **CTA Secondary:** "Our Story" — outline pill, gold border/text, hover bg tint
- **Stats bar:** 3-column (stacks on mobile) — gold values, white/45% labels, gold-fade-border separator

### Responsive Breakpoints
- Desktop: default (> 768px)
- Tablet: max-md (≤ 768px) — smaller logo, brand text, stats
- Mobile: max-sm (≤ 480px) — stacked CTAs and stats, 100svh, smaller typography

### Accessibility
- `<section aria-label="Hero">`
- `<h1>` for brand name
- Decorative elements: `aria-hidden="true"`
- Stats in semantic `<ul>` / `<li>` with `role="list"`
- `prefers-reduced-motion` respected on CTAs and gold-cta-shadow

### CSS Utility Classes Added
| Class | Purpose |
|-------|---------|
| `plum-gradient` | 170deg dark-to-plum gradient (updated from 135deg) |
| `gold-gradient` | Now uses CSS variables instead of hardcoded hex |
| `hero-glow` | Radial gold glow using color-mix() |
| `noise-overlay` | SVG noise texture for premium depth |
| `gold-fade-border` | Horizontal fading gold line using color-mix() |
| `gold-cta-shadow` | Gold box-shadow with hover state, respects reduced-motion |
