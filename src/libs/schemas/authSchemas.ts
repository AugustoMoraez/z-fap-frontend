import { z } from "zod";

//Formulario de login
export const userLoginSchema = z.object({
    email: z.string().email("Email invalido"),
    password: z.string().min(8, "Minimo de 8 caracteres").max(8).min(8),
})

export type userLoginType = z.infer<typeof userLoginSchema>

//Formulario de registro
export const userRegisterSchema = z.object({
    name: z.string().min(2),
    email: z.string().email("formato de email invalido"),
    email_repeat: z.string().email("formato de email invalido"),
    password: z.string().min(8, "precisa de 8 caracteres").max(8),
    password_repeat: z.string().min(8, "precisa de 8 caracteres").max(8),
})

export type userRegisterType = z.infer<typeof userRegisterSchema>

// activateUserSchema
export const userActivateSchema = z.object({
    id: z.string(),
    sectorID: z.string().nonempty(),
    position: z.string().nonempty(),
    permissions: z.string().nonempty()
})
export type activateUserType = z.infer<typeof userActivateSchema>