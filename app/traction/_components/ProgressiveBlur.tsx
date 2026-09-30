type Layer = {
  /** Backdrop blur radius in px. */
  blur: number;
  /** Mask for this layer; opaque where the blur applies. */
  mask: string;
};

type Props = {
  layers: Layer[];
  /** Background painted over the blur layers, usually a darkening gradient. */
  shade: string;
  className: string;
};

/**
 * A blur that ramps up rather than starting at a hard edge: several backdrop
 * blurs of growing radius, each masked to a later band, with a shade on top
 * so text laid over it stays legible.
 */
export default function ProgressiveBlur({ layers, shade, className }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      {layers.map(({ blur, mask }) => (
        <div
          key={`${blur}-${mask}`}
          className="tl-blur-layer"
          style={{ '--tl-blur': `${blur}px`, '--tl-mask': mask } as React.CSSProperties}
        />
      ))}
      <div className="absolute inset-0" style={{ background: shade }} />
    </div>
  );
}

/**
 * The bottom-anchored ramp used under captions on photos: light blur from
 * the top of the band, the strongest blur along the bottom edge.
 */
export function BottomBlur({
  blurs,
  shade,
  shadeStop,
  className,
}: {
  blurs: [number, number, number];
  /** Opacity of the page background at `shadeStop`. */
  shade: number;
  /** Where the shade reaches full strength, as a percentage of the band. */
  shadeStop: number;
  className: string;
}) {
  const [light, medium, strong] = blurs;
  return (
    <ProgressiveBlur
      className={`inset-x-0 bottom-0 ${className}`}
      layers={[
        { blur: light, mask: 'linear-gradient(180deg, transparent 0%, #000 30%)' },
        { blur: medium, mask: 'linear-gradient(180deg, transparent 20%, #000 55%)' },
        { blur: strong, mask: 'linear-gradient(180deg, transparent 40%, #000 80%)' },
      ]}
      shade={`linear-gradient(180deg, rgba(19, 17, 20, 0) 0%, rgba(19, 17, 20, ${shade}) ${shadeStop}%)`}
    />
  );
}
