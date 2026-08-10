import { Experience } from "@/data/experience";
import { Separator } from "../ui/separator";

export const ExperienceWrapper = (data: Experience) => {
  return (
    <div className="flex flex-col items-start justify-start space-y-3 py-20 md:flex-row md:items-center md:justify-center md:space-x-20">
      {/* ROLE */}
      <div className="w-full md:w-[40%] flex items-center justify-between md:space-x-5 md:justify-end">
        <div className="md:text-right">
          <p className="text-chart-2 text-xl font-semibold">{data.role}</p>
          <p className="text-muted-foreground">{data.period}</p>
        </div>

        {data.icon && (
          <data.icon className="p-2 size-10 rounded-full bg-primary text-primary-foreground" />
        )}
      </div>

      <Separator orientation="vertical" />

      {/* DESCRIPTION */}
      <div className="md:w-[60%]">
        <p className="text-muted-foreground">{data.description}</p>
      </div>
    </div>
  );
};
