"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-secondary-foreground/50 font-mono text-sm uppercase tracking-widest">01. About Me</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-12 text-foreground">Engineering the <span className="text-muted-foreground">future.</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 bg-secondary/30 border border-border rounded-xl p-8 backdrop-blur-sm"
        >
          <Code2 className="w-8 h-8 text-muted-foreground mb-6" />
          <h3 className="text-2xl font-bold mb-4">Background</h3>
          <p className="text-muted-foreground text-lg leading-relaxed font-mono">
            I'm a final-year Information Technology student at P.E.S's Modern College of Engineering, Pune. I enjoy building full-stack applications — from collaborative real-time tools to distributed knowledge management platforms. I care about writing clean, scalable code and diving deep into the systems I build.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary/30 border border-border rounded-xl p-8 backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <GraduationCap className="w-8 h-8 text-muted-foreground mb-6" />
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-muted-foreground font-mono text-sm">B.Tech in Information Technology</p>
            <p className="text-foreground mt-2 font-medium">PES Modern College of Engineering</p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
              <Calendar className="w-4 h-4" />
              <span>Nov 2022 — Jun 2026</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
