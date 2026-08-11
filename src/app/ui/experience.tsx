import { ExperienceWrapper } from "@/components/shared/experience-wrapper";
import { TitleSection } from "@/components/shared/title-section";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section
      className="container my-20 mt-48 space-y-16 scroll-mt-20 animate-fade-scroll"
      id="experience"
    >
      <div>
        <TitleSection className="text-4xl">Experiencia</TitleSection>
      </div>

      <article>
        {EXPERIENCES.map((item) => (
          <ExperienceWrapper key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
}
