# Footer Manifest — Phase 02

## Component
- File: `src/components/layout/Footer.tsx`
- Type: Server component (no `'use client'`)
- Wired in: `src/app/layout.tsx`

## HTML Prototype
- File: `design/prototypes/footer.html`
- Status: Approved

## Structure
- 4-column responsive grid: Brand | Legal | Social | Contact
- Brand column: logo placeholder + tagline + description
- Legal column: Privacy Policy, Terms & Conditions, Return Policy
- Social column: Instagram, Facebook, TikTok (circular icon buttons, custom SVGs)
- Contact column: email (hello@eltopets.co.uk) + location (United Kingdom)
- Bottom bar: copyright line with dynamic year
- Divider: shadcn/ui Separator

## Design Tokens Used
- Background: `bg-elto-dark`
- Headings: `text-elto-gold`, `font-display`
- Body text: `text-white/70`
- Links hover: `hover:text-white`
- Social hover: `hover:text-elto-gold`, `hover:border-elto-gold/30`
- Contact icons: `text-elto-gold/65`
- Copyright: `text-white/50`

## Responsive Breakpoints
- Desktop (lg 1024px+): 4-column grid `1.4fr 1fr 1fr 1.2fr`
- Tablet (sm 640px–1023px): 2-column grid
- Mobile (<640px): single column, centered copyright

## Accessibility
- `role="contentinfo"` on `<footer>`
- `aria-label` on all social links and home link
- `aria-hidden="true"` on decorative SVGs
- External links: `target="_blank" rel="noopener noreferrer"`
- `motion-reduce:transition-none` on all transitions

## Dependencies
- `lucide-react`: Mail, MapPin
- `@/components/ui/separator`
- Custom inline SVG icons: InstagramIcon, FacebookIcon, TikTokIcon

## Known TODOs
- Replace placeholder social URLs with real Elto Pets profile links
- Replace logo placeholder with real brand asset
