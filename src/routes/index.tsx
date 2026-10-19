import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About, Services, Process, Projects, WhyUs, Zones, Contact, Footer } from "@/components/site/Sections";
import { CONTACT } from "@/components/site/data";

const title = "Sellaki Travaux | Aluminium, bois, fer & inox à Marrakech";
const description =
  "Sellaki Travaux réalise vos châssis, portes, cuisines, placards et garde-corps sur mesure à Marrakech. Aluminium, bois, ferronnerie et inox — devis et visite gratuits.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyUs />
        <Zones />
        <Contact />
      </main>
      <Footer />
      <a
        href={CONTACT.whatsapp}
        aria-label="Contacter Sellaki Travaux sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-secondary shadow-[var(--shadow-panel)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
