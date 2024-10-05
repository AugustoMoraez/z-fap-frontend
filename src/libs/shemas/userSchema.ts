import { z } from "zod"

export const userSchema = z.object({
    id:z.string().optional(),
    name:z.string().min(2),
    email:z.string().email(),
    password:z.string().min(8).max(8),
    sectorID:z.string().optional(),
    position:z.string().default("undefined"),
    permissions: z.string().array().default(["Colaborador"]).optional(),
    active:z.boolean().default(false),
})
export type userType = z.infer<typeof userSchema>

