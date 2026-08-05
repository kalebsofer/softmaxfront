import { NextResponse } from 'next/server';

const TO_EMAIL = 'hello@softmaxco.io';
const MAX_LENGTHS = { name: 200, email: 320, message: 5000 } as const;

function field(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const safeName = field(name, MAX_LENGTHS.name);
  const safeEmail = field(email, MAX_LENGTHS.email);
  const safeMessage = field(message, MAX_LENGTHS.message);

  if (!safeName || !safeEmail || !safeMessage || !safeEmail.includes('@')) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; contact form cannot send email');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Softmax Website <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: safeEmail,
      subject: `Website enquiry from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error(`Resend API error ${res.status}: ${detail}`);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
