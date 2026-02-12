'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';

const line1 = ['Stop', 'drifting'];
const line2 = ['start', 'finishing.'];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4], [0.03, 0]);

  return (
    <section ref={heroRef} id="traction" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated gradient blob — parallax: moves opposite to scroll */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: 'var(--gradient-accent)',
          y: blobY,
          scale: blobScale,
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern — fades on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: gridOpacity,
        }}
      />

      {/* Content — parallax: moves slower than scroll */}
      <motion.div
        className="container relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase"
          >
            Productivity and Wellness
          </motion.p>

          {/* Word-by-word reveal headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
            <span className="block overflow-hidden pb-3">
              {line1.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.28em]"
                  initial={{ y: '110%', rotateX: -80 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.1,
                    duration: 0.7,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  style={{ transformOrigin: 'bottom' }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pb-2">
              {line2.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.28em]"
                  initial={{ y: '110%', rotateX: -80 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{
                    delay: 0.45 + i * 0.1,
                    duration: 0.7,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  style={{ transformOrigin: 'bottom' }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Traction is a simple system for planning and tracking habits around your daily schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Magnetic strength={0.15}>
              <a
                href="https://apps.apple.com/gb/app/daily-traction/id6758675167"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium opacity-80">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a
                href="https://play.google.com/store/apps/details?id=com.kalebrsofer.tractionhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.68c-.37-.2-.6-.58-.6-1V1.32c0-.42.23-.8.6-1l10.13 11.68L3.18 23.68zm1.4.82l11.12-6.43-2.47-2.85-8.65 9.28zm14.6-10.38l-2.88-1.66-2.72 3.14 2.72 3.14 2.88-1.66c.85-.49.85-1.72 0-2.96zm-3.88-2.26L4.58.56l8.65 9.97 2.07-2.67z"/></svg>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium opacity-80">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-5 flex items-center gap-4 justify-center md:justify-start"
          >
            <span className="text-sm font-medium text-muted-foreground">Free on iOS & Android</span>
            <span className="text-border">·</span>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
