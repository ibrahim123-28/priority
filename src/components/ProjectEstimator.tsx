"use client";
import { useState } from "react";

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState("web");
  const [features, setFeatures] = useState<string[]>([]);
  
  const toggleFeature = (feat: string) => {
    setFeatures(prev => prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]);
  };

  const calculateEstimate = () => {
    let base = projectType === "web" ? 1500 : projectType === "ecommerce" ? 3000 : 5000;
    base += features.length * 500;
    return base;
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Estimate Your Investment</h2>
          <p className="text-gray-400">Transparent pricing for premium results.</p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-white/10">
          {/* Step 1: Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-accent">1. Project Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['web', 'ecommerce', 'app'].map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`p-4 rounded-xl border transition-all ${
                    projectType === type 
                    ? 'bg-primary/20 border-primary text-white' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {type === 'web' ? 'Brand Website' : type === 'ecommerce' ? 'E-Commerce' : 'Web Application'}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Features */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-accent">2. Key Features</h3>
            <div className="flex flex-wrap gap-3">
              {['CMS Integration', 'User Auth', 'Payments', 'AI Integration', '3D Visuals', 'SEO Package'].map((feat) => (
                <button
                  key={feat}
                  onClick={() => toggleFeature(feat)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all ${
                    features.includes(feat)
                    ? 'bg-accent/20 border-accent text-accent' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20'
                  }`}
                >
                  {feat}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <span className="block text-gray-400 text-sm uppercase tracking-wider">Estimated Range</span>
              <span className="text-4xl font-heading font-bold text-white">
                ${calculateEstimate().toLocaleString()}+
              </span>
            </div>
            {/* UPDATED: Links to the Contact Form */}
            <a href="#contact" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}