import { Schema, model } from "mongoose";

const MovementSchema = new Schema({
    mail: {type: String, required: true},
    plan: {type: String, required: true},
    platform: {type: String, required: true},
    amount: {type: String, required: true},
    currency: {type: String, require: true},
    state: {type: String, required: true},
}, 
{timestamps: true},
)

const MovementModel = model("Movement", MovementSchema)
export default MovementModel