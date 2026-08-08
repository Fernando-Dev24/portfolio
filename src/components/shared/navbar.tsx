import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const links = [
  {
    url: "/proyectos",
    label: "Proyectos",
  },
  {
    url: "/habilidades",
    label: "Habilidades",
  },
  {
    url: "/experiencia",
    label: "Experiencia",
  },
  {
    url: "/contacto",
    label: "Contacto",
  },
];

export const Navbar = () => {
  return (
    <header className="container fixed top-0 left-0 w-full z-30 bg-background py-3 flex items-center justify-between border-b border-border">
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
