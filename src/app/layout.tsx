import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // This is the title Google will show in search results
  title: "ASCEND | Professional Website Maker & Digital Agency", 
  
  // This description tells Google what you offer
  description: "ASCEND is a premium digital agency and professional website maker. We build high-performance Next.js websites, AI automation systems, and SEO strategies to grow your business.",
  
  // Keywords help Google categorize your site
  keywords: ["website maker", "web development agency", "Next.js developer", "AI automation", "SEO expert"],
  
  // This ensures your "Big Part" hero looks good when shared on social media
  openGraph: {
    title: "ASCEND | We Build Digital Systems That Generate Leads",
    description: "High-converting websites and AI systems for ambitious businesses.",
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