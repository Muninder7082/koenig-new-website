"use client";
import { useEffect, useRef, useState } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const microsoft = [
  { name: "Microsoft 365",   icon: "☁️",  tag: "Productivity Suite",  color: "#0078D4" },
  { name: "Azure",           icon: "🔷",  tag: "Cloud Platform",      color: "#0089D6" },
  { name: "Dynamics 365",    icon: "🔄",  tag: "CRM & ERP",           color: "#002050" },
  { name: "SharePoint",      icon: "📂",  tag: "Document Management", color: "#038387" },
  { name: "Microsoft Teams", icon: "💬",  tag: "Collaboration",       color: "#6264A7" },
  { name: "Azure DevOps",    icon: "⚙️",  tag: "CI/CD & ALM",        color: "#0078D4" },
  { name: "Copilot Studio",  icon: "✨",  tag: "Gen AI",              color: "#7B61FF" },
  { name: "SQL Server",      icon: "🗄️",  tag: "Database",           color: "#CC2131" },
];

const thirdParty = [
  { name: "Salesforce",      icon: "☁️",  tag: "CRM",           color: "#00A1E0" },
  { name: "SAP",             icon: "🔶",  tag: "ERP",           color: "#0FAAFF" },
  { name: "ServiceNow",      icon: "🌐",  tag: "ITSM",          color: "#81B5A1" },
  { name: "Stripe",          icon: "💳",  tag: "Payments",      color: "#635BFF" },
  { name: "DocuSign",        icon: "✍️",  tag: "eSignature",    color: "#FFCD00" },
  { name: "Zendesk",         icon: "🎧",  tag: "Support",       color: "#03363D" },
  { name: "Slack",           icon: "💬",  tag: "Messaging",     color: "#4A154B" },
  { name: "Google Sheets",   icon: "📊",  tag: "Spreadsheets",  color: "#34A853" },
];

function TechCard({ name, icon, tag, color, index }: { name: string; icon: string; tag: string; color: string; index: number }) {
  return (
    <div
      className="group relative flex items-center gap-[14px] px-[18px] py-[16px] rounded-[14px] border overflow-hidden transition-all duration-300 hover:-translate-y-[2px] cursor-default"
      style={{
        backgroundColor: "#fff",
        borderColor: "#E8EDF2",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        transitionDelay: `${0.03 * index}s`,
      }}
    >
      {/* Hover accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 20% 50%, ${color}08 0%, transparent 70%)` }}
      />

      <div
        className="relative w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 text-[20px] group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${color}12`, border: `1px solid ${color}20` }}
      >
        {icon}
      </div>
      <div className="relative min-w-0">
        <p className="font-heading font-medium text-[14px] leading-tight truncate" style={{ color: C.dark }}>{name}</p>
        <p className="font-body text-[12px] mt-[2px]" style={{ color: "#94A3B8" }}>{tag}</p>
      </div>
    </div>
  );
}

export default function RelatedTech() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"microsoft" | "third-party">("microsoft");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const activeData = activeTab === "microsoft" ? microsoft : thirdParty;

  return (
    <section ref={sectionRef} className="py-[60px] bg-white" aria-labelledby="related-tech-heading">
      <div className="max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">

        {/* Header */}
        <div className="animate-on-scroll text-center mb-[40px]">
          <span className="section-badge mb-[14px] inline-flex" style={{ backgroundColor: "rgba(6,148,209,0.08)", borderColor: "rgba(6,148,209,0.2)", color: C.accent }}>
            🔗 Integrations
          </span>
          <h2
            id="related-tech-heading"
            className="font-heading font-medium text-[28px] sm:text-[34px] leading-tight mb-[12px]"
            style={{ color: C.dark }}
          >
            Related Technologies by <span className="text-shimmer-dark">Industry Experts</span>
          </h2>
          <p className="font-body text-[16px] max-w-[600px] mx-auto" style={{ color: "#6B7280" }}>
            Power Platform connects natively with the entire Microsoft ecosystem and hundreds of third-party services via pre-built connectors.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="animate-on-scroll flex justify-center mb-[32px]" style={{ transitionDelay: "0.05s" }}>
          <div
            className="inline-flex rounded-[12px] p-[4px]"
            style={{ backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}
          >
            {[
              { key: "microsoft" as const, label: "Microsoft Ecosystem", icon: "🏢" },
              { key: "third-party" as const, label: "Third-Party", icon: "🔌" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-[10px] text-[14px] font-heading font-medium transition-all duration-300"
                style={
                  activeTab === tab.key
                    ? { backgroundColor: "#fff", color: C.dark, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }
                    : { backgroundColor: "transparent", color: "#94A3B8" }
                }
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="animate-on-scroll" style={{ transitionDelay: "0.08s" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px]">
            {activeData.map((t, i) => (
              <TechCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
