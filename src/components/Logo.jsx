// Animated brand mark: a rotating rainbow ring around a gradient "A" tile,
// with a shine sweep and a colour-shifting tagline. Animations are defined in
// index.css (logo-*) and switch off with prefers-reduced-motion.
export default function Logo({ compact = false, showName = true, size = 'md' }) {
  const box = size === 'sm' ? 'h-10 w-10 text-base' : 'h-12 w-12 text-2xl'

  return (
    <span className="flex items-center gap-3">
      <span className={`logo-mark relative flex shrink-0 items-center justify-center ${box}`}>
        <span className="logo-ring absolute -inset-[3px] rounded-[14px]" aria-hidden="true" />
        <span className="logo-glow absolute -inset-1 rounded-2xl blur-md" aria-hidden="true" />
        <span className="logo-tile relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-green-950">
          <span className="logo-letter font-heading font-extrabold">A</span>
          <span className="logo-shine absolute inset-y-0 left-0 w-1/2" aria-hidden="true" />
        </span>
      </span>

      {showName && (
        <span className="flex flex-col leading-tight">
          <span className="font-heading text-base font-bold text-white sm:text-lg">
            {compact ? 'Appzet' : 'Appzet Political Marketing Agency'}
          </span>
          {!compact && (
            <span className="gradient-text-anim text-[11px] font-semibold tracking-wide">
              Strategy | Communication | Impact
            </span>
          )}
        </span>
      )}
    </span>
  )
}
