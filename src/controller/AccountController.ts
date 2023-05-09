import { Request, Response } from "express";
import { AccountDatabase } from "../database/AccountDatabase";
import { Account } from "../models/Account";
import { AccountDB } from "../types";
import { AccountBusiness } from "../business/AccountBusiness";

export class AccountController {
  public getAccounts = async (req: Request, res: Response) => {
    try {
      const accountBusines = new AccountBusiness();
      const result: Account[] = await accountBusines.getAccount();
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

  public getAccountBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const accountBussines = new AccountBusiness();
      const balance = await accountBussines.getAccountBalance(id);
      res.status(200).send({ balance });
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

  public createAccount = async (req: Request, res: Response) => {
    try {
      const input: AccountDB = {
        id: req.body.id,
        owner_id: req.body.ownerId,
        created_at: req.body.created_at,
        balance: req.body.balance,
      };

      const accountBussines = new AccountBusiness();
      const result = await accountBussines.createAccount(input);

      res.status(201).send({ message: "criado com sucesso!", account: result });
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

  public editAccountBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const value = req.body.value;

      const accountBussiness= new AccountBusiness();
    const result= await accountBussiness.editAccount(id,value)

      res.status(200).send({message:"saldo atualizado", result});
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
