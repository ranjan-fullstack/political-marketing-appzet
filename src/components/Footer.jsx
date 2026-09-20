import { navLinks, services } from '../data/content'
import Logo from './Logo'

function XIcon(props) {
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-purple-950 to-green-950 pt-16">
      <div className="gradient-bg-anim absolute inset-x-0 top-0 h-1 bg-linear-to-r from-gold-400 via-pink-500 to-sky-400" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" aria-label="Appzet Political Marketing Agency – home">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Strategic, data-driven and result-oriented political campaign
              solutions for leaders, parties and organizations across Odisha.
            </p>
            <div className="mt-5 flex gap-3">
              {[XIcon, FacebookIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold-500 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-gold-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Appzet Political Marketing Agency. All rights reserved.</p>
          <p>Bhubaneswar, Odisha, India</p>
        </div>
      </div>
    </footer>
  )
}
