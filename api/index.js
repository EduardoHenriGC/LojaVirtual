import express from "express"

import Xing from "./routes/produtos.js"

import cors from "cors"



const app = express()

app.use(express.json())
app.use(cors())

app.use("/", Xing)

app.listen(8800)