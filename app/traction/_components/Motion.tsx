'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/** The app's Reanimated springs, as framer-motion transitions. */
const GENTLE = { type: 'spring', damping: 20, stiffness: 90 } as const;
const BOUNCY = { type: 'spring', damping: 8, stiffness: 300 } as const;
const FADE = { duration: 0.3 } as const;
const VIEWPORT = { once: true, margin: '-40px' } as const;

/**
 * Rises into place on the gentle spring the first time it scrolls into view.
 * `order` staggers siblings by 70ms. Reduced motion fades only.
 */
export function Reveal({
  children,
  className,
  order = 0,
}: {
  children: ReactNode;
  className?: string;
  order?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? FADE : { ...GENTLE, delay: order * 0.07 }}
    >
      {children}
    </motion.div>
  );
}

/** A celebration: pops in once on the bouncy spring. Reduced motion fades only. */
export function Pop({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: reduce ? 1 : 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={reduce ? FADE : { ...BOUNCY, delay }}
    >
      {children}
    </motion.div>
  );
}
