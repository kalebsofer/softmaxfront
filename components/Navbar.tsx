'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { nav } from '@/content/copy';
import BookCall from '@/components/BookCall';

const pill =
  'font-mono text-xs font-medium uppercase tracking-[0.05em] rounded-full px-[18px] py-3 transition-colors';

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const onStudio = pathname === '/studio';
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
        <Link href="/" className="flex items-center gap-[9px]">
          <Image
            src="/images/logo.png"
            alt=""
            width={14}
            height={17}
            className="object-contain"
          />
          <span className="text-[19px] font-bold leading-none tracking-[-0.035em]">
            {nav.brand}
          </span>
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
          <Link
            href={onStudio ? '#engage' : anchor('contact')}
            className={`${pill} border border-ink/[0.12] hover:bg-ink/[0.04]`}
          >
            {nav.startProject}
          </Link>
          <BookCall
            className={`${pill} bg-[#b3402f] text-paper hover:opacity-[0.88] transition-opacity`}
          />
          {!onStudio && (
            <Link
              href={anchor('traction')}
              className={`${pill} bg-ink text-paper hover:opacity-[0.88] transition-opacity`}
            >
              {nav.getTraction}
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden font-mono text-[11px] font-medium uppercase tracking-[0.05em] bg-ink text-paper rounded-full px-4 py-[11px]"
          aria-label="Open menu"
        >
          {nav.menu}
        </button>
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
              className="flex items-center gap-[9px]"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={14}
                height={17}
                className="object-contain"
              />
              <span className="text-[19px] font-bold leading-none tracking-[-0.035em]">
                {nav.brand}
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.05em] bg-ink text-paper rounded-full px-4 py-[11px]"
              aria-label="Close menu"
            >
              {nav.close}
            </button>
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
            <Link
              href={onStudio ? '#engage' : anchor('contact')}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs font-medium uppercase tracking-[0.06em] bg-ink text-paper rounded-full p-[17px] text-center"
            >
              {nav.startProject}
            </Link>
            <BookCall className="font-mono text-xs font-medium uppercase tracking-[0.06em] bg-[#b3402f] text-paper rounded-full p-[17px] text-center" />
            {!onStudio && (
              <Link
                href={anchor('traction')}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs font-medium uppercase tracking-[0.06em] border border-ink/[0.12] rounded-full p-[17px] text-center"
              >
                {nav.getTraction}
              </Link>
            )}
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
