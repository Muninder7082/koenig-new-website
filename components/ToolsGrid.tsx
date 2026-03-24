"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const tools = [
  { name: "Power Apps",             icon: "📱", category: "Build",                  badge: "Core"       },
  { name: "Power Automate",         icon: "⚡", category: "Automate",               badge: "Core"       },
  { name: "Power BI",               icon: "📊", category: "Analyze",                badge: "Core"       },
  { name: "Power Virtual Agents",   icon: "🤖", category: "AI Bots",                badge: "Core"       },
  { name: "Power Pages",            icon: "🌐", category: "Web Portals",            badge: "Core"       },
  { name: "Microsoft Dataverse",    icon: "🗄️", category: "Data Layer",             badge: "Platform"   },
  { name: "AI Builder",             icon: "🧠", category: "AI & ML",                badge: "AI"         },
  { name: "Azure DevOps",           icon: "🔄", category: "DevOps",                 badge: "DevOps"     },
  { name: "Microsoft Teams",        icon: "💬", category: "Collaboration",          badge: "Integration"},
  { name: "SharePoint",             icon: "📂", category: "Document Mgmt",          badge: "Integration"},
  { name: "Power Platform CLI",     icon: "⌨️", category: "Developer Tools",        badge: "Dev"        },
  { name: "Copilot Studio",         icon: "✨", category: "Gen AI",                 badge: "New ✦"      },
  { name: "Azure Logic Apps",       icon: "🔗", category: "Enterprise Integration", badge: "Azure"      },
  { name: "Process Advisor",        icon: "🔍", category: "Process Mining",         badge: "Analytics"  },
  { name: "Managed Environments",   icon: "🛡️", category: "Governance",             badge: "Enterprise" },
  { name: "Power Fx",               icon: "{ }", category: "Low-Code Language",     badge: "Language"   },
];

export default function ToolsGrid() {
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
    <section id="tools" ref={sectionRef} className="py-24 overflow-hidden" style={{ backgroundColor: "#F0F9FF" }} aria-labelledby="tools-heading">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(6,148,209,0.2), transparent)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge mb-5 inline-flex">🛠️ Technologies</span>
          <h2 id="tools-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-5" style={{ color: C.dark }}>
            Tools & Technologies{" "}
            <span className="text-shimmer-dark">You Will Master</span>
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: "#6B7280" }}>
            Get hands-on with every core component of the Microsoft Power Platform ecosystem — from foundational tools to enterprise-grade development.
          </p>
        </div>

        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="group relative bg-white rounded-2xl p-5 border transition-all duration-300 cursor-default overflow-hidden hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: "#E5E7EB", transitionDelay: `${0.025 * i}s` }}
            >
              {/* Left hover accent */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" style={{ backgroundColor: C.accent }} />

              <span className="inline-block text-xs font-heading font-medium px-2 py-0.5 rounded-full border mb-3" style={{ backgroundColor: C.light, borderColor: "rgba(6,148,209,0.25)", color: C.accent }}>
                {tool.badge}
              </span>
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
              <h3 className="font-heading font-medium text-sm leading-tight mb-1" style={{ color: C.dark }}>{tool.name}</h3>
              <p className="text-xs font-body" style={{ color: "#94A3B8" }}>{tool.category}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-8 text-center" style={{ transitionDelay: "0.18s" }}>
          <p className="text-sm font-body" style={{ color: "#94A3B8" }}>
            Plus integration with{" "}
            <span className="font-heading font-medium" style={{ color: C.accent }}>400+ connectors</span>
            {" "}including Salesforce, SAP, ServiceNow, SQL Server, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
