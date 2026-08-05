import Link from 'next/link';
import { footer } from '@/content/copy';

export default function Footer() {
  return (
    <footer className="px-5 pt-6 pb-6 md:px-10 md:pt-[34px] md:pb-[30px] flex flex-wrap items-end justify-between gap-10">
      <div className="flex gap-[34px] font-mono text-xs leading-[1.9] text-ink/55">
        <div>
          <div className="text-ink">{footer.company}</div>
          <div>{footer.location}</div>
          <div>{footer.email}</div>
        </div>
        <div>
          <Link href="/privacy" className="block hover:text-ink transition-colors">
            {footer.links.privacy}
          </Link>
          <Link href="/terms" className="block hover:text-ink transition-colors">
            {footer.links.terms}
          </Link>
          <Link
            href="/traction/data"
            className="block hover:text-ink transition-colors"
          >
            {footer.links.tractionData}
          </Link>
        </div>
      </div>
      <div className="ml-auto font-mono text-xs leading-none text-ink/55">
        © {new Date().getFullYear()} {footer.copyrightName}
      </div>
    </footer>
  );
}
