import { aboutPoints } from '../data/content'
import Reveal from './Reveal'

// Colour pairs per card (same order as `aboutPoints` in content.js).
const colors = [
  ['#0ea5e9', '#6366f1'], // Data-Driven Approach
  ['#ff7a00', '#ec4899'], // Political Strategy
  ['#10b981', '#22d3ee'], // Communication & Creative
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="blob animate-float-slow -right-24 top-10 h-72 w-72 bg-orange-300/30" />
      <div className="blob animate-float-alt -left-24 bottom-0 h-72 w-72 bg-sky-300/30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-orange-600">
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
            <Reveal key={title} delay={i * 100}>
              <div
                className="party-card about-card group h-full rounded-2xl border border-black/5 bg-white p-7 shadow-md"
                style={{ '--c1': colors[i % 3][0], '--c2': colors[i % 3][1], '--i': i }}
              >
                <span className="relative flex h-14 w-14">
                  <span className="party-glow absolute -inset-1 rounded-2xl blur-md" aria-hidden="true" />
                  <span className="relative block h-full w-full overflow-hidden rounded-2xl p-[3px]">
                    <span className="party-ring absolute -inset-full" aria-hidden="true" />
                    <span
                      className="relative flex h-full w-full items-center justify-center rounded-[13px] text-white"
                      style={{ backgroundImage: 'linear-gradient(135deg, var(--c1), var(--c2))' }}
                    >
                      <Icon className="party-symbol h-6 w-6" />
                    </span>
                  </span>
                </span>
                <h3 className="party-name mt-5 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
