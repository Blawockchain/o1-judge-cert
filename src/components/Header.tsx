import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[#002868] px-6 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-blue-200 font-mono-accent tracking-widest uppercase">
            An Official Program of Danveer Technologies, Inc.
          </p>
          <p className="text-xs text-blue-200 font-mono-accent tracking-widest uppercase hidden md:block">
            April 1–2, 2026 · Washington, D.C.
          </p>
        </div>
      </div>

      {/* Main header — White House style */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col items-center text-center gap-1">
          {/* Logo area */}
          <div className="flex items-center gap-4">
            {/* Building icon */}
            <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="8" width="20" height="4" fill="#002868"/>
              <polygon points="40,4 50,12 30,12" fill="#002868"/>
              {[14,20,26,32,38,44,50].map((x,i) => (
                <rect key={i} x={x} y="12" width="4" height="28" fill="#002868"/>
              ))}
              <rect x="8" y="40" width="64" height="4" fill="#002868"/>
              <rect x="4" y="44" width="72" height="4" fill="#B22234"/>
              <rect x="30" y="48" width="20" height="24" fill="#002868"/>
              <rect x="35" y="52" width="10" height="10" fill="white"/>
              <rect x="4" y="72" width="72" height="4" fill="#002868"/>
            </svg>
            <div>
              <p className="font-serif text-xl font-black tracking-wide uppercase text-[#002868]">Danveer Technologies</p>
              <p className="font-mono-accent text-xs tracking-[0.25em] text-gray-500 uppercase">Washington, D.C.</p>
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-[#002868] transition-colors md:hidden">
              <span>≡</span> MENU
            </button>
            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-600 font-mono-accent mx-auto">
              <a href="#how-it-works" className="hover:text-[#B22234] transition-colors">Program</a>
              <a href="#prizes" className="hover:text-[#B22234] transition-colors">Prizes</a>
              <a href="#judges" className="hover:text-[#B22234] transition-colors">Panel</a>
              <a href="#schedule" className="hover:text-[#B22234] transition-colors">Schedule</a>
              <a href="#faq" className="hover:text-[#B22234] transition-colors">FAQ</a>
              <Link href="/register" className="hover:text-[#B22234] transition-colors">Register</Link>
            </nav>
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 font-mono-accent">
              <span>SEARCH</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
