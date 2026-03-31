import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Logo width={28} height={28} />
              <span className="font-bold tracking-tight">Danveer</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Extraordinary stupidity, recognized.
            </p>
          </div>

          {/* Right: nav columns */}
          <div className="flex gap-16 text-sm">
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Program</p>
              <a href="#how-it-works" className="block text-slate-400 hover:text-white transition-colors">How It Works</a>
              <a href="#prizes" className="block text-slate-400 hover:text-white transition-colors">Prizes</a>
              <a href="#judges" className="block text-slate-400 hover:text-white transition-colors">Panel</a>
            </div>
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Event</p>
              <a href="#schedule" className="block text-slate-400 hover:text-white transition-colors">Schedule</a>
              <a href="#faq" className="block text-slate-400 hover:text-white transition-colors">FAQ</a>
              <Link href="/register" className="block text-slate-400 hover:text-white transition-colors">Register</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <p>&copy; 2026 Danveer Technologies, Inc.</p>
          <p className="max-w-md text-right">
            All prizes are fictional. No actual visas, flights, or employment offered. For entertainment purposes only. Expires April 2, 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
