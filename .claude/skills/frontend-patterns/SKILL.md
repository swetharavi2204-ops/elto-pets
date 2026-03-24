---
name: frontend-patterns
description: "Production frontend patterns for React + Next.js + Tailwind + shadcn/ui + Framer Motion. Works alongside Frontend Design and UI/UX Pro Max plugins."
globs: ["src/components/**/*.tsx", "src/app/**/*.tsx", "design/**/*.html"]
---

# Frontend Patterns

## Plugin Coordination
This skill works alongside two plugins that auto-activate for UI work:
- **Frontend Design** (Anthropic) → provides aesthetic direction and creative choices
- **UI/UX Pro Max** → provides data-driven design recommendations (colours, fonts, styles)

This skill provides the STRUCTURAL patterns. The plugins provide the VISUAL direction.
When in doubt: plugins suggest the design, this skill enforces the implementation quality.

## Component Structure (always this order)
1. Imports (external → internal → types → shadcn/ui)
2. Animation variants (outside component — not recreated per render)
3. Props interface
4. Component (hooks → derived values → handlers → early returns → JSX)
5. Skeleton export

## shadcn/ui Usage
- ALWAYS check if shadcn has a component before building from scratch
- Common shadcn components: Button, Card, Input, Label, Dialog, Sheet, Tabs, Badge, Avatar, Skeleton, Separator, Select, Textarea, Switch, Checkbox, DropdownMenu, Toast
- Install as needed: `npx shadcn@latest add [component]`
- Customise via className — never modify files in components/ui/ directly
- For form fields: shadcn Input + Label + react-hook-form + Zod

## Three States (ALWAYS include all three)
- Loading: shadcn Skeleton component, never spinner
- Empty: message + action CTA, never blank
- Error: message + retry button, never raw error

## Images
- Always Next.js Image with width + height
- Above fold: priority prop
- All images: meaningful alt text, alt="" for decorative

## Animations (Framer Motion)
- Container with stagger for lists
- Subtle hover (y: -2, duration: 0.15)
- ALWAYS include prefers-reduced-motion via motion-reduce:animate-none
- Use AnimatedSection wrapper for scroll reveals (see stack reference)

## Responsive (mobile-first)
- Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Touch targets: minimum 44x44px on mobile
- Test at: 375px, 768px, 1280px

## Accessibility
- Semantic HTML: nav, main, article, section
- One h1 per page, logical hierarchy
- Icon buttons: aria-label always
- Focus: never outline-none, always visible ring
- Skip-to-content link in layout

## Design Tokens (NEVER hardcode)
- Colours: bg-[var(--color-primary)] not bg-green-700
- Fonts: font-[var(--font-display)] not font-serif
- If Frontend Design plugin suggests a specific colour, map it to the nearest
  PROJECT.md CSS variable. If no variable exists, add one to globals.css first.

## HTML→React Conversion Checklist
Before committing any converted component:
- [ ] Open HTML and localhost side-by-side
- [ ] Compare at 375px, 768px, 1280px
- [ ] All colours via CSS variables
- [ ] Font families match PROJECT.md
- [ ] Spacing matches
- [ ] Hover/focus states match
- [ ] Animations replaced with Framer Motion
- [ ] prefers-reduced-motion present
- [ ] shadcn components used where appropriate
- [ ] Run `/design-review` (G Stack) if available
- [ ] Run `/review` (G Stack) before commit
- [ ] ANY difference → fix React, not HTML
