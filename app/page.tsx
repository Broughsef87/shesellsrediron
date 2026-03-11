"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="text-xl font-bold tracking-tight text-[#111111]">
            She Sells Red Iron
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#6B7280] hover:text-[#111111] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm text-[#6B7280] hover:text-[#111111]" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" className="text-sm text-[#6B7280] hover:text-[#111111]" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contact" className="text-sm text-[#6B7280] hover:text-[#111111]" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(229,231,235,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(229,231,235,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        {/* Fade-out gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B91C1C] mb-6">
            Red Iron Steel Buildings
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] text-[#111111] mb-6">
            Steel. Straight Talk.
            <br />
            <span className="text-[#B91C1C]">Decades of Experience.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed">
            Lisa Wirth is one of the most trusted names in the red iron steel building industry.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#B91C1C] text-white text-sm font-semibold px-8 py-4 rounded-md hover:bg-[#991B1B] transition-colors shadow-sm"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Lisa photo */}
            <div className="flex justify-center">
              <img
                src="/Lisa-Wirth.jpeg"
                alt="Lisa Wirth"
                className="w-full max-w-sm aspect-square rounded-2xl object-cover shadow-md"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B91C1C] mb-4">
                About Lisa
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-6">
                No-nonsense expertise,<br />built over 30 years.
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-5">
                With over 30 years in the steel building industry, Lisa Wirth has built a reputation on
                one thing: no-nonsense expertise. She works with clients nationwide, helping with
                everything from red iron building selection to site optimization, foundation engineering,
                and budgeting.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Lisa is backed by partnerships with the industry&apos;s largest steel building manufacturers —
                which means her clients get access to the best structures at the most competitive prices,
                without the runaround.
              </p>
              <p className="text-[#111111] font-semibold italic text-lg border-l-4 border-[#B91C1C] pl-4">
                &ldquo;The industry doesn&apos;t intimidate her. It never has.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B91C1C] mb-4">
              What Lisa Does
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="2">
                  <rect x="3" y="9" width="18" height="12" rx="1" />
                  <path strokeLinecap="round" d="M3 9l9-6 9 6" />
                  <path strokeLinecap="round" d="M9 21V12h6v9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Red Iron Steel Buildings</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                From commercial warehouses to residential kits, Lisa sources the highest quality structures
                at fair prices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7h6" />
                  <path strokeLinecap="round" d="M12 12v5M9.5 14.5l2.5-2.5 2.5 2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Consulting &amp; Budgeting</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Site optimization, foundation engineering, estimation — Lisa guides every step so you
                don&apos;t overpay or under-plan.
              </p>
            </div>

            {/* Card 3 — Coming Soon */}
            <div className="relative bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm overflow-hidden">
              {/* Coming Soon badge */}
              <span className="absolute top-4 right-4 bg-[#B91C1C] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                Coming Soon
              </span>
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Coaching &amp; Education</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Courses and coaching for women breaking into male-dominated industries. Built from
                decades in the trenches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg
            className="mx-auto mb-8 text-[#B91C1C] opacity-30"
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="currentColor"
          >
            <path d="M0 48V29.333C0 13.156 9.956 3.822 29.867 0L32 5.333C22.4 7.2 17.067 12.267 16 20.267H28.8V48H0zm35.2 0V29.333C35.2 13.156 45.156 3.822 65.067 0L67.2 5.333C57.6 7.2 52.267 12.267 51.2 20.267H64V48H35.2z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-[#111111] mb-8">
            &ldquo;Lisa Wirth is the most straightforward and knowledgeable professional I have ever worked
            with in the metal building industry. Her candid approach is most helpful from design to
            delivery and her attention to detail saved us tens of thousands of dollars on our project.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-[#6B7280] tracking-wide uppercase">— Aaron S.</p>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B91C1C] mb-4">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Build Something That Lasts?
          </h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Reach out to Lisa directly — no pressure, no games.
          </p>
          <a
            href="mailto:wirth.lisa.n@gmail.com"
            className="inline-block bg-[#B91C1C] text-white text-sm font-semibold px-8 py-4 rounded-md hover:bg-[#991B1B] transition-colors shadow-sm mb-8"
          >
            Email Lisa
          </a>
          <p className="text-sm text-[#6B7280]">
            <a
              href="https://roimetalbuildings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] font-medium hover:text-[#B91C1C] transition-colors"
            >
              Visit ROI Metal Buildings →
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-[#E5E7EB] bg-white">
        <p className="text-center text-sm text-[#6B7280]">
          &copy; 2026 Lisa Wirth &middot; She Sells Red Iron
        </p>
      </footer>
    </main>
  );
}
