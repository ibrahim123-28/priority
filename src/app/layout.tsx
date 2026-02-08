import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Title shown in Google search results
  title: "ASCEND | Professional Website Maker & Digital Agency",

  // Description for search engines
  description:
    "ASCEND is a premium digital agency and professional website maker. We build high-performance Next.js websites, AI automation systems, and SEO strategies to grow your business.",

  // Expanded keyword set for stronger SEO
  keywords: [
    "website maker",
    "web development agency",
    "Next.js developer",
    "AI automation",
    "SEO expert",
    "Next.js website development",
    "custom web design agency",
    "AI-powered digital marketing",
    "SEO optimization services",
    "business growth automation",
    "professional website maker for startups",
    "enterprise-grade Next.js developer",
    "AI automation for lead generation",
    "SEO expert for small businesses",
    "digital agency for scaling companies",
    "premium web development agency",
    "high-performance website builder",
    "conversion-focused digital systems",
    "modern business automation solutions",
    "data-driven SEO strategies",
    "Mumbai web development agency",
    "India SEO expert",
    "digital marketing agency in Mumbai",
    "Next.js developer India",
    "AI automation agency Mumbai",
  ],

  // Open Graph for social sharing
  openGraph: {
    title: "ASCEND | We Build Digital Systems That Generate Leads",
    description:
      "High-converting websites and AI systems for ambitious businesses.",
    url: "https://your-vercel-link.vercel.app", // Replace with your live link
    siteName: "ASCEND Agency",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}