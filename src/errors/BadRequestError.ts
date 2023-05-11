import { BaseError } from "./BaseError";

export const ID_INVALID= "'id' deve ser string "

export class BadRequestError extends BaseError{
    constructor(
        message: string= "Requisição Invalida"
    ){
        super( 400, message)
    }
}