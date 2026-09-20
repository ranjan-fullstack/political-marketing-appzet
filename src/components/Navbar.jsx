import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Navbar({ onOpenMenu, activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-green-950/95 shadow-lg shadow-black/20 backdrop-blur' : 'bg-linear-to-b from-green-950/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#home" aria-label="Appzet Political Marketing Agency – home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gold-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-green-950 shadow-md shadow-gold-500/25 transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
          >
            Get a Free Consultation
            <span aria-hidden>&rarr;</span>
          </a>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
