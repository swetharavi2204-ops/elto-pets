import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const CATEGORIES = [
  {
    name: 'Air-Dried Treats',
    count: 4,
    slug: 'air-dried-treats',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=450&fit=crop&crop=faces',
    alt: 'A dog enjoying natural air-dried treats',
  },
  {
    name: 'Soft Chews',
    count: 1,
    slug: 'soft-chews',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=450&fit=crop&crop=faces',
    alt: 'Dog training treats for rewarding good behaviour',
  },
  {
    name: 'Dog Food',
    count: 1,
    slug: 'dog-food',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&h=450&fit=crop&crop=faces',
    alt: 'Premium natural dog food kibbles in a bowl',
  },
] as const

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function ProductCategories() {
  return (
    <section
      aria-label="Product categories"
      className="bg-elto-surface-plum px-6 py-24 max-md:px-5 max-md:py-[72px] max-[480px]:px-4 max-[480px]:py-14"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section header */}
        <header className="mb-14 text-center max-md:mb-10 max-[480px]:mb-8">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[3px] text-elto-gold max-[480px]:text-[11px] max-[480px]:tracking-[2.5px]">
            Browse By Type
          </p>
          <h2 className="mb-4 font-display text-[40px] font-bold leading-[1.15] text-elto-dark max-md:text-[32px] max-[480px]:text-[28px]">
            Our Categories
          </h2>
          <p className="mx-auto max-w-[480px] font-body text-base font-normal leading-relaxed text-elto-purple/70 max-md:text-[15px] max-[480px]:text-sm">
            From air-dried chews to wholesome kibbles, find the perfect treat for your dog.
          </p>
        </header>

        {/* Category cards */}
        <ul
          className="grid list-none grid-cols-3 gap-7 max-md:grid-cols-2 max-md:gap-5 max-[480px]:grid-cols-1 max-[480px]:gap-4"
          role="list"
        >
          {CATEGORIES.map((category, i) => (
            <li
              key={category.slug}
              className={cn(
                i === CATEGORIES.length - 1 &&
                  'max-md:col-span-full max-md:mx-auto max-md:w-1/2 max-[480px]:col-auto max-[480px]:mx-0 max-[480px]:w-full'
              )}
            >
              <Link
                href={`/shop?category=${category.slug}`}
                className="group block overflow-hidden rounded-2xl bg-card card-shadow transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden max-[480px]:aspect-video">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-elto-dark/50 to-transparent"
                  />
                </div>

                {/* Card body */}
                <div className="flex items-center justify-between gap-3 px-6 py-6 max-md:px-5 max-md:py-5 max-[480px]:px-4 max-[480px]:py-[18px]">
                  <div>
                    <p className="font-display text-xl font-semibold leading-[1.3] text-elto-dark max-md:text-lg">
                      {category.name}
                    </p>
                    <p className="font-body text-xs font-medium text-elto-purple/60">
                      {category.count} {category.count === 1 ? 'product' : 'products'}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full gold-gradient transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none max-[480px]:h-8 max-[480px]:w-8"
                  >
                    <ArrowIcon className="h-4 w-4 text-elto-dark max-[480px]:h-3.5 max-[480px]:w-3.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
