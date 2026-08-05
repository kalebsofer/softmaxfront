'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { studio } from '@/content/copy';

const { capabilitiesSection: section, capabilities } = studio;

export default function StudioCapabilities() {
  const [cap, setCap] = useState(0);
  const c = capabilities[cap];

  return (
    <section>
      <div className="px-5 pt-[18px] pb-3.5 md:px-10 md:pt-[34px] md:pb-5 md:flex md:items-baseline md:justify-between">
        <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
          {section.title}
        </h2>
        <span className="block mt-2 md:mt-0 font-mono text-[11px] md:text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
          {section.meta}
        </span>
      </div>
      <div className="grid lg:grid-cols-2 border-t border-hairline">
        <div className="lg:border-r lg:border-hairline">
          {capabilities.map((x, i) => (
            <button
              key={x.n}
              onClick={() => setCap(i)}
              className={`w-full flex items-center gap-4 md:gap-[22px] px-5 py-4 md:px-10 md:py-6 border-b border-hairline cursor-pointer text-left transition-colors duration-200 ${
                i === cap ? 'bg-wash' : 'hover:bg-wash'
              }`}
            >
              <span className="font-mono text-xs leading-none text-ink/50 w-[30px] shrink-0">
                {x.n}
              </span>
              <span className="flex-1 font-semibold text-[20px] leading-[1.06] tracking-[-0.03em] md:text-[clamp(22px,2.3vw,30px)] md:tracking-[-0.035em]">
                {x.title}
              </span>
              <span
                className={`font-mono text-base leading-none ${
                  i === cap ? 'text-ink' : 'text-ink/30'
                }`}
              >
                →
              </span>
            </button>
          ))}
        </div>
        <div className="bg-wash px-5 pt-6 pb-8 md:px-10 md:pt-[34px] md:pb-10 flex flex-col lg:min-h-[560px]">
          <motion.div
            key={cap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col flex-1"
          >
            <div className="font-mono text-xs uppercase tracking-[0.08em] leading-none text-ink/55 mb-[18px]">
              {c.meta}
            </div>
            <h3 className="font-semibold text-[26px] leading-[1.04] tracking-[-0.035em] md:text-[clamp(26px,2.7vw,36px)] mb-3.5">
              {c.title}
            </h3>
            <p className="text-base leading-[1.6] text-ink/60 max-w-[520px] mb-[26px]">
              {c.body}
            </p>
            <div className="flex flex-col gap-[11px] mb-[30px]">
              {c.list.map((l) => (
                <div
                  key={l.k}
                  className="flex gap-3 items-baseline border-t border-ink/10 pt-[11px]"
                >
                  <span className="font-mono text-xs leading-[1.5] text-ink/50">
                    {l.k}
                  </span>
                  <span className="flex-1 text-[14.5px] leading-[1.5]">{l.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-6 md:gap-9 border-t border-ink pt-4">
              {[
                { label: section.durationLabel, value: c.weeks },
                { label: section.teamLabel, value: c.team },
                { label: section.outcomeLabel, value: c.out },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] leading-none text-ink/55 mb-[7px]">
                    {s.label}
                  </div>
                  <div className="font-semibold text-[17px] leading-none">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
