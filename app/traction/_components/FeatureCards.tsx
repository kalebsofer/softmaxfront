import { tractionLanding } from '@/content/copy';
import { PROGRESS_GRADIENT_ID } from './Ring';

const { cards } = tractionLanding;

/**
 * The four frosted feature cards. Desktop parks one in each corner of the
 * hero; the phone layout packs them into a 2x2 grid, with less padding and
 * the momentum strip and widget tile dropped from the two lower cards.
 */

type Variant = 'desktop' | 'mobile';

type CardProps = {
  variant: Variant;
  kicker: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  /** Desktop only: staggers the float so the cards do not bob in unison. */
  floatDelay?: string;
};

function Card({ variant, kicker, title, children, className = '', floatDelay }: CardProps) {
  const desktop = variant === 'desktop';
  return (
    <div
      className={`tl-glass box-border ${
        desktop
          ? 'tl-float w-[270px] min-h-[158px] rounded-[20px] px-[22px] py-5'
          : 'rounded-2xl px-[13px] py-3'
      } ${className}`}
      style={floatDelay ? ({ '--tl-float-delay': floatDelay } as React.CSSProperties) : undefined}
    >
      <div
        className={`font-bold uppercase tracking-[0.1em] text-tl-accent ${
          desktop ? 'text-[10.5px]' : 'text-[9.5px]'
        }`}
      >
        {kicker}
      </div>
      <div
        className={`font-bold ${
          desktop
            ? 'mt-2 text-lg leading-[1.2] tracking-[-0.02em]'
            : 'mt-[7px] text-[13.5px] leading-[1.25] tracking-[-0.015em]'
        }`}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

/* Member avatars for the group card, as initials on the progress palette. */
const AVATAR_TONES = [
  'bg-[#f2bac9] text-tl-fg',
  'bg-[#b8dca7] text-tl-fg',
  'bg-[#1b998b] text-white',
];

function MemberStack({ variant }: { variant: Variant }) {
  const desktop = variant === 'desktop';
  const size = desktop ? 'w-[26px] h-[26px] text-[10px]' : 'w-[22px] h-[22px] text-[9px]';
  const overlap = desktop ? '-ml-[9px]' : '-ml-2';
  const circle = `${size} rounded-full flex items-center justify-center font-semibold leading-none shadow-[0_0_0_2px_var(--tl-canvas)]`;
  return (
    <div
      className={`flex items-center ${desktop ? 'mt-3' : 'mt-[9px]'}`}
      aria-label={`${cards.groups.members.map((m) => m.name).join(', ')} and 2 more`}
    >
      {cards.groups.members.map((member, i) => (
        <span
          key={member.name}
          className={`${circle} ${AVATAR_TONES[i]} ${i === 0 ? '' : overlap}`}
          aria-hidden="true"
        >
          {member.initial}
        </span>
      ))}
      <span className={`${circle} ${overlap} bg-tl-fg text-white`} aria-hidden="true">
        {cards.groups.more}
      </span>
    </div>
  );
}

/* Two weeks of daily completion, on the progress palette. */
const HEATMAP = [
  '#f2bac9', '#dfc5be', '#a4e79c', '#1b998b', '#1b998b', '#b8dca7', '#1b998b',
  '#1b998b', '#cbd0b3', '#1b998b', '#a4e79c', '#1b998b', '#1b998b', '#1b998b',
];

function Heatmap({ variant }: { variant: Variant }) {
  const desktop = variant === 'desktop';
  return (
    <div
      className={`grid grid-cols-7 ${desktop ? 'mt-3 gap-1.5' : 'mt-[9px] gap-1'}`}
      aria-hidden="true"
    >
      {HEATMAP.map((color, i) => (
        <span
          key={i}
          className={`aspect-square ${desktop ? 'rounded-md' : 'rounded-[3px]'}`}
          style={{ background: color }}
        />
      ))}
    </div>
  );
}

function WidgetTile() {
  return (
    <div className="flex-none w-[62px] h-[62px] rounded-2xl bg-tl-fg flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="5" />
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke={`url(#${PROGRESS_GRADIENT_ID})`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="94"
          strokeDashoffset="24"
          transform="rotate(-90 20 20)"
        />
      </svg>
    </div>
  );
}

export function GroupsCard({ variant, className }: { variant: Variant; className?: string }) {
  return (
    <Card variant={variant} kicker={cards.groups.kicker} title={cards.groups.title} className={className}>
      <MemberStack variant={variant} />
      {variant === 'desktop' && (
        <div className="mt-2.5 text-[12.5px] leading-[1.45] text-tl-muted">{cards.groups.body}</div>
      )}
    </Card>
  );
}

export function MomentumCard({ variant, className }: { variant: Variant; className?: string }) {
  const desktop = variant === 'desktop';
  return (
    <Card
      variant={variant}
      kicker={cards.momentum.kicker}
      title={desktop ? cards.momentum.title : cards.momentum.titleShort}
      className={className}
      floatDelay="1.6s"
    >
      <Heatmap variant={variant} />
    </Card>
  );
}

export function WidgetCard({ variant, className }: { variant: Variant; className?: string }) {
  if (variant === 'mobile') {
    return (
      <Card variant={variant} kicker={cards.widget.kicker} title={cards.widget.title} className={className} />
    );
  }
  return (
    <div
      className={`tl-glass tl-float box-border w-[270px] rounded-[20px] px-[22px] py-5 ${className ?? ''}`}
      style={{ '--tl-float-delay': '0.8s' } as React.CSSProperties}
    >
      <div className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-tl-accent">
        {cards.widget.kicker}
      </div>
      <div className="mt-3 flex items-center gap-3.5">
        <WidgetTile />
        <div className="font-bold text-lg leading-[1.2] tracking-[-0.02em]">
          {cards.widget.title}
        </div>
      </div>
    </div>
  );
}

export function SyncCard({ variant, className }: { variant: Variant; className?: string }) {
  const desktop = variant === 'desktop';
  return (
    <Card
      variant={variant}
      kicker={cards.sync.kicker}
      title={desktop ? cards.sync.title : cards.sync.titleShort}
      className={className}
      floatDelay="2.4s"
    >
      {desktop && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Synced metrics">
          {cards.sync.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full bg-tl-chip-bg px-[11px] py-1.5 text-[11.5px] font-medium leading-none text-tl-chip-fg"
            >
              {chip}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
