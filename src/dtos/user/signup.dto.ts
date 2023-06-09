import z from "zod"
import { USER_ROLES } from "../../models/User"

export interface SignupInputDTO {
  // id: string,
  name: string,
  email: string,
  password: string,
  isADM: boolean
}

export interface SignupOutputDTO {
  message: string,
  token: string
}

export const SignupSchema = z.object({
  // id: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4),
  isADM:z.boolean().default(false).optional()
}).transform(data => data as SignupInputDTO)