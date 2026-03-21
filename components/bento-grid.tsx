"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase, User, Mail, Award, ArrowUpRight, X } from "lucide-react";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Achievements from "./achievements";

type AspectId = "about" | "projects" | "skills" | "contact" | "achievements" | null;

interface BentoItem {
  id: AspectId;
  title: string;
  icon: React.ElementType;
  description: string;
  className: string;
  component: React.ReactNode;
}

const bentoItems: BentoItem[] = [
  {
    id: "about",
    title: "About Me",
    icon: User,
    description: "Engineering the future. Student & Full-Stack Developer.",
    className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20",
    component: <About />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: Code2,
    description: "My technical arsenal.",
    className: "col-span-1 md:col-span-1 row-span-1 md:row-span-2 bg-secondary/10",
    component: <Skills />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: Briefcase,
    description: "Selected works and experiments.",
    className: "col-span-1 md:col-span-2 row-span-1 bg-secondary/20",
    component: <Projects />,
  },
  {
    id: "achievements",
    title: "Achievements",
    icon: Award,
    description: "Hackathons and milestones.",
    className: "col-span-1 md:col-span-1 row-span-1 bg-secondary/30",
    component: <Achievements />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    description: "Let's build together.",
    className: "col-span-1 md:col-span-3 row-span-1 bg-gradient-to-tr from-secondary/40 to-background",
    component: <Contact />,
  },
];

export default function BentoGrid() {
  const [selectedId, setSelectedId] = useState<AspectId>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };

    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  if (!mounted) return null;

  const selectedItem = bentoItems.find((item) => item.id === selectedId);

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden selection:bg-primary/30">
      {/* Background dynamic grid pattern */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 h-full min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end gap-4 mb-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ram <span className="text-muted-foreground">Gavhane</span></h1>
            <p className="text-lg text-muted-foreground mt-2 font-mono">Full-Stack Engineer based in Pune.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for work
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                layoutId={`card-${item.id}`}
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                className={`group relative cursor-pointer rounded-3xl border border-border/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm hover:border-border/80 transition-colors flex flex-col justify-between shadow-sm hover:shadow-xl ${item.className}`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-background/50 rounded-2xl backdrop-blur-md group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  <motion.div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.div>
                </div>
                
                <div className="mt-8 z-10 relative">
                  <motion.h2 layoutId={`title-${item.id}`} className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </motion.h2>
                  <p className="text-sm md:text-base text-muted-foreground font-mono leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 sm:p-8 border-b border-border/50 bg-secondary/10 sticky top-0 z-10 backdrop-blur-xl">
                  <motion.h2 
                    layoutId={`title-${selectedItem.id}`} 
                    className="text-3xl font-bold tracking-tight flex items-center gap-4"
                  >
                    <selectedItem.icon className="w-8 h-8 text-primary" />
                    {selectedItem.title}
                  </motion.h2>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content Scroll Area */}
                <div className="p-6 sm:p-8 md:p-10 overflow-y-auto scrollbar-hide flex-1">
                  {selectedItem.component}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
