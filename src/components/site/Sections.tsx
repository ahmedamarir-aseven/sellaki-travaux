import { useState } from "react";
import { ArrowRight, Check, MapPin, Minus, Plus, Quote, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { CONTACT, SERVICES, STEPS, PROJECTS, FAQ, ZONES, TESTIMONIALS } from "./data";

export function About() {
  return (
    <section id="entreprise" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={about1}
            alt="Artisan Sellaki Travaux prenant les mesures d'un châssis aluminium"
            className="w-full object-cover"
            width={900}
            height={1100}
            loading="lazy"
          />
          <img
            src={about2}
            alt="Cuisine équipée en bois réalisée sur mesure"
            className="absolute -bottom-10 -right-4 hidden w-1/2 border-8 border-background object-cover shadow-[var(--shadow-panel)] sm:block"
            width={900}
            height={700}
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow">Sellaki Travaux — Marrakech</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
            L'artisan finition qui livre à la date promise.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Sellaki Travaux réalise les travaux de finition de haute précision à Marrakech : châssis et portes en
            aluminium, menuiserie bois, ferronnerie et inox. Nous intervenons sur les constructions neuves comme sur les
            rénovations, chez les particuliers comme chez les promoteurs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Notre promesse tient en trois mots : l'atqan, la qualité, le respect du délai. Chaque pièce est fabriquée
            aux mesures exactes de votre espace et posée par la même équipe qui l'a dessinée.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Mesures relevées sur place, fabrication 100 % sur mesure",
              "Aluminium, bois, fer et inox chez un seul contractant",
              "Date de livraison engagée par écrit dans le devis",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.whatsapp}
            className="mt-10 inline-flex items-center gap-3 bg-secondary px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.14em] uppercase text-secondary-foreground transition-colors hover:bg-primary"
          >
            <MessageCircle className="size-4" />
            Demander une visite gratuite
          </a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="surface-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Nos métiers</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">Aluminium, bois, fer et inox.</h2>
          </div>
          <p className="text-base leading-relaxed opacity-70">
            Quatre spécialités réunies sous le même toit pour couvrir toute la finition de votre maison, sans avoir à
            coordonner plusieurs fournisseurs ni à jongler avec les plannings.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-secondary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article key={s.title} className="group surface-dark p-0">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-65">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm opacity-85">
                      <span className="mt-2 size-1.5 shrink-0 bg-primary-glow" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Comment on travaille</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
            Trois étapes, une date de livraison qui tient.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            De la première visite à la pose finale, vous savez ce qui se passe et quand. Pas de rallonge de délai, pas
            de coût surprise en cours de chantier.
          </p>
        </div>
        <div className="grid gap-px bg-border">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-6 bg-card p-8">
              <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
              <div>
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="realisations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <p className="eyebrow">Réalisations</p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-tight sm:text-5xl">
          Des finitions livrées à Marrakech et ses environs.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
              <p className="mt-5 font-display text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary">
                {p.cat}
              </p>
              <h3 className="mt-2 text-lg leading-snug">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Pourquoi Sellaki</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">Pas de problèmes, pas de retards.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {FAQ.map((f, idx) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold">{f.q}</span>
                  {open === idx ? (
                    <Minus className="size-5 shrink-0 text-primary" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-primary" />
                  )}
                </button>
                {open === idx && <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="bg-card p-8 shadow-[var(--shadow-card)]">
              <Quote className="size-6 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-card-foreground">“{t.quote}”</p>
              <footer className="mt-5 font-display text-[0.7rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                {t.name} — {t.role}
              </footer>
            </blockquote>
          ))}
          <div className="surface-dark p-8 sm:col-span-2">
            <p className="font-display text-xl">Consultation et devis gratuits, sans engagement.</p>
            <a
              href={CONTACT.whatsapp}
              className="mt-6 inline-flex items-center gap-3 px-7 py-3.5 font-display text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-copper)" }}
            >
              <MessageCircle className="size-4" />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Zones() {
  return (
    <section id="zones" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="eyebrow">Zones d'intervention</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">Tous les quartiers de Marrakech.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Nous nous déplaçons dans toute la ville et sa périphérie pour le relevé de mesures et la pose.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
            {ZONES.map((z) => (
              <li key={z} className="flex items-center gap-2 bg-background px-5 py-4 text-sm">
                <MapPin className="size-4 shrink-0 text-primary" />
                {z}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="surface-dark">
      <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-2">
        <div className="min-h-[420px]">
          <iframe
            title="Sellaki Travaux à Marrakech"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-8.09%2C31.58%2C-7.92%2C31.68&layer=mapnik"
            className="size-full min-h-[420px] border-0 grayscale"
            loading="lazy"
          />
        </div>
        <div className="p-10 lg:p-16">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            Envoyez-nous un message pour une visite et un devis gratuits.
          </h2>
          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary-glow" />
              <a href={CONTACT.phoneHref} className="hover:text-primary-glow">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary-glow" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-glow">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary-glow" />
              <span className="opacity-80">{CONTACT.address}</span>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary-glow" />
              <span className="opacity-80">{CONTACT.hours.join(" · ")}</span>
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-3 bg-whatsapp px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.14em] uppercase text-secondary transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              Contacter via WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 border border-secondary-foreground/40 px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.14em] uppercase transition-colors hover:bg-secondary-foreground hover:text-secondary"
            >
              Appeler
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-background pt-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img
            src="/logo.png"
            alt="Sellaki Travaux"
            className="h-16 w-auto"
            width={220}
            height={150}
            loading="lazy"
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Châssis, portes, cuisines, placards et garde-corps sur mesure à Marrakech. Aluminium, bois, ferronnerie et
            inox — l'atqan et la qualité, livrés dans les délais.
          </p>
        </div>
        <div>
          <h3 className="font-display text-[0.75rem] font-bold tracking-[0.2em] uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition-colors hover:text-primary">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-[0.75rem] font-bold tracking-[0.2em] uppercase">Contact rapide</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} className="transition-colors hover:text-primary">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
            <li>Marrakech, Maroc</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sellaki Travaux — Tous droits réservés.
      </div>
    </footer>
  );
}
