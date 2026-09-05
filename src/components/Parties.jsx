import { parties } from '../data/content'
import Reveal from './Reveal'

export default function Parties() {
  return (
    <section id="parties" className="bg-[#F7FAF8] pb-20 pt-14 sm:pb-28 sm:pt-16">
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
            <Reveal
              key={name}
              delay={i * 60}
              className="flex flex-col items-center gap-3 rounded-2xl border border-green-900/10 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-5"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-950/5 text-2xl sm:h-16 sm:w-16 sm:text-3xl"
                title={full}
              >
                {symbol}
              </span>
              <span className="text-xs font-bold text-ink-900 sm:text-sm">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
