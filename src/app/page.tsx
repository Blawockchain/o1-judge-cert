"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const SPEAKERS = [
  { name: "Priya Nair", role: "Head of Recognition", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=PriyaNair&backgroundColor=b6e3f4" },
  { name: "David Stern", role: "Judging Committee", org: "Judgeathon 2026", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=DavidStern&backgroundColor=d1d4f9" },
  { name: "Keiko Murakami", role: "Ability Assessor", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=KeikoMurakami&backgroundColor=ffd5dc" },
  { name: "Arjun Mehta", role: "Program Director", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=ArjunMehta&backgroundColor=c0aede" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* HERO — White House split layout */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[520px]">
            {/* Left: text */}
            <motion.div
              className="flex-1 flex flex-col justify-center px-8 md:px-12 py-16 border-r border-gray-200"
              initial="hidden" animate="show" variants={stagger}
            >
              <motion.p variants={fadeUp} className="gov-label mb-4">Official Program · April 2026</motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-black text-[#002868] leading-tight mb-6 uppercase">
                Welcome to the<br />
                <span className="text-[#B22234]">Judgeathon.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                The world&apos;s first hackathon where you don&apos;t build — you judge. Complete the evaluation and receive your O1 visa sponsorship from Danveer Technologies.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link href="/register" className="btn-primary">
                  Register as Judge
                </Link>
                <a href="#how-it-works" className="btn-outline">
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            {/* Right: hero graphic */}
            <div className="flex-1 bg-[#002868] flex flex-col items-center justify-center p-12 text-white text-center relative overflow-hidden min-h-[300px]">
              {/* Stars pattern */}
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px"}} />
              <div className="relative z-10">
                <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-blue-300 mb-6">Danveer Technologies Presents</p>
                <p className="font-serif text-6xl font-black leading-none mb-2">2,586</p>
                <p className="text-blue-200 text-sm font-mono-accent uppercase tracking-widest mb-8">Applicants since 2017</p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { val: "69%", label: "Acceptance Rate" },
                    { val: "6–7d", label: "Processing" },
                    { val: "$185K", label: "Starting Salary" },
                  ].map(s => (
                    <div key={s.label}>
                      <p className="font-serif text-2xl font-black text-[#B22234]">{s.val}</p>
                      <p className="text-xs text-blue-300 font-mono-accent uppercase tracking-wide mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 px-6 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="gov-label mb-3">The Format</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868] uppercase mt-2">
                A hackathon with one twist:
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-lg mt-3">You don&apos;t build. You judge.</motion.p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { step: "01", emoji: "📋", title: "Register", desc: "Submit your credentials. Our team verifies your background against Danveer extraordinary ability criteria within 48 hours." },
                { step: "02", emoji: "⚡", title: "Hack as a Judge", desc: "Complete 5 absurd evaluation challenges. Score fast, judge sharp. This is your hack." },
                { step: "03", emoji: "🏆", title: "Collect Your Visa", desc: "Complete evaluations and receive your Danveer approval notice, ICE Airways boarding pass, and certificate." },
              ].map((s, i) => (
                <motion.div key={s.step} variants={fadeUp} className={`p-8 ${i < 2 ? "border-r border-gray-200" : ""} relative`}>
                  <div className="w-10 h-10 bg-[#B22234] text-white flex items-center justify-center font-serif font-black text-lg mb-5">{s.step}</div>
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-serif font-black text-lg text-[#002868] uppercase mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRIZES */}
        <section id="prizes" className="py-20 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="gov-label mb-3">Prizes</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868] uppercase mt-2">
                The most ambitious<br />prize pool in history.
              </motion.h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="card border-t-[#d4af37]">
                <p className="text-4xl mb-4">🥇</p>
                <p className="gov-label text-[#b8860b] mb-2">1st Place</p>
                <h3 className="font-serif text-xl font-black text-[#002868] uppercase mb-3">O1 Sponsorship</h3>
                <p className="text-sm text-gray-500 mb-3">Extraordinary ability letter + $185K offer letter, SF.</p>
                <p className="text-xs font-semibold text-[#B22234] bg-red-50 px-3 py-2 border border-red-100">✈️ ICE Airways™ one-way SFO included</p>
              </motion.div>
              <motion.div variants={fadeUp} className="card">
                <p className="text-4xl mb-4">🥈</p>
                <p className="gov-label mb-2">2nd Place</p>
                <h3 className="font-serif text-xl font-black text-[#002868] uppercase mb-3">H-1B Petition</h3>
                <p className="text-sm text-gray-500">Specialty occupation sponsorship + 3 year initial period + employer-of-record setup.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="card border-t-[#B22234]">
                <p className="text-4xl mb-4">🥉</p>
                <p className="gov-label text-[#B22234] mb-2">3rd Place</p>
                <h3 className="font-serif text-xl font-black text-[#002868] uppercase mb-3">Asylum</h3>
                <p className="text-sm text-gray-500">Immediate protection + work authorisation + pathway to green card. Valid while supplies last.</p>
              </motion.div>
            </motion.div>
            <p className="text-center text-xs text-gray-300 mt-8 font-mono-accent">* ALL PRIZES FICTIONAL. EXPIRES APRIL 2, 2026. FOR ENTERTAINMENT ONLY.</p>
          </div>
        </section>

        {/* PANEL */}
        <section id="judges" className="py-20 px-6 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="gov-label mb-3">Distinguished Panel</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868] uppercase mt-2">
                Who&apos;s judging the judges.
              </motion.h2>
            </motion.div>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {SPEAKERS.map((s, i) => (
                <motion.div key={s.name} variants={fadeUp} className={`p-6 text-center ${i < 3 ? "border-r border-gray-200" : ""} hover:bg-gray-50 transition-colors`}>
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#002868]">
                    <Image src={s.avatar} alt={s.name} width={64} height={64} className="w-full h-full object-cover" unoptimized />
                  </div>
                  <p className="font-serif font-black text-sm text-[#002868] uppercase">{s.name}</p>
                  <p className="text-xs text-[#B22234] font-mono-accent uppercase tracking-wide mt-0.5">{s.role}</p>
                  <p className="text-xs text-gray-400 font-mono-accent mt-0.5">{s.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="py-20 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="gov-label mb-3">Official Schedule</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868] uppercase mt-2">48 hours. One mission.</motion.h2>
            </motion.div>
            <motion.div className="border border-gray-200 divide-y divide-gray-200 bg-white" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { time: "Apr 1 · 12:00 AM", event: "Judgeathon Opens", note: "Registration goes live", icon: "🚀" },
                { time: "Apr 1 · 9:00 AM", event: "Challenge Panel Released", note: "5 challenges unlocked", icon: "📂" },
                { time: "Apr 1 · 6:00 PM", event: "Midpoint Check", note: "Leaderboard published", icon: "📊" },
                { time: "Apr 2 · 11:59 PM", event: "Judgeathon Closes", note: "All submissions final", icon: "🔒" },
                { time: "Apr 3 · 12:00 AM", event: "Winners Announced", note: "Approval letters dispatched", icon: "🏆" },
              ].map((s) => (
                <motion.div key={s.time} variants={fadeUp} className="flex gap-5 items-center px-6 py-4 hover:bg-gray-50 transition-colors">
                  <span className="text-xl w-8 shrink-0">{s.icon}</span>
                  <div className="text-xs font-mono-accent text-gray-400 w-32 shrink-0 uppercase">{s.time}</div>
                  <div>
                    <p className="font-serif font-black text-sm text-[#002868] uppercase">{s.event}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.note}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-6 border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <motion.div className="text-center mb-14" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="gov-label mb-3">FAQ</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868] uppercase mt-2">Frequently Asked Questions.</motion.h2>
            </motion.div>
            <motion.div className="divide-y divide-gray-200 border border-gray-200 bg-white" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { q: "What exactly is a Judgeathon?", a: "A hackathon where there are no hackers — only judges. You compete by completing absurd evaluation challenges. Your answers determine your rank." },
                { q: "Do I need to code anything?", a: "Absolutely not. You just need strong opinions and the ability to rate pigeons by their extraordinary ability. No coding required." },
                { q: "Is the O1 visa real?", a: "The letter is incredibly real-looking. The visa is not. This expires April 2, 2026 for a reason." },
                { q: "Who is Danveer Technologies?", a: "A technology firm with deep expertise in extraordinary ability assessment, institutional recognition, and April programming." },
                { q: "Can I share my results?", a: "You are strongly encouraged to tweet your approval letter. The more people who see it, the more extraordinary you become." },
              ].map((f) => (
                <motion.div key={f.q} variants={fadeUp} className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <p className="font-serif font-black text-[#002868] uppercase text-sm mb-2">{f.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#002868] py-24 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px"}} />
          <motion.div className="max-w-2xl mx-auto relative z-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="gov-label text-blue-300 mb-4">Join the Program</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl font-black uppercase mb-4">
              Ready to Judge?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-200 mb-10 text-lg">
              Applications close April 2. Visa expires same day.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/register" className="btn-primary text-base py-4 px-14">
                Register as Judge
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
