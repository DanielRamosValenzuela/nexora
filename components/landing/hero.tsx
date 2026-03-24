"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Beam types & factory ── */
interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

const LAYERS = 3;
const BEAMS_PER_LAYER = 6;

function createBeam(w: number, h: number, layer: number): Beam {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    width: 8 + layer * 4,
    length: h * 2.5,
    angle: -35 + Math.random() * 10,
    speed: 0.15 + layer * 0.15 + Math.random() * 0.15,
    opacity: 0.04 + layer * 0.03 + Math.random() * 0.04,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.008 + Math.random() * 0.012,
    layer,
  };
}

/* ── Rotating words ── */
const rotatingWords = [
  "inteligente",
  "eficiente",
  "escalable",
  "innovador",
  "confiable",
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const rafRef = useRef(0);
  const [wordIndex, setWordIndex] = useState(0);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  /* Beam canvas animation */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      beamsRef.current = [];
      for (let l = 1; l <= LAYERS; l++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(createBeam(window.innerWidth, window.innerHeight, l));
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Clear with transparent — the video/celestial shows through
      ctx.clearRect(0, 0, w, h);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -50) {
          beam.y = h + 50;
          beam.x = Math.random() * w;
        }

        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate((beam.angle * Math.PI) / 180);

        const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4));
        const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
        grad.addColorStop(0, `rgba(6,182,212,0)`);
        grad.addColorStop(0.2, `rgba(6,182,212,${pulsingOpacity * 0.5})`);
        grad.addColorStop(0.5, `rgba(6,182,212,${pulsingOpacity})`);
        grad.addColorStop(0.8, `rgba(6,182,212,${pulsingOpacity * 0.5})`);
        grad.addColorStop(1, `rgba(6,182,212,0)`);

        ctx.fillStyle = grad;
        ctx.filter = `blur(${2 + beam.layer * 2}px)`;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* Rotating word timer */
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      {/* Light overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/50 via-[#060b18]/20 to-[#060b18]/70" />

      {/* Beam canvas — transparent bg, teal beams overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      />

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
          <span className="relative flex w-full justify-center overflow-hidden h-[1.15em]">
            &nbsp;
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="absolute text-gradient-teal"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
              >
                software {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
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
