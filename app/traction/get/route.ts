import { NextResponse, type NextRequest } from 'next/server';
import { APP_STORE_URL, detectPlatform, playStoreUrlWithReferrer } from '@/lib/traction';

/**
 * One link that lands on the right store. The landing page's QR code encodes
 * this URL, so a single code works for iPhone and Android cameras. Desktop
 * visitors are sent back to the landing page.
 *
 * `?src=` tags the Play install referrer (qr, landing, ...) and is restricted
 * to a short slug so the redirect can never carry arbitrary input.
 */
export const dynamic = 'force-dynamic';

const SOURCE_PATTERN = /^[a-z0-9_-]{1,32}$/;

export function GET(request: NextRequest) {
  const platform = detectPlatform(request.headers.get('user-agent') ?? '');
  const rawSource = request.nextUrl.searchParams.get('src') ?? 'landing';
  const source = SOURCE_PATTERN.test(rawSource) ? rawSource : 'landing';

  if (platform === 'ios') {
    return NextResponse.redirect(APP_STORE_URL, 302);
  }
  if (platform === 'android') {
    return NextResponse.redirect(playStoreUrlWithReferrer('softmaxco', source), 302);
  }
  return NextResponse.redirect(new URL('/traction', request.nextUrl), 302);
}
