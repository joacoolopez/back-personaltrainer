import { Request, Response } from "express";
const studentService = require("../services/student.service")

const getStudents = async (req:Request, res: Response) => {
    try {
        const students = await studentService.getStudents()
        res.send(students)
    } catch (error) {
        res.send(error)
    }
}

const setSendStudent = async (req:Request, res: Response) => {
    try {
        const { studentId, planId } = req.params;
        const response = await studentService.setSendStudent(studentId, planId)
        res.send(response)
        
    } catch (error) {
        res.send(error)
    }
}

export {getStudents, setSendStudent}
