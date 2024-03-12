import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt"

const verifyTokenMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    try {
        const reqToken = req.headers.authorization || ""
        const token = reqToken.split(" ").pop()
        const isValidToken = verifyToken(`${token}`)
        if (!isValidToken){
            return "INVALID_TOKEN"
        }
        next()
    } catch (error) {
        res.send({error})
    }

}

export {verifyTokenMiddleWare}