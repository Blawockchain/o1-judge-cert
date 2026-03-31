import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-[var(--color-navy)]">
            Danveer
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <a href="#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">How It Works</a>
          <a href="#prizes" className="hover:text-[var(--color-primary)] transition-colors">Prizes</a>
          <a href="#schedule" className="hover:text-[var(--color-primary)] transition-colors">Schedule</a>
          <a href="#faq" className="hover:text-[var(--color-primary)] transition-colors">FAQ</a>
        </nav>
        <Link href="/register" className="btn-primary text-sm py-2 px-5">
          Register →
        </Link>
      </div>
    </header>
  );
}
