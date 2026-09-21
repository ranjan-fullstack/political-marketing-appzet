import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Reveal from './Reveal'

export function Logo({ compact = false, tagline = true }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500 font-heading text-xl font-extrabold text-green-950">
        A
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-base font-bold text-white sm:text-lg">
          {compact ? 'Appzet' : 'Appzet Political Marketing'}
        </span>
        {tagline && (
          <span className="hidden text-[11px] font-medium tracking-wide text-gold-300 sm:block">
            Strategy · Communication · Impact
          </span>
        )}
      </span>
    </span>
  )
}

export function SectionHeader({ eyebrow, title, intro, dark = false, align = 'center' }) {
  return (
    <Reveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <span className={`eyebrow ${dark ? 'text-gold-300' : 'text-green-700'}`}>{eyebrow}</span>
      <h2
        className={`mt-3 text-balance text-3xl font-extrabold leading-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-balance text-base ${dark ? 'text-white/75' : 'text-ink-600'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

// Accessible modal built on the native <dialog>: focus trap, Esc to close and
// focus restoration come from the browser.
export function Dialog({ open, onClose, label, wide = false, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      data-theme="dark"
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className={`m-auto max-h-[92vh] w-[calc(100%-1.5rem)] overflow-hidden rounded-2xl bg-transparent p-0 text-white backdrop:bg-black/80 ${
        wide ? 'max-w-4xl' : 'max-w-2xl'
      }`}
    >
      {open && (
        <div className="relative max-h-[92vh] overflow-y-auto rounded-2xl bg-green-950">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            <X className="h-5 w-5" />
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.2-9.3L1 2h7.3l5.1 6.7L18.9 2Zm-1.3 18h2l-6.4-8.5-1.7 2L17.6 20Z" />
    </svg>
  )
}
export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  )
}
export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}
export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 9h3v10H5V9Zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 9h2.9v1.4c.5-.9 1.6-1.6 3.1-1.6 3 0 3.6 2 3.6 4.6V19h-3v-5c0-1.2 0-2.6-1.6-2.6S13 12.700 13 14v5h-3V9Z" />
    </svg>
  )
}
