"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Settings,
  ChevronsLeft,
  Menu,
  Clock,
  Star,
  MoreHorizontal,
  MessageSquare,
} from "lucide-react";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import LocationMention from "./location";
import SearchModal, { SearchItem } from "./search-modal";

interface NavItem {
  id: string;
  emoji: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "about", emoji: "🙋‍♂️", label: "About" },
  { id: "projects", emoji: "🚀", label: "Projects" },
  { id: "skills", emoji: "🔧", label: "Skills" },
  { id: "contact", emoji: "📬", label: "Contact" },
];

const searchItems: SearchItem[] = [
  // ── Sections ──
  { id: "about", emoji: "🙋‍♂️", label: "About", category: "Section", description: "Who I am, education, focus, and achievements" },
  { id: "projects", emoji: "🚀", label: "Projects", category: "Section", description: "CSPS, Observiq, Kanvas, Brainly, Course Selling" },
  { id: "skills", emoji: "🔧", label: "Skills", category: "Section", description: "Languages, Full Stack, Databases, DevOps & Tools" },
  { id: "contact", emoji: "📬", label: "Contact", category: "Section", description: "Get in touch via Email, LinkedIn, GitHub, Resume" },

  // ── About Details ──
  { id: "about-focus", emoji: "💻", label: "Development Focus", category: "About", description: "Next.js, React ecosystem, scalable web apps & real-time communication" },
  { id: "about-education", emoji: "🎓", label: "Education: B.Tech in IT", category: "About", description: "PES Modern College of Engineering, Pune (Nov 2022 — Jun 2026)" },
  { id: "about-achievements", emoji: "🏆", label: "Achievements", category: "About", description: "LeetCode & GFG 250+ solved, 4th Place TechnoFEA Hackathon" },

  // ── Projects ──
  { id: "project-csps-centralized-student-placement-system", emoji: "🌐", label: "CSPS - Centralized Student Placement System", category: "Project", description: "Next.js, TypeScript, PostgreSQL, Node.js, Auth0 eligibility filtering portal" },
  { id: "project-observiq", emoji: "🌐", label: "Observiq", category: "Project", description: "Next.js, TypeScript, PostgreSQL, Bun, Redis Streams distributed uptime monitor" },
  { id: "project-kanvas", emoji: "🐙", label: "Kanvas", category: "Project", description: "Next.js, TypeScript, PostgreSQL, WebSockets collaborative real-time drawing platform" },
  { id: "project-brainly-a-second-brain", emoji: "🐙", label: "Brainly — A Second Brain", category: "Project", description: "React, TypeScript, MongoDB, Node.js knowledge organizer for YT, tweets, docs" },
  { id: "project-course-selling-app", emoji: "🐙", label: "Course Selling App", category: "Project", description: "React, JavaScript, MongoDB, Node.js educational platform for purchasing courses" },

  // ── Skill Groups ──
  { id: "skill-group-languages", emoji: "⌨️", label: "Languages", category: "Skill Group", description: "Python, Java, C++, Rust" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "Full Stack", category: "Skill Group", description: "React, Next.js, HTML5, CSS, JS, TS, Node.js, Express, WebSockets, REST APIs" },
  { id: "skill-group-databases", emoji: "💽", label: "Databases", category: "Skill Group", description: "MySQL, MongoDB, PostgreSQL, Redis" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "DevOps & Tools", category: "Skill Group", description: "Docker, AWS, Kubernetes, Prometheus, Grafana, Git, Turborepo, Prisma" },

  // ── Individual Skills ──
  // Languages
  { id: "skill-group-languages", emoji: "⌨️", label: "Python", category: "Skill", description: "Programming Language" },
  { id: "skill-group-languages", emoji: "⌨️", label: "Java", category: "Skill", description: "Programming Language" },
  { id: "skill-group-languages", emoji: "⌨️", label: "C++", category: "Skill", description: "Programming Language" },
  { id: "skill-group-languages", emoji: "⌨️", label: "Rust", category: "Skill", description: "Programming Language" },
  // Full Stack
  { id: "skill-group-full-stack", emoji: "🏗️", label: "HTML5 & CSS", category: "Skill", description: "Web structures, styles, layouts" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "JavaScript", category: "Skill", description: "Dynamic scripting and frontend behavior" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "TypeScript", category: "Skill", description: "Typed JavaScript dialect for robust apps" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "React", category: "Skill", description: "Frontend library for component architecture" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "Next.js", category: "Skill", description: "Full-stack framework with SSR, SSG, Turbopack" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "Node.js & Express.js", category: "Skill", description: "Backend server-side APIs runtime and framework" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "Websockets", category: "Skill", description: "Real-time bi-directional messaging communication" },
  { id: "skill-group-full-stack", emoji: "🏗️", label: "REST APIs", category: "Skill", description: "Designing clean endpoints and request/response structures" },
  // Databases
  { id: "skill-group-databases", emoji: "💽", label: "MySQL", category: "Skill", description: "Relational database system" },
  { id: "skill-group-databases", emoji: "💽", label: "MongoDB", category: "Skill", description: "Document-oriented NoSQL database" },
  { id: "skill-group-databases", emoji: "💽", label: "PostgreSQL", category: "Skill", description: "Advanced relational database system" },
  { id: "skill-group-databases", emoji: "💽", label: "Redis", category: "Skill", description: "In-memory caching and message broker" },
  // DevOps & Tools
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Docker", category: "Skill", description: "Containerization and software packaging" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "AWS", category: "Skill", description: "Cloud infrastructure services" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Kubernetes", category: "Skill", description: "Container orchestration platform" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Prometheus & Grafana", category: "Skill", description: "Monitoring, alerts, and system health dashboards" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Git", category: "Skill", description: "Distributed version control system" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Turborepo", category: "Skill", description: "Monorepo build system toolchain" },
  { id: "skill-group-devops-tools", emoji: "🛠️", label: "Prisma", category: "Skill", description: "Node.js and TypeScript ORM for databases" },

  // ── Contact Details ──
  { id: "contact-email", emoji: "✉️", label: "Email", category: "Contact", description: "work.ramgavhane@gmail.com" },
  { id: "contact-linkedin", emoji: "💼", label: "LinkedIn", category: "Contact", description: "linkedin.com/in/ram-gavhane" },
  { id: "contact-github", emoji: "🐙", label: "GitHub", category: "Contact", description: "github.com/Ram-Gavhane" },
  { id: "contact-resume", emoji: "📄", label: "Resume (CV)", category: "Contact", description: "View Google Drive Resume" },
];

