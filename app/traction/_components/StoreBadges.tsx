import { AppleIcon, PlayIcon } from '@/components/StoreIcons';
import { tractionLanding } from '@/content/copy';
import { APP_STORE_URL, playStoreUrlWithReferrer, type MobilePlatform } from '@/lib/traction';

const { badges } = tractionLanding;

type Props = {
  /**
   * Which store to offer. A phone gets only its own store as a single
   * primary button; anything else gets both, App Store first.
   */
  platform: MobilePlatform;
  /** `stacked` fills the container width (phone layout); `inline` hugs content. */
  layout: 'stacked' | 'inline';
  /** `sm` is the compact pair that sits beside the desktop QR code. */
  size?: 'md' | 'sm';
};

const base =
  'flex items-center transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current';

const sizes = {
  md: { badge: 'gap-2.5 h-[52px] rounded-xl', icon: 24, kicker: 'text-[9px]', name: 'text-[17px]' },
  sm: { badge: 'gap-2 h-9 rounded-lg', icon: 16, kicker: 'text-[7px]', name: 'text-[12px]' },
} as const;

const tones = {
  primary: 'bg-tl-badge-bg text-tl-badge-fg',
  secondary: 'bg-tl-badge-alt-bg text-tl-badge-alt-fg border border-tl-divider',
} as const;

const layouts = {
  md: { stacked: 'w-full justify-center', inline: 'px-[18px] min-w-[196px]' },
  sm: { stacked: 'w-full justify-center', inline: 'px-3' },
} as const;

const kickers = {
  primary: 'text-tl-badge-kicker',
  secondary: 'text-tl-badge-alt-kicker',
} as const;

type BadgeProps = {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  kicker: string;
  name: string;
  tone: keyof typeof tones;
  layout: Props['layout'];
  size: NonNullable<Props['size']>;
  uppercaseKicker?: boolean;
};

function Badge({ href, ariaLabel, icon, kicker, name, tone, layout, size, uppercaseKicker }: BadgeProps) {
  const dims = sizes[size];
  return (
    <a
      href={href}
      className={`${base} ${dims.badge} ${tones[tone]} ${layouts[size][layout]}`}
      aria-label={ariaLabel}
    >
      {icon}
      <span className="flex flex-col leading-[1.2]">
        <span
          className={`${dims.kicker} ${kickers[tone]} ${
            uppercaseKicker ? 'uppercase tracking-[0.06em]' : ''
          }`}
        >
          {kicker}
        </span>
        <span className={`${dims.name} font-semibold tracking-[-0.01em]`}>{name}</span>
      </span>
    </a>
  );
}

export default function StoreBadges({ platform, layout, size = 'md' }: Props) {
  const icon = sizes[size].icon;
  const showApple = platform !== 'android';
  const showPlay = platform !== 'ios';
  // A lone Play badge is the page's only call to action, so it takes the
  // primary tone rather than the secondary one it has beside the App Store.
  const playTone = showApple ? 'secondary' : 'primary';

  return (
    <>
      {showApple && (
        <Badge
          href={APP_STORE_URL}
          ariaLabel={badges.appStoreAria}
          icon={<AppleIcon size={icon} />}
          kicker={badges.appStoreKicker}
          name={badges.appStoreName}
          tone="primary"
          layout={layout}
          size={size}
        />
      )}
      {showPlay && (
        <Badge
          href={playStoreUrlWithReferrer('softmaxco', 'landing')}
          ariaLabel={badges.playAria}
          icon={<PlayIcon size={icon} />}
          kicker={badges.playKicker}
          name={badges.playName}
          tone={playTone}
          layout={layout}
          size={size}
          uppercaseKicker
        />
      )}
    </>
  );
}
