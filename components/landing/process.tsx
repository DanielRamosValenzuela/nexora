"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import {
  SearchIcon,
  PenIcon,
  CodeIcon,
  RocketIcon,
} from "@/components/ui/animated-state-icons";

interface Step {
  AnimatedIcon: typeof SearchIcon;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    AnimatedIcon: SearchIcon,
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos a fondo tus procesos actuales, identificamos cuellos de botella y definimos la solución ideal junto a tu equipo.",
  },
  {
    AnimatedIcon: PenIcon,
    number: "02",
    title: "Diseño",
    description:
      "Creamos prototipos interactivos y validamos cada detalle contigo antes de escribir una sola línea de código.",
  },
  {
    AnimatedIcon: CodeIcon,
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos el software con metodologías ágiles, entregas incrementales y revisiones constantes para garantizar calidad.",
  },
  {
    AnimatedIcon: RocketIcon,
    number: "04",
    title: "Entrega y soporte",
    description:
      "Implementamos la solución, capacitamos a tu equipo y te acompañamos con soporte continuo post-lanzamiento.",
  },
];

function ProcessCard({ step, delay }: { step: Step; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const { AnimatedIcon } = step;

  return (
    <FadeIn delay={delay}>
      <div
        className="relative group cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="text-6xl font-bold text-teal/[0.07] leading-none select-none">
          {step.number}
        </span>
        <div className="mt-2 mb-4 inline-flex items-center justify-center size-14 rounded-xl bg-teal/10 border border-teal/20 text-teal group-hover:bg-teal/20 group-hover:border-teal/30 transition-colors">
          <AnimatedIcon
            size={28}
            color="#06b6d4"
            animate={hovered}
          />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-2">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {step.description}
        </p>
      </div>
    </FadeIn>
  );
}

export function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 px-4">
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-teal uppercase tracking-widest">
            Proceso
          </span>
          <h2 className="font-heading mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Cómo trabajamos
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.7]">
            Un proceso probado que garantiza resultados excepcionales en cada
            proyecto.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ProcessCard key={step.number} step={step} delay={0.15 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
