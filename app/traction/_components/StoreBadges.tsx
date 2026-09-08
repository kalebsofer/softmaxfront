import { AppleIcon, PlayIcon } from '@/components/StoreIcons';
import { tractionLanding } from '@/content/copy';
import { APP_STORE_URL, playStoreUrlWithReferrer } from '@/lib/traction';

const { badges } = tractionLanding;

type Props = {
  /** `stacked` fills the container width (phone layout); `inline` hugs content. */
  layout: 'stacked' | 'inline';
};

const base =
  'flex items-center gap-2.5 h-[52px] rounded-xl bg-tl-badge-bg text-tl-badge-fg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current';

const layouts = {
  stacked: 'w-full justify-center',
  inline: 'px-[18px] min-w-[196px]',
} as const;

export default function StoreBadges({ layout }: Props) {
  const badge = `${base} ${layouts[layout]}`;
  return (
    <>
      <a href={APP_STORE_URL} className={badge} aria-label={badges.appStoreAria}>
        <AppleIcon size={24} />
        <span className="flex flex-col leading-[1.2]">
          <span className="text-[9px] text-tl-badge-kicker">{badges.appStoreKicker}</span>
          <span className="text-[17px] font-semibold tracking-[-0.01em]">
            {badges.appStoreName}
          </span>
        </span>
      </a>
      <a
        href={playStoreUrlWithReferrer('softmaxco', 'landing')}
        className={badge}
        aria-label={badges.playAria}
      >
        <PlayIcon size={24} />
        <span className="flex flex-col leading-[1.2]">
          <span className="text-[9px] uppercase tracking-[0.06em] text-tl-badge-kicker">
            {badges.playKicker}
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.01em]">
            {badges.playName}
          </span>
        </span>
      </a>
    </>
  );
}
