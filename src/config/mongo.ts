import "dotenv/config"
import { connect } from "mongoose"

const dbConnection = async () => {
    const DB_URI= <string>process.env.DB_URI
    await connect(DB_URI)
}
export default dbConnection