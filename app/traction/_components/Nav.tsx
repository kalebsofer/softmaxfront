'use client';

import { useEffect, useState } from 'react';
import { tractionLanding as copy } from '@/content/copy';
import { Brand, Icon, wrap } from './primitives';
import { solidButton } from './StoreButtons';

const { nav } = copy;

/**
 * The site bar: brand, section links and the download button. Below 1024px the
 * links fold into a menu that drops down under the bar.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={wrap}>
      <div className="flex h-[60px] items-center justify-between md:h-[76px]">
        <Brand />
        <nav aria-label={nav.label} className="hidden gap-8 text-tl-text-secondary lg:flex">
          {nav.links.map(({ href, label }) => (
            <a key={href} href={href} className="inline-flex min-h-11 items-center transition-colors hover:text-tl-text">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#download" className={solidButton}>
            {nav.cta}
          </a>
          <button
            type="button"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            aria-controls="tl-menu"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center text-tl-text lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="tl-menu" aria-label={nav.label} className="flex flex-col pb-3 lg:hidden">
          {nav.links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center border-t border-tl-divider-subtle text-tl-text-secondary"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
