import { parties } from '../data/content'
import Reveal from './Reveal'

// Brand-inspired colour pairs per party (same order as `parties` in content.js).
const colors = [
  ['#16a34a', '#86efac'], // BJD
  ['#ff7a00', '#ffd23f'], // BJP
  ['#0ea5e9', '#6366f1'], // INC
  ['#0284c7', '#22d3ee'], // AAP
  ['#ef4444', '#fb923c'], // CPI
  ['#dc2626', '#f43f5e'], // CPI(M)
  ['#15803d', '#a3e635'], // JD(U)
  ['#0d9488', '#38bdf8'], // NCP
]

export default function Parties() {
  return (
    <section id="parties" className="bg-linear-to-b from-[#F7FAF8] to-pink-50 pb-20 pt-14 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
            Political Landscape
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Political Parties in Odisha
          </h2>
          <p className="mt-4 text-balance text-base text-ink-600">
            We understand the strategy, symbols and voter base behind every
            major party contesting across Odisha&apos;s 30 districts.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-4 gap-4 sm:gap-6 md:grid-cols-8">
          {parties.map(({ symbol, name, full }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div
                className="party-card group flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm sm:p-5"
                style={{ '--c1': colors[i % 8][0], '--c2': colors[i % 8][1], '--i': i }}
              >
                <span className="party-badge relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16" title={full}>
                  <span className="party-ring absolute -inset-[3px] rounded-full" aria-hidden="true" />
                  <span className="party-glow absolute -inset-1 rounded-full blur-md" aria-hidden="true" />
                  <span className="party-face relative flex h-full w-full items-center justify-center rounded-full bg-white text-2xl sm:text-3xl">
                    <span className="party-symbol">{symbol}</span>
                  </span>
                </span>
                <span className="party-name text-xs font-bold sm:text-sm">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
