import { audiences, clientLogos } from '../data/content'
import Reveal from './Reveal'

export default function TrustStrip() {
  return (
    <section aria-labelledby="serve-heading" className="border-b border-green-900/10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 id="serve-heading" className="eyebrow text-center text-green-700">
            Who we support
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {audiences.map(({ icon: Icon, label, note }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="icon-chip">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-900">{label}</span>
                  <span className="block text-xs text-ink-600">{note}</span>
                </span>
              </li>
            ))}
          </ul>

          {clientLogos.length > 0 && (
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-green-900/10 pt-8">
              {clientLogos.map((logo) => (
                <li key={logo.name}>
                  <img src={logo.src} alt={logo.name} loading="lazy" className="h-9 w-auto opacity-80" />
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}
