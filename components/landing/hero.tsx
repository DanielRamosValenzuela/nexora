"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();

  // Parallax: text moves up and fades as user scrolls past the hero (first ~800px)
  const textY = useTransform(scrollY, [0, 800], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      {/* Light overlay just for the hero so text is legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/50 via-[#060b18]/20 to-[#060b18]/70" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.08] px-4 py-1.5 text-sm text-teal-light backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-teal animate-pulse" />
            Software a medida para tu empresa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading mt-8 text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-[-0.03em] leading-[1.05]"
        >
          Transformamos tus procesos en{" "}
          <span className="text-gradient-teal">software inteligente</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.7]"
        >
          Automatizamos y digitalizamos los procesos operativos de tu empresa
          con soluciones de software diseñadas a la medida de tus necesidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="cursor-pointer bg-teal text-deep hover:bg-teal-light font-semibold px-8 h-12 text-base shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.55)] transition-shadow"
          >
            Solicitar consulta
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-teal/25 text-foreground hover:bg-teal/10 px-8 h-12 text-base backdrop-blur-sm"
          >
            Ver nuestro proceso
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-teal/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
