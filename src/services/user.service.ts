import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, isValidPassword } from "../utils/crypt";
import { generateToken } from "../utils/jwt";

const register = async (user:User) => {
    const {mail, password} = user
    const isRegistered = await UserModel.findOne({mail})

    if (isRegistered){
        return "USER_ALREADY_EXIST"
    }
    const encryptPassword = await encrypt(password)
    console.log(encryptPassword)
    const newUser = await UserModel.create({mail, password:encryptPassword})

    return mail
}

const login = async (body:User) => {
    const {mail, password} = body
    const user = await UserModel.findOne({mail})
    if (!user){
        return "USER_NOT_EXIST"
    }
    
    const hashPassword = user.password
    const isValid = await isValidPassword(password, hashPassword)

    if (!isValid){
        return "INCORRECT_PASSWORD"
    }

    const id = user._id.toString()
    const token = generateToken(id)

    return {token}
}

module.exports = {register, login}
