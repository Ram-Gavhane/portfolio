"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
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

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.7s ease-out ${index * 0.15}s`,
        borderLeft: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        padding: "2rem 0 2rem 2rem",
        marginBottom: "1rem",
        cursor: "default",
        transitionProperty: "opacity, transform, border-color",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.3s ease, transform 0.3s ease",
              display: "inline-flex",
              transform: hovered ? "translate(2px, -2px)" : "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
        <span
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            letterSpacing: "0.08em",
          }}
        >
          {project.date}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1.25rem",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--accent-dim)",
              padding: "0.25rem 0.65rem",
              borderRadius: "2px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {project.description.map((d, i) => (
          <li
            key={i}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              paddingLeft: "1rem",
              position: "relative",
              marginBottom: "0.25rem",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--border)",
                fontSize: "0.6rem",
                top: "0.55rem",
              }}
            >
              ◆
            </span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-container">
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        >
          Projects
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 300,
            color: "var(--text-primary)",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease-out 0.1s",
          }}
        >
          Selected Work
        </h2>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
