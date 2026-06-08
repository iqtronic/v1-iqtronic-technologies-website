export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ''}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="3"
          className="stroke-current"
          strokeWidth="2"
        />
        <path
          d="M9 16h5l2-5 3 10 2-5h2"
          className="stroke-[var(--color-accent)]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-base font-semibold tracking-tight">
        IQtronic
        <span className="text-muted-foreground font-normal"> Technologies</span>
      </span>
    </span>
  )
}
