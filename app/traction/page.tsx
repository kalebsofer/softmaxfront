import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import localFont from 'next/font/local';
import QRCode from 'qrcode';
import { tractionLanding as copy } from '@/content/copy';
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  TRACTION_ANDROID_PACKAGE,
  TRACTION_APP_STORE_ID,
  detectPlatform,
} from '@/lib/traction';
import { GroupsCard, MomentumCard, SyncCard, WidgetCard } from './_components/FeatureCards';
import PhoneShot from './_components/PhoneShot';
import Ring, { ProgressGradient } from './_components/Ring';
import StoreBadges from './_components/StoreBadges';
import './landing.css';

const SITE_URL = 'https://www.softmaxco.io';
const PAGE_URL = `${SITE_URL}/traction`;
/** The QR encodes the platform-detecting redirect, so one code serves both stores. */
const QR_URL = `${PAGE_URL}/get?src=qr`;

// The whole page is set in Satoshi: Regular for body copy and Bold for
// display. Medium and semibold requests fall to the nearest of the two.
const satoshi = localFont({
  src: [
    { path: './_fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './_fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: PAGE_URL,
    siteName: 'Traction',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Traction',
  alternateName: 'Traction Health',
  description: copy.meta.description,
  url: PAGE_URL,
  image: `${SITE_URL}/images/traction/icon.png`,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  installUrl: [APP_STORE_URL, PLAY_STORE_URL],
  identifier: [
    { '@type': 'PropertyValue', name: 'appStoreId', value: TRACTION_APP_STORE_ID },
    { '@type': 'PropertyValue', name: 'androidPackage', value: TRACTION_ANDROID_PACKAGE },
  ],
  author: { '@type': 'Organization', name: 'Softmax Ltd', url: SITE_URL },
};

function Brand({ size }: { size: 'sm' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <div className={`flex items-center ${lg ? 'gap-3' : 'gap-[9px]'}`}>
      <Image
        src="/images/traction/icon.png"
        alt=""
        width={44}
        height={44}
        priority
        className={`block ${lg ? 'w-11 h-11 rounded-[13px]' : 'w-[26px] h-[26px] rounded-lg'}`}
      />
      <span
        className={`font-bold leading-none tracking-[-0.02em] ${
          lg ? 'text-[26px]' : 'text-base'
        }`}
      >
        {copy.brand}
      </span>
    </div>
  );
}

function Headline({ className }: { className: string }) {
  return (
    <h1 className={`font-bold ${className}`}>
      {copy.headline.map((line, i) => (
        <span key={line} className={`block ${i === copy.headline.length - 1 ? 'text-tl-accent' : ''}`}>
          {line}
        </span>
      ))}
    </h1>
  );
}

function Pill({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-tl-pill-bg font-bold text-tl-pill-fg shadow-[0_8px_20px_rgba(27,153,139,0.28)] ${className}`}
    >
      {label}
    </span>
  );
}

/** Desktop call to action: the QR that lands on the right store, with small store badges beside it. */
function QrCta({ svg }: { svg: string }) {
  return (
    <div className="mt-[22px] flex justify-center">
      <div className="inline-flex items-center gap-[18px] text-left">
        <div
          className="tl-qr box-border flex-none w-[108px] h-[108px] p-2 rounded-2xl bg-tl-qr-bg shadow-[0_10px_26px_rgba(19,17,20,0.08)]"
          role="img"
          aria-label={copy.qr.aria}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <div>
          <div className="font-bold text-lg leading-[1.2] tracking-[-0.02em]">
            {copy.qr.title}
          </div>
          <div className="mt-2.5 flex gap-2">
            <StoreBadges platform="desktop" layout="inline" size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneTrio({ variant }: { variant: 'desktop' | 'mobile' }) {
  const desktop = variant === 'desktop';
  const side = desktop ? 'w-[196px] top-[56px]' : 'w-[33%] top-[13%]';
  return (
    <>
      <PhoneShot
        shot="group_dark"
        alt={copy.phones.group}
        size="sm"
        maxWidth={196}
        className={`absolute left-0 -rotate-[7deg] ${side}`}
      />
      <PhoneShot
        shot="progress_light"
        alt={copy.phones.progress}
        size="sm"
        maxWidth={196}
        className={`absolute right-0 rotate-[7deg] ${side}`}
      />
      <PhoneShot
        shot="home_dark"
        alt={copy.phones.home}
        size="lg"
        maxWidth={272}
        priority
        className={`absolute left-1/2 top-0 z-[2] -translate-x-1/2 ${desktop ? 'w-[272px]' : 'w-[46%]'}`}
      />
    </>
  );
}

function LegalLinks({ className }: { className: string }) {
  return (
    <nav className={className} aria-label="Legal">
      <Link href="/traction/privacy" className="hover:underline">
        {copy.footer.privacy}
      </Link>
      <span aria-hidden="true"> · </span>
      <Link href="/traction/terms" className="hover:underline">
        {copy.footer.terms}
      </Link>
    </nav>
  );
}

export default async function TractionLandingPage() {
  // The phone layout offers the visitor's own store; reading the user agent
  // makes the page dynamic, which is fine at this traffic.
  const platform = detectPlatform(headers().get('user-agent') ?? '');
  const qrSvg = await QRCode.toString(QR_URL, {
    type: 'svg',
    margin: 0,
    color: { dark: '#131114', light: '#0000' },
  });

  return (
    <div
      className={`tl ${satoshi.variable} font-satoshi bg-tl-bg text-tl-fg antialiased`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProgressGradient />

      {/* Desktop: the 1440x860 composition, scaled to fit the viewport. */}
      <div className="tl-desktop hidden lg:flex h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div className="tl-stage tl-surface relative flex-none overflow-hidden">
          <header className="relative z-[4] h-[82px] px-[60px] flex items-center justify-between">
            <Brand size="lg" />
            <span className="text-[13px] leading-none text-tl-muted">
              {copy.footer.byline} ·{' '}
              <a href={`mailto:${copy.footer.support}`} className="hover:underline">
                {copy.footer.support}
              </a>
            </span>
          </header>

          <div className="absolute left-1/2 top-[466px] z-[1] -translate-x-1/2" aria-hidden="true">
            <Ring size={900} strokeWidth={26} progress={0.81} className="block" />
          </div>

          <div className="tl-rise relative z-[3] pt-[26px] text-center">
            <Pill label={copy.pill} className="px-5 py-2.5 text-[15px] leading-[1.4] tracking-[0.02em]" />
            <Headline className="mt-5 text-[82px] leading-[0.98] tracking-[-0.04em]" />
            <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.65] text-tl-body">
              {copy.lead}
            </p>
            <QrCta svg={qrSvg} />
          </div>

          <div className="absolute bottom-0 left-1/2 top-[606px] z-[3] w-[618px] -translate-x-1/2">
            <PhoneTrio variant="desktop" />
          </div>

          <GroupsCard variant="desktop" className="tl-corner-left absolute z-[2] top-[174px]" />
          <MomentumCard variant="desktop" className="tl-corner-right absolute z-[2] top-[174px]" />
          <WidgetCard variant="desktop" className="tl-corner-left absolute z-[2] bottom-[176px]" />
          <SyncCard variant="desktop" className="tl-corner-right absolute z-[2] bottom-[176px]" />

          <LegalLinks className="absolute left-[60px] bottom-[26px] z-[4] text-[12.5px] leading-none text-tl-muted" />
        </div>
      </div>

      {/* Phone and tablet: a single column, the store button pinned to the bottom. */}
      <div
        className="tl-surface relative flex min-h-[100dvh] flex-col overflow-hidden lg:hidden"
        style={{ '--tl-glow-y': '34%' } as React.CSSProperties}
      >
        <header className="flex h-[58px] flex-none items-center justify-center px-5">
          <Brand size="sm" />
        </header>

        <div className="tl-rise relative z-[3] mx-auto w-full max-w-[520px] flex-none px-5 text-center">
          <Pill label={copy.pillShort} className="px-4 py-2 text-[13px] leading-[1.4] tracking-[0.02em]" />
          {/* 40px fits "Build better habits," at 390 wide; narrower phones scale it down. */}
          <Headline className="mt-3.5 text-[min(40px,10.3vw)] leading-none tracking-[-0.035em]" />
          <p className="mx-auto mt-3 max-w-[330px] text-[13.5px] leading-[1.5] text-tl-body">
            {copy.lead}
          </p>
        </div>

        <div className="relative z-[3] mx-auto mt-5 grid w-full max-w-[520px] flex-none grid-cols-2 gap-2.5 px-5">
          <GroupsCard variant="mobile" />
          <MomentumCard variant="mobile" />
          <WidgetCard variant="mobile" />
          <SyncCard variant="mobile" />
        </div>

        {/* Short screens scroll a little rather than lose the phones entirely. */}
        <div className="relative min-h-[220px] flex-1 overflow-hidden">
          <div className="absolute left-1/2 top-[-168px] z-[1] -translate-x-1/2" aria-hidden="true">
            <Ring size={560} strokeWidth={16} progress={0.81} className="block" />
          </div>
          <div className="absolute left-1/2 top-4 z-[2] mx-auto w-[84%] max-w-[328px] -translate-x-1/2 aspect-[328/346]">
            <PhoneTrio variant="mobile" />
          </div>
        </div>

        <div className="tl-cta-fade relative z-[4] -mt-10 flex-none px-5 pb-5 pt-4">
          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-[9px]">
            <StoreBadges platform={platform} layout="stacked" />
          </div>
          <div className="mt-3 text-center text-[11px] leading-[1.4] text-tl-muted">
            {copy.footer.byline}
            <span aria-hidden="true"> · </span>
            <LegalLinks className="inline" />
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${copy.footer.support}`} className="hover:underline">
              {copy.footer.support}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
