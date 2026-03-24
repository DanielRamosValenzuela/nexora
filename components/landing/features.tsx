import { ShieldCheck, Zap, Users, Headphones } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  wide?: boolean;
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Enfoque personalizado",
    description:
      "No vendemos soluciones genéricas. Cada proyecto comienza con un análisis profundo de tu negocio para crear algo que realmente funcione para ti.",
    wide: true,
  },
  {
    icon: Zap,
    title: "Tecnología de vanguardia",
    description:
      "Utilizamos las herramientas y frameworks más modernos para construir software robusto, escalable y preparado para el futuro.",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description:
      "Desarrolladores senior con experiencia en múltiples industrias y tecnologías trabajando dedicados a tu proyecto.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description:
      "No desaparecemos después de la entrega. Te acompañamos con mantenimiento, actualizaciones y soporte técnico permanente.",
    wide: true,
  },
];

export function Features() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 px-4">

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-teal uppercase tracking-widest">
            ¿Por qué Nexora?
          </span>
          <h2 className="font-heading mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Tu socio tecnológico{" "}
            <span className="text-gradient-teal">de confianza</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn
              key={f.title}
              delay={0.1 * i}
              className={f.wide ? "lg:col-span-2" : ""}
            >
              <div className="card-glow group h-full rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-8">
                <div className="mb-5 inline-flex items-center justify-center size-12 rounded-lg bg-teal/10 text-teal group-hover:bg-teal/20 transition-colors">
                  <f.icon className="size-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
