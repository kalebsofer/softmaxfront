import type { CSSProperties, ReactNode } from 'react';
import { tractionLanding as copy } from '@/content/copy';
import { Pop, Reveal } from './Motion';
import {
  Avatar,
  Eyebrow,
  GoldChip,
  Icon,
  type IconName,
  MomentumPill,
  SectionHead,
  body,
  card,
  h3,
  lead,
  section,
  seriesColor,
  small,
} from './primitives';

const { why } = copy;

/**
 * The last 14 days as drawn in the app: d done, p partly done, r rest day,
 * e missed, t today (still open).
 */
const FORTNIGHT = 'ddpdrddeddpddt';

/** 26 weeks of the year, a column per week: 0 none to 4 every session. */
const YEAR =
  '10220102200102102111122120102020031221102312110002212231311132000313101332232233323221323102321324223312234123304223241333432223424402432224442424223434303233424433323244423203424432';

/**
 * The app's completion colour (completionColor): the pink-to-teal ramp at a
 * share of the plan done, 0 to 1, between its six stops. A planned day fills
 * at 85%, as the app's grids draw it, so a miss sits at the ramp's pink foot.
 */
function completionFill(share: number): CSSProperties {
  const at = Math.min(Math.max(share, 0), 1) * 5;
  const stop = Math.min(Math.floor(at), 4);
  const next = Math.round((at - stop) * 100);
  const color = `color-mix(in srgb, var(--tl-completion-${stop}), var(--tl-completion-${stop + 1}) ${next}%)`;
  return { background: `color-mix(in srgb, ${color} 85%, transparent)` };
}

/** A fortnight day's share of sessions done; rest and today draw their own forms. */
const FORTNIGHT_SHARE: Record<string, number> = { d: 1, p: 0.5, e: 0 };

const FORTNIGHT_CELL: Record<string, string> = {
  r: 'tl-rest',
  t: 'shadow-[inset_0_0_0_1.5px_var(--tl-text-muted)]',
};

/** Pieces of the milestone confetti: left, top, rotation and colour. */
const CONFETTI: [string, number, number, string][] = [
  ['6%', 10, 20, 'var(--tl-primary)'],
  ['16%', 34, -30, 'var(--tl-peach)'],
  ['27%', 6, 45, 'var(--tl-gold)'],
  ['38%', 30, 10, 'var(--tl-series-2)'],
  ['50%', 12, -20, 'var(--tl-peach)'],
  ['61%', 36, 35, 'var(--tl-primary)'],
  ['72%', 8, -40, 'var(--tl-gold)'],
  ['83%', 28, 15, 'var(--tl-series-3)'],
  ['92%', 10, -10, 'var(--tl-primary)'],
];

const SPAN = { 2: 'lg:col-span-2', 3: 'lg:col-span-3', 4: 'lg:col-span-4' } as const;

/** Content below a feature's copy, pinned to the bottom of its card. */
function Demo({ children }: { children: ReactNode }) {
  return <div className="mt-auto flex flex-col gap-3 pt-2">{children}</div>;
}

function Feature({
  icon,
  title,
  text,
  span,
  order,
  children,
}: {
  icon: IconName;
  title: string;
  text: string;
  span: keyof typeof SPAN;
  order: number;
  children: ReactNode;
}) {
  return (
    <Reveal order={order} className={SPAN[span]}>
      <article className={`${card} flex h-full flex-col gap-3`}>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tl-primary-soft text-tl-primary">
          <Icon name={icon} />
        </span>
        <h3 className={h3}>{title}</h3>
        <p className={`${body} text-pretty`}>{text}</p>
        <Demo>{children}</Demo>
      </article>
    </Reveal>
  );
}

type HabitRow = (typeof why.habits.rows)[number];

/**
 * A row's end, drawn as the app's Home row does: a limit fills as the
 * allowance is used, a logged or resisted day is a filled check.
 */
