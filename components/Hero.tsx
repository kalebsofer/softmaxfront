'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { hero, capabilityStrip } from '@/content/copy';
import BookCall from '@/components/BookCall';
import { PillButton, pillButtonVariants } from '@/components/ui/pill-button';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
      className="px-5 pt-6 pb-7 md:px-10 md:pt-14 md:pb-[52px]"
    >
      <h1 className="text-balance font-semibold text-[40px] leading-[0.94] tracking-[-0.042em] md:text-[clamp(52px,7.2vw,104px)] md:leading-[0.92] md:tracking-[-0.045em] max-w-[1280px]">
        {hero.headline}
      </h1>
      {/* The desktop hero carries the viewport alone; on phone it gains explicit CTAs. */}
      <div className="mt-[26px] flex flex-col gap-[9px] md:hidden">
        <PillButton asChild size="block">
          <a href="#contact">{hero.primaryCta}</a>
        </PillButton>
        <BookCall className={pillButtonVariants({ tone: 'signal', size: 'block' })} />
        <PillButton asChild tone="outline" size="block">
          <a href="#work">{hero.secondaryCta}</a>
        </PillButton>
      </div>
    </motion.section>
  );
}

export function CapabilityStrip() {
  return (
    <div className="border-y border-hairline">
      {/* Desktop: static rule strip */}
      <div className="hidden md:flex flex-wrap items-center gap-10 px-10 py-4 font-mono text-xs uppercase tracking-[0.05em] text-ink/55">
        {capabilityStrip.items.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {/* Mobile: 22s marquee + scroll row */}
      <div className="md:hidden overflow-hidden py-3.5">
        <div className="flex w-max gap-[26px] animate-marquee-fast font-mono text-[11px] uppercase tracking-[0.06em] text-ink/55">
          {[...capabilityStrip.items, ...capabilityStrip.items].map((c, i) => (
            <Fragment key={i}>
              <span>{c}</span>
              <span>·</span>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="md:hidden border-t border-hairline px-5 py-4 flex justify-between font-mono text-[11px] uppercase tracking-[0.05em] text-ink/55">
        <span className="text-ink">{capabilityStrip.scrollHint}</span>
      </div>
    </div>
  );
}
