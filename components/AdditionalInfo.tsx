"use client";
import { useState, useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const prerequisites = [
  "Have a basic understanding of the Power Platform components (Power BI, Power Apps, and Power Automate).",
  "Have a basic understanding of the Power Platform capabilities and features.",
  "Have a basic understanding of the Power Platform development environment.",
  "Have a basic understanding of the Power Platform security and governance features.",
  "Have a basic understanding of the Power Platform data sources and connectors.",
  "Have a basic understanding of the Power Platform integration and deployment options.",
];

const whoShouldTake = [
  "IT professionals", "Business analysts", "Business intelligence professionals",
  "Project managers", "Data analysts", "Business users", "Developers",
];

const studentFeedback = [
  {
    name: "Rahul Verma",        role: "Power BI Developer",  company: "TCS",     rating: 5, avatar: "RV",
    review: "Exceptional training quality. The instructor explained complex DAX concepts in a very clear, practical manner. Passed PL-300 on the first attempt.",
  },
  {
    name: "Anita Krishnamurthy", role: "IT Consultant",      company: "Wipro",   rating: 5, avatar: "AK",
    review: "The 1-on-1 training format was perfect for my schedule. Highly personalized sessions and the trainer was always available for queries after class hours.",
  },
  {
    name: "Siddharth Malhotra", role: "Solution Architect",  company: "Infosys", rating: 5, avatar: "SM",
    review: "The Power Platform Developer (PL-400) track was comprehensive and challenging. Real lab exercises aligned perfectly with the exam objectives.",
  },
  {
    name: "Preethi Nair",       role: "Business Analyst",    company: "HCL",     rating: 4, avatar: "PN",
    review: "Great content structure and very knowledgeable trainers. The post-training support community is extremely helpful for doubt resolution.",
  },
];

const certFaqItems = [
  {
    q: "What is the passing score for Microsoft Power Platform certifications?",
    a: "Microsoft sets the passing score for most Power Platform certifications at 700 out of 1000. The exact number of questions and passing score can vary by exam version, but the 700/1000 threshold applies to PL-900, PL-100, PL-200, PL-300, and PL-400.",
  },
  {
    q: "How long is a Microsoft Power Platform certification valid?",
    a: "Microsoft Power Platform certifications (Associate and Expert level) are valid for one year from the date of passing. You must renew annually by completing a free online renewal assessment at Microsoft Learn before the expiration date. Foundational certifications (PL-900) do not expire.",
  },
  {
    q: "Can I take the Microsoft Power Platform exam online from home?",
    a: "Yes. All Microsoft Power Platform certification exams can be taken online via OnVUE (Pearson VUE) from your home or office. Your environment must meet specific system requirements, and you will be monitored by a remote proctor throughout the exam.",
  },
  {
    q: "What is the exam fee for Power Platform certifications?",
    a: "The standard exam fee is approximately USD 165 per exam (prices vary by country). Microsoft offers discounted vouchers for students and through authorized learning partners like Koenig Solutions. Our training bundles often include exam vouchers at no additional cost.",
  },
];

const tabs = ["Additional Information", "Student Feedback", "FAQ"];

export default function AdditionalInfo() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);
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
    <section ref={sectionRef} className="py-16 bg-white" aria-labelledby="addinfo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Tab buttons ─────────────────────── */}
        <div
          className="animate-on-scroll flex items-center gap-1 border-b mb-10 overflow-x-auto"
          style={{ borderColor: "#E5E7EB" }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="flex-shrink-0 px-6 py-3 text-sm font-heading font-medium border-b-2 transition-all duration-200 -mb-px"
              style={
                activeTab === i
                  ? { borderBottomColor: C.accent, color: C.accent, backgroundColor: "transparent" }
                  : { borderBottomColor: "transparent", color: "#64748B" }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Tab 0: Additional Information ──── */}
        {activeTab === 0 && (
          <div className="animate-on-scroll max-w-4xl space-y-12">

            {/* Prerequisites */}
            <div>
              <h2 className="font-heading font-medium text-2xl mb-5" style={{ color: C.dark }}>
                Prerequisites for Microsoft Power Platform Certifications
              </h2>
              <ul className="space-y-2.5">
                {prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-body text-sm" style={{ color: "#374151" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.accent }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who should take */}
            <div>
              <h2 className="font-heading font-medium text-2xl mb-5" style={{ color: C.dark }}>
                Who should take Microsoft Power Platform Certification Training Courses?
              </h2>
              <ul className="space-y-2 mb-5">
                {whoShouldTake.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 font-body text-sm" style={{ color: "#374151" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.accent }} />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#374151" }}>
                Microsoft Power Platform Certification Training Courses are suitable for a wide range of professionals, including{" "}
                <span style={{ color: C.accent }}>IT professionals</span>, business analysts, business intelligence professionals, project managers, data analysts, business users, and developers.
              </p>
            </div>

            {/* Core Components */}
            <div>
              <h2 className="font-heading font-medium text-2xl mb-5" style={{ color: C.dark }}>
                The Core Components of the Power Platform
              </h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                The platform is comprised of several key applications, each serving a distinct purpose but designed to work together. Understanding these components is the first step in mastering the suite.
              </p>

              {[
                { name: "Power Apps",      desc: "A low-code application development environment that allows users to build custom web and mobile apps for internal business needs.", bestFor: "Creating apps to digitize manual processes like inspections, expense approvals, or inventory management.", note: "Caveat:",    noteText: "Building enterprise-grade applications requires solid understanding of data architecture, UI/UX principles, and governance." },
                { name: "Power Automate", desc: "A workflow automation engine that connects disparate apps and services to automate repetitive tasks.",                              bestFor: "Automating processes like sending notifications when a file is updated, syncing data between systems, or routing approvals.",  note: "Tradeoff:", noteText: "Building complex, resilient automations with advanced conditional logic, error handling, and API integrations demands dedicated training." },
                { name: "Power BI",       desc: "The business analytics and data visualization component, used to create interactive dashboards and reports.",                       bestFor: "Transforming raw data from multiple sources into rich, actionable insights.",                                                            note: "Risk:",     noteText: "Generating misleading information from poorly structured data or flawed DAX formulas can be avoided through quality training." },
                { name: "Power Pages",    desc: "A low-code platform for creating, hosting, and administering modern, secure, external-facing business websites.",                bestFor: "Building sites for customer self-service, partner portals, or community forums.",                                                         note: "Caveat:",   noteText: "Security is paramount as these public-facing websites often handle sensitive data. Proper training prevents misconfigurations." },
                { name: "Copilot Studio", desc: "Formerly Power Virtual Agents — allows users to create powerful AI-driven copilots and chatbots using a no-code graphical interface.", bestFor: "Building internal helpdesk bots, customer service agents, or guided sales assistants.",                                           note: "Risk:",     noteText: "Effective chatbot development requires knowledge of conversation design and topic management to avoid user frustration." },
              ].map((comp) => (
                <div key={comp.name} className="mb-8">
                  <h3 className="font-heading font-medium text-xl mb-2" style={{ color: C.dark }}>{comp.name}</h3>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>{comp.desc}</p>
                  <ul className="pl-4 space-y-1.5 text-sm font-body" style={{ color: "#374151" }}>
                    <li><span style={{ color: C.accent }} className="font-600">Best For: </span>{comp.bestFor}</li>
                    <li><span style={{ color: C.accent }} className="font-600">{comp.note} </span>{comp.noteText}</li>
                  </ul>
                </div>
              ))}

              {/* Dataverse */}
              <h3 className="font-heading font-medium text-xl mb-3" style={{ color: C.dark }}>The Foundation: Dataverse and Connectors</h3>
              <ul className="space-y-3 text-sm font-body" style={{ color: "#374151" }}>
                <li><strong style={{ color: C.dark }}>Microsoft Dataverse: </strong>A scalable and secure cloud-based data service that acts as the primary data backbone for the Power Platform, providing robust security, rich business logic, and data management capabilities.</li>
                <li><strong style={{ color: C.dark }}>Data Connectors: </strong>Pre-built "bridges" that allow Power Platform components to connect to hundreds of data sources and services, including both Microsoft and third-party applications.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ── Tab 1: Student Feedback ──────────── */}
        {activeTab === 1 && (
          <div className="animate-on-scroll">
            <div className="flex items-center gap-4 mb-10">
              <div>
                <p className="font-heading font-medium text-5xl" style={{ color: C.dark }}>4.9</p>
                <div className="flex gap-1 mt-1">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl" style={{ color: "#F59E0B" }}>{s}</span>)}
                </div>
                <p className="font-body text-sm mt-1" style={{ color: "#64748B" }}>3,200+ verified reviews</p>
              </div>
              <div className="flex-1 max-w-xs space-y-1.5 pl-8" style={{ borderLeft: `2px solid ${C.light}` }}>
                {[5,4,3,2,1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-xs font-body w-3" style={{ color: "#64748B" }}>{stars}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: "#F1F5F9" }}>
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: stars === 5 ? "85%" : stars === 4 ? "10%" : stars === 3 ? "3%" : "1%",
                          backgroundColor: C.accent,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {studentFeedback.map((fb) => (
                <div
                  key={fb.name}
                  className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: "#FAFCFF", borderColor: "#E5E7EB" }}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: fb.rating }).map((_, i) => (
                      <span key={i} className="text-sm" style={{ color: "#F59E0B" }}>★</span>
                    ))}
                  </div>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                    &ldquo;{fb.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-medium text-white text-xs"
                      style={{ background: `linear-gradient(135deg, ${C.dark}, ${C.accent})` }}
                    >
                      {fb.avatar}
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm" style={{ color: C.dark }}>{fb.name}</p>
                      <p className="font-body text-xs" style={{ color: "#64748B" }}>{fb.role} · {fb.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 2: FAQ ───────────────────────── */}
        {activeTab === 2 && (
          <div className="animate-on-scroll max-w-3xl space-y-3">
            {certFaqItems.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isOpen ? "rgba(6,148,209,0.35)" : "#E5E7EB",
                    backgroundColor: isOpen ? "#F0F9FF" : "#fff",
                  }}
                  itemScope itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? C.accent : "transparent",
                        border: `1.5px solid ${isOpen ? C.accent : "#CBD5E1"}`,
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke={isOpen ? "#fff" : "#6B7280"} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h3 className="flex-1 font-heading font-medium text-sm" itemProp="name" style={{ color: C.dark }}>
                      {faq.q}
                    </h3>
                  </button>
                  <div
                    className="accordion-content"
                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                    itemScope itemType="https://schema.org/Answer"
                  >
                    <p className="px-5 pb-5 text-sm font-body leading-relaxed ml-9" itemProp="text" style={{ color: "#374151" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
