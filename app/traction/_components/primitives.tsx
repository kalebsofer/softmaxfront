import type { CSSProperties, ReactNode } from 'react';
import { tractionLanding as copy } from '@/content/copy';

/** Feather glyphs, the app's in-content icon set, drawn at stroke 2. */
const ICONS = {
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  trending: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </>
  ),
  chart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </>
  ),
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  menu: (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  close: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`flex-none fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] ${className}`}
    >
      {ICONS[name]}
    </svg>
  );
}

/**
 * The double chevron mark in brand teal, beside the Satoshi wordmark. The
 * mark is sized in em from the wordmark's font size and sits on its baseline,
 * so it stands as tall as the letters.
 */
export function Brand() {
  return (
    <a
      href="#top"
      aria-label={copy.brandMarkAria}
      className="flex min-h-11 items-center font-satoshi text-[22px] font-bold leading-7 text-tl-text"
    >
      <span className="flex items-baseline gap-[0.3em]">
        <svg viewBox="0 0 220 276" aria-hidden="true" className="h-[0.82em] w-auto text-tl-primary">
        {/* The mark's own geometry, from traction-lockup-horizontal.svg. */}
        <g fill="none" stroke="currentColor" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 102 L110 38 L190 102" />
          <path d="M30 238 L110 174 L190 238" />
        </g>
        </svg>
        {copy.brand}
      </span>
    </a>
  );
}

export const wrap = 'mx-auto w-full max-w-[1120px] px-3.5 md:px-10';
export const section = `${wrap} scroll-mt-4 py-10 md:py-16`;
export const titleSection =
  'm-0 font-satoshi text-[30px] font-bold leading-[1.1] tracking-[-0.01em] text-tl-text-display md:text-[40px]';
export const lead = 'm-0 text-base leading-6 text-tl-text-secondary md:text-lg md:leading-7';
export const body = 'm-0 text-base leading-6 text-tl-text-secondary';
export const small = 'text-sm leading-5 text-tl-text-secondary';
export const h3 = 'm-0 text-xl font-medium leading-[26px]';
export const card = 'rounded-[20px] border border-tl-divider-subtle bg-tl-card p-3.5 md:p-6';

/** The one section label: 11/14, tracked, uppercase. */
export function Eyebrow({ children, inCard }: { children: ReactNode; inCard?: boolean }) {
  return (
    <span
      className={`text-[11px] font-medium uppercase leading-[14px] tracking-[0.66px] ${
        inCard ? 'text-tl-text-supporting' : 'text-tl-text-muted'
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Longer text under the title, set by the section. */
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-6 flex max-w-[720px] flex-col items-center gap-2.5 text-center md:mb-12 md:gap-3">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={titleSection}>{title}</h2>
      {intro && <p className={lead}>{intro}</p>}
      {children}
    </div>
  );
}

/** A milestone in a gold wash; `next` draws one not yet earned. */
export function GoldChip({ children, next }: { children: ReactNode; next?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold leading-4 ${
        next
          ? 'border border-dashed border-tl-divider font-medium text-tl-text-secondary'
          : 'tl-tint text-tl-text'
      }`}
      style={next ? undefined : ({ '--c': 'var(--tl-gold)' } as CSSProperties)}
    >
      <Icon name="award" className="h-[13px] w-[13px] text-tl-band-fill-dedicated" />
      {children}
    </span>
  );
}

/** A momentum band as a pill: a dot in the band colour over its wash. */
export function MomentumPill({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span
      className="tl-tint inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-semibold leading-5 text-tl-text"
      style={{ '--c': color } as CSSProperties}
    >
      <i className="h-2 w-2 rounded-full bg-[var(--c)]" />
      {children}
    </span>
  );
}

export const seriesColor = (series: number) => `var(--tl-series-${series})`;

/** A member's initial ringed in their series colour. */
export function Avatar({ initial, series }: { initial: string; series: number }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-semibold leading-4 text-tl-text"
      style={{
        background: `color-mix(in srgb, ${seriesColor(series)} 22%, transparent)`,
        boxShadow: `inset 0 0 0 2px ${seriesColor(series)}`,
      }}
    >
      {initial}
    </span>
  );
}
