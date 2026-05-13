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
      className="block w-full text-sm md:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-3 md:py-4 border border-border rounded-full"
    >
      Already have it? Open in Traction
    </button>
  );
}
