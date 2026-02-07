"use client";
import React, { useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import FloatingChat from "@/components/FloatingChat";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, DollarSign, ArrowUpRight, Layers, CheckCircle } from "lucide-react";

export default function CaseStudiesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // DYNAMIC DATA
  const caseStudies = [
    {
      id: 1,
      category: "SaaS / Technology",
      client: "TechStart Mumbai",
      title: "Scaling a B2B Platform from Zero to Market Leader.",
      challenge: "Struggling with low organic visibility and a high CAC (Customer Acquisition Cost) in a saturated market.",
      solution: "Developed a headless Next.js marketing site coupled with a programmatic SEO engine to dominate long-tail keywords.",
      results: [
        { metric: "340%", label: "Increase in Traffic" },
        { metric: "Rank #1", label: "For 12 Industry Keywords" },
        { metric: "4.5x", label: "ROI in 90 Days" },
      ],
      color: "#00D4FF", // Neon Cyan
      imagePlaceholder: "bg-gradient-to-br from-[#00D4FF]/20 via-[#020024] to-[#00D4FF]/5"
    },
    {
      id: 2,
      category: "E-Commerce / Luxury",
      client: "Velvet Aura Dubai",
      title: "Redefining Luxury Digital Retail for the Modern Era.",
      challenge: "High cart abandonment rates on mobile devices due to slow load times and clunky UX.",
      solution: "Implemented a sub-second headless commerce architecture with a streamlined, one-tap mobile checkout flow.",
      results: [
        { metric: "0.8s", label: "Avg Page Load" },
        { metric: "65%", label: "Less Abandonment" },
        { metric: "210%", label: "Mobile Sales Growth" },
      ],
      color: "#A855F7", // Neon Purple
      imagePlaceholder: "bg-gradient-to-br from-[#A855F7]/20 via-[#020024] to-[#A855F7]/5"
    },
    {
      id: 3,
      category: "Real Estate / High-Ticket",
      client: "Urban Heights USA",
      title: "Automating High-Value Lead Generation.",
      challenge: "Sales team overwhelmed with unqualified leads; inability to track attribution correctly.",
      solution: "Built an AI-powered lead qualification bot integrated with CRM and targeted local SEO campaigns.",
      results: [
        { metric: "$12M+", label: "Property Value Sold" },
        { metric: "80%", label: "Leads Auto-Qualified" },
        { metric: "50+", label: "Premium Leads / Week" },
      ],
      color: "#10B981", // Neon Emerald
      imagePlaceholder: "bg-gradient-to-br from-[#10B981]/20 via-[#020024] to-[#10B981]/5"
    }
  ];

  const stats = [
    { label: "Total Revenue Generated", value: "$50M+", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Average Client ROI", value: "4.5x", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Successful Projects", value: "100+", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Active Retainers", value: "95%", icon: <Users className="w-5 h-5" /> },
  ];

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020024] relative overflow-hidden selection:bg-[#00D4FF]/30">
      <Navbar />
      
      {/* Moving Background Ambience */}
      <motion.div style={{ y: yBg }} className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <motion.div style={{ y: yBg }} className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. HERO HEADER */}
      <section className="pt-44 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#00D4FF]"></div>
              <span className="text-[#00D4FF] font-bold tracking-widest uppercase text-sm">Our Proof</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              We don't just build. <br /> We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-purple-500 animate-gradient">Ascend.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl flex items-center gap-4 group hover:border-[#00D4FF]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PREMIUM CASE STUDIES (Grid Layout Fix) */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group grid lg:grid-cols-12 items-center gap-8 lg:gap-0"
            >
              
              {/* IMAGE CONTAINER (Spans 8 columns, pushed to right) */}
              <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500 lg:col-start-5 lg:col-span-8">
                <div className={`absolute inset-0 ${study.imagePlaceholder} group-hover:scale-105 transition-transform duration-700 ease-in-out`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020024] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 md:left-20 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mix-blend-overlay">{study.client}</h3>
                </div>
              </div>

              {/* CONTENT CARD (Spans 5 columns, overlaps from left) */}
              <div 
                className="relative w-full lg:col-start-1 lg:col-span-5 lg:-mr-20 z-10 p-1 rounded-[2.5rem]"
                style={{ background: `linear-gradient(135deg, ${study.color}40, transparent 40%, transparent 60%, ${study.color}40)` }}
              >
                <div className="glass-panel bg-[#020024]/90 backdrop-blur-3xl p-8 md:p-12 rounded-[2.4rem] h-full border border-white/10 group-hover:border-white/30 transition-all shadow-2xl shadow-black/50">
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <Layers className="w-4 h-4" style={{ color: study.color }} />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">{study.category}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-6 text-gray-300 mb-10">
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-sm md:text-base leading-relaxed pl-4 border-l-2 border-red-500/50">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-sm md:text-base leading-relaxed pl-4 border-l-2" style={{ borderColor: study.color }}>{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-6 border-t border-white/10">
                    {study.results.map((result, i) => (
                      <div key={i}>
                        <h5 className="text-xl md:text-2xl font-bold" style={{ color: study.color }}>{result.metric}</h5>
                        <p className="text-gray-500 text-[10px] uppercase">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end">
                     <button className="flex items-center gap-2 text-sm text-white font-bold hover:gap-4 transition-all group-hover:text-[#00D4FF]">
                       See Case Study <ArrowUpRight className="w-4 h-4" />
                     </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FINAL CTA (Linked to Services) */}
      <section className="py-32 text-center relative z-10">
        <div className="max-w-3xl mx-auto glass-panel p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-purple-500/20 to-[#00D4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">Have a similar challenge?</h2>
          <p className="text-gray-400 text-xl mb-12 relative z-10">Let's analyze your current metrics and forecast your potential growth.</p>
          
          {/* LINK UPDATED: Points to Services Section */}
          <a href="/#contact" className="relative z-10">
            <button className="px-10 py-5 rounded-full bg-[#00D4FF] text-black font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(0,212,255,0.6)]">
              Get Your Free Audit
            </button>
          </a>
        </div>
      </section>

      <FloatingChat />
    </main>
  );
}