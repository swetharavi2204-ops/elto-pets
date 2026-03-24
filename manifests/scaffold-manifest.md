# Scaffold Manifest — Phase 1A

## Framework
- Next.js 14+ (App Router)
- TypeScript strict mode
- Tailwind CSS v4

## shadcn/ui Components Installed
- button, card, input, label, skeleton, badge, avatar, separator, dialog, sheet, sonner

## Design System (globals.css)
- Palette: plum (#4f1e45, #742c65, #2a1025) + gold (#C5AB67, #DBC078) + white/cream surfaces
- Fonts: Playfair Display (display), Inter (body) via next/font/google
- CSS variables: all Elto Pets tokens defined under @theme inline + :root
- Utilities: .fade-in-section (CSS scroll fade), .gold-gradient, .plum-gradient
- prefers-reduced-motion: respected

## Supabase
- Browser client: src/lib/supabase/client.ts
- Server client: src/lib/supabase/server.ts
- Packages: @supabase/supabase-js, @supabase/ssr

## Types
- src/types/database.ts — Product, Profile, CartItem, SavedItem, Order, OrderItem, Subscription

## Config Files
- tsconfig.json (strict: true)
- components.json (shadcn/ui)
- .env.example (Supabase + Stripe + App)
- .gitignore (node_modules, .next, .env, .superpowers)

## TypeScript Status
- `npx tsc --noEmit` passes with zero errors
