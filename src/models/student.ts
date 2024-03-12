import { Schema, model } from "mongoose";
import { Student } from "../interfaces/student.interface";
import { Plan } from "../interfaces/plan.interface";

const PlanSchema = new Schema<Plan>({
    planName: {type: String, required: true},
    purchaseDate: {type: Date, required: true},
    sent: {type: Boolean, required: false}
})

const StudentSchema = new Schema<Student>({
    mail: {type: String, required: true, unique: true},
    name:{type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: String, required: true},
    plans: {type: [PlanSchema], required: true}
}, 
{ timestamps: true })

const StudentModel = model("Student", StudentSchema)
export default StudentModel