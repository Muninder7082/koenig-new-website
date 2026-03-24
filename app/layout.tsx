import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Microsoft Power Platform Certification Training | Koenig Solutions",
  description:
    "Master Microsoft Power Platform with expert-led certification training. Learn Power Apps, Power Automate, Power BI & Power Virtual Agents. Get certified and advance your career.",
  keywords:
    "Microsoft Power Platform training, Power Apps certification, Power Automate course, Power BI training, Power Platform certification",
  openGraph: {
    title: "Microsoft Power Platform Certification Training | Koenig Solutions",
    description:
      "Expert-led Microsoft Power Platform training. Hands-on labs, real projects, and globally recognized certification.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-body antialiased"
        style={{ backgroundColor: "#041825", color: "#E4F7FF", fontFamily: "'GTWalsheimPro', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
