"use client";
import { useState, useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const faqs = [
  { category: "About the Platform", q: "What is Microsoft Power Platform?",                     a: "Microsoft Power Platform is a suite of five powerful low-code/no-code tools: Power Apps (custom business apps), Power Automate (workflow automation and RPA), Power BI (data analytics and visualization), Power Virtual Agents / Copilot Studio (AI chatbots), and Power Pages (web portal creation). Together, they form a unified platform deeply integrated with Microsoft 365, Azure, and Dynamics 365." },
  { category: "Eligibility",        q: "Who should take this Power Platform training?",         a: "This training is designed for IT professionals and developers (PL-400/PL-600), business analysts and consultants (PL-200/PL-300), citizen developers and power users (PL-100), and anyone seeking foundational knowledge (PL-900). No prior programming experience is required for entry-level courses." },
  { category: "Certifications",     q: "What certifications does this course prepare me for?",  a: "Our program covers all major Power Platform certifications: PL-900 (Fundamentals), PL-100 (App Maker), PL-200 (Functional Consultant Associate), PL-300 (Power BI Data Analyst Associate), PL-400 (Developer Associate), and PL-600 (Solution Architect Expert)." },
  { category: "Course Details",     q: "How long is the training and what formats are available?", a: "The complete bundle spans 40+ hours across 5 days. Individual module courses range from 1–2 days. Formats: Live Online (instructor-led), Self-Paced (90-day access), On-Site Corporate, and Bootcamp (intensive weekend format). All include lab access and exam prep materials." },
  { category: "Labs & Hands-on",    q: "Do I get access to lab environments?",                  a: "Yes! Every student gets a dedicated Microsoft 365 tenant with full Power Platform capabilities. You'll build 15+ real lab exercises including a Canvas app, automation flow, Power BI dashboard, and a chatbot. Lab access remains active for 30 days post-training." },
  { category: "Success Rate",       q: "What is the exam pass rate?",                           a: "Our current exam pass rate stands at 98% across all Power Platform certifications, achieved through intensive practice exams, real-world lab scenarios that mirror exam objectives, and our 'exam readiness' assessment tool that identifies knowledge gaps before your exam." },
  { category: "Support",            q: "Is there any post-training support?",                   a: "Post-training support includes: lifetime access to the Koenig alumni community (40,000+ members), 90-day access to all recorded sessions, a dedicated Q&A forum monitored by MCTs, monthly live Q&A webinars, and dedicated support email for technical queries." },
  { category: "Guarantee",          q: "What if I don't pass the certification exam?",           a: "We offer an Exam Guarantee on all certification tracks. If you don't pass on the first attempt after completing our training, we provide a free re-training session covering your weak areas, plus additional practice exam access at no extra cost." },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQ() {
  const [openIndex, setOpenIndex]       = useState<number | null>(0);
  const [activeCategory, setActiveCat] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-12">
          <span className="section-badge mb-5 inline-flex">❓ FAQ</span>
          <h2 id="faq-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-5" style={{ color: C.dark }}>
            Frequently Asked <span className="text-shimmer-dark">Questions</span>
          </h2>
          <p className="font-body text-base" style={{ color: "#6B7280" }}>
            Everything you need to know before enrolling.{" "}
            <a href="#contact" style={{ color: C.accent }} className="hover:underline">Contact us</a> for more.
          </p>
        </div>

        {/* Category filter */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-2 mb-10" style={{ transitionDelay: "0.05s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
              className="px-4 py-1.5 text-xs font-heading font-medium rounded-full border transition-all duration-200"
              style={
                activeCategory === cat
                  ? { backgroundColor: C.accent, borderColor: C.accent, color: "#fff" }
                  : { backgroundColor: "transparent", borderColor: "rgba(6,148,209,0.25)", color: "#64748B" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="animate-on-scroll space-y-3" style={{ transitionDelay: "0.08s" }}>
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#F0F9FF" : "#fff",
                  borderColor: isOpen ? "rgba(6,148,209,0.35)" : "#E5E7EB",
                  boxShadow: isOpen ? "0 4px 20px rgba(6,148,209,0.07)" : "none",
                }}
                itemScope itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 border"
                    style={{
                      backgroundColor: isOpen ? C.accent : "transparent",
                      borderColor: isOpen ? C.accent : "#CBD5E1",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    <svg className="w-3" fill="none" stroke={isOpen ? "#fff" : "#94A3B8"} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="flex-1 font-heading font-medium text-sm sm:text-base leading-snug" itemProp="name" style={{ color: C.dark }}>{faq.q}</h3>
                  <span className="flex-shrink-0 text-xs font-body hidden sm:block" style={{ color: "#CBD5E1" }}>{faq.category}</span>
                </button>
                <div className="accordion-content" style={{ maxHeight: isOpen ? "400px" : "0" }} itemScope itemType="https://schema.org/Answer">
                  <p className="px-6 pb-5 text-sm font-body leading-relaxed ml-10" itemProp="text" style={{ color: "#374151" }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div
          className="animate-on-scroll mt-10 text-center rounded-2xl p-8 border"
          style={{ backgroundColor: "#F0F9FF", borderColor: "rgba(6,148,209,0.2)", borderStyle: "dashed", transitionDelay: "0.18s" }}
        >
          <p className="text-2xl mb-3">🙋</p>
          <h3 className="font-heading font-medium text-xl mb-2" style={{ color: C.dark }}>Still have questions?</h3>
          <p className="font-body text-sm mb-6" style={{ color: "#6B7280" }}>Our course advisors are available 24/7 to help you choose the right certification path.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="btn-primary text-sm px-5 py-2.5">Chat with an Advisor</a>
            <a href="tel:+1234567890" className="btn-outline text-sm px-5 py-2.5">📞 Call Us: +1 (800) KOENIG-1</a>
          </div>
        </div>
      </div>
    </section>
  );
}
