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

const button = 'flex h-[60px] items-center gap-3 rounded-[30px] pl-[22px] pr-[26px] transition-colors';
const solid = 'bg-tl-fg text-tl-bg hover:bg-tl-mint';

/**
 * The App Store as the solid primary button with Google Play beside it in
 * glass; a lone Google Play button is the only call to action, so it takes
 * the solid style instead.
 */
export default function StoreButtons({ platform, className }: { platform: MobilePlatform; className: string }) {
  const stores = storesFor(platform);
  const playSolid = !stores.apple;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.apple && (
        <a href={APP_STORE_URL} aria-label={badges.appStoreAria} className={`${button} ${solid}`}>
          <AppleIcon size={24} />
          <span className="flex flex-col leading-[1.15]">
            <span className="text-[11px]">{badges.appStoreKicker}</span>
            <span className="text-lg font-bold tracking-[-0.01em]">{badges.appStoreName}</span>
          </span>
        </a>
      )}
      {stores.play && (
        <a
          href={PLAY_URL}
          aria-label={badges.playAria}
          className={`${button} ${playSolid ? solid : 'tl-glass text-tl-fg'}`}
        >
          <PlayIcon size={22} />
          <span className="flex flex-col leading-[1.15]">
            <span
              className={`text-[11px] uppercase tracking-[0.06em] ${playSolid ? 'text-[rgba(19,17,20,0.64)]' : 'text-tl-body'}`}
            >
              {badges.playKicker}
            </span>
            <span className="text-lg font-bold tracking-[-0.01em]">{badges.playName}</span>
          </span>
        </a>
      )}
    </div>
  );
}
