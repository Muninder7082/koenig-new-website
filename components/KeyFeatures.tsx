"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#071F30" };

const features = [
  { icon: "🎓", title: "Microsoft-Authorized Certification",  desc: "Earn globally recognized Microsoft certifications (PL-900 to PL-400) accepted by top employers worldwide.",                                  highlight: "5 Cert Paths"   },
  { icon: "🧪", title: "Hands-On Lab Environment",            desc: "Practice on live Microsoft 365 tenants with pre-configured lab environments. Build real apps during training.",                              highlight: "15+ Labs"       },
  { icon: "👨‍🏫", title: "Expert Microsoft-Certified Trainers", desc: "Learn from certified MCTs with 10+ years of enterprise deployment experience across Fortune 500 clients.",                                  highlight: "MCT Certified"  },
  { icon: "📁", title: "Real-World Projects",                  desc: "Build an actual business app, automation flow, and BI dashboard as capstone projects for your portfolio.",                                   highlight: "Portfolio Ready" },
  { icon: "🔄", title: "Flexible Learning Formats",           desc: "Choose from live online, self-paced, or on-site training. Access recordings for 90 days post-training.",                                     highlight: "3 Formats"      },
  { icon: "💬", title: "Lifetime Community Access",           desc: "Join an exclusive alumni network of 40,000+ Power Platform professionals for ongoing support and networking.",                               highlight: "40K+ Alumni"    },
  { icon: "📊", title: "Exam Guarantee",                      desc: "If you don't pass on the first attempt, we offer a free re-training session — because your success is our promise.",                        highlight: "Free Retake"    },
  { icon: "🏢", title: "Corporate Training Available",        desc: "Customized batch training for enterprises. Dedicated account managers, custom curriculum, and team progress tracking.",                      highlight: "Enterprise Ready"},
];

export default function KeyFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: C.bg }}
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px cosmos-divider" />
      <div className="absolute inset-x-0 bottom-0 h-px cosmos-divider" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 radial-glow-accent opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge mb-5 inline-flex">⭐ Why Choose Us</span>
          <h2 id="features-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-5" style={{ color: C.light }}>
            Everything You Need to{" "}
            <span className="text-shimmer">Succeed & Get Certified</span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(228,247,255,0.55)" }}>
            Our Power Platform training combines expert instruction, hands-on practice,
            and proven exam strategies to guarantee your certification success.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="animate-on-scroll group rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden hover:scale-[1.02]"
              style={{
                backgroundColor: "rgba(9,49,72,0.45)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(6,148,209,0.12)",
                transitionDelay: `${0.04 * i}s`,
              }}
            >
              {/* Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(228,247,255,0.04) 0%, rgba(228,247,255,0) 60%)" }} />

              {/* Badge */}
              <span
                className="inline-block text-xs font-heading font-medium px-2.5 py-0.5 rounded-full border mb-4"
                style={{ backgroundColor: "rgba(6,148,209,0.1)", borderColor: "rgba(6,148,209,0.22)", color: "#60CEFA" }}
              >
                {f.highlight}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border"
                style={{ backgroundColor: "rgba(6,148,209,0.1)", borderColor: "rgba(6,148,209,0.18)" }}
              >
                {f.icon}
              </div>

              <h3 className="font-heading font-medium text-sm leading-snug mb-2" style={{ color: C.light }}>{f.title}</h3>
              <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(228,247,255,0.5)" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="animate-on-scroll mt-12 rounded-2xl p-6 sm:p-8 border relative overflow-hidden"
          style={{
            backgroundColor: "rgba(9,49,72,0.5)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(6,148,209,0.2)",
          }}
        >
          {/* Animated top border */}
          <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, ${C.dark}, ${C.accent}, ${C.light}, ${C.accent}, ${C.dark})`, backgroundSize: "300% 100%", animation: "borderSlide 4s ease infinite" }} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-medium text-xl mb-1" style={{ color: C.light }}>Ready to transform your career?</p>
              <p className="font-body text-sm" style={{ color: "rgba(228,247,255,0.5)" }}>Join 40,000+ certified professionals. Limited seats in each batch.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="#contact" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">Enroll Now</a>
              <a href="#syllabus" className="btn-outline text-sm px-5 py-2.5 whitespace-nowrap">Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
