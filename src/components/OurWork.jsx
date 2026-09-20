import { ArrowUpRight } from 'lucide-react'
import { workItems } from '../data/content'
import Reveal from './Reveal'

const grads = [
  'from-fuchsia-600 via-purple-700 to-indigo-800',
  'from-orange-500 via-rose-600 to-pink-700',
  'from-emerald-500 via-teal-600 to-cyan-700',
]

export default function OurWork() {
  return (
    <section id="work" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
            Our Work
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Campaigns built on results, not guesswork
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {workItems.map(({ icon: Icon, tag, title, result }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className={`group relative overflow-hidden gradient-bg-anim rounded-2xl bg-linear-to-br ${grads[i % 3]} p-7 transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 85% 0%, rgba(242,183,5,0.18), transparent 50%)',
                }}
              />
              <div className="relative flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="h-5 w-5 text-gold-400" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition-colors group-hover:text-gold-400" />
              </div>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-wide text-gold-300/80">
                {tag}
              </p>
              <h3 className="relative mt-2 font-heading text-lg font-bold text-white">
                {title}
              </h3>
              <p className="relative mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-gold-400">
                {result}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
