"use client";

const links = [
  {
    emoji: "📧",
    label: "Email",
    value: "work.ramgavhane@gmail.com",
    href: "mailto:work.ramgavhane@gmail.com",
  },
  {
    emoji: "📱",
    label: "Phone",
    value: "962-321-2311",
    href: "tel:+919623212311",
  },
  {
    emoji: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/ram-gavhane",
    href: "https://linkedin.com/in/ram-gavhane",
  },
  {
    emoji: "🐙",
    label: "GitHub",
    value: "github.com/Ram-Gavhane",
    href: "https://github.com/Ram-Gavhane",
  },
];

export default function Contact() {
  return (
    <div className="w-full">
      <p className="notion-text mb-4">
        Open to opportunities, collaborations, and building scalable software. Feel free to reach out through any of the channels below.
      </p>

      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="notion-callout bg-secondary hover:bg-[rgba(55,53,47,0.06)] transition-colors group"
          >
            <span className="text-xl leading-none flex-shrink-0">{link.emoji}</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
              <span className="text-sm font-medium text-foreground">{link.label}</span>
              <span className="text-sm text-notion-blue group-hover:underline underline-offset-2 truncate">
                {link.value}
              </span>
            </div>
          </a>
        ))}
      </div>

      <hr className="notion-divider mt-6 mb-3" />
      <p className="notion-text-sm text-center">
        © 2026 Ram Gavhane · Built with{" "}
        <a href="https://nextjs.org" className="notion-link" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </p>
    </div>
  );
}
