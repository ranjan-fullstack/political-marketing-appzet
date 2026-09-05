import { ArrowRight, PlayCircle } from 'lucide-react'
import { heroFeatures } from '../data/content'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-green-950 pb-16 pt-24 sm:pb-28 sm:pt-32"
      >
        <div className="absolute inset-0">
          <img
            src="/images/temple.jpeg"
            alt=""
            className="h-full w-full object-cover object-[62%_center] sm:object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-950 via-green-950/80 to-green-950/20 sm:via-green-950/75 sm:to-green-950/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-xl lg:max-w-2xl">
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.4rem] lg:leading-[1.03]">
              Best{' '}
              <span className="bg-linear-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Political
              </span>
              <br />
              <span className="bg-linear-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Marketing
              </span>
              <br />
              Agency in Odisha
            </h1>

            <p className="mt-4 flex max-w-lg flex-wrap items-center gap-x-2.5 gap-y-1 text-balance text-sm font-semibold tracking-wide text-gold-300 drop-shadow-sm sm:mt-5 sm:text-lg lg:max-w-none lg:flex-nowrap lg:whitespace-nowrap">
              <span>Empowering Leaders</span>
              <span className="text-gold-300/40">│</span>
              <span>Engaging People</span>
              <span className="text-gold-300/40">│</span>
              <span>Building a Better Tomorrow</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="group flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold tracking-wide text-green-950 shadow-lg shadow-gold-500/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Let&apos;s Plan Your Next Win
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="flex items-center gap-2 rounded-full border border-white/40 bg-green-950/30 px-6 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur transition-colors hover:border-gold-400/60 hover:bg-white/10"
              >
                View Our Work
                <PlayCircle className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 sm:-mt-14 sm:px-8">
        <Reveal
          delay={150}
          className="grid grid-cols-3 gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/10 sm:gap-6 sm:p-6 lg:grid-cols-5"
        >
          {heroFeatures.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center lg:flex-row lg:gap-3 lg:text-left"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${color}`}
              >
                <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
              </span>
              <span className="text-[11px] font-semibold leading-tight text-ink-900 sm:text-xs lg:text-sm">
                {label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </>
  )
}
