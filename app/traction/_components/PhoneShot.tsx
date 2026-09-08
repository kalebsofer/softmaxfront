import Image from 'next/image';

type Props = {
  /**
   * Screenshot filename under public/images/traction/landing, without the
   * extension. The theme suffix is part of the name: the trio deliberately
   * mixes dark and light captures, so a shot does not follow the visitor's
   * color scheme.
   */
  shot: 'group_dark' | 'home_dark' | 'progress_light';
  alt: string;
  /** Frame size: `sm` is a phone tucked behind, `lg` the one in front. */
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

/** A phone-framed app screenshot. */
export default function PhoneShot({
  shot,
  alt,
  size,
  maxWidth,
  className = '',
  priority = false,
}: Props) {
  return (
    <div
      className={`box-border bg-tl-phone-bg border border-tl-phone-border ${frames[size]} ${className}`}
    >
      <Image
        src={`/images/traction/landing/${shot}.png`}
        alt={alt}
        width={SHOT_WIDTH}
        height={SHOT_HEIGHT}
        sizes={`(min-width: 1024px) ${maxWidth}px, 40vw`}
        priority={priority}
        className={`block w-full h-auto ${screens[size]}`}
      />
    </div>
  );
}