function HabitMark({ row }: { row: HabitRow }) {
  const { used, limit } = row;
  if (used !== undefined && limit !== undefined) {
    return (
      <span
        role="img"
        aria-label={row.aria}
        className="relative flex h-7 w-[60px] flex-none items-center justify-center overflow-hidden rounded-full border-2 border-tl-primary text-xs font-semibold leading-4"
      >
        <i className="absolute inset-y-0 left-0 bg-tl-primary opacity-30" style={{ width: `${(used / limit) * 100}%` }} />
        <span className="relative">
          {used}/{limit}
        </span>
      </span>
    );
  }
  return (
    <span
      role="img"
      aria-label={row.aria}
      className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-tl-primary bg-tl-primary text-tl-text-inverse"
    >
      <Icon name="check" className="h-4 w-4 stroke-[3]" />
    </span>
  );
}

function HabitRows() {
  const { habits } = why;
  return (
    <div className="flex flex-col gap-2">
      <div
        role="img"
        aria-label={habits.toggleAria}
        className="grid grid-cols-2 rounded-xl bg-tl-ring-track p-1 text-sm font-semibold leading-5"
      >
        {habits.toggle.map((option, i) => (
          <span
            key={option}
            className={`rounded-lg py-1.5 text-center ${
              i === 1 ? 'bg-tl-segment-selected text-tl-text shadow-tl-card' : 'text-tl-text-secondary'
            }`}
          >
            {option}
          </span>
        ))}
      </div>
      {habits.rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center gap-3 rounded-xl border border-tl-divider-subtle bg-tl-background px-3 py-2.5"
        >
          <span className="min-w-0 truncate">{row.name}</span>
          <span className={`${small} ml-auto flex-none`}>{row.kind}</span>
          <HabitMark row={row} />
        </div>
      ))}
    </div>
  );
}

function MomentumRamp() {
  const { momentum } = why;
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-satoshi text-[28px] font-bold leading-8">{momentum.figure}</span>
        <MomentumPill color="var(--tl-momentum-building)">{momentum.band}</MomentumPill>
      </div>
      <div role="img" aria-label={momentum.rampAria} className="tl-ramp relative h-3.5 rounded-lg">
        <i className="absolute left-[71%] top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-tl-text bg-tl-background" />
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {momentum.bands.map((band) => (
          <span
            key={band.name}
            className="tl-tint flex flex-col rounded-lg px-2.5 py-2 text-sm font-semibold leading-5 text-tl-text"
            style={{ '--c': band.color } as CSSProperties}
          >
            {band.name}
            <small className="text-xs font-normal leading-4 text-tl-text-secondary">{band.rule}</small>
          </span>
        ))}
      </div>
    </>
  );
}

