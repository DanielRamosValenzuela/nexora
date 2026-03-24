import Link from "next/link";
import { Globe, MessageCircle, Users, Link2 } from "lucide-react";

const sections = [
  {
    title: "Servicios",
    links: [
      { name: "Automatización", href: "#servicios" },
      { name: "Digitalización", href: "#servicios" },
      { name: "Software a medida", href: "#servicios" },
      { name: "Integración", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Proceso", href: "#proceso" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Contacto", href: "#contacto" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { name: "Centro de ayuda", href: "#" },
      { name: "Documentación", href: "#" },
      { name: "Estado del servicio", href: "#" },
      { name: "SLA", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Web" },
  { icon: MessageCircle, href: "#", label: "Chat" },
  { icon: Users, href: "#", label: "Comunidad" },
  { icon: Link2, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { name: "Términos y condiciones", href: "/terminos" },
  { name: "Política de privacidad", href: "/privacidad" },
];

export function Footer() {
  return (
    <footer className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Brand column */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold tracking-[-0.02em]">
                <span className="text-gradient-teal">NEX</span>
                <span className="text-foreground">ORA</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos procesos manuales en software inteligente. Tu socio
              tecnológico de confianza.
            </p>
            <ul className="flex items-center gap-5 text-muted-foreground">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="hover:text-teal-light transition-colors"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid w-full gap-8 sm:grid-cols-3 lg:gap-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-semibold text-sm">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-teal-light transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-teal/[0.08] pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="order-2 lg:order-1">
            &copy; {new Date().getFullYear()} Nexora. Todos los derechos
            reservados.
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-4">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-teal-light transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
