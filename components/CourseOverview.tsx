"use client";
import { useState, useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const whyLearn = [
  { icon: "🚀", title: "High Market Demand",       desc: "Power Platform skills rank among the top 10 most sought-after Microsoft competencies in 2026 enterprise hiring." },
  { icon: "💡", title: "Low-Code Revolution",       desc: "Build enterprise-grade apps and automations with minimal coding — ideal for analysts, consultants, and developers alike." },
  { icon: "📈", title: "Proven Business ROI",       desc: "Organizations using Power Platform report 40–70% reduction in process automation costs within the first year." },
  { icon: "🎯", title: "Versatile Skill Set",       desc: "One platform — five powerful tools covering apps, automation, analytics, chatbots, and portals in a unified ecosystem." },
  { icon: "🏆", title: "Microsoft-Backed Certs",   desc: "Globally recognized certifications (PL-100 → PL-600) that open doors to senior technical and consulting roles worldwide." },
  { icon: "🤝", title: "Deep Microsoft Ecosystem", desc: "Seamlessly integrates with Teams, SharePoint, Azure, Dynamics 365, and 400+ third-party services via premium connectors." },
];

const tools = [
  { name: "Power Apps",           desc: "Build custom apps",  icon: "📱" },
  { name: "Power Automate",       desc: "Automate workflows", icon: "⚡" },
  { name: "Power BI",             desc: "Data analytics",     icon: "📊" },
  { name: "Power Virtual Agents", desc: "AI chatbots",        icon: "🤖" },
  { name: "Power Pages",          desc: "Web portals",        icon: "🌐", colSpan: true },
];

const coreComponents = [
  { name: "Power Apps", desc: "A low-code application development platform that allows users to build custom web and mobile apps tailored to specific business needs — from simple data-entry tools to complex multi-screen line-of-business applications.", bestFor: "Digitizing manual processes like inspections, expense approvals, or inventory management.", caveat: "Caveat:", caveatText: "Canvas apps can become difficult to maintain at scale without proper naming conventions and architecture planning." },
  { name: "Power Automate", desc: "An intelligent workflow automation engine that connects apps and services to eliminate repetitive tasks. It supports everything from simple approval flows to complex, multi-step business process automations with conditional logic.", bestFor: "Routing approvals, syncing data between systems, and automating notifications across Microsoft 365 and third-party services.", caveat: "Risk:", caveatText: "Poorly designed flows can create unintended loops or excessive API calls, potentially hitting service limits." },
  { name: "Power BI", desc: "A business analytics and data visualization platform for creating interactive dashboards and reports from virtually any data source — transforming raw data into actionable insights.", bestFor: "Transforming raw data from multiple sources into interactive dashboards, KPI reports, and self-service analytics.", caveat: "Caveat:", caveatText: "Complex DAX calculations and large data models require careful optimization to avoid slow report performance." },
  { name: "Power Pages", desc: "A low-code platform for creating secure, data-rich, external-facing business websites and portals — ideal for extending Dataverse data to external users.", bestFor: "Customer self-service portals, partner portals, community forums, and secure data-sharing sites.", caveat: "Risk:", caveatText: "Security misconfiguration can expose internal data to external users if table permissions are not carefully designed." },
  { name: "Copilot Studio", desc: "An AI-driven platform for building intelligent copilots and chatbots using a no-code graphical interface — powered by large language models and deeply integrated with Microsoft services.", bestFor: "Internal helpdesk bots, customer service agents, guided sales assistants, and knowledge-base retrieval systems.", caveat: "Caveat:", caveatText: "AI-generated responses require careful monitoring and guardrails to prevent hallucinations in production environments." },
];

export default function CourseOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="overview" ref={sectionRef} className="relative py-[60px] bg-white overflow-hidden" aria-labelledby="overview-heading">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(6,148,209,0.2), transparent)` }} />

      <div className="max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">

        {/* ── Two-col intro ────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-[60px] items-start mb-[48px]">
          <div className="animate-on-scroll">
            <span className="section-badge mb-[16px] inline-flex" style={{ backgroundColor: "rgba(6,148,209,0.08)", borderColor: "rgba(6,148,209,0.2)", color: C.accent }}>📚 Course Overview</span>
            <h2 id="overview-heading" className="font-heading font-medium text-[30px] sm:text-[36px] leading-tight mb-[20px]" style={{ color: C.dark }}>
              What is{" "}
              <span className="text-shimmer-dark">Microsoft Power Platform?</span>
            </h2>
            <p className="font-body text-[16px] leading-[1.7] mb-[16px]" style={{ color: "#374151" }}>
              Microsoft Power Platform is a suite of five powerful low-code tools designed to help organizations analyze data, build solutions, automate processes, and create virtual agents — all with minimal coding required.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mb-[16px]" style={{ color: "#374151" }}>
              From building custom business apps with <strong style={{ color: C.dark }}>Power Apps</strong>, automating workflows with <strong style={{ color: C.dark }}>Power Automate</strong>, to visualizing data with <strong style={{ color: C.dark }}>Power BI</strong> — this platform empowers every professional to become a digital creator without extensive development expertise.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mb-[20px]" style={{ color: C.accent }}>
              The platform&apos;s primary goal is to empower &ldquo;citizen developers&rdquo; — business users with deep process knowledge but little coding background — to create solutions for their own teams, fostering innovation from the ground up.
            </p>

            {/* Expandable detailed content */}
            <div className="overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: expanded ? "3000px" : "0" }}>
              <div className="space-y-[28px] pt-[8px]">

                {/* Core Components */}
                <div>
                  <h3 className="font-heading font-medium text-[20px] mb-[16px]" style={{ color: C.dark }}>The Core Components of the Power Platform</h3>
                  <p className="font-body text-[16px] leading-[1.7] mb-[16px]" style={{ color: "#374151" }}>
                    The platform is comprised of several key applications, each serving a distinct purpose but designed to work together. Understanding these components is the first step in mastering the suite.
                  </p>
                  <div className="space-y-[16px]">
                    {coreComponents.map((comp) => (
                      <div key={comp.name} className="rounded-[14px] p-[20px] border" style={{ backgroundColor: "#FAFCFF", borderColor: "#E8EDF2" }}>
                        <h4 className="font-heading font-medium text-[16px] mb-[8px]" style={{ color: C.dark }}>{comp.name}</h4>
                        <p className="font-body text-[14px] leading-[1.6] mb-[10px]" style={{ color: "#374151" }}>{comp.desc}</p>
                        <p className="font-body text-[14px] leading-[1.6] mb-[6px]" style={{ color: "#374151" }}>
                          <span className="font-heading font-medium" style={{ color: C.accent }}>Best For: </span>{comp.bestFor}
                        </p>
                        <p className="font-body text-[14px] leading-[1.6]" style={{ color: "#374151" }}>
                          <span className="font-heading font-medium" style={{ color: "#D97706" }}>{comp.caveat} </span>{comp.caveatText}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dataverse */}
                <div>
                  <h3 className="font-heading font-medium text-[20px] mb-[12px]" style={{ color: C.dark }}>The Foundation: Dataverse and Connectors</h3>
                  <p className="font-body text-[16px] leading-[1.7] mb-[12px]" style={{ color: "#374151" }}>
                    Underlying all five tools is <strong style={{ color: C.dark }}>Microsoft Dataverse</strong> — a cloud-based, enterprise-grade data platform that provides a standardized schema for storing and managing business data. Dataverse enables all Power Platform tools to share a common data layer, ensuring consistency and enabling cross-tool functionality.
                  </p>
                  <p className="font-body text-[16px] leading-[1.7]" style={{ color: "#374151" }}>
                    <strong style={{ color: C.dark }}>Connectors</strong> are the bridges between Power Platform and external services. With 400+ pre-built connectors — including Salesforce, SAP, SQL Server, SharePoint, and hundreds more — plus the ability to create custom connectors, the platform can integrate with virtually any system in your technology stack.
                  </p>
                </div>

                {/* Why Training Essential */}
                <div>
                  <h3 className="font-heading font-medium text-[20px] mb-[12px]" style={{ color: C.dark }}>Why is Formal Power Platform Training Essential?</h3>
                  <div className="space-y-[12px]" style={{ borderLeft: `3px solid ${C.accent}`, paddingLeft: "20px" }}>
                    {[
                      { label: "Navigating Complexity", text: "Moving beyond simple apps to enterprise-wide solutions requires deep knowledge of architecture, performance optimization, and application lifecycle management." },
                      { label: "Ensuring Governance", text: "Without guidance, citizen development leads to app sprawl and security vulnerabilities. Training instills best practices for safe, manageable innovation." },
                      { label: "Maximizing ROI", text: "Untrained users use only a fraction of the platform's capabilities. Expert-led training unlocks the full feature set for a higher return on investment." },
                      { label: "Fusion Development", text: "The most successful implementations involve business users and IT developers collaborating effectively — training provides that common language." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-[14px]">
                        <span className="flex-shrink-0 w-[28px] h-[28px] rounded-full flex items-center justify-center text-[12px] font-heading font-medium text-white mt-[2px]" style={{ backgroundColor: C.accent }}>{i + 1}</span>
                        <div>
                          <p className="font-heading font-medium text-[15px] mb-[4px]" style={{ color: C.dark }}>{item.label}</p>
                          <p className="font-body text-[14px] leading-[1.6]" style={{ color: "#6B7280" }}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Show More / Less toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-[20px] flex items-center gap-[8px] px-[18px] py-[9px] rounded-full border text-[13px] font-heading font-medium transition-all duration-300 hover:shadow-sm"
              style={{ borderColor: "rgba(6,148,209,0.3)", color: C.accent, backgroundColor: "rgba(6,148,209,0.04)" }}
            >
              {expanded ? "Show Less" : "Show More"}
              <svg
                className="w-[14px] h-[14px] transition-transform duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Right — tool cards */}
          <div className="animate-on-scroll grid grid-cols-2 gap-[16px]" style={{ transitionDelay: "0.1s" }}>
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`${tool.colSpan ? "col-span-2 sm:col-span-1" : ""} group rounded-[16px] p-[22px] border transition-all duration-300 hover:shadow-md hover:-translate-y-[2px] cursor-default`}
                style={{ backgroundColor: "#FAFCFF", borderColor: "#E5E7EB" }}
              >
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[22px] mb-[12px] group-hover:scale-110 transition-transform duration-300 border" style={{ backgroundColor: C.light, borderColor: "rgba(6,148,209,0.2)" }}>
                  {tool.icon}
                </div>
                <div className="w-[24px] h-[3px] mb-[12px] rounded-full" style={{ backgroundColor: C.accent }} />
                <h3 className="font-heading font-medium text-[15px] mb-[4px]" style={{ color: C.dark }}>{tool.name}</h3>
                <p className="text-[14px] font-body" style={{ color: "#64748B" }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Learn grid ──────────────────────────────── */}
        <div className="animate-on-scroll text-center mb-[36px]">
          <span className="section-badge mb-[14px] inline-flex" style={{ backgroundColor: "rgba(6,148,209,0.08)", borderColor: "rgba(6,148,209,0.2)", color: C.accent }}>💡 Why Learn It?</span>
          <h2 className="font-heading font-medium text-[28px] sm:text-[32px]" style={{ color: C.dark }}>
            6 Reasons Power Platform is a{" "}
            <span className="text-shimmer-dark">Career Game-Changer</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {whyLearn.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll group rounded-[16px] p-[24px] border transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
              style={{ backgroundColor: "#FAFCFF", borderColor: "#E5E7EB", transitionDelay: `${0.05 * i}s` }}
            >
              <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[22px] mb-[14px] group-hover:scale-110 transition-transform duration-300 border" style={{ backgroundColor: C.light, borderColor: "rgba(6,148,209,0.2)" }}>
                {item.icon}
              </div>
              <h3 className="font-heading font-medium text-[15px] mb-[8px]" style={{ color: C.dark }}>{item.title}</h3>
              <p className="text-[14px] font-body leading-[1.6]" style={{ color: "#6B7280" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
