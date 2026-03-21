"use client";

import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Text block */}
      <p className="notion-text mb-1">
        I'm a final-year Information Technology student at P.E.S's Modern College of Engineering, Pune. I enjoy building full-stack applications — from collaborative real-time tools to distributed knowledge management platforms. I care about writing clean, scalable code and diving deep into the systems I build.
      </p>

      {/* Callout: Development Focus */}
      <div className="notion-callout bg-notion-blue-bg mt-4 mb-3">
        <span className="text-xl leading-none flex-shrink-0 mt-0.5">🔧</span>
        <div>
          <p className="font-semibold text-sm text-foreground mb-1">Development Focus</p>
          <p className="notion-text-sm">
            Specializing in scalable web applications, real-time communication systems, and modern frontend architectures using Next.js and React ecosystem.
          </p>
        </div>
      </div>

      {/* Callout: Education */}
      <div className="notion-callout bg-notion-yellow-bg mb-3">
        <span className="text-xl leading-none flex-shrink-0 mt-0.5">🎓</span>
        <div>
          <p className="font-semibold text-sm text-foreground mb-1">Education</p>
          <p className="notion-text-sm">B.Tech in Information Technology</p>
          <p className="text-sm text-foreground font-medium">PES Modern College of Engineering</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <span className="notion-text-sm flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Nov 2022 — Jun 2026
            </span>
            <span className="notion-text-sm flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Pune, Maharashtra
            </span>
          </div>
        </div>
      </div>

      {/* Callout: Achievements */}
      <div className="notion-callout bg-notion-green-bg mb-3">
        <span className="text-xl leading-none flex-shrink-0 mt-0.5">🏆</span>
        <div>
          <p className="font-semibold text-sm text-foreground mb-1">Achievements</p>
          <ul className="space-y-1">
            <li className="notion-text-sm">🧩 <strong>250+</strong> LeetCode & GFG problems solved</li>
            <li className="notion-text-sm">🥇 <strong>1st Place</strong> — CodeCraft Hackathon (internal college contest)</li>
            <li className="notion-text-sm">🏅 <strong>4th Place</strong> — TechnoFEA Hackathon (among 800 teams, VIIT Pune)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
