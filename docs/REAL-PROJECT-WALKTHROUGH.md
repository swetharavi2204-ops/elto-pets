# Real Project Walkthrough: Building a Restaurant Booking Site

This walkthrough shows exactly what you type, what Claude does, and what the plugins do — from empty folder to deployed website.

**Project:** "Flavor & Flame" — a restaurant booking website
**Stack:** Next.js + TypeScript + Tailwind + shadcn/ui + Supabase + Vercel

---

## Before You Start (one-time setup already done)

You've already installed plugins in Claude Code:
- ✅ Frontend Design
- ✅ UI/UX Pro Max
- ✅ Superpowers
- ✅ Memory plugin (Claude Mem or memsearch)

You've already created a repo from the template and copied template files to root.

---

## Session 1: Generate Design System + Scaffold

### What you type:
```bash
cd flavor-and-flame
cc
```

### What you say to Claude:
```
I'm building a restaurant booking website called "Flavor & Flame" for a 
high-end Italian restaurant. The vibe is warm, elegant, and inviting — 
think candlelit dinner, not corporate. Target audience is couples and 
food enthusiasts aged 28-50.

Generate a complete design system and fill in PROJECT.md. Then start Phase 01.
```

### What happens behind the scenes:
1. **UI/UX Pro Max auto-activates** — searches its database:
   - Finds "restaurant" in product types → recommends warm colour palettes
   - Suggests font pairings: a serif display font + elegant body font
   - Recommends "luxury minimal" style with warm tones
2. **Frontend Design auto-activates** — pushes Claude toward distinctive choices:
   - Rejects generic Inter/purple, suggests something with character
   - Recommends atmospheric effects, textured backgrounds
3. **Claude fills in PROJECT.md** with specific hex values, font names, spacing
4. **Claude starts Phase 01** — scaffolds Next.js, installs shadcn/ui, creates globals.css with the design tokens

### What you see:
Claude fills PROJECT.md with something like:
```
Design Direction:
- Style: warm luxury minimal
- Mood: candlelit elegance, handcrafted feel
Colours:
- Primary: #8B4513 → var(--color-primary)     (warm brown)
- Accent: #D4A574 → var(--color-accent)        (gold)
- Background: #FFF8F0 → var(--color-bg)        (warm cream)
Fonts:
- Display: Playfair Display → var(--font-display)
- Body: Lora → var(--font-body)
```

### You check:
- Do you like the colours? The fonts? The mood?
- If not, say: "I want darker colours, more moody. Try again."
- If yes, say: "Approved. Continue with the scaffold."

### Claude commits:
```
chore(init): scaffold project with Next.js, shadcn/ui, design system
```

### You:
```
/exit
```

---

## Session 2: Database Schema

### What you type:
```bash
cc
```

### What you say:
```
Continue Phase 01. Create the Supabase tables for a restaurant booking site:
- menu_items (name, description, price, category, image_url)
- reservations (date, time, party_size, name, email, phone, special_requests)
- reviews (rating, text, author_name)
Add RLS policies and seed data. Commit when done.
```

### What happens:
- Memory plugin injects context from Session 1
- Claude reads SESSION-STATE.md as backup
- Creates migration SQL, RLS policies, seed data
- Writes manifests/db-manifest.md

### You:
```
/exit
```

---

## Sessions 3-5: Auth (Phase 02)

Follow Phase 02 exactly. Three sessions:
1. Middleware + Zod schemas
2. Login/signup pages (HTML prototype → approval → React with shadcn)
3. Callbacks + testing

---

## Session 6: First UI Component — Navbar (Phase 03 begins)

### What you say:
```
Start Phase 03. Build the Navbar component.
Sticky, scroll-aware, transparent on hero then solid on scroll.
Mobile hamburger menu. Logo on the left, nav links center, 
"Reserve a Table" CTA button on the right.
```

### What happens:
1. **Frontend Design activates** — suggests atmospheric transparent-to-solid transition, warm colour scheme
2. **UI/UX Pro Max activates** — recommends navbar patterns for restaurant sites
3. Claude builds `design/prototypes/navbar.html` — pure HTML/CSS
4. Opens in browser → you review at 375px, 768px, 1280px

