"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "Leads Generated Monthly" },
  { value: "40%", label: "Avg. Conversion Increase" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "AI Automation" },
];

export default function ResultsSection() {
  return (
    <section className="py-24 px-6 bg-[#020024] relative">
       {/* Section specific glow */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#00D4FF] tracking-widest text-sm font-semibold uppercase mb-2 block">Results</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Real Results, Real Growth</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have achieved with ASCEND.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl text-center hover:border-[#00D4FF]/50 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}