const sections: {
  id: string;
  heading: string;
  emoji: string;
  component: React.ReactNode;
}[] = [
  { id: "about", heading: "About", emoji: "👤", component: <About /> },
  { id: "projects", heading: "Projects", emoji: "🗂️", component: <Projects /> },
  { id: "skills", heading: "Skills", emoji: "🛠️", component: <Skills /> },
  { id: "contact", heading: "Contact", emoji: "📬", component: <Contact /> },
];

export default function NotionPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* ── Sidebar (Desktop) ── */}
      <aside
        className={`hidden md:flex flex-col h-full bg-sidebar border-r border-border transition-all duration-200 flex-shrink-0 ${
          sidebarOpen ? "w-[240px]" : "w-0 overflow-hidden border-r-0"
        }`}
      >
        {/* Workspace Header */}
        <div className="flex items-center justify-between px-3 py-2.5 group">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white text-[10px] font-bold flex-shrink-0">
              R
            </div>
            <span className="text-sm font-medium text-foreground truncate">
              Ram&apos;s Workspace
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-sidebar-hover text-muted-foreground"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-2 mb-1">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 w-full px-2 py-1 text-sm text-muted-foreground rounded hover:bg-sidebar-hover transition-colors group/search"
          >
            <div className="flex items-center gap-2 flex-1">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </div>
            <div className="hidden group-hover/search:flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-sidebar text-[10px] text-muted-foreground">
              <span className="text-[8px]">⌘</span>K
            </div>
          </button>
        </div>

        {/* Navigation */}
        <div className="px-2 flex-1 overflow-y-auto">
          <div className="mb-4">
            <div className="px-2 py-1.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                Pages
              </span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 w-full px-2 py-1 text-sm text-foreground rounded hover:bg-sidebar-hover transition-colors text-left"
              >
                <span className="text-base w-5 text-center">{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1NmK-1uVnZQvjsEsa0EK7SwOA73YpuEAp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full px-2 py-1 text-sm text-foreground rounded hover:bg-sidebar-hover transition-colors text-left"
            >
              <span className="text-base w-5 text-center">📄</span>
              <span>Resume</span>
            </a>
          </div>

          {/* Favorites section */}
          <div className="mb-4">
            <div className="px-2 py-1.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                Favorites
              </span>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 w-full px-2 py-1 text-sm text-foreground rounded hover:bg-sidebar-hover transition-colors text-left"
            >
              <span className="text-base w-5 text-center">⭐</span>
              <span>Projects</span>
            </button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="px-2 py-2 border-t border-border space-y-0.5">

          <button className="flex items-center gap-2 w-full px-2 py-1 text-sm text-muted-foreground rounded hover:bg-sidebar-hover transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings & members</span>
          </button>
        </div>
      </aside>

      {/* Sidebar Toggle (when collapsed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="hidden md:flex items-center justify-center w-8 h-8 fixed left-3 top-3 z-40 rounded hover:bg-secondary transition-colors text-muted-foreground"
        >
          <Menu className="w-4 h-4" />
        </button>
      )}

      {/* ── Mobile Header ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-3 py-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded hover:bg-secondary transition-colors text-muted-foreground"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white text-[10px] font-bold">
              R
            </div>
            <span className="text-sm font-medium text-foreground">
              Ram&apos;s Workspace
            </span>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-background border-b border-border px-3 py-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-foreground rounded hover:bg-secondary transition-colors text-left"
              >
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1NmK-1uVnZQvjsEsa0EK7SwOA73YpuEAp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-foreground rounded hover:bg-secondary transition-colors text-left"
            >
              <span className="text-base">📄</span>
              <span>Resume</span>
            </a>
          </div>
        )}
      </div>

      {/* ── Main Content Area ── */}
      <main
        ref={contentRef}
        className="flex-1 overflow-y-auto overflow-x-hidden"
      >
        {/* Cover Image */}
        <div className="w-full h-[28vh] min-h-[180px] max-h-[280px] relative overflow-hidden bg-muted">
          <img 
            src="/bg-img.jpg" 
            alt="Cover" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle grain texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Notion-style "Change cover" hint on hover */}
          <div className="absolute bottom-3 right-4 opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded shadow-sm">
              Change cover
            </span>
          </div>
        </div>

        {/* Page Icon */}
        <div className="max-w-[900px] mx-auto px-12 md:px-24 relative">
          <div className="relative -mt-16 mb-4">
            <div className="w-[124px] h-[124px] rounded-[30px] overflow-hidden border-[4px] border-background shadow-xl bg-background group cursor-pointer hover:scale-[1.02] transition-transform duration-200">
              <img 
                src="/profile.jpg" 
                alt="Ram Gavhane" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Page Title */}
          <div className="mb-1">
            <h1 className="notion-title" style={{ fontFamily: 'var(--font-serif), Lyon-Text, Georgia, "Times New Roman", serif' }}>
              Ram Gavhane
              <span className="inline-block w-[2px] h-[2.2rem] bg-foreground ml-1 align-middle animate-cursor-blink" />
            </h1>
          </div>

          {/* Breadcrumb & Controls Bar */}
          <div className="flex items-center justify-between mt-2.5 mb-6">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-hidden">
              <span>Ram&apos;s Workspace</span>
              <span className="text-muted-foreground/50">/</span>
              <span>Portfolio</span>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-foreground font-medium">Ram Gavhane</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-muted-foreground">
              <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                <Clock className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                <Star className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded hover:bg-secondary transition-colors">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── Page Properties ── */}
          <div className="mb-6 space-y-1">
            <div className="flex items-center gap-3 py-1 notion-block-hover px-1">
              <span className="notion-property-label">Role</span>
              <span className="notion-property-value">Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-3 py-1 notion-block-hover px-1">
              <span className="notion-property-label">Location</span>
              <span className="notion-property-value">
                <LocationMention />
              </span>
            </div>
            <div className="flex items-center gap-3 py-1 notion-block-hover px-1">
              <span className="notion-property-label">Status</span>
              <span className="notion-property-value flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-notion-green animate-pulse" />
                <span className="notion-tag bg-notion-green-bg text-notion-green text-sm">
                  Available for work
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 py-1 notion-block-hover px-1">
              <span className="notion-property-label">Resume</span>
              <span className="notion-property-value">
                <a
                  href="https://drive.google.com/file/d/1NmK-1uVnZQvjsEsa0EK7SwOA73YpuEAp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notion-link text-notion-blue"
                >
                  Ram_Gavhane_Resume.pdf
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 py-1 notion-block-hover px-1">
              <span className="notion-property-label">Last edited</span>
              <span className="notion-text-sm">March 21, 2026</span>
            </div>
          </div>

          <hr className="notion-divider mb-2" />

          {/* ── Content Blocks ── */}
          <div className="pb-24 pt-2 md:pt-0 space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                {/* Notion H2 Heading */}
                <div className="flex items-center gap-2 notion-h2 mb-3 group">
                  <div className="notion-drag-handle -ml-6 hidden md:block">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <circle cx="4.5" cy="3.5" r="1.2" />
                      <circle cx="9.5" cy="3.5" r="1.2" />
                      <circle cx="4.5" cy="7" r="1.2" />
                      <circle cx="9.5" cy="7" r="1.2" />
                      <circle cx="4.5" cy="10.5" r="1.2" />
                      <circle cx="9.5" cy="10.5" r="1.2" />
                    </svg>
                  </div>
                  <span>{section.emoji}</span>
                  <span>{section.heading}</span>
                </div>

                {/* Section Content */}
                <div className="pl-0">{section.component}</div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={searchItems}
        onSelect={scrollToSection}
      />
    </div>
  );
}
