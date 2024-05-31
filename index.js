import { config } from "dotenv"
import express from "express"
import { databaseconnection } from "./data/database.js"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewares/error.middlewares.js"
import router from "./routers/user.routes.js"
config({ path: "./config/.env" })
const app = express()

// MIddlewares //
app.use(express.json())
databaseconnection()
app.use(cookieParser())
// Routers //
app.use("/api/user", router)
//Servers //
app.use(errorMiddleware)
app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`)
})
