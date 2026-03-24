# Navbar Manifest — Phase 02

## Component
- File: `src/components/layout/Navbar.tsx`
- Type: Client component (`'use client'`)
- Wired in: `src/app/layout.tsx`

## HTML Prototype
- File: `design/prototypes/navbar.html`
- Status: Approved
- Deviations: Mobile menu uses Sheet (side drawer) instead of dropdown panel — approved for better UX (focus trap, overlay, escape-to-close)

## shadcn/ui Components Used
- NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink
- Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose
- Button (ghost for Login, gold-gradient for Sign Up)
- Separator (mobile menu divider)

## shadcn/ui Components Installed This Phase
- navigation-menu
- dropdown-menu (for future logged-in user dropdown)

## Design Tokens Used
- `bg-elto-dark` (#2a1025) — navbar background
- `text-elto-gold` (#C5AB67) — logo, active links, cart badge
- `gold-gradient` — Sign Up button
- `font-display` — logo text (Playfair Display)
- `font-body` — nav links, tagline (Inter)

## Features
- Sticky: `sticky top-0 z-100`
- Logo: placeholder (40x40 dashed box) + "ELTO" text + "Trust . Treats . Love" tagline
- Desktop nav: Shop | About Us (uppercase, letter-spaced, gold underline on hover/active)
- Cart: ShoppingBag icon with badge (hydration-guarded, ready for Zustand)
- Login: ghost button
- Sign Up: gold gradient pill with lift on hover
- Mobile (<768px): Sheet drawer from right, ELTO header, nav links, Sign Up CTA + Login link

## Accessibility
- `aria-label` on nav, logo link, cart link, menu trigger
- `aria-hidden` on decorative elements (logo placeholder, cart badge, icons)
- Sheet provides focus trap and escape-to-close
- `prefers-reduced-motion` respected on all transitions

## CSS Fix
- Removed `@import url()` for Google Fonts from globals.css (caused CSS parse error)
- Fonts already loaded via `next/font/google` in layout.tsx

## TODO (future phases)
- Replace logo placeholder with real asset
- Wire cart badge to Zustand store
- Add logged-in state (avatar, dropdown-menu, sign out)

## TypeScript Status
- `npx tsc --noEmit` passes with zero errors
- `npx next build` passes successfully
