"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden">
      {/* B/W Map Background SVG (Abstract Dotted World Map) */}
      <div className="absolute -right-[20%] -top-[10%] opacity-20 pointer-events-none w-[150%] h-[150%]">
        <svg viewBox="0 0 1000 500" fill="currentColor" className="text-foreground w-full h-full">
          {/* Simplified World Dots Pattern */}
          <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" className="fill-current opacity-30"></circle>
          </pattern>
          <path fill="url(#dots)" d="M50 80 Q 200 40 400 60 T 800 50 Q 950 100 900 300 Q 800 450 600 400 T 200 450 Q 10 350 50 80 Z" />
          {/* Abstract landmasses to look like a map */}
          <path d="M100 100 Q 150 50 200 150 T 100 250 Z" className="fill-current opacity-20" />
          <path d="M500 150 Q 600 80 700 200 T 550 350 Z" className="fill-current opacity-20" />
          <path d="M750 250 Q 850 200 900 350 T 780 400 Z" className="fill-current opacity-20" />
          <path d="M300 300 Q 350 250 400 350 T 320 450 Z" className="fill-current opacity-20" />
        </svg>
      </div>

      <div className="z-10 mt-auto relative pt-32">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </div>
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Current Location</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-serif text-foreground font-medium tracking-tight">Pune, India</h3>
        <p className="text-muted-foreground mt-2 text-sm max-w-[200px] leading-relaxed">
          Operating from the tech hub of Maharashtra, building for the world.
        </p>
      </div>

      {/* The Pin */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-4, 0, -4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute top-[35%] right-[25%] md:top-[40%] md:right-[20%] text-foreground z-10"
      >
        <MapPin className="w-8 h-8 md:w-10 md:h-10 fill-background" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
