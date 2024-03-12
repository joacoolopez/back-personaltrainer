import { Router } from "express";
import {getMovements} from "../controllers/movement.controller";
import { verifyTokenMiddleWare } from "../middlewares/verifyToken";

const router = Router()

router.get('/', verifyTokenMiddleWare, getMovements)

module.exports = router