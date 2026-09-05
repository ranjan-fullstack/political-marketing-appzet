import { ArrowRight } from 'lucide-react'
import { insights } from '../data/content'
import Reveal from './Reveal'

export default function Insights() {
  return (
    <section id="insights" className="bg-[#F4F8F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
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
              className="group flex flex-col rounded-2xl border border-green-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-900/5 text-green-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-green-700">
                {tag}
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink-900">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                {excerpt}
              </p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors group-hover:text-gold-500">
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
