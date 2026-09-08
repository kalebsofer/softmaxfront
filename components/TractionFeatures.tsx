import { Fragment } from 'react';
import Image from 'next/image';
import { traction } from '@/content/copy';
import { AppleIcon, PlayIcon } from '@/components/StoreIcons';
import { APP_STORE_URL as IOS_URL, PLAY_STORE_URL as ANDROID_URL } from '@/lib/traction';

function StoreBadges({ stacked = false }: { stacked?: boolean }) {
  const badge = `${
    stacked ? 'flex w-full justify-center p-[13px]' : 'inline-flex px-4 py-[11px]'
  } items-center gap-2.5 bg-paper text-ink rounded-[11px] hover:opacity-90 transition-opacity`;
  return (
    <>
      <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className={badge}>
        <AppleIcon />
        <span className="flex flex-col leading-[1.15]">
          <span className="text-[10px] font-medium opacity-75">
            {traction.badges.appStoreKicker}
          </span>
          <span className="text-sm font-semibold">
            {traction.badges.appStoreName}
          </span>
        </span>
      </a>
      <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" className={badge}>
        <PlayIcon />
        <span className="flex flex-col leading-[1.15]">
          <span className="text-[10px] font-medium opacity-75">
            {traction.badges.playKicker}
          </span>
          <span className="text-sm font-semibold">
            {traction.badges.playName}
          </span>
        </span>
      </a>
    </>
  );
}

const screenshot =
  'w-[118px] rounded-[14px] md:w-[150px] md:rounded-[18px] border border-paper/15 h-auto';

export default function TractionFeatures() {
  return (
    <section id="traction" className="bg-ink text-paper">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <div className="px-5 pt-[18px] md:px-10 md:py-16">
          <div className="font-mono text-[10.5px] md:text-xs uppercase tracking-[0.08em] leading-none text-paper/65 mb-3.5 md:mb-[22px]">
            {traction.eyebrow}
          </div>
          <h2 className="font-semibold text-4xl leading-[0.98] tracking-[-0.04em] md:text-[clamp(36px,4.4vw,60px)] max-w-[540px] mb-3 md:mb-[18px]">
            {traction.title}
          </h2>
          <p className="text-sm leading-[1.55] md:text-[17px] md:leading-[1.6] text-paper/70 max-w-[470px] md:mb-[26px]">
            {traction.lead}
          </p>
          <div className="hidden md:flex gap-2.5 mb-[22px]">
            <StoreBadges />
          </div>
          <div className="hidden md:flex gap-[34px] pt-[22px] border-t border-paper/[0.12]">
            {traction.stats.map((s) => (
              <div key={s.label}>
                <div className="font-semibold text-[26px] leading-none tracking-[-0.03em]">
                  {s.value}
                </div>
                <div className="font-mono text-xs leading-[1.4] text-paper/65 mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2.5 md:gap-4 justify-center items-center px-5 pt-6 md:px-10 md:py-[52px]">
          <Image
            src="/images/traction/Home - 2778.png"
            alt="Traction home screen"
            width={1284}
            height={2778}
            className={screenshot}
          />
          <Image
            src="/images/traction/Schedule - 2778.png"
            alt="Traction schedule screen"
            width={1284}
            height={2778}
            className={`${screenshot} translate-y-4 md:translate-y-6`}
          />
          <Image
            src="/images/traction/Calendar - 2778.png"
            alt="Traction calendar screen"
            width={1284}
            height={2778}
            className={`${screenshot} hidden md:block`}
          />
        </div>

        {/* Mobile: store badges stacked full-width at the bottom */}
        <div className="md:hidden flex flex-col gap-[9px] p-5">
          <StoreBadges stacked />
        </div>
      </div>

      <div className="border-t border-paper/[0.12] overflow-hidden py-[15px]">
        <div className="flex w-max gap-[26px] md:gap-11 animate-marquee-fast md:animate-marquee font-mono text-[11px] md:text-[13px] uppercase tracking-[0.06em] leading-none text-paper/65">
          {[...traction.marquee, ...traction.marquee].map((item, i) => (
            <Fragment key={i}>
              <span>{item}</span>
              <span>·</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
