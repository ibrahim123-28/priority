"use client";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState("idle"); // idle, loading, success

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    
    // Simulate sending data (or use Formspree here)
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // This is where you would normally send data to Formspree
    const response = await fetch("https://formspree.io/f/mykjvqqw", { method: "POST", body: formData ,
      headers: {
        'Accept': 'application/json'
      }})
    
    setTimeout(() => {
      setFormState("success");
      form.reset();
    }, 2000); // Fakes a 2-second send time for effect
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-[#00D4FF]">Ascend?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              You have the vision. We have the firepower. Let's build something that defines the future of your industry.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-[#00D4FF] border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email Us</h3>
                  <a href="mailto:hello@ascend.agency" className="text-gray-400 hover:text-[#00D4FF] transition-colors">
                    hello@ascend.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-[#00D4FF] border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Global HQ</h3>
                  <p className="text-gray-400">San Francisco • Dubai • Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Form with Logic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-20 h-20 bg-[#00D4FF]/20 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-[#00D4FF]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                <button 
                  onClick={() => setFormState("idle")} 
                  className="mt-8 text-sm text-[#00D4FF] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="john@company.com"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Project Type</label>
                  <select 
                    name="projectType" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none"
                  >
                    <option className="bg-[#020024]">Web Development</option>
                    <option className="bg-[#020024]">AI Integration</option>
                    <option className="bg-[#020024]">Mobile App</option>
                    <option className="bg-[#020024]">Brand Strategy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formState === "loading"}
                  className="w-full bg-[#00D4FF] text-[#020024] font-bold py-4 rounded-xl hover:bg-[#00b8dd] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>Sending <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}