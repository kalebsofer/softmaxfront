import Image from 'next/image';
import Link from 'next/link';
import { work } from '@/content/copy';

// Founders and Coders photography is still to come — drop the file into
// public/images/ and point this at it. The slot keeps its aspect ratio either
// way so the layout will not shift when the photo lands.
const FAC_PHOTO: string | null = null;

const tileTitle =
  'font-semibold text-[21px] leading-[1.06] tracking-[-0.035em] md:text-[26px] md:leading-[1.08]';
const tileMeta =
  'font-mono text-[10.5px] md:text-xs uppercase leading-none text-ink/55';

export default function CaseStudies() {
  return (
    <section id="work">
      {/* Mobile-only section header */}
      <div className="md:hidden flex items-baseline justify-between border-b border-hairline px-5 py-4">
        <span className="font-semibold text-[22px] leading-none tracking-[-0.035em]">
          {work.mobileTitle}
        </span>
        <span className="font-mono text-[11px] leading-none text-ink/55">
          {work.mobileCount}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-hairline">
        <Link
          href="/studio"
          className="block bg-paper p-4 md:p-[26px] hover:bg-wash transition-colors duration-200"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] bg-wash overflow-hidden">
            {FAC_PHOTO ? (
              <Image
                src={FAC_PHOTO}
                alt={work.fac.imageAlt}
                fill
                className="object-cover"
              />
            ) : (
              <span className="absolute bottom-3 left-3 font-mono text-[11px] leading-[1.4] text-ink/55 bg-paper/80 px-2.5 py-1.5">
                {work.fac.placeholderCaption}
              </span>
            )}
          </div>
          <div className="mt-3 md:mt-[18px] md:flex md:justify-between md:items-baseline">
            <span className={tileTitle}>{work.fac.title}</span>
            <span className={`${tileMeta} block mt-[5px] md:mt-0`}>
              {work.fac.meta}
            </span>
          </div>
        </Link>

        <a
          href="#traction"
          className="block bg-paper p-4 md:p-[26px] hover:bg-wash transition-colors duration-200"
        >
          <div className="aspect-[4/3] md:aspect-[16/10] bg-ink flex items-center justify-center overflow-hidden">
            <Image
              src="/images/traction/Home - 2778.png"
              alt={work.traction.imageAlt}
              width={1284}
              height={2778}
              className="w-[40%] md:w-[36%] h-auto translate-y-[9%] rounded-[10px] md:rounded-2xl"
            />
          </div>
          <div className="mt-3 md:mt-[18px] md:flex md:justify-between md:items-baseline">
            <span className={tileTitle}>{work.traction.title}</span>
            <span className={`${tileMeta} block mt-[5px] md:mt-0`}>
              {work.traction.meta}
            </span>
          </div>
        </a>
      </div>

      <div className="border-t border-hairline px-5 py-[18px] md:px-10 md:py-[34px] flex items-start gap-12">
        <p className="font-medium text-[19px] leading-[1.24] tracking-[-0.02em] md:text-[clamp(20px,2.1vw,29px)] md:leading-[1.28] md:tracking-[-0.022em] max-w-[780px]">
          {work.statement}
        </p>
        <Link
          href="/studio"
          className="hidden md:inline-block font-mono text-xs font-medium uppercase tracking-[0.05em] leading-none ml-auto whitespace-nowrap border-b border-ink/20 pb-[5px]"
        >
          {work.whyUs}
        </Link>
      </div>
    </section>
  );
}
