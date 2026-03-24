"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#041825" };

const awards = [
  {
    year: "2025",
    title: "Microsoft Training Services Partner of the Year",
    subtitle: "Global Partner of the Year Award — Training Services",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-[48px] h-[48px]">
        <circle cx="24" cy="24" r="22" stroke="#FFB800" strokeWidth="2" fill="rgba(255,184,0,0.08)" />
        <path d="M24 12l3.5 7.1 7.8 1.1-5.65 5.5 1.33 7.8L24 29.7l-6.98 3.8 1.33-7.8-5.65-5.5 7.8-1.1L24 12z" fill="#FFB800" />
      </svg>
    ),
    highlight: true,
    gradient: "linear-gradient(135deg, rgba(255,184,0,0.12) 0%, rgba(6,148,209,0.08) 100%)",
    borderColor: "rgba(255,184,0,0.35)",
  },
  {
    year: "2024",
    title: "Microsoft ANZ Superstar Campaign Winner",
    subtitle: "Superstars Award FY24 — ANZ Region",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-[48px] h-[48px]">
        <circle cx="24" cy="24" r="22" stroke="#0694D1" strokeWidth="2" fill="rgba(6,148,209,0.08)" />
        <path d="M24 14v6l5 3-5 3v6l-8-9 8-9z" fill="#0694D1" opacity="0.8" />
        <path d="M29 23l5 1-5 1" stroke="#0694D1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    highlight: false,
    gradient: "linear-gradient(135deg, rgba(6,148,209,0.08) 0%, rgba(228,247,255,0.15) 100%)",
    borderColor: "rgba(6,148,209,0.25)",
  },
  {
    year: "2023",
    title: "Microsoft Solutions Partner — Cloud Training",
    subtitle: "Certified Cloud Training Services Provider",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-[48px] h-[48px]">
        <circle cx="24" cy="24" r="22" stroke="#4ADE80" strokeWidth="2" fill="rgba(74,222,128,0.06)" />
        <path d="M16 25l5 5 11-11" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    highlight: false,
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.06) 0%, rgba(6,148,209,0.06) 100%)",
    borderColor: "rgba(74,222,128,0.25)",
  },
  {
    year: "2022",
    title: "Top Rated Microsoft Authorized Learning Partner",
    subtitle: "Recognized for exceptional learner outcomes globally",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-[48px] h-[48px]">
        <circle cx="24" cy="24" r="22" stroke="#A78BFA" strokeWidth="2" fill="rgba(167,139,250,0.06)" />
        <path d="M24 14l2.5 5 5.5.8-4 3.9.9 5.5L24 26.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8L24 14z" fill="#A78BFA" opacity="0.7" />
      </svg>
    ),
    highlight: false,
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.06) 0%, rgba(6,148,209,0.06) 100%)",
    borderColor: "rgba(167,139,250,0.25)",
  },
];

