import { whatWeDo } from '@/content/copy';

export default function Studio() {
  return (
    <section id="studio" className="border-t border-hairline">
      <div className="px-5 pt-[18px] pb-3.5 md:px-10 md:pt-[34px] md:pb-[22px] md:flex md:items-baseline md:justify-between">
        <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
          {whatWeDo.title}
        </h2>
        <span className="block mt-2 md:mt-0 font-mono text-[11px] md:text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
          {whatWeDo.meta}
        </span>
      </div>
      {whatWeDo.rows.map((s) => (
        <a
          key={s.n}
          href="#contact"
          className="block border-t border-hairline px-5 py-[15px] md:px-10 md:py-[22px] hover:bg-wash transition-colors duration-200"
        >
          <div className="flex items-center gap-3 md:gap-[26px]">
            <span className="font-mono text-[10.5px] md:text-xs leading-none text-ink/50 w-[22px] md:w-[30px] shrink-0">
              {s.n}
            </span>
            <span className="flex-1 font-semibold text-[20px] leading-[1.06] tracking-[-0.03em] md:text-[clamp(22px,2.4vw,31px)] md:tracking-[-0.035em]">
              {s.title}
            </span>
            <span className="hidden md:block text-sm leading-[1.45] text-ink/60 md:max-w-[260px] lg:max-w-[420px]">
              {s.note}
            </span>
            <span className="font-mono text-[13px] md:text-base leading-none">
              →
            </span>
          </div>
          <p className="md:hidden mt-1.5 ml-[34px] text-[12.5px] leading-[1.5] text-ink/60">
            {s.note}
          </p>
        </a>
      ))}
    </section>
  );
}
