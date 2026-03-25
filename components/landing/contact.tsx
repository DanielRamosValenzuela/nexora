"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/fade-in";
import { Send, Mail, User, Building2, MessageSquare } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="relative py-24 sm:py-32 px-4">
      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-teal uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="font-heading mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            ¿Listo para{" "}
            <span className="text-gradient-teal">transformar</span> tu empresa?
          </h2>
          <p className="mt-5 text-lg text-soft max-w-2xl mx-auto leading-[1.7]">
            Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas
            con una propuesta personalizada.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Info column */}
          <FadeIn direction="left" className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Agenda tu consulta gratuita
                </h3>
                <p className="text-soft leading-[1.7]">
                  Sin compromiso. Analizamos tus procesos actuales y te
                  proponemos una solución a medida.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hola@nexora.dev",
                  },
                  {
                    icon: MessageSquare,
                    label: "Respuesta",
                    value: "En menos de 24 horas",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-teal/10 text-teal shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-soft">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form column */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/[0.08] via-transparent to-teal-dark/[0.04]" />
              <div className="absolute inset-0 rounded-2xl border border-white/[0.08] backdrop-blur-md" />

              <div className="relative p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="size-16 rounded-full bg-teal/15 flex items-center justify-center mb-6">
                      <Send className="size-7 text-teal" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="text-soft max-w-sm">
                      Gracias por contactarnos. Te responderemos en menos de 24
                      horas.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          <User className="size-3.5 text-soft" />
                          Nombre
                        </Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          required
                          className="h-11 bg-white/[0.04] border-white/[0.08] focus-visible:border-teal/40 focus-visible:ring-teal/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <Mail className="size-3.5 text-soft" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@empresa.com"
                          required
                          className="h-11 bg-white/[0.04] border-white/[0.08] focus-visible:border-teal/40 focus-visible:ring-teal/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">
                        <Building2 className="size-3.5 text-soft" />
                        Empresa{" "}
                        <span className="text-soft font-normal">
                          (opcional)
                        </span>
                      </Label>
                      <Input
                        id="company"
                        placeholder="Nombre de tu empresa"
                        className="h-11 bg-white/[0.04] border-white/[0.08] focus-visible:border-teal/40 focus-visible:ring-teal/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <MessageSquare className="size-3.5 text-soft" />
                        Cuéntanos tu proyecto
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe brevemente qué procesos quieres digitalizar o automatizar..."
                        required
                        rows={4}
                        className="bg-white/[0.04] border-white/[0.08] focus-visible:border-teal/40 focus-visible:ring-teal/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full cursor-pointer bg-teal text-deep hover:bg-teal-light font-semibold h-12 text-base shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.55)] transition-shadow"
                    >
                      Enviar mensaje
                      <Send className="ml-2 size-4" />
                    </Button>

                    <p className="text-xs text-center text-soft">
                      Al enviar aceptas nuestra política de privacidad. No
                      compartimos tus datos con terceros.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
