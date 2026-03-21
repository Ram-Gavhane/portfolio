"use client";

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
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border/50">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-secondary/30 border border-border/50 rounded-md text-xs font-mono text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all cursor-crosshair"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
