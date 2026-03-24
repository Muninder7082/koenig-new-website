"use client";
import { useEffect, useRef } from "react";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF", bg: "#041825" };

const careers = [
  {
    role: "Power Platform Developer",    icon: "👨‍💻",
    salaryRange: "$85K – $130K",  demand: "Very High", growth: "+28% YoY",
    skills: ["Power Apps","Power Automate","PCF","Dataverse"],
    desc: "Build custom enterprise apps, automations, and integrations. High demand in digital transformation projects.",
  },
  {
    role: "Power BI Data Analyst",       icon: "📊",
    salaryRange: "$75K – $115K",  demand: "Very High", growth: "+35% YoY",
    skills: ["Power BI","DAX","SQL","Azure Synapse"],
    desc: "Transform raw data into compelling visualizations and insights. Critical role in every data-driven organization.",
  },
  {
    role: "Power Platform Consultant",   icon: "🤝",
    salaryRange: "$90K – $140K",  demand: "High",      growth: "+22% YoY",
    skills: ["Solution Design","PL-200","Dynamics 365","Change Mgmt"],
    desc: "Guide enterprises in Power Platform adoption, architecture, and best practices implementation.",
  },
  {
    role: "RPA / Automation Engineer",   icon: "⚡",
    salaryRange: "$80K – $120K",  demand: "High",      growth: "+40% YoY",
    skills: ["Power Automate","Desktop Flows","RPA","Process Mining"],
    desc: "Design and deploy robotic process automation solutions to eliminate manual, repetitive business tasks.",
  },
  {
    role: "Solution Architect",          icon: "🏗️",
    salaryRange: "$120K – $170K", demand: "High",      growth: "+18% YoY",
    skills: ["PL-600","Azure","Dataverse","ALM & DevOps"],
    desc: "Design end-to-end enterprise solutions on the Power Platform. Senior leadership role with premium compensation.",
  },
  {
    role: "Microsoft 365 Admin",         icon: "⚙️",
    salaryRange: "$70K – $105K",  demand: "Steady",    growth: "+15% YoY",
    skills: ["Admin Center","Security","Governance","CoE Toolkit"],
    desc: "Manage Power Platform environments, licensing, security, and governance across the organization.",
  },
];

const certifications = [
  { code: "PL-900", name: "Fundamentals",          level: "Entry"     },
  { code: "PL-100", name: "App Maker",              level: "Associate" },
  { code: "PL-200", name: "Functional Consultant",  level: "Associate" },
  { code: "PL-300", name: "Data Analyst",           level: "Associate" },
  { code: "PL-400", name: "Developer",              level: "Associate" },
  { code: "PL-600", name: "Solution Architect",     level: "Expert"    },
];

export default function CareerPaths() {
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
      id="careers"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: C.bg }}
      aria-labelledby="careers-heading"
    >
      <div className="absolute inset-0 blueprint-bg opacity-40" />
      <div className="absolute top-0 left-0 w-1/2 h-full radial-glow-accent opacity-12 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge mb-5 inline-flex">💼 Career Paths</span>
          <h2 id="careers-heading" className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-5" style={{ color: C.light }}>
            High-Demand{" "}
            <span className="text-shimmer">Career Opportunities</span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(228,247,255,0.55)" }}>
            Power Platform certifications unlock well-paid, future-proof roles across industries.
          </p>
        </div>

        {/* Career cards */}
        <div className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {careers.map((career, i) => (
            <div
              key={career.role}
              className="group rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: "rgba(9,49,72,0.45)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(6,148,209,0.12)",
                transitionDelay: `${0.05 * i}s`,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(6,148,209,0.06) 0%, rgba(228,247,255,0.01) 100%)" }} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{career.icon}</span>
                  <span
                    className="text-xs font-heading font-medium px-2.5 py-1 rounded-full border"
                    style={{ backgroundColor: "rgba(6,148,209,0.1)", borderColor: "rgba(6,148,209,0.22)", color: "#60CEFA" }}
                  >
                    {career.demand}
                  </span>
                </div>

                <h3 className="font-heading font-medium text-base mb-1" style={{ color: C.light }}>{career.role}</h3>
                <p className="text-sm font-body mb-4 leading-relaxed" style={{ color: "rgba(228,247,255,0.55)" }}>{career.desc}</p>

                {/* Salary & growth */}
                <div className="flex items-center justify-between mb-4 p-3 rounded-xl" style={{ backgroundColor: "rgba(6,148,209,0.07)", border: "1px solid rgba(6,148,209,0.12)" }}>
                  <div>
                    <p className="text-xs font-body" style={{ color: "rgba(228,247,255,0.4)" }}>Avg. Salary</p>
                    <p className="font-heading font-medium text-sm" style={{ color: "#4ADE80" }}>{career.salaryRange}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-body" style={{ color: "rgba(228,247,255,0.4)" }}>Job Growth</p>
                    <p className="font-heading font-medium text-sm" style={{ color: C.accent }}>{career.growth}</p>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-body px-2 py-0.5 rounded-lg border"
                      style={{ backgroundColor: "rgba(228,247,255,0.04)", borderColor: "rgba(228,247,255,0.08)", color: "rgba(228,247,255,0.55)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cert roadmap */}
        <div className="animate-on-scroll" style={{ transitionDelay: "0.15s" }}>
          <div className="text-center mb-10">
            <h2 className="font-heading font-medium text-2xl" style={{ color: C.light }}>
              Certification <span className="text-shimmer">Roadmap</span>
            </h2>
            <p className="text-sm font-body mt-1" style={{ color: "rgba(228,247,255,0.4)" }}>All certifications covered in this program</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.code}
                className="group text-center rounded-2xl p-4 border transition-all duration-300"
                style={{
                  backgroundColor: "rgba(9,49,72,0.4)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(6,148,209,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: i === 5
                      ? `linear-gradient(135deg, ${C.accent}, #2BB8F0)`
                      : `linear-gradient(135deg, ${C.dark}, ${C.accent})`,
                    boxShadow: "0 4px 14px rgba(6,148,209,0.2)",
                  }}
                >
                  <span className="font-heading font-medium text-white text-xs">{cert.code.slice(3)}</span>
                </div>
                <p className="font-heading font-medium text-sm mb-1" style={{ color: C.accent }}>{cert.code}</p>
                <p className="text-xs font-body leading-snug" style={{ color: "rgba(228,247,255,0.55)" }}>{cert.name}</p>
                <span className="mt-1.5 inline-block text-xs font-body" style={{ color: "rgba(228,247,255,0.3)" }}>{cert.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
