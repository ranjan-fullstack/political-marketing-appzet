import { aboutPoints } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
            About Us
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            A strategic partner for campaigns across Odisha
          </h2>
          <p className="mt-4 text-balance text-base text-ink-600">
            Appzet Political Marketing Agency combines political strategy, data
            analytics, and creative communication into one coordinated team —
            built to help leaders and parties plan, launch and manage
            campaigns that actually reach voters.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {aboutPoints.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="rounded-2xl border border-green-900/10 bg-[#F7FAF8] p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900 text-gold-400">
                <Icon className="h-6 w-6" />
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
