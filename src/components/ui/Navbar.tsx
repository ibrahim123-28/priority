"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-2xl tracking-tighter text-white">
          ASCEND<span className="text-[#00D4FF]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
             href="#contact"
             // UPDATED BUTTON: Cyan Background with Dark Text
             className="bg-[#00D4FF] hover:bg-[#00b8dd] text-[#020024] px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(0,212,255,0.4)]"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col space-y-6 md:hidden z-50"
          >
             {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white text-center"
              >
                {link.name}
              </Link>
            ))}
              <Link
          href="#contact"
          className="bg-[#00D4FF] hover:bg-[#00b8dd] text-[#020024] px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(0,212,255,0.4)]"
        >
          Start Project
        </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}