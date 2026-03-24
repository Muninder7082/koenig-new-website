"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#041825" };

const stats = [
  { value: "2x", label: "Faster" },
  { value: "95%", label: "Pass Rate" },
  { value: "100%", label: "Dedicated" },
];

const offerings = [
  {
    title: "Destination Training",
    desc: "Immerse yourself in a focused learning environment, free from distractions, where you can sharpen your skills in popular global destinations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="16" r="6" stroke="#0694D1" strokeWidth="1.8" />
        <path d="M20 22v8" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 34c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="20" r="18" stroke="#0694D1" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Customized Training",
    desc: "Learning without limits. Create custom courses that fit your exact needs, from blended topics to brand-new content.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 12h24v20H8z" stroke="#0694D1" strokeWidth="1.8" rx="2" />
        <path d="M12 8v4M28 8v4" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 20l4 4 8-8" stroke="#0694D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Excellent Trainers",
    desc: "Learn from the best. Our trainers are certified experts with real-world experience, ensuring top-quality learning.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="14" r="6" stroke="#0694D1" strokeWidth="1.8" />
        <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 12l2-4 4 2" stroke="#0694D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="10" r="3" stroke="#0694D1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Pre-Requisite Session",
    desc: "Ensure you're fully prepared before training. Join a free pre-requisite session to assess your knowledge and get ready for the course ahead.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="28" height="20" rx="2" stroke="#0694D1" strokeWidth="1.8" />
        <path d="M6 16h28" stroke="#0694D1" strokeWidth="1.8" />
        <circle cx="20" cy="24" r="3" stroke="#0694D1" strokeWidth="1.5" />
        <path d="M20 27v2" stroke="#0694D1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Happiness Guarantee",
    desc: "100% satisfaction guarantee on every course. Not satisfied? We make it right — no questions, no hassle.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#0694D1" strokeWidth="1.8" />
        <path d="M14 16h12M14 21h8" stroke="#0694D1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="28" r="3" stroke="#0694D1" strokeWidth="1.5" />
        <path d="M18 28l1.5 1.5L22 27" stroke="#0694D1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function UniqueOfferings() {
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 lg:px-[50px] py-[60px]"
      style={{ backgroundColor: C.bg }}
      aria-labelledby="offerings-heading"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="relative max-w-[1340px] mx-auto">

        {/* Header */}
        <div className="animate-on-scroll text-center mb-[40px]">
          <span
            className="inline-block text-[12px] font-heading font-medium uppercase tracking-[0.12em] px-[16px] py-[5px] rounded-full mb-[16px]"
            style={{ backgroundColor: "rgba(6,148,209,0.15)", color: "#4DD8FF", border: "1px solid rgba(6,148,209,0.3)" }}
          >
            Why Koenig
          </span>
          <h2 id="offerings-heading" className="font-heading font-medium text-[32px] sm:text-[38px]" style={{ color: "#fff" }}>
            The <span className="text-shimmer">Koenig Difference</span>
          </h2>
          <p className="font-body text-[16px] mt-[8px]" style={{ color: "rgba(228,247,255,0.55)" }}>
            What makes 1M+ professionals choose Koenig over everyone else
          </p>
        </div>

        {/* Featured Card — 1-on-1 Training */}
        <div
          className="animate-on-scroll rounded-[16px] p-[24px] sm:p-[28px] mb-[20px] flex flex-col sm:flex-row items-center justify-between gap-[20px] border"
          style={{
            background: "linear-gradient(135deg, rgba(6,148,209,0.25) 0%, rgba(9,49,72,0.6) 100%)",
            borderColor: "rgba(6,148,209,0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center gap-[16px]">
            {/* Icon */}
            <div
              className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(6,148,209,0.2)", border: "1px solid rgba(6,148,209,0.3)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px]">
                <circle cx="8" cy="8" r="4" stroke="#0694D1" strokeWidth="1.8" />
                <circle cx="16" cy="8" r="4" stroke="#0694D1" strokeWidth="1.8" />
                <path d="M2 20c0-3.3 2.7-6 6-6M16 14c3.3 0 6 2.7 6 6" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M10 17h4" stroke="#0694D1" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-medium text-[18px]" style={{ color: "#fff" }}>1-on-1 Training</h3>
              <p className="font-body text-[14px]" style={{ color: "rgba(228,247,255,0.6)" }}>
                Schedule personalized sessions based upon your availability.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-[12px] flex-shrink-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="w-[80px] h-[64px] rounded-[12px] flex flex-col items-center justify-center border"
                style={{
                  backgroundColor: "rgba(9,49,72,0.6)",
                  borderColor: "rgba(6,148,209,0.3)",
                }}
              >
                <p className="font-heading font-medium text-[18px] leading-none" style={{ color: "#4DD8FF" }}>{s.value}</p>
                <p className="font-body text-[11px] mt-[2px]" style={{ color: "rgba(228,247,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — 3 cards */}
        <div className="animate-on-scroll grid sm:grid-cols-3 gap-[20px] mb-[20px]" style={{ transitionDelay: "0.08s" }}>
          {offerings.slice(0, 3).map((item, i) => (
            <div
              key={item.title}
              className="group rounded-[16px] p-[28px] border transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                backgroundColor: "rgba(9,49,72,0.45)",
                borderColor: "rgba(6,148,209,0.18)",
                backdropFilter: "blur(10px)",
                transitionDelay: `${0.04 * i}s`,
              }}
            >
              <div
                className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center mb-[20px]"
                style={{ backgroundColor: "rgba(6,148,209,0.15)", border: "1px solid rgba(6,148,209,0.25)" }}
              >
                {item.icon}
              </div>
              <h3 className="font-heading font-medium text-[16px] mb-[10px]" style={{ color: "#fff" }}>{item.title}</h3>
              <p className="font-body text-[14px] leading-[1.6]" style={{ color: "rgba(228,247,255,0.55)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 3 — 2 cards */}
        <div className="animate-on-scroll grid sm:grid-cols-2 gap-[20px]" style={{ transitionDelay: "0.14s" }}>
          {offerings.slice(3).map((item, i) => (
            <div
              key={item.title}
              className="group rounded-[16px] p-[28px] border transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                backgroundColor: "rgba(9,49,72,0.45)",
                borderColor: "rgba(6,148,209,0.18)",
                backdropFilter: "blur(10px)",
                transitionDelay: `${0.04 * i}s`,
              }}
            >
              <div
                className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center mb-[20px]"
                style={{ backgroundColor: "rgba(6,148,209,0.15)", border: "1px solid rgba(6,148,209,0.25)" }}
              >
                {item.icon}
              </div>
              <h3 className="font-heading font-medium text-[16px] mb-[10px]" style={{ color: "#fff" }}>{item.title}</h3>
              <p className="font-body text-[14px] leading-[1.6]" style={{ color: "rgba(228,247,255,0.55)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
