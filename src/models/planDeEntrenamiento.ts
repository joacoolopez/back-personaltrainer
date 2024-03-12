import { Schema, model } from "mongoose";
import { PlanDeEntrenamiento } from "../interfaces/planDeEntrenamiento.interface";


const PlanDeEntrenamientoSchema = new Schema<PlanDeEntrenamiento>({
    id: Number,
    name: String,
    price: Number
})

const PlanDeEntrenamientoModel = model("PlanDeEntrenamiento", PlanDeEntrenamientoSchema)

export default PlanDeEntrenamientoModel