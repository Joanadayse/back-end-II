import express from 'express'
import { UserController } from '../controller/UserController'

export const useRouter= express.Router()
const userController= new UserController()

useRouter.get("/", userController.getUsers)
useRouter.post("/", userController.createUser)


