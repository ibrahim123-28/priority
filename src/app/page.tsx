"use client";
import React from "react";
import Head from "next/head"; // ✅ Import Head
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero"; 
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection"; // IMPORT THE NEW BOOKING SECTION
import ResultsSection from "@/components/ResultsSection";
import FloatingChat from "@/components/FloatingChat";
import { motion } from "framer-motion";
import { Cpu, LayoutTemplate, Rocket, MapPin } from "lucide-react";
import Footer from "@/components/ui/Footer";
export default function Home() {
  // Services Data
  const services = [
    { 
      title: "High-Converting Websites", 
      icon: <LayoutTemplate className="w-8 h-8" />, 
      desc: "Websites that turn visitors into customers with sub-3s load times." 
    },
    { 
      title: "Local SEO & Google Maps", 
      icon: <MapPin className="w-8 h-8" />, 
      desc: "Dominate your local market and rank #1 on search results." 
    },
    { 
      title: "AI Lead Capture", 
      icon: <Cpu className="w-8 h-8" />, 
      desc: "24/7 lead generation on autopilot with intelligent chatbots." 
    },
    { 
      title: "Growth Retainers", 
      icon: <Rocket className="w-8 h-8" />, 
      desc: "Continuous optimization and scaling for long-term success." 
    },
  ];

  // Team Data
  const team = [
    { name: "Ibrahim", role: "Tech Head", bio: "" },
    { name: "Austin", role: "CO-Founder", bio: "" },
    { name: "Savion", role: "Founder", bio: "" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020024]">

       <Head>
        <meta name="google09423bc5c9bb9cbd.html" content="WQnTG9Q2e0fui-4A9ZdeVtYlfMyXAVGqfbPdYHsA9bE" />
      </Head>


      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero />
      
      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Growth Solutions That <span className="text-[#00D4FF]">Deliver</span>
            </h2>
            <p className="text-gray-400">Clear, productized offers with transparent outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-panel p-8 rounded-2xl group border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit text-[#00D4FF] group-hover:text-white group-hover:bg-[#00D4FF] transition-colors shadow-lg shadow-[#00D4FF]/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <ProcessSection />


      

      {/* 6. TEAM SECTION */}
      <section id="team" className="py-24 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 blur-[100px] rounded-full z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">The Leadership</h2>
            <p className="text-gray-400">Meet the minds behind the machine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass-panel p-8 rounded-3xl text-center border border-white/5 hover:border-[#00D4FF]/50 transition-colors group"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 flex items-center justify-center border-2 border-white/10 shadow-xl text-[#00D4FF] group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-[#00D4FF] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING SECTION (Replaces ContactSection) */}
      <BookingSection />

      {/* FOOTER */}
      <Footer />
      
      <FloatingChat />
    </main>
  );
}