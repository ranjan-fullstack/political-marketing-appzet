import { useEffect, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Reveal from './Reveal'

// Drop your own campaign photos into /public/images/gallery using these
// names (or update the paths below). Until then, each tile falls back to a
// branded placeholder so the layout still looks complete.
const photos = [
  { src: '/images/public.jpeg', caption: 'Public Rally, Bhubaneswar', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/gallery/door.jpeg', caption: 'Door-to-Door Outreach' },
  { src: '/images/gallery/war.jpeg', caption: 'Campaign War Room' },
  { src: '/images/gallery/vol.jpeg', caption: 'Volunteer Training' },
  { src: '/images/gallery/youth.jpeg', caption: 'Youth Convention' },
  { src: '/images/gallery/press.jpeg', caption: 'Press Conference', span: 'sm:col-span-2' },
  { src: '/images/gallery/booth.jpeg', caption: 'Booth-Level Management' },
]

const grads = [
  'from-fuchsia-600 via-purple-700 to-indigo-900',
  'from-orange-500 via-rose-600 to-pink-800',
  'from-emerald-500 via-teal-600 to-cyan-800',
  'from-sky-600 via-indigo-700 to-purple-900',
]

function PhotoTile({ photo, index, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative aspect-4/3 w-full overflow-hidden rounded-2xl text-left shadow-lg transition-transform duration-300 hover:-translate-y-1.5 ${photo.span ?? ''}`}
    >
      {!failed ? (
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className={`absolute inset-0 bg-linear-to-br ${grads[index % grads.length]}`}>
          <Camera className="absolute right-5 top-5 h-9 w-9 text-white/25" />
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white sm:text-base">
        {photo.caption}
      </p>
    </button>
  )
}

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = () => setActiveIndex(null)
  const step = (delta) =>
    setActiveIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const active = isOpen ? photos[activeIndex] : null

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-green-700">
            Photo Gallery
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Moments from the campaign trail
          </h2>
          <p className="mt-4 text-balance text-base text-slate-600">
            Rallies, war rooms and ground teams — snapshots from the campaigns
            we've helped run.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {photos.map((photo, i) => (
            <Reveal key={photo.caption} delay={i * 80} className={photo.span ?? ''}>
              <PhotoTile photo={photo} index={i} onOpen={setActiveIndex} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/25"
            onClick={close}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:left-5"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:right-5"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.caption}
              className="max-h-[75vh] w-full rounded-xl bg-black object-contain shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <figcaption className="mt-3 text-center text-sm font-semibold text-white/90">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
