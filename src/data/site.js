// Single place for contact details and integrations. Values come from
// environment variables (see .env.example) so nothing private is hard-coded.
// Anything left empty is simply not shown on the site.
const env = import.meta.env

const digits = (value) => (value || '').replace(/\D/g, '')

export const site = {
  name: 'Appzet',
  legalName: 'Appzet Political Marketing Agency',
  url: env.VITE_SITE_URL || 'https://appzet.com',
  city: 'Bhubaneswar, Odisha, India',
  // TODO: confirm this mailbox exists before launch.
  email: env.VITE_CONTACT_EMAIL || 'hello@appzet.com',
  phone: env.VITE_CONTACT_PHONE || '',
  whatsapp: digits(env.VITE_WHATSAPP_NUMBER),
  // Public form-handler URL (e.g. Formspree). Not a secret. If empty, the
  // contact form falls back to opening the visitor's email app.
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  social: {
    x: env.VITE_SOCIAL_X || '',
    facebook: env.VITE_SOCIAL_FACEBOOK || '',
    instagram: env.VITE_SOCIAL_INSTAGRAM || '',
    linkedin: env.VITE_SOCIAL_LINKEDIN || '',
  },
}

export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      'Hello Appzet, I would like to discuss a campaign.',
    )}`
  : ''

// Where "Talk to Our Team" goes: WhatsApp, then phone, then email.
export const talkHref = whatsappHref
  ? whatsappHref
  : site.phone
    ? `tel:${site.phone.replace(/[^\d+]/g, '')}`
    : `mailto:${site.email}`
