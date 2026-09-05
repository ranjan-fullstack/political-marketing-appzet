import { services } from '../data/content'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="bg-[#F4F8F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
            Services
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            End-to-end campaign services
          </h2>
          <p className="mt-4 text-balance text-base text-ink-600">
            Every discipline your campaign needs, coordinated under one team
            instead of scattered across vendors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-green-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-900 transition-colors group-hover:bg-gold-500">
                <Icon className="h-5 w-5 text-gold-400 group-hover:text-green-950" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
