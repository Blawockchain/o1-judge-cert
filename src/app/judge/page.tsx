"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  name: string;
  team: string[];
  hackathon: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: "AI Content Moderation Engine",
    team: ["Sarah Park", "Omar Elgamal"],
    hackathon: "Danveer HackStorm 2025",
    description:
      "Multi-modal content moderation system combining vision transformers with LLM-based context analysis. Achieves 97.3% accuracy on hate speech detection while reducing false positives by 40% compared to existing solutions.",
    tags: ["Python", "PyTorch", "FastAPI"],
  },
  {
    name: "Web3 Social Graph",
    team: ["Priya Sharma", "Alex Volkov", "Kim Tanaka", "Jordan Reeves"],
    hackathon: "Danveer BuildAssembly 2025",
    description:
      "An open social graph protocol that maps on-chain identity relationships across EVM chains. Includes a recommendation engine for community governance participation based on expertise signals and contribution history.",
    tags: ["TypeScript", "GraphQL", "Polygon"],
  },
  {
    name: "Neural Code Review Assistant",
    team: ["David Liu", "Amara Osei"],
    hackathon: "Danveer CodeSprint 2025",
    description:
      "IDE plugin that performs real-time code review using fine-tuned models trained on 2M+ merged pull requests. Provides security vulnerability detection, performance suggestions, and architectural feedback inline.",
    tags: ["Rust", "WASM", "GPT-4"],
  },
  {
    name: "ClimateFi Carbon Credits",
    team: ["Elena Rossi", "Tariq Hassan", "Jun Wei"],
    hackathon: "Danveer EcoHack 2025",
    description:
      "Tokenized carbon credit marketplace with satellite-verified reforestation tracking. Uses IoT sensor networks for real-time carbon sequestration measurement and automated credit issuance via smart contracts.",
    tags: ["Solidity", "IoT", "Next.js"],
  },
  {
    name: "DeFi Insurance Protocol",
    team: ["Maya Chen", "Raj Krishnan", "Leo Müller"],
    hackathon: "Danveer FinanceHack 2025",
    description:
      "A decentralized insurance protocol that uses on-chain risk modeling to provide parametric coverage for smart contract failures. Features automated claims processing via oracle-verified events and a novel bonding curve for premium pricing.",
    tags: ["Solidity", "Chainlink", "React"],
  },
];

const CRITERIA = [
  "Innovation",
  "Technical Execution",
  "Market Viability",
  "Design Quality",
];

const ACCENT_COLORS = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"];

interface ProjectScore {
  scores: Record<string, number>;
  comment: string;
}

type Scores = Record<number, ProjectScore>;

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function JudgePage() {
  const router = useRouter();
  const [judgeName, setJudgeName] = useState("");
  const [scores, setScores] = useState<Scores>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name);
    }
  }, []);

  function setScore(projectIdx: number, criterion: string, value: number) {
    setScores((prev) => ({
      ...prev,
      [projectIdx]: {
        ...prev[projectIdx],
        scores: { ...prev[projectIdx]?.scores, [criterion]: value },
      },
    }));
  }

  function setComment(projectIdx: number, value: string) {
    setScores((prev) => ({
      ...prev,
      [projectIdx]: {
        ...prev[projectIdx],
        comment: value,
      },
    }));
  }

  function allScored(): boolean {
    return PROJECTS.every((_, idx) =>
      CRITERIA.every((c) => scores[idx]?.scores?.[c] > 0)
    );
  }

  function scoredCount(): number {
    return PROJECTS.filter((_, idx) =>
      CRITERIA.every((c) => scores[idx]?.scores?.[c] > 0)
    ).length;
  }

  function handleSubmit() {
    if (!allScored()) return;
    setSubmitting(true);
    sessionStorage.setItem("scores", JSON.stringify(scores));
    setTimeout(() => {
      router.push("/results");
    }, 1200);
  }

  return (
    <>
      <Header />

      {/* Sticky progress bar */}
      <div className="sticky top-[73px] z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[var(--color-navy)]">
              Project {Math.min(scoredCount() + 1, 5)} of 5
            </span>
            <div className="flex gap-1.5">
              {PROJECTS.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    CRITERIA.every((c) => scores[idx]?.scores?.[c] > 0)
                      ? "bg-indigo-500"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
          {judgeName && (
            <p className="text-xs text-slate-400">
              Judging as <span className="font-semibold text-[var(--color-navy)]">{judgeName}</span>
            </p>
          )}
        </div>
      </div>

      <main className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Colored left accent + content */}
                <div className="flex">
                  <div
                    className="w-1.5 shrink-0"
                    style={{ backgroundColor: ACCENT_COLORS[idx] }}
                  />
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="text-lg font-bold text-[var(--color-navy)]">
                          {project.name}
                        </h2>
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full mt-1">
                          {project.hackathon}
                        </span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Team avatars */}
                    <div className="flex items-center gap-1.5 mb-3">
                      {project.team.map((member) => (
                        <div
                          key={member}
                          className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500"
                          title={member}
                        >
                          {member.split(" ").map((n) => n[0]).join("")}
                        </div>
                      ))}
                      <span className="text-xs text-slate-400 ml-1.5">
                        {project.team.join(", ")}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Score pill buttons */}
                    <div className="space-y-3 mb-4">
                      {CRITERIA.map((criterion) => (
                        <div key={criterion}>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">
                            {criterion}
                          </label>
                          <div className="flex gap-1.5 flex-wrap">
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(
                              (n) => {
                                const selected = scores[idx]?.scores?.[criterion] === n;
                                return (
                                  <button
                                    key={n}
                                    type="button"
                                    onClick={() => setScore(idx, criterion, n)}
                                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                                      selected
                                        ? "bg-indigo-500 text-white shadow-sm scale-105"
                                        : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                    }`}
                                  >
                                    {n}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <textarea
                      className="input-field text-sm resize-none"
                      rows={2}
                      placeholder="Comments (optional)"
                      value={scores[idx]?.comment || ""}
                      onChange={(e) => setComment(idx, e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Sticky submit bar */}
      <div className="sticky bottom-0 z-40 bg-white/90 backdrop-blur-sm border-t border-slate-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-sm text-slate-400">
            {scoredCount()}/5 projects scored
          </p>
          <button
            onClick={handleSubmit}
            disabled={!allScored() || submitting}
            className="btn-primary py-2.5 px-8 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting
              ? "Processing Evaluations..."
              : "Submit All Evaluations →"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
