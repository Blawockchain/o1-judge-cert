import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Navy footer */}
      <div className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-xs">
              <p className="font-serif font-black text-lg uppercase tracking-wide mb-1">Danveer Technologies</p>
              <p className="text-xs text-blue-300 font-mono-accent tracking-widest uppercase mb-4">Washington, D.C.</p>
              <p className="text-sm text-blue-200 leading-relaxed">
                Extraordinary stupidity, recognized since 2017.
              </p>
            </div>
            <div className="flex gap-16 text-xs font-bold uppercase tracking-widest font-mono-accent">
              <div className="space-y-3">
                <p className="text-blue-400">Program</p>
                <a href="#how-it-works" className="block text-blue-200 hover:text-white transition-colors">How It Works</a>
                <a href="#prizes" className="block text-blue-200 hover:text-white transition-colors">Prizes</a>
                <a href="#schedule" className="block text-blue-200 hover:text-white transition-colors">Schedule</a>
              </div>
              <div className="space-y-3">
                <p className="text-blue-400">Info</p>
                <a href="#judges" className="block text-blue-200 hover:text-white transition-colors">Panel</a>
                <a href="#faq" className="block text-blue-200 hover:text-white transition-colors">FAQ</a>
                <Link href="/register" className="block text-blue-200 hover:text-white transition-colors">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red bottom bar */}
      <div className="bg-[#B22234] px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-red-100 font-mono-accent">
          <p>© 2026 Danveer Technologies, Inc. · Not affiliated with any government agency.</p>
          <p>For entertainment only. No actual visas or flights provided. Expires April 2, 2026.</p>
        </div>
      </div>
    </footer>
  );
}
