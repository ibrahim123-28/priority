"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Twitter, Instagram, Github, Heart, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020024] pt-32 pb-12 overflow-hidden border-t border-white/5">
      
      {/* 1. MASSIVE WATERMARK (Texture) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] md:text-[20vw] font-bold text-white leading-none tracking-tighter">
          SURVO
        </h1>
      </div>

      {/* 2. NORTHERN LIGHTS GLOW */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-r from-[#00D4FF]/20 via-purple-600/20 to-[#00D4FF]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: CTA & BRAND */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <Link href="/" className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter mb-4 block">
              SURVO<span className="text-[#00D4FF]">.</span>
            </Link>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              We engineer digital dominance. From high-performance platforms to AI automation, we build the systems that scale your business.
            </p>
          </div>
          
          {/* Glass Newsletter Card */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h4 className="text-white font-bold text-xl mb-2 relative z-10">Stay ahead of the curve.</h4>
            <p className="text-gray-400 text-sm mb-6 relative z-10">Get the latest AI & Growth strategies delivered to your inbox.</p>
            
            <form className="flex gap-2 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none transition-colors"
              />
              <button className="bg-[#00D4FF] text-black rounded-xl px-4 py-3 font-bold hover:scale-105 transition-transform">
                <ArrowUpRight />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/5 pt-16">
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <FooterLink href="/#services" label="Services" />
              <FooterLink href="/#work" label="Our Work" />
              <FooterLink href="/case-studies" label="Case Studies" />
              <FooterLink href="/pricing" label="Pricing" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/#team" label="Team" />
              <FooterLink href="/book" label="Book a Call" />
              <FooterLink href="#" label="Careers" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Cookie Policy" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <div className="flex gap-3">
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="#" />
  
              <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/digi_ascend?igsh=NDc0d2V6OWJ4d3oz" />
              <SocialIcon icon={<Github className="w-5 h-5" />} href="#" />
            </div>
            <div className="mt-6">
              <a href="mailto:hello@ascend.agency" className="flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] transition-colors group">
                <Mail className="w-4 h-4 group-hover:animate-bounce" /> digiascend13@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} SURVO Agency. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1 group cursor-default">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 group-hover:scale-125 transition-transform" /> in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Sub-components
function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00D4FF] hover:text-black hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 group text-sm">
        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#00D4FF] opacity-0 group-hover:opacity-100">
          /
        </span>
        {label}
      </Link>
    </li>
  );
}