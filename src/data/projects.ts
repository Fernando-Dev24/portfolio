export interface StandardProject {
  type: "project";
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  thumbnail: string;
  studyCaseUrl?: string;
}

export interface ComingSoonProject {
  type: "coming-soon";
  id: string;
  title: string;
  description: string;
}

export type CarouselItemData = StandardProject | ComingSoonProject;

export const PROJECTS: CarouselItemData[] = [
  {
    type: "project",
    id: "avaluos-callejas",
    title: "Avaluos Callejas",
    description: "Plataforma integral para gestión y cálculo de avalúos.",
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "PostgreSQL"],
    liveUrl: "https://avaluos-callejas.com",
    thumbnail: "/projects/avaluos-callejas/thumbnail.webp",
    studyCaseUrl: "/projects/avaluos-callejas",
  },
  {
    type: "project",
    id: "hojas-liquidaciones",
    title: "Hojas de Liquidaciones",
    description:
      "Sistema de gestión de liquidaciones y presupuesto para instituciones educativas en El Salvador",
    tags: ["Vite", "TypeScript", "TailwindCSS", "Firebase"],
    thumbnail: "/projects/hojas-liquidaciones/thumbnail.png",
  },
  {
    type: "coming-soon",
    id: "coming-soon",
    title: "Proximamente",
    description: "Nuevos retos y projectos están por venir",
  },
];
