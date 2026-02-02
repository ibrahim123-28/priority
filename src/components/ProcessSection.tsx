"use client";
import { motion } from "framer-motion";
import { Search, Map, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    desc: "We dive deep into your brand, audience, and goals. We don't just take orders; we challenge assumptions to find the best path forward.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Strategy & Architecture",
    desc: "We blueprint the technical solution. Choosing the right stack (MERN, Next.js, Python AI) to ensure scalability and speed.",
    icon: <Map className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "We craft high-fidelity prototypes. Every pixel is designed for conversion, using glassmorphism and modern aesthetics.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Development",
    desc: "The heavy lifting. We write clean, type-safe code. Integrating AI agents, databases, and responsive front-ends.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Launch & Scale",
    desc: "Deployment to elite infrastructure (Vercel/AWS). We monitor performance and iterate based on real user data.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">How We Ascend</h2>
          <p className="text-gray-400">From concept to deployment in five strategic steps.</p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className="w-full md:w-1/2 glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-lg text-accent">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>

                {/* Center Node (Desktop Only) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded-full border-4 border-gray-900 hidden md:flex items-center justify-center z-20">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_#00E5FF]" />
                </div>

                {/* Spacer for alternate side */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}