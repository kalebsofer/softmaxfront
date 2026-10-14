# design-sync notes

- Target project is "Softmax Co" (10e6c7d8-dacb-4505-93b9-bd703a7d392c). Never read from or write to the "Traction Design System" project (41dd128f-8a5f-4ff9-bf6d-82b1d786e04b) from this repo; the user asked for it to be left untouched.
- No Storybook and no built dist: this repo is a Next.js marketing site, so the sync runs in synth-entry mode from source.
- `components/ui/button.tsx` is the stock shadcn Button and is unused on the site; it is excluded from the sync because it does not match the brand. The real button is `PillButton` (components/ui/pill-button.tsx), extracted from the site's own pills.
- No dist: `cfg.entry` points at the committed `.design-sync/entry.ts`, which exports only what the design system ships. Add new components there AND in `componentSrcMap` (the source has no built `.d.ts`, so discovery finds nothing on its own).
- Props come from `cfg.dtsPropsFor` because there is no built `.d.ts`. Keep it in step with `components/ui/pill-button.tsx` whenever tones, sizes or props change.
- Styling is Tailwind 3. `cfg.buildCmd` compiles `app/globals.css` with `.design-sync/tailwind.config.ts`, which scans the Softmax site source (Traction and invite pages excluded) plus `.design-sync/previews/`, and safelists brand colors and general layout utilities. Run `buildCmd` before every converter run, or new classes in previews and site code won't exist in the shipped CSS.
- Fonts (Archivo, JetBrains Mono) load from Google Fonts via the remote `@import` in globals.css; `[FONT_REMOTE]` is expected.
- Render checks run on the installed Chrome: `DS_CHROMIUM_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe"`, with the `playwright` npm package installed in `.ds-sync/` using `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`. No Playwright browser download is needed.
- Validating class names in conventions.md: Tailwind escapes commas as `\2c ` in selectors, so a naive escape check misreports `clamp(...)` classes as missing.

## Known render warns

- None as of the first sync.

## Re-sync risks

- `dtsPropsFor.PillButton` is hand-written and goes stale silently if the component's props change.
- The shipped CSS only contains classes the site uses plus the safelist. A conventions.md claim about a class the site stops using breaks unless the safelist covers it; re-validate the header against `_ds_bundle.css` on every sync.
- Brand colors on the site (paper #fbfaf8, ink #0a0a0a, signal #b3402f) differ from the SMC brand sheet (Paper #F4F3EF, Ink #141414, Signal #FF4A1C). The design system follows the site. If the site moves to the brand sheet palette, update conventions.md.
- The SMC logo is not part of the design system yet (it is an image asset, not a component).
