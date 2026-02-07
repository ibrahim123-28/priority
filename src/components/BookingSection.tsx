"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import Router for redirection
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, ChevronDown } from "lucide-react";

export default function BookingSection() {
  const router = useRouter(); // Initialize Router
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    goals: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // REPLACE WITH YOUR ACTUAL FORMSPREE ID
    const formspreeId = "https://formspree.io/f/mykjvqqw"; 

    // 1. Send Data to Formspree
    const response = await fetch(`https://formspree.io/f/mykjvqqw`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: "New Audit Request (Homepage)", ...formData }),
    });

    if (response.ok) {
      setStatus("success");
      
      // 2. REDIRECT TO BOOKING PAGE
      // We wait 1 second so they see the "Success" checkmark, then we move them.
      setTimeout(() => {
        router.push("/book");
      }, 1000);

    } else {
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";
  const businessTypes = ["Agency", "SaaS / Tech", "E-commerce", "Service Business", "Other"];
  const budgetRanges = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute left-[-20%] top-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute right-[-20%] bottom-0 w-[600px] h-[600px] bg-[#00D4FF]/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Start <span className="text-[#00D4FF]">Ascending</span>
          </h2>
          <p className="text-gray-400 text-lg">Claim your free consultation and let's map out your growth.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Side */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <InfoItem icon={<Mail />} title="Email" content="hello@ascend.agency" />
              <InfoItem icon={<Phone />} title="Phone" content="+1 (555) 123-4567" />
              <InfoItem icon={<MapPin />} title="Location" content="San Francisco • Dubai • Remote" />
              <InfoItem icon={<Clock />} title="Working Hours" content="Mon - Fri: 9:00 AM - 6:00 PM EST" />
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-[#00D4FF]/20 bg-[#00D4FF]/5">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#00D4FF]" /> Need immediate assistance?
              </h4>
              <p className="text-gray-400 text-sm mb-4">Chat with us on WhatsApp for quick responses.</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-3 rounded-xl bg-[#00D4FF] text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </button>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-purple-900/20">
            {status === "success" ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                <p className="text-gray-400">Redirecting you to the calendar...</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Claim Your Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input type="text" required placeholder="John Doe" className={inputClasses}
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className={labelClasses}>Email Address *</label>
                      <input type="email" required placeholder="john@company.com" className={inputClasses}
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className={inputClasses}
                        value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div>
                      <label className={labelClasses}>Business Type</label>
                      <CustomSelect options={businessTypes} value={formData.businessType} onChange={(value) => setFormData({...formData, businessType: value})} placeholder="Select Type..." />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>What are your main goals?</label>
                    <input type="text" placeholder="e.g., Increase leads, improve brand image..." className={inputClasses}
                      value={formData.goals} onChange={(e) => setFormData({...formData, goals: e.target.value})} />
                  </div>

                  <div>
                    <label className={labelClasses}>Estimated Budget Range</label>
                    <CustomSelect options={budgetRanges} value={formData.budget} onChange={(value) => setFormData({...formData, budget: value})} placeholder="Select Budget..." />
                  </div>

                  <div>
                    <label className={labelClasses}>Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..." className={inputClasses}
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>

                  <button type="submit" disabled={status === "submitting"} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-blue-600 text-white font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(0,212,255,0.4)] disabled:opacity-50">
                    {status === "submitting" ? "Processing..." : <>Submit & Get Free Consultation <Send className="w-5 h-5" /></>}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Custom Dropdown Helper
function CustomSelect({ options, value, onChange, placeholder }: { options: string[], value: string, onChange: (value: string) => void, placeholder: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left flex items-center justify-between transition-all ${isOpen ? 'border-[#00D4FF] ring-1 ring-[#00D4FF]/30' : ''}`}>
        <span className={value ? "text-white" : "text-gray-500"}>{value || placeholder}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-50 w-full mt-2 bg-[#020024]/90 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden">
            {options.map((option) => (
              <button key={option} type="button" onClick={() => { onChange(option); setIsOpen(false); }} className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF]">{icon}</div>
      <div><h4 className="text-white font-bold">{title}</h4><p className="text-gray-400 text-sm">{content}</p></div>
    </div>
  );
}