import { getImageProps } from 'next/image';

type Props = {
  /** Screenshot basename under public/images/traction/landing, without the theme suffix. */
  shot: 'community' | 'group_standings';
  alt: string;
  /** Frame size: `sm` is the phone tucked behind, `lg` the one in front. */
  size: 'sm' | 'lg';
  /** Rendered width in px at the largest breakpoint, used for `sizes`. */
  maxWidth: number;
  className?: string;
  priority?: boolean;
};

const SHOT_WIDTH = 1080;
const SHOT_HEIGHT = 2400;

const frames = {
  sm: 'p-[5px] rounded-[24px] lg:p-[7px] lg:rounded-[34px] tl-phone-sm',
  lg: 'p-1.5 rounded-[30px] lg:p-[9px] lg:rounded-[42px] tl-phone-lg',
} as const;

const screens = {
  sm: 'rounded-[20px] lg:rounded-[27px]',
  lg: 'rounded-[24px] lg:rounded-[33px]',
} as const;

/**
 * A phone-framed screenshot that swaps between the light and dark capture
 * with the visitor's color scheme. Built on `<picture>` so only the matching
 * theme's image is downloaded.
 */
export default function PhoneShot({
  shot,
  alt,
  size,
  maxWidth,
  className = '',
  priority = false,
}: Props) {
  const common = {
    alt,
    width: SHOT_WIDTH,
    height: SHOT_HEIGHT,
    sizes: `(min-width: 1024px) ${maxWidth}px, 55vw`,
    priority,
  };
  const {
    props: { srcSet: darkSrcSet },
  } = getImageProps({ ...common, src: `/images/traction/landing/${shot}_dark.png` });
  const {
    props: { srcSet: lightSrcSet, ...rest },
  } = getImageProps({ ...common, src: `/images/traction/landing/${shot}_light.png` });

  return (
    <div
      className={`box-border bg-tl-phone-bg border border-tl-phone-border ${frames[size]} ${className}`}
    >
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={darkSrcSet} sizes={common.sizes} />
        <source srcSet={lightSrcSet} sizes={common.sizes} />
        <img {...rest} alt={alt} className={`block w-full h-auto ${screens[size]}`} />
      </picture>
    </div>
  );
}
