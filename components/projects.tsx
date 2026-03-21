"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CSPS - Centralized Student Placement System",
    date: "Nov 2025",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    description: [
      "Built a production-ready Training & Placement (TNP) SaaS portal that replaces repetitive Google Forms with a centralized student profile system, allowing students to apply to multiple placement drives with a single profile.",
      "Implemented a smart eligibility filtering engine that automatically screens students based on criteria like CGPA, branch, and backlogs, significantly reducing manual shortlisting effort for placement coordinators.",
      "Implemented domain-restricted authentication using Auth0, allowing only users with a @moderncoe.edu.in institutional email to sign up and log in, ensuring secure access limited to authorized college members.",
    ],
    link: "https://github.com/Ram-Gavhane/CSPS",
  },
  {
    title: "Better-Uptime",
    date: "Feb 2026",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Turborepo", "Redis Streams"],
    description: [
      "Developed a distributed website uptime monitoring platform that allows users to register websites and monitor their availability across multiple regions in real time.",
      "Implemented Redis Streams with consumer groups to distribute health-check jobs across multiple workers, enabling scalable and parallel monitoring of thousands of websites.",
      "Developed the backend using Bun with PostgreSQL (Prisma ORM) for high-performance API handling, website registration, and persistent storage of uptime monitoring results.",
    ],
    link: "https://github.com/Ram-Gavhane/better-uptime",
  },
  {
    title: "Kanvas",
    date: "May 2025",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Turborepo"],
    description: [
      "Created a collaborative drawing platform with real-time canvas sharing.",
      "Implemented WebSocket-based synchronization for seamless multi-user interaction.",
      "Learnt SSR, SSG in Next.js and to manage entire codebase monorepo.",
    ],
    link: "https://github.com/Ram-Gavhane",
  },
  {
    title: "Brainly — A Second Brain",
    date: "March 2025",
    tech: ["React", "TypeScript", "MongoDB", "Node.js"],
    description: [
      "Developed a web-based platform for organizing and managing important notes.",
      "Integrated YouTube videos, Twitter tweets, and written documents for a unified knowledge hub.",
      "Improved code maintainability and readability using TypeScript interfaces and types.",
    ],
    link: "https://github.com/Ram-Gavhane",
  },
  {
    title: "Course Selling App",
    date: "February 2025",
    tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    description: [
      "Built a platform to host and purchase educational courses.",
      "Designed admin features for course and user management, and user features for course browsing and purchases.",
    ],
    link: "https://github.com/Ram-Gavhane",
  },
];

export default function Projects() {
  return (
    <div className="w-full flex flex-col gap-8">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="group relative flex flex-col p-6 rounded-2xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {project.date}
              </span>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-primary border border-primary/20 rounded-md bg-primary/5"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="space-y-2">
            {project.description.map((d, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed font-mono">
                <span className="text-primary/50 text-[10px] mt-[6px]">◆</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
