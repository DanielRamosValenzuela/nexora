import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 px-4">

      <div className="relative z-10 mx-auto max-w-4xl">
        <FadeIn scale direction="none">
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-16 text-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/[0.15] via-transparent to-teal-dark/[0.08]" />
            <div className="absolute inset-0 rounded-2xl border border-teal/20 backdrop-blur-md" />

            <div className="absolute -top-20 left-1/4 w-80 h-80 bg-teal/[0.08] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-teal/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                ¿Listo para{" "}
                <span className="text-gradient-teal">transformar</span>
                <br />
                tu empresa?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Agenda una consulta gratuita y descubre cómo podemos convertir
                tus procesos manuales en software que trabaje por ti.
              </p>
              <Button
                size="lg"
                className="cursor-pointer bg-teal text-deep hover:bg-teal-light font-semibold px-10 h-12 text-base shadow-[0_0_40px_-8px_rgba(6,182,212,0.45)] hover:shadow-[0_0_50px_-5px_rgba(6,182,212,0.6)] transition-shadow"
              >
                Agendar consulta gratuita
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
