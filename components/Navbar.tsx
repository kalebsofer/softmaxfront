'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { nav } from '@/content/copy';
import BookCall from '@/components/BookCall';
import { PillButton, pillButtonVariants } from '@/components/ui/pill-button';

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const onStudio = pathname === '/studio';
  // Home and Studio already lead with their own calls to action.
  const showGetTraction = !onHome && !onStudio;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // On the homepage nav items anchor-scroll; everywhere else they route home first.
  const anchor = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  const navLinks = [
    { label: nav.links.work, href: anchor('work'), active: false },
    { label: nav.links.studio, href: '/studio', active: onStudio },
    { label: nav.links.traction, href: anchor('traction'), active: false },
    { label: nav.links.team, href: anchor('team'), active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-[14px]">
      <div className="flex items-center justify-between px-5 py-3.5 md:px-10 md:py-[22px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/smc-primary.svg"
            alt={nav.brand}
            width={62}
            height={20}
            priority
            className="h-5 w-auto md:h-[22px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-[30px] font-mono text-xs uppercase tracking-[0.05em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors ${
                link.active ? 'text-ink' : 'text-ink/55 hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-[9px]">
          <PillButton asChild tone="outline">
            <Link href={onStudio ? '#engage' : anchor('contact')}>
              {nav.messageUs}
            </Link>
          </PillButton>
          <BookCall className={pillButtonVariants({ tone: 'signal' })} />
          {showGetTraction && (
            <PillButton asChild>
              <Link href={anchor('traction')}>{nav.getTraction}</Link>
            </PillButton>
          )}
        </div>

        <PillButton
          size="sm"
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          {nav.menu}
        </PillButton>
      </div>

      {/* Full-screen mobile sheet — portalled to body: the header's backdrop-filter
          would otherwise become the containing block for this fixed overlay. */}
      {mobileOpen &&
        createPortal(
        <div className="fixed inset-0 z-[60] bg-paper flex flex-col md:hidden">
          <div className="flex items-center justify-between px-5 py-3.5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/brand/smc-primary.svg"
                alt={nav.brand}
                width={62}
                height={20}
                className="h-5 w-auto"
              />
            </Link>
            <PillButton
              size="sm"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              {nav.close}
            </PillButton>
          </div>
          <nav className="flex-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-t border-hairline px-5 py-5 text-[28px] font-semibold leading-none tracking-[-0.035em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-[9px] px-5 pb-8">
            <PillButton asChild size="block">
              <Link
                href={onStudio ? '#engage' : anchor('contact')}
                onClick={() => setMobileOpen(false)}
              >
                {nav.messageUs}
              </Link>
            </PillButton>
            <BookCall className={pillButtonVariants({ tone: 'signal', size: 'block' })} />
            {showGetTraction && (
              <PillButton asChild tone="outline" size="block">
                <Link href={anchor('traction')} onClick={() => setMobileOpen(false)}>
                  {nav.getTraction}
                </Link>
              </PillButton>
            )}
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
