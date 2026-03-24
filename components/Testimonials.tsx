"use client";
import { useState, useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const testimonials = [
  { name: "Anjali Mehta",    role: "Business Analyst → Power Platform Developer", company: "Infosys",          country: "🇮🇳 India",          avatar: "AM", rating: 5, cert: "PL-200 Certified",       quote: "The hands-on lab sessions were incredible. I built my first production-ready Power App within week 1. The trainer's real-world examples made everything click. Passed PL-200 on my first attempt!" },
  { name: "James Crawford",  role: "IT Manager → Solution Architect",             company: "Deloitte UK",      country: "🇬🇧 United Kingdom",  avatar: "JC", rating: 5, cert: "PL-400 + PL-600",        quote: "I took the 5-day intensive and it was worth every penny. Comprehensive, up-to-date curriculum. The exam preparation strategy alone is worth the course cost." },
  { name: "Maria Santos",    role: "Finance Analyst → Power BI Specialist",       company: "Capgemini Brazil", country: "🇧🇷 Brazil",          avatar: "MS", rating: 5, cert: "PL-300 Certified",       quote: "Coming from a non-tech background, I was nervous. But the instructors made Power BI DAX feel approachable. The support community is still amazing 6 months later." },
  { name: "Yuki Tanaka",     role: "Software Developer",                          company: "NTT Data Japan",   country: "🇯🇵 Japan",           avatar: "YT", rating: 5, cert: "PL-400 Certified",       quote: "The PL-400 developer track was exactly what I needed. Deep dives into PCF controls and custom connectors. The trainer had 10+ years enterprise experience and it showed." },
  { name: "Omar Al-Rashid",  role: "Process Engineer → RPA Specialist",           company: "Saudi Aramco",     country: "🇸🇦 Saudi Arabia",    avatar: "OA", rating: 5, cert: "PL-200 Certified",       quote: "The Power Automate + Desktop Flows module was the highlight. We automated 3 major business processes during the lab. 2 are already deployed in our production environment." },
  { name: "Sarah Johnson",   role: "IT Administrator",                            company: "NHS Digital, UK",  country: "🇬🇧 United Kingdom",  avatar: "SJ", rating: 5, cert: "PL-900 Certified",       quote: "I needed PL-900 for a role change. The training was perfectly paced and the recorded sessions were a lifesaver. Certified in under 3 weeks of flexible self-paced study." },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay]       = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setActiveIndex((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [autoPlay]);

  const goTo = (i: number) => { setActiveIndex(i); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000); };
  const active = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden" style={{ backgroundColor: "#F0F9FF" }} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge mb-5 inline-flex">💬 Testimonials</span>
          <h2 id="testimonials-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-4" style={{ color: C.dark }}>
            Learners Who <span className="text-shimmer-dark">Transformed Their Careers</span>
          </h2>
          <p className="font-body text-base" style={{ color: "#6B7280" }}>Over 40,000 professionals certified across 150+ countries.</p>
        </div>

        {/* Featured */}
        <div className="animate-on-scroll mb-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border relative overflow-hidden" style={{ borderColor: "rgba(6,148,209,0.2)", boxShadow: "0 8px 40px rgba(6,148,209,0.08)" }}>
            <div className="absolute top-4 right-8 text-[110px] font-heading font-medium leading-none select-none pointer-events-none" style={{ color: "rgba(6,148,209,0.06)" }}>"</div>
            <div className="flex gap-1 mb-5">
              {Array.from({ length: active.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" style={{ color: "#F59E0B" }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-body text-lg sm:text-xl leading-relaxed mb-8 relative z-10" style={{ color: "#1E293B" }}>&ldquo;{active.quote}&rdquo;</blockquote>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-medium text-white text-sm flex-shrink-0" style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.accent})` }}>{active.avatar}</div>
                <div>
                  <p className="font-heading font-medium text-base" style={{ color: C.dark }}>{active.name}</p>
                  <p className="text-sm font-body" style={{ color: "#6B7280" }}>{active.role}</p>
                  <p className="text-xs font-body" style={{ color: "#94A3B8" }}>{active.company} · {active.country}</p>
                </div>
              </div>
              <span className="text-xs font-heading font-medium px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(74,222,128,0.08)", borderColor: "rgba(74,222,128,0.25)", color: "#16A34A" }}>✓ {active.cert}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="animate-on-scroll flex items-center justify-center gap-2 mb-10" style={{ transitionDelay: "0.08s" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="transition-all duration-300 rounded-full" style={{ width: i === activeIndex ? "28px" : "8px", height: "8px", backgroundColor: i === activeIndex ? C.accent : "rgba(6,148,209,0.2)" }} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        {/* Mini cards */}
        <div className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ transitionDelay: "0.12s" }}>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              className="text-left rounded-xl p-4 border transition-all duration-300 bg-white"
              style={{ borderColor: i === activeIndex ? "rgba(6,148,209,0.4)" : "#E5E7EB", boxShadow: i === activeIndex ? "0 4px 16px rgba(6,148,209,0.1)" : "none" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-medium text-white text-xs flex-shrink-0" style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.accent})` }}>{t.avatar}</div>
                <div className="min-w-0">
                  <p className="font-heading font-medium text-xs truncate" style={{ color: C.dark }}>{t.name}</p>
                  <p className="text-xs font-body truncate" style={{ color: "#94A3B8" }}>{t.company}</p>
                </div>
              </div>
              <p className="text-xs font-body line-clamp-2" style={{ color: "#6B7280" }}>{t.quote.slice(0, 85)}...</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
