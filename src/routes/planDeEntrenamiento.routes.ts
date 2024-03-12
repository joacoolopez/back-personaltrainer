import { Router } from "express";
import { verifyTokenMiddleWare } from "../middlewares/verifyToken";
import { getPlanName, getPrice, postPlan, updatePrice } from "../controllers/planDeEntrenamiento.controller";


const router = Router()

router.post('/', postPlan)
router.get('/name/:id', getPlanName)
router.put('/price/:id', updatePrice)
router.get('/price/:id', getPrice)

module.exports = router