"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingChat() {
  return (
    <motion.a
      href="https://wa.me/9326731115" // REPLACE WITH YOUR NUMBER
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
    >
      {/* The Glow Effect Layer */}
      <div className="absolute inset-0 bg-[#00D4FF] rounded-full blur-[10px] opacity-50 animate-pulse" />

      {/* The Button Itself */}
      <div className="relative bg-[#00D4FF] hover:bg-[#00b8dd] text-[#020024] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-transform hover:scale-110 cursor-pointer border-2 border-white/20">
        <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
      </div>
    </motion.a>
  );
}