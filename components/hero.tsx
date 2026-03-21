"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start md:items-center md:text-center mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-white/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
        >
          Building <span className="text-muted-foreground">reliable</span><br className="hidden md:block" /> software systems.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono leading-relaxed"
        >
          Full Stack Developer specializing in high-performance application engineering, scalable architecture, and premium user experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-foreground text-background font-medium rounded-md hover:bg-neutral-200 transition-colors text-center inline-flex items-center justify-center gap-2">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-secondary text-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors border border-border text-center">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2 group">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/40 group-hover:text-muted-foreground/80 transition-colors">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
