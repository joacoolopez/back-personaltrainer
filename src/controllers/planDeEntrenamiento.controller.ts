import { Request, Response } from "express"
const planDeEntrenamientoService = require("../services/planDeEntrenamiento.service")

const getPrice = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const response = await planDeEntrenamientoService.getPrice(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

const updatePrice = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {price} = req.body
        const response = await planDeEntrenamientoService.updatePrice(id, price)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

const postPlan = async (req:Request, res:Response) => {
    try {
        const {id, name, price} = req.body
        const response = await planDeEntrenamientoService.postPlan(id, name, price)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

const getPlanName = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const response = await planDeEntrenamientoService.getPlanName(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

export {getPrice, updatePrice, postPlan, getPlanName}