import Image from 'next/image';
import { tractionLanding as copy } from '@/content/copy';
import type { MobilePlatform } from '@/lib/traction';
import { Pop, Reveal } from './Motion';
import { GoldChip, lead, wrap } from './primitives';
import StoreButtons from './StoreButtons';

const { hero } = copy;

/** Screens are 648 x 1440 Android captures; the frame crops them from the top. */
const SHOT = { width: 648, height: 1440 };

/** Three sizes: phone, tablet and desktop. On a phone the outer two peek in from the panel edges. */
const phone =
  'h-[324px] w-[156px] flex-none overflow-hidden rounded-[26px] border-[5px] border-tl-bezel bg-tl-background shadow-tl-card md:h-[456px] md:w-[220px] md:rounded-[36px] md:border-[6px] lg:h-[580px] lg:w-[280px] lg:rounded-[44px] lg:border-8';

/** The outer phones sit lower than the middle one. */
const outer = 'mt-7 md:mt-10 lg:mt-12';

const float =
  'absolute flex items-center gap-2 rounded-xl border border-tl-divider-subtle bg-tl-surface px-2.5 py-2 text-sm font-medium leading-5 shadow-tl-card';

/** The middle phone rises first, then the outer two. */
const RISE_ORDER = [1, 0, 2];

/**
 * The hero panel: headline and stores over a teal-to-pink wash, with three
 * app screens rising out of its bottom edge and a milestone chip and a
 * reaction badge floating over them.
 */
export default function Hero({ platform }: { platform: MobilePlatform }) {
  return (
    <section id="top" className="tl-hero-wash relative mx-3.5 overflow-hidden rounded-[20px] md:mx-5 md:rounded-[32px]">
      <div className={`${wrap} flex flex-col items-center gap-4 pt-11 text-center md:gap-5 md:pt-[72px]`}>
        <h1 className="m-0 font-satoshi text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-tl-text-display md:text-[68px] md:leading-[1.04]">
          {hero.title}
        </h1>
        <p className={`${lead} max-w-[560px]`}>{hero.lead}</p>
        <StoreButtons platform={platform} className="mt-2" />

        <div className="relative mt-5 flex h-[290px] w-full items-start justify-center gap-3 md:mt-9 md:h-[400px] md:gap-6 lg:h-[520px] lg:gap-8">
          {hero.screens.map((screen, i) => (
            <Reveal key={screen.src} order={RISE_ORDER[i]} className={`${phone} ${i === 1 ? '' : outer}`}>
              <Image
                src={`/images/traction/screens/${screen.src}.jpg`}
                alt={screen.alt}
                {...SHOT}
                priority
                sizes="(min-width: 1024px) 264px, (min-width: 768px) 208px, 146px"
                className="block h-full w-full object-cover object-top"
              />
            </Reveal>
          ))}
          <Pop
            delay={0.4}
            className={`${float} left-[calc(50%-168px)] top-[-16px] md:left-[max(-32px,calc(50%-500px))] md:top-[150px] lg:top-[192px]`}
          >
            <GoldChip>{hero.milestone}</GoldChip>
          </Pop>
          <Pop
            delay={0.55}
            className={`${float} right-[calc(50%-168px)] top-[176px] md:right-[max(-32px,calc(50%-480px))] md:top-[210px] lg:top-[262px]`}
          >
            <span
              role="img"
              aria-label={hero.reactionsAria}
              className="inline-flex items-center gap-1 rounded-full border border-tl-divider-subtle bg-tl-surface px-2 py-0.5 text-[13px] font-semibold leading-5 text-tl-text"
            >
              {hero.reactions.join(' ')} <span>{hero.reactionCount}</span>
            </span>
          </Pop>
        </div>
      </div>
    </section>
  );
}
