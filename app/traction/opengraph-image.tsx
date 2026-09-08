import { ImageResponse } from 'next/og';
import { tractionLanding as copy } from '@/content/copy';

/**
 * Social preview for softmaxco.io/traction: the mint card from the landing
 * page with the wordmark, headline and the three highlight chips.
 *
 * Runs on the edge runtime; the Node build of the image renderer fails at
 * build time on Windows, and edge is what Vercel uses for this anyway.
 */
export const runtime = 'edge';
export const alt = copy.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const asset = (url: URL) => fetch(url).then((res) => res.arrayBuffer());

export default async function OpenGraphImage() {
  const [icon, satoshiBold, satoshiRegular] = await Promise.all([
    asset(new URL('../../public/images/traction/icon.png', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-Bold.otf', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-Regular.otf', import.meta.url)),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#E9FFEB',
          color: '#131114',
          fontFamily: 'Satoshi',
        }}
      >
        <div
          style={{
            height: 10,
            width: '100%',
            background:
              'linear-gradient(90deg, #f2bac9, #dfc5be, #cbd0b3, #b8dca7, #a4e79c, #1b998b)',
          }}
        />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px 56px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- the renderer needs a plain img */}
            <img
              src={icon as unknown as string}
              alt=""
              width={56}
              height={56}
              style={{ borderRadius: 16 }}
            />
            <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {copy.brand}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 96,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.02,
              }}
            >
              {copy.headline.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 30,
                lineHeight: 1.4,
                color: '#3B4B45',
                maxWidth: 900,
              }}
            >
              {copy.leadShort}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {copy.chips.map((chip) => (
                <span
                  key={chip.label}
                  style={{
                    /* Sized so all three labels sit on one row inside 1200px. */
                    fontSize: 21,
                    fontWeight: 500,
                    flexShrink: 0,
                    color: '#14776c',
                    background: 'rgba(27,153,139,0.12)',
                    padding: '12px 22px',
                    borderRadius: 999,
                  }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#3B5A50' }}>
            {copy.headerNote} · softmaxco.io/traction
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Satoshi', data: satoshiBold, weight: 700, style: 'normal' },
        { name: 'Satoshi', data: satoshiRegular, weight: 400, style: 'normal' },
      ],
    },
  );
}
