"use client";
import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { Calendar, Clock, User, Mail, CheckCircle, Loader2 } from "lucide-react";

export default function BookingPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "Strategy Call",
  });

  // Available Time Slots
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      alert("Please select both a date and a time.");
      return;
    }
    
    setStatus("submitting");

    // Send to Formspree
    const response = await fetch("https://formspree.io/f/mykjvqqw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: "NEW BOOKING: Strategy Call",
        ...formData
      }),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen bg-[#020024] relative overflow-hidden">
      <Navbar />

      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-12 flex flex-col md:flex-row gap-12 items-start">
        
        {/* LEFT SIDE: The Pitch */}
        <div className="md:w-1/2 pt-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your <span className="text-[#00D4FF]">Strategy Session</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Stop guessing. Start scaling. In this 30-minute call, we will audit your current digital presence and map out a custom growth plan.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">30 Minutes</h3>
                <p className="text-gray-500 text-sm">Focused, high-impact consulting.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">1-on-1 with Leadership</h3>
                <p className="text-gray-500 text-sm">Speak directly with Ibrahim or Austin.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Custom Booking Form */}
        <div className="w-full md:w-1/2">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            
            {status === "success" ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-gray-400">We have sent the meeting details to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Date Picker */}
                <div>
                  <label className="text-white text-sm font-bold mb-2 block flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00D4FF]" /> Select Date
                  </label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-[#00D4FF] focus:outline-none [color-scheme:dark]"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                {/* 2. Time Slots Grid */}
                <div>
                  <label className="text-white text-sm font-bold mb-2 block flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00D4FF]" /> Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({...formData, time: time})}
                        className={`py-2 px-2 rounded-lg text-sm font-medium border transition-all ${
                          formData.time === time 
                            ? "bg-[#00D4FF] border-[#00D4FF] text-black shadow-[0_0_15px_rgba(0,212,255,0.4)]" 
                            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-[#00D4FF] focus:outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      required
                      className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:border-[#00D4FF] focus:outline-none"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-blue-600 text-white font-bold text-lg hover:scale-[1.02] transition-transform shadow-[0_0_30px_-5px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>Processing...</>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
                
              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}