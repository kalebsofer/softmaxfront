import { ImageResponse } from 'next/og';
import { tractionLanding as copy } from '@/content/copy';

/**
 * Social preview for softmaxco.io/traction, in the landing page's light
 * style: the headline on the left over the teal-to-pink wash, the home screen
 * in a phone frame on the right.
 *
 * Runs on the edge runtime; the Node build of the image renderer fails on
 * Windows (a bundled font path becomes an invalid URL), in dev and at build.
 */
export const runtime = 'edge';
export const alt = copy.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const asset = (url: URL) => fetch(url).then((res) => res.arrayBuffer());
/** The renderer takes raster image bytes directly as an img src. */
const src = (data: ArrayBuffer) => data as unknown as string;
/** It cannot sniff SVG from bytes, so SVG goes in as a data URL. */
const svgSrc = (url: URL) =>
  fetch(url)
    .then((res) => res.text())
    .then((svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`);

export default async function OpenGraphImage() {
  const [screen, lockup, bold, regular] = await Promise.all([
    asset(new URL('../../public/images/traction/screens/android-home.jpg', import.meta.url)),
    svgSrc(new URL('../../public/images/traction/traction-lockup-horizontal.svg', import.meta.url)),
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
          background: '#FFFBFE',
          backgroundImage:
            'linear-gradient(160deg, rgba(27,153,139,0.16), rgba(242,186,201,0.34) 60%, rgba(27,153,139,0.08))',
          color: '#29263A',
          fontFamily: 'Satoshi',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 0 58px 72px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- the renderer needs a plain img */}
          <img src={lockup} alt="" height={36} width={186} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 84,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                maxWidth: 640,
              }}
            >
              {copy.hero.title}
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#49454F' }}>softmaxco.io/traction</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', padding: '72px 96px 0 0' }}>
          <div
            style={{
              display: 'flex',
              width: 300,
              height: 652,
              borderRadius: 48,
              border: '9px solid #1D192B',
              overflow: 'hidden',
              background: '#FFFBFE',
              boxShadow: '0 30px 80px rgba(27,153,139,0.25)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- the renderer needs a plain img */}
            <img src={src(screen)} alt="" width={282} height={627} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Satoshi', data: bold, weight: 700, style: 'normal' },
        { name: 'Satoshi', data: regular, weight: 400, style: 'normal' },
      ],
    },
  );
}
