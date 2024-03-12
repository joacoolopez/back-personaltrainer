import StudentModel from "../models/student"

const getStudents = async () => {
  const students = await StudentModel.find()
  return students
}

const setSendStudent = async (studentId:string, planId:string) => {
    const student = await StudentModel.findById(studentId)

    if (!student){
        return "STUDENT_NOT_EXIST"
    }
    const plan = await student.plans.find(plan => plan._id.toString() === planId);

    if (!plan){
        return "PLAN_NOT_EXIST"
    }

    plan.sent = true;
    await student.save();

    return plan
}

module.exports = {getStudents, setSendStudent}