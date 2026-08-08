import { ComingSoonCard } from "@/components/shared/coming-soon-card";
import { ProjectCard } from "@/components/shared/project-card";
import { TitleSection } from "@/components/shared/title-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/data";
import { ClockFading } from "lucide-react";

export function Projects() {
  return (
    <section className="container my-20 md:max-w-[90%] animate-fade-in-right animate-fill-mode-both">
      <div>
        <TitleSection className="text-4xl">
          Proyectos <span className="text-chart-2">destacados</span>
        </TitleSection>
        <p className="text-muted-foreground">
          Algunos de mis proyectos que me han hecho crecer como desarrollador de
          software.
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="my-8 animate-fade-in-right animate-fill-mode-both">
        <CarouselContent>
          {PROJECTS.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              {item.type === "project" ? (
                <ProjectCard {...item} />
              ) : (
                <ComingSoonCard {...item} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
