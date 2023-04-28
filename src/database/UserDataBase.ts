import { TUserDB } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    public static TABLE_USERS="users";
    
   public async findUser(q:string | undefined){
        let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDataBase.connection(UserDataBase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDataBase.connection(UserDataBase.TABLE_USERS)
            usersDB = result
        }
        return usersDB
    }

    public async findUserById(id:string) : Promise<TUserDB>{
        const [ userDB]: TUserDB[] = await BaseDataBase.connection(UserDataBase.TABLE_USERS).where({ id })
     
        return userDB

    }

    public async insertUser(user:TUserDB){
        await BaseDataBase.connection(UserDataBase.TABLE_USERS).insert(user)

    }

 
}