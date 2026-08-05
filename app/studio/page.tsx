import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import StudioCapabilities from '@/components/StudioCapabilities';
import { studio } from '@/content/copy';

export const metadata: Metadata = {
  title: studio.metaTitle,
  description: studio.metaDescription,
};

// Founders and Coders photography still to come — see the note in CaseStudies.tsx.
// The slots reserve their aspect ratios so nothing shifts when the images land.
function ImageSlot({
  caption,
  className = '',
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div className={`relative bg-wash ${className}`}>
      <span className="absolute bottom-3 left-3 font-mono text-[10.5px] leading-[1.4] text-ink/55 bg-paper/80 px-2 py-1.5">
        {caption}
      </span>
    </div>
  );
}

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      <SectionReveal>
        <section className="px-5 pt-6 pb-8 md:px-10 md:pt-14 md:pb-11">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] leading-none text-ink/55 mb-5 md:mb-[26px]">
            {studio.eyebrow}
          </div>
          <h1 className="text-balance font-semibold text-[40px] leading-[0.94] tracking-[-0.042em] md:text-[clamp(48px,6.4vw,92px)] md:leading-[0.93] md:tracking-[-0.045em] max-w-[1180px]">
            {studio.headline}
          </h1>
          <p className="mt-5 md:mt-[26px] text-[17px] leading-[1.6] md:text-[clamp(17px,1.5vw,20px)] text-ink/60 max-w-[640px]">
            {studio.lead}
          </p>
        </section>
      </SectionReveal>

      <div className="border-y border-hairline grid grid-cols-2 md:grid-cols-4">
        {studio.stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-[22px] px-5 md:px-7 ${i === 0 ? 'md:pl-10' : ''} ${
              i < studio.stats.length - 1 ? 'border-r border-hairline' : ''
            } ${i < 2 ? 'max-md:border-b max-md:border-hairline' : ''} ${
              i === 1 ? 'max-md:border-r-0' : ''
            }`}
          >
            <div className="font-semibold text-[28px] md:text-[34px] leading-none tracking-[-0.04em]">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[11px] md:text-[11.5px] uppercase tracking-[0.05em] leading-tight text-ink/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <StudioCapabilities />

      <section
        id="engage"
        className="border-t border-hairline px-5 pt-[18px] pb-6 md:px-10 md:pt-[34px] md:pb-10"
      >
        <div className="mb-5 md:mb-[26px] md:flex md:items-baseline md:justify-between">
          <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
            {studio.engage.title}
          </h2>
          <span className="block mt-2 md:mt-0 font-mono text-[11px] md:text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
            {studio.engage.meta}
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {studio.engage.cards.map((e) => (
            <div key={e.kicker} className="bg-paper px-[26px] pt-7 pb-8">
              <div className="font-mono text-xs leading-none text-ink/50 mb-[34px]">
                {e.kicker}
              </div>
              <div className="font-semibold text-[24px] md:text-[27px] leading-[1.04] tracking-[-0.035em] mb-3">
                {e.title}
              </div>
              <p className="text-[14.5px] leading-[1.55] text-ink/60 mb-[18px]">
                {e.body}
              </p>
              <div className="font-mono text-xs leading-[1.9] text-ink/55">
                {e.deliverables.map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline grid lg:grid-cols-2">
        <div className="px-5 pt-[18px] pb-8 md:px-10 md:pt-[34px] md:pb-10 lg:border-r lg:border-hairline">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.08em] leading-none text-ink/55 mb-4 md:mb-5">
            {studio.caseStudy.eyebrow}
          </div>
          <h2 className="font-semibold text-[30px] leading-[1.02] tracking-[-0.04em] md:text-[clamp(28px,3.2vw,44px)] mb-4">
            {studio.caseStudy.title}
          </h2>
          <p className="text-base leading-[1.6] text-ink/60 max-w-[520px] mb-[26px]">
            {studio.caseStudy.context}
          </p>
          <div>
            {studio.caseStudy.rows.map((row) => (
              <div
                key={row.n}
                className="border-t border-ink/10 py-3.5 flex gap-[18px]"
              >
                <span className="font-mono text-xs leading-[1.5] text-ink/50 w-[26px] shrink-0">
                  {row.n}
                </span>
                <span className="flex-1 text-[15px] leading-[1.5]">
                  <strong className="font-semibold">{row.title}</strong> —{' '}
                  {row.body}
                </span>
              </div>
            ))}
          </div>
          <a
            href="https://www.foundersandcoders.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-[26px] font-mono text-xs font-medium uppercase tracking-[0.05em] leading-none border-b border-ink/20 pb-[5px]"
          >
            {studio.caseStudy.link}
          </a>
        </div>
        <div className="px-5 pt-4 pb-8 md:px-10 md:pt-[34px] md:pb-10 flex flex-col gap-4">
          <ImageSlot
            caption={studio.caseStudy.imageCaptions.main}
            className="flex-1 min-h-[240px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <ImageSlot
              caption={studio.caseStudy.imageCaptions.left}
              className="aspect-square"
            />
            <ImageSlot
              caption={studio.caseStudy.imageCaptions.right}
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper px-5 pt-10 pb-10 md:px-10 md:pt-16 md:pb-[60px] flex flex-wrap items-end gap-8 md:gap-14">
        <div className="flex-1 md:min-w-[420px]">
          <h2 className="font-semibold text-[38px] leading-[0.95] tracking-[-0.042em] md:text-[clamp(40px,5.6vw,80px)] md:leading-[0.94] md:tracking-[-0.045em] mb-4 md:mb-5">
            {studio.cta.title}
          </h2>
          <p className="text-sm leading-[1.55] md:text-[17px] md:leading-[1.6] text-paper/70 max-w-[520px]">
            {studio.cta.lead}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 items-center">
          <Link
            href="/#contact"
            className="font-mono text-xs font-medium uppercase tracking-[0.06em] bg-paper text-ink rounded-full px-7 py-[18px] hover:opacity-90 transition-opacity"
          >
            {studio.cta.primary}
          </Link>
          <a
            href="mailto:hello@softmaxco.io"
            className="font-mono text-xs font-medium uppercase tracking-[0.06em] border border-paper/20 rounded-full px-7 py-[18px] hover:bg-paper/[0.08] transition-colors"
          >
            {studio.cta.secondary}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
