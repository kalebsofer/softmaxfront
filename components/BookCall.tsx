'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { contact } from '@/content/copy';

// Google's booking page only allows itself to be iframed when the `gv=true`
// query param is present, so make sure it's there on full calendar URLs.
const bookingEmbedUrl = (() => {
  if (!contact.booking.url) return '';
  try {
    const url = new URL(contact.booking.url);
    if (url.hostname === 'calendar.google.com' && !url.searchParams.has('gv')) {
      url.searchParams.set('gv', 'true');
    }
    return url.toString();
  } catch {
    return contact.booking.url;
  }
})();

type Props = {
  className: string;
  label?: string;
};

// Trigger button + booking modal. Renders nothing while no booking URL is
// configured in copy.ts, so it's safe to place anywhere.
export default function BookCall({ className, label }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    // Restore the previous value rather than clearing: the navbar's mobile
    // sheet also locks scroll, and this modal can open on top of it.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!contact.booking.url) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {label ?? contact.booking.cta}
      </button>
      {open &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={contact.booking.title}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
        >
          <div
            className="absolute inset-0 bg-ink/80"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-paper text-ink w-full max-w-[900px] h-[min(85dvh,720px)] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-5 border-b border-ink/10">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em]">
                {contact.booking.title}
              </span>
              <div className="flex items-center gap-5">
                <a
                  href={contact.booking.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink/60 underline underline-offset-2 hover:text-ink"
                >
                  {contact.booking.fallback}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] hover:opacity-70"
                >
                  {contact.booking.close}
                </button>
              </div>
            </div>
            <iframe
              src={bookingEmbedUrl}
              title={contact.booking.title}
              className="w-full flex-1 border-0"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
