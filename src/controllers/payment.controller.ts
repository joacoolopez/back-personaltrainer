import "dotenv/config"
import { Request, Response } from "express";
const paymentService = require ("../services/payment.service")

const createOrder = async (req:Request, res: Response) => {
    try {
        const data = req.body
        const response = await paymentService.createOrder(data)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
    
    }

const webhook = async (req:Request, res: Response) => {
    try {
        const response = await paymentService.webhook(req)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
    
}

export {createOrder, webhook}