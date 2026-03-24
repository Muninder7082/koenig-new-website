"use client";

const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };

const companies = [
  "Microsoft","Accenture","Deloitte","IBM","Capgemini","Infosys","Wipro","TCS","HCL","SAP","Oracle","Cognizant",
];

const trustStats = [
  { number: "10,000+", label: "Certified Professionals", icon: "🎓" },
  { number: "150+",    label: "Countries Served",        icon: "🌍" },
  { number: "25+",     label: "Years of Excellence",     icon: "🏆" },
  { number: "500+",    label: "Enterprise Clients",      icon: "🏢" },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 overflow-hidden bg-white" aria-label="Social Proof">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(6,148,209,0.2), transparent)` }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(6,148,209,0.2), transparent)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl p-4 border group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: C.light + "40", borderColor: "rgba(6,148,209,0.18)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 border"
                style={{ backgroundColor: C.light, borderColor: "rgba(6,148,209,0.25)" }}
              >
                {stat.icon}
              </div>
              <div>
                <p className="font-heading font-medium text-xl" style={{ color: C.dark }}>{stat.number}</p>
                <p className="text-xs font-body leading-snug" style={{ color: "#64748B" }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Label */}
        <div className="text-center mb-7">
          <p className="text-xs font-body uppercase tracking-widest" style={{ color: "#94A3B8" }}>
            Trusted by professionals from world-class organizations
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #fff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #fff, transparent)" }} />

          <div className="flex gap-4 w-max animate-scroll">
            {[...companies, ...companies].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center w-36 h-12 rounded-xl border flex-shrink-0 transition-all duration-300 cursor-default hover:shadow-sm"
                style={{ backgroundColor: "#F8FAFC", borderColor: "#E5E7EB" }}
              >
                <span className="font-heading font-medium text-sm" style={{ color: "#94A3B8" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner badges */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {[
            { icon: "🏅", strong: "Official Microsoft", sub: "Learning Partner",  borderColor: "rgba(6,148,209,0.25)" },
            { icon: "🥇", strong: "Gold Certified",     sub: "Training Provider", borderColor: "rgba(245,158,11,0.3)"  },
            { icon: "✅", strong: "ISO 9001:2015",       sub: "Quality Assured",   borderColor: "rgba(74,222,128,0.3)"  },
          ].map((b) => (
            <div
              key={b.strong}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border"
              style={{ backgroundColor: "#F8FAFC", borderColor: b.borderColor }}
            >
              <span className="text-xl">{b.icon}</span>
              <span className="text-sm font-body" style={{ color: "#374151" }}>
                <strong className="font-heading" style={{ color: C.dark }}>{b.strong}</strong>{" "}{b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
