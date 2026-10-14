import { PillButton } from 'softmaxfront';

export function HeaderActions() {
  return (
    <div className="flex items-center gap-[9px] bg-paper p-6">
      <PillButton tone="outline">Message us</PillButton>
      <PillButton tone="signal">Book a call</PillButton>
      <PillButton>Get Traction</PillButton>
    </div>
  );
}

export function OnInkSection() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 bg-ink p-8">
      <PillButton tone="paper" size="lg">Book a scoping call</PillButton>
      <PillButton asChild tone="outline-paper" size="lg">
        <a href="mailto:hello@softmaxco.io">hello@softmaxco.io</a>
      </PillButton>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex items-center gap-4 bg-paper p-6">
      <PillButton size="sm">Menu</PillButton>
      <PillButton size="md">Message us</PillButton>
      <PillButton size="lg">Send →</PillButton>
    </div>
  );
}

export function MobileStack() {
  return (
    <div className="flex w-[350px] flex-col gap-[9px] bg-paper p-5">
      <PillButton size="block">Message us</PillButton>
      <PillButton tone="signal" size="block">Book a call</PillButton>
      <PillButton asChild tone="outline" size="block">
        <a href="#work">See the work</a>
      </PillButton>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex items-center gap-4 bg-ink p-6">
      <PillButton tone="paper" size="lg" disabled>
        Sending…
      </PillButton>
    </div>
  );
}
