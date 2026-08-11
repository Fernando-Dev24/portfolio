import z from "zod";

export const SendMeEmailSchema = z.object({
  name: z.string().min(2, "El nombre no cumple con los requesitos"),
  email: z.email("Correo electrónico no válido."),
  message: z
    .string()
    .min(15, "El contenido del mensaje debe de tener al menos 15 caracteres"),
});

export type SendMeFormType = z.infer<typeof SendMeEmailSchema>;
