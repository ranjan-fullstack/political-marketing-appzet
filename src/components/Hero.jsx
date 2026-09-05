import { ArrowRight, Leaf, PlayCircle } from 'lucide-react'
import { heroFeatures, heroStats } from '../data/content'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-green-950 pb-8 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src="/images/background-image.jpeg"
          alt=""
          className="h-full w-full object-cover object-right-top sm:object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-green-950 via-green-950/80 to-green-950/20 sm:via-green-950/75 sm:to-green-950/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="section-eyebrow rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase text-gold-300">
            People &nbsp;|&nbsp; Strategy &nbsp;|&nbsp; Victory
          </span>

          <h1 className="mt-5 text-balance font-heading text-[2.5rem] font-extrabold leading-[1.03] text-white drop-shadow-sm sm:text-5xl lg:text-[3.4rem]">
            Best <span className="text-gold-400">Political</span>
            <br />
            <span className="text-gold-400">Marketing</span>
            <br />
            Agency in Odisha
          </h1>

          <p className="mt-5 max-w-lg text-balance text-base font-semibold text-gold-300/90 sm:text-lg">
            Empowering Leaders. Engaging People. Building a Better Tomorrow.
          </p>

          <p className="mt-3 max-w-lg text-balance text-sm text-white/70 sm:text-base">
            Appzet Political Marketing Agency provides strategic, data-driven
            and result-oriented campaign solutions for political leaders,
            parties and organizations across Odisha.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex w-16 flex-col items-center text-center sm:w-20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-green-950/50 backdrop-blur">
                  <Icon className="h-5 w-5 text-gold-400" />
                </span>
                <span className="mt-2 text-[11px] font-medium leading-tight text-white/75">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-green-950 shadow-lg shadow-gold-500/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Let&apos;s Plan Your Next Win
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="flex items-center gap-2 rounded-full border border-white/40 bg-green-950/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              View Our Work
              <PlayCircle className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mt-10 w-full max-w-sm sm:hidden"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700/10">
              <Leaf className="h-4 w-4 text-green-700" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                Our Goal
              </p>
              <p className="text-xs font-medium leading-snug text-ink-900">
                A more informed, engaged and empowered Odisha.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="absolute bottom-[168px] right-5 hidden w-72 sm:right-8 sm:block"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700/10">
              <Leaf className="h-4 w-4 text-green-700" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                Our Goal
              </p>
              <p className="text-xs font-medium leading-snug text-ink-900">
                A more informed, engaged and empowered Odisha.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {heroStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-950/50 backdrop-blur">
                <Icon className="h-5 w-5 text-gold-400" />
              </span>
              <div>
                <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                  {value}
                </p>
                <p className="text-xs text-white/70">{label}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
            Ideas &nbsp;|&nbsp; People &nbsp;|&nbsp; Technology &nbsp;|&nbsp; A Stronger Odisha
          </p>
        </div>
      </div>
    </section>
  )
}
