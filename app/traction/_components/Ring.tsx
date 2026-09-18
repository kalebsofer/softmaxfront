/**
 * The completion ring from the app, drawn as the hero backdrop. The gradient
 * is the app's progress palette; `PROGRESS_GRADIENT_ID` is defined once by
 * <ProgressGradient> so the widget mini ring can reuse it.
 */

export const PROGRESS_GRADIENT_ID = 'tl-progress-gradient';

export const PROGRESS_STOPS = [
  { offset: 0, color: '#f2bac9' },
  { offset: 0.25, color: '#dfc5be' },
  { offset: 0.5, color: '#cbd0b3' },
  { offset: 0.7, color: '#b8dca7' },
  { offset: 0.85, color: '#a4e79c' },
  { offset: 1, color: '#1b998b' },
] as const;

export function ProgressGradient() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id={PROGRESS_GRADIENT_ID} x1="0" y1="1" x2="1" y2="0">
          {PROGRESS_STOPS.map((stop) => (
            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
}

type RingProps = {
  /** Rendered size in px; the ring is square. */
  size: number;
  strokeWidth: number;
  /** Fraction of the circle the arc covers, drawn clockwise from 12 o'clock. */
  progress: number;
  className?: string;
};

/** A track with a gradient arc drawn over it, animated in on load. */
export default function Ring({ size, strokeWidth, progress, className = '' }: RingProps) {
  const center = size / 2;
  const radius = center - strokeWidth * 1.9;
  const circumference = 2 * Math.PI * radius;
  const style = {
    '--tl-ring-from': circumference * 0.68,
    '--tl-ring-to': circumference * (1 - progress),
  } as React.CSSProperties;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className={className} aria-hidden="true">
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="var(--tl-ring-track)"
        strokeWidth={strokeWidth}
      />
      <circle
        className="tl-ring-arc"
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={`url(#${PROGRESS_GRADIENT_ID})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        transform={`rotate(-90 ${center} ${center})`}
        style={style}
      />
    </svg>
  );
}
