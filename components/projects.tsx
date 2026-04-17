"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CSPS - Centralized Student Placement System",
    emoji: "🌐",
    date: "Nov 2025",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    description: [
      "Built a production-ready Training & Placement (TNP) SaaS portal that replaces repetitive Google Forms with a centralized student profile system, allowing students to apply to multiple placement drives with a single profile.",
      "Implemented a smart eligibility filtering engine that automatically screens students based on criteria like CGPA, branch, and backlogs, significantly reducing manual shortlisting effort for placement coordinators.",
      "Implemented domain-restricted authentication using Auth0, allowing only users with a @moderncoe.edu.in institutional email to sign up and log in, ensuring secure access limited to authorized college members.",
    ],
    link: "https://tnp-frontend-gold.vercel.app/",
    status: "Live",
  },
  {
    title: "Observiq",
    emoji: "🌐",
    date: "Feb 2026",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Turborepo", "Redis Streams"],
    description: [
      "Developed a distributed website uptime monitoring platform that allows users to register websites and monitor their availability across multiple regions in real time.",
      "Implemented Redis Streams with consumer groups to distribute health-check jobs across multiple workers, enabling scalable and parallel monitoring of thousands of websites.",
      "Developed the backend using Bun with PostgreSQL (Prisma ORM) for high-performance API handling, website registration, and persistent storage of uptime monitoring results.",
    ],
    link: "https://observiq.vercel.app/",
    status: "In Progress",
  },
  {
    title: "Kanvas",
    emoji: "🐙",
    date: "May 2025",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Turborepo"],
    description: [
      "Created a collaborative drawing platform with real-time canvas sharing.",
      "Implemented WebSocket-based synchronization for seamless multi-user interaction.",
      "Learnt SSR, SSG in Next.js and to manage entire codebase monorepo.",
    ],
    link: "https://github.com/Ram-Gavhane/Draw-app",
    status: "Completed",
  },
  {
    title: "Brainly — A Second Brain",
    emoji: "🐙",
    date: "March 2025",
    tech: ["React", "TypeScript", "MongoDB", "Node.js"],
    description: [
      "Developed a web-based platform for organizing and managing important notes.",
      "Integrated YouTube videos, Twitter tweets, and written documents for a unified knowledge hub.",
      "Improved code maintainability and readability using TypeScript interfaces and types.",
    ],
    link: "https://github.com/Ram-Gavhane/Brainly",
    status: "Completed",
  },
  {
    title: "Course Selling App",
    emoji: "🐙",
    date: "February 2025",
    tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    description: [
      "Built a platform to host and purchase educational courses.",
      "Designed admin features for course and user management, and user features for course browsing and purchases.",
    ],
    link: "https://github.com/Ram-Gavhane",
    status: "Completed",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Next.js": "bg-notion-blue-bg text-notion-blue",
  "TypeScript": "bg-notion-blue-bg text-notion-blue",
  "PostgreSQL": "bg-notion-purple-bg text-notion-purple",
  "Node.js": "bg-notion-green-bg text-notion-green",
  "Turborepo": "bg-notion-orange-bg text-notion-orange",
  "Redis Streams": "bg-notion-red-bg text-notion-red",
  "React": "bg-notion-blue-bg text-notion-blue",
  "MongoDB": "bg-notion-green-bg text-notion-green",
  "JavaScript": "bg-notion-yellow-bg text-notion-yellow",
};

const STATUS_COLORS: Record<string, string> = {
  "Live": "bg-notion-green-bg text-notion-green",
  "In Progress": "bg-notion-orange-bg text-notion-orange",
  "Completed": "bg-notion-blue-bg text-notion-blue",
};

type ViewType = "table" | "list";

export default function Projects() {
  const [view, setView] = useState<ViewType>("table");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* View Tabs & Controls */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              view === "table"
                ? "bg-secondary text-foreground font-medium"
                : "text-muted-foreground hover:bg-secondary/60"
            }`}
          >
            ◫ Table
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              view === "list"
                ? "bg-secondary text-foreground font-medium"
                : "text-muted-foreground hover:bg-secondary/60"
            }`}
          >
            ☰ List
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="notion-text-sm">
            {projects.length} projects
          </span>
        </div>
      </div>

      {view === "table" ? (
        /* ── Table View ── */
        <div className="border border-border rounded overflow-hidden">
          {/* Column Headers */}
          <div className="notion-database-row bg-secondary/50 text-muted-foreground text-xs font-medium">
            <div className="flex-[2] px-3 py-1.5">Name</div>
            <div className="flex-[0.7] px-3 py-1.5 hidden sm:block">Date</div>
            <div className="flex-[1.5] px-3 py-1.5 hidden md:block">Tech Stack</div>
            <div className="flex-[0.6] px-3 py-1.5 hidden sm:block">Status</div>
            <div className="w-10 px-3 py-1.5"></div>
          </div>

          {/* Rows */}
          {projects.map((project, index) => (
            <div key={project.title}>
              <div
                className="notion-database-row cursor-pointer"
                onClick={() =>
                  setExpandedRow(expandedRow === index ? null : index)
                }
              >
                <div className="flex-[2] px-3 py-2 text-sm font-medium text-foreground truncate">
                  {project.title}
                </div>
                <div className="flex-[0.7] px-3 py-2 text-sm text-muted-foreground hidden sm:block">
                  {project.date}
                </div>
                <div className="flex-[1.5] px-3 py-2 hidden md:flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`notion-tag text-xs ${TAG_COLORS[t] || "bg-notion-gray-bg text-notion-gray"}`}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="notion-tag text-xs bg-notion-gray-bg text-notion-gray">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex-[0.6] px-3 py-2 hidden sm:block">
                  <span className={`notion-tag text-xs ${STATUS_COLORS[project.status] || ""}`}>
                    {project.status}
                  </span>
                </div>
                <div className="w-10 px-3 py-2 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Expanded Description */}
              {expandedRow === index && (
                <div className="px-3 py-3 bg-secondary/30 border-b border-border animate-fade-in">
                  {/* Show all tech on mobile */}
                  <div className="flex flex-wrap gap-1 mb-3 md:hidden">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`notion-tag text-xs ${TAG_COLORS[t] || "bg-notion-gray-bg text-notion-gray"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {project.description.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-muted-foreground/60 mt-0.5 flex-shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* New Row (decorative) */}
          <div className="notion-database-row text-muted-foreground/50 cursor-default">
            <div className="px-3 py-1.5 text-sm">
              <span className="mr-1">+</span> New
            </div>
          </div>
        </div>
      ) : (
        /* ── List View ── */
        <div className="space-y-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="notion-block-hover p-3 cursor-pointer"
              onClick={() =>
                setExpandedRow(expandedRow === index ? null : index)
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{project.emoji}</span>
                    <h3 className="text-sm font-medium text-foreground truncate">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1 ml-7">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`notion-tag text-xs ${TAG_COLORS[t] || "bg-notion-gray-bg text-notion-gray"}`}
                      >
                        {t}
                      </span>
                    ))}
                    <span className={`notion-tag text-xs ${STATUS_COLORS[project.status] || ""}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {expandedRow === index && (
                <div className="ml-7 mt-2 animate-fade-in">
                  <ul className="space-y-1.5">
                    {project.description.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-muted-foreground/60 mt-0.5 flex-shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
