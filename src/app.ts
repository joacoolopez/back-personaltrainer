import express from "express";
import {dbConnection} from "./config/mongo";
import cors from "cors"
import paymentRoutes from "./routes/payment.routes";
import userRoutes from "./routes/user.routes";
import studentRoutes from "./routes/student.routes";
import movementRoutes from "./routes/movement.routes";
import planDeEntrenamientoRoutes from "./routes/planDeEntrenamiento.routes";

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/payment", paymentRoutes)
app.use("/api/user", userRoutes)
app.use("/api/students", studentRoutes);
app.use("/api/movements", movementRoutes);
app.use("/api/plan", planDeEntrenamientoRoutes);


dbConnection().then(() => {
    console.log("Database running")
  })
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })