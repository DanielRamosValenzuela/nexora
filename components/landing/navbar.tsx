"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Layers,
  GitBranch,
  Shield,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { MenuBar } from "@/components/ui/glow-menu";

/* ── Shared nav items ── */
const navItems = [
  { id: "top", icon: Home, label: "Inicio" },
  { id: "servicios", icon: Layers, label: "Servicios" },
  { id: "proceso", icon: GitBranch, label: "Proceso" },
  { id: "nosotros", icon: Shield, label: "Nosotros" },
  { id: "contacto", icon: MessageSquare, label: "Contacto" },
];

/* ── GlowMenu items (desktop) ── */
const tealGradient =
  "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.06) 50%, rgba(6,182,212,0) 100%)";

const glowMenuItems = navItems.map((item) => ({
  icon: item.icon,
  label: item.label,
  href: `#${item.id}`,
  gradient: tealGradient,
  iconColor: "text-teal",
}));

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("Inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTo = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleGlowClick = useCallback(
    (label: string) => {
      const item = navItems.find((n) => n.label === label);
      if (item) scrollTo(item.id);
    },
    [scrollTo]
  );

  useEffect(() => {
    const sections = ["contacto", "nosotros", "proceso", "servicios"];
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolled(scrollY > 50);

      if (scrollY < windowHeight * 0.5) {
        setActiveSection("Inicio");
        return;
      }

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.3) {
            const item = navItems.find((n) => n.id === id);
            if (item) setActiveSection(item.label);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP — GlowMenu top center + logo + CTA
          ════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/* Logo — top left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fixed top-5 left-6 z-50"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-[-0.02em]">
              <span className="text-gradient-teal">NEX</span>
              <span className="text-foreground">ORA</span>
            </span>
          </Link>
        </motion.div>

        {/* GlowMenu — top center */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
            isScrolled ? "" : ""
          }`}
        >
          <MenuBar
            items={glowMenuItems}
            activeItem={activeSection}
            onItemClick={handleGlowClick}
          />
        </motion.div>

        {/* CTA — top right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="fixed top-5 right-6 z-50"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-xl px-5 py-2 text-sm font-medium text-teal-light hover:bg-teal/20 hover:border-teal/30 transition-all duration-300"
          >
            <Rocket size={14} />
            Comenzar proyecto
          </button>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE — Logo top + Dock bottom
          ════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* Logo — top left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fixed top-4 left-4 z-50"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-[-0.02em]">
              <span className="text-gradient-teal">NEX</span>
              <span className="text-foreground">ORA</span>
            </span>
          </Link>
        </motion.div>

        {/* Bottom dock */}
        <motion.nav
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
          aria-label="Navegación principal"
        >
          <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-[#060b18]/70 backdrop-blur-xl border border-teal/10 shadow-[0_8px_40px_-12px_rgba(6,182,212,0.15)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === item.id;
              const activeSectionId = navItems.find(
                (n) => n.label === activeSection
              )?.id;
              const isActive = activeSectionId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Tooltip */}
                  <div
                    className={`
                      absolute -top-10 left-1/2 -translate-x-1/2
                      px-2.5 py-1 rounded-md
                      bg-deep/90 backdrop-blur
                      text-teal-light text-xs font-medium
                      border border-teal/15
                      transition-all duration-200
                      pointer-events-none whitespace-nowrap
                      ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                    `}
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2">
                      <div className="w-2 h-2 bg-deep/90 rotate-45 border-r border-b border-teal/15" />
                    </div>
                  </div>

                  <button
                    onClick={() => scrollTo(item.id)}
                    aria-label={item.label}
                    className={`
                      relative flex items-center justify-center
                      w-11 h-11 rounded-xl
                      transition-all duration-300 ease-out
                      cursor-pointer outline-none
                      focus-visible:ring-2 focus-visible:ring-teal/50
                      ${
                        isActive
                          ? "bg-teal/15 border border-teal/30 -translate-y-1"
                          : "bg-white/[0.03] border border-white/[0.06]"
                      }
                      ${
                        isHovered && !isActive
                          ? "scale-110 bg-teal/10 border-teal/20 -translate-y-1 shadow-lg shadow-teal/10"
                          : ""
                      }
                      ${
                        isHovered && isActive
                          ? "scale-110 shadow-lg shadow-teal/15"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow: isHovered
                        ? "0 4px 24px 0 rgba(6,182,212,0.12)"
                        : undefined,
                    }}
                  >
                    <Icon
                      size={18}
                      className={`
                        transition-all duration-300
                        ${isActive ? "text-teal" : "text-muted-foreground"}
                        ${isHovered ? "text-teal-light scale-105" : ""}
                      `}
                    />

                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </>
  );
}
