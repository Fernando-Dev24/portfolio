"use client";

import { TitleSection } from "@/components/shared/title-section";
import { useForm } from "react-hook-form";
import { SendMeEmailSchema, SendMeFormType } from "../core/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { InputField, TextareaField } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Send } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export default function Contact() {
  const { control, handleSubmit } = useForm<SendMeFormType>({
    resolver: zodResolver(SendMeEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: SendMeFormType) => {
    console.log({ values });
  };

  return (
    <section className="container my-20 mt-48 md:max-w-[50%]! space-y-10">
      <div className="text-center">
        <TitleSection className="text-primary! uppercase text-3xl">
          ¿Tienes un proyecto o una vacante en mente?
        </TitleSection>
        <p className="text-muted-foreground">
          Hablemos sobre cómo puedo aportar valor a tu equipo o empresa.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="space-y-5">
            <InputField
              control={control}
              name="name"
              label="Tu nombre"
              placeholder="ej. Joh Doe"
            />

            <InputField
              control={control}
              name="email"
              label="Tu correo electrónico"
              placeholder="ej. correo@correo.com"
            />

            <TextareaField
              control={control}
              name="message"
              label="Tu mensaje"
              placeholder="ej. Tengo una idea de negocio..."
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? <Spinner /> : <Send />}
              {isPending ? "Enviando..." : "Enviar"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
