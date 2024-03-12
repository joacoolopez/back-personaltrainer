import {Schema, model} from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User> ({
    mail: String,
    password: String
})

const UserModel = model("User", UserSchema)

export default UserModel