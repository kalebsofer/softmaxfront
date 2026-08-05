import { Fragment } from 'react';
import Image from 'next/image';
import { traction } from '@/content/copy';

const IOS_URL = 'https://apps.apple.com/gb/app/daily-traction/id6758675167';
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.kalebrsofer.tractionhealth';

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.68c-.37-.2-.6-.58-.6-1V1.32c0-.42.23-.8.6-1l10.13 11.68L3.18 23.68zm1.4.82l11.12-6.43-2.47-2.85-8.65 9.28zm14.6-10.38l-2.88-1.66-2.72 3.14 2.72 3.14 2.88-1.66c.85-.49.85-1.72 0-2.96zm-3.88-2.26L4.58.56l8.65 9.97 2.07-2.67z" />
    </svg>
  );
}

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
