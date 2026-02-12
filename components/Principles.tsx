'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Ship the smallest useful thing',
    description: 'Scope down ruthlessly. A working feature today beats a perfect one next quarter.',
  },
  {
    title: 'Measure what matters',
    description: "Every metric should connect to a decision. If it doesn't inform action, drop it.",
  },
  {
    title: 'Design for calm',
    description: "Great tools don't create anxiety. They reduce it. Every notification, every prompt \u2014 earn its place.",
  },
  {
    title: 'Secure by default',
    description: "Security isn't a phase. It's baked into architecture, review, and deployment from day one.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Principles
          </h2>
          <p className="mt-3 text-muted-foreground">
            How we think about building.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="text-base font-semibold text-foreground mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
