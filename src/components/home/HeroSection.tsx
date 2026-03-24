import Link from 'next/link'

import { cn } from '@/lib/utils'

const STATS = [
  { value: '100%', label: 'Natural' },
  { value: 'UK', label: 'Made & Shipped' },
  { value: '0', label: 'Preservatives' },
] as const

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden plum-gradient px-6 pt-[120px] supports-[min-height:100svh]:min-h-svh"
    >
      {/* Radial gold glow */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="noise-overlay pointer-events-none absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-[1] flex max-w-[680px] flex-col items-center text-center">
        {/* Logo placeholder */}
        <div
          aria-hidden="true"
          title="Logo placeholder — gold brushstroke + dog silhouette"
          className="mb-10 flex h-[120px] w-[120px] items-center justify-center rounded-[20px] border-2 border-dashed border-elto-gold/30 max-md:mb-8 max-md:h-24 max-md:w-24 max-sm:mb-7 max-sm:h-20 max-sm:w-20 max-sm:rounded-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-12 w-12 text-elto-gold/25 max-md:h-10 max-md:w-10 max-sm:h-8 max-sm:w-8"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </div>

        {/* Brand name */}
        <h1 className="mb-5 font-display text-[72px] font-bold leading-none tracking-[14px] text-elto-gold [text-indent:14px] max-md:text-[52px] max-md:tracking-[10px] max-md:[text-indent:10px] max-sm:mb-3.5 max-sm:text-[40px] max-sm:tracking-[8px] max-sm:[text-indent:8px]">
          ELTO
        </h1>

        {/* Tagline */}
        <p className="mb-4 font-body text-sm font-normal uppercase tracking-[6px] text-elto-gold/85 max-md:text-xs max-md:tracking-[4px] max-sm:mb-3 max-sm:text-[11px] max-sm:tracking-[3px]">
          Trust {'\u00B7'} Treats {'\u00B7'} Love
        </p>

        {/* Decorative divider */}
        <div
          aria-hidden="true"
          className="gold-fade-border mb-5 h-px w-12 opacity-40"
        />

        {/* Subtitle */}
        <p className="mb-11 max-w-[480px] font-body text-lg font-light leading-relaxed text-white/65 max-md:mb-9 max-md:text-base max-sm:mb-8 max-sm:px-2 max-sm:text-[15px]">
          Premium natural dog treats, handcrafted in the UK with ingredients you can trust.
        </p>

        {/* CTAs */}
        <div className="mb-20 flex items-center gap-4 max-md:mb-[60px] max-sm:mb-12 max-sm:w-full max-sm:max-w-[300px] max-sm:flex-col max-sm:gap-3">
          <Link
            href="/shop"
            className="gold-gradient gold-cta-shadow inline-flex items-center justify-center rounded-full px-10 py-4 font-body text-sm font-semibold uppercase tracking-[1.2px] text-elto-dark transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none max-sm:w-full max-sm:px-8"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-elto-gold/40 bg-transparent px-9 py-[15px] font-body text-sm font-medium uppercase tracking-[1.2px] text-elto-gold transition-[border-color,background,transform] duration-150 hover:-translate-y-0.5 hover:border-elto-gold hover:bg-elto-gold/[0.08] active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none max-sm:w-full max-sm:px-8 max-sm:py-4"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-[1] mt-auto w-full max-w-[800px] pb-12 max-sm:pb-9">
        {/* Top border */}
        <div
          aria-hidden="true"
          className="gold-fade-border mb-8 h-px w-full"
        />

        <ul
          className="flex list-none items-center justify-center max-sm:flex-col max-sm:gap-6"
          role="list"
        >
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={cn(
                'flex flex-1 flex-col items-center gap-2 px-6 max-sm:px-0',
                i > 0 && 'border-l border-white/[0.08] max-sm:border-l-0 max-sm:border-t max-sm:border-white/[0.06] max-sm:pt-6'
              )}
            >
              <span className="font-display text-[28px] font-bold leading-none text-elto-gold max-md:text-2xl">
                {stat.value}
              </span>
              <span className="text-center font-body text-[11px] font-medium uppercase leading-tight tracking-[2px] text-white/45 max-md:text-[10px] max-md:tracking-[1.5px]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
