import { Request, Response } from "express";
const userService = require ("../services/user.service.ts")

const register = async (req:Request, res:Response) => {
    try {
        const user = req.body
        const response = await userService.register(user)
        res.send({response})
    } catch (error) {
        res.send({error})
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const user = req.body
        const response = await userService.login(user)
        res.send(response)
    } catch (error) {
        res.send({error})
    }
}

export {register, login}