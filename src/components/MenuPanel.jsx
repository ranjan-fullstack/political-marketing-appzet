import { X } from 'lucide-react'
import { navLinks } from '../data/content'

function XSocialIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.2-9.3L1 2h7.3l5.1 6.7L18.9 2Zm-1.3 18h2l-6.4-8.5-1.7 2L17.6 20Z" />
    </svg>
  )
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function MenuPanel({ open, onClose, activeSection, onNavigate }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-green-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-[380px] flex-col bg-green-950 px-8 py-8 shadow-2xl transition-transform duration-300 sm:px-10 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 font-heading text-base font-extrabold text-green-950">
            A
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => onNavigate(link.href)}
                className={`rounded-lg px-3 py-2.5 text-left font-heading text-2xl font-bold transition-colors ${
                  isActive ? 'text-gold-400' : 'text-white hover:text-gold-300'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-green-950 transition-colors hover:bg-gold-400"
        >
          Get a Free Consultation
          <span aria-hidden>&rarr;</span>
        </a>

        <div className="mt-auto pt-10">
          <div className="flex gap-3">
            {[XSocialIcon, FacebookIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/40">
            © {new Date().getFullYear()} Appzet Political Marketing Agency.
            <br />
            All rights reserved.
          </p>
        </div>
      </aside>
    </>
  )
}
