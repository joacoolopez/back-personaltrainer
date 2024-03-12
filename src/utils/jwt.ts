import { sign, verify } from "jsonwebtoken"

const generateToken = (id:string) => {
    const token = sign({id}, process.env.JWT_SECRET as string)
    return token
}

const verifyToken = (token:string) => {
    const valid = verify(token, process.env.JWT_SECRET as string)
    return valid
}

export {generateToken, verifyToken}