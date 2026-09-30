import { ImageResponse } from 'next/og';
import { tractionLanding as copy } from '@/content/copy';

/**
 * Social preview for softmaxco.io/traction, in the landing page's dark glass
 * style: the headline on the left, the hero photo card glowing on the right.
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
  const [photo, lockup, bold, regular, italic, lightItalic] = await Promise.all([
    // The hero photo pre-cropped to the card, small enough to bundle.
    asset(new URL('./_og/street.jpg', import.meta.url)),
    svgSrc(new URL('../../public/images/traction/traction-lockup-horizontal-white.svg', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-Bold.otf', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-Regular.otf', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-Italic.otf', import.meta.url)),
    asset(new URL('./_fonts/Satoshi-LightItalic.otf', import.meta.url)),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#131114',
          backgroundImage:
            'radial-gradient(circle at 80% 55%, rgba(27,153,139,0.30), rgba(19,17,20,0) 42%), radial-gradient(circle at 8% 100%, rgba(164,231,156,0.10), rgba(19,17,20,0) 40%)',
          color: '#FFFBFE',
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
            <div style={{ fontSize: 26, fontStyle: 'italic', color: '#CFCCD4' }}>{copy.kicker}</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 18,
                fontSize: 88,
                fontWeight: 700,
                lineHeight: 0.96,
                letterSpacing: '-0.045em',
              }}
            >
              <div>{copy.headline[0]}</div>
              <div
                style={{ fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.035em', color: '#4ADE80' }}
              >
                {copy.headline[1]}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 22, color: '#B9B6BF' }}>
            softmaxco.io/traction
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', padding: '0 72px 0 24px' }}>
          <div
            style={{
              display: 'flex',
              position: 'relative',
              width: 378,
              height: 510,
              borderRadius: 44,
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.10), 0 30px 80px rgba(27,153,139,0.35)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- the renderer needs a plain img */}
            <img src={src(photo)} alt="" width={378} height={510} />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 200,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '0 28px 28px',
                background: 'linear-gradient(180deg, rgba(19,17,20,0), rgba(19,17,20,0.78))',
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {copy.qr.byline}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Satoshi', data: bold, weight: 700, style: 'normal' },
        { name: 'Satoshi', data: regular, weight: 400, style: 'normal' },
        { name: 'Satoshi', data: italic, weight: 400, style: 'italic' },
        { name: 'Satoshi', data: lightItalic, weight: 300, style: 'italic' },
      ],
    },
  );
}
