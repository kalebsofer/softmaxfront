import { AppleIcon, PlayIcon } from '@/components/StoreIcons';
import { tractionLanding } from '@/content/copy';
import { APP_STORE_URL, playStoreUrlWithReferrer, type MobilePlatform } from '@/lib/traction';

const { badges } = tractionLanding;

/** Links to the Play Store record the landing page as the install source. */
export const PLAY_URL = playStoreUrlWithReferrer('softmaxco', 'landing');

/** A phone is only offered its own store; anything else is offered both. */
export function storesFor(platform: MobilePlatform) {
  return { apple: platform !== 'android', play: platform !== 'ios' };
}

/** The solid button: `text` fill, `text-inverse` label, snappy press. */
export const solidButton =
  'inline-flex min-h-11 items-center gap-2 rounded-lg bg-tl-text px-[18px] text-base font-medium leading-6 text-tl-text-inverse transition-[transform,opacity] duration-100 hover:opacity-90 active:scale-[0.97]';

const store =`${solidButton} min-h-[52px] justify-center md:justify-start`;

function StoreLabel({ kicker, name }: { kicker: string; name: string }) {
  return (
    <span className="flex flex-col text-left text-base font-semibold leading-5">
      <small className="text-[11px] font-normal leading-[14px]">{kicker}</small>
      {name}
    </span>
  );
}

/** Both stores side by side; on a phone, only its own. They stack on phones. */
export default function StoreButtons({ platform, className = '' }: { platform: MobilePlatform; className?: string }) {
  const stores = storesFor(platform);
  return (
    <div
      className={`flex flex-col gap-3 self-stretch md:flex-row md:flex-wrap md:justify-center md:self-auto ${className}`}
    >
      {stores.apple && (
        <a href={APP_STORE_URL} aria-label={badges.appStoreAria} className={store}>
          <AppleIcon size={20} />
          <StoreLabel kicker={badges.appStoreKicker} name={badges.appStoreName} />
        </a>
      )}
      {stores.play && (
        <a href={PLAY_URL} aria-label={badges.playAria} className={store}>
          <PlayIcon size={18} />
          <StoreLabel kicker={badges.playKicker} name={badges.playName} />
        </a>
      )}
    </div>
  );
}
