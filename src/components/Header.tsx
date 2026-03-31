import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-indigo-600 text-white text-center text-xs font-medium py-2 px-4">
        <span className="inline-flex items-center gap-1.5">
          <span>🚀</span>
          Judgeathon 2026 is live — April 1–2 only ·{" "}
          <Link href="/register" className="underline underline-offset-2 font-semibold hover:text-indigo-200 transition-colors">
            Register now
          </Link>
        </span>
      </div>

      <header className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo width={32} height={32} />
            <span className="font-bold text-[var(--color-navy)] tracking-tight">Danveer</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500 font-medium">
            {["How It Works", "Prizes", "Panel", "Schedule", "FAQ"].map((item) => {
              const href = `#${item === "How It Works" ? "how-it-works" : item === "Panel" ? "judges" : item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="relative py-1 hover:text-[var(--color-primary)] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              );
            })}
          </nav>
          <Link href="/register" className="btn-primary text-sm py-2.5 px-5">
            Register →
          </Link>
        </div>
      </header>
    </>
  );
}
