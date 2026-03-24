# PROJECT.md — Project Specification

## Project Name
Elto Pets

## Description
Elto Pets is a premium e-commerce website for natural dog treats and chews, selling in the UK (GBP). Features product browsing, customisable gift bundles, subscriptions (Subscribe & Save 10%), Stripe checkout, and full account management with order history.

## Tech Stack
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui + CSS variables
- Components: shadcn/ui (install via `npx shadcn@latest init`)
- Database: Supabase (PostgreSQL + Auth + Storage)
- State: React Query (server) + Zustand (client UI)
- Forms: react-hook-form + Zod validation
- Icons: lucide-react
- Payments: Stripe Checkout (hosted) + Stripe Billing (subscriptions)
- Deployment: Vercel

## Core Features
1. Homepage with hero section, product showcase, trust signals, and newsletter signup
2. Product browsing with category filters and subscription toggle (Subscribe & Save 10%)
3. Customisable gift bundles — pick any 3 products, dynamic pricing
4. Stripe checkout with cancel-safe cart (items preserved on back/cancel)
5. My Account — order history, saved items, saved address/mobile, subscription management

---

## Design System

### Design Direction
- **Style**: Bold Hybrid — dark backgrounds with gold accents, premium DTC brand feel
- **Mood**: Confident, trustworthy, premium — no decorative animations
- **Tagline**: Trust . Treats . Love
- **Motion**: Smooth CSS transitions only (page fades 150ms, scroll fade-in, hover lifts translateY -2px). All respect `prefers-reduced-motion`.
- **Images**: Real photographs only — NO animated, cartoon, or anime images anywhere

### Colours (defined as CSS variables in globals.css)
- Primary: #4f1e45 → var(--color-primary)
- Primary hover: #3d1736 → var(--color-primary-hover)
- Secondary: #742c65 → var(--color-secondary)
- Accent (gold): #C5AB67 → var(--color-accent)
- Accent light (gold): #DBC078 → var(--color-accent-light)
- Background: #ffffff → var(--color-bg)
- Surface: #faf7f3 → var(--color-surface)
- Surface warm: #f5f0eb → var(--color-surface-warm)
- Surface plum: #f5f0f3 → var(--color-surface-plum)
- Dark: #2a1025 → var(--color-dark)
- Text: #2a1025 → var(--color-text)
- Text muted: #742c65 → var(--color-text-muted)
- Text on dark: #ffffff → var(--color-text-on-dark)
- Text gold on dark: #C5AB67 → var(--color-text-gold)
- Error: #dc2626 → var(--color-error)
- Success: #16a34a → var(--color-success)
- Border: #e5e0dc → var(--color-border)

### Fonts
- Display (headings): Playfair Display → var(--font-display)
  Google Fonts import: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap
- Body (text): Inter → var(--font-body)
  Google Fonts import: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap

### Spacing
- Section padding: py-20 lg:py-28
- Card padding: p-6
- Component gap: gap-4

### Border Radius
- Small (buttons, inputs): rounded-lg
- Medium (cards): rounded-xl
- Large (modals, sections): rounded-2xl

### Animation Approach
- Entrance: CSS fade-in on scroll (opacity 0→1, translateY 20px→0)
- Hover: subtle lift translateY -2px on cards and buttons
- Timing: 150ms for hover, 500ms for entrance
- Always include: prefers-reduced-motion media query
- NO Framer Motion or heavy animation libraries

---

## Pages & Routes

| Route | Page | Auth Required | Description |
|-------|------|---------------|-------------|
| / | Homepage | No | Landing page — hero, product showcase, categories, trust signals, reviews, newsletter |
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
| /bundles | Bundle Builder | No | Customisable gift bundle builder |

## Database Tables

### products
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| name | text | Product name |
| slug | text | URL slug, unique |
| description | text | Short description |
| category | text | air-dried-treats, soft-chews, dog-food |
| price_100g | integer | Price in pence (e.g., 899 = £8.99) |
| price_200g | integer | Price in pence (e.g., 1499 = £14.99) |
| image_url | text | Product image URL |
| in_stock | boolean | default true |
| subscription_eligible | boolean | default true |

### profiles
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, references auth.users(id) |
| created_at | timestamptz | default now() |
| full_name | text | |
| email | text | |
| phone | text | Mobile number |
| address_line1 | text | |
| address_line2 | text | nullable |
| city | text | |
| postcode | text | |
| country | text | default 'UK' |
| stripe_customer_id | text | nullable, set on first checkout |

### cart_items
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| user_id | uuid | FK → profiles(id) |
| product_id | uuid | FK → products(id) |
| weight | text | '100g' or '200g' |
| quantity | integer | default 1 |
| is_subscription | boolean | default false |
| subscription_frequency | text | nullable: '2w', '4w', '6w', '8w' |

### saved_items
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| user_id | uuid | FK → profiles(id) |
| product_id | uuid | FK → products(id) |
| weight | text | '100g' or '200g' |

### orders
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| user_id | uuid | FK → profiles(id) |
| status | text | pending_payment, paid, processing, shipped, delivered |
| total_pence | integer | Total in pence |
| stripe_session_id | text | Stripe checkout session ID |
| stripe_payment_intent_id | text | nullable |
| shipping_address | jsonb | Snapshot of address at time of order |

### order_items
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| order_id | uuid | FK → orders(id) |
| product_id | uuid | FK → products(id) |
| product_name | text | Snapshot at time of order |
| weight | text | '100g' or '200g' |
| quantity | integer | |
| unit_price_pence | integer | Price at time of order |
| is_subscription | boolean | default false |

### subscriptions
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| created_at | timestamptz | default now() |
| user_id | uuid | FK → profiles(id) |
| product_id | uuid | FK → products(id) |
| weight | text | '100g' or '200g' |
| frequency | text | '2w', '4w', '6w', '8w' |
| status | text | active, paused, cancelled |
| stripe_subscription_id | text | Stripe subscription ID |
| next_delivery_date | date | |

## API Routes

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | /api/products | No | List all products |
| GET | /api/products/[slug] | No | Get single product |
| GET | /api/cart | Yes | Get user's cart |
| POST | /api/cart | Yes | Add item to cart |
| PATCH | /api/cart/[id] | Yes | Update cart item |
| DELETE | /api/cart/[id] | Yes | Remove from cart |
| POST | /api/checkout | Yes | Create Stripe checkout session |
| POST | /api/webhooks/stripe | No | Stripe webhook handler |
| GET | /api/orders | Yes | List user's orders |
| GET | /api/orders/[id] | Yes | Get order details |
| GET | /api/saved | Yes | Get saved items |
| POST | /api/saved | Yes | Save item for later |
| DELETE | /api/saved/[id] | Yes | Remove saved item |
| GET | /api/subscriptions | Yes | List user's subscriptions |
| PATCH | /api/subscriptions/[id] | Yes | Update subscription (pause/cancel/change) |
| GET | /api/account | Yes | Get profile details |
| PATCH | /api/account | Yes | Update profile details |

## Third-Party Integrations
- Stripe Checkout (hosted): Secure payment processing, PCI compliant
- Stripe Billing: Recurring subscription payments
- Supabase Auth: User authentication with email/password
- Supabase Storage: Product image hosting

## Notes
- Currency: GBP (£), prices stored in pence in DB
- Market: UK only, GDPR-compliant
- All prices calculated server-side — client displays only
- Stripe webhooks are the ONLY source of truth for payment confirmation
- Cart persisted to Supabase for logged-in users, cookie for guests, merged on login
- Accessories category removed for now — schema supports adding categories later
