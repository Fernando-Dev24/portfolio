import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeSwitcher } from "./theme-switcher";

const links = [
  {
    url: "#projects",
    label: "Proyectos",
  },
  {
    url: "#skills",
    label: "Habilidades",
  },
  {
    url: "#experience",
    label: "Experiencia",
  },
  {
    url: "#contact",
    label: "Contacto",
  },
];

export const Navbar = () => {
  return (
    <header className="container fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 bg-background py-3 flex items-center justify-between border-b border-border">
      <p className="text-accent-foreground">Fernando Ortiz</p>

      <nav>
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={buttonVariants({ variant: "link" })}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <ThemeSwitcher />
    </header>
  );
};
