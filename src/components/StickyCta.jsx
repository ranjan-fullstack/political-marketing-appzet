export default function StickyCta({ hidden }) {
  return (
    <div
      inert={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-green-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <a href="#contact" className="btn btn-primary w-full">
        Book a Strategy Call
      </a>
    </div>
  )
}
