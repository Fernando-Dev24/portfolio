import { Code, Database, LucideIcon, SquareTerminal } from "lucide-react";

export interface Skill {
  id: string;
  title: string;
  tags: string[];
  icon?: LucideIcon;
}

export const SKILLS: Skill[] = [
  {
    id: "frontend",
    title: "Frontend",
    tags: ["React", "Nextjs", "Typescripts", "TailwindCSS", "Tanstack Stack"],
    icon: Code,
  },
  {
    id: "backend-bd",
    title: "Backend & BD",
    tags: ["NodeJS", "Express", "PostgreSQL", "REST APIs", "Prisma/ORMs"],
    icon: Database,
  },
  {
    id: "tools",
    title: "Herramientas",
    tags: ["Git", "GitHub", "Vercel", "Postman", "Docker"],
    icon: SquareTerminal,
  },
];
