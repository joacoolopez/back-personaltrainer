import express from "express";
import dbConnection from "./config/mongo";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/payment", require("./routes/payment.routes"))
app.use("/api/user", require("./routes/user.routes"))
app.use("/api/students", require("./routes/student.routes"))
app.use("/api/movements", require("./routes/movement.routes"))
app.use("/api/plan", require("./routes/planDeEntrenamiento.routes"))


dbConnection().then(() => {
    console.log("Database running")
  })
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })