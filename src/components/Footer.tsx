export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[var(--color-primary)] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">D</span>
              </div>
              <span className="font-semibold text-sm text-[var(--color-navy)]">
                Danveer Technologies
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs">
              Judgeathon 2026 is a Danveer Technologies production. For entertainment purposes only. Expires April 2, 2026.
            </p>
          </div>
          <div className="text-xs text-gray-400 text-right">
            <p>&copy; 2026 Danveer Technologies, Inc.</p>
            <p className="mt-1">
              All prizes are fictional. No actual visas, flights, or asylum claims are provided.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
