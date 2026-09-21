import { ArrowLeft } from 'lucide-react'
import { site } from '../data/site'

const updated = 'September 2026'

const pages = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        h: 'What we collect',
        p: 'When you submit the contact form we collect the details you enter: name, organisation, phone, email, location, services of interest, timeline and message.',
      },
      {
        h: 'How we use it',
        p: 'We use these details only to respond to your enquiry and to discuss our services with you. We do not sell your information or use it to target voters.',
      },
      {
        h: 'Sharing',
        p: 'We do not share your enquiry with third parties except service providers that help us receive and store it (for example, our email and form-handling providers), who may process it on our behalf.',
      },
      {
        h: 'Retention and your choices',
        p: `We keep enquiry details only as long as needed to handle your request and our business records. To ask us to access, correct or delete your information, email ${site.email}.`,
      },
      {
        h: 'Our approach to data',
        p: 'We only message people who have opted in, and we do not buy, sell or misuse personal data.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    sections: [
      {
        h: 'Use of this website',
        p: 'This website provides general information about the services of Appzet Political Marketing Agency. Content is for information only and does not form an offer or contract.',
      },
      {
        h: 'No guarantee of outcomes',
        p: 'Any description of our services or approach is not a promise of electoral or campaign results.',
      },
      {
        h: 'Engagements',
        p: 'Any engagement with us is governed by a separate written agreement that sets out scope, fees and responsibilities.',
      },
      {
        h: 'Contact',
        p: `Questions about these terms can be sent to ${site.email}.`,
      },
    ],
  },
}

export default function LegalPage({ kind }) {
  const page = pages[kind]

  return (
    <main id="main" className="bg-white pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <a href="#home" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </a>
        <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">{page.title}</h1>
        <p className="mt-2 text-sm text-ink-600">Last updated: {updated}</p>
        {page.sections.map(({ h, p }) => (
          <section key={h} className="mt-8">
            <h2 className="text-xl font-bold text-ink-900">{h}</h2>
            <p className="mt-2 leading-relaxed text-ink-600">{p}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
