import z from "zod";

// recebe informações
export interface EditProductInputDTO {
  idToEdit: string;
  id?: string;
  name?: string;
  price?: number;
}

// envia informações
export interface EditProductOutputDTO {
  message: string;
  product: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
  };
}


// código anterior dos DTOs aqui <<< (CreateUserInputDTO e CreateUserOutputDTO)

// validar entrada
export const EditProductSchema = z.object({
    idToEdit:z.string().min(4),
    id: z.string({invalid_type_error: "id deve ser do tipo string"}).min(4).optional(), 
    name: z.string({invalid_type_error: "name deve ser do tipo string"}).min(2).optional(), 
    price: z.number({invalid_type_error: "price deve ser um número"}).positive({message:"preço deve ser maior que zero"}).gte(0).optional()
}).transform(data => data as EditProductInputDTO)