function MemberRows() {
  return (
    <ul className="m-0 list-none p-0">
      {why.friends.members.map((member, i) => {
        const done = member.trail.filter(Boolean).length;
        return (
          <li key={member.name} className="flex min-h-12 items-center gap-2.5">
            <span className="w-3.5 text-sm text-tl-text-secondary">{i + 1}</span>
            <Avatar initial={member.initial} series={member.series} />
            <span className="min-w-0 truncate">{member.name}</span>
            <span aria-hidden="true" className="ml-auto flex gap-[3px]">
              {member.trail.map((logged, day) => (
                <i
                  key={day}
                  className={`h-2.5 w-2.5 rounded-[3px] ${logged ? '' : 'shadow-[inset_0_0_0_1px_var(--tl-divider)]'}`}
                  style={logged ? { background: seriesColor(member.series) } : undefined}
                />
              ))}
            </span>
            <span className="w-11 text-right text-sm font-semibold">
              {done}/{member.trail.length}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Cheers() {
  const { cheers } = why;
  const { comment } = cheers;
  return (
    <>
      <figure className="m-0 flex items-start gap-2.5 self-start">
        <Avatar initial={comment.initial} series={comment.series} />
        <div className="flex flex-col rounded-2xl rounded-tl-md bg-tl-background px-3 py-2 shadow-tl-card">
          <figcaption className="text-sm font-semibold leading-5">{comment.name}</figcaption>
          <blockquote className="m-0 text-sm leading-5 text-tl-text-secondary">{comment.text}</blockquote>
        </div>
      </figure>
      <div
        role="img"
        aria-label={cheers.trayAria}
        className="inline-flex max-w-full flex-wrap gap-0.5 self-start rounded-[22px] border border-tl-divider-subtle bg-tl-surface p-1 shadow-tl-card"
      >
        {cheers.reactions.map((emoji) => (
          <span key={emoji} className="flex h-11 w-10 items-center justify-center text-[22px] leading-none">
            {emoji}
          </span>
        ))}
        <span className="flex h-11 w-10 items-center justify-center text-tl-text-secondary">
          <Icon name="plus" />
        </span>
      </div>
      <span className="inline-flex min-h-7 items-center gap-1.5 self-start rounded-lg bg-tl-primary-soft px-2 py-1 text-sm font-semibold leading-5 text-tl-text">
        <Icon name="bell" className="h-3.5 w-3.5 text-tl-primary" />
        {cheers.checkIn}
      </span>
    </>
  );
}

function Rhythm() {
  const { rhythm } = why;
  return (
    <>
      <Eyebrow inCard>{rhythm.fortnightLabel}</Eyebrow>
      <div role="img" aria-label={rhythm.fortnightAria} className="grid max-w-[420px] grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
        {FORTNIGHT.split('').map((day, i) => (
          <i
            key={i}
            className={`relative aspect-square rounded ${FORTNIGHT_CELL[day] ?? ''}`}
            style={day in FORTNIGHT_SHARE ? completionFill(FORTNIGHT_SHARE[day]) : undefined}
          />
        ))}
      </div>
      <Eyebrow inCard>{rhythm.yearLabel}</Eyebrow>
      <div
        role="img"
        aria-label={rhythm.yearAria}
        className="grid max-w-[420px] grid-flow-col grid-rows-[repeat(7,auto)] gap-[3px] [grid-auto-columns:minmax(0,1fr)]"
      >
        {YEAR.split('').map((level, i) => (
          <i key={i} className="aspect-square rounded-[3px]" style={completionFill(Number(level) / 4)} />
        ))}
      </div>
    </>
  );
}

function Milestones() {
  const { milestones } = why;
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {milestones.earned.map((name) => (
          <GoldChip key={name}>{name}</GoldChip>
        ))}
        <GoldChip next>{milestones.next}</GoldChip>
      </div>
      <Pop className="relative h-16" delay={0.2}>
        {CONFETTI.map(([left, top, rotate, color]) => (
          <i
            key={left}
            aria-hidden="true"
            className="absolute h-3.5 w-2 rounded-sm"
            style={{ left, top, transform: `rotate(${rotate}deg)`, background: color }}
          />
        ))}
      </Pop>
    </>
  );
}

export default function Features() {
  return (
    <section id="why" className={section}>
      <SectionHead eyebrow={why.eyebrow} title={why.title}>
        <div className={`${lead} mt-2 flex flex-col gap-4 self-stretch text-left`}>
          <p className="m-0">{why.story.intro}</p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {why.story.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-tl-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 font-medium text-tl-text">{why.story.outro}</p>
        </div>
      </SectionHead>
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-4 lg:grid-cols-6">
        <Feature icon="check" title={why.habits.title} text={why.habits.body} span={2} order={0}>
          <HabitRows />
        </Feature>
        <Feature icon="trending" title={why.momentum.title} text={why.momentum.body} span={4} order={1}>
          <MomentumRamp />
        </Feature>
        <Feature icon="users" title={why.friends.title} text={why.friends.body} span={3} order={0}>
          <MemberRows />
        </Feature>
        <Feature icon="smile" title={why.cheers.title} text={why.cheers.body} span={3} order={1}>
          <Cheers />
        </Feature>
        <Feature icon="chart" title={why.rhythm.title} text={why.rhythm.body} span={4} order={0}>
          <Rhythm />
        </Feature>
        <Feature icon="award" title={why.milestones.title} text={why.milestones.body} span={2} order={1}>
          <Milestones />
        </Feature>
      </div>
    </section>
  );
}
