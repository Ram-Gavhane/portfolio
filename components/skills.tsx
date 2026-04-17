"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    emoji: "⌨️",
    items: [
      { name: "Python", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "Java", color: "bg-notion-orange-bg text-notion-orange" },
      { name: "C++", color: "bg-notion-purple-bg text-notion-purple" },
      { name: "Rust", color: "bg-notion-red-bg text-notion-red" },
    ],
  },
  {
    category: "Full Stack",
    emoji: "🏗️",
    items: [
      { name: "HTML5", color: "bg-notion-orange-bg text-notion-orange" },
      { name: "CSS", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "JavaScript", color: "bg-notion-yellow-bg text-notion-yellow" },
      { name: "TypeScript", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "React", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "Next.js", color: "bg-notion-gray-bg text-notion-gray" },
      { name: "Node.js", color: "bg-notion-green-bg text-notion-green" },
      { name: "Express.js", color: "bg-notion-green-bg text-notion-green" },
      { name: "Websockets", color: "bg-notion-purple-bg text-notion-purple" },
      { name: "REST APIs", color: "bg-notion-brown-bg text-notion-brown" },
    ],
  },
  {
    category: "Databases",
    emoji: "💽",
    items: [
      { name: "MySQL", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "MongoDB", color: "bg-notion-green-bg text-notion-green" },
      { name: "PostgreSQL", color: "bg-notion-purple-bg text-notion-purple" },
      { name: "Redis", color: "bg-notion-red-bg text-notion-red" },
    ],
  },
  {
    category: "DevOps & Tools",
    emoji: "🛠️",
    items: [
      { name: "Docker", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "AWS", color: "bg-notion-orange-bg text-notion-orange" },
      { name: "Kubernetes", color: "bg-notion-blue-bg text-notion-blue" },
      { name: "Prometheus", color: "bg-notion-red-bg text-notion-red" },
      { name: "Grafana", color: "bg-notion-orange-bg text-notion-orange" },
      { name: "Git", color: "bg-notion-gray-bg text-notion-gray" },
      { name: "Turborepo", color: "bg-notion-purple-bg text-notion-purple" },
      { name: "Prisma", color: "bg-notion-green-bg text-notion-green" },
    ],
  },
];

export default function Skills() {
  const [openToggles, setOpenToggles] = useState<Set<number>>(new Set([0, 1]));

  const toggleGroup = (i: number) => {
    setOpenToggles((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="w-full space-y-0.5">
      {skillGroups.map((group, i) => {
        const isOpen = openToggles.has(i);

        return (
          <div key={group.category}>
            {/* Toggle Header */}
            <div
              onClick={() => toggleGroup(i)}
              className="flex items-center gap-1 py-1 px-1 cursor-pointer notion-block-hover group"
            >
              <div
                className="notion-toggle-arrow"
                style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                <ChevronRight className="w-4 h-4" />
              </div>
              <span className="mr-1.5 text-base">{group.emoji}</span>
              <span className="text-sm font-medium text-foreground">{group.category}</span>
              <span className="text-xs text-muted-foreground ml-2">
                {group.items.length}
              </span>
            </div>

            {/* Toggle Content */}
            {isOpen && (
              <div className="ml-[30px] py-1 flex flex-wrap gap-1.5 animate-fade-in">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`notion-tag text-sm py-0.5 ${item.color}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
