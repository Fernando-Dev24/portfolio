"use server";

import { resend } from "@/lib/resend";
import { SendMeEmailSchema, SendMeFormType } from "../schemas";

export async function sendEmail(values: SendMeFormType) {
  // validate
  const { success, data } = SendMeEmailSchema.safeParse(values);
  if (!success || !data) {
    return {
      success: false,
      message: "Valida los campos del formulario",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "fernandodev.ortiz@gmail.com",
      template: {
        id: "portfolio-contact",
        variables: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      },
    });

    if (error) {
      throw new Error("Error al enviar el mensaje");
    }

    return {
      success: true,
      message: "Tu mensaje se ha enviado correctamente",
    };
  } catch (error) {
    return {
      success: false,
      message: "Ha ocurrido un error al enviar",
    };
  }
}
