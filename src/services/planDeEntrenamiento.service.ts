import PlanDeEntrenamientoModel from "../models/planDeEntrenamiento"

const getPrice = async (id:number) => {
    const plan = await PlanDeEntrenamientoModel.findOne({id})

    if (!plan){
        return "PLAN_NOT_EXIST"
    }
    const price = plan.price
    
    return {price}
}

const updatePrice = async (id:number, newPrice:number) => {
    const updatedPlan = await PlanDeEntrenamientoModel.findOneAndUpdate({id}, {$set:{price:newPrice}}, { new: true })

    if (!updatedPlan){
        return "PLAN_NOT_EXIST"
    }

    return updatedPlan
}

const postPlan = async (id:number, name:string, price:number) => {
    const plan = await PlanDeEntrenamientoModel.findOne({id})

    if (plan){
        return "PLAN_ALREADY_EXIST"
    }

    const newPlan = await PlanDeEntrenamientoModel.create({id, name, price})

    return newPlan
}

const getPlanName = async (id:number) => {
    const plan = await PlanDeEntrenamientoModel.findOne({id})

    if (!plan){
        return "PLAN_NOT_EXIST"
    }
    const name = plan.name
    
    return {name}
}

module.exports = {getPrice, updatePrice, postPlan, getPlanName}