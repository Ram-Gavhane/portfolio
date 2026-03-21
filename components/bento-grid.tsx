"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase, User, Mail, Award, ArrowRight, X, MapPin } from "lucide-react";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Achievements from "./achievements";
import LocationCard from "./location";

type AspectId = "about" | "projects" | "skills" | "contact" | "achievements" | "location" | null;

interface BentoItem {
  id: AspectId;
  title: string;
  icon: React.ElementType;
  description: string;
  className: string;
  component: React.ReactNode;
  customContent?: React.ReactNode;
}

const bentoItems: BentoItem[] = [
  {
    id: "about",
    title: "About Me",
    icon: User,
    description: "Engineering the future. Full-stack developer crafting scalable systems and minimal architectures.",
    className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-background border-border/40",
    component: <About />,
  },
  {
    id: "location",
    title: "Location",
    icon: MapPin,
    description: "Pune, India",
    className: "col-span-1 md:col-span-1 row-span-1 bg-background border-border/40 p-0 sm:p-0",
    component: <LocationCard />,
    customContent: <LocationCard />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: Briefcase,
    description: "Selected works and experiments. Take a look at the scalable solutions I've built.",
    className: "col-span-1 md:col-span-2 row-span-1 bg-background border-border/40",
    component: <Projects />,
  },
  {
    id: "skills",
    title: "Technical Arsenal",
    icon: Code2,
    description: "Next.js, React, TypeScript, scalable backends, and brutalist UI design.",
    className: "col-span-1 md:col-span-1 row-span-1 md:row-span-2 bg-background border-border/40",
    component: <Skills />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    description: "Let's build together. Open to collaborations and exploring minimalist design.",
    className: "col-span-1 md:col-span-2 row-span-1 bg-background border-border/40",
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
      {/* Minimal background noise/texture instead of heavy gradients */}
      <div className="absolute inset-0 z-0 bg-background opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 h-full min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-2"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter font-medium text-foreground">Ram Gavhane.</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-3 font-sans font-light tracking-wide">Full-Stack Engineer. Minimalist.</p>
          </div>
          <div className="flex gap-4 pb-2 md:pb-3">
            <div className="flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-foreground bg-background border border-border/40 px-5 py-2.5 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`group cursor-pointer rounded-3xl border p-6 sm:p-8 overflow-hidden backdrop-blur-sm hover:border-foreground/30 transition-all duration-500 shadow-sm flex flex-col justify-between ${item.className}`}
              >
                {item.customContent ? (
                  item.customContent
                ) : (
                  <>
                    <div className="flex justify-between items-start">
                      <div className="p-3.5 bg-secondary/30 rounded-2xl group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                        <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    <div className="mt-8 z-10 relative">
                      <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-2 group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed opacity-80">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative w-full max-w-4xl h-full max-h-[85vh] md:max-h-[90vh] bg-background border border-border/40 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col ${selectedItem.className.replace(/md:row-span-\d|md:col-span-\d|col-span-\d/g, "")}`}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 sm:p-8 border-b border-border/20 bg-background/80 sticky top-0 z-10 backdrop-blur-2xl">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-secondary/30 text-foreground rounded-2xl shadow-sm border border-border/30">
                    <selectedItem.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-medium">
                      {selectedItem.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-3 rounded-full hover:bg-secondary/50 bg-secondary/20 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="p-6 sm:p-8 md:p-12 overflow-y-auto scrollbar-hide flex-1 bg-background">
                <div className="max-w-3xl mx-auto">
                  {selectedItem.component}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
