import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="py-28 px-6 text-center border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] bg-blue-50 px-4 py-1.5 rounded-full mb-6">
              #OnlyJudges · April 1–2, 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[var(--color-navy)] leading-none tracking-tight mb-6">
              The World&apos;s First<br />
              <span className="text-[var(--color-primary)]">Judgeathon.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              No hackers. No teams. No code.<br />
              Just you, a panel of projects, and an O1 visa waiting at the finish line.
            </p>
            <p className="text-sm text-gray-400 mb-10">
              Organised by <strong className="text-[var(--color-navy)]">Danveer Technologies</strong> · Powered by extraordinary ability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary text-base py-4 px-10">
                Register as Judge →
              </Link>
              <a href="#how-it-works" className="text-base py-4 px-10 border border-gray-200 rounded-lg text-gray-600 hover:border-[var(--color-primary)] transition-colors">
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-14 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "2,400+", label: "Judges Sponsored" },
              { val: "98%", label: "I-140 Approval Rate" },
              { val: "48h", label: "Processing Time" },
              { val: "$185K", label: "Starting Salary, SF" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-[var(--color-primary)]">{s.val}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-3">The Format</p>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--color-navy)]">
                A hackathon with one twist:
              </h2>
              <p className="text-xl text-gray-500 mt-3">You don&apos;t build. You judge.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Register",
                  desc: "Submit your credentials. Our team verifies your background against USCIS extraordinary ability criteria within 48 hours.",
                },
                {
                  step: "02",
                  title: "Hack as a Judge",
                  desc: "Evaluate 5 projects across 4 criteria. Score fast, comment sharp. This is your hack — every point you give is a point you earn.",
                },
                {
                  step: "03",
                  title: "Collect Your Visa",
                  desc: "Complete your evaluations and receive your I-140 approval notice, flight voucher, and certificate of extraordinary ability.",
                },
              ].map((s) => (
                <div key={s.step} className="card-minimal relative">
                  <span className="text-6xl font-black text-gray-50 absolute top-4 right-4 leading-none select-none">{s.step}</span>
                  <h3 className="font-bold text-lg text-[var(--color-navy)] mb-2 relative">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed relative">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIZES */}
        <section id="prizes" className="py-20 px-6 border-b border-gray-100 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-3">Prizes</p>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--color-navy)]">
                The most ambitious prize pool<br />in hackathon history.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-minimal border-2 border-yellow-300 bg-yellow-50">
                <p className="text-3xl mb-3">🥇</p>
                <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-1">1st Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">O1 Visa Sponsorship</h3>
                <p className="text-sm text-gray-500">Full I-140 recommendation letter + USCIS processing + $185K offer letter from San Francisco.</p>
              </div>
              <div className="card-minimal border-2 border-gray-200 bg-white">
                <p className="text-3xl mb-3">🥈</p>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">2nd Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">H-1B Petition</h3>
                <p className="text-sm text-gray-500">Specialty occupation sponsorship + 3 year initial period + employer-of-record setup.</p>
              </div>
              <div className="card-minimal border-2 border-orange-200 bg-orange-50">
                <p className="text-3xl mb-3">🥉</p>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-600 mb-1">3rd Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">Asylum</h3>
                <p className="text-sm text-gray-500">Immediate protection + work authorisation + pathway to green card. Valid while supplies last.</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-300 mt-8">* All prizes delivered digitally. Expires April 2, 2026. Not legal immigration documents.</p>
          </div>
        </section>

        {/* JUDGES / SPEAKERS */}
        <section id="judges" className="py-20 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-3">Who&apos;s Judging the Judges</p>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--color-navy)]">
                Our distinguished panel.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Priya Nair", role: "USCIS Senior Officer", init: "PN" },
                { name: "David Stern", role: "Immigration Attorney", init: "DS" },
                { name: "Keiko Murakami", role: "O1 Visa Specialist", init: "KM" },
                { name: "Arjun Mehta", role: "Danveer Technologies", init: "AM" },
              ].map((j) => (
                <div key={j.name} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-navy)] text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {j.init}
                  </div>
                  <p className="font-semibold text-sm text-[var(--color-navy)]">{j.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{j.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="py-20 px-6 border-b border-gray-100 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-3">Schedule</p>
              <h2 className="text-3xl font-black text-[var(--color-navy)]">48 hours. One mission.</h2>
            </div>
            <div className="space-y-4">
              {[
                { time: "Apr 1 · 12:00 AM", event: "Judgeathon Opens", note: "Registration live" },
                { time: "Apr 1 · 9:00 AM", event: "Project Panel Released", note: "5 projects unlocked for scoring" },
                { time: "Apr 1 · 6:00 PM", event: "Midpoint Check", note: "Leaderboard published" },
                { time: "Apr 2 · 11:59 PM", event: "Judgeathon Closes", note: "All submissions final" },
                { time: "Apr 3 · 12:00 AM", event: "Winners Announced", note: "I-140 letters dispatched" },
              ].map((s) => (
                <div key={s.time} className="flex gap-4 items-start card-minimal">
                  <div className="text-xs font-mono text-[var(--color-primary)] w-36 shrink-0 pt-0.5">{s.time}</div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-navy)]">{s.event}</p>
                    <p className="text-xs text-gray-400">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-6 border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-3">FAQ</p>
              <h2 className="text-3xl font-black text-[var(--color-navy)]">You have questions.<br />We have answers.</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What exactly is a Judgeathon?",
                  a: "A hackathon where there are no hackers — only judges. You compete by evaluating projects. Your scores, speed, and commentary are what determine your rank.",
                },
                {
                  q: "Do I need to code anything?",
                  a: "Absolutely not. You just need strong opinions and the ability to rate things from 1–10. Extraordinary ability not required — but it helps.",
                },
                {
                  q: "Is the O1 visa real?",
                  a: "The letter is incredibly real-looking. The visa is not. This expires April 2, 2026 for a reason.",
                },
                {
                  q: "Who is Danveer Technologies?",
                  a: "A technology firm with deep expertise in extraordinary ability assessment, institutional recognition, and April programming.",
                },
                {
                  q: "Can I share my results?",
                  a: "You are strongly encouraged to tweet your approval letter. The more people who see it, the more extraordinary you become.",
                },
              ].map((f) => (
                <div key={f.q} className="border-b border-gray-100 pb-6">
                  <p className="font-bold text-[var(--color-navy)] mb-2">{f.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-navy)] mb-4">
              Ready to judge?
            </h2>
            <p className="text-gray-500 mb-10 text-lg">
              Applications close April 2. Visa expires same day.
            </p>
            <Link href="/register" className="btn-primary text-base py-4 px-12">
              Register as Judge →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
