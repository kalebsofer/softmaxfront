import Image from 'next/image';

type Props = {
  src: string;
  /** Position and size of the glow, as Tailwind classes. */
  className: string;
  /** Blur radius in px; the glow is the image itself, blurred and saturated. */
  blur: number;
  saturate: number;
  opacity: number;
  objectPosition?: string;
};

/**
 * Ambient light behind a card: the card's own image, heavily blurred, so the
 * glow always matches what is in front of it. It is blurred beyond
 * recognition, so a small rendition is plenty.
 */
export default function Glow({ src, className, blur, saturate, opacity, objectPosition }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="160px"
        className="object-cover"
        style={{
          filter: `blur(${blur}px) saturate(${saturate})`,
          opacity,
          objectPosition,
          borderRadius: 'inherit',
        }}
      />
    </div>
  );
}
