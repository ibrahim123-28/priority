"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

export default function QuoteCalculator() {
  const [pages, setPages] = useState(1);
  const [features, setFeatures] = useState<string[]>([]);

  const basePrice = 500;
  const pricePerPage = 150;

  const addOns = [
    { id: "seo", label: "Rank #1 SEO", price: 300 },
    { id: "cms", label: "Admin Dashboard", price: 450 },
    { id: "ai", label: "AI Auto-Chatbot", price: 800 },
    { id: "auth", label: "User Login System", price: 600 },
  ];

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const total =
    basePrice +
    pages * pricePerPage +
    addOns.filter((f) => features.includes(f.id)).reduce((sum, f) => sum + f.price, 0);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        
        {/* LEFT SIDE: The Controls */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden group">
          {/* Subtle Gradient Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-purple-600 opacity-50" />
          
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Zap className="text-[#00D4FF] fill-[#00D4FF]" /> Configure Project
          </h3>

          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between text-white mb-4">
              <label className="text-sm uppercase tracking-wider text-gray-400">Scale</label>
              <span className="text-[#00D4FF] font-mono text-xl">{pages} Pages</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-[#00D4FF]"
            />
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            <label className="text-sm uppercase tracking-wider text-gray-400 mb-2 block">Modules</label>
            {addOns.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleFeature(item.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  features.includes(item.id)
                    ? "bg-[#00D4FF]/10 border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <span className={`flex items-center gap-3 ${features.includes(item.id) ? "text-white" : "text-gray-400"}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${features.includes(item.id) ? "bg-[#00D4FF] border-[#00D4FF]" : "border-gray-600"}`}>
                    {features.includes(item.id) && <Check className="w-3 h-3 text-black" />}
                  </div>
                  {item.label}
                </span>
                <span className="text-sm font-mono text-[#00D4FF]">+${item.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: The Receipt */}
        <div className="sticky top-10">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-purple-900/20 text-center relative">
            <span className="text-gray-400 text-sm uppercase tracking-[0.2em]">Estimated Investment</span>
            
            <motion.div 
              key={total}
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 my-8 font-heading"
            >
              ${total.toLocaleString()}
            </motion.div>

            <button className="w-full py-5 rounded-full bg-[#00D4FF] text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(0,212,255,0.6)]">
              Secure This Price
            </button>
            
            <p className="mt-4 text-xs text-gray-500">
              *Quote generated for ASCEND clients only.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}