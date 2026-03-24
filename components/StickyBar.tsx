"use client";
import { useState, useEffect } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-3 rounded-2xl px-5 py-3 backdrop-blur-xl border"
        style={{
          backgroundColor: "rgba(9,49,72,0.95)",
          borderColor: "rgba(6,148,209,0.25)",
          boxShadow: "0 8px 40px rgba(2,15,24,0.7), 0 0 0 1px rgba(6,148,209,0.1)",
        }}
      >
        {/* Live dot */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#0694D1" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "#0694D1" }} />
          </span>
          <span className="text-xs font-body" style={{ color: "rgba(228,247,255,0.7)" }}>
            Next batch: <strong style={{ color: "#E4F7FF" }}>March 25, 2026</strong>
          </span>
        </div>

        <div className="hidden sm:block w-px h-5" style={{ backgroundColor: "rgba(6,148,209,0.2)" }} />

        {/* Enroll CTA */}
        <a
          href="#enroll"
          className="flex items-center gap-2 px-4 py-2 text-sm font-heading font-medium rounded-xl transition-all duration-200 whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #0694D1, #08A8EC)",
            color: "#E4F7FF",
            boxShadow: "0 0 16px rgba(6,148,209,0.35)",
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Enroll Now
        </a>

        {/* Syllabus */}
        <a
          href="#syllabus"
          className="px-3 py-2 text-xs font-body rounded-xl border transition-all duration-200 whitespace-nowrap"
          style={{
            color: "rgba(228,247,255,0.7)",
            borderColor: "rgba(6,148,209,0.2)",
          }}
        >
          Download Syllabus
        </a>
      </div>
    </div>
  );
}
