import { process } from '../data/content'
import Reveal from './Reveal'
import { SectionHeader } from './ui'

export default function Process() {
  return (
    <section id="process" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="A clear process from first call to final report"
          intro="You always know what happens next, what we need from you and what you will receive."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 80}>
              <div className="card h-full">
                <span className="font-heading text-4xl font-extrabold text-gold-500" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink-900">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.text}</p>
                <p className="mt-4 border-t border-green-900/10 pt-3 text-xs font-semibold text-green-700">
                  You receive: {step.output}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
