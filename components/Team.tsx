'use client';

import { useState } from 'react';
import Image from 'next/image';
import { team } from '@/content/copy';

export default function Team() {
  const [open, setOpen] = useState(0);

  return (
    <section id="team">
      <div className="px-5 pt-[18px] pb-3.5 md:px-10 md:pt-[34px] md:pb-[22px] md:flex md:items-baseline md:justify-between">
        <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
          {team.title}
        </h2>
        <span className="block mt-2 md:mt-0 font-mono text-[11px] md:text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
          {team.meta}
        </span>
      </div>
      {team.members.map((member, i) => {
        const isOpen = open === i;
        return (
          <div
            key={member.name}
            onClick={() => setOpen(isOpen ? -1 : i)}
            className={`border-t border-hairline px-5 py-3.5 md:px-10 md:py-5 cursor-pointer transition-colors duration-200 ${
              isOpen ? 'bg-wash' : 'hover:bg-wash'
            }`}
          >
            <div className="flex items-center gap-3.5 md:gap-[22px]">
              <Image
                src={member.image}
                alt={member.name}
                width={42}
                height={42}
                className="w-9 h-9 md:w-[42px] md:h-[42px] rounded-full object-cover shrink-0"
              />
              <div className="flex-1 md:flex-none">
                <div className="font-semibold text-[20px] leading-[1.02] tracking-[-0.03em] md:text-[clamp(24px,2.6vw,34px)] md:leading-[1.04] md:tracking-[-0.035em]">
                  {member.name}
                </div>
                <div className="mt-[3px] md:hidden font-mono text-[10.5px] uppercase leading-none text-ink/55">
                  {member.role}
                </div>
              </div>
              <span className="hidden md:inline font-mono text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
                {member.role}
              </span>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden md:inline-block ml-auto font-mono text-xs uppercase tracking-[0.05em] leading-none text-ink/55 border-b border-ink/[0.15] pb-[3px] hover:text-ink transition-colors"
              >
                {team.linkedinLabel}
              </a>
              <span className="font-mono text-[15px] leading-none text-ink/60 w-3.5 text-center">
                {isOpen ? '–' : '+'}
              </span>
            </div>
            <p
              className={`accordion-bio overflow-hidden text-[12.5px] leading-[1.55] md:text-[15px] md:leading-[1.6] text-ink/60 max-w-[820px] md:ml-16 ${
                isOpen
                  ? 'max-h-[110px] md:max-h-[120px] opacity-100 mt-[11px] md:mt-3.5'
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              {member.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
