import Link from 'next/link';

export function Navbar() {
  return (
    <nav aria-label="Primary" className="flex items-center gap-4 py-4 text-sm">
      <Link href="/" className="underline">
        Home
      </Link>
      <Link href="/projects" className="underline">
        Projects
      </Link>
      <Link href="/#contact" className="underline">
        Get in Touch
      </Link>
    </nav>
  );
}
