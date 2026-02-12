'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Magnetic from './Magnetic';

const screens = [
  {
    src: '/images/traction/Home - 2778.png',
    alt: 'Traction Home — Action today\'s habits quickly',
    label: 'Home',
  },
  {
    src: '/images/traction/Schedule - 2778.png',
    alt: 'Traction Schedule — Fit everything around your schedule',
    label: 'Schedule',
  },
  {
    src: '/images/traction/Progress - 2778.png',
    alt: 'Traction Progress — Dig into your data with Progress',
    label: 'Progress',
  },
  {
    src: '/images/traction/Calendar - 2778.png',
    alt: 'Traction Calendar — Look forward or back with Calendar',
    label: 'Calendar',
  },
];

export default function TractionFeatures() {
  return (
    <section id="traction" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Everything you need, nothing you don&apos;t.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four core screens designed to keep you moving without burning out.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {screens.map((screen, i) => (
            <Magnetic key={screen.label} strength={0.05}>
              <motion.div
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl border border-border bg-surface overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
              >
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3">
                  <span className="text-sm font-medium text-white/90 tracking-wide">
                    {screen.label}
                  </span>
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
