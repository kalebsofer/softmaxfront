'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Want help shipping?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need to build an AI product, fix a data pipeline, or ship a mobile app — we&apos;d love to hear what you&apos;re working on.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Or email us directly:{' '}
              <a href="mailto:hello@softmaxco.io" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                hello@softmaxco.io
              </a>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              We typically respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">Thank you!</p>
                  <p className="mt-1 text-sm text-muted-foreground">We&apos;ll be in touch soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                <Magnetic strength={0.12}>
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-2.5 px-6 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send message
                  </button>
                </Magnetic>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
