"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "Rust"],
  },
  {
    category: "Full Stack",
    items: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Websockets",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "AWS",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Git",
      "Turborepo",
      "Prisma",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-border mt-12 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-secondary-foreground/50 font-mono text-sm uppercase tracking-widest">03. The Arsenal</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-16 text-foreground">Technical <span className="text-muted-foreground">Expertise.</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/50">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-secondary/30 border border-border rounded-md text-sm font-mono text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all cursor-crosshair"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
