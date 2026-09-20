import { useEffect, useState } from 'react'
import { Play, X, Vote, Megaphone, Users } from 'lucide-react'
import Reveal from './Reveal'

// Drop your own .mp4 files into /public/videos using these names.
const videos = [
  {
    src: '/videos/campaign-showreel.mp4',
    title: 'Campaign Showreel',
    tag: 'Featured · 2:10',
    icon: Megaphone,
    grad: 'from-fuchsia-600 via-purple-700 to-indigo-900',
  },
  {
    src: '/videos/rally-highlights.mp4',
    title: 'Rally Highlights',
    tag: 'Ground Campaign · 1:24',
    icon: Users,
    grad: 'from-orange-500 via-rose-600 to-pink-800',
  },
  {
    src: '/videos/voter-awareness.mp4',
    title: 'Voter Awareness Film',
    tag: 'Digital Campaign · 0:58',
    icon: Vote,
    grad: 'from-emerald-500 via-teal-600 to-cyan-800',
  },
]

function VideoCard({ video, featured, onPlay }) {
  const { icon: Icon } = video
  const [failed, setFailed] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
        featured ? 'aspect-video lg:row-span-2 lg:aspect-auto lg:min-h-[26rem]' : 'aspect-video'
      }`}
    >
      <div className={`gradient-bg-anim absolute inset-0 bg-linear-to-br ${video.grad}`} />
      {!failed && (
        <video
          src={video.src}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <Icon className="animate-bob absolute right-6 top-6 h-12 w-12 text-white/25" />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-white/60" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-rose-600 shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-300">{video.tag}</p>
        <h3 className="mt-1 font-heading text-lg font-bold text-white sm:text-xl">{video.title}</h3>
      </div>
    </button>
  )
}

export default function VideoShowcase() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section
      id="video"
      className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-purple-950 to-green-950 py-20 sm:py-28"
    >
      <div className="blob animate-float-slow -left-24 top-0 h-80 w-80 bg-fuchsia-500/30" />
      <div className="blob animate-float-alt -right-20 bottom-0 h-96 w-96 bg-orange-500/25" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-xs font-semibold uppercase text-gold-300">
            Watch Our Campaigns
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-white sm:text-4xl">
            See political marketing <span className="gradient-text-anim">in action</span>
          </h2>
          <p className="mt-4 text-balance text-base text-white/70">
            Rallies, voter awareness films and digital campaigns — a look at the
            stories we help leaders tell.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {videos.map((video, i) => (
            <Reveal key={video.title} delay={i * 120} className={i === 0 ? 'lg:row-span-2' : ''}>
              <VideoCard video={video} featured={i === 0} onPlay={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/25"
            onClick={() => setActive(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <video
            src={active.src}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-full max-w-4xl rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
