import { ComingSoonCard } from "@/components/shared/coming-soon-card";
import { ProjectCard } from "@/components/shared/project-card";
import { TitleSection } from "@/components/shared/title-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/data";

export function Projects() {
  return (
    <section
      className="container my-20 scroll-mt-20 animate-fade-scroll"
      id="projects"
    >
      <div>
        <TitleSection className="text-4xl">
          Proyectos <span className="text-chart-2">destacados</span>
        </TitleSection>
        <p className="text-muted-foreground">Desliza para visualizar</p>
      </div>

      {/* Carousel */}
      <Carousel className="my-8">
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
      </Carousel>
    </section>
  );
}
