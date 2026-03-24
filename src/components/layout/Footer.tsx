import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Return Policy', href: '/returns' },
] as const

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

// TODO: Replace with actual Elto Pets social profile URLs
const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'TikTok', href: 'https://tiktok.com', icon: TikTokIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-elto-dark text-white/70 pt-16 px-6" role="contentinfo">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 sm:gap-x-12 sm:gap-y-10 lg:gap-12 pb-12">

          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 no-underline"
              aria-label="Elto Pets home"
            >
              {/* Logo placeholder — matches navbar */}
              <div
                className="w-9 h-9 rounded-lg border-[1.5px] border-dashed border-elto-gold/40 flex items-center justify-center shrink-0"
                aria-hidden="true"
                title="Logo placeholder"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-[18px] h-[18px] text-elto-gold/35"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[22px] font-bold tracking-[3px] leading-none text-elto-gold">
                  ELTO
                </span>
                <span className="font-body text-[8px] font-normal tracking-[2.5px] uppercase leading-none text-white/50">
                  Trust &middot; Treats &middot; Love
                </span>
              </div>
            </Link>
            <p className="text-[13px] leading-[1.7] text-white/70 max-w-[280px] sm:max-w-full lg:max-w-[280px]">
              Premium natural dog treats, lovingly crafted in the UK. Because your best friend deserves the&nbsp;best.
            </p>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[1px] uppercase text-elto-gold mb-5">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/70 transition-colors duration-150 motion-reduce:transition-none hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[1px] uppercase text-elto-gold mb-5">
              Follow Us
            </h3>
            <div className="flex gap-3 mt-1">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/10 text-white/65 transition-colors duration-150 motion-reduce:transition-none hover:text-elto-gold hover:border-elto-gold/30 hover:bg-elto-gold/[0.06]"
                  aria-label={`Follow us on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[1px] uppercase text-elto-gold mb-5">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-2.5 text-[13px]">
                <Mail size={16} strokeWidth={1.75} className="shrink-0 mt-px text-elto-gold/65" aria-hidden="true" />
                <a
                  href="mailto:hello@eltopets.co.uk"
                  className="text-white/70 transition-colors duration-150 motion-reduce:transition-none hover:text-white"
                >
                  hello@eltopets.co.uk
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[13px] text-white/70">
                <MapPin size={16} strokeWidth={1.75} className="shrink-0 mt-px text-elto-gold/65" aria-hidden="true" />
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <Separator className="bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="py-6 text-center sm:text-left">
          <p className="text-xs text-white/50 tracking-[0.3px]">
            &copy; {new Date().getFullYear()} Elto Pets Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
