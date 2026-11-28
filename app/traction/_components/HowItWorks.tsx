import Image from 'next/image';
import { tractionLanding as copy } from '@/content/copy';
import { Reveal } from './Motion';
import { Eyebrow, Icon, card, section, titleSection } from './primitives';

const { how } = copy;

type Item = (typeof how.sections)[number]['items'][number];

/** The Android captures in public/images/traction/how, all 648 x 1440. */
const SCREEN = { width: 648, height: 1440 };

/** Each frame shows this much of a screen's height, centred on its focus. */
const WINDOW = 500;

/**
 * For each caption, the screen it shows and the part of it in focus, as
 * [left, top, right, bottom] in screen pixels. The rest of the screen stays
 * in view around it, blurred, unless `blur` is false: then the frame still
 * centres on the focus but the whole of it stays sharp. `windowTop` starts the
 * frame at that height instead of centring it.
 */
const SHOTS: Record<string, { screen: string; focus: [number, number, number, number]; blur?: false; windowTop?: number }> = {
  'goal-details': { screen: 'create-goal', focus: [0, 150, 648, 490] },
  'goal-habits': { screen: 'create-goal', focus: [0, 505, 648, 985] },
  'goal-progress': { screen: 'progress', focus: [0, 1000, 648, 1412] },
  'group-join': { screen: 'community', focus: [0, 560, 648, 752], blur: false },
  'group-checkpoints': { screen: 'community-round', focus: [0, 1200, 648, 1416], blur: false },
  'group-cheers': { screen: 'community', focus: [0, 362, 648, 552] },
  'journal-header': { screen: 'journal', focus: [0, 165, 648, 295], blur: false },
  // The entry's last two lines and the habits below are in focus; the frame
  // starts at the top of the entry, so its first lines show blurred above.
  'journal-entry': { screen: 'journal', focus: [0, 436, 648, 900], windowTop: 290 },
  // Both rows of home tiles: ring and momentum, then journal, milestone and groups.
  'journal-private': { screen: 'home', focus: [18, 200, 630, 508] },
  'routine-home': { screen: 'home', focus: [18, 568, 630, 936] },
  'routine-widget': { screen: 'widget', focus: [18, 122, 630, 442], blur: false },
};

/** Where the host's message ends on the community screen; reactions hang there. */
const POST_BOTTOM = 547;

/** Every frame has one shape, so a row of cards lines up. */
const frame =
  'tl-light relative aspect-[648/500] overflow-hidden rounded-xl border border-tl-divider-subtle bg-[#fffbff]';

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * A whole app screen seen through a frame shorter than it: the frame centres
 * on the focus, which stays sharp and lifted, and the rest is blurred back.
 */
