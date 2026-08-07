import { ProjectCard } from "@/components/shared/project-card";
import { TitleSection } from "@/components/shared/title-section";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/data";

export function Projects() {
  return (
    <section className="container my-20 md:max-w-[90%] animate-fade-in-right animate-fill-mode-both">
      <TitleSection className="text-4xl">Proyectos destacados</TitleSection>

      {/* Carousel */}
      <Carousel className="my-8 animate-fade-in-right animate-fill-mode-both">
        <CarouselContent>
          {PROJECTS.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3">
              <ProjectCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
