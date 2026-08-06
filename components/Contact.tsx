'use client';

import { useState } from 'react';
import { contact } from '@/content/copy';
import BookCall from '@/components/BookCall';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldLabel =
  'block font-mono text-[10px] md:text-[11px] uppercase tracking-[0.08em] leading-none text-paper/65 mb-2';
const fieldInput =
  'w-full py-[13px] bg-transparent border-0 border-b border-paper/20 text-paper text-base placeholder:text-paper/40 outline-none rounded-none';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error(`Contact endpoint returned ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-ink text-paper px-5 pt-[18px] pb-10 md:px-10 md:pt-16 md:pb-14"
    >
      <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-16 items-start">
        <div>
          <h2 className="font-semibold text-[38px] leading-[0.95] tracking-[-0.042em] md:text-[clamp(42px,6vw,86px)] md:leading-[0.94] md:tracking-[-0.045em] mb-4 md:mb-6">
            {contact.title}
          </h2>
          <p className="text-sm leading-[1.55] md:text-[17px] md:leading-[1.6] text-paper/70 max-w-[520px] mb-6 md:mb-[30px]">
            {contact.lead}
          </p>
          <BookCall className="mb-6 md:mb-[30px] font-mono text-xs font-medium uppercase tracking-[0.06em] bg-[#b3402f] text-paper rounded-full px-[26px] py-[15px] hover:opacity-90 transition-opacity" />
          <div className="flex flex-wrap gap-8 md:gap-11 font-mono text-[13px] leading-[1.7] text-paper/65">
            <div>
              <div className="text-paper">{contact.email}</div>
              <div>{contact.emailNote}</div>
            </div>
            <div>
              <div className="text-paper">{contact.location}</div>
              <div>{contact.locationNote}</div>
            </div>
          </div>
        </div>

        <div className="pb-[env(safe-area-inset-bottom)]">
          {status === 'sent' ? (
            <div className="border border-paper/15 p-[34px]">
              <div className="font-semibold text-2xl leading-[1.1] tracking-[-0.03em] mb-2">
                {contact.success.title}
              </div>
              <p className="text-sm leading-[1.55] text-paper/65">
                {contact.success.body}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 md:gap-4">
              <div>
                <label htmlFor="contact-name" className={fieldLabel}>
                  {contact.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={contact.form.namePlaceholder}
                  className={fieldInput}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={fieldLabel}>
                  {contact.form.emailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder={contact.form.emailPlaceholder}
                  className={fieldInput}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={fieldLabel}>
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  required
                  placeholder={contact.form.messagePlaceholder}
                  className={`${fieldInput} leading-normal resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2.5 self-start font-mono text-xs font-medium uppercase tracking-[0.06em] bg-paper text-ink rounded-full px-[26px] py-[17px] hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === 'sending' ? contact.form.sending : contact.form.submit}
              </button>
              {status === 'error' && (
                <span className="font-mono text-[11px] leading-[1.5] text-paper/65">
                  {contact.form.error}
                </span>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
