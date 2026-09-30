'use client';

import { useEffect, useState } from 'react';
import { AppleIcon, PlayIcon } from '@/components/StoreIcons';
import { tractionLanding } from '@/content/copy';
import { APP_STORE_URL, type MobilePlatform } from '@/lib/traction';
import ProgressiveBlur from './ProgressiveBlur';
import { PLAY_URL, storesFor } from './StoreButtons';

const { nav, badges } = tractionLanding;

const round = 'tl-glass pointer-events-auto flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[26px] text-tl-fg';

/** Content scrolling under the nav blurs progressively into the top edge. */
const EDGE_LAYERS = [
  { blur: 2, mask: 'linear-gradient(180deg, #000 0%, #000 60%, transparent 100%)' },
  { blur: 6, mask: 'linear-gradient(180deg, #000 0%, #000 40%, transparent 75%)' },
  { blur: 14, mask: 'linear-gradient(180deg, #000 0%, #000 20%, transparent 55%)' },
  { blur: 28, mask: 'linear-gradient(180deg, #000 0%, transparent 35%)' },
];

/**
 * The floating glass controls: home, section links, the call to action and
 * the stores (on a phone, only its own). The blurred top edge fades in over
 * the first 60px of scroll so it never dims the hero at rest.
 */
export default function GlassNav({ platform }: { platform: MobilePlatform }) {
  const [edge, setEdge] = useState(0);
  const stores = storesFor(platform);

  useEffect(() => {
    const onScroll = () => setEdge(Math.min(1, window.scrollY / 60));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div style={{ opacity: edge }}>
        <ProgressiveBlur
          className="!fixed inset-x-0 top-0 z-40 h-[132px]"
          layers={EDGE_LAYERS}
          shade="linear-gradient(180deg, rgba(19, 17, 20, 0.78) 0%, rgba(19, 17, 20, 0.42) 45%, rgba(19, 17, 20, 0) 100%)"
        />
      </div>

      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-4 top-4 z-50 flex items-center justify-center gap-2.5"
      >
        <a href="#top" aria-label={nav.home} className={round}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a tiny static SVG needs no optimization */}
          <img src="/images/traction/traction-icon-white.svg" alt="" className="block h-[22px] w-auto" />
        </a>
        <div className="tl-glass pointer-events-auto box-border flex h-[52px] min-w-0 flex-[0_1_auto] items-center gap-1 rounded-[26px] p-1.5">
          {nav.links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hidden h-10 items-center rounded-[20px] px-4 text-[15px] text-tl-fg transition-colors hover:bg-white/10 min-[900px]:flex"
            >
              {label}
            </a>
          ))}
          <a
            href="#get"
            className="flex h-10 items-center whitespace-nowrap rounded-[20px] bg-tl-fg px-[18px] text-[15px] font-bold text-tl-bg transition-colors hover:bg-tl-mint"
          >
            {nav.cta}
          </a>
        </div>
        {stores.apple && (
          <a href={APP_STORE_URL} aria-label={badges.appStoreAria} className={round}>
            <AppleIcon size={21} />
          </a>
        )}
        {stores.play && (
          <a href={PLAY_URL} aria-label={badges.playAria} className={round}>
            <PlayIcon size={19} />
          </a>
        )}
      </nav>
    </>
  );
}
