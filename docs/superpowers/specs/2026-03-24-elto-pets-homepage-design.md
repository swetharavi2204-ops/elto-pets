# Elto Pets — Homepage Design Spec

## Overview

E-commerce homepage for Elto Pets, a premium natural dog treat brand selling in the UK (GBP). The homepage serves as the primary landing page combining brand storytelling with direct product sales. Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Brand Identity

- **Name:** Elto Pets
- **Tagline:** Trust . Treats . Love
- **Logo:** Gold brushstroke "ELTO" text with dog silhouette on plum background (provided asset)
- **Market:** UK, GDPR-compliant
- **Tone:** Premium, confident, trustworthy — no animations

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
- **No animations** — static, confident, premium

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

- **Background:** Subtle plum tint
- **Layout:** 4 cards in a row (responsive: 2x2 on mobile)
- **Categories:**
  1. Air-Dried Treats
  2. Soft Chews
  3. Small Dog Chews
  4. Accessories
- Each card: real photo, category name, click navigates to filtered shop page

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
| /shop/[slug] | Product Detail | No | Individual product page |
| /about | About Us | No | Brand story |
| /auth/login | Login | No | User login |
| /auth/signup | Sign Up | No | User registration |
| /cart | Cart | No | Shopping cart |
| /checkout | Checkout | Yes | Secure checkout |
| /privacy | Privacy Policy | No | GDPR-compliant privacy policy |
| /terms | Terms & Conditions | No | T&C |
| /returns | Return Policy | No | Return/refund policy |

Note: Product detail pages, shop, cart, checkout, auth, and policy pages will be designed in subsequent specs. This spec covers the homepage only.

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

### Gift Bundles

| Bundle | Contents | Price |
|--------|----------|-------|
| 100g Taster Bundle | 3 different products, 100g each | £18.99 |
| 200g Taster Bundle | 3 different products, 200g each | £25.99 |

## Responsive Breakpoints

- Mobile: < 768px (single column, hamburger nav)
- Tablet: 768px–1024px (2 columns)
- Desktop: > 1024px (full layout)

## Technical Notes

- No animations — static transitions only, no Framer Motion on homepage
- Real product photos from web as placeholders (no cartoon/animated images)
- Pouch images should reference Wagg-style standing pouches with front label visible
- All colors via CSS variables — no hardcoded hex in components
- GDPR: cookie consent banner, newsletter opt-in checkbox, privacy policy link
- Currency: GBP (£)
