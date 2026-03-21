"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-bold rounded-sm group-hover:bg-neutral-300 transition-colors">
            RG
          </div>
          <span className="font-mono text-sm hidden sm:block text-muted-foreground group-hover:text-foreground transition-colors">
            ~/portfolio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <span className="text-neutral-500">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/ramgavhane"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-mono border border-border text-foreground rounded hover:bg-secondary transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground z-50 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 w-4 ${mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center"
                >
                  <span className="text-neutral-500 font-mono text-base mb-1">0{i + 1}.</span>
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/ramgavhane"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 text-lg font-mono border border-border text-foreground rounded hover:bg-secondary transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
