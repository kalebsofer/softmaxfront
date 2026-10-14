---
category: actions
---

The Softmax call-to-action pill: JetBrains Mono, uppercase, fully rounded. Every button and button-like link on the site is a PillButton.

## Tones

| Tone | Use on | When |
|---|---|---|
| `ink` (default) | paper | The primary action. |
| `signal` | paper or ink | The single accent action in a view, such as "Book a call". Use at most one per view. |
| `outline` | paper | A secondary action next to an `ink` or `signal` pill. |
| `paper` | an ink section | The primary action on a dark (`bg-ink`) section. |
| `outline-paper` | an ink section | A secondary action on a dark section. |

## Sizes

| Size | Use |
|---|---|
| `sm` | Compact controls, such as a mobile menu toggle. |
| `md` (default) | Header actions. |
| `lg` | Actions inside a page section. |
| `block` | Full-width stacked actions on narrow (mobile) layouts. |

## Links

Pass `asChild` to give a link the pill styles instead of rendering a `<button>`:

```tsx
<PillButton asChild tone="outline">
  <a href="#contact">Message us</a>
</PillButton>
```

## Examples

A header action pair on paper:

```tsx
<div className="flex items-center gap-[9px]">
  <PillButton tone="outline">Message us</PillButton>
  <PillButton tone="signal">Book a call</PillButton>
</div>
```

A call to action on a dark section:

```tsx
<section className="bg-ink text-paper px-10 py-16">
  <div className="flex flex-wrap items-center gap-2.5">
    <PillButton tone="paper" size="lg">Book a scoping call</PillButton>
    <PillButton asChild tone="outline-paper" size="lg">
      <a href="mailto:hello@softmaxco.io">hello@softmaxco.io</a>
    </PillButton>
  </div>
</section>
```

Stacked mobile actions:

```tsx
<div className="flex flex-col gap-[9px]">
  <PillButton size="block">Message us</PillButton>
  <PillButton tone="signal" size="block">Book a call</PillButton>
  <PillButton tone="outline" size="block">See the work</PillButton>
</div>
```