function Shot({ name, alt, reactions }: { name: string; alt: string; reactions?: boolean }) {
  const { screen, focus, blur = true, windowTop: start } = SHOTS[name];
  const [left, top, right, bottom] = focus;
  const { width, height } = SCREEN;
  const windowTop = Math.min(Math.max(start ?? (top + bottom) / 2 - WINDOW / 2, 0), height - WINDOW);
  const src = `/images/traction/how/${screen}.jpg`;
  const sizes = '(min-width: 1024px) 300px, (min-width: 768px) 450px, 100vw';
  const inset = `inset(${pct(top, height)} ${pct(width - right, width)} ${pct(height - bottom, height)} ${pct(left, width)} round 10px)`;

  return (
    <div className={frame}>
      <div
        className="absolute inset-x-0"
        style={{ top: `-${pct(windowTop, WINDOW)}`, height: pct(height, WINDOW) }}
      >
        {blur && (
          <>
            <Image src={src} alt="" aria-hidden="true" fill sizes={sizes} className="scale-[1.03] blur-[3px]" />
            <div aria-hidden="true" className="absolute inset-0 bg-[#fffbff]/45" />
            <div
              aria-hidden="true"
              className="absolute rounded-[10px] shadow-[0_0_0_1px_rgba(30,20,45,0.06),0_10px_28px_rgba(30,20,45,0.16)]"
              style={{
                left: pct(left, width),
                right: pct(width - right, width),
                top: pct(top, height),
                bottom: pct(height - bottom, height),
              }}
            />
          </>
        )}
        <Image src={src} alt={alt} fill sizes={sizes} style={blur ? { clipPath: inset } : undefined} />
        {reactions && (
          <span
            aria-hidden="true"
            className="absolute right-[5%] inline-flex -translate-y-1/2 items-center gap-1 rounded-full border border-tl-divider-subtle bg-tl-surface px-2 py-0.5 text-[13px] font-semibold leading-5 text-tl-text shadow-tl-card"
            style={{ top: pct(POST_BOTTOM, height) }}
          >
            {copy.hero.reactions.join(' ')} <span>{copy.hero.reactionCount}</span>
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Linking habits, drawn from the app's tokens: three habits joined by the
 * link line into one routine, and the button that makes it.
 */
function LinkWireframe({ alt }: { alt: string }) {
  const w = how.linkWireframe;
  return (
    <div role="img" aria-label={alt} className={`${frame} flex items-center justify-center px-4`}>
      <div className="flex w-full max-w-[250px] flex-col gap-2 text-left text-tl-text">
        <div className="rounded-xl border-2 border-[#b8e3ab] bg-tl-card p-2">
          <div className="flex items-center gap-1.5 px-1 pb-1 text-xs font-semibold leading-4 text-tl-primary">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-2 [stroke-linecap:round]">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            {w.name}
          </div>
          <ol className="relative m-0 flex list-none flex-col gap-1 p-0">
            {/* The link line runs through the step numbers. */}
            <span aria-hidden="true" className="absolute bottom-4 left-[17px] top-4 w-0.5 bg-tl-primary" />
            {w.habits.map((habit, i) => (
              <li
                key={habit}
                className="relative flex items-center gap-2.5 rounded-lg border border-tl-divider-subtle bg-tl-background px-2.5 py-1"
              >
                <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-tl-primary text-[10px] font-semibold leading-none text-tl-text-inverse">
                  {i + 1}
                </span>
                <span className="text-xs font-medium leading-4">{habit}</span>
                <span className="ml-auto text-[10px] leading-4 text-tl-text-secondary">{w.days}</span>
              </li>
            ))}
          </ol>
        </div>
        <span className="flex min-h-7 items-center justify-center gap-1.5 rounded-lg bg-tl-text text-xs font-medium leading-4 text-tl-text-inverse">
          <Icon name="check" className="h-3.5 w-3.5" />
          {w.cta}
        </span>
      </div>
    </div>
  );
}

function Step({ item, order }: { item: Item; order: number }) {
  return (
    <Reveal order={order}>
      <article className={`${card} flex h-full flex-col gap-4`}>
        <h3 className="m-0 text-lg font-medium leading-7 text-tl-text">{item.caption}</h3>
        <div className="mt-auto">
          {'visual' in item ? (
            <LinkWireframe alt={item.alt} />
          ) : (
            <Shot name={item.image} alt={item.alt} reactions={'reactions' in item && item.reactions} />
          )}
        </div>
      </article>
    </Reveal>
  );
}

/** Four parts, Goals to Routines, each three captions over crops of the app. */
export default function HowItWorks() {
  return (
    <section id="how" className={section}>
      <div className="mb-6 flex justify-center md:mb-8">
        <Eyebrow>{how.eyebrow}</Eyebrow>
      </div>
      <div className="flex flex-col gap-12 md:gap-16">
        {how.sections.map((part) => (
          <div key={part.id} id={part.id} className="scroll-mt-4">
            <h2 className={`${titleSection} mb-6 text-center md:mb-8`}>{part.title}</h2>
            <div className="mx-auto grid max-w-[480px] grid-cols-1 gap-2.5 lg:max-w-none lg:grid-cols-3 lg:gap-4">
              {part.items.map((item, i) => (
                <Step key={item.caption} item={item} order={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
