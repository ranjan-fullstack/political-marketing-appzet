import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-green-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="section-eyebrow text-xs font-semibold uppercase text-gold-300">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s Build Your Next Campaign Strategy
          </h2>
          <p className="mt-4 max-w-md text-base text-white/60">
            Tell us about your constituency and timeline — our strategy team
            responds within one business day.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 text-white/80 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-4 w-4 text-gold-400" />
              </span>
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <a
              href="mailto:hello@appzet.com"
              className="flex items-center gap-4 text-white/80 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-4 w-4 text-gold-400" />
              </span>
              <span className="text-sm font-medium">hello@appzet.com</span>
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-4 w-4 text-gold-400" />
              </span>
              <span className="text-sm font-medium">Bhubaneswar, Odisha, India</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20">
                <Send className="h-5 w-5 text-gold-400" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                Message received
              </h3>
              <p className="mt-2 max-w-xs text-sm text-white/60">
                Thanks for reaching out — a member of our strategy team will
                contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. District Party Unit"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your campaign timeline and goals"
                  className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold-500"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-green-950 transition-colors hover:bg-gold-400"
              >
                Get a Free Consultation
                <span aria-hidden>&rarr;</span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
