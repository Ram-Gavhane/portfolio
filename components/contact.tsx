"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "work.ramgavhane@gmail.com",
    href: "mailto:work.ramgavhane@gmail.com",
  },
  {
    icon: Phone,
    label: "962-321-2311",
    href: "tel:+919623212311",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/ram-gavhane",
    href: "https://linkedin.com/in/ram-gavhane",
  },
  {
    icon: Github,
    label: "github.com/Ram-Gavhane",
    href: "https://github.com/Ram-Gavhane",
  },
];

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center mb-10 max-w-lg">
        <p className="text-lg text-muted-foreground font-mono">
           Open to opportunities, collaborations, and building scalable software. Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 p-6 bg-secondary/20 border border-border/50 rounded-2xl hover:bg-foreground hover:text-background transition-all hover:scale-[1.02]"
            >
              <div className="p-3 bg-background rounded-full group-hover:bg-background/20 group-hover:text-background transition-colors shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-sm">{link.label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-16 pt-8 border-t border-border/50 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-xs">
        <span>© 2026 Ram Gavhane. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <span>Built with <a href="https://nextjs.org" className="text-foreground hover:underline">Next.js</a></span>
        </div>
      </div>
    </div>
  );
}
