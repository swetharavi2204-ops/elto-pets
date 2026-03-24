'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, ShoppingBag } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'About Us', href: '/about' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Hydration guard — prevents SSR/client mismatch for dynamic content
  useEffect(() => { setMounted(true) }, [])

  // TODO: Replace with real cart state from Zustand store
  const cartCount = 0

  return (
    <header className="sticky top-0 z-100">
      <nav
        aria-label="Main navigation"
        className="flex items-center h-[72px] px-6 bg-elto-dark"
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">

          {/* ---- Logo ---- */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 no-underline"
            aria-label="Elto Pets home"
          >
            {/* Logo placeholder — swap for real asset */}
            <div
              className="w-10 h-10 rounded-lg border-[1.5px] border-dashed border-elto-gold/40 flex items-center justify-center shrink-0"
              aria-hidden="true"
              title="Logo placeholder"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-5 h-5 text-elto-gold/35"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>

            {/* Brand text */}
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-[26px] font-bold tracking-[3px] leading-none text-elto-gold">
                ELTO
              </span>
              <span className="font-body text-[9px] font-normal tracking-[2.5px] uppercase leading-none text-white/40">
                Trust &middot; Treats &middot; Love
              </span>
            </div>
          </Link>

          {/* ---- Center Nav (desktop) ---- */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-10">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname.startsWith(href)
                return (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      href={href}
                      active={isActive}
                      className={cn(
                        'bg-transparent px-0 py-0 rounded-none text-[13px] font-medium tracking-[0.8px] uppercase transition-colors duration-150 motion-reduce:transition-none hover:bg-transparent focus:bg-transparent',
                        'relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:bg-elto-gold after:transition-[width] after:duration-200 after:motion-reduce:transition-none',
                        isActive
                          ? 'text-elto-gold after:w-full'
                          : 'text-white/60 hover:text-white after:w-0 hover:after:w-full'
                      )}
                      render={<Link href={href} />}
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* ---- Right Actions ---- */}
          <div className="flex items-center gap-4 shrink-0">

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center p-1.5 text-white/55 transition-colors duration-150 motion-reduce:transition-none hover:text-white"
              aria-label={
                cartCount > 0
                  ? `View basket, ${cartCount} items`
                  : 'View basket'
              }
            >
              <ShoppingBag size={21} strokeWidth={1.75} aria-hidden="true" />
              {mounted && cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 -right-1 bg-elto-gold text-elto-dark text-[10px] font-semibold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 leading-none"
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login (desktop) */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-[13px] font-medium tracking-[0.3px] text-white/55 hover:text-white hover:bg-transparent"
              render={<Link href="/auth/login" />}
            >
              Login
            </Button>

            {/* Sign Up (desktop) */}
            <Button
              size="sm"
              className="hidden md:inline-flex text-[13px] font-semibold tracking-[0.3px] text-elto-dark gold-gradient rounded-full px-6 py-2 h-auto border-0 shadow-md shadow-elto-gold/25 hover:shadow-lg hover:shadow-elto-gold/35 hover:-translate-y-px motion-reduce:transform-none motion-reduce:transition-none hover:bg-transparent transition-[transform,box-shadow] duration-150"
              render={<Link href="/auth/signup" />}
            >
              Sign Up
            </Button>

            {/* Hamburger (mobile) */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="md:hidden p-1.5 text-white/70 hover:text-white"
                aria-label="Open menu"
                render={<Button variant="ghost" size="icon" />}
              >
                <Menu size={22} strokeWidth={1.75} />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-elto-dark border-white/10 w-[280px] sm:max-w-[280px] p-0"
                showCloseButton={false}
              >
                {/* Mobile header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                  <SheetTitle className="font-display text-lg font-bold tracking-[2px] text-elto-gold">
                    ELTO
                  </SheetTitle>
                  <SheetClose
                    className="text-white/40 hover:text-white text-sm"
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </SheetClose>
                </div>

                <Separator className="bg-white/8" />

                {/* Mobile nav links */}
                <div className="flex flex-col py-2">
                  {NAV_LINKS.map(({ label, href }) => {
                    const isActive = pathname.startsWith(href)
                    return (
                      <SheetClose key={href} render={<Link href={href} />}>
                        <span
                          className={cn(
                            'block text-[15px] font-normal px-6 py-4 border-b border-white/[0.07] transition-colors duration-150 motion-reduce:transition-none hover:text-white hover:bg-white/[0.03]',
                            isActive ? 'text-elto-gold' : 'text-white/70'
                          )}
                        >
                          {label}
                        </span>
                      </SheetClose>
                    )
                  })}
                </div>

                {/* Mobile auth actions */}
                <div className="px-6 py-5 mt-auto flex flex-col gap-3">
                  <SheetClose
                    render={<Link href="/auth/signup" />}
                    className="block text-center text-[15px] font-semibold text-elto-dark gold-gradient rounded-full py-3.5 no-underline"
                  >
                    Sign Up
                  </SheetClose>
                  <SheetClose
                    render={<Link href="/auth/login" />}
                    className="block text-center text-[13px] text-white/45 hover:text-white/70 no-underline"
                  >
                    Already have an account? Login
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </nav>
    </header>
  )
}
