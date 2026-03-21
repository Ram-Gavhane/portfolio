"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-border mt-12 bg-grid-white/[0.02] bg-[size:40px_40px]">
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-secondary-foreground/50 font-mono text-sm uppercase tracking-widest">04. Initiate contact</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-foreground">Let's build <span className="text-muted-foreground">together.</span></h2>
          <p className="text-lg text-muted-foreground font-mono mb-12">
             Open to opportunities, collaborations, and building scalable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col items-center gap-3 p-6 bg-secondary/30 border border-border rounded-xl hover:bg-foreground hover:text-background transition-all"
              >
                <div className="p-3 bg-background rounded-full group-hover:bg-background/20 group-hover:text-background transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-sm">{link.label}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-border w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-xs"
        >
          <span>© 2026 Ram Gavhane. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span>Built with <a href="https://nextjs.org" className="text-foreground hover:underline">Next.js</a></span>
            <span className="text-border">|</span>
            <span>Designed for the web</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
