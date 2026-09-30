'use client';

import { useEffect } from 'react';

/**
 * Displacement map for the lens: red encodes x and green encodes y, both
 * neutral (0x80) in the rounded center and ramping at the edges, so the
 * backdrop is pulled inward near the rim like light through a lens.
 */
const LENS_MAP =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>" +
      "<defs><linearGradient id='r' x1='0' x2='1' y1='0' y2='0'><stop offset='0' stop-color='#f00'/><stop offset='1' stop-color='#000'/></linearGradient>" +
      "<linearGradient id='g' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='#0f0'/><stop offset='1' stop-color='#000'/></linearGradient>" +
      "<filter id='b'><feGaussianBlur stdDeviation='7'/></filter></defs>" +
      "<rect width='100' height='100' fill='url(#r)'/><rect width='100' height='100' fill='url(#g)' style='mix-blend-mode:screen'/>" +
      "<rect x='16' y='16' width='68' height='68' rx='34' fill='#808000' filter='url(#b)'/></svg>",
  );

/**
 * Defines the #tl-lens refraction filter and turns it on for `.tl-glass`
 * surfaces. Only Chromium applies SVG filters inside `backdrop-filter`;
 * elsewhere the glass keeps its plain blur, so the class is only set there.
 */
export default function GlassLens() {
  useEffect(() => {
    if (!('chrome' in window)) return;
    const root = document.querySelector('.tl');
    root?.classList.add('tl-lens');
    return () => root?.classList.remove('tl-lens');
  }, []);

  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <filter
        id="tl-lens"
        x="0"
        y="0"
        width="1"
        height="1"
        filterUnits="objectBoundingBox"
        primitiveUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feImage href={LENS_MAP} x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="0.12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
