"use client";

const achievements = [
  {
    highlight: "250+",
    description: "LeetCode & GFG problems solved",
  },
  {
    highlight: "4th Place",
    description: "TechnoFEA Hackathon — among 800 teams, VIIT Pune",
  }
];

export default function Achievements() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="p-8 border border-border/50 rounded-2xl bg-secondary/10 hover:bg-secondary/30 transition-colors"
          >
            <span className="text-4xl md:text-5xl font-bold font-mono text-primary block mb-4">
              {a.highlight}
            </span>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              {a.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
