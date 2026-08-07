export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  thumbnail: string;
  studyCaseUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "avaluos-callejas",
    title: "Avaluos Callejas",
    description: "Plataforma integral para gestión y cálculo de avalúos.",
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "PostgreSQL"],
    liveUrl: "https://avaluos-callejas.com",
    thumbnail: "/projects/avaluos-callejas/thumbnail.webp",
    studyCaseUrl: "/projects/avaluos-callejas",
  },
  {
    id: "hojas-liquidaciones",
    title: "Hojas de Liquidaciones",
    description:
      "Sistema de gestión de liquidaciones y presupuesto para instituciones educativas en El Salvador",
    tags: ["Vite", "TypeScript", "TailwindCSS", "Firebase"],
    thumbnail: "/projects/hojas-liquidaciones/thumbnail.png",
  },
];
