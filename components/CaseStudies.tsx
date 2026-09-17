import Image from 'next/image';
import Link from 'next/link';
import { work } from '@/content/copy';

const tileTitle =
  'font-semibold text-[21px] leading-[1.06] tracking-[-0.035em] md:text-[26px] md:leading-[1.08]';
const tileMeta =
  'font-mono text-[10.5px] md:text-xs uppercase leading-none text-ink/55';

export default function CaseStudies() {
  return (
    <section id="work">
      <div className="px-5 pt-[18px] pb-3.5 md:px-10 md:pt-[34px] md:pb-[22px]">
        <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
          {work.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-hairline">
        <Link
          href="/studio"
          className="block bg-paper p-4 md:p-[26px] hover:bg-wash transition-colors duration-200"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] bg-wash overflow-hidden">
            <Image
              src="/images/whiteboard1.png"
              alt={work.fac.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
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
          {/* Warm charcoal gradient, lighter at the top like the photo's sky and darker
              at the bottom like the pavement, so the letterboxing blends in */}
          <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gradient-to-b from-[#4a4342] to-[#2c2826] overflow-hidden">
            <Image
              src="/images/tractionStreet1.png"
              alt={work.traction.imageAlt}
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              className="object-contain"
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
