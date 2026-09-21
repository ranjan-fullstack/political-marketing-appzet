import { testimonials } from '../data/content'
import Reveal from './Reveal'
import { SectionHeader } from './ui'

// Renders nothing until real, permitted testimonials are added to content.js.
export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="What clients say" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="card h-full">
                <blockquote className="text-sm leading-relaxed text-ink-900">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-ink-900">{t.name}</span>
                  <span className="block text-ink-600">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
