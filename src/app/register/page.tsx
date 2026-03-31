"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <>
      <Header />
      <main className="py-16 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-[var(--color-navy)] mb-2">
            Judge Application
          </h1>
          <p className="text-gray-500 mb-8">
            Complete the form below to be considered for the O1 Visa Judge
            Sponsorship Program. All fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                required
                className="input-field"
                placeholder="Your full legal name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                className="input-field"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
                LinkedIn Profile
              </label>
              <input
                name="linkedin"
                type="url"
                className="input-field"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
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

            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
                Years of Experience *
              </label>
              <input
                name="experience"
                type="number"
                required
                min={1}
                max={50}
                className="input-field"
                placeholder="e.g. 5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1">
                Why do you want to judge?
              </label>
              <textarea
                name="motivation"
                rows={4}
                className="input-field resize-none"
                placeholder="Tell us about your motivation and what you hope to contribute as a judge..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-[var(--color-primary)]"
              />
              <label className="text-sm text-gray-600">
                I consent to visa sponsorship consideration and acknowledge that
                my judging performance will be evaluated as part of the O1 visa
                extraordinary ability assessment. *
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full py-3 disabled:opacity-60"
            >
              {submitting ? "Submitting Application..." : "Submit Application"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to Devfolio&apos;s Terms of Service and
              Privacy Policy. Your information will be processed in accordance
              with USCIS data handling requirements.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
