'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const caseStudies = [
  {
    title: 'Habit analytics pipeline',
    problem: 'Behavioral insights took days to surface, making iteration painfully slow.',
    approach: 'Built a real-time streaming pipeline with incremental aggregation.',
    outcome: 'Reduced insight latency from days to minutes.',
  },
  {
    title: 'Support automation agent',
    problem: "Manual support triage was consuming 40% of the team's engineering time.",
    approach: 'Deployed an LLM-based classification and routing agent with human-in-the-loop.',
    outcome: 'Reduced manual triage by 60%.',
  },
  {
    title: 'Mobile performance overhaul',
    problem: 'App startup was slow and crash rates were climbing with each release.',
    approach: 'Profiled the critical path, eliminated blocking I/O, and added crash monitoring.',
    outcome: 'Cut startup time by 50% and crash rate by 3\u00d7.',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-md mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few examples of what we&apos;ve shipped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((study, i) => (
            <Magnetic key={study.title} strength={0.06}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="p-6 md:p-8 rounded-xl border border-border bg-surface"
              >
                <h3 className="text-base font-semibold text-foreground mb-4">{study.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Problem</span>
                    <p className="text-foreground/80 mt-0.5">{study.problem}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Approach</span>
                    <p className="text-foreground/80 mt-0.5">{study.approach}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Outcome</span>
                    <p className="text-foreground mt-0.5 font-medium">{study.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
