'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  prevLabel: string;
  nextLabel: string;
};

const arrow =
  'tl-glass absolute top-[296px] flex h-[52px] w-[52px] items-center justify-center rounded-[26px] text-[22px] font-bold leading-none text-tl-fg transition-opacity disabled:cursor-default disabled:opacity-0';

/**
 * A sideways, snap-scrolling rail of cards with glass arrows. The rail bleeds
 * to the viewport edges while its first card lines up with the content
 * column; each arrow hides once there is nothing further that way.
 */
export default function ScreensRail({ children, prevLabel, nextLabel }: Props) {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [sync]);

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.firstElementChild;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={rail}
        onScroll={sync}
        className="tl-rail flex snap-x snap-mandatory gap-[clamp(16px,2vw,24px)] overflow-x-auto pb-[72px] pt-14"
      >
        {children}
      </div>
      <button type="button" aria-label={prevLabel} disabled={atStart} onClick={() => step(-1)} className={`tl-rail-prev ${arrow}`}>
        <span aria-hidden="true" className="-translate-y-px">←</span>
      </button>
      <button type="button" aria-label={nextLabel} disabled={atEnd} onClick={() => step(1)} className={`tl-rail-next ${arrow}`}>
        <span aria-hidden="true" className="-translate-y-px">→</span>
      </button>
    </div>
  );
}
