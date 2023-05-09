import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { UserDB, UserDBPost } from "../types";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const q = req.query.q as string | undefined;

      const userBusiness = new UserBusiness();
      const result = await userBusiness.getUsers(q);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };

  public createUser = async (req: Request, res: Response) => {
    try {
      const { id, name, email, password } = req.body;

      const input: UserDBPost = {
        id,
        name,
        email,
        password,
      };

    //   informação vinda da bussiness e sendo usada na Controller
      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);


      res.status(201).send({message: "usuario criado com sucesso", users: input});
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
