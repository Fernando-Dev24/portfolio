import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Menu } from "lucide-react";

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
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 bg-background border-b border-border">
      <div className="container py-3 flex items-center justify-between">
        <p className="text-accent-foreground font-semibold text-base">
          Fernando Ortiz
        </p>

        <nav className="hidden md:block">
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

        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

        <div className="block md:hidden">
          <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button variant={"ghost"} />}>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>

              <div className="px-1.5 space-y-5">
                <nav className="flex flex-col items-start">
                  {links.map((link) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className={`${buttonVariants({
                        variant: "link",
                        size: "lg",
                      })}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <ThemeSwitcher />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
