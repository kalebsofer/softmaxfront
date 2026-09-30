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
  type MobilePlatform,
} from '@/lib/traction';
import GlassLens from './_components/GlassLens';
import GlassNav from './_components/GlassNav';
import Glow from './_components/Glow';
import { BottomBlur } from './_components/ProgressiveBlur';
import ScreensRail from './_components/ScreensRail';
import StoreButtons, { PLAY_URL } from './_components/StoreButtons';
import './landing.css';

const SITE_URL = 'https://www.softmaxco.io';
const PAGE_URL = `${SITE_URL}/traction`;
/** The QR encodes the platform-detecting redirect, so one code serves both stores. */
const QR_URL = `${PAGE_URL}/get?src=qr`;
const IMG = '/images/traction';

// Satoshi throughout: Light for the italic accents and big numerals, Regular
// for body copy and Bold for display.
const satoshi = localFont({
  src: [
    { path: './_fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: './_fonts/Satoshi-LightItalic.otf', weight: '300', style: 'italic' },
    { path: './_fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './_fonts/Satoshi-Italic.otf', weight: '400', style: 'italic' },
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

/** The last 14 days as steps on the completion scale (0 to 5); today is last. */
const MOMENTUM_DAYS = [0, 1, 4, 5, 5, 3, 5, 5, 2, 5, 4, 5, 5, 5];

const kicker = 'text-[15px] font-bold text-tl-accent';
/** The dark frame around every photo and screen: a 12px bezel, 48px corners. */
const frame = 'relative rounded-[48px] bg-tl-card p-3';

function Accent({ children, block }: { children: React.ReactNode; block?: boolean }) {
  return <span className={`font-light italic ${block ? 'block' : ''}`}>{children}</span>;
}

function QrTile({ svg, size }: { svg: string; size: 'sm' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <div
      className={`tl-qr box-border flex-none bg-tl-fg ${
        lg
          ? 'h-44 w-44 rounded-[40px] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.35)]'
          : 'h-[104px] w-[104px] rounded-[32px] p-3'
      }`}
      role="img"
      aria-label={copy.qr.aria}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

/**
 * The call to action laid over the hero photo. A desktop visitor scans the QR
 * with their phone; a phone visitor taps straight through to its own store.
 */
function HeroCta({ platform, qrSvg }: { platform: MobilePlatform; qrSvg: string }) {
  const row = 'absolute inset-x-4 bottom-4 flex items-center gap-[18px] pr-2';
  if (platform === 'desktop') {
    return (
      <div className={row}>
        <QrTile svg={qrSvg} size="sm" />
        <div>
          <div className="text-xl font-bold tracking-[-0.02em]">{copy.qr.title}</div>
          <div className="mt-1 text-[15px] italic text-tl-soft">{copy.qr.byline}</div>
        </div>
      </div>
    );
  }
  const ios = platform === 'ios';
  return (
    <a href={ios ? APP_STORE_URL : PLAY_URL} className={row}>
      <Image
        src={`${IMG}/icon.png`}
        alt=""
        width={104}
        height={104}
        className="h-[104px] w-[104px] flex-none rounded-[32px] shadow-[0_0_0_0.5px_rgba(255,255,255,0.18)]"
      />
      <div>
        <div className="text-xl font-bold tracking-[-0.02em]">{copy.install.title}</div>
        <div className="mt-1 text-[15px] italic text-tl-soft">
          {ios ? copy.install.ios : copy.install.android}
        </div>
      </div>
    </a>
  );
}

function Hero({ platform, qrSvg }: { platform: MobilePlatform; qrSvg: string }) {
  return (
    <section className="relative flex min-h-[max(100vh,760px)] items-center overflow-hidden">
      <div aria-hidden="true" className="absolute inset-[-12%] bg-tl-bg">
        <Image
          src="/images/tractionStreet1.png"
          alt=""
          fill
          sizes="256px"
          className="object-cover opacity-[0.85] [filter:blur(90px)_saturate(2.2)] [object-position:50%_68%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,20,0.88)_0%,rgba(19,17,20,0.55)_50%,rgba(19,17,20,0.15)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(180deg,rgba(19,17,20,0),#131114)]"
      />

      <div className="tl-container relative flex w-full flex-wrap items-center gap-[clamp(40px,6vw,96px)] pb-20 pt-32">
        <div className="tl-rise min-w-0 flex-[1_1_520px]">
          <p className="text-lg italic text-tl-body">{copy.kicker}</p>
          <h1 className="mt-5 text-[clamp(52px,7vw,112px)] font-bold leading-[0.94] tracking-[-0.045em]">
            <span className="block">{copy.headline[0]}</span>
            <span className="block font-light italic tracking-[-0.035em] text-tl-accent">
              {copy.headline[1]}
            </span>
          </h1>
          <p className="mt-8 max-w-[540px] text-[clamp(17px,1.4vw,20px)] leading-[1.55] text-tl-body sm:[text-wrap:pretty]">
            {copy.lead}
          </p>
          <StoreButtons platform={platform} className="mt-10" />
        </div>

        <div className="relative min-w-[280px] flex-[0_1_460px]">
          <Glow
            src="/images/tractionStreet1.png"
            className="left-[6%] top-[10%] h-[94%] w-[88%] rounded-[48px]"
            blur={48}
            saturate={2.4}
            opacity={0.9}
            objectPosition="50% 70%"
          />
          <div className="relative aspect-[4/5.4] overflow-hidden rounded-[48px] bg-tl-card shadow-[0_0_0_0.5px_rgba(255,255,255,0.08)]">
            <Image
              src="/images/tractionStreet1.png"
              alt={copy.heroPhotoAlt}
              fill
              priority
              sizes="(min-width: 1100px) 460px, calc(100vw - 40px)"
              className="object-cover [object-position:50%_74%]"
            />
            <BottomBlur className="h-[46%]" blurs={[3, 10, 24]} shade={0.62} shadeStop={70} />
            <HeroCta platform={platform} qrSvg={qrSvg} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Momentum() {
  const { momentum } = copy;
  return (
    <section
      id="momentum"
      className="tl-container flex scroll-mt-20 flex-wrap items-center gap-[clamp(48px,6vw,96px)] py-[clamp(80px,10vw,160px)]"
    >
      <div className="min-w-0 flex-[1_1_380px]">
        <p className={kicker}>{momentum.kicker}</p>
        <h2 className="mt-3.5 text-[clamp(36px,4vw,56px)] font-bold leading-none tracking-[-0.035em]">
          {momentum.title}
        </h2>
        <div className="mt-2 flex items-baseline gap-3.5">
          <span className="text-[clamp(120px,15vw,220px)] font-light leading-[0.85] tracking-[-0.06em]">
            {momentum.value}
          </span>
          <span className="text-[clamp(28px,3vw,44px)] font-light italic text-tl-body">{momentum.unit}</span>
        </div>
        <div aria-hidden="true" className="mt-10 flex items-center gap-2 text-sm text-tl-muted">
          <span>0%</span>
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <span
              key={step}
              className="h-3 w-[30px] rounded-md"
              style={{ background: `var(--tl-scale-${step})` }}
            />
          ))}
          <span>100%</span>
        </div>
      </div>

      <div className="relative min-w-0 flex-[1_1_520px]">
        <div
          aria-hidden="true"
          className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(27,153,139,0.55),rgba(164,231,156,0.25)_55%,rgba(242,186,201,0))] blur-[40px]"
        />
        <div role="img" aria-label={momentum.aria} className="relative grid grid-cols-7 gap-[clamp(6px,1vw,14px)]">
          {MOMENTUM_DAYS.map((step, i) => (
            <span
              key={i}
              className={`aspect-square rounded-[22%] ${
                i === MOMENTUM_DAYS.length - 1 ? 'shadow-[0_0_0_3px_#131114,0_0_0_5px_#4ade80]' : ''
              }`}
              style={{ background: `var(--tl-scale-${step})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Groups() {
  const { groups } = copy;
  return (
    <section id="groups" className="tl-container flex scroll-mt-20 flex-wrap gap-[clamp(24px,3vw,32px)]">
      <div className="relative min-w-0 flex-[1.8_1_560px]">
        <Glow
          src={`${IMG}/photos/friends.png`}
          className="left-[5%] top-[10%] h-[92%] w-[90%] rounded-[48px]"
          blur={64}
          saturate={2.2}
          opacity={0.8}
          objectPosition="50% 75%"
        />
        <div className={frame}>
          {/* Phones get a squarer crop anchored to the bottom, so the slide's own
              title at the top of the photo stays out of frame. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-tl-well sm:aspect-auto sm:h-[clamp(520px,50vw,680px)]">
            <Image
              src={`${IMG}/photos/friends.png`}
              alt={groups.photoAlt}
              fill
              sizes="(min-width: 1100px) 800px, 100vw"
              className="object-cover [object-position:50%_100%] sm:[object-position:50%_76%]"
            />
            <BottomBlur className="h-[56%]" blurs={[3, 10, 26]} shade={0.62} shadeStop={78} />
            <div className="absolute bottom-[clamp(24px,4vw,44px)] left-[clamp(24px,4vw,48px)] right-[clamp(24px,4vw,48px)]">
              <p className={kicker}>{groups.kicker}</p>
              <h2 className="mt-3 text-[clamp(34px,4vw,56px)] font-bold leading-[1.02] tracking-[-0.035em]">
                {groups.title} <Accent block>{groups.titleAccent}</Accent>
              </h2>
              <div className="mt-[22px] flex items-center gap-3.5">
                <div className="flex flex-none">
                  {groups.members.map((name, i) => (
                    <Image
                      key={name}
                      src={`${IMG}/avatars/${name.toLowerCase()}.png`}
                      alt={name}
                      width={40}
                      height={40}
                      className={`block h-10 w-10 rounded-full shadow-[0_0_0_2px_#131114] ${i ? '-ml-2.5' : ''}`}
                    />
                  ))}
                  <span className="-ml-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-tl-fg text-[13px] font-bold text-tl-bg shadow-[0_0_0_2px_#131114]">
                    {groups.more}
                  </span>
                </div>
                <span className="text-base text-tl-soft">{groups.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capped once the row wraps, so the screen is not blown up to full width. */}
      <div className="relative mx-auto w-full min-w-0 max-w-[480px] flex-[1_1_320px]">
        <Glow
          src={`${IMG}/screens/group.png`}
          className="left-[6%] top-[10%] h-[92%] w-[88%] rounded-[48px]"
          blur={60}
          saturate={1.8}
          opacity={0.75}
        />
        <div className={`${frame} box-border h-full`}>
          <div className="relative h-full min-h-[520px] overflow-hidden rounded-[36px] bg-tl-screen-bg">
            <Image
              src={`${IMG}/screens/group.png`}
              alt={groups.screenAlt}
              fill
              sizes="(min-width: 1100px) 440px, 100vw"
              className="object-cover [object-position:50%_62%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Screens() {
  const { screens } = copy;
  return (
    <section aria-labelledby="screens-title" className="relative mt-[clamp(80px,10vw,140px)]">
      <div className="tl-container">
        <h2
          id="screens-title"
          className="text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.04em]"
        >
          {screens.title} <Accent>{screens.titleAccent}</Accent>
        </h2>
      </div>
      <ScreensRail prevLabel={screens.prev} nextLabel={screens.next}>
        {screens.items.map((item) => (
          <div key={item.src} className="relative w-[clamp(280px,27vw,360px)] flex-none snap-start">
            <Glow
              src={`${IMG}/screens/${item.src}.png`}
              className="left-[8%] top-[8%] h-[70%] w-[84%]"
              blur={44}
              saturate={1.8}
              opacity={0.7}
              objectPosition="50% 100%"
            />
            <div className={frame}>
              <div className="relative aspect-[1290/2080] overflow-hidden rounded-[36px] bg-tl-screen-bg">
                <Image
                  src={`${IMG}/screens/${item.src}.png`}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1334px) 336px, (min-width: 1037px) 27vw, 256px"
                  className="object-cover [object-position:50%_100%]"
                />
              </div>
              <h3 className="px-4 pb-3.5 pt-[22px] text-2xl font-bold leading-[1.1] tracking-[-0.025em]">
                {item.title}
                {item.accent && (
                  <>
                    {' '}
                    <Accent>{item.accent}</Accent>
                  </>
                )}
              </h3>
            </div>
          </div>
        ))}
      </ScreensRail>
    </section>
  );
}

function WidgetAndSync() {
  const { widget, sync } = copy;
  const title = 'mt-2.5 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.1] tracking-[-0.03em]';
  return (
    <section className="tl-container grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(24px,3vw,32px)] pt-[clamp(24px,3vw,32px)]">
      <div id="widget" className="relative scroll-mt-20">
        <Glow
          src={`${IMG}/screens/widget.png`}
          className="left-[6%] top-[8%] h-[70%] w-[88%] rounded-[48px]"
          blur={60}
          saturate={1.8}
          opacity={0.6}
        />
        <div className={`${frame} box-border flex h-full flex-col`}>
          <div className="relative h-[420px] overflow-hidden rounded-[36px] bg-tl-screen-bg">
            <Image
              src={`${IMG}/screens/widget.png`}
              alt={widget.alt}
              fill
              sizes="(min-width: 1100px) 620px, 100vw"
              className="object-cover [object-position:50%_30%]"
            />
          </div>
          <div className="px-7 pb-6 pt-7">
            <p className={kicker}>{widget.kicker}</p>
            <h2 className={title}>{widget.title}</h2>
          </div>
        </div>
      </div>

      <div id="sync" className="relative scroll-mt-20">
        <div className={`${frame} box-border flex h-full flex-col`}>
          <div className="relative flex h-[420px] justify-center overflow-hidden rounded-[36px] bg-tl-well">
            <Image
              src={`${IMG}/screens/progress.png`}
              alt=""
              aria-hidden="true"
              width={1080}
              height={2400}
              sizes="160px"
              className="absolute top-10 w-[260px] opacity-70 [filter:blur(50px)_saturate(2.4)]"
            />
            <div className="relative mt-11 h-max w-[260px] rounded-[44px] bg-black p-[7px] shadow-[0_0_0_0.5px_rgba(255,255,255,0.14),0_30px_60px_rgba(0,0,0,0.45)]">
              <Image
                src={`${IMG}/screens/progress.png`}
                alt={sync.alt}
                width={1080}
                height={2400}
                sizes="246px"
                className="block w-full rounded-[37px]"
              />
            </div>
          </div>
          <div className="px-7 pb-6 pt-7">
            <p className={kicker}>{sync.kicker}</p>
            <h2 className={title}>{sync.title}</h2>
            <ul className="mt-[18px] flex flex-wrap gap-2 text-sm">
              {sync.chips.map((chip) => (
                <li
                  key={chip}
                  className="flex h-[34px] items-center rounded-[17px] bg-[rgba(74,222,128,0.12)] px-3.5 text-tl-accent-soft"
                >
                  {chip}
                </li>
              ))}
              <li className="flex h-[34px] items-center px-3.5 italic text-tl-body">{sync.more}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetTheApp({ platform, qrSvg }: { platform: MobilePlatform; qrSvg: string }) {
  const { get } = copy;
  const desktop = platform === 'desktop';
  const headline = desktop ? get.headline : get.headlinePhone;
  return (
    <section id="get" className="relative mt-[clamp(80px,10vw,160px)] h-[clamp(620px,78vh,820px)] overflow-hidden">
      <Image
        src={`${IMG}/photos/gym.png`}
        alt={get.photoAlt}
        fill
        sizes="100vw"
        className="object-cover [object-position:50%_100%] sm:[object-position:50%_72%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[140px] bg-[linear-gradient(180deg,#131114,rgba(19,17,20,0))]"
      />
      <BottomBlur className="h-[70%]" blurs={[4, 12, 30]} shade={0.7} shadeStop={80} />
      <div className="tl-container absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-10 pb-[clamp(40px,6vw,80px)]">
        <div className="min-w-0">
          <h2 className="text-[clamp(52px,7vw,112px)] font-bold leading-[0.94] tracking-[-0.045em]">
            {headline[0]}
            <br />
            <span className="font-light italic tracking-[-0.035em] text-tl-accent">{headline[1]}</span>
          </h2>
          <StoreButtons platform={platform} className="mt-9" />
        </div>
        {/* A phone cannot scan its own screen; it has its store button instead. */}
        {desktop && <QrTile svg={qrSvg} size="lg" />}
      </div>
    </section>
  );
}

function Footer() {
  const { footer } = copy;
  const link = 'transition-colors hover:text-tl-fg';
  return (
    <footer className="tl-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 pb-11 pt-9 text-sm text-tl-muted">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element -- a tiny static SVG needs no optimization */}
        <img src={`${IMG}/traction-lockup-horizontal-white.svg`} alt={copy.brand} className="block h-5 w-auto" />
        <span className="italic">{footer.tagline}</span>
      </div>
      <nav aria-label="Legal" className="flex gap-6">
        <Link href="/traction/privacy" className={link}>
          {footer.privacy}
        </Link>
        <Link href="/traction/terms" className={link}>
          {footer.terms}
        </Link>
        <a href={`mailto:${footer.support}`} className={link}>
          {footer.support}
        </a>
      </nav>
    </footer>
  );
}

export default async function TractionLandingPage() {
  // Phones are offered only their own store, and copy that does not ask them
  // to scan anything; reading the user agent makes the page dynamic.
  const platform = detectPlatform(headers().get('user-agent') ?? '');
  const qrSvg = await QRCode.toString(QR_URL, {
    type: 'svg',
    margin: 0,
    color: { dark: '#131114', light: '#0000' },
  });

  return (
    <div className={`tl ${satoshi.variable} min-h-screen bg-tl-bg font-satoshi text-tl-fg antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GlassLens />
      <GlassNav platform={platform} />
      <main id="top">
        <Hero platform={platform} qrSvg={qrSvg} />
        <Momentum />
        <Groups />
        <Screens />
        <WidgetAndSync />
        <GetTheApp platform={platform} qrSvg={qrSvg} />
      </main>
      <Footer />
    </div>
  );
}
