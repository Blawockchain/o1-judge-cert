"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResultsPage() {
  const [judgeName, setJudgeName] = useState("Applicant");
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name || "Applicant");
    }
  }, []);

  const caseNumber = `DT-26-${Math.floor(100 + Math.random() * 900)}-${Math.floor(10000 + Math.random() * 90000)}`;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function shareTwitter() {
    const text = encodeURIComponent(
      `Just got approved for the O1 Visa by Danveer Technologies 🚀 My extraordinary ability has been recognized. Expires April 2. See for yourself: https://o1-judge-cert-work.vercel.app #Judgeathon #OnlyJudges #ExtraordinaryAbility`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  }

  function shareLinkedIn() {
    const text = encodeURIComponent(
      `Honored to share that I've been recognized for extraordinary ability through the Danveer Judgeathon 2026. My contributions as a judge have been formally acknowledged. #Judgeathon #OnlyJudges`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://o1-judge-cert-work.vercel.app")}&summary=${text}`,
      "_blank"
    );
  }

  async function downloadPDF(type: "approval" | "flight" | "certificate") {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    if (type === "approval") {
      // Danveer-branded approval letter (not impersonating any real agency)
      doc.setFont("times", "bold");
      doc.setFontSize(14);
      doc.text("DANVEER TECHNOLOGIES, INC.", 105, 25, { align: "center" });
      doc.setFont("times", "normal");
      doc.setFontSize(10);
      doc.text("Extraordinary Ability Recognition Program", 105, 32, { align: "center" });
      doc.line(20, 36, 190, 36);
      doc.line(20, 37, 190, 37);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      doc.text("JUDGEATHON 2026 — APPROVAL NOTICE", 105, 48, { align: "center" });
      doc.text("Certificate of Extraordinary Ability", 105, 56, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(10);
      const y = 70;
      doc.text(`Reference Number: ${caseNumber}`, 20, y);
      doc.text(`Notice Date: ${formattedDate}`, 20, y + 8);
      doc.text(`Recipient: ${judgeName}`, 20, y + 16);
      doc.text("Classification: Extraordinary Stupidity (Self-Assessed)", 20, y + 24);
      doc.text("Expiry Date: April 2, 2026", 20, y + 32);
      doc.text("Issued by: Danveer Technologies, Inc.", 20, y + 40);

      const textY = y + 56;
      doc.text("Dear " + judgeName + ",", 20, textY);
      const body = `This notice confirms that Danveer Technologies, Inc. has reviewed your judging contributions and hereby recognizes your extraordinary ability in the field of technology evaluation.

Your participation in the Danveer Judgeathon 2026 has been assessed and found to demonstrate exceptional merit in:

  - Evaluation of innovative technology projects
  - Contribution of expert scoring and feedback
  - Demonstration of field expertise and analytical ability

In recognition of this achievement, you are entitled to:
  🥇 One (1) O1 Extraordinary Ability Recommendation Letter
  ✈️ One (1) ICE Airways™ One-Way Flight to San Francisco (Seat O1-A)
  📜 One (1) Certificate of Extraordinary Ability

This notice is valid until April 2, 2026.

Sincerely,
Program Director
Danveer Technologies, Inc.`;

      const lines = doc.splitTextToSize(body, 170);
      doc.text(lines, 20, textY + 10);

      doc.setFontSize(6);
      doc.text(
        "This is a fictional document issued for entertainment purposes only. Danveer Technologies is not a government agency. No actual visa or legal status is granted.",
        105, 285, { align: "center" }
      );

      doc.save("Danveer_Approval_Notice.pdf");

    } else if (type === "flight") {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("ICE Airways™", 105, 30, { align: "center" });
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Imaginary Carrier for Extraordinary individuals", 105, 37, { align: "center" });
      doc.line(20, 42, 190, 42);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("BOARDING PASS", 105, 55, { align: "center" });

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const by = 70;
      doc.text(`Passenger: ${judgeName.toUpperCase()}`, 20, by);
      doc.text("From: Your Current Location", 20, by + 10);
      doc.text("To: San Francisco International (SFO)", 20, by + 20);
      doc.text("Date: April 2, 2026", 20, by + 30);
      doc.text("Flight: ICE-0402", 20, by + 40);
      doc.text("Class: Extraordinary", 20, by + 50);
      doc.text("Seat: O1-A", 20, by + 60);
      doc.text(`Confirmation: ${caseNumber}`, 20, by + 70);
      doc.text("Sponsored by: Danveer Technologies, Inc.", 20, by + 80);

      doc.setFontSize(6);
      doc.text(
        "ICE Airways™ is a fictional airline. No actual flight is provided. This voucher is for entertainment purposes only. Valid April 2, 2026.",
        105, 285, { align: "center" }
      );

      doc.save("ICE_Airways_Flight_Voucher.pdf");

    } else {
      doc.setFont("times", "bold");
      doc.setFontSize(20);
      doc.text("CERTIFICATE OF EXTRAORDINARY ABILITY", 105, 40, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(12);
      doc.text("Danveer Judgeathon 2026 · #OnlyJudges", 105, 52, { align: "center" });

      doc.line(40, 58, 170, 58);

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text("This certifies that", 105, 75, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(18);
      doc.text(judgeName, 105, 90, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      const certBody = `has demonstrated extraordinary ability in the evaluation of technology projects through participation in the Danveer Judgeathon 2026. Their expert assessments have contributed to the advancement of innovation in the global technology ecosystem.

Classification: Extraordinary Stupidity (Self-Assessed)
Date of Recognition: ${formattedDate}
Reference: ${caseNumber}`;

      const certLines = doc.splitTextToSize(certBody, 130);
      doc.text(certLines, 105, 105, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.text("_______________________", 60, 180);
      doc.text("Program Director", 60, 188);
      doc.text("Danveer Technologies", 60, 195);

      doc.text("_______________________", 140, 180);
      doc.text("Head of Judging", 140, 188);
      doc.text("Judgeathon Committee", 140, 195);

      doc.setFontSize(6);
      doc.text(
        "This certificate is issued for entertainment purposes only. Expires April 2, 2026. Not a legal document.",
        105, 285, { align: "center" }
      );

      doc.save("Judge_Certificate.pdf");
    }
  }

  return (
    <>
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Success banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-green-800 font-medium text-sm">
              🎉 Evaluation Complete. Your extraordinary ability has been recognized by Danveer Technologies.
            </p>
          </div>

          {/* Approval Letter */}
          <div
            ref={letterRef}
            className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-8"
          >
            {/* Letterhead */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-navy)]">
                    Danveer Technologies, Inc.
                  </p>
                  <p className="text-xs text-gray-400">
                    Extraordinary Ability Recognition Program
                  </p>
                </div>
                <div className="certificate-seal">
                  <span>DANVEER</span>
                </div>
              </div>
            </div>

            {/* Document title */}
            <div className="text-center mb-8">
              <h1 className="text-xl font-bold text-[var(--color-navy)] tracking-wide">
                JUDGEATHON 2026
              </h1>
              <h2 className="text-lg font-semibold text-[var(--color-navy)]">
                APPROVAL NOTICE
              </h2>
            </div>

            {/* Case details */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-8 bg-gray-50 p-4 rounded">
              <div>
                <p className="text-xs text-gray-400 uppercase">Reference</p>
                <p className="font-mono font-medium text-[var(--color-navy)]">{caseNumber}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Notice Date</p>
                <p className="font-medium text-[var(--color-navy)]">{formattedDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Recipient</p>
                <p className="font-medium text-[var(--color-navy)]">{judgeName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Classification</p>
                <p className="font-medium text-[var(--color-navy)]">Extraordinary Stupidity (Self-Assessed)</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Issued By</p>
                <p className="font-medium text-[var(--color-navy)]">Danveer Technologies, Inc.</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Valid Until</p>
                <p className="font-medium text-[var(--color-navy)]">April 2, 2026</p>
              </div>
            </div>

            {/* Letter body */}
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>Dear {judgeName},</p>
              <p>
                Danveer Technologies, Inc. hereby confirms that your contributions as a judge in the
                Judgeathon 2026 have been reviewed and recognized as demonstrating extraordinary
                ability in technology evaluation.
              </p>
              <p>Your recognition entitles you to the following:</p>
              <ul className="list-none space-y-2 pl-2">
                <li>🥇 <strong>O1 Extraordinary Ability Letter</strong> — issued by Danveer Technologies</li>
                <li>✈️ <strong>ICE Airways™ Flight Voucher</strong> — one-way to San Francisco (Seat O1-A, Class: Extraordinary)</li>
                <li>📜 <strong>Certificate of Extraordinary Ability</strong> — suitable for framing</li>
                <li>💼 <strong>$185,000 offer letter</strong> — allocated for your sponsored position, SF</li>
              </ul>
              <p>
                Please retain this notice. Your ICE Airways™ boarding pass has been prepared and
                awaits your download below.
              </p>
            </div>

            {/* Signatures */}
            <div className="mt-10 flex justify-between items-end">
              <div className="text-sm">
                <p className="text-gray-400 italic">Sincerely,</p>
                <div className="mt-6 border-t border-gray-300 pt-1 w-48">
                  <p className="font-medium text-[var(--color-navy)]">Program Director</p>
                  <p className="text-xs text-gray-400">Danveer Technologies, Inc.</p>
                </div>
              </div>
              <div className="certificate-seal">
                <span>APPROVED</span>
              </div>
            </div>

            {/* Fine print */}
            <div className="mt-10 pt-4 border-t border-gray-100">
              <p className="text-[7px] text-gray-300 leading-relaxed">
                This document is issued by Danveer Technologies, Inc. for entertainment purposes only as part of Judgeathon 2026. It does not constitute a legal visa, immigration document, flight ticket, employment offer, or government communication of any kind. No affiliation with any government agency. Valid until April 2, 2026. ICE Airways™ is a fictional airline brand. Danveer Technologies is a fictional company. Share responsibly.
              </p>
            </div>
          </div>

          {/* Perks Banner */}
          <div className="bg-[var(--color-navy)] text-white rounded-lg p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-300 mb-3">Your Perks Package</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <p className="font-semibold">ICE Airways™ Flight</p>
                  <p className="text-blue-200 text-xs">One-way · SFO · Seat O1-A · Sponsored by Danveer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥇</span>
                <div>
                  <p className="font-semibold">O1 Letter</p>
                  <p className="text-blue-200 text-xs">Extraordinary ability formally recognized</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-semibold">$185K Offer</p>
                  <p className="text-blue-200 text-xs">San Francisco · Danveer Technologies HQ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <button onClick={() => downloadPDF("approval")} className="btn-primary py-3">
              Download Approval Letter
            </button>
            <button
              onClick={() => downloadPDF("flight")}
              className="card text-center hover:border-[var(--color-primary)] cursor-pointer font-medium text-sm text-[var(--color-navy)] py-3"
            >
              ✈️ ICE Airways Boarding Pass
            </button>
            <button
              onClick={() => downloadPDF("certificate")}
              className="card text-center hover:border-[var(--color-primary)] cursor-pointer font-medium text-sm text-[var(--color-navy)] py-3"
            >
              📜 Ability Certificate
            </button>
          </div>

          {/* Tweet CTA */}
          <div className="text-center bg-blue-50 rounded-lg p-8 border border-blue-200">
            <p className="text-base font-bold text-[var(--color-navy)] mb-2">
              🚀 You&apos;re extraordinary. Let the world know.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              Screenshot the letter, download the boarding pass, and tweet it. Link to the Judgeathon auto-included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={shareTwitter} className="btn-primary px-8 py-3">
                Tweet My Approval Letter 🐦
              </button>
              <button
                onClick={shareLinkedIn}
                className="card px-6 py-3 text-sm font-medium text-[var(--color-navy)] hover:border-[var(--color-primary)] cursor-pointer"
              >
                Share on LinkedIn
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
