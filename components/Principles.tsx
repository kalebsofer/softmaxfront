import { principles } from '@/content/copy';

export default function Principles() {
  return (
    <section className="border-t border-hairline px-5 pt-[18px] pb-7 md:px-10 md:pt-[34px] md:pb-11">
      <h2 className="font-semibold text-[34px] leading-[0.98] tracking-[-0.04em] md:text-[clamp(30px,3.6vw,50px)] md:leading-none mb-5 md:mb-7">
        {principles.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[34px]">
        {principles.items.map((p) => (
          <div key={p.title} className="border-t border-ink pt-4">
            <div className="font-semibold text-[19px] leading-[1.22] tracking-[-0.025em] mb-2">
              {p.title}
            </div>
            <p className="text-sm leading-[1.55] text-ink/60">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
