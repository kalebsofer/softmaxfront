import { howWeWork } from '@/content/copy';

export default function HowItWorks() {
  return (
    <section className="border-t border-hairline px-5 pt-[18px] pb-6 md:px-10 md:pt-[34px] md:pb-10">
      <div className="mb-5 md:mb-[26px] md:flex md:items-baseline md:justify-between">
        <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none">
          {howWeWork.title}
        </h2>
        <span className="block mt-2 md:mt-0 font-mono text-[11px] md:text-xs uppercase tracking-[0.05em] leading-none text-ink/55">
          {howWeWork.meta}
        </span>
      </div>
      <div
        className={`grid md:grid-cols-2 gap-px bg-hairline border border-hairline ${
          howWeWork.steps.length > 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
        }`}
      >
        {howWeWork.steps.map((st, i) => (
          <div
            key={st.n}
            className={`bg-paper px-6 pt-[26px] pb-[30px] ${
              // Odd count: let the last cell span the tablet row so no empty
              // hairline cell shows through.
              i === howWeWork.steps.length - 1 && howWeWork.steps.length % 2
                ? 'md:col-span-2 lg:col-span-1'
                : ''
            }`}
          >
            <div className="font-mono text-xs leading-none text-ink/50 mb-9">
              {st.n}
            </div>
            <div className="font-semibold text-2xl leading-[1.08] tracking-[-0.03em] mb-2.5">
              {st.title}
            </div>
            <p className="text-sm leading-[1.55] text-ink/60">{st.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
