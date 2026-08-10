import { TitleSection } from "@/components/shared/title-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <section className="container my-20 mt-48 md:max-w-[90%] animate-fade-in-up space-y-5">
      <div>
        <TitleSection className="text-4xl">Habilidades</TitleSection>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {SKILLS.map((skill) => (
          <Card key={skill.id}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                {skill.icon && <skill.icon />}
                <CardTitle>{skill.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-x-2 space-y-2">
              {skill.tags.map((tag) => (
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
