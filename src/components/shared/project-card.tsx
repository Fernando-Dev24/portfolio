import { StandardProject } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const ProjectCard = (data: StandardProject) => {
  return (
    <Card className="relative h-full mx-auto pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={data.thumbnail}
        alt="card project thumbnail"
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-x-2">
        {data.tags.map((tag) => (
          <Badge variant={"secondary"} key={tag}>
            {tag}
          </Badge>
        ))}
      </CardContent>
      {(data.liveUrl || data.studyCaseUrl) && (
        <CardFooter className="space-x-3">
          {data.liveUrl && (
            <Link
              href={data.liveUrl}
              className={buttonVariants({ variant: "default" })}
            >
              Ver
            </Link>
          )}

          {data.studyCaseUrl && (
            <Link
              href={data.studyCaseUrl}
              className={buttonVariants({ variant: "secondary" })}
            >
              Ver caso de estudio
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
