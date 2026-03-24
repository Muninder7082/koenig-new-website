import Hero           from "@/components/Hero";
import RelatedTech    from "@/components/RelatedTech";
import CourseListings from "@/components/CourseListings";
import ContactForm    from "@/components/ContactForm";
import TrustBar       from "@/components/TrustBar";
import UniqueOfferings from "@/components/UniqueOfferings";
import Awards         from "@/components/Awards";
import CourseOverview from "@/components/CourseOverview";
import KeyFeatures    from "@/components/KeyFeatures";
import ToolsGrid      from "@/components/ToolsGrid";
import CareerPaths    from "@/components/CareerPaths";
import Instructor     from "@/components/Instructor";
import Testimonials   from "@/components/Testimonials";
import AdditionalInfo from "@/components/AdditionalInfo";
import FAQ            from "@/components/FAQ";
import FinalCTA       from "@/components/FinalCTA";
import Navbar         from "@/components/Navbar";

/* ── JSON-LD Structured Data ───────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Microsoft Power Platform?", acceptedAnswer: { "@type": "Answer", text: "Microsoft Power Platform is a suite of five low-code tools: Power Apps, Power Automate, Power BI, Power Virtual Agents, and Power Pages, deeply integrated with Microsoft 365, Azure, and Dynamics 365." } },
    { "@type": "Question", name: "Who should take this Power Platform training?", acceptedAnswer: { "@type": "Answer", text: "IT professionals, business analysts, developers, data analysts, project managers, and anyone looking to build business solutions without deep coding knowledge." } },
    { "@type": "Question", name: "What certifications does this course prepare you for?", acceptedAnswer: { "@type": "Answer", text: "PL-900, PL-100, PL-200, PL-300, PL-400, and PL-600 Microsoft Power Platform certifications." } },
    { "@type": "Question", name: "How long does it take to complete the course?", acceptedAnswer: { "@type": "Answer", text: "The complete Power Platform training program spans 40+ hours over 5 days, with 90-day access to recorded sessions and hands-on labs." } },
    { "@type": "Question", name: "Is this course available online?", acceptedAnswer: { "@type": "Answer", text: "Yes — available in Live Online (instructor-led), Self-Paced, On-Site Corporate, and Bootcamp Weekend formats." } },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Microsoft Power Platform Certification Training",
  description: "Comprehensive Microsoft Power Platform training covering Power Apps, Power Automate, Power BI, Power Virtual Agents, and Power Pages with hands-on labs and certification preparation.",
  provider: { "@type": "Organization", name: "Koenig Solutions", sameAs: "https://www.koenig-solutions.com" },
  educationalCredentialAwarded: "Microsoft Power Platform Certification",
  courseMode: ["online", "onsite", "blended"],
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", duration: "PT40H" },
};

export default function PowerPlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <Navbar />

      <main>
        {/* 1. Hero — DARK #041825 → #093148 */}
        <Hero />

        {/* 1b. Related Technologies strip */}
        <RelatedTech />

        {/* 2. Course Listings Grid — WHITE */}
        <CourseListings />

        {/* 4. Contact / Lead Form — LIGHT BLUE */}
        <ContactForm />

        {/* 5. Social Proof / Trust Bar — WHITE */}
        <TrustBar />

        {/* 6. Koenig's Unique Offerings — DARK */}
        <UniqueOfferings />

        {/* 8. What is Power Platform + Why Learn — WHITE */}
        <CourseOverview />

        {/* 9. Key Features / Why Choose Us — DARK #093148 */}
        <KeyFeatures />

        {/* 11. Tools Grid — LIGHT #F0F9FF */}
        <ToolsGrid />

        {/* 12. Career Paths + Cert Roadmap — DARK #041825 */}
        <CareerPaths />

        {/* 13. Instructor Profiles — WHITE */}
        <Instructor />

        {/* Awards — above Testimonials */}
        <Awards />

        {/* 14. Testimonials — LIGHT #F0F9FF */}
        <Testimonials />

        {/* 15. Additional Info Tabs (Prerequisites, Student Feedback, FAQ) — WHITE */}
        <AdditionalInfo />

        {/* 16. FAQ Accordion — WHITE */}
        <FAQ />

        {/* 17. Final CTA + Footer — DARK */}
        <FinalCTA />
      </main>
    </>
  );
}
