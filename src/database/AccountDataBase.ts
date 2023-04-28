import { TAccountDB } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class AccountDataBase extends BaseDataBase{
   public static TABLE_ACCOUNT= "accounts";
 

    public async findAccount (){   
        const result: TAccountDB[] = await BaseDataBase.connection(AccountDataBase.TABLE_ACCOUNT)
        return result;   
    }

    public async findAccountById(id:string){
        const [ accountDB ]: TAccountDB[] | undefined[] = await BaseDataBase.connection(AccountDataBase.TABLE_ACCOUNT).where({ id })
        return accountDB;
    }

    public async insertAccount(account:TAccountDB){
    await BaseDataBase.connection(AccountDataBase.TABLE_ACCOUNT).insert(account);
    }

    public async editAccount(newBalance:number, id:string){
     await BaseDataBase.connection(AccountDataBase.TABLE_ACCOUNT).update({ balance: newBalance }).where({ id })
    }
  
  
}