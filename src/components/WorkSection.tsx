"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Orbit AI (Life OS)",
    category: "MERN Stack • AI Personal Assistant",
    description: "A comprehensive AI-powered personal operating system. Features real-time task management, AI chat integration, and a premium marketplace architecture.",
    tech: ["React", "Node.js", "MongoDB", "Express", "OpenAI"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "PrismOS",
    category: "Next.js • Multi-Model AI Chat",
    description: "A futuristic chat interface integrating Gemini and other LLMs. Built for speed with server-side rendering and a highly responsive glassmorphic UI.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Gemini API"],
    gradient: "from-cyan-400 to-emerald-400",
  },
  {
    id: 3,
    title: "FlowLink AI",
    category: "Python • Autonomous Agent",
    description: "An advanced AI agent capable of executing local file system commands and terminal operations. Bridges the gap between LLMs and OS control.",
    tech: ["Python", "LangChain", "Subprocess", "NLP"],
    gradient: "from-orange-500 to-red-500",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              We don't just write code. We architect digital ecosystems for scale.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-[1px] w-32 bg-white/20 mb-6" />
            <span className="text-accent tracking-widest text-sm uppercase">2024 — 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors p-8 md:p-12 flex flex-col md:flex-row gap-12">
                {/* Visual Placeholder (Left) */}
                <div className={`w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} relative group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                     <span className="font-heading font-bold text-3xl md:text-4xl text-white/90 tracking-tighter">
                       {project.title}
                     </span>
                  </div>
                </div>

                {/* Content (Right) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                     <button className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors group/btn">
                       View Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                     </button>
                     <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                       <Github className="w-5 h-5" />
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}