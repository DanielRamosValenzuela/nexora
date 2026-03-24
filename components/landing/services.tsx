"use client";

import { Cog, Monitor, Code2, Link2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const servicesData = [
  {
    id: 1,
    title: "Automatización",
    date: "Eficiencia operativa",
    content:
      "Eliminamos tareas repetitivas y manuales con soluciones automatizadas que aumentan la eficiencia y reducen errores operativos.",
    category: "Automatización",
    icon: Cog,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Digitalización",
    date: "Transformación digital",
    content:
      "Convertimos tus flujos de trabajo analógicos en plataformas digitales intuitivas que transforman la forma en que opera tu empresa.",
    category: "Digitalización",
    icon: Monitor,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Software a medida",
    date: "Desarrollo único",
    content:
      "Diseñamos y desarrollamos aplicaciones únicas que se adaptan perfectamente a los procesos específicos de tu negocio.",
    category: "Desarrollo",
    icon: Code2,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Integración",
    date: "Ecosistema unificado",
    content:
      "Conectamos tus herramientas existentes para crear un ecosistema digital unificado que maximiza la productividad.",
    category: "Integración",
    icon: Link2,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 80,
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32 px-4">
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="text-center mb-8">
          <span className="text-sm font-medium text-teal uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="font-heading mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Soluciones que impulsan{" "}
            <span className="text-gradient-teal">tu negocio</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.7]">
            Cada empresa es única. Haz clic en cada nodo para explorar nuestros
            servicios interconectados.
          </p>
        </FadeIn>

        {/* Orbital timeline — desktop */}
        <div className="hidden md:block">
          <RadialOrbitalTimeline timelineData={servicesData} />
        </div>

        {/* Card fallback — mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {servicesData.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="card-glow group relative h-full rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-6"
              >
                <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-teal/10 text-teal group-hover:bg-teal/20 transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
