"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    highlight: "250+",
    description: "LeetCode & GFG problems solved",
  },
  {
    highlight: "4th Place",
    description: "TechnoFEA Hackathon — among 800 teams, VIIT Pune",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding">
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
          Achievements
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
          Milestones
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {achievements.map((a, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 2rem",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${0.2 + i * 0.15}s`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 300,
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "0.75rem",
                  lineHeight: 1,
                }}
              >
                {a.highlight}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
