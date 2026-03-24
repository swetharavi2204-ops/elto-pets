# Elto Pets — E-Commerce Website Spec

## Overview

Full e-commerce website for Elto Pets, a premium natural dog treat brand selling in the UK (GBP). The homepage serves as the primary landing page combining brand storytelling with direct product sales. Includes shop, cart, Stripe checkout, subscriptions, and user account management. Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Brand Identity

- **Name:** Elto Pets
- **Tagline:** Trust . Treats . Love
- **Logo:** Gold brushstroke "ELTO" text with dog silhouette on plum background (provided asset)
- **Market:** UK, GDPR-compliant
- **Tone:** Premium, confident, trustworthy
- **Motion:** No decorative/heavy animations. Yes to smooth CSS transitions: page fades (150ms), scroll fade-in, hover lifts (translateY -2px). All respect `prefers-reduced-motion`.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| --color-dark | #2a1025 | Darkest background, footer, navbar |
| --color-primary | #4f1e45 | Primary plum, buttons |
| --color-secondary | #742c65 | Medium purple, hover states |
| --color-gold | #C5AB67 | Gold accent, CTAs, highlights |
| --color-gold-light | #DBC078 | Light gold, secondary accent |
| --color-white | #ffffff | White backgrounds, text on dark |
| --color-cream | #faf7f3 | Light product section backgrounds |
| --color-cream-warm | #f5f0eb | Subtle warm backgrounds |

## Typography

- Display/headings: Bold, uppercase with letter-spacing for premium feel
- Body: Clean sans-serif
- Stats/labels: Small uppercase, wide letter-spacing
- Specific fonts to be selected during implementation via UI/UX Pro Max

## Layout Pattern

Alternating dark/light sections for visual rhythm:

