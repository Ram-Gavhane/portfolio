"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X } from "lucide-react";

interface SearchItem {
  id: string;
  emoji: string;
  label: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: SearchItem[];
  onSelect: (id: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  items,
  onSelect,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        if (filteredItems[selectedIndex]) {
          onSelect(filteredItems[selectedIndex].id);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, onSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-start justify-center pt-[15vh] pointer-events-none z-[101] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full max-w-[600px] bg-sidebar border border-border shadow-2xl rounded-xl overflow-hidden pointer-events-auto"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search pages or sections..."
                  className="flex-1 bg-transparent border-none outline-none text-base text-foreground placeholder:text-muted-foreground"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                />
                <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-border bg-muted/50">
                  <span className="text-[10px] font-medium text-muted-foreground">ESC</span>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    <div className="px-2 py-1 mb-1">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Quick Actions
                      </span>
                    </div>
                    {filteredItems.map((item, index) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                          onSelect(item.id);
                          onClose();
                        }}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-colors text-left group ${
                          selectedIndex === index
                            ? "bg-sidebar-hover text-foreground"
                            : "text-muted-foreground hover:bg-sidebar-hover/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`${selectedIndex === index ? "text-lg" : "text-base"} transition-all`}>
                            {item.emoji}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <div className={`transition-opacity duration-200 ${selectedIndex === index ? "opacity-100" : "opacity-0"}`}>
                           <Command className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-muted-foreground">No results for &quot;{query}&quot;</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-border bg-muted/20 flex items-center justify-between text-[11px] text-muted-foreground">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↑↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↵</kbd>
                    to select
                  </span>
                </div>
                <div>
                   Notion-style search
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
