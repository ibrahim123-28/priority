"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, BarChart3, Clock, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[#00D4FF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-gray-300 font-medium tracking-wide">Your Growth Partner in the Digital Age</span>
        </motion.div>

        {/* HEADLINE: Adjusted size for a cleaner, professional fit */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // CHANGED: text-5xl (mobile) -> text-6xl (tablet) -> text-7xl (desktop)
          // This is "Big" but not "Broken Big".
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white"
        >
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00D4FF]">Digital Systems</span><br />
          That Generate <span className="relative inline-block">
            Leads
            {/* Underline Effect */}
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00D4FF]/20 -z-10" />
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          High-converting websites, SEO that delivers, and AI automation systems. 
          We're the growth engine behind ambitious businesses.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <a href="#contact" className="group px-8 py-4 bg-[#00D4FF] text-[#020024] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2">
            Book a Free Growth Audit 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="https://wa.me/9136663411" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#00D4FF]" />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-5xl mx-auto glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 border border-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF]">
               <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-2xl text-white">50+</h3>
              <p className="text-sm text-gray-400 font-medium">Projects Delivered</p>
            </div>
          </div>

          <div className="w-px h-12 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF]">
               <BarChart3 className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-2xl text-white">300%</h3>
              <p className="text-sm text-gray-400 font-medium">Avg. Lead Increase</p>
            </div>
          </div>

          <div className="w-px h-12 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF]">
               <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-2xl text-white">24/7</h3>
              <p className="text-sm text-gray-400 font-medium">AI Automation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}