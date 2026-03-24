"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#041825", bgDeep: "#020F18" };

const stats = [
  { value: "40K+", label: "Professionals Trained" },
  { value: "98%",  label: "Exam Pass Rate"         },
  { value: "150+", label: "Countries Reached"      },
  { value: "4.9★", label: "Learner Rating"         },
];

const badges = [
  { icon: "🏅", text: "Microsoft Authorized Partner" },
  { icon: "✅", text: "ISO 9001 Certified"           },
  { icon: "🌐", text: "Live Online & Onsite"         },
];

export default function Hero() {
  const heroRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    heroRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-16"
      style={{ background: `linear-gradient(180deg, ${C.bgDeep} 0%, ${C.bg} 55%, ${C.dark} 100%)` }}
      aria-label="Hero Section"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full blur-[130px] pointer-events-none" style={{ backgroundColor: "rgba(6,148,209,0.1)" }} />
      <div className="absolute bottom-1/4 right-1/5 w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: "rgba(9,49,72,0.5)" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(6,148,209,0.06)" }} />

      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`, opacity: 0.4 }} />

      {/* Corner brackets */}
      <div className="absolute top-20 left-8 w-14 h-14 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: "rgba(6,148,209,0.2)" }} />
      <div className="absolute bottom-20 right-8 w-14 h-14 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: "rgba(6,148,209,0.15)" }} />

      {/* Floating nodes */}
      {[
        { emoji: "⚡", top: "130px", right: "64px",   delay: "0s"   },
        { emoji: "📊", top: "260px", right: "160px",  delay: "1.5s" },
        { emoji: "🤖", bottom: "160px", left: "80px", delay: "3s"   },
      ].map((node) => (
        <div key={node.emoji} className="absolute animate-float hidden xl:block"
          style={{ top: node.top, right: node.right, bottom: node.bottom, left: node.left, animationDelay: node.delay }}>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg border"
            style={{ backgroundColor: "rgba(9,49,72,0.8)", borderColor: "rgba(6,148,209,0.2)", backdropFilter: "blur(8px)" }}>
            {node.emoji}
          </div>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* ── Top: 2-column main area ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — headline + CTA */}
          <div className="space-y-8">
            <div className="animate-on-scroll flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b.text} className="section-badge gap-1.5"><span>{b.icon}</span>{b.text}</span>
              ))}
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
              <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl leading-[1.07] tracking-tight" style={{ color: C.light }}>
                Master{" "}
                <span className="text-shimmer">Microsoft<br />Power Platform</span>
                <br />
                <span style={{ color: "rgba(228,247,255,0.65)" }}>Certification</span>
              </h1>
            </div>

            <p className="animate-on-scroll font-body text-lg leading-relaxed max-w-xl" style={{ color: "rgba(228,247,255,0.6)", transitionDelay: "0.2s" }}>
              Build powerful business applications, automate workflows, and unlock deep data insights.
              Get certified by Microsoft-authorized trainers with hands-on labs and real-world projects.
            </p>

            {/* CTA */}
            <div className="animate-on-scroll flex flex-wrap gap-3 pt-1" style={{ transitionDelay: "0.25s" }} id="enroll">
              <a href="#contact" className="btn-primary">
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="relative z-10">Enroll Now</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="animate-on-scroll flex items-center gap-4 pt-1" style={{ transitionDelay: "0.3s" }}>
              <div className="flex -space-x-2">
                {["👩‍💼","👨‍💻","👩‍🏫","👨‍🔬","👩‍💻"].map((emoji, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm"
                    style={{ backgroundColor: C.dark, borderColor: C.bg }}>{emoji}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-sm" style={{ color: "#F59E0B" }}>{s}</span>)}
                  <span className="ml-1 text-sm font-heading font-medium" style={{ color: C.light }}>4.9</span>
                </div>
                <p className="text-xs font-body" style={{ color: "rgba(228,247,255,0.4)" }}>from 3,200+ verified reviews</p>
              </div>
            </div>
          </div>

          {/* Right — cert roadmap card */}
          <div className="relative animate-on-scroll flex flex-col gap-4" style={{ transitionDelay: "0.25s" }}>
            <div className="relative rounded-2xl p-5 overflow-hidden border"
              style={{ backgroundColor: "rgba(9,49,72,0.55)", backdropFilter: "blur(18px)", borderColor: "rgba(6,148,209,0.18)", boxShadow: "0 6px 36px rgba(2,15,24,0.55), inset 0 1px 0 rgba(228,247,255,0.04)" }}>
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)` }} />
              <p className="text-xs font-heading font-medium uppercase tracking-widest mb-4" style={{ color: "rgba(6,148,209,0.7)" }}>Certification Roadmap</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { code: "PL-900", label: "Fundamentals", icon: "🎯", glow: false },
                  { code: "PL-100", label: "App Maker",    icon: "📱", glow: false },
                  { code: "PL-200", label: "Consultant",   icon: "🔧", glow: false },
                  { code: "PL-300", label: "Data Analyst", icon: "📊", glow: true  },
                  { code: "PL-400", label: "Developer",    icon: "⚙️", glow: true  },
                  { code: "PL-600", label: "Architect",    icon: "🏛️", glow: true  },
                ].map((cert) => (
                  <div key={cert.code} className="relative rounded-xl p-2.5 text-center border transition-all duration-200"
                    style={{ backgroundColor: cert.glow ? "rgba(6,148,209,0.1)" : "rgba(228,247,255,0.03)", borderColor: cert.glow ? "rgba(6,148,209,0.3)" : "rgba(6,148,209,0.1)" }}>
                    <div className="text-lg mb-1">{cert.icon}</div>
                    <p className="font-heading font-medium text-xs" style={{ color: cert.glow ? C.accent : C.light }}>{cert.code}</p>
                    <p className="font-body text-[10px] leading-tight mt-0.5" style={{ color: "rgba(228,247,255,0.4)" }}>{cert.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: "1px solid rgba(6,148,209,0.1)" }}>
                {["Power Apps","Power Automate","Power BI","Copilot Studio","Power Pages"].map((t) => (
                  <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full border"
                    style={{ backgroundColor: "rgba(6,148,209,0.06)", borderColor: "rgba(6,148,209,0.15)", color: "rgba(228,247,255,0.55)" }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-4 border flex items-center gap-3"
                style={{ backgroundColor: "rgba(9,49,72,0.5)", backdropFilter: "blur(12px)", borderColor: "rgba(74,222,128,0.2)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(74,222,128,0.12)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="#4ADE80" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-medium text-base" style={{ color: "#4ADE80" }}>98%</p>
                  <p className="font-body text-[10px] leading-tight" style={{ color: "rgba(228,247,255,0.45)" }}>Exam Pass Rate</p>
                </div>
              </div>
              <div className="rounded-xl p-4 border flex items-center gap-3"
                style={{ backgroundColor: "rgba(9,49,72,0.5)", backdropFilter: "blur(12px)", borderColor: "rgba(6,148,209,0.2)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(6,148,209,0.12)" }}>
                  <svg className="w-4 h-4" fill="none" stroke={C.accent} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m-7-3.5v5a7 7 0 0014 0v-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-medium text-base" style={{ color: C.light }}>MCT</p>
                  <p className="font-body text-[10px] leading-tight" style={{ color: "rgba(228,247,255,0.45)" }}>Certified Trainers</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="rounded-xl px-3 py-2 border"
                style={{ backgroundColor: "rgba(9,49,72,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(251,191,36,0.3)", boxShadow: "0 0 16px rgba(251,191,36,0.08)" }}>
                <div className="flex items-center gap-1.5">
                  <span style={{ fontSize: "14px" }}>🛡️</span>
                  <div>
                    <p className="text-[10px] font-heading font-medium" style={{ color: "#FCD34D" }}>Exam Guarantee</p>
                    <p className="text-[9px] font-body" style={{ color: "rgba(228,247,255,0.5)" }}>Free re-training if you fail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────────── */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="animate-on-scroll rounded-2xl p-5 text-center border transition-all duration-300"
              style={{ backgroundColor: "rgba(9,49,72,0.45)", backdropFilter: "blur(12px)", borderColor: "rgba(6,148,209,0.14)", transitionDelay: `${0.08 * i}s` }}>
              <p className="font-heading font-medium text-3xl gradient-text mb-1">{stat.value}</p>
              <p className="text-sm font-body" style={{ color: "rgba(228,247,255,0.5)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
