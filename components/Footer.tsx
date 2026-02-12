import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Softmax. All rights reserved.</p>
      </div>
    </footer>
  );
}
