import "dotenv/config"
import {MercadoPagoConfig, Payment, Preference} from "mercadopago";
import { Request } from "express";
import { Resend } from 'resend';
const accessTokenMP = process.env.ACCESS_TOKEN_MP as string
import StudentModel from "../models/student";
import MovementModel from "../models/movements";


const createOrder = async (data:any) => {
    const client = new MercadoPagoConfig({ accessToken:  accessTokenMP});
    const preference = new Preference(client);

    //consultar data.plan en bdd para definir title y precio

    const result = await preference.create({ body: {
        items: [
            {
                id: '123',
                title: 'PLAN DE ENTRENAMIENTO SUPERPRUEBA',
                quantity: 1,
                unit_price: 100
            }
        ],
        metadata: {
            name: data.name,
            lastname:data.lastname,
            phone: data.phone,
            email: data.mail,
        },
        //notification_url: "https://c42b-181-111-72-224.ngrok-free.app/api/payment/webhook"   
    } })

            //console.log(result)
    console.log(result.id)
    return(result.id)

    }

const webhook = async (req:Request) => {
    try {
        const client = new MercadoPagoConfig({ accessToken:  accessTokenMP});
        const payment = new Payment(client);
        const raw = req.query
        const data = await payment.get({
            id: raw["data.id"] as string,
        })
        console.log("movimiento")
        const movement = await MovementModel.create({
            mail: data.metadata.email,
            plan: data.description,
            platform: "mercadopago",
            amount: data.transaction_details?.total_paid_amount,
            currency: data.currency_id,
            state: data.status
        })

        if (data.status === "approved"){
            const student = await StudentModel.findOne({ mail: data.metadata.email });

        if (student) {
            const updatedStudent = await StudentModel.findOneAndUpdate(
                { mail: data.metadata.email },
                { $push: { plans: {
                    planName: data.description,
                    purchaseDate: Date.now(),
                    sent: false
                } } },
                { new: true }
            )
        } else {
            // El estudiante no existe, lo creamos con el nuevo plan
            const newStudent = await StudentModel.create({
                mail: data.metadata.email,
                name: data.metadata.name,
                lastname: data.metadata.lastname,
                phone: data.metadata.phone,
                plans: [{
                    planName: data.description,
                    purchaseDate: Date.now(),
                    sent: false
                }]
            })
            }

        return raw
    } 
    
}catch (error) {
    console.log(error)
}
}

module.exports = {createOrder, webhook}