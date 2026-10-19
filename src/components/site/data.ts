import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import svcAlu from "@/assets/svc-alu.jpg";
import about2 from "@/assets/about-2.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";

export const CONTACT = {
  phone: "+212 6 61 00 00 00",
  phoneHref: "tel:+212661000000",
  whatsapp: "https://wa.me/212661000000",
  email: "contact@sellakitravaux.ma",
  address: "Marrakech 40000, Maroc — intervention dans tous les quartiers et les environs",
  hours: ["Lundi – Samedi : 08:00 – 19:00", "Dimanche : sur rendez-vous"],
};

export const SLIDES = [
  {
    img: hero1,
    subtitle: "Menuiserie aluminium, bois, fer & inox à Marrakech",
    title: "L'atqan, la qualité, dans les délais.",
    desc: "Portes, fenêtres, cuisines, placards et garde-corps sur mesure pour votre construction ou votre rénovation.",
  },
  {
    img: hero2,
    subtitle: "Ferronnerie & découpe laser",
    title: "Des portes en fer qui signent la maison.",
    desc: "Portes de sécurité, clôtures et motifs découpés au laser, réalisés à la mesure exacte de votre ouverture.",
  },
  {
    img: hero3,
    subtitle: "Inox de finition premium",
    title: "Garde-corps et rambardes impeccables.",
    desc: "Un inox brossé ou poli miroir, posé au millimètre, pour des escaliers et terrasses durables.",
  },
];

export const FEATURES = [
  { title: "Mesures sur mesure", desc: "Chaque pièce est fabriquée aux dimensions exactes de votre espace." },
  { title: "Designs modernes", desc: "Une esthétique contemporaine adaptée au neuf comme à la rénovation." },
  { title: "Délais garantis", desc: "Livraison à la date convenue. Pas de retard, pas de mauvaise surprise." },
];

export const SERVICES = [
  {
    img: svcAlu,
    title: "Aluminium",
    desc: "Portes et fenêtres modernes à rupture thermique, isolation acoustique et thermique, façades et vitrines.",
    items: ["Fenêtres & baies coulissantes", "Portes d'entrée aluminium", "Façades et devantures"],
  },
  {
    img: about2,
    title: "Menuiserie bois",
    desc: "Cuisines équipées, placards en MDF ou chêne massif et portes intérieures dessinées pour votre intérieur.",
    items: ["Cuisines équipées", "Placards MDF & chêne", "Portes intérieures sur mesure"],
  },
  {
    img: hero2,
    title: "Ferronnerie",
    desc: "Portes en fer découpées au laser, portails et clôtures de sécurité au dessin personnalisé.",
    items: ["Découpe laser", "Portes de sécurité", "Portails & clôtures"],
  },
  {
    img: hero3,
    title: "Inox",
    desc: "Rambardes d'escalier, garde-corps de terrasse et mains courantes en inox de finition premium.",
    items: ["Garde-corps d'escalier", "Rambardes de terrasse", "Finitions brossé / miroir"],
  },
];

export const STEPS = [
  { n: "01", title: "Visite et consultation gratuites", desc: "On se déplace chez vous, on prend les mesures et on écoute votre projet." },
  { n: "02", title: "Devis clair et plan de travail", desc: "Prix ferme, matériaux détaillés et date de livraison engagée par écrit." },
  { n: "03", title: "Fabrication et pose", desc: "Atelier sur mesure, pose propre et finitions vérifiées avant réception." },
];

export const PROJECTS = [
  { img: proj1, cat: "Aluminium", title: "Baies coulissantes — Villa, Route de l'Ourika" },
  { img: proj2, cat: "Bois", title: "Placards sur mesure — Appartement, Gueliz" },
  { img: proj3, cat: "Ferronnerie", title: "Portail et clôture — Villa, Targa" },
];

export const FAQ = [
  {
    q: "Un seul artisan pour tous les corps de métier",
    a: "Aluminium, bois, fer et inox sont réalisés par la même équipe. Vous n'avez pas à coordonner plusieurs fournisseurs : un seul interlocuteur, un seul planning, une seule responsabilité.",
  },
  {
    q: "Mesures précises, zéro reprise",
    a: "Chaque ouverture est relevée sur place avant fabrication. Les pièces arrivent aux bonnes dimensions et la pose se fait sans retouche ni dégât sur vos murs.",
  },
  {
    q: "Consultation et devis gratuits",
    a: "La visite technique, les conseils de conception et le devis détaillé sont offerts, sans engagement de votre part.",
  },
];

export const ZONES = [
  "Gueliz",
  "Hivernage",
  "Médina",
  "Targa",
  "Semlalia",
  "Massira",
  "Hay Mohammadi",
  "Route de Casablanca",
  "Route de l'Ourika",
  "Amelkis",
  "Palmeraie",
  "Environs de Marrakech",
];

export const TESTIMONIALS = [
  {
    quote: "Cuisine et placards livrés à la date promise, au millimètre. Une finition qu'on ne voit pas souvent.",
    name: "Yassine B.",
    role: "Villa, Targa",
  },
  {
    quote: "Ils ont refait toutes les fenêtres en aluminium pendant la rénovation. Chantier propre, équipe sérieuse.",
    name: "Salma E.",
    role: "Riad, Médina",
  },
  {
    quote: "Le garde-corps en inox et la porte en fer découpée au laser donnent une autre allure à la maison.",
    name: "Karim A.",
    role: "Villa, Amelkis",
  },
];