### You say:
```
Approved. Convert to React.
```
or
```
The mobile menu animation is too fast. Slow it down. Also make the
CTA button rounder.
```

### After approval + React conversion:
```
Run the visual-diff-checker on Navbar.
```
(Claude invokes the subagent, compares HTML vs React at all breakpoints)

```
Run the code-reviewer on the current diff.
```
(Claude invokes code-reviewer, checks for quality issues)

### Claude commits:
```
feat(ui): add Navbar with scroll-aware transparency and mobile menu
```

### You:
```
/exit
```

---

## Session 7: Footer

```bash
cc
```
```
Build the Footer component. Dark background using var(--color-surface).
3-column grid: brand + tagline | quick links | contact info + social icons.
Bottom bar with copyright.
```

Same pipeline: HTML → approve → React → visual diff → code review → commit → /exit

---

## Sessions 8-10: Hero, About, Menu Sections

Each session, one component:

**Session 8 — Hero:**
```
Build the Hero section. Full-viewport height with a background image
of the restaurant interior (use placeholder image for now).
Large heading in Playfair Display, subheading, and a "Reserve Your Table"
CTA button. Subtle parallax scroll effect.
```

**Session 9 — About:**
```
Build the About section. Split layout: image on left, text on right.
Story of the restaurant, the chef, the philosophy.
Warm, editorial feel. Scroll-reveal animation.
```

**Session 10 — Menu Preview:**
```
Build the MenuPreview section showing 6 featured dishes from the menu.
Card grid using shadcn Card. Each card: image, dish name, description,
price. Hover animation. "View Full Menu" CTA at bottom.
```

---

## Sessions 11-15: Remaining Feature Components

- Reservations form (shadcn Input + Label + react-hook-form + Zod)
- Testimonials carousel
- Gallery grid with lightbox
- Contact section with map
- Full menu page

---

## Sessions 16-17: Page Compositions

Compose all components into actual pages:

**Session 16:**
```
Build the homepage at src/app/page.tsx. Compose these components in order:
Navbar → Hero → About → MenuPreview → Testimonials → Contact → Footer.
Wrap each section in AnimatedSection for scroll reveals.
```

**Session 17:**
```
Build the remaining pages: /menu, /reservations, /about, /contact.
Use the components we've already built. Add proper Next.js metadata
for SEO on each page.
```

---

## Sessions 18-20: Testing (Phase 04)

```
Start Phase 04. Write tests for utility functions and Zod schemas.
```

```
Continue Phase 04. Write component tests for ReservationForm and MenuCard.
```

```
Continue Phase 04. Run through the QA checklist. Fix everything found.
```

---

## Sessions 21-25: API Routes (Phase 05)

One route group per session:
1. Menu API (GET /api/menu, GET /api/menu/[id])
2. Reservations API (POST /api/reservations, GET /api/reservations)
3. Reviews API (GET /api/reviews, POST /api/reviews)
4. Contact form API (POST /api/contact)

---

## Session 26: Deploy (Phase 06)

```
Start Phase 06. Run all tests, type checks, lint. 
Build for production. Deploy to Vercel.
Run Lighthouse on the production URL.
```

---

## Total: ~26 sessions across ~3-5 days

Compare to vibe coding ("build me a restaurant website" → one broken mess in one session):
- Every component has been individually approved as an HTML prototype
- Every component has been code-reviewed for quality and security
- The design is distinctive (not purple gradients on white)
- RLS is on every database table
- All forms have Zod validation
- All images have alt text
- Lighthouse is 95+
- It actually works

---

## Tips for Maximum Speed

1. **Batch your /exit cycles.** Do 3-4 sessions back-to-back in one sitting.
   Each session is 10-20 minutes. You can do 4-5 components per hour.

2. **Approve HTML prototypes fast.** Don't agonise — you can iterate later.
   The HTML is changeable. Just check: does the layout feel right at mobile?

3. **Let plugins do the thinking.** Don't manually specify colours and fonts.
   Say the vibe, let UI/UX Pro Max find the specifics.

4. **Use /brainstorming only for complex features.** For simple components,
   just say "build it" and let Claude go.

5. **Trust the process.** The reason it feels slow (one component per session)
   is the exact reason it produces great results (fresh context every time).
