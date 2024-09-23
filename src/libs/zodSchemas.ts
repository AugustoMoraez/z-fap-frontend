import { z } from "zod";

export const userSchema = z.object({
    name:z.string().min(2),
    email:z.string().email("formato de email invalido"),
    password:z.string().min(8,"precisa de 8 caracteres").max(8),
    sectorID:z.string().uuid(),
    position:z.string(),
})
export type userRegisterSchemaType = z.infer<typeof userSchema>

export const userRegisterSchema = z.object({
    name:z.string().min(2),
    email:z.string().email("formato de email invalido"),
    email_repeat:z.string().email("formato de email invalido"),
    password:z.string().min(8,"precisa de 8 caracteres").max(8),
    password_repeat:z.string().min(8,"precisa de 8 caracteres").max(8),
})

export type userRegisterType = z.infer<typeof userRegisterSchema>