'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.97, 1, 1, 0.97]);
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [4, 0, 0, 4]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div ref={ref} style={{ opacity, scale, filter, willChange: 'opacity, transform, filter' }}>
      {children}
    </motion.div>
  );
}
