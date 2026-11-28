import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { tractionLanding as copy } from '@/content/copy';
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  TRACTION_ANDROID_PACKAGE,
  TRACTION_APP_STORE_ID,
  detectPlatform,
  type MobilePlatform,
} from '@/lib/traction';
import Features from './_components/Features';
import Hero from './_components/Hero';
import HowItWorks from './_components/HowItWorks';
import { Reveal } from './_components/Motion';
import Nav from './_components/Nav';
import { Brand, Eyebrow, Icon, SectionHead, card, lead, section, small, titleSection, wrap } from './_components/primitives';
import StoreButtons from './_components/StoreButtons';
import './landing.css';

const SITE_URL = 'https://www.softmaxco.io';
const PAGE_URL = `${SITE_URL}/traction`;

// The Traction design system: Satoshi Bold for display, Inter for everything else.
const satoshi = localFont({
  src: [{ path: './_fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' }],
  variable: '--font-satoshi',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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

function Proof() {
  const { proof } = copy;
  return (
    <section id="proof" className={section}>
      <SectionHead title={proof.title} />
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-4">
        {proof.quotes.map((item, i) => (
          <Reveal key={item.name} order={i}>
            <figure className={`${card} m-0 flex h-full flex-col gap-3`}>
              <span role="img" aria-label={`${item.stars} out of 5 stars`} className="flex gap-0.5 text-tl-band-fill-dedicated">
                {Array.from({ length: item.stars }, (_, star) => (
                  <Icon key={star} name="star" className="h-4 w-4 !fill-current" />
                ))}
              </span>
              <blockquote className="m-0 text-base leading-6 text-tl-text">{item.quote}</blockquote>
              <figcaption className={`${small} mt-auto flex flex-col`}>
                <span className="font-semibold text-tl-text">{item.name}</span>
                {item.use}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const { faq } = copy;
  return (
    <section id="faq" className={section}>
      <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mx-auto max-w-[760px] rounded-[20px] border border-tl-divider-subtle bg-tl-card px-3.5 py-1 md:px-6 md:py-3">
        {faq.items.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary className="flex min-h-[52px] cursor-pointer items-center justify-between gap-4 text-base font-medium leading-6 text-tl-text">
              {item.q}
              <Icon name="chevronDown" className="tl-chevron h-5 w-5 transition-transform duration-200" />
            </summary>
            <p className="m-0 pb-3.5 pr-9 text-base leading-6 text-tl-text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Download({ platform }: { platform: MobilePlatform }) {
  const { cta } = copy;
  return (
    <section
      id="download"
      className="tl-cta-wash mx-3.5 mt-6 flex scroll-mt-4 flex-col items-center gap-4 rounded-[20px] px-5 py-10 text-center md:mx-5 md:mt-8 md:rounded-[32px] md:px-10 md:py-[72px]"
    >
      <Eyebrow>{cta.eyebrow}</Eyebrow>
      <h2 className={titleSection}>{cta.title}</h2>
      <p className={lead}>{cta.lead}</p>
      <StoreButtons platform={platform} className="mt-2" />
    </section>
  );
}

function Footer() {
  const { footer, nav } = copy;
  const link = 'inline-flex min-h-11 items-center transition-colors hover:text-tl-text';
  return (
    <footer className={`${wrap} flex flex-col items-start gap-4 py-7 md:flex-row md:flex-wrap md:items-center md:justify-between`}>
      <Brand />
      <nav aria-label={footer.label} className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:gap-x-6 leading-5 text-tl-text-secondary">
        {nav.links.map(({ href, label }) => (
          <a key={href} href={href} className={link}>
            {label}
          </a>
        ))}
        <Link href="/traction/privacy" className={link}>
          {footer.privacy}
        </Link>
        <Link href="/traction/terms" className={link}>
          {footer.terms}
        </Link>
        <a href={`mailto:${footer.supportEmail}`} className={link}>
          {footer.support}
        </a>
      </nav>
      <span className={small}>
        © {new Date().getFullYear()} {footer.company}
      </span>
    </footer>
  );
}

export default function TractionLandingPage() {
  // Phones are offered only their own store; reading the user agent makes the page dynamic.
  const platform = detectPlatform(headers().get('user-agent') ?? '');

  return (
    <div
      className={`tl ${satoshi.variable} ${inter.variable} tl-wash min-h-screen font-inter text-base leading-6 text-tl-text antialiased md:p-5`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-[1400px] overflow-hidden bg-tl-background md:rounded-[40px] md:border md:border-tl-divider-subtle">
        <Nav />
        <main>
          <Hero platform={platform} />
          <Features />
          <HowItWorks />
          <Proof />
          <Faq />
          <Download platform={platform} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
