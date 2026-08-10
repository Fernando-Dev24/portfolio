import { ComingSoonProject } from "@/data";
import { Card, CardContent } from "../ui/card";
import { ClockFading } from "lucide-react";

export const ComingSoonCard = (data: ComingSoonProject) => {
  return (
    <Card className="relative h-full mx-auto pt-0 brightness-90 dark:brightness-80 grayscale border border-dashed">
      <CardContent className="h-full flex flex-col items-center justify-center">
        <ClockFading className="size-12" />
        <h4>{data.title}</h4>
        <p className="text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  );
};
