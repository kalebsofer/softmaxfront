'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollspy } from '@/hooks/useScrollspy';
import Link from 'next/link';
import Image from 'next/image';
import Magnetic from './Magnetic';

const navLinks = [
  { label: 'Traction', href: '#traction' },
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Principles', href: '#principles' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const active = useScrollspy();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-[var(--shadow-soft)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Softmax Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Softmax
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="h-px bg-foreground mt-0.5"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-secondary"
            >
              Book a call
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href="#traction"
              className="text-sm font-semibold bg-foreground text-background px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Traction
            </a>
          </Magnetic>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-px bg-foreground transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block h-px bg-foreground transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-foreground transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 border border-border rounded-lg">
                  Book a call
                </a>
                <a href="#traction" onClick={() => setMobileOpen(false)} className="text-sm font-semibold bg-foreground text-background px-4 py-2 rounded-lg">
                  Get Traction
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
