import { services } from '../data/content'
import Reveal from './Reveal'

const palette = [
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-400',
  'from-fuchsia-500 to-purple-500',
  'from-sky-500 to-blue-600',
  'from-rose-500 to-red-500',
  'from-lime-500 to-green-600',
]

export default function Services() {
  return (
    <section id="services" className="bg-linear-to-b from-[#F4F8F5] via-purple-50 to-orange-50 py-20 sm:py-28">
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
              className="group rounded-2xl border border-green-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-xl hover:shadow-purple-500/10"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${palette[i % palette.length]} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                <Icon className="h-5 w-5 text-white" />
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
