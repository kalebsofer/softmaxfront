'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { hero, capabilityStrip } from '@/content/copy';
import BookCall from '@/components/BookCall';

function Stamp() {
  // Ring circumference at r=62 ≈ 389 viewBox units; textLength locks the
  // copy to exactly one revolution so the ring reads seamlessly.
  const ringText = `${hero.stamp.ring} · ${hero.stamp.cta} · `.toUpperCase();
  return (
    <a
      href="#contact"
      aria-label={`${hero.stamp.ring} — ${hero.stamp.cta}`}
      className="group relative block w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] text-[#b3402f]/90 transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 160 160" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="stamp-ring"
            d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          />
        </defs>
        <circle
          cx="80"
          cy="80"
          r="78"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="80"
          cy="80"
          r="47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.25"
        />
        <text className="font-mono" fontSize="10.5" fill="currentColor">
          <textPath href="#stamp-ring" textLength="388">
            {ringText}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-2xl transition-transform duration-300 group-hover:translate-y-0.5">
        ↓
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
      className="px-5 pt-6 pb-7 md:px-10 md:pt-14 md:pb-[52px]"
    >
      <div className="md:flex md:items-center md:gap-10">
        <h1 className="text-balance font-semibold text-[40px] leading-[0.94] tracking-[-0.042em] md:text-[clamp(52px,7.2vw,104px)] md:leading-[0.92] md:tracking-[-0.045em] max-w-[1280px] md:flex-1">
          {hero.headline}
        </h1>
        <div className="hidden md:block shrink-0 lg:pr-4">
          <Stamp />
        </div>
      </div>
      {/* The desktop hero carries the viewport alone; on phone it gains explicit CTAs. */}
      <div className="mt-[26px] flex flex-col gap-[9px] md:hidden">
        <a
          href="#contact"
          className="font-mono text-xs font-medium uppercase tracking-[0.06em] bg-ink text-paper rounded-full p-[17px] text-center"
        >
          {hero.primaryCta}
        </a>
        <BookCall className="font-mono text-xs font-medium uppercase tracking-[0.06em] bg-[#b3402f] text-paper rounded-full p-[17px] text-center" />
        <a
          href="#work"
          className="font-mono text-xs font-medium uppercase tracking-[0.06em] border border-ink/[0.12] rounded-full p-[17px] text-center"
        >
          {hero.secondaryCta}
        </a>
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
        <span className="ml-auto text-ink">{capabilityStrip.availability}</span>
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
