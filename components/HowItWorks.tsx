'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Create',
    description:
      'Break your goals down into actionable tasks and habits - assign target values, cadences and reminders.',
  },
  {
    num: '02',
    title: 'Sync',
    description:
      'Sync Traction with your calendar app to fit habits around your work-life balance and view everything in one place.',
  },
  {
    num: '03',
    title: 'Action',
    description:
      'Some Habits Traction will detect in the background, for others end your day with a quick swipe.',
  },
  {
    num: '04',
    title: 'Review',
    description:
      'Build momentum and review your progress to see what is working and where to adjust.',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const step = Math.min(3, Math.floor(v * 4));
    setActiveStep(step);
  });

  return (
    <section ref={containerRef} id="how-it-works" className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex items-center bg-secondary/40 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Header + animated step content */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3 tracking-wide uppercase">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                Four simple steps
              </h2>
              <p className="text-muted-foreground mb-12">
                A few seconds each day. 
              </p>

              {/* Step content — animates based on scroll */}
              <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="text-6xl md:text-7xl font-bold text-border/50 block mb-4">
                      {steps[activeStep].num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {steps[activeStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Progress bar + step indicators */}
            <div className="hidden md:flex flex-col items-center gap-6">
              <div className="relative w-1 h-64 bg-border/40 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full"
                  style={{ background: 'var(--gradient-accent)' }}
                  animate={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              <div className="flex flex-col gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="flex items-center gap-3"
                    animate={{ opacity: i <= activeStep ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-300 ${
                        i === activeStep
                          ? 'bg-foreground text-background'
                          : i < activeStep
                          ? 'bg-primary/20 text-primary'
                          : 'bg-border/40 text-muted-foreground'
                      }`}
                    >
                      {step.num}
                    </div>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        i === activeStep ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
