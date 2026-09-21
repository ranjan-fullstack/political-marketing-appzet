import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import Reveal from './Reveal'
import { SectionHeader } from './ui'

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Questions we are often asked" />

        <Reveal className="mt-10 divide-y divide-green-900/10 rounded-2xl border border-green-900/10">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-5 py-1 sm:px-6">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-green-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-600">{a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
