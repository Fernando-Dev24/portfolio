import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="container -mt-20 md:max-w-[60%] flex flex-col items-center space-y-5 animate-fade-in-up">
      <Badge variant={"outline"}>
        <div data-icon="inline-start">
          <div className="size-2 bg-primary rounded-full animate-pulse repeat-infinite" />
        </div>
        Disponible para nuevos proyectos
      </Badge>

      <div className="space-y-4 text-center flex flex-col items-center">
        <figure>
          <Image
            src="/dev-profile.webp"
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-full border border-primary"
          />
        </figure>

        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
          Construyo soluciones de software{" "}
          <span className="text-chart-2">escalables</span>
        </h1>

        <p className="text-muted-foreground">
          <strong>
            Desarrollador Full Stack & Frontend especializado en React y
            Next.js.
          </strong>{" "}
          Especializado en transformar necesidades complejas en aplicaciones
          funcionales de alto impacto. Autodidacta, rápido aprendizaje y
          fuertemente enfocado en la lógica de negocio.
        </p>
      </div>

      <div className="space-x-5">
        <Button>Ver Proyectos</Button>
        <Button variant={"outline"}>Contactar</Button>
      </div>
    </section>
  );
}
