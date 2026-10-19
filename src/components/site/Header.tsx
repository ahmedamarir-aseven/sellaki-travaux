import { useEffect, useState } from "react";
import { Menu, Phone, Clock, MessageCircle, X } from "lucide-react";
import { CONTACT } from "./data";

const NAV = [
  { label: "Accueil", href: "#accueil" },
  { label: "L'entreprise", href: "#entreprise" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Zones", href: "#zones" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-secondary text-secondary-foreground xl:block">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-8 py-2.5 text-xs">
          <ul className="flex flex-wrap items-center gap-7 opacity-80">
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-primary-glow" />
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-primary-glow">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-3.5 text-primary-glow" />
              <a href={CONTACT.whatsapp} className="transition-colors hover:text-primary-glow">
                WhatsApp direct
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-3.5 text-primary-glow" />
              <span>Lun – Sam : 08:00 – 19:00</span>
            </li>
          </ul>
          <p className="font-display text-[0.7rem] font-bold tracking-[0.22em] uppercase text-primary-glow">
            Consultation & visite gratuites
          </p>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 ${
          scrolled ? "bg-background/95 shadow-[var(--shadow-card)] backdrop-blur" : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3 lg:px-8">
          <a href="#accueil" className="flex items-center">
            <img
              src="/logo.png"
              alt="Sellaki Travaux — châssis, portes et garde-corps à Marrakech"
              className="h-12 w-auto lg:h-14"
              width={220}
              height={150}
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-[0.8rem] font-bold tracking-[0.12em] uppercase text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              className="hidden items-center gap-2 bg-secondary px-6 py-3.5 font-display text-[0.75rem] font-bold tracking-[0.14em] uppercase text-secondary-foreground transition-colors hover:bg-primary sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Devis gratuit
            </a>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="border-t border-border bg-background px-5 pb-5 lg:hidden">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 font-display text-sm font-bold tracking-[0.1em] uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
