import { talkHref } from '../data/site'
import Reveal from './Reveal'

export default function CtaBand() {
  const external = talkHref.startsWith('http')

  return (
    <section data-theme="dark" aria-labelledby="cta-heading" className="bg-green-900 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="cta-heading" className="text-balance text-3xl font-extrabold text-white sm:text-4xl">
          Planning a campaign? Let’s talk about it.
        </h2>
        <p className="mt-4 text-base text-white/80">
          Tell us your goals and timeline. We will come back with a clear scope and next steps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-primary !px-7 !py-4 text-base">
            Book a Strategy Call
          </a>
          <a
            href={talkHref}
            className="btn btn-outline-dark"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            Talk to Our Team
          </a>
        </div>
      </Reveal>
    </section>
  )
}
