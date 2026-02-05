"use client";
import React, { useState } from "react";
import QuoteCalculator from "@/components/QuoteCalculator";
import { Lock } from "lucide-react";

export default function PricingPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length > 5) setIsUnlocked(true);
  };

  return (
    <main className="min-h-screen bg-[#020024] w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Project <span className="text-[#00D4FF]">Estimator</span>
          </h1>
          <p className="text-gray-400 text-lg">Calculate the cost of your digital ascent.</p>
        </div>

        {!isUnlocked ? (
          <div className="max-w-md mx-auto glass-panel p-10 rounded-3xl border border-white/10 backdrop-blur-xl text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-[#00D4FF]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Agency Access Only</h2>
            <p className="text-gray-400 mb-8 text-sm">Enter your business email to unlock the interactive pricing engine.</p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input 
                type="email" 
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-[#00D4FF]"
              />
              <button type="submit" className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-[#00D4FF] transition-colors">
                Unlock Calculator
              </button>
            </form>
          </div>
        ) : (
          <QuoteCalculator />
        )}
      </div>
    </main>
  );
}