import { hash, compare } from "bcrypt"

const encrypt = async (password:string) => {
    const encryptPassword = await hash(password, 8)
    return encryptPassword
}

const isValidPassword = async (password:string, hashPassword:string) => {
    const valid = await compare(password, hashPassword)
    return valid
}

export {encrypt, isValidPassword}