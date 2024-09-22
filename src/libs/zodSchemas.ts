import { z } from "zod";

export const userRegisterSchema = z.object({
    name:z.string().nonempty().min(2),
    email:z.string().nonempty().email("formato de email invalido"),
    email_repeat:z.string().nonempty().email("formato de email invalido"),
    password:z.string().nonempty().min(8,"precisa de 8 caracteres").max(8),
    password_repeat:z.string().nonempty().min(8,"precisa de 8 caracteres").max(8),
    sectorID:z.string().nonempty().uuid(),
    position:z.string().nonempty(),
})
export type userRegisterSchemaType = z.infer<typeof userRegisterSchema>