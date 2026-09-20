import { ArrowRight } from 'lucide-react'
import { insights } from '../data/content'
import Reveal from './Reveal'

const accents = [
  { icon: 'from-violet-500 to-purple-600', text: 'text-violet-600', bar: 'from-violet-500 to-fuchsia-500' },
  { icon: 'from-emerald-500 to-teal-500', text: 'text-emerald-600', bar: 'from-emerald-500 to-cyan-500' },
  { icon: 'from-orange-500 to-rose-500', text: 'text-orange-600', bar: 'from-orange-500 to-pink-500' },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-linear-to-b from-pink-50 via-white to-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-pink-600">
            Insights
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Political communication &amp; campaign strategy
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {insights.map(({ icon: Icon, tag, title, excerpt }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <span className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${accents[i % 3].bar}`} />
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${accents[i % 3].icon} text-white shadow-md`}>
                <Icon className="h-5 w-5" />
              </span>
              <p className={`mt-5 text-xs font-semibold uppercase tracking-wide ${accents[i % 3].text}`}>
                {tag}
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink-900">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                {excerpt}
              </p>
              <span className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${accents[i % 3].text}`}>
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
