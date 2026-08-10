import { BookOpenText, Code, LucideIcon, School } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  period: string;
  description: string;
  icon?: LucideIcon;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "current-professional-software",
    role: "Desarrollador FullStack",
    period: "2022 - Presente",
    description:
      "Liderazgo técnico en la arquitectura y desarrollo continuo de aplicaciones web empresariales en producción. Evolución e implementación de sistemas sobre un stack moderno con Next.js, PostgreSQL (Prisma ORM), Tailwind CSS y autenticación OAuth. Enfocado en transformar necesidades operativas en software robusto, mantenible y de alto impacto de negocio.",
    icon: Code,
  },
  {
    id: "personal-projects",
    role: "Desarrollador Autodidacta",
    period: "2020 - 2022",
    description:
      "Consolidación de habilidades a través del diseño y construcción de proyectos personales y prototipos funcionales. Profundización en el ecosistema de JavaScript/TypeScript, React y bases de datos relacionales, desarrollando una fuerte autonomía para resolver problemas técnicos, refactorizar código y aplicar mejores prácticas de UI/UX.",
    icon: BookOpenText,
  },
  {
    id: "origins",
    role: "Estudiante de Programación & Tecnología",
    period: "2018-2020",
    description:
      "Primer contacto formal con las ciencias de la computación, algoritmos y desarrollo de software. Formación integral orientada al liderazgo, lógica de programación, valores empresariales y dominio del idioma inglés, sentando las bases de la disciplina y mentalidad de crecimiento continuo que impulsan mi carrera actual.",
    icon: School,
  },
];
