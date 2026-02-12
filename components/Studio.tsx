'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Cog, MessageSquare, Palette, Shield } from 'lucide-react';
import Magnetic from './Magnetic';

const capabilities = [
  { icon: Brain, label: 'AI product engineering' },
  { icon: Database, label: 'Data pipelines & analytics' },
  { icon: Cog, label: 'Automation & internal tools' },
  { icon: MessageSquare, label: 'LLM integrations & evals' },
  { icon: Palette, label: 'UX for productivity products' },
  { icon: Shield, label: 'Reliability / monitoring' },
];

export default function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-lg mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Consultancy</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Softmax Studio
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We help small teams ship AI products, data platforms, and automation — fast, safely, and with clean engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((cap, i) => (
            <Magnetic key={cap.label} strength={0.1}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-secondary/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <cap.icon className="w-4.5 h-4.5 text-foreground" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-foreground">{cap.label}</span>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
