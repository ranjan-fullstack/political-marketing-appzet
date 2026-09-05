import { useEffect, useRef, useState } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { navLinks } from '../data/content'

export default function QuickNav({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div
      ref={ref}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <div className="relative flex flex-col items-end">
        {open && (
          <div className="absolute bottom-0 right-14 w-52 rounded-2xl border border-white/10 bg-green-950/95 p-2 shadow-2xl backdrop-blur">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    onNavigate(link.href)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-gold-400' : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-gold-500' : 'bg-white/30'}`}
                  />
                  {link.label}
                </button>
              )
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Quick navigation"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-green-950/70 text-gold-400 shadow-lg backdrop-blur transition-colors hover:border-gold-500/60 hover:bg-green-900"
        >
          <EllipsisVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
