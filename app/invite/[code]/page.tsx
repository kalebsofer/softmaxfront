import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'qrcode';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import OpenInAppButton from './OpenInAppButton';

// Code shape shared with the Traction Health mobile app. Uppercase, no I/L/O/1
// to avoid visual ambiguity when typed/spoken.
const CODE_REGEX = /^TRACT-[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;

const APP_STORE_URL = 'https://apps.apple.com/app/id6758675167';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.kalebrsofer.tractionhealth';

type Platform = 'ios' | 'android' | 'desktop';

function detectPlatform(userAgent: string): Platform {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
  if (/Android/i.test(userAgent)) return 'android';
  return 'desktop';
}

export const metadata: Metadata = {
  title: 'Open in Traction',
  description: "You've been invited to a shared habit on Traction Health.",
  // Invite links are private — don't index them.
  robots: { index: false, follow: false },
};

// UA-sniffing via headers() already makes this dynamic; being explicit so it
// stays out of any future ISR/cache experiments.
export const dynamic = 'force-dynamic';

export default async function InvitePage({
  params,
}: {
  params: { code: string };
}) {
  const { code } = params;

  if (!CODE_REGEX.test(code)) {
    return <Malformed />;
  }

  const ua = headers().get('user-agent') ?? '';
  const platform = detectPlatform(ua);
  const inviteUrl = `https://www.softmaxco.io/invite/${code}`;

  // Only generate a QR for the desktop case — saves a few ms on mobile renders
  // where the QR is never shown.
  // Generate at a high width — CSS scales the SVG down on mobile, so this
  // just keeps the encoded grid crisp at every viewport size.
  const qrSvg =
    platform === 'desktop'
      ? await QRCode.toString(inviteUrl, {
          type: 'svg',
          margin: 1,
          width: 640,
          color: { dark: '#1A1F2C', light: '#FAFAF7' },
        })
      : null;

  return (
    <Shell>
      {platform === 'desktop' ? (
        <DesktopBody code={code} qrSvg={qrSvg!} />
      ) : (
        <MobileBody code={code} platform={platform} />
      )}
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-md md:max-w-3xl text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 md:gap-3 mb-12 md:mb-20 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/logo.png"
              alt="Softmax"
              width={13}
              height={16}
              className="object-contain h-4 md:h-8 w-auto"
            />
            <span className="text-base md:text-2xl font-bold tracking-tight text-foreground">
              Softmax
            </span>
          </Link>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function MobileBody({
  code,
  platform,
}: {
  code: string;
  platform: 'ios' | 'android';
}) {
  const storeUrl = platform === 'ios' ? APP_STORE_URL : PLAY_STORE_URL;
  const storeLabel =
    platform === 'ios' ? 'Get Traction on the App Store' : 'Get Traction on Google Play';

  return (
    <>
      <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-6 text-balance">
        You&apos;ve been invited.
      </h1>
      <p className="text-sm md:text-xl text-muted-foreground mb-10 md:mb-16 leading-relaxed">
        Open Traction Health to accept this shared habit invite.
      </p>

      <OpenInAppButton code={code} />

      <a
        href={storeUrl}
        className="block w-full text-sm md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors py-3 md:py-5 border border-border rounded-full"
      >
        {storeLabel}
      </a>

      <div className="mt-10 md:mt-16 pt-6 md:pt-10 border-t border-border">
        <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2 md:mb-3">
          Invite code
        </p>
        <p className="text-base md:text-2xl font-mono font-medium text-foreground tracking-wider">
          {code}
        </p>
      </div>

      <p className="text-xs md:text-base text-muted-foreground mt-8 md:mt-12 leading-relaxed">
        Just installed? Tap your invite link again from where you received it
        to land straight in the habit.
      </p>
    </>
  );
}

function DesktopBody({ code, qrSvg }: { code: string; qrSvg: string }) {
  return (
    <>
      <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-6 text-balance">
        Open this on your phone
      </h1>
      <p className="text-sm md:text-xl text-muted-foreground mb-10 md:mb-16 max-w-sm md:max-w-xl mx-auto leading-relaxed">
        Scan the QR with your iPhone or Android camera to accept your Traction
        invite.
      </p>

      <div
        className="inline-block p-5 md:p-8 rounded-2xl bg-[hsl(var(--surface))] border border-border shadow-[var(--shadow-card)] mb-8 md:mb-12 w-56 md:w-[26rem] [&_svg]:w-full [&_svg]:h-auto [&_svg]:block"
        dangerouslySetInnerHTML={{ __html: qrSvg }}
      />

      <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2 md:mb-3">
        Invite code
      </p>
      <p className="text-base md:text-2xl font-mono font-medium text-foreground tracking-wider mb-10 md:mb-16">
        {code}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <a
          href={APP_STORE_URL}
          className="text-sm md:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 md:py-3 px-4 md:px-7 border border-border rounded-full"
        >
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          className="text-sm md:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 md:py-3 px-4 md:px-7 border border-border rounded-full"
        >
          Google Play
        </a>
      </div>
    </>
  );
}

function Malformed() {
  // Still 200, per the spec — a 404 on /invite/* would penalize the Universal
  // Link / App Link verification flow.
  return (
    <Shell>
      <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-6 text-balance">
        This invite link looks malformed.
      </h1>
      <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
        The link you followed isn&apos;t a valid Traction invite. Ask the friend
        who sent it to share it again.
      </p>
    </Shell>
  );
}
