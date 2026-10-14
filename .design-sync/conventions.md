# Softmax Co design system: how to build with it

## Setup

No provider or wrapper is needed. Load `styles.css`; it brings in the compiled stylesheet and the Archivo and JetBrains Mono web fonts. The base layer already sets the page to paper background, ink text, Archivo and antialiasing, so a bare `<div>` is on brand.

## Styling idiom: Tailwind utility classes, precompiled

Style everything with Tailwind classes from the compiled stylesheet (`styles.css` imports `_ds_bundle.css`). The stylesheet is precompiled, so **only classes that exist in it apply**. It holds the site's own class vocabulary below plus Tailwind's standard layout, spacing, sizing and type utilities. For a one-off value that isn't in it, use an inline `style` instead of inventing an arbitrary class.

| Family | Classes |
|---|---|
| Brand colors | `bg-`, `text-`, `border-` with `paper` (#fbfaf8), `ink` (#0a0a0a), `wash` (#f4f2ee), `hairline`; opacity steps such as `text-ink/55`, `text-ink/70`, `text-paper/65`, `text-paper/70` |
| Signal accent | `bg-[#b3402f]`, one accent action per view (normally via `PillButton tone="signal"`) |
| Families | `font-sans` (Archivo, the default), `font-mono` (JetBrains Mono, for labels and data) |
| Display heading | `font-semibold text-[40px] leading-[0.94] tracking-[-0.042em] md:text-[clamp(52px,7.2vw,104px)] md:leading-[0.92] md:tracking-[-0.045em] text-balance` |
| Section heading | `font-semibold text-[38px] leading-[0.95] tracking-[-0.042em] md:text-[clamp(42px,6vw,86px)] md:leading-[0.94] md:tracking-[-0.045em]` |
| Mono label | `font-mono text-xs uppercase tracking-[0.05em] text-ink/55` |
| Body copy | `text-sm leading-[1.55] md:text-[17px] md:leading-[1.6]`, in `text-ink/70` on paper or `text-paper/70` on ink |
| Page gutters | `px-5 md:px-10` |
| Rules | `border-hairline` with `border-t`, `border-b` or `border-y` |
| Dark section | `bg-ink text-paper` |

## Components

- `PillButton` is the only button. Never build a button from raw classes. Tones are `ink` (default), `signal`, `outline`, `paper` and `outline-paper` (the last two are for ink sections). Sizes are `sm`, `md` (default), `lg` and `block` (full width). Pass `asChild` to style a link. Full guide: `components/actions/PillButton/PillButton.prompt.md`.

## Where the truth lives

Read `styles.css` and `_ds_bundle.css` before styling, and `PillButton.prompt.md` before composing actions.

## Example

```tsx
<section className="bg-ink text-paper px-5 py-16 md:px-10">
  <p className="font-mono text-xs uppercase tracking-[0.05em] text-paper/65">Studio</p>
  <h2 className="mt-4 font-semibold text-[38px] leading-[0.95] tracking-[-0.042em] md:text-[clamp(42px,6vw,86px)] md:leading-[0.94] md:tracking-[-0.045em]">
    Tell us what's broken.
  </h2>
  <div className="mt-8 flex flex-wrap items-center gap-2.5">
    <PillButton tone="paper" size="lg">Book a scoping call</PillButton>
    <PillButton asChild tone="outline-paper" size="lg">
      <a href="mailto:hello@softmaxco.io">hello@softmaxco.io</a>
    </PillButton>
  </div>
</section>
```
