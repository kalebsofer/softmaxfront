/**
 * Store links for the Traction Health mobile app, shared by the marketing
 * site, the landing page and the invite flow so the ids live in one place.
 */

export const TRACTION_APP_STORE_ID = '6758675167';
export const TRACTION_ANDROID_PACKAGE = 'com.kalebrsofer.tractionhealth';

/** Locale-less App Store URL; Apple redirects to the visitor's storefront. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${TRACTION_APP_STORE_ID}`;

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${TRACTION_ANDROID_PACKAGE}`;

/**
 * Play Store URL carrying an install-referrer so the source of the install
 * survives through to the app's first launch. Apple has no equivalent without
 * an App Store Connect campaign token, so iOS links stay plain.
 */
export function playStoreUrlWithReferrer(source: string, medium = 'landing'): string {
  const referrer = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
  }).toString();
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`;
}

export type MobilePlatform = 'ios' | 'android' | 'desktop';

export function detectPlatform(userAgent: string): MobilePlatform {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
  if (/Android/i.test(userAgent)) return 'android';
  return 'desktop';
}
