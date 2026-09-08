import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import QRCode from 'qrcode';
import { tractionLanding as copy } from '@/content/copy';
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  TRACTION_ANDROID_PACKAGE,
  TRACTION_APP_STORE_ID,
} from '@/lib/traction';
import PhoneShot from './_components/PhoneShot';
import StoreBadges from './_components/StoreBadges';
import './landing.css';

const SITE_URL = 'https://www.softmaxco.io';
const PAGE_URL = `${SITE_URL}/traction`;
/** The QR encodes the platform-detecting redirect, so one code serves both stores. */
const QR_URL = `${PAGE_URL}/get?src=qr`;

const satoshi = localFont({
  src: [
    { path: './_fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './_fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
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
    site: copy.footer.social,
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

function Chip({ label, short, alt }: { label: string; short: string; alt?: boolean }) {
  const tone = alt
    ? 'bg-tl-chip-alt-bg text-tl-chip-alt-fg'
    : 'bg-tl-chip-bg text-tl-chip-fg';
  return (
    <span
      className={`rounded-full px-3 py-2 text-xs lg:px-3.5 lg:py-[9px] lg:text-[13px] font-medium leading-none ${tone}`}
    >
      <span className="lg:hidden">{short}</span>
      <span className="hidden lg:inline">{label}</span>
    </span>
  );
}

function Brand({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[9px] lg:gap-2.5 ${className}`}>
      <Image
        src="/images/traction/icon.png"
        alt=""
        width={30}
        height={30}
        priority
        className="block w-[27px] h-[27px] rounded-lg lg:w-[30px] lg:h-[30px] lg:rounded-[9px]"
      />
      <span className="font-satoshi font-bold text-base lg:text-lg leading-none tracking-[-0.02em]">
        {copy.brand}
      </span>
    </div>
  );
}

export default async function TractionLandingPage() {
  const qrSvg = await QRCode.toString(QR_URL, {
    type: 'svg',
    margin: 0,
    color: { dark: '#131114', light: '#0000' },
  });

  return (
    <div
      className={`tl ${satoshi.variable} ${inter.variable} font-inter min-h-[100dvh] flex flex-col bg-tl-bg text-tl-fg antialiased`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="tl-strip h-1 lg:h-[5px] flex-none" aria-hidden="true" />

      <header className="flex-none h-[60px] lg:h-[76px] px-5 lg:px-12 xl:px-24 flex items-center justify-between">
        <Brand />
        <span className="text-xs lg:text-[13px] font-medium leading-none text-tl-muted">
          <span className="lg:hidden">{copy.headerNoteShort}</span>
          <span className="hidden lg:inline">{copy.headerNote}</span>
        </span>
      </header>

      {/* Below lg the layout is a phone-width column, centered on tablets. */}
      <main className="flex-1 min-h-0 flex flex-col w-full max-w-[520px] mx-auto px-5 pt-2 lg:max-w-none lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-12 lg:pt-0 lg:pb-16 xl:px-24">
        <div className="flex-none">
          <h1 className="font-satoshi font-bold text-[34px] leading-[1.06] tracking-[-0.03em] lg:text-[58px] lg:leading-[1.04] text-pretty">
            {copy.headline}
          </h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-tl-body lg:mt-5 lg:max-w-[540px] lg:text-[17px] lg:leading-[1.7] text-pretty">
            <span className="lg:hidden">{copy.leadShort}</span>
            <span className="hidden lg:inline">{copy.lead}</span>
          </p>
          <ul className="mt-3.5 flex flex-wrap gap-1.5 lg:mt-6 lg:gap-2" aria-label="Highlights">
            {copy.chips.map((chip, i) => (
              <li key={chip.label}>
                <Chip label={chip.label} short={chip.short} alt={i === copy.chips.length - 1} />
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex mt-10 items-center gap-6">
            <div className="flex flex-col items-center gap-2.5">
              <div
                className="tl-qr box-border w-[140px] h-[140px] p-3.5 rounded-xl bg-tl-qr-bg"
                role="img"
                aria-label={`QR code linking to ${QR_URL}`}
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              <span className="text-xs font-medium leading-none text-tl-muted">
                {copy.scanToInstall}
              </span>
            </div>
            <div className="w-px h-[84px] bg-tl-divider" aria-hidden="true" />
            <div className="flex flex-col gap-2.5">
              <StoreBadges layout="inline" />
            </div>
          </div>
        </div>

        {/* Phone stage. On phones it fills the space between the copy and the badges. */}
        <div className="tl-stage relative flex-1 min-h-0 mt-[18px] overflow-hidden lg:flex-none lg:mt-0 lg:overflow-visible">
          <PhoneShot
            shot="community"
            alt={copy.phones.community}
            size="sm"
            maxWidth={236}
            className="absolute left-[1.7%] top-[34px] w-[42.9%] lg:left-auto lg:right-[45.4%] lg:top-[9.33%] lg:w-[45.4%]"
          />
          <PhoneShot
            shot="group_standings"
            alt={copy.phones.standings}
            size="lg"
            maxWidth={290}
            priority
            className="absolute right-0 top-0 w-[54.3%] lg:w-[55.8%]"
          />
        </div>
      </main>

      {/* Phone layout: badges pinned to the bottom of the screen. */}
      <div className="lg:hidden flex-none border-t border-tl-hairline">
        <div className="flex flex-col gap-[9px] w-full max-w-[520px] mx-auto px-5 pt-4 pb-5">
          <StoreBadges layout="stacked" />
        <span className="text-center text-[11px] leading-[1.4] text-tl-muted">
          {copy.footer.byline} ·{' '}
          <a href={`mailto:${copy.footer.support}`} className="hover:underline">
            {copy.footer.support}
          </a>
        </span>
        </div>
      </div>

      <footer className="hidden lg:flex flex-none h-14 items-center justify-between px-12 xl:px-24 border-t border-tl-hairline text-[13px] leading-none text-tl-muted">
        <span>
          {copy.footer.byline} · {copy.footer.tagline}
        </span>
        <nav className="flex gap-5" aria-label="Legal and contact">
          <Link href="/traction/privacy" className="hover:underline">
            {copy.footer.privacy}
          </Link>
          <Link href="/traction/terms" className="hover:underline">
            {copy.footer.terms}
          </Link>
          <Link href="/traction/data" className="hover:underline">
            {copy.footer.deleteData}
          </Link>
          <a href={`mailto:${copy.footer.support}`} className="hover:underline">
            {copy.footer.support}
          </a>
          <a
            href={copy.footer.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {copy.footer.social}
          </a>
        </nav>
      </footer>
    </div>
  );
}
