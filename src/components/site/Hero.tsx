import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT, SLIDES, FEATURES } from "./data";

export function Hero() {
  const [i, setI] = useState(0);
  const slide = SLIDES[i]!;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="accueil" className="relative">
      <div className="relative h-screen min-h-[620px] w-full overflow-hidden">
        {SLIDES.map((s, idx) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
            aria-hidden={idx !== i}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`size-full object-cover ${idx === i ? "ken-burns" : ""}`}
              width={1920}
              height={1088}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0" style={{ backgroundImage: "var(--overlay-dark)" }} />
          </div>
        ))}

        <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-5 pt-28 lg:px-8">
          <div key={i} className="reveal-up max-w-3xl">
            <p className="font-display text-[0.75rem] font-bold tracking-[0.24em] uppercase text-primary-glow">
              {slide.subtitle}
            </p>
            <h1 className="mt-5 text-4xl leading-[1.02] text-secondary-foreground sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-xl text-base text-secondary-foreground/75 sm:text-lg">{slide.desc}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                className="inline-flex items-center gap-3 px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.14em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-copper)" }}
              >
                <MessageCircle className="size-4" />
                Consultation gratuite
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-secondary-foreground/40 px-8 py-4 font-display text-[0.8rem] font-bold tracking-[0.14em] uppercase text-secondary-foreground transition-colors hover:bg-secondary-foreground hover:text-secondary"
              >
                Nos services
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-5 z-20 flex gap-2 sm:bottom-14 lg:left-8">
          {SLIDES.map((s, idx) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[3px] transition-all ${idx === i ? "w-12 bg-primary-glow" : "w-6 bg-secondary-foreground/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="relative z-10 -mt-4 sm:-mt-8 grid gap-px bg-border shadow-[var(--shadow-panel)] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-card p-8">
              <h3 className="text-lg text-card-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
          <div className="surface-dark p-8">
            <p className="flex items-end gap-2">
              <span className="font-display text-4xl font-extrabold text-primary-glow">4</span>
              <span className="pb-1 font-display text-sm font-bold tracking-[0.12em] uppercase">métiers réunis</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-75">
              Aluminium, bois, fer et inox chez un seul artisan : un interlocuteur unique du relevé de mesures à la pose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
