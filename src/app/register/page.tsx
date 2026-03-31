"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const EXPERTISE_OPTIONS = [
  "AI/ML",
  "Web3/Blockchain",
  "Full-Stack",
  "Design",
  "Product",
  "Growth",
];

export default function RegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const expertise = data.get("expertise") as string;

    // Store in sessionStorage for the judging flow
    sessionStorage.setItem(
      "judge",
      JSON.stringify({ name, email, expertise })
    );

    setTimeout(() => {
      router.push("/judge");
    }, 800);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel — dark */}
      <motion.div
        className="md:w-[45%] bg-[#0a0a14] text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-12">
            <Logo width={40} height={40} />
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
            Prove your<br />
            extraordinary<br />
            <span className="gradient-text">stupidity.</span>
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm">
            Complete your application to join the Judgeathon 2026. Every judge who completes their evaluation receives:
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-xl mt-0.5">🥇</span>
              <div>
                <p className="font-semibold text-white">O1 Extraordinary Ability Letter</p>
                <p className="text-slate-500 text-xs">Issued by Danveer Technologies</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl mt-0.5">✈️</span>
              <div>
                <p className="font-semibold text-white">ICE Airways™ One-Way Flight</p>
                <p className="text-slate-500 text-xs">Seat O1-A · SFO · Class: Extraordinary</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl mt-0.5">💼</span>
              <div>
                <p className="font-semibold text-white">$185K Offer Letter</p>
                <p className="text-slate-500 text-xs">San Francisco · Danveer Technologies HQ</p>
              </div>
            </li>
          </ul>
        </div>

        <p className="text-[10px] text-slate-600 mt-10 relative z-10">
          All prizes fictional. Expires April 2, 2026.
        </p>
      </motion.div>

      {/* Right panel — form */}
      <motion.div
        className="md:w-[55%] bg-white p-10 md:p-16 flex items-center justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-1">Judge Application</h2>
          <p className="text-gray-400 text-sm mb-8">
            All fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Floating label inputs */}
            <div className="relative">
              <input
                name="name"
                type="text"
                required
                placeholder=" "
                className="input-field peer pt-5 pb-2"
              />
              <label className="absolute left-4 top-1 text-[10px] font-medium text-[var(--color-primary)] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Full Name *
              </label>
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                required
                placeholder=" "
                className="input-field peer pt-5 pb-2"
              />
              <label className="absolute left-4 top-1 text-[10px] font-medium text-[var(--color-primary)] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Email Address *
              </label>
            </div>

            <div className="relative">
              <input
                name="linkedin"
                type="url"
                placeholder=" "
                className="input-field peer pt-5 pb-2"
              />
              <label className="absolute left-4 top-1 text-[10px] font-medium text-[var(--color-primary)] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                LinkedIn Profile
              </label>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">
                Area of Expertise *
              </label>
              <select name="expertise" required className="input-field">
                <option value="">Select your area</option>
                {EXPERTISE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <input
                name="experience"
                type="number"
                required
                min={1}
                max={50}
                placeholder=" "
                className="input-field peer pt-5 pb-2"
              />
              <label className="absolute left-4 top-1 text-[10px] font-medium text-[var(--color-primary)] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Years of Experience *
              </label>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">
                Why do you want to judge?
              </label>
              <textarea
                name="motivation"
                rows={3}
                className="input-field resize-none"
                placeholder="Tell us about your motivation..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-[var(--color-primary)]"
              />
              <label className="text-xs text-gray-500 leading-relaxed">
                I consent to visa sponsorship consideration and acknowledge that
                my judging performance will be evaluated as part of the O1 visa
                extraordinary ability assessment. *
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full py-3.5 disabled:opacity-60"
            >
              {submitting ? "Submitting Application..." : "Submit Application →"}
            </button>

            <p className="text-[10px] text-gray-400 text-center">
              By submitting, you agree to Danveer&apos;s Terms of Service and
              Privacy Policy. This is a fictional judging program for entertainment purposes only.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
