import { z } from "zod";

export interface CreateProductInputDTO {
    id: string;
    name: string;
    price: number;
  }
  
  // envia informações
  export interface CreateProductOutputDTO {
    message: string;
    product: {
      id: string;
      name: string;
      price: number;
      createdAt: string
    };
  }

  export const CreateProductSchema = z.object({
    id: z.string({invalid_type_error: "id deve ser do tipo string", required_error: "'id' é obrigatório",}).min(4), 
    name: z.string({invalid_type_error: "name deve ser do tipo string", required_error: "'name' é obrigatório",}).min(2), 
    price: z.number({invalid_type_error: "price deve ser um número", required_error: "'price' é obrigatório",}).positive({message:"preço deve ser maior que zero"}).gte(0)
}).transform(data => data as CreateProductInputDTO)