| Section | Background | Purpose |
|---------|-----------|---------|
| Navbar | Dark plum (#2a1025) | Navigation |
| Hero | Plum gradient (#2a1025 → #4f1e45) | Brand impact |
| Product Showcase | White/cream (#ffffff / #faf7f3) | Products pop |
| Product Categories | Subtle plum tint | Browse by type |
| All Products Grid | White/cream | Full listing |
| Why Elto Pets | Dark plum (#2a1025) | Trust signals |
| Customer Reviews | White/cream | Social proof |
| Newsletter Signup | Dark plum | Email capture |
| Footer | Darkest plum (#2a1025) | Policies, socials |

---

## Component Specifications

### Navbar (sticky)

- **Left:** ELTO logo (gold brushstroke logo asset with dog silhouette)
- **Center:** Shop | About Us
- **Right:** Sign Up (gold gradient button) | Login (outline button)
- Background: #2a1025, sticky on scroll
- Policy links (Privacy, T&C, Returns) are NOT in navbar — footer only

### Section 1: Hero (full viewport height)

- **Background:** Linear gradient #2a1025 → #4f1e45
- **Center content:**
  - ELTO logo — large, centered, prominent
  - Tagline: "Trust . Treats . Love" in gold (#C5AB67) or white with letter-spacing
  - Subtitle: "Premium Natural Dog Treats" or similar
- **CTAs (centered below tagline):**
  - "Shop Now" — gold gradient button (#C5AB67 → #DBC078), dark text
  - "Our Story" — outline button, gold border
- **Stats bar (bottom of hero):**
  - 100% Natural | UK Made & Shipped | No Preservatives
  - Gold numbers, muted white labels
- **No decorative animations** — smooth CSS transitions only (page fades, scroll fade-in, hover lifts). Confident and premium.

### Section 2: Product Showcase

- **Background:** White (#ffffff) or cream (#faf7f3)
- **Layout:** Split — large product image left/center, details right
- **Product spotlight (one at a time):**
  - Large front-facing pouch image (Wagg-style standing pouch, front visible)
  - Product name (e.g., "Pig Ears")
  - Short description (e.g., "100% natural air-dried pig ears. Single ingredient, naturally delicious.")
  - Weight toggle: 100g | 200g
  - Price display (updates with weight selection)
  - "Add to Cart" gold CTA
  - Navigation arrows/dots to browse all 6 products
- **Products in rotation:**
  1. Pig Ears
  2. Rabbit Ears with Fur
  3. Chicken Strips
  4. Beef Strips
  5. Training Bites
  6. Natural Dog Food (Kibbles)
- **Gift Bundles (below product spotlight):**
  - 3 pouches displayed side by side (Wagg reference layout)
  - 100g Bundle (3 products) — £18.99
  - 200g Bundle (3 products) — £25.99
  - "Add Bundle to Cart" CTA
- **Note:** Actual pouch designs are in progress. Use real dog treat product photos from web as placeholders. No animated/cartoon images.

### Section 3: Product Categories

- **Background:** Subtle plum tint (#f5f0f3)
- **Layout:** 3 cards in a row (responsive: stacked on mobile)
- **Categories:**
  1. Air-Dried Treats
  2. Soft Chews
  3. Dog Food
- Each card: real photo, category name, click navigates to filtered shop page
- Note: Accessories removed for now — will be added in a future phase

### Section 4: All Products Grid

- **Background:** White/cream
- **Layout:** 3-column grid (responsive: 2 on tablet, 1 on mobile)
- **6 product cards:**
  - Front-facing pouch image
  - Product name
  - Weight options: 100g | 200g
  - Price
  - "Add to Cart" button
- Products: Pig Ears, Rabbit Ears with Fur, Chicken Strips, Beef Strips, Training Bites, Natural Dog Food (Kibbles)

### Section 5: Why Elto Pets

- **Background:** Dark plum (#2a1025)
- **Layout:** 4 columns (responsive: 2x2 on mobile)
- **Trust signals:**
  1. 100% Natural Ingredients
  2. Air-Dried for Freshness
  3. Made in the UK
  4. No Artificial Preservatives
- Simple icons (lucide-react), gold accent, white text, short description per item

### Section 6: Customer Reviews

- **Background:** White/cream
- **Layout:** 3 testimonial cards
- Star ratings (gold stars)
- Customer name, review text
- Placeholder reviews for now

### Section 7: Newsletter Signup

- **Background:** Dark plum (#2a1025)
- **Heading:** "Join the Pack"
- **Subtext:** "Get exclusive offers, new product alerts, and treat tips"
- Email input + "Subscribe" gold CTA button
- GDPR consent checkbox: "I agree to receive marketing emails. See our Privacy Policy."

### Section 8: Footer

- **Background:** Darkest plum (#2a1025)
- **Columns:**
  - Brand: ELTO logo + tagline
  - Legal: Privacy Policy | Terms & Conditions | Return Policy
  - Social: Instagram | Facebook | TikTok
  - Contact info
- Copyright line
- GDPR cookie consent banner on first visit (overlay at bottom of viewport)

---

## Pages (homepage + supporting)

| Route | Page | Auth Required | Description |
|-------|------|---------------|-------------|
| / | Homepage | No | Landing page with all sections above |
| /shop | Shop | No | All products with category filters |
| /shop/[slug] | Product Detail | No | Individual product with subscription toggle |
| /about | About Us | No | Brand story |
| /auth/login | Login | No | User login |
| /auth/signup | Sign Up | No | User registration |
| /cart | Cart | No | Shopping cart (persisted to Supabase for logged-in users) |
| /checkout | Checkout | Yes | Pre-checkout confirmation → Stripe redirect |
| /checkout/success | Success | Yes | Order confirmation after Stripe payment |
| /checkout/cancelled | Cancelled | Yes | Friendly return page, cart preserved |
| /account | My Account | Yes | Account dashboard overview |
| /account/orders | Orders | Yes | Order history list |
| /account/orders/[id] | Order Detail | Yes | Individual order details |
| /account/saved | Saved Items | Yes | Save for later / purchase later |
| /account/details | My Details | Yes | Saved address, mobile, email |
| /account/subscriptions | Subscriptions | Yes | Active subscriptions management |
| /privacy | Privacy Policy | No | GDPR-compliant privacy policy |
| /terms | Terms & Conditions | No | T&C |
| /returns | Return Policy | No | Return/refund policy |

---

## My Account

### Overview
Authenticated users get a full account dashboard to manage orders, saved items, subscriptions, and personal details. The goal is customers never need to re-enter information.

### My Account Sections

#### Order History
- List of all past orders with order number, date, status (Processing, Shipped, Delivered)
- Click to expand: full order details (items, quantities, prices, delivery address)
- Re-order button on each past order

#### Save for Later / Purchase Later
- Items the user saves from cart or product pages
- Each saved item shows: product image, name, weight, price, "Move to Cart" button
- Items removed from cart during a cancelled/abandoned Stripe checkout automatically appear here

#### Saved Details
- **Delivery address:** Full UK address, saved and pre-filled at checkout
- **Mobile number:** Saved for delivery updates
- **Email:** Account email (from auth)
- Edit/update functionality for all fields
- Multiple saved addresses supported (select default)

#### Subscriptions
- List of active subscriptions with next delivery date, frequency, product, price
- Pause / Cancel / Change frequency controls
- Subscription history

### Account Routes

| Route | Description |
|-------|-------------|
| /account | Dashboard overview |
| /account/orders | Order history list |
| /account/orders/[id] | Individual order details |
| /account/saved | Save for later items |
| /account/details | Saved address, mobile, email |
| /account/subscriptions | Active subscriptions management |

---

## Subscriptions

Every product offers an optional subscription at checkout and on product pages:

- **Frequency options:** Every 2 weeks | Every 4 weeks | Every 6 weeks | Every 8 weeks
- **Subscription discount:** 10% off the one-time price. Displayed as "Subscribe & Save 10%"
- Toggle between "One-time purchase" and "Subscribe" on product cards and product detail page
- Subscriptions managed via Stripe Billing (recurring payments)
- Subscription status synced to Supabase for display in My Account

---

## Checkout & Stripe Integration

### Cart → Checkout Flow

1. **Cart page** — user reviews items, quantities, weights
2. **User clicks "Checkout"** → must be authenticated (redirect to login/signup if not)
3. **Pre-checkout** — saved address and details pre-filled, user confirms or edits
4. **Stripe Checkout Session** created server-side with line items
5. **User redirected to Stripe** hosted checkout page
6. **On success** → redirect to /checkout/success, order created in Supabase, cart cleared
7. **On cancel/back** → redirect to /checkout/cancelled, cart items preserved AND saved to "Save for Later" in My Account

### Stripe Cancel/Back Handling (critical)

When a user cancels or presses back from Stripe checkout:
- Cart is NOT cleared — items remain in the cart
- Items are ALSO copied to "Save for Later" in My Account as a backup
- User sees a friendly message: "Your items are still in your cart. Ready when you are."
- No duplicate items: if item already exists in Save for Later, don't duplicate

### Stripe Integration Details

- **Stripe Checkout (hosted)** — not embedded, for maximum security and PCI compliance
- **Stripe Billing** — for subscription recurring payments
- **Webhooks:** checkout.session.completed, customer.subscription.created, customer.subscription.updated, customer.subscription.deleted, invoice.payment_succeeded, invoice.payment_failed
- **Stripe customer** synced to Supabase user on first checkout
- **Currency:** GBP (£)
- **Shipping:** UK only (configurable in Stripe)

---

## Workflow Integrity Rules

The following rules ensure a locked, verified workflow that minimises bugs:

### State Management
- Cart state persisted to Supabase (not just local state) — survives browser close, device switch
- Order state machine: Cart → Pending Payment → Paid → Processing → Shipped → Delivered
- No state can be skipped — transitions are validated server-side
- Stripe webhook is the ONLY source of truth for payment confirmation — never trust client-side redirects alone

### Data Validation
- All form inputs validated with Zod schemas (client + server)
- API routes validate auth + input before any database operation
- Price calculated server-side only — client displays, server validates
- Weight/quantity changes recalculate totals server-side

### Auth Guards
- Checkout requires authentication — redirect to login with return URL
- My Account pages all require authentication
- Cart accessible without auth (stored in cookie/local for guests, merged on login)

### Error Handling
- Every user action has a success state, error state, and loading state
- Stripe errors surface user-friendly messages (not raw error codes)
- Network failures show retry option, never silent failure
- Failed webhook deliveries: Stripe retries automatically, idempotent handlers on our side

---

## Transitions & UX

- **Smooth CSS transitions** between pages and on scroll (no jarring jumps)
- **Page transitions:** subtle fade (150ms) between route changes
- **Scroll sections:** elements fade in gently on scroll into viewport (CSS only, using `@media (prefers-reduced-motion: no-preference)`)
- **Hover states:** subtle lift (translateY -2px) on cards and buttons
- **Loading states:** skeleton loaders matching section layout, not spinners
- **No animated images anywhere** — all product/brand images are real photographs only
- **No cartoon/anime/illustrated images** anywhere on the site

---

## Products Data

| Product | 100g Price | 200g Price | Category |
|---------|-----------|-----------|----------|
| Pig Ears | £8.99 | £14.99 | Air-Dried Treats |
| Rabbit Ears with Fur | £8.99 | £14.99 | Air-Dried Treats |
| Chicken Strips | £8.99 | £14.99 | Air-Dried Treats |
| Beef Strips | £8.99 | £14.99 | Air-Dried Treats |
| Training Bites | £8.99 | £14.99 | Soft Chews |
| Natural Dog Food (Kibbles) | £8.99 | £14.99 | Dog Food |

Note: Prices are provisional — will be updated once final pricing is confirmed.

### Gift Bundles (Customisable)

Bundles are build-your-own — customer picks any 3 products. Price is calculated dynamically based on selected products, not a fixed price.

| Bundle Type | Contents | Pricing |
|-------------|----------|---------|
| 100g Bundle | Customer picks 3 products, 100g each | Sum of selected products' 100g prices (starting from £18.99 as reference) |
| 200g Bundle | Customer picks 3 products, 200g each | Sum of selected products' 200g prices (starting from £25.99 as reference) |

Bundle builder UI: step-by-step selection (pick product 1, 2, 3) with running total displayed.

## Responsive Breakpoints

- Mobile: < 768px (single column, hamburger nav)
- Tablet: 768px–1024px (2 columns)
- Desktop: > 1024px (full layout)

## Technical Notes

- **No animated/cartoon/anime images anywhere** — real photographs only across entire site
- Real product photos from web as placeholders (Wagg-style standing pouches, front visible)
- Smooth CSS transitions only (fade, translateY) — no Framer Motion, no heavy animation libraries
- All transitions respect `prefers-reduced-motion` media query
- All colors via CSS variables — no hardcoded hex in components
- GDPR: cookie consent banner, newsletter opt-in checkbox, privacy policy link
- Currency: GBP (£)
- **Stripe:** Hosted checkout (not embedded), Stripe Billing for subscriptions, webhook-driven order confirmation
- **Cart persistence:** Supabase for authenticated users, cookie/localStorage for guests, merge on login
- **Server-side price validation:** Client never determines final price — server recalculates from DB
- Accessories category removed for now — architecture should support adding categories later without refactor

---

## Implementation Phases

| Phase | Scope | Dependencies |
|-------|-------|-------------|
| 1 | Project scaffold: Next.js, Tailwind, shadcn/ui, CSS variables, Supabase schema | None |
| 2 | Auth: Supabase Auth, login/signup pages, middleware guards | Phase 1 |
| 3 | Homepage UI: all 8 sections (hero through footer), navbar | Phase 1 |
| 4 | Shop & product pages: category filters, product detail, subscription toggle | Phase 1 |
| 5 | Cart: add/remove, weight selection, persistence (guest + auth), Save for Later | Phases 2, 4 |
| 6 | Stripe checkout: session creation, success/cancel flows, webhooks, order creation | Phases 2, 5 |
| 7 | Subscriptions: Stripe Billing, recurring payments, account management | Phase 6 |
| 8 | My Account: orders, saved items, details, subscriptions dashboard | Phases 2, 6, 7 |
| 9 | Bundle builder: customisable bundles, dynamic pricing | Phase 5 |
| 10 | Policy pages: Privacy, T&C, Returns (GDPR), cookie consent | Phase 1 |
| 11 | Testing & QA: end-to-end flows, Stripe test mode, responsive testing | All |
| 12 | Deploy: Vercel, production Stripe keys, domain setup | All |
