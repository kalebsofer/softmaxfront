'use client';

import { useCallback } from 'react';

/**
 * Best-effort "open the native app" button.
 *
 * On iOS/Android, if the app is installed AND the Universal Link / App Link
 * has been verified, the user never sees this page — iOS/Android intercepts
 * the HTTPS URL before the browser is asked to render anything. So this
 * button mostly exists for the edge cases where verification hasn't
 * propagated yet, or where the user explicitly chose "open in browser" from
 * a long-press. In those cases the tractionhealth:// scheme will prompt to
 * open the app. If the app is not installed, nothing visible happens and
 * the user falls through to the "Get the app" CTA below.
 */
export default function OpenInAppButton({ code }: { code: string }) {
  const onClick = useCallback(() => {
    window.location.href = `tractionhealth://invite/${code}`;
  }, [code]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-sm font-semibold bg-foreground text-background py-3 rounded-full hover:opacity-90 transition-opacity mb-3"
    >
      Open in Traction
    </button>
  );
}
