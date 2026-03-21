"use client";

import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Background</h2>
        <p className="text-muted-foreground mt-4 leading-relaxed font-mono">
          I'm a final-year Information Technology student at P.E.S's Modern College of Engineering, Pune. I enjoy building full-stack applications — from collaborative real-time tools to distributed knowledge management platforms. I care about writing clean, scalable code and diving deep into the systems I build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary/20 border border-border/50 rounded-2xl p-6">
          <Code2 className="w-6 h-6 text-primary mb-4" />
          <h3 className="text-lg font-bold mb-2">Development Focus</h3>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed">
            Specializing in scalable web applications, real-time communication systems, and modern frontend architectures using Next.js and React ecosystem.
          </p>
        </div>

        <div className="bg-secondary/20 border border-border/50 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <GraduationCap className="w-6 h-6 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Education</h3>
            <p className="text-muted-foreground font-mono text-xs">B.Tech in Information Technology</p>
            <p className="text-foreground mt-1 text-sm font-medium">PES Modern College of Engineering</p>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
              <Calendar className="w-4 h-4" />
              <span>Nov 2022 — Jun 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
