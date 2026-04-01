"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Submission = {
  id: number;
  name: string;
  email: string;
  instagram: string | null;
  expertise: string | null;
  experience: number | null;
  motivation: string | null;
  submitted_at: string;
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchSubmissions(t: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin", {
        headers: { "x-admin-token": t },
      });
      if (res.status === 401) {
        setError("Wrong password.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSubmissions(data.submissions);
      setAuthed(true);
    } catch (e) {
      setError("Failed to load submissions.");
    }
    setLoading(false);
  }

  function downloadCSV() {
    const headers = ["ID", "Name", "Email", "Instagram", "Expertise", "Experience", "Motivation", "Submitted At"];
    const rows = submissions.map((s) => [
      s.id,
      s.name,
      s.email,
      s.instagram || "",
      s.expertise || "",
      s.experience ?? "",
      (s.motivation || "").replace(/,/g, ";"),
      new Date(s.submitted_at).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "judgeathon-submissions.csv";
    a.click();
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#002868] flex items-center justify-center px-6">
        <motion.div
          className="bg-white p-10 w-full max-w-sm shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 text-center">
            <p className="font-mono-accent text-xs tracking-widest uppercase text-[#B22234] mb-2">Dunki Technologies</p>
            <h1 className="font-serif text-2xl font-black text-[#002868]">Admin Panel</h1>
            <p className="text-gray-400 text-xs mt-1">View all judgeathon submissions</p>
          </div>
          <input
            type="password"
            placeholder="Admin password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchSubmissions(token)}
            className="w-full border border-gray-200 px-4 py-3 text-sm mb-3 outline-none focus:border-[#002868]"
          />
          {error && <p className="text-[#B22234] text-xs mb-3">{error}</p>}
          <button
            onClick={() => fetchSubmissions(token)}
            disabled={loading || !token}
            className="w-full bg-[#002868] text-white py-3 text-sm font-bold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Enter"}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#002868] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-white font-serif font-bold">Dunki Technologies — Admin</p>
          <p className="text-blue-300 text-xs font-mono-accent">{submissions.length} submissions total</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => fetchSubmissions(token)}
            className="text-xs bg-white/10 text-white px-4 py-2 font-semibold hover:bg-white/20 transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={downloadCSV}
            className="text-xs bg-[#B22234] text-white px-4 py-2 font-semibold hover:bg-[#8b1a27] transition-colors"
          >
            Export CSV
          </button>
        </div>
      </div>
      <div className="h-1 bg-[#B22234]" />

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
        {submissions.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="font-serif text-xl mb-2">No submissions yet.</p>
            <p className="text-sm">They will appear here once people register.</p>
          </div>
        ) : (
          <table className="w-full text-sm bg-white shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-[#002868] text-white text-xs font-mono-accent uppercase tracking-wider">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Instagram</th>
                <th className="px-4 py-3 text-left">Expertise</th>
                <th className="px-4 py-3 text-left">Exp (yrs)</th>
                <th className="px-4 py-3 text-left">Why O1?</th>
                <th className="px-4 py-3 text-left">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, i) => (
                <tr
                  key={s.id}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-3 text-gray-400 font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3 font-semibold text-[#002868]">{s.name}</td>
                  <td className="px-4 py-3 text-gray-600">
                    <a href={`mailto:${s.email}`} className="hover:text-[#002868] underline underline-offset-2">{s.email}</a>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {s.instagram ? (
                      <a href={s.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#002868] underline underline-offset-2 text-xs">
                        {s.instagram.replace(/https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "")}
                      </a>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{s.expertise || <span className="text-gray-300">—</span>}</td>
                  <td className="px-4 py-3 text-center text-gray-500">{s.experience ?? <span className="text-gray-300">—</span>}</td>
                  <td className="px-4 py-3 text-gray-500 max-w-xs">
                    <p className="truncate max-w-[200px]" title={s.motivation || ""}>
                      {s.motivation || <span className="text-gray-300">—</span>}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                    {new Date(s.submitted_at).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