const trustItems = [
  { value: "25+", label: "Years of Excellence", icon: "🏅" },
  { value: "40K+", label: "Professionals Certified", icon: "🎓" },
  { value: "150+", label: "Countries Served", icon: "🌍" },
  { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
];

export default function Awards() {
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
      className="relative overflow-hidden py-[70px]"
      style={{ backgroundColor: C.bg }}
      aria-labelledby="awards-heading"
    >
      {/* Background effects */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" style={{ backgroundColor: "rgba(6,148,209,0.06)" }} />

      <div className="relative max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">

        {/* Header */}
        <div className="animate-on-scroll text-center mb-[48px]">
          <span
            className="inline-flex items-center gap-[6px] text-[12px] font-heading font-medium uppercase tracking-[0.12em] px-[16px] py-[6px] rounded-full mb-[16px]"
            style={{ backgroundColor: "rgba(255,184,0,0.1)", color: "#FFB800", border: "1px solid rgba(255,184,0,0.25)" }}
          >
            🏆 Awards & Recognition
          </span>
          <h2 id="awards-heading" className="font-heading font-medium text-[30px] sm:text-[38px] leading-tight mb-[12px]" style={{ color: "#fff" }}>
            Globally Recognized for{" "}
            <span className="text-shimmer">Training Excellence</span>
          </h2>
          <p className="font-body text-[16px] max-w-[540px] mx-auto" style={{ color: "rgba(228,247,255,0.55)" }}>
            Trusted by Microsoft and industry leaders worldwide for delivering exceptional certification training outcomes.
          </p>
        </div>

        {/* Featured award — full width */}
        <div className="animate-on-scroll mb-[20px]" style={{ transitionDelay: "0.06s" }}>
          <div
            className="relative rounded-[20px] p-[32px] sm:p-[40px] border overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,184,0,0.08) 0%, rgba(9,49,72,0.6) 50%, rgba(6,148,209,0.1) 100%)", borderColor: "rgba(255,184,0,0.25)", backdropFilter: "blur(12px)" }}
          >
            {/* Shimmer top line */}
            <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #FFB800, rgba(6,148,209,0.6), #FFB800, transparent)", backgroundSize: "300% 100%", animation: "borderSlide 4s ease infinite" }} />

            <div className="flex flex-col sm:flex-row items-center gap-[24px]">
              <div className="flex-shrink-0">
                <div className="w-[90px] h-[90px] rounded-[20px] flex items-center justify-center" style={{ backgroundColor: "rgba(255,184,0,0.1)", border: "2px solid rgba(255,184,0,0.25)" }}>
                  {awards[0].icon}
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-[10px] mb-[10px]">
                  <span className="text-[12px] font-heading font-medium px-[12px] py-[4px] rounded-full" style={{ backgroundColor: "rgba(255,184,0,0.15)", color: "#FFB800", border: "1px solid rgba(255,184,0,0.3)" }}>
                    {awards[0].year}
                  </span>
                  <span className="text-[12px] font-heading font-medium px-[12px] py-[4px] rounded-full" style={{ backgroundColor: "rgba(6,148,209,0.1)", color: "#60CEFA", border: "1px solid rgba(6,148,209,0.25)" }}>
                    Partner of the Year
                  </span>
                </div>
                <h3 className="font-heading font-medium text-[22px] sm:text-[26px] leading-tight mb-[8px]" style={{ color: "#fff" }}>
                  {awards[0].title}
                </h3>
                <p className="font-body text-[14px]" style={{ color: "rgba(228,247,255,0.5)" }}>{awards[0].subtitle}</p>
              </div>
              <div className="flex-shrink-0 hidden lg:block">
                <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(255,184,0,0.15), rgba(255,184,0,0.05))", border: "1px solid rgba(255,184,0,0.2)" }}>
                  <div className="text-center">
                    <p className="font-heading font-medium text-[28px] leading-none" style={{ color: "#FFB800" }}>#1</p>
                    <p className="text-[10px] font-body mt-[2px]" style={{ color: "rgba(255,184,0,0.7)" }}>Global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other awards — 3 col */}
        <div className="animate-on-scroll grid sm:grid-cols-3 gap-[16px] mb-[40px]" style={{ transitionDelay: "0.1s" }}>
          {awards.slice(1).map((award, i) => (
            <div
              key={award.title}
              className="group rounded-[16px] p-[24px] border transition-all duration-300 hover:-translate-y-[3px]"
              style={{ background: award.gradient, borderColor: award.borderColor, backdropFilter: "blur(10px)", transitionDelay: `${0.05 * i}s` }}
            >
              <div className="flex items-start gap-[16px] mb-[14px]">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <div>
                  <span className="inline-block text-[11px] font-heading font-medium px-[10px] py-[3px] rounded-full mb-[8px]" style={{ backgroundColor: "rgba(228,247,255,0.08)", color: "rgba(228,247,255,0.6)", border: "1px solid rgba(228,247,255,0.12)" }}>
                    {award.year}
                  </span>
                  <h3 className="font-heading font-medium text-[15px] leading-[1.4]" style={{ color: "#fff" }}>
                    {award.title}
                  </h3>
                </div>
              </div>
              <p className="font-body text-[13px] leading-[1.5]" style={{ color: "rgba(228,247,255,0.45)" }}>
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Trust stats strip */}
        <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[14px] p-[20px] text-center border transition-all duration-300 hover:-translate-y-[2px]"
                style={{ backgroundColor: "rgba(9,49,72,0.5)", borderColor: "rgba(6,148,209,0.15)", backdropFilter: "blur(10px)" }}
              >
                <span className="text-[24px] block mb-[8px]">{item.icon}</span>
                <p className="font-heading font-medium text-[26px] leading-none mb-[4px]" style={{ color: "#fff" }}>{item.value}</p>
                <p className="font-body text-[13px]" style={{ color: "rgba(228,247,255,0.5)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Microsoft Partner badge */}
        <div className="animate-on-scroll mt-[28px] flex items-center justify-center" style={{ transitionDelay: "0.2s" }}>
          <div className="inline-flex items-center gap-[16px] px-[28px] py-[14px] rounded-full" style={{ backgroundColor: "rgba(9,49,72,0.5)", border: "1px solid rgba(6,148,209,0.15)" }}>
            <div className="flex items-center gap-[8px]">
              <div className="w-[28px] h-[28px] rounded-[6px] flex items-center justify-center" style={{ backgroundColor: "#0078D4" }}>
                <svg viewBox="0 0 16 16" fill="#fff" className="w-[14px] h-[14px]"><rect x="1" y="1" width="6.5" height="6.5" /><rect x="8.5" y="1" width="6.5" height="6.5" /><rect x="1" y="8.5" width="6.5" height="6.5" /><rect x="8.5" y="8.5" width="6.5" height="6.5" /></svg>
              </div>
              <span className="text-[13px] font-heading font-medium" style={{ color: "rgba(228,247,255,0.7)" }}>
                Microsoft Authorized Learning Partner
              </span>
            </div>
            <div className="w-[1px] h-[20px]" style={{ backgroundColor: "rgba(228,247,255,0.15)" }} />
            <span className="text-[13px] font-heading font-medium" style={{ color: "rgba(228,247,255,0.5)" }}>
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
