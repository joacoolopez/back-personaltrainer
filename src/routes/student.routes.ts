import { Router } from "express";
import { getStudents, setSendStudent } from "../controllers/student.controller";
import { verifyTokenMiddleWare } from "../middlewares/verifyToken";

const router = Router()

router.get('/', getStudents)
router.put('/update/:studentId/plans/:planId', verifyTokenMiddleWare, setSendStudent)


module.exports = router