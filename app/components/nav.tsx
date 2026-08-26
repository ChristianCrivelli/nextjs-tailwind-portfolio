import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav aria-label="Primary" className="flex items-center justify-between py-4 text-sm">
      <div className="flex gap-4">
        <Link href="/" className="underline">
          Home
        </Link>
        <Link href="/projects" className="underline">
          Projects
        </Link>
        <Link href="/#contact" className="underline">
          Get in Touch
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
