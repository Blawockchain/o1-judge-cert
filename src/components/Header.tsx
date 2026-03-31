import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-[var(--color-navy)]">
            Devfolio
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/register"
            className="text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors"
          >
            Apply
          </Link>
          <Link href="/register" className="btn-primary text-sm py-2 px-4">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
