"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#041825", bg2: "#051E2D" };

const inclusions = [
  "40+ hours of instructor-led training",
  "15+ hands-on lab exercises",
  "90-day access to recorded sessions",
  "Practice exam with 500+ questions",
  "Digital certification on completion",
  "Lifetime alumni community access",
  "Exam guarantee (free re-training)",
  "Corporate invoice & training letter",
];

const upcomingBatches = [
  { date: "March 25, 2026",  format: "Live Online",       seats: 3,  tag: "Filling Fast", urgent: true  },
  { date: "April 7, 2026",   format: "Live Online",       seats: 8,  tag: "Open",         urgent: false },
  { date: "April 21, 2026",  format: "Bootcamp Weekend",  seats: 12, tag: "Open",         urgent: false },
];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: C.bg }}
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 blueprint-bg opacity-40" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(6,148,209,0.07)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: "rgba(9,49,72,0.5)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero CTA block */}
          <div
            className="animate-on-scroll relative rounded-3xl overflow-hidden border mb-12"
            style={{
              backgroundColor: "rgba(9,49,72,0.5)",
              backdropFilter: "blur(16px)",
              borderColor: "rgba(6,148,209,0.22)",
            }}
          >
            {/* Animated top accent */}
            <div
              className="absolute inset-x-0 top-0 h-0.5"
              style={{
                background: `linear-gradient(90deg, ${C.dark}, ${C.accent}, ${C.light}, ${C.accent}, ${C.dark})`,
                backgroundSize: "300% 100%",
                animation: "borderSlide 4s ease infinite",
              }}
            />

            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(6,148,209,0.05) 0%, transparent 50%, rgba(228,247,255,0.02) 100%)" }}
            />

            <div className="relative p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <span className="section-badge mb-6 inline-flex">🚀 Limited Offer — Save 28%</span>
                <h2 id="cta-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5" style={{ color: C.light }}>
                  Start Your{" "}
                  <span className="text-shimmer">Power Platform</span>{" "}
                  Journey Today
                </h2>
                <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(228,247,255,0.58)" }}>
                  Join 40,000+ certified professionals. Get personalized guidance from
                  our course advisors and choose the learning format that fits your schedule.
                </p>

                {/* Inclusions */}
                <div className="grid sm:grid-cols-2 gap-2 mb-8">
                  {inclusions.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm font-body" style={{ color: "rgba(228,247,255,0.7)" }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#4ADE80" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#" className="btn-primary">
                    <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="relative z-10">Enroll Now — Save 28%</span>
                  </a>
                  <a href="#" className="btn-outline">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: C.accent }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Talk to an Advisor
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-5">
                {/* Upcoming batches */}
                <div>
                  <p className="font-heading font-medium text-base mb-3 flex items-center gap-2" style={{ color: C.light }}>
                    <span style={{ color: C.accent }}>📅</span> Upcoming Batches
                  </p>
                  <div className="space-y-2.5">
                    {upcomingBatches.map((batch) => (
                      <div
                        key={batch.date}
                        className="flex items-center justify-between p-4 rounded-xl border transition-all duration-200"
                        style={{
                          backgroundColor: "rgba(228,247,255,0.03)",
                          borderColor: batch.urgent ? "rgba(248,113,113,0.2)" : "rgba(6,148,209,0.1)",
                        }}
                      >
                        <div>
                          <p className="font-heading font-medium text-sm" style={{ color: C.light }}>{batch.date}</p>
                          <p className="text-xs font-body" style={{ color: "rgba(228,247,255,0.4)" }}>
                            {batch.format} · {batch.seats} seats left
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs font-heading font-medium px-2.5 py-1 rounded-full border"
                            style={
                              batch.urgent
                                ? { backgroundColor: "rgba(248,113,113,0.1)", borderColor: "rgba(248,113,113,0.25)", color: "#F87171" }
                                : { backgroundColor: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.2)", color: "#4ADE80" }
                            }
                          >
                            {batch.tag}
                          </span>
                          <a href="#" className="text-xs font-heading font-medium transition-colors" style={{ color: C.accent }}>
                            Book →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick inquiry form */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "rgba(9,49,72,0.4)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(6,148,209,0.18)",
                  }}
                >
                  <p className="font-heading font-medium text-base mb-4" style={{ color: C.light }}>Get a Free Callback</p>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    {[
                      { placeholder: "Your Full Name",                    type: "text"  },
                      { placeholder: "Work Email Address",                type: "email" },
                      { placeholder: "Phone Number (with country code)",  type: "tel"   },
                    ].map((field) => (
                      <input
                        key={field.placeholder}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200"
                        style={{
                          backgroundColor: "rgba(228,247,255,0.04)",
                          border: "1px solid rgba(6,148,209,0.15)",
                          color: C.light,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(6,148,209,0.45)")}
                        onBlur={(e)  => (e.target.style.borderColor = "rgba(6,148,209,0.15)")}
                      />
                    ))}
                    <select
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "rgba(9,49,72,0.6)",
                        border: "1px solid rgba(6,148,209,0.15)",
                        color: "rgba(228,247,255,0.6)",
                      }}
                    >
                      <option value="">Select Certification Track</option>
                      <option>PL-900 — Fundamentals</option>
                      <option>PL-100 — App Maker</option>
                      <option>PL-200 — Functional Consultant</option>
                      <option>PL-300 — Data Analyst (Power BI)</option>
                      <option>PL-400 — Developer</option>
                      <option>PL-600 — Solution Architect</option>
                      <option>Full Bundle (All Certifications)</option>
                    </select>
                    <button type="submit" className="btn-primary w-full justify-center text-sm py-3">
                      Request Free Callback
                    </button>
                  </form>
                  <p className="text-xs font-body text-center mt-3" style={{ color: "rgba(228,247,255,0.35)" }}>
                    🔒 We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee strip */}
          <div className="animate-on-scroll grid sm:grid-cols-3 gap-4" style={{ transitionDelay: "0.1s" }}>
            {[
              { icon: "🏅", title: "Microsoft Authorized",  desc: "Official Microsoft Learning Partner — globally recognized certifications" },
              { icon: "✅", title: "Exam Guarantee",         desc: "98% pass rate. Free re-training if you don't pass on first attempt"       },
              { icon: "💬", title: "24/7 Support",           desc: "Dedicated advisors, MCT forums, and lifetime alumni community access"      },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5 border flex items-start gap-4"
                style={{
                  backgroundColor: "rgba(9,49,72,0.35)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(6,148,209,0.12)",
                }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-heading font-medium text-sm mb-1" style={{ color: C.light }}>{item.title}</p>
                  <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(228,247,255,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: C.dark, borderTop: "1px solid rgba(6,148,209,0.12)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${C.accent}, #2BB8F0)` }}
                >
                  <span className="font-heading font-medium text-sm" style={{ color: C.light }}>K</span>
                </div>
                <span className="font-heading font-medium text-lg" style={{ color: C.light }}>Koenig Solutions</span>
              </div>
              <p className="text-sm font-body leading-relaxed max-w-sm" style={{ color: "rgba(228,247,255,0.45)" }}>
                Microsoft Authorized Learning Partner with 25+ years of IT training excellence.
                Trusted by 40,000+ professionals across 150+ countries.
              </p>
            </div>
            <div>
              <p className="font-heading font-medium text-sm mb-4" style={{ color: C.light }}>Quick Links</p>
              <ul className="space-y-2">
                {["Course Overview","Curriculum","Certifications","Corporate Training","FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-body transition-colors" style={{ color: "rgba(228,247,255,0.45)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.light)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(228,247,255,0.45)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-heading font-medium text-sm mb-4" style={{ color: C.light }}>Contact</p>
              <ul className="space-y-2 text-sm font-body" style={{ color: "rgba(228,247,255,0.45)" }}>
                <li>📧 info@koenig-solutions.com</li>
                <li>📞 +1 (800) KOENIG-1</li>
                <li>🌐 www.koenig-solutions.com</li>
                <li>📍 Delhi · Dubai · UK · USA</li>
              </ul>
            </div>
          </div>
          <div className="cosmos-divider mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body" style={{ color: "rgba(228,247,255,0.35)" }}>
            <p>© 2026 Koenig Solutions Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy","Terms of Service","Refund Policy"].map((l) => (
                <a key={l} href="#" className="transition-colors hover:text-white">